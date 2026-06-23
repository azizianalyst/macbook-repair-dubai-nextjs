import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readTeamMembers, upsertTeamMember, removeTeamMember } from "@/lib/seo-store";
import { isRole } from "@/lib/roles";

// Owner-only team management (requireAdmin enforces: section "team" is owner-only). Add members by
// Gmail + assign a role; they sign in with Google and get exactly that role.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };
const isEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  return NextResponse.json({ ok: true, members: await readTeamMembers() }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const email = String(body?.email || "").trim().toLowerCase();
  const role = String(body?.role || "");
  if (!isEmail(email)) return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400, headers: NOINDEX });
  if (!isRole(role)) return NextResponse.json({ ok: false, error: "Invalid role." }, { status: 400, headers: NOINDEX });
  const ok = await upsertTeamMember(email, role, new Date().toISOString());
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}

export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const email = new URL(req.url).searchParams.get("email") || "";
  if (!email) return NextResponse.json({ ok: false, error: "email required" }, { status: 400, headers: NOINDEX });
  const ok = await removeTeamMember(email);
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}
