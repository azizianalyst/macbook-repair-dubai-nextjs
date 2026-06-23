import { NextResponse } from "next/server";
import crypto from "crypto";
import { googleAuthUrl, oauthConfigured, redirectUri } from "@/lib/google-oauth";

// Start the Google OAuth login: set a short-lived CSRF state cookie, redirect to consent.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const origin = (() => { try { return new URL(req.url).origin; } catch { return "https://macbook-repair-dubai.ae"; } })();
  if (!oauthConfigured()) {
    return NextResponse.redirect(new URL("/admin/login?e=oauth_unconfigured", origin));
  }
  const state = crypto.randomBytes(16).toString("hex");
  const res = NextResponse.redirect(googleAuthUrl(redirectUri(req), state));
  res.cookies.set("mrd_oauth_state", state, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 600,
  });
  return res;
}
