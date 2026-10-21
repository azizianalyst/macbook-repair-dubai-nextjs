import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { deletePhoto } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function DELETE(req: Request, { params }: { params: Promise<{ mediaId: string }> }) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const { mediaId } = await params;
  const mediaName = `${cfg.locationId}/media/${mediaId}`;
  try {
    await deletePhoto(mediaName);
    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
