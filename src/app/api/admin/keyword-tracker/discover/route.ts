import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { gscConfigured } from "@/lib/google-auth";
import { querySearchAnalytics, defaultRange } from "@/lib/gsc";
import { readTrackedKeywords } from "@/lib/seo-store";

// Returns top GSC queries NOT yet in the tracked list — "Discover new keywords" feature.
// Sorted by impressions desc so high-volume opportunities surface first.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

export type DiscoverRow = {
  keyword: string;
  impressions: number;
  clicks: number;
  position: number;
};

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  if (!gscConfigured()) return NextResponse.json({ ok: false, error: "GSC not connected" }, { headers: NOINDEX });

  const url = new URL(req.url);
  const limit = Math.min(Number(url.searchParams.get("limit") || "100"), 500);

  const { startDate, endDate } = defaultRange(90);
  let rows: DiscoverRow[] = [];
  try {
    const raw = await querySearchAnalytics({ dimensions: ["query"], startDate, endDate, rowLimit: 1000 });
    const tracked = await readTrackedKeywords();
    const trackedSet = new Set(tracked.map((t) => t.keyword.toLowerCase().trim()));
    rows = raw
      .filter((r) => !trackedSet.has(r.key.toLowerCase().trim()))
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, limit)
      .map((r) => ({ keyword: r.key, impressions: r.impressions, clicks: r.clicks, position: Number(r.position.toFixed(1)) }));
  } catch (e) {
    return NextResponse.json({ ok: false, error: String((e as Error).message || e) }, { headers: NOINDEX });
  }

  return NextResponse.json({ ok: true, rows }, { headers: NOINDEX });
}
