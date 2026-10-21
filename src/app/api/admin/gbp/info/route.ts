import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getBusinessInfo, updateBusinessInfo } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  try {
    const info = await getBusinessInfo(cfg.locationId);
    return NextResponse.json({ ok: true, info });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const { patch, updateMask } = await req.json();
  if (!patch || !updateMask) return NextResponse.json({ ok: false, error: "patch and updateMask required" }, { status: 400 });
  try {
    const info = await updateBusinessInfo(cfg.locationId, patch, updateMask);
    return NextResponse.json({ ok: true, info });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
