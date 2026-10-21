import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { GBP_OAUTH_REDIRECT } from "@/lib/gbp-oauth";
import { GBP_SCOPE } from "@/lib/gbp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401, headers: NOINDEX });

  const redirect = GBP_OAUTH_REDIRECT(req);
  const state = Buffer.from(Date.now().toString(36)).toString("base64url");

  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
    redirect_uri: redirect,
    response_type: "code",
    scope: `openid email ${GBP_SCOPE}`,
    access_type: "offline",
    prompt: "consent",
    state,
  });

  const res = NextResponse.redirect(`${AUTH_URL}?${params.toString()}`);
  res.cookies.set("gbp_oauth_state", state, { httpOnly: true, sameSite: "lax", maxAge: 600, path: "/" });
  return res;
}
