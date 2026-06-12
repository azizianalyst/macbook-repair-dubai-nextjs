import { ROUTES } from "@/lib/routes.generated";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const MODEL_KW = /(macbook-air-|macbook-pro-|imac-[0-9]|mac-mini-[a-z]|mac-studio-[a-z]|mac-pro-[a-z0-9]+-[0-9]|iphone-[0-9]|iphone-(se|x[sr]?|air|fold)|ipad-pro-|ipad-air-[0-9m]|ipad-mini-[0-9]|ipad-[0-9])/;
const EXCLUDE = /^\/(admin|landing-template-demo|blog)(\/|$)/;

const isModel = (p: string) => !EXCLUDE.test(p) && MODEL_KW.test(p);

export function GET() {
  const urls = ROUTES.filter(isModel);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
