import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.refreshToken) return NextResponse.json({ connected: false });
  return NextResponse.json({
    connected: true,
    accountId: cfg.accountId,
    locationId: cfg.locationId,
    locationName: cfg.locationName,
    connectedAt: cfg.connectedAt,
  });
}
