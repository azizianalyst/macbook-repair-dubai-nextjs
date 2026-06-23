// Minimal Google OAuth 2.0 (authorization-code) helper for ADMIN LOGIN ONLY (identity:
// openid/email/profile). No dependency — plain fetch. The separate GSC *data* access uses
// a service account (lib/google-auth.ts), kept independent from who can log in.

const AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const USERINFO_URL = "https://openidconnect.googleapis.com/v1/userinfo";

export function oauthConfigured(): boolean {
  return Boolean(process.env.GOOGLE_OAUTH_CLIENT_ID && process.env.GOOGLE_OAUTH_CLIENT_SECRET);
}

// Public origin — behind Hostinger's reverse proxy the Node app sees Host: localhost, so prefer
// x-forwarded-* (matching next.config's www handling), then env, then the request URL.
export function publicOrigin(req: Request): string {
  const xfHost = req.headers.get("x-forwarded-host");
  const xfProto = req.headers.get("x-forwarded-proto") || "https";
  if (xfHost) return `${xfProto}://${xfHost}`;
  try { return new URL(req.url).origin; } catch { return "https://macbook-repair-dubai.ae"; }
}

export function redirectUri(req: Request): string {
  return process.env.GOOGLE_OAUTH_REDIRECT || `${publicOrigin(req)}/api/admin/auth/callback`;
}

export function googleAuthUrl(redirect: string, state: string): string {
  const p = new URLSearchParams({
    client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
    redirect_uri: redirect,
    response_type: "code",
    scope: "openid email profile",
    access_type: "online",
    include_granted_scopes: "true",
    prompt: "select_account",
    state,
  });
  return `${AUTH_URL}?${p.toString()}`;
}

export async function exchangeCode(code: string, redirect: string): Promise<{ access_token: string }> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
      redirect_uri: redirect,
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) throw new Error(`token exchange failed: ${res.status}`);
  return res.json();
}

export async function fetchUserEmail(accessToken: string): Promise<{ email: string; verified: boolean }> {
  const res = await fetch(USERINFO_URL, { headers: { Authorization: `Bearer ${accessToken}` } });
  if (!res.ok) throw new Error(`userinfo failed: ${res.status}`);
  const d = await res.json();
  return { email: String(d.email || ""), verified: d.email_verified === true || d.email_verified === "true" };
}
