import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { listPhotos, uploadPhotoByUrl } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  try {
    const photos = await listPhotos(cfg.locationId);
    return NextResponse.json({ ok: true, photos });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const { sourceUrl, category } = await req.json();
  if (!sourceUrl?.trim()) return NextResponse.json({ ok: false, error: "sourceUrl required" }, { status: 400 });
  try {
    const photo = await uploadPhotoByUrl(cfg.locationId, sourceUrl.trim(), category || "ADDITIONAL");
    return NextResponse.json({ ok: true, photo });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
