import { ROUTES } from "@/lib/routes.generated";
import { POSTS } from "@/content/blog-posts";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { LASTMOD } from "@/content/lastmod.generated";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

// The how-to guides live under /blog/, not at the root. This pattern only ever
// matched root-level paths, so 17 indexable guide pages appeared in NO sitemap:
// guides.xml missed them on the prefix, and blog.xml is driven by the POSTS
// registry, which does not contain them either. (audit 2026-09-23)
const GUIDE_RE = /^(?:\/blog)?\/(how-to|how-do|how-can|do-macbooks|top-10|where-to|what-causes|why-does|why-is|macbook-guides)/;
const isGuide = (p: string) => GUIDE_RE.test(p);

export function GET() {
  // POSTS-backed URLs belong to blog.xml; everything else matching a guide shape
  // is ours. Keeps the two sitemaps disjoint so no URL is listed twice.
  const inBlogSitemap = new Set(POSTS.map((p) => p.slug));
  const urls = ROUTES.filter((p) => isGuide(p) && !inBlogSitemap.has(p));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE}${p}/</loc><lastmod>${LASTMOD[p] ?? SITEMAP_LAST_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
