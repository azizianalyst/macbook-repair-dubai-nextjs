import { CATEGORIES } from "@/content/blog-posts";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

export function GET() {
  const urls = CATEGORIES.map((c) => `${SITE}/blog/${c.slug}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
