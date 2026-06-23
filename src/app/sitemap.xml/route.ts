import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const CHILD_SITEMAPS = [
  "services.xml",
  "models.xml",
  "locations.xml",
  "blog.xml",
  "guides.xml",
  "general.xml",
  "categories.xml",
  // tags.xml removed: tag listing pages are noindex (thin content) — keeping them
  // out of the sitemap index frees crawl budget for money pages.
  "images.xml",
];

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${CHILD_SITEMAPS.map((s) => `  <sitemap><loc>${SITE}/sitemap/${s}</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod></sitemap>`).join("\n")}
</sitemapindex>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
