import { ROUTES } from "@/lib/routes.generated";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const isGuide = (p: string) =>
  /^\/(how-to|how-do|how-can|do-macbooks|top-10|macbook-guides)/.test(p);

export function GET() {
  const urls = ROUTES.filter(isGuide);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE}${p}/</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
