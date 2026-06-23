import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { listQA } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  try {
    const data = await listQA(cfg.locationId);
    return NextResponse.json({ ok: true, ...data });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
