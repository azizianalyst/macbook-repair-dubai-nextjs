import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { postAnswer, deleteAnswer } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request, { params }: { params: Promise<{ questionId: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const { questionId } = await params;
  const { text } = await req.json();
  if (!text?.trim()) return NextResponse.json({ ok: false, error: "text required" }, { status: 400 });
  const questionName = `${cfg.locationId}/questions/${questionId}`;
  try {
    const answer = await postAnswer(questionName, text.trim());
    return NextResponse.json({ ok: true, answer });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ questionId: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const { questionId } = await params;
  const questionName = `${cfg.locationId}/questions/${questionId}`;
  try {
    await deleteAnswer(questionName);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
