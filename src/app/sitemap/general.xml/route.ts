import { ROUTES } from "@/lib/routes.generated";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const EXCLUDE = /^\/(admin|landing-template-demo|blog)(\/|$)/;
const SERVICE_KW = /(screen|battery|keyboard|logic|water|trackpad|charging|speaker|camera|microphone|hinge|gpu|ssd|ram|fan|data|virus|overheat|touch|power|safe|backup|flexgate|cleaning|thermal|wifi|bluetooth|display|recovery|unlock|diagnostic|reinstall|maintenance|performance|port|activation|setup|migration|tune)/;
const MODEL_KW = /(macbook-air-|macbook-pro-|imac-[0-9]|mac-mini-[a-z]|mac-studio-[a-z]|mac-pro-[a-z0-9]+-[0-9]|iphone-[0-9]|iphone-(se|x[sr]?|air|fold)|ipad-pro-|ipad-air-[0-9m]|ipad-mini-[0-9]|ipad-[0-9])/;
const LOCATION_KW = /^\/macbook-repair-(?!near-me|cost|dubai$)[a-z-]+$/;
const GUIDE_KW = /^\/(how-to|how-do|how-can|do-macbooks|top-10|macbook-guides)/;
const DEVICE_KW = /^\/(macbook|mac|iphone|ipad|imac|ipod|apple)-/;

// Exclude noindex pages: /cookies is a legal boilerplate page with no search value.
const NOINDEX_PATHS = new Set(["/cookies"]);

const isGeneral = (p: string) =>
  p !== "/" &&
  !NOINDEX_PATHS.has(p) &&
  !EXCLUDE.test(p) &&
  !MODEL_KW.test(p) &&
  !LOCATION_KW.test(p) &&
  !GUIDE_KW.test(p) &&
  !(SERVICE_KW.test(p) || DEVICE_KW.test(p));

export function GET() {
  const urls = ["/", ...ROUTES.filter(isGeneral)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p, i) => `  <url><loc>${SITE}${p === "/" ? "/" : p + "/"}</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>${i === 0 ? "daily" : "monthly"}</changefreq><priority>${i === 0 ? "1.0" : "0.6"}</priority></url>`).join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
