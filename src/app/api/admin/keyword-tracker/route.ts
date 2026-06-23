import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { gscConfigured } from "@/lib/google-auth";
import { querySearchAnalytics, queryByQueryPage, defaultRange } from "@/lib/gsc";
import { readTrackedKeywords, addTrackedKeywords, removeTrackedKeyword, readSnapshots } from "@/lib/seo-store";
import type { GscRow } from "@/lib/seo-schema";

// Owner-only keyword rank tracker, powered by Google Search Console (free). For each tracked keyword we
// report its current avg position, the URL that ranks, and Best/First/Change drawn from snapshot history.
// "Position" is GSC average position over the window — a real, free proxy for SERP rank (not a live SERP
// scrape). Keywords with no GSC impressions show "not ranking yet". POST adds keywords, DELETE removes.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

const norm = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ");
const pathOf = (u: string) => { try { return new URL(u).pathname; } catch { return u; } };

type Row = {
  keyword: string; addedAt: string;
  latest: number | null;   // current avg position (null = not ranking)
  best: number | null;     // best (lowest) position seen across snapshots + live
  first: number | null;    // earliest recorded position
  change: number | null;   // improvement vs previous snapshot (positive = moved up)
  impressions: number; clicks: number;
  url: string | null;      // ranking URL path
};

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const tracked = await readTrackedKeywords();
  const snapshots = await readSnapshots(180); // newest first
  const configured = gscConfigured();

  // Live GSC pull (query positions + query→page map). Fall back to newest snapshot if unconfigured/fails.
  let liveQueries: GscRow[] = [];
  let qp: Awaited<ReturnType<typeof queryByQueryPage>> = [];
  let pullError = "";
  if (configured) {
    const { startDate, endDate } = defaultRange(90);
    try {
      [liveQueries, qp] = await Promise.all([
        querySearchAnalytics({ dimensions: ["query"], startDate, endDate, rowLimit: 1000 }),
        queryByQueryPage({ startDate, endDate, rowLimit: 2000 }),
      ]);
    } catch (e) { pullError = String((e as Error).message || e); }
  }
  if (!liveQueries.length && snapshots.length) {
    const s = snapshots.find((x) => x.queries?.length) ?? snapshots[0];
    liveQueries = s?.queries ?? [];
  }

  const liveByKw = new Map(liveQueries.map((r) => [norm(r.key), r]));
  // Best URL per query = the page with the most clicks (then impressions) for that query.
  const urlByKw = new Map<string, string>();
  for (const r of qp) {
    const k = norm(r.query);
    const cur = urlByKw.get(k);
    if (!cur) urlByKw.set(k, r.page);
    // (qp is returned roughly by total; first seen ~= top page — good enough)
  }
  // Snapshot history: position per keyword per snapshot, oldest→newest.
  const snapsOldFirst = snapshots.slice().reverse();
  const historyByKw = new Map<string, number[]>();
  for (const s of snapsOldFirst) {
    const m = new Map((s.queries ?? []).map((r) => [norm(r.key), r.position]));
    for (const t of tracked) {
      const k = norm(t.keyword);
      const pos = m.get(k);
      if (pos != null) { const arr = historyByKw.get(k) ?? []; arr.push(Number(pos.toFixed(1))); historyByKw.set(k, arr); }
    }
  }

  const rows: Row[] = tracked.map((t) => {
    const k = norm(t.keyword);
    const liveRow = liveByKw.get(k);
    const hist = historyByKw.get(k) ?? [];
    const latest = liveRow ? Number(liveRow.position.toFixed(1)) : (hist.length ? hist[hist.length - 1] : null);
    const all = [...hist, ...(latest != null ? [latest] : [])];
    const best = all.length ? Math.min(...all) : null;
    const first = hist.length ? hist[0] : latest;
    const prev = hist.length >= 1 ? hist[hist.length - 1] : null;
    const change = latest != null && prev != null ? Number((prev - latest).toFixed(1)) : null; // + = improved
    return {
      keyword: t.keyword, addedAt: t.addedAt,
      latest, best, first, change,
      impressions: liveRow?.impressions ?? 0, clicks: liveRow?.clicks ?? 0,
      url: liveRow ? (urlByKw.has(k) ? pathOf(urlByKw.get(k)!) : null) : null,
    };
  });

  const ranked = rows.filter((r) => r.latest != null) as (Row & { latest: number })[];
  const avg = ranked.length ? Number((ranked.reduce((s, r) => s + r.latest, 0) / ranked.length).toFixed(1)) : null;
  const bucket = (max: number) => ranked.filter((r) => r.latest <= max).length;
  const summary = {
    total: rows.length,
    ranked: ranked.length,
    avgPosition: avg,
    improved: rows.filter((r) => (r.change ?? 0) > 0).length,
    top3: bucket(3), top10: bucket(10), top30: bucket(30), top100: bucket(100),
  };

  return NextResponse.json({ ok: true, configured, source: configured && !pullError ? "live" : (snapshots.length ? "snapshot" : "none"), error: pullError || undefined, summary, rows }, { headers: NOINDEX });
}

export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const list: string[] = Array.isArray(body?.keywords) ? body.keywords : body?.keyword ? [String(body.keyword)] : [];
  const clean = list.map((s) => String(s).trim()).filter(Boolean).slice(0, 200);
  if (!clean.length) return NextResponse.json({ ok: false, error: "no keywords" }, { status: 400, headers: NOINDEX });
  const ok = await addTrackedKeywords(clean, new Date().toISOString());
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}

export async function DELETE(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const kw = new URL(req.url).searchParams.get("keyword") || "";
  if (!kw) return NextResponse.json({ ok: false, error: "keyword required" }, { status: 400, headers: NOINDEX });
  const ok = await removeTrackedKeyword(kw);
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}
