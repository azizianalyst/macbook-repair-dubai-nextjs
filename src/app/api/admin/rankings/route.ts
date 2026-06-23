import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { gscConfigured } from "@/lib/google-auth";
import { querySearchAnalytics, defaultRange } from "@/lib/gsc";
import { insertSnapshot, readSnapshots } from "@/lib/seo-store";
import type { GscRow } from "@/lib/seo-schema";

// Owner-only rankings: live GSC pull (queries + pages + page-2 opportunities) plus stored
// snapshot history for the trend chart. POST stores a snapshot from the current live pull.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

async function pull() {
  const { startDate, endDate } = defaultRange(90);
  const [queries, pages] = await Promise.all([
    querySearchAnalytics({ dimensions: ["query"], startDate, endDate, rowLimit: 100 }),
    querySearchAnalytics({ dimensions: ["page"], startDate, endDate, rowLimit: 200 }),
  ]);
  return { range_start: startDate, range_end: endDate, queries, pages };
}

// Pages sitting just off page 1 with real demand — where a few links pay off fastest.
function opportunities(pages: GscRow[]): GscRow[] {
  return pages
    .filter((p) => p.position >= 8 && p.position <= 25 && p.impressions >= 30)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);
}

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const snapshots = await readSnapshots(180);
  const configured = gscConfigured();

  // Prefer a live service-account pull; otherwise fall back to the most recent stored
  // snapshot (e.g. one fed in manually), so the dashboard still shows real data.
  let live: (Awaited<ReturnType<typeof pull>> & { opportunities: ReturnType<typeof opportunities> }) | null = null;
  let pullError = "";
  if (configured) {
    try { const p = await pull(); live = { ...p, opportunities: opportunities(p.pages) }; }
    catch (e) { pullError = String((e as Error).message || e); }
  }
  if (!live && snapshots.length) {
    // newest snapshot that actually has page data (weekly query-only snapshots have empty pages)
    const s = snapshots.find((x) => x.pages && x.pages.length) ?? snapshots[0];
    live = { range_start: s.range_start, range_end: s.range_end, queries: s.queries, pages: s.pages, opportunities: opportunities(s.pages) };
  }
  const source = configured && !pullError ? "live" : live ? "snapshot" : "none";
  if (!live && pullError) {
    return NextResponse.json({ ok: false, configured, error: pullError }, { status: 502, headers: NOINDEX });
  }
  return NextResponse.json({ ok: true, configured, source, live, snapshots }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  if (!gscConfigured()) return NextResponse.json({ ok: false, error: "GSC not configured" }, { status: 400, headers: NOINDEX });
  try {
    const live = await pull();
    const snap = await insertSnapshot(live);
    return NextResponse.json({ ok: true, snapshot: snap }, { headers: NOINDEX });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String((e as Error).message || e) }, { status: 502, headers: NOINDEX });
  }
}
