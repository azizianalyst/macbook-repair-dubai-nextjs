import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { LeadSchema, type Lead } from "@/lib/lead-schema";
import { insertLead } from "@/lib/store";
import { mirrorLeadToCrm } from "@/lib/crm";
import { clientIp, rateLimit } from "@/lib/rate-limit";

// Needs the Node runtime (filesystem + nodemailer SMTP). Not edge-compatible.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Anti-spam: per-IP cap on this public endpoint. Tunable via env.
// 5/10min per IP was too tight for UAE carrier-grade NAT: Etisalat/du mobile users share one
// public IP, so a handful of genuine enquiries from different people could exhaust it and the
// form would refuse a real lead. 20 still stops a spam script (which submits hundreds) while
// leaving room for a shared IP. Override with LEAD_RATE_MAX if it ever needs tightening.
const RATE_MAX = Number(process.env.LEAD_RATE_MAX || 20);
const RATE_WINDOW_MS = Number(process.env.LEAD_RATE_WINDOW_MS || 10 * 60 * 1000);

type Channel = "sent" | "failed" | "skipped" | "pending";

// This endpoint had no Origin check at all, so any site could POST leads into the
// pipeline; only the per-IP rate limit stood in the way. Browsers always send Origin
// on a cross-origin POST, so rejecting a foreign one is free. A missing Origin (curl,
// server-to-server monitors) is allowed through - it is not a CSRF vector and blocking
// it would break the delivery canary. (audit 2026-09-23)
const ALLOWED_ORIGINS = new Set([
  "https://macbook-repair-dubai.ae",
  ...(process.env.LEAD_EXTRA_ORIGINS || "").split(",").map((o) => o.trim()).filter(Boolean),
]);

function originAllowed(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return process.env.NODE_ENV !== "production" && /^https?:\/\/localhost(:\d+)?$/.test(origin);
}

const LEADS_FILE = process.env.LEADS_FILE || path.join(process.cwd(), "data", "leads.jsonl");

// Append the lead to a JSONL log (one JSON object per line). This is the durable
// "background save". Returns false on failure (caller decides how to respond).
async function saveLead(record: object): Promise<boolean> {
  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(record) + "\n", "utf8");
    return true;
  } catch (err) {
    console.error("[lead] save failed:", err);
    return false;
  }
}

function emailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.LEAD_TO_EMAIL);
}

async function emailLead(lead: Lead, submittedAt: string): Promise<boolean> {
  if (!emailConfigured()) {
    console.warn("[lead] SMTP not configured - skipping email (lead still saved). Set SMTP_* + LEAD_TO_EMAIL.");
    return false;
  }
  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_SECURE ?? "true") !== "false", // 465 => true
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    const lines = [
      `New repair lead — ${new Date(submittedAt).toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (Dubai)`,
      ``,
      `DEVICE`,
      `  Type:    ${lead.deviceType}`,
      `  Model:   ${lead.model || "—"}`,
      `  Issue:   ${lead.issue}`,
      `  Details: ${lead.details || "—"}`,
      ``,
      `CONTACT`,
      `  Name:    ${lead.name}`,
      `  Phone:   ${lead.phone}`,
      `  Email:   ${lead.email || "—"}`,
      `  Prefers: ${lead.preferredContact}`,
      `  Area:    ${lead.area || "—"}`,
      ``,
      `Submitted from: ${lead.sourcePath || "—"}`,
    ];

    await transport.sendMail({
      from: process.env.LEAD_FROM_EMAIL || `"MacBook Repair Dubai" <${process.env.SMTP_USER}>`,
      to: process.env.LEAD_TO_EMAIL,
      replyTo: lead.email || undefined,
      // strip CR/LF defensively (nodemailer already prevents header injection)
      subject: `New lead: ${lead.deviceType}${lead.model ? " " + lead.model : ""} — ${lead.issue}`.replace(/[\r\n]+/g, " ").slice(0, 140),
      text: lines.join("\n"),
    });
    return true;
  } catch (err) {
    console.error("[lead] email failed:", err);
    return false;
  }
}

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false, error: "Forbidden origin" }, { status: 403 });
  }
  // Spam throttle (per IP) before doing any work.
  const rl = rateLimit(`lead:${clientIp(req)}`, RATE_MAX, RATE_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests — please try again shortly or message us on WhatsApp." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400 });
  }

  // Honeypot: silently accept (don't tip off bots) but drop.
  if (parsed.data.company) return NextResponse.json({ ok: true });

  const submittedAt = new Date().toISOString();
  // Email is optional (off unless SMTP_* is set). Done first so the stored record
  // reflects whether a notification went out.
  const emailed = await emailLead(parsed.data, submittedAt);
  const record = { ...parsed.data, submittedAt, emailed };

  // Storage: JSON file store (primary, powers the CRM) + a JSONL append as a cheap
  // backup. A lead survives if either store or the email succeeded.
  const leadId = await insertLead(record);
  const fileOk = await saveLead(record);

  // Copy to the Azizi CRM (Inbox › Enquiries). Still never decides the visitor's
  // outcome, but we now WAIT BRIEFLY for its verdict so the response can report it.
  // Previously this was `void mirrorLeadToCrm(...)`: if the CRM was down the endpoint
  // still answered {ok:true, emailed:true} and the failure existed only in a server
  // log nobody reads. A channel whose status is never reported is a channel that can
  // die silently - the exact failure this contract exists to prevent. The race keeps
  // the visitor's wait bounded (CRM measured ~0.7s; budget 2.5s), and a slow CRM
  // degrades to "pending" rather than blocking the form. (audit 2026-09-23)
  const CRM_BUDGET_MS = Number(process.env.LEAD_CRM_WAIT_MS || 2500);
  const crm: Channel = await Promise.race([
    mirrorLeadToCrm(parsed.data).then((ok): Channel => (ok ? "sent" : "failed")),
    new Promise<Channel>((r) => setTimeout(() => r("pending"), CRM_BUDGET_MS)),
  ]).catch((): Channel => "failed");

  const saved = leadId !== null || fileOk;
  if (!saved && !emailed && crm !== "sent") {
    return NextResponse.json({ ok: false, error: "Could not record your request" }, { status: 500 });
  }

  // Delivery contract: `id` proves it was STORED, `notified` proves a human was TOLD.
  // Without the per-channel breakdown a monitor cannot tell "delivered" apart from
  // "written to a table nobody reads".
  return NextResponse.json({
    ok: true,
    id: leadId,
    saved,
    emailed, // retained: existing callers/tests read this
    notified: {
      email: emailed ? "sent" : emailConfigured() ? "failed" : "skipped",
      crm,
    },
  });
}
