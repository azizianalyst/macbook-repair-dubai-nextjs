import { NextResponse } from "next/server";
import { requireAdmin, roleFromRequest } from "@/lib/admin-auth";
import { oauthConfigured } from "@/lib/google-oauth";

// Returns the current admin's effective role (for nav filtering + UI gating) plus whether Google
// sign-in is configured (team login needs it). Every authenticated role may call this.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  return NextResponse.json({ ok: true, role: roleFromRequest(req), googleEnabled: oauthConfigured() }, { headers: NOINDEX });
}
