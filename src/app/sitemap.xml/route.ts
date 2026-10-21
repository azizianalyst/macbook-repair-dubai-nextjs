import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";
import { GET as services } from "../sitemap/services.xml/route";
import { GET as models } from "../sitemap/models.xml/route";
import { GET as locations } from "../sitemap/locations.xml/route";
import { GET as blog } from "../sitemap/blog.xml/route";
import { GET as guides } from "../sitemap/guides.xml/route";
import { GET as general } from "../sitemap/general.xml/route";
import { GET as categories } from "../sitemap/categories.xml/route";
import { GET as images } from "../sitemap/images.xml/route";

const SITE = "https://macbook-repair-dubai.ae";

// tags.xml removed: tag listing pages are noindex (thin content) — keeping them
// out of the sitemap index frees crawl budget for money pages.
const CHILD_SITEMAPS: [string, () => Response][] = [
  ["services.xml", services],
  ["models.xml", models],
  ["locations.xml", locations],
  ["blog.xml", blog],
  ["guides.xml", guides],
  ["general.xml", general],
  ["categories.xml", categories],
  ["images.xml", images],
];

// Each child's <lastmod> is the newest <lastmod> inside it, so the index moves
// whenever a page in that child changes instead of sitting on a fixed setting.
async function newestLastmod(get: () => Response): Promise<string> {
  const xml = await get().text();
  const dates = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
  return dates.sort().at(-1) ?? SITEMAP_LAST_UPDATED;
}

export async function GET() {
  const rows = await Promise.all(
    CHILD_SITEMAPS.map(async ([s, get]) => `  <sitemap><loc>${SITE}/sitemap/${s}</loc><lastmod>${await newestLastmod(get)}</lastmod></sitemap>`),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows.join("\n")}
</sitemapindex>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
