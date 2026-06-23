import { NextResponse } from "next/server";
import { exchangeCode, fetchUserEmail, publicOrigin, redirectUri } from "@/lib/google-oauth";
import { createSessionToken, isAllowedEmail, readCookie, SESSION_COOKIE, sessionCookieOptions } from "@/lib/admin-session";
import { roleForEmail } from "@/lib/seo-store";

// Google OAuth callback: verify CSRF state, exchange code, check the email allowlist,
// set the signed session cookie, redirect to /admin. Any failure → /admin/login?e=...
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const origin = publicOrigin(req);
  const back = (e: string) => NextResponse.redirect(new URL(`/admin/login?e=${e}`, origin));

  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const saved = readCookie(req.headers.get("cookie"), "mrd_oauth_state");
  if (!code || !state || !saved || state !== saved) return back("state");

  try {
    const tok = await exchangeCode(code, redirectUri(req));
    const { email, verified } = await fetchUserEmail(tok.access_token);
    if (!verified || !email) return back("unverified");
    // Owner (env allowlist) → full access; otherwise a team member's assigned role; else denied.
    const role = isAllowedEmail(email) ? "owner" : await roleForEmail(email);
    if (!role) return back("denied");

    const token = createSessionToken(email, role);
    if (!token) return back("nosecret"); // ADMIN_SESSION_SECRET / ADMIN_KEY unset

    const res = NextResponse.redirect(new URL("/admin", origin));
    res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
    res.cookies.delete("mrd_oauth_state");
    return res;
  } catch {
    return back("oauth");
  }
}
