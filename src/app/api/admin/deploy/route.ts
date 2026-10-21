import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { deployConfigured, runHostingerDeploy } from "@/lib/hostinger-deploy";

// Owner-only one-click Publish. Preferred: a direct Hostinger deploy — the running Node app zips its own
// source (incl. the live data store with admin edits) and triggers a Hostinger rebuild (needs
// HOSTINGER_API_TOKEN in the server env). Fallback: a deploy WEBHOOK (DEPLOY_WEBHOOK_URL → CI hook).
// If neither is set, returns guidance (owner can still ask the developer to "deploy"). See /admin/publish.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

// In-process guard so a double-click can't kick off two concurrent zips/uploads.
let deploying = false;

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const configured = deployConfigured() || !!process.env.DEPLOY_WEBHOOK_URL;
  const mode = deployConfigured() ? "hostinger" : process.env.DEPLOY_WEBHOOK_URL ? "webhook" : "none";
  return NextResponse.json({ ok: true, configured, mode, deploying }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  if (deploying) return NextResponse.json({ ok: false, configured: true, error: "A deploy is already in progress — give it a couple of minutes." }, { status: 200, headers: NOINDEX });

  // Preferred: direct Hostinger deploy from the server's own current state.
  if (deployConfigured()) {
    deploying = true;
    try {
      const message = await runHostingerDeploy();
      return NextResponse.json({ ok: true, configured: true, mode: "hostinger", message }, { headers: NOINDEX });
    } catch (e) {
      return NextResponse.json({ ok: false, configured: true, mode: "hostinger", error: `Deploy failed: ${String((e as Error).message || e).slice(0, 300)}` }, { status: 200, headers: NOINDEX });
    } finally {
      deploying = false;
    }
  }

  // Fallback: a CI/build webhook.
  const url = process.env.DEPLOY_WEBHOOK_URL;
  if (!url) {
    return NextResponse.json({
      ok: false, configured: false,
      error: "Deploy not connected. Set HOSTINGER_API_TOKEN (direct Hostinger deploy) or DEPLOY_WEBHOOK_URL (CI hook) in the server env.",
    }, { status: 200, headers: NOINDEX });
  }
  try {
    const method = (process.env.DEPLOY_WEBHOOK_METHOD || "POST").toUpperCase();
    const headers: Record<string, string> = { "Content-Type": "application/json", "User-Agent": "mrd-admin-deploy", "Accept": "application/vnd.github+json" };
    if (process.env.DEPLOY_WEBHOOK_TOKEN) headers["Authorization"] = `Bearer ${process.env.DEPLOY_WEBHOOK_TOKEN}`;
    const body = process.env.DEPLOY_WEBHOOK_BODY || JSON.stringify({ event_type: "deploy" });
    const res = await fetch(url, { method, headers, body: method === "GET" ? undefined : body });
    if (!res.ok && res.status >= 400) {
      return NextResponse.json({ ok: false, configured: true, mode: "webhook", error: `Deploy hook returned ${res.status}.` }, { status: 200, headers: NOINDEX });
    }
    return NextResponse.json({ ok: true, configured: true, mode: "webhook", message: "Deploy triggered. The site rebuilds in a few minutes." }, { headers: NOINDEX });
  } catch {
    return NextResponse.json({ ok: false, configured: true, mode: "webhook", error: "Could not reach the deploy hook." }, { status: 200, headers: NOINDEX });
  }
}
