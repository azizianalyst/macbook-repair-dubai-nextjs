import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readSecret, setSecret } from "@/lib/seo-store";

// Owner-only: connect/disconnect the Anthropic API key from the dashboard (instead of editing env).
// The key is stored server-side in the gated store; GET only ever returns a MASKED status, never the
// key. An ANTHROPIC_API_KEY env var (if set) takes precedence over the stored one.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const envKey = process.env.ANTHROPIC_API_KEY || "";
  const stored = await readSecret("anthropicApiKey");
  const active = envKey || stored;
  return NextResponse.json({
    ok: true,
    configured: !!active,
    source: envKey ? "env" : stored ? "dashboard" : null,
    masked: active ? `${active.slice(0, 7)}…${active.slice(-4)}` : "",
    envLocked: !!envKey, // if set via env, the dashboard field is informational only
  }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const key = String(body?.apiKey || "").trim();
  if (!/^sk-ant-/.test(key)) return NextResponse.json({ ok: false, error: "That doesn't look like an Anthropic key (should start with sk-ant-)." }, { status: 400, headers: NOINDEX });
  const ok = await setSecret("anthropicApiKey", key);
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}

export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const ok = await setSecret("anthropicApiKey", "");
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}
