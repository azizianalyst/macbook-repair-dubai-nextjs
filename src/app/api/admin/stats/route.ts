import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { requireAdmin } from "@/lib/admin-auth";
import { readPosts, readReviews, readPrices, readBacklinks, readPageMeta } from "@/lib/seo-store";
import { readLeads } from "@/lib/store";
import { POSTS, CATEGORIES } from "@/content/blog-posts";
import { AREAS } from "@/content/areas";
import { CITIES } from "@/content/cities";
import { ROUTES } from "@/lib/routes.generated";

// Owner-only dashboard counts (read-only; no generator). Mixes live store counts with static
// build-time counts so the Dashboard tiles show real numbers.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NOINDEX = { "X-Robots-Tag": "noindex" };

export async function GET(req: Request) {
  if (!requireAdmin(req)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401, headers: NOINDEX });

  const [posts, reviews, prices, backlinks, pageMeta, leads] = await Promise.all([
    readPosts(), readReviews(), readPrices(), readBacklinks(), readPageMeta(), readLeads().catch(() => []),
  ]);
  let media = 0;
  try { media = (await fs.readdir(path.join(process.cwd(), "public", "images", "uploads"))).filter((f) => /\.(jpe?g|png|webp|avif|gif)$/i.test(f)).length; } catch {}

  const adminSlugs = new Set(posts.map((p) => "/blog/" + p.slug));
  const builtinPosts = POSTS.filter((p) => !adminSlugs.has(p.slug)).length;
  const newLeads = leads.filter((l) => l.status === "New").length;

  const counts = {
    posts: posts.length + builtinPosts,        // all blog posts
    markdownPosts: posts.length,
    drafts: posts.filter((p) => p.status === "draft").length,
    pages: ROUTES.length,
    categories: CATEGORIES.length,
    reviews: reviews.length,
    prices: prices.length,
    media,
    backlinks: backlinks.length,
    leads: leads.length,
    newLeads,
    pageOverrides: pageMeta.length,
    areas: AREAS.length,
    cities: CITIES.length,
  };
  return NextResponse.json({ ok: true, counts }, { headers: NOINDEX });
}
