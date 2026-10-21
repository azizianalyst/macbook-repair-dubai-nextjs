import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { ReviewPatchSchema } from "@/lib/seo-schema";
import { updateReview, deleteReview } from "@/lib/seo-store";

// Owner-only update / delete of a single review.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };
type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const parsed = ReviewPatchSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid fields" }, { status: 400, headers: NOINDEX });
  const ok = await updateReview(Number(id), parsed.data);
  if (!ok) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}

export async function DELETE(req: Request, { params }: Ctx) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const { id } = await params;
  const ok = await deleteReview(Number(id));
  if (!ok) return NextResponse.json({ ok: false, error: "not found" }, { status: 404, headers: NOINDEX });
  return NextResponse.json({ ok: true }, { headers: NOINDEX });
}
