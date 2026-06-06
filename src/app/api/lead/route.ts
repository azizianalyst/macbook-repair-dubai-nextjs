import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { LeadSchema, type Lead } from "@/lib/lead-schema";
import { insertLead } from "@/lib/db";
import { insertLeadSqlite } from "@/lib/sqlite";
import { clientIp, rateLimit } from "@/lib/rate-limit";

// Needs the Node runtime (filesystem + nodemailer SMTP). Not edge-compatible.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Anti-spam: per-IP cap on this public endpoint. Tunable via env.
const RATE_MAX = Number(process.env.LEAD_RATE_MAX || 5);
const RATE_WINDOW_MS = Number(process.env.LEAD_RATE_WINDOW_MS || 10 * 60 * 1000);

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

  // Storage: SQLite is the primary embedded store (no credentials). MySQL is used
  // only if DB_* is configured. The JSONL file is a cheap local backup. A lead
  // survives if ANY store (or email) succeeded.
  const sqliteOk = insertLeadSqlite(record);
  const dbOk = await insertLead(record);
  const fileOk = await saveLead(record);

  if (!sqliteOk && !dbOk && !fileOk && !emailed) {
    return NextResponse.json({ ok: false, error: "Could not record your request" }, { status: 500 });
  }
  return NextResponse.json({ ok: true, saved: sqliteOk || dbOk || fileOk, emailed });
}
