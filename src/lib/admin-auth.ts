import { timingSafeEqual } from "crypto";

// Shared admin gate for the leads API. Checks a Bearer token against ADMIN_KEY
// with a constant-time compare. Fails CLOSED — if ADMIN_KEY is unset, locked.
export function requireAdmin(req: Request): boolean {
  const key = process.env.ADMIN_KEY;
  if (!key) return false;
  const provided = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const a = Buffer.from(provided);
  const b = Buffer.from(key);
  return a.length === b.length && timingSafeEqual(a, b);
}
