// Google image sitemap: every route that carries a topic infographic, with the
// image URL, so Google indexes the images under OUR domain first (first-indexed
// wins attribution when copies appear elsewhere). License URL embedded per the
// Google Images licensable-image spec. The homepage lists its real workshop photos.
import { ROUTES } from "@/lib/routes.generated";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { LASTMOD } from "@/content/lastmod.generated";
import { sitemapImagesForRoute } from "@/lib/page-images";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";
// /blog/tag/* is noindex (see src/app/blog/tag/*/page.tsx) — listing a noindex URL in a
// sitemap contradicts the page's own robots directive and shows up in GSC as
// "Submitted URL marked 'noindex'", so it is excluded here too.
const EXCLUDE = /^\/(admin|landing-template-demo|blog\/tag)(\/|$)/;

export function GET() {
  const entries = ROUTES.filter((p) => !EXCLUDE.test(p))
    .map((p) => ({ path: p, imgs: sitemapImagesForRoute(p) }))
    .filter((e) => e.imgs.length > 0);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE}${e.path === "/" ? "/" : `${e.path}/`}</loc>
    <lastmod>${LASTMOD[e.path] ?? SITEMAP_LAST_UPDATED}</lastmod>
${e.imgs
  .map(
    (img) => `    <image:image>
      <image:loc>${SITE}${img.src}</image:loc>
    </image:image>`,
  )
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
