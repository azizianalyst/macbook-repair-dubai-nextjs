import { ROUTES } from "@/lib/routes.generated";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const isLocation = (p: string) =>
  /^\/macbook-repair-(?!near-me|cost|dubai$)[a-z-]+$/.test(p);

export function GET() {
  const urls = ROUTES.filter(isLocation);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE}${p}/</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
