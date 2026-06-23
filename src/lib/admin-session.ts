import crypto from "crypto";
import { type Role, isRole } from "@/lib/roles";

// Signed, stateless admin session cookie (HMAC-SHA256, no dependency, no native module —
// same hand-rolled ethos as admin-auth.ts / rate-limit.ts). The cookie proves the server
// issued it; we re-check the email allowlist on every request so removing an email from
// ADMIN_ALLOWED_EMAILS revokes access immediately. A password ("key") login is also
// supported as a break-glass that works before Google OAuth is configured.

export const SESSION_COOKIE = "mrd_admin";
export const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
export const KEY_LOGIN_EMAIL = "key-login"; // sentinel for ADMIN_KEY password logins

type SessionPayload = { email: string; exp: number; role?: Role };

function secret(): string | null {
  // Prefer a dedicated secret; fall back to ADMIN_KEY so the cookie works with minimal setup.
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_KEY || null;
}

const b64url = (b: Buffer) => b.toString("base64url");

function sign(body: string, key: string): string {
  return b64url(crypto.createHmac("sha256", key).update(body).digest());
}

export function createSessionToken(email: string, role: Role = "owner", ttlMs = SESSION_TTL_MS): string | null {
  const key = secret();
  if (!key) return null;
  const payload: SessionPayload = { email, role, exp: Date.now() + ttlMs };
  const body = b64url(Buffer.from(JSON.stringify(payload)));
  return `${body}.${sign(body, key)}`;
}

export function verifySessionToken(token: string | undefined | null): SessionPayload | null {
  const key = secret();
  if (!key || !token) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = sign(body, key);
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as SessionPayload;
    if (!payload?.exp || payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export function isAllowedEmail(email: string): boolean {
  const list = (process.env.ADMIN_ALLOWED_EMAILS || "")
    .split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  return list.length > 0 && list.includes(email.toLowerCase());
}

// A session is authorized if it's a break-glass key login, its email is still allowlisted (legacy
// owner), or the signed token carries a valid role (a team member we minted a session for — the
// token is HMAC-signed so the role can't be forged; revoke via secret rotation or expiry).
export function isSessionAuthorized(payload: SessionPayload | null): boolean {
  if (!payload) return false;
  if (payload.email === KEY_LOGIN_EMAIL || isAllowedEmail(payload.email)) return true;
  return isRole(payload.role);
}

// The effective role for a session: explicit token role wins; key-login / allowlisted email = owner.
export function roleOf(payload: SessionPayload | null): Role | null {
  if (!payload) return null;
  if (isRole(payload.role)) return payload.role;
  if (payload.email === KEY_LOGIN_EMAIL || isAllowedEmail(payload.email)) return "owner";
  return null;
}

// Role from the request's session cookie (no fs — token-only, safe in proxy + route handlers).
export function sessionRole(req: Request): Role | null {
  const token = readCookie(req.headers.get("cookie"), SESSION_COOKIE);
  return roleOf(verifySessionToken(token));
}

// Parse a single cookie value out of a Cookie header (route handlers get the raw header).
export function readCookie(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(";")) {
    const i = part.indexOf("=");
    if (i === -1) continue;
    if (part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

// Cookie options for NextResponse.cookies.set — httpOnly + secure (prod) + lax.
export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  };
}

// True if the request carries a valid, authorized admin session cookie.
export function hasAdminSession(req: Request): boolean {
  const token = readCookie(req.headers.get("cookie"), SESSION_COOKIE);
  return isSessionAuthorized(verifySessionToken(token));
}
