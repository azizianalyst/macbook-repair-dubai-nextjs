import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { gscConfigured } from "@/lib/google-auth";
import { querySearchAnalytics, defaultRange } from "@/lib/gsc";
import { readPageMeta, readPosts, readSnapshots } from "@/lib/seo-store";

// Owner-only per-URL performance, for the unified URL Inspector. Returns the page's live GSC stats
// (avg position, impressions, clicks for THIS URL) and the avg position for its focus keyword — so the
// editor can show rank alongside keyword/meta/score/price/image. GSC-powered; null when unconfigured.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

const norm = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ");
const stripSlash = (p: string) => p.replace(/\/+$/, "") || "/";
const pathOf = (u: string) => { try { return stripSlash(new URL(u).pathname); } catch { return stripSlash(u); } };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const path = stripSlash(new URL(req.url).searchParams.get("path") || "");
  if (!path) return NextResponse.json({ ok: false, error: "path required" }, { status: 400, headers: NOINDEX });

  // Resolve the focus keyword for this URL from the single source (admin post or page-meta override).
  const [pageMeta, posts] = await Promise.all([readPageMeta(), readPosts()]);
  const post = posts.find((p) => stripSlash(`/blog/${p.slug}`) === path);
  const meta = pageMeta.find((m) => stripSlash(m.path) === path);
  const focusKeyword = (post?.focusKeyword || meta?.focusKeyword || "").trim();

  const configured = gscConfigured();
  let page: { position: number; impressions: number; clicks: number } | null = null;
  let keywordPosition: number | null = null;
  let error = "";

  if (configured) {
    const { startDate, endDate } = defaultRange(90);
    try {
      const [pages, queries] = await Promise.all([
        querySearchAnalytics({ dimensions: ["page"], startDate, endDate, rowLimit: 1000 }),
        focusKeyword ? querySearchAnalytics({ dimensions: ["query"], startDate, endDate, rowLimit: 1000 }) : Promise.resolve([]),
      ]);
      const pr = pages.find((r) => pathOf(r.key) === path);
      if (pr) page = { position: Number(pr.position.toFixed(1)), impressions: pr.impressions, clicks: pr.clicks };
      if (focusKeyword) {
        const q = queries.find((r) => norm(r.key) === norm(focusKeyword));
        if (q) keywordPosition = Number(q.position.toFixed(1));
      }
    } catch (e) { error = String((e as Error).message || e); }
  }
  // Snapshot fallback so the strip still shows something offline.
  if (!page) {
    const snaps = await readSnapshots(1);
    const s = snaps[0];
    const pr = s?.pages?.find((r) => pathOf(r.key) === path);
    if (pr) page = { position: Number(pr.position.toFixed(1)), impressions: pr.impressions, clicks: pr.clicks };
    if (focusKeyword && keywordPosition == null) {
      const q = s?.queries?.find((r) => norm(r.key) === norm(focusKeyword));
      if (q) keywordPosition = Number(q.position.toFixed(1));
    }
  }

  return NextResponse.json({ ok: true, path, focusKeyword: focusKeyword || null, configured, source: configured && !error ? "live" : "snapshot", page, keywordPosition, error: error || undefined }, { headers: NOINDEX });
}
