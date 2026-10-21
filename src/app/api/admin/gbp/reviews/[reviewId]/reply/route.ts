import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { replyToReview, deleteReviewReply } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PUT(req: Request, { params }: { params: Promise<{ reviewId: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });

  const { reviewId } = await params;
  const { comment } = await req.json();
  if (!comment?.trim()) return NextResponse.json({ ok: false, error: "Comment required" }, { status: 400 });

  const reviewName = `${cfg.locationId}/reviews/${reviewId}`;
  try {
    await replyToReview(reviewName, comment.trim());
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ reviewId: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });

  const { reviewId } = await params;
  const reviewName = `${cfg.locationId}/reviews/${reviewId}`;
  try {
    await deleteReviewReply(reviewName);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
