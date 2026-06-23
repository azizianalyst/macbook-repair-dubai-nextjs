import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createSessionToken, KEY_LOGIN_EMAIL, SESSION_COOKIE, sessionCookieOptions } from "@/lib/admin-session";

// Break-glass password login: constant-time compare against ADMIN_KEY, then set the same
// signed session cookie. Lets the dashboard work before Google OAuth is configured. Fails closed.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const key = process.env.ADMIN_KEY;
  if (!key) return NextResponse.json({ ok: false, error: "ADMIN_KEY not set on server" }, { status: 401 });

  const body = await req.json().catch(() => ({}));
  const provided = String(body?.key ?? "");
  const a = Buffer.from(provided), b = Buffer.from(key);
  const ok = a.length === b.length && timingSafeEqual(a, b);
  if (!ok) return NextResponse.json({ ok: false, error: "wrong key" }, { status: 401 });

  // The break-glass key is the owner's master access → full (owner) role.
  const token = createSessionToken(KEY_LOGIN_EMAIL, "owner");
  if (!token) return NextResponse.json({ ok: false, error: "session secret unset" }, { status: 500 });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return res;
}
