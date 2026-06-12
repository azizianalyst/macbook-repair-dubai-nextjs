import { POSTS } from "@/content/blog-posts";
import { NextResponse } from "next/server";

const SITE = "https://macbook-repair-dubai.ae";

const MONTH: Record<string, number> = {
  January: 0, February: 1, March: 2, April: 3,
  May: 4, June: 5, July: 6, August: 7,
  September: 8, October: 9, November: 10, December: 11,
};

// "June 2026" → Date (first of month); unparseable dates sort last
function postDate(date: string): Date {
  const [month, year] = date.split(" ");
  if (!month || !year || MONTH[month] === undefined) return new Date(Date.UTC(2026, 0, 1, 12));
  return new Date(Date.UTC(Number(year), MONTH[month], 1, 12));
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  // Driven by the blog post registry — auto-updates whenever a post is added to blog-posts.ts.
  const items = [...POSTS]
    .sort((a, b) => postDate(b.date).getTime() - postDate(a.date).getTime())
    .map((p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE}${p.slug}</link>
      <guid isPermaLink="true">${SITE}${p.slug}</guid>
      <description>${esc(p.excerpt)}</description>
      <category>${esc(p.category)}</category>
      <dc:creator>${esc(p.author)}</dc:creator>
      <pubDate>${postDate(p.date).toUTCString()}</pubDate>
    </item>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>MacBook Repair Dubai — Apple Repair Guides &amp; News</title>
    <link>${SITE}/blog</link>
    <description>Technician-written guides on MacBook, iPhone, iPad and Mac repair in Dubai — costs, fixes, buying advice and Apple news from a workshop with 21+ years of experience.</description>
    <language>en-ae</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;
  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
