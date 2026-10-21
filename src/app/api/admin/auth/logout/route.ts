import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin-session";

// Clear the session cookie and return to the login page.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clear(req: Request) {
  const origin = (() => { try { return new URL(req.url).origin; } catch { return "https://macbook-repair-dubai.ae"; } })();
  const res = NextResponse.redirect(new URL("/admin/login", origin));
  res.cookies.delete(SESSION_COOKIE);
  return res;
}

export const GET = clear;
export const POST = clear;
