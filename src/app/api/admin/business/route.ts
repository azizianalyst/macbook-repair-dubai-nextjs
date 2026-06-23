import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { BusinessInfoSchema } from "@/lib/seo-schema";
import { readBusiness, saveBusiness } from "@/lib/seo-store";

// Owner-only business info (NAP / reviews / hours). Edits bake into the static site at the next
// build (scripts/gen-business.cjs) — see /admin/business.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const business = await readBusiness();
  return NextResponse.json({ ok: true, business }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const parsed = BusinessInfoSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
    return NextResponse.json({ ok: false, errors: fieldErrors }, { status: 400, headers: NOINDEX });
  }
  const ok = await saveBusiness(parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "save failed" }, { status: 500, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
