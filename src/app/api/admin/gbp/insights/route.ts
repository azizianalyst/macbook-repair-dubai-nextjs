import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { fetchInsights, fetchInsightsWithComparison } from "@/lib/gbp";
import { getGbpConfig } from "@/lib/gbp-store";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = await getGbpConfig();
  if (!cfg?.locationId) return NextResponse.json({ ok: false, error: "No location" }, { status: 400 });
  const url = new URL(req.url);
  const days = Math.min(90, Math.max(7, Number(url.searchParams.get("days") || 28)));
  const compare = url.searchParams.get("compare") === "1";
  try {
    if (compare) {
      const { current, previous } = await fetchInsightsWithComparison(cfg.locationId, days);
      return NextResponse.json({ ok: true, series: current, previous });
    }
    const series = await fetchInsights(cfg.locationId, days);
    return NextResponse.json({ ok: true, series });
  } catch (e: unknown) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
