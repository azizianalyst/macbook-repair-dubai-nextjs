import { timingSafeEqual } from "crypto";
import { sessionRole } from "@/lib/admin-session";
import { canAccess, type Role } from "@/lib/roles";

// The admin is GATED behind ENABLE_ADMIN: it only runs where that env var is "true" (the owner's
// local machine via .env.local). On the public production server the var is absent, so the entire
// admin (pages + APIs) is unavailable — local-only by design. Flip by setting ENABLE_ADMIN=true.
export function adminEnabled(): boolean {
  return process.env.ENABLE_ADMIN === "true";
}

// Shared admin gate. Accepts EITHER a valid signed session cookie (Google login or the
// break-glass key login — see admin-session.ts) OR a Bearer token matching ADMIN_KEY
// (kept for the existing leads admin + programmatic/break-glass access). Fails CLOSED.
//
// ROLE ENFORCEMENT: every admin API calls requireAdmin(req), and the request knows its own URL,
// so we check the caller's role against the path here — a "pricing" user can't reach
// /api/admin/settings even by calling it directly. Bearer-key callers are treated as owner.
export function requireAdmin(req: Request): boolean {
  if (!adminEnabled()) return false; // admin disabled on this host (public/production)
  const role = roleFromRequest(req);
  if (!role) return false;
  let path = "/";
  try { path = new URL(req.url).pathname; } catch { /* non-URL req → deny-safe default */ }
  return canAccess(role, path);
}

// The caller's effective role: Bearer ADMIN_KEY = owner; otherwise the signed session's role.
export function roleFromRequest(req: Request): Role | null {
  if (checkBearerKey(req)) return "owner";
  return sessionRole(req);
}

// Constant-time Bearer compare against ADMIN_KEY. Locked if ADMIN_KEY is unset.
export function checkBearerKey(req: Request): boolean {
  const key = process.env.ADMIN_KEY;
  if (!key) return false;
  const provided = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const a = Buffer.from(provided);
  const b = Buffer.from(key);
  return a.length === b.length && timingSafeEqual(a, b);
}
