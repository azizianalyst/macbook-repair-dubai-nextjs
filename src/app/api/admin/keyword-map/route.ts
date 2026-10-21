import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { readPosts, readPageMeta, readPrices, upsertPageMeta } from "@/lib/seo-store";
import { updatePost } from "@/lib/seo-store";
import { ROUTES } from "@/lib/routes.generated";
import { CATEGORIES } from "@/content/blog-posts";
import { AREAS } from "@/content/areas";
import { CITIES } from "@/content/cities";
import { metaForPath } from "@/lib/page-meta";
import { imageForRoute } from "@/lib/page-images";

// Quick "SEO setup" score (0–100) from the meta-level signals we know WITHOUT crawling the page body —
// title/meta/keyword/URL. Distinct from the full content score in the per-page editor (which reads the
// body). Good enough to triage 408 URLs at a glance. Lower-cased inputs.
const POWER = ["fast", "expert", "same-day", "trusted", "guaranteed", "affordable", "best", "proven", "quick", "official", "complete"];
function quickSeo(title: string, desc: string, slug: string, keyword: string): { score: number; color: "good" | "warn" | "bad" } {
  const t = title.toLowerCase(), d = desc.toLowerCase(), s = slug.toLowerCase(), kw = keyword.toLowerCase().trim();
  const parts: number[] = [];
  parts.push(title ? (title.length <= 60 ? 1 : 0.5) : 0);                 // title present & ≤60
  parts.push(desc ? (desc.length >= 80 && desc.length <= 160 ? 1 : 0.5) : 0); // meta present & in range
  parts.push(/\d/.test(title) ? 1 : 0);                                   // number in title
  parts.push(POWER.some((w) => t.includes(w)) ? 1 : 0);                   // power word
  if (kw) {
    parts.push(t.includes(kw) ? 1 : 0);                                   // keyword in title
    parts.push(t.startsWith(kw) ? 1 : t.includes(kw) ? 0.5 : 0);          // keyword at start
    parts.push(d.includes(kw) ? 1 : 0);                                   // keyword in meta
    parts.push(s.includes(kw.replace(/\s+/g, "-")) ? 1 : 0);             // keyword in URL
  }
  const score = parts.length ? Math.round((parts.reduce((a, b) => a + b, 0) / parts.length) * 100) : 0;
  return { score, color: score >= 81 ? "good" : score >= 51 ? "warn" : "bad" };
}

// Derive a sensible starter keyword from a URL (last slug segment, dashes → spaces). Homepage → brand kw.
function keywordFromPath(path: string): string {
  if (path === "/" || path === "") return "macbook repair dubai";
  const seg = path.replace(/^\/+|\/+$/g, "").split("/").pop() || "";
  return seg.replace(/-/g, " ").trim();
}

// Owner-only Keyword Map: every URL → its target (focus) keyword + price/timeline/warranty for service
// URLs (joined from the Prices module, not duplicated). Keyword edits write to the post (admin posts)
// or the page-meta override (everything else). No generator — focus keyword is editor/SEO metadata.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const [posts, pageMeta, prices] = await Promise.all([readPosts(), readPageMeta(), readPrices()]);

  const adminByPath = new Map(posts.map((p) => [`/blog/${p.slug}`, p]));
  const metaByPath = new Map(pageMeta.map((m) => [m.path, m]));
  const priceByUrl = new Map(prices.filter((p) => p.url).map((p) => [p.url as string, p]));
  const catPaths = new Set(CATEGORIES.map((c) => `/blog/${c.slug}`));
  const areaPaths = new Set(AREAS.map((a) => `/macbook-repair-${a.slug}`));
  const cityPaths = new Set(CITIES.map((c) => `/macbook-repair-${c.slug}`));

  const classify = (path: string): string => {
    if (catPaths.has(path)) return "Category";
    if (path.startsWith("/blog/tag/")) return "Tag";
    if (path === "/blog") return "Blog";
    if (path.startsWith("/blog/")) return "Post";
    if (areaPaths.has(path)) return "Area";
    if (cityPaths.has(path)) return "City";
    if (priceByUrl.has(path)) return "Service";
    return "Page";
  };

  const allPaths = new Set<string>();
  for (const r of ROUTES) { if (r !== "/admin" && !r.startsWith("/admin/") && !r.startsWith("/api/")) allPaths.add(r); }
  for (const p of posts) allPaths.add(`/blog/${p.slug}`); // admin markdown posts aren't in ROUTES

  const rows = [...allPaths].sort().map((path) => {
    const admin = adminByPath.get(path);
    const meta = metaByPath.get(path);
    const keyword = (admin?.focusKeyword || meta?.focusKeyword || "").trim();
    const secondaryKeywords = (admin?.secondaryKeywords || meta?.secondaryKeywords || []) as string[];
    const price = priceByUrl.get(path);
    // Live title/meta (override wins, else the route's computed meta) for the quick SEO score.
    const m = metaForPath(path);
    const title = (meta?.title || (typeof m.title === "string" ? m.title : "")).trim();
    const description = (meta?.description || (typeof m.description === "string" ? m.description : "")).trim();
    const slug = path.replace(/^\/+|\/+$/g, "");
    const seo = quickSeo(title, description, slug, keyword);
    // Featured (social/Google) image: admin OG override wins, else the route's topic image, else none
    // (the site-wide og-default fallback is treated as "not set for this page").
    const topic = imageForRoute(path);
    const image = (meta?.ogImage || topic?.src || "").trim();
    const imageAlt = topic?.alt || "";
    const imageSet = !!image;
    return {
      path,
      type: classify(path),
      keyword,
      secondaryKeywords,
      hasKeyword: !!keyword,
      kind: admin ? "post" : "page",
      postId: admin?.id,
      title,
      description,
      score: seo.score,
      scoreColor: seo.color,
      image,
      imageAlt,
      imageSet,
      priceId: price ? price.id : null,
      price: price ? price.price : null,
      timeline: price ? price.timeline : null,
      warranty: price ? price.warranty : null,
    };
  });

  return NextResponse.json({ ok: true, count: rows.length, withKeyword: rows.filter((r) => r.hasKeyword).length, rows }, { headers: NOINDEX });
}

export async function PUT(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  const path = String(body?.path || "");
  const keyword = String(body?.keyword || "").trim().slice(0, 120);
  if (!path) return NextResponse.json({ ok: false, error: "path required" }, { status: 400, headers: NOINDEX });

  if (body?.kind === "post" && typeof body?.postId === "number") {
    const ok = await updatePost(body.postId, { focusKeyword: keyword });
    return NextResponse.json({ ok }, { status: ok ? 200 : 404, headers: NOINDEX });
  }
  // Merge focusKeyword into the existing page-meta override (preserve title/desc/etc.).
  const existing = (await readPageMeta()).find((m) => m.path === path) || { path };
  const ok = await upsertPageMeta({ ...existing, path, focusKeyword: keyword });
  return NextResponse.json({ ok }, { status: ok ? 200 : 500, headers: NOINDEX });
}

// Bulk action: seed a starter target keyword (derived from the URL slug) for EVERY URL that has none.
// Idempotent — only fills blanks, never overwrites a keyword the owner has set. POST {action:"seed-keywords"}.
export async function POST(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });
  const body = await req.json().catch(() => ({}));
  if (body?.action !== "seed-keywords") return NextResponse.json({ ok: false, error: "unknown action" }, { status: 400, headers: NOINDEX });

  const [posts, pageMeta] = await Promise.all([readPosts(), readPageMeta()]);
  const adminByPath = new Map(posts.map((p) => [`/blog/${p.slug}`, p]));
  const metaByPath = new Map(pageMeta.map((m) => [m.path, m]));

  const allPaths = new Set<string>();
  for (const r of ROUTES) { if (r !== "/admin" && !r.startsWith("/admin/") && !r.startsWith("/api/")) allPaths.add(r); }
  for (const p of posts) allPaths.add(`/blog/${p.slug}`);

  let filled = 0;
  for (const path of allPaths) {
    const admin = adminByPath.get(path);
    const meta = metaByPath.get(path);
    const current = (admin?.focusKeyword || meta?.focusKeyword || "").trim();
    if (current) continue; // never overwrite
    const kw = keywordFromPath(path).slice(0, 120);
    if (!kw) continue;
    if (admin) await updatePost(admin.id, { focusKeyword: kw });
    else await upsertPageMeta({ ...(meta || { path }), path, focusKeyword: kw });
    filled++;
  }
  return NextResponse.json({ ok: true, filled }, { headers: NOINDEX });
}
