import { POSTS } from "@/content/blog-posts";
import { SITEMAP_LAST_UPDATED } from "@/content/site";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const MONTH: Record<string, string> = {
  January: "01", February: "02", March: "03", April: "04",
  May: "05", June: "06", July: "07", August: "08",
  September: "09", October: "10", November: "11", December: "12",
};

function postLastmod(date: string): string {
  const [month, year] = date.split(" ");
  if (!month || !year || !MONTH[month]) return "2026-01-01";
  return `${year}-${MONTH[month]}-01`;
}

export function GET() {
  // Driven by the blog post registry — auto-updates whenever a post is added to blog-posts.ts.
  // The /blog index hub is prepended explicitly: every other sitemap EXCLUDEs ^/blog, and this
  // file otherwise lists only posts, so without this the hub would be absent from all sitemaps.
  const entries = [
    `  <url><loc>${SITE}/blog/</loc><lastmod>${SITEMAP_LAST_UPDATED}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    ...POSTS.map((p) => `  <url><loc>${SITE}${p.slug}/</loc><lastmod>${postLastmod(p.date)}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
