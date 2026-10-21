// Rank Math–style on-page SEO analysis. Runs in the browser (admin editor) against a post's
// focus keyword + SEO title + meta description + slug + rendered HTML body, and returns a 0–100
// score plus a grouped pass/warn/fail checklist — the signature Rank Math experience.
// No DOM dependency (regex over our own controlled markdown→HTML), so it's reusable on pages too.

export type TestStatus = "good" | "warn" | "bad";
export type TestGroup = "Basic SEO" | "Additional" | "Title Readability" | "Content Readability";
export type SeoTest = { id: string; group: TestGroup; label: string; status: TestStatus; note?: string };
export type SeoResult = { score: number; color: TestStatus; tests: SeoTest[]; hasKeyword: boolean };

export type SeoInput = {
  focusKeyword?: string;        // primary keyword (drives title/meta/URL/first-paragraph tests)
  secondaryKeywords?: string[]; // up to 4 secondary keywords (checked in subheadings/content/alt)
  seoTitle?: string;
  metaDescription?: string;
  slug?: string;       // bare slug, no /blog/ prefix
  html?: string;       // rendered markdown
};

// Small power-word list (Rank Math ships a large one; this covers the high-value repair-intent words).
const POWER_WORDS = [
  "free", "instantly", "instant", "proven", "easy", "fast", "save", "best", "guide", "ultimate",
  "essential", "top", "expert", "trusted", "guaranteed", "same-day", "affordable", "cheap", "quick",
  "official", "complete", "step-by-step", "how", "why", "fix", "fixed", "avoid", "warning", "new",
];

const lc = (s?: string) => (s || "").toLowerCase();
const stripTags = (html: string) => html.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/gi, " ").replace(/\s+/g, " ").trim();
const wordCount = (text: string) => (text ? text.split(/\s+/).filter(Boolean).length : 0);

function matchAll(html: string, re: RegExp): string[] {
  const out: string[] = []; let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) out.push(m[1] ?? m[0]);
  return out;
}

// Weighted score: each test contributes weight × fraction(0..1). Keyword-dependent tests are dropped
// from the denominator when no focus keyword is set, so the score reflects only what's gradeable.
type Raw = { id: string; group: TestGroup; label: string; weight: number; frac: number; needsKw: boolean; note?: string };

function statusFor(frac: number): TestStatus {
  return frac >= 0.9 ? "good" : frac >= 0.4 ? "warn" : "bad";
}

export function analyzeSeo(input: SeoInput): SeoResult {
  const kw = lc(input.focusKeyword).trim();
  const hasKeyword = kw.length > 0;
  // Primary + secondary keywords (Rank Math model): primary drives title/meta/URL/start tests; the
  // subheading/content/alt tests pass if ANY keyword (primary or secondary) is present.
  const secKws = (input.secondaryKeywords || []).map((k) => lc(k).trim()).filter(Boolean);
  const allKws = [kw, ...secKws].filter(Boolean);
  const anyIn = (s: string) => hasKeyword && allKws.some((k) => lc(s).includes(k));
  const title = input.seoTitle || "";
  const desc = input.metaDescription || "";
  const slug = lc(input.slug);
  const html = input.html || "";
  const text = stripTags(html);
  const textLc = lc(text);
  const words = wordCount(text);

  const headings = matchAll(html, /<h[2-6][^>]*>([\s\S]*?)<\/h[2-6]>/gi).map(stripTags);
  const paragraphs = matchAll(html, /<p\b[^>]*>([\s\S]*?)<\/p>/gi).map(stripTags);
  const imgs = matchAll(html, /<img\b[^>]*>/gi);
  const imgAlts = imgs.map((tag) => (tag.match(/alt="([^"]*)"/i)?.[1] ?? ""));
  const hrefs = matchAll(html, /<a\b[^>]*href="([^"]+)"/gi);
  const internalLinks = hrefs.filter((h) => h.startsWith("/") || h.includes("macbook-repair-dubai.ae"));
  const externalLinks = hrefs.filter((h) => /^https?:\/\//i.test(h) && !h.includes("macbook-repair-dubai.ae"));

  const kwIn = (s: string) => hasKeyword && lc(s).includes(kw);
  const firstChunk = textLc.slice(0, Math.max(120, Math.floor(textLc.length * 0.1)));

  // keyword density
  let density = 0;
  if (hasKeyword && words > 0) {
    const occ = (textLc.match(new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g")) || []).length;
    density = (occ / words) * 100;
  }
  const densityFrac = !hasKeyword ? 0 : density >= 0.3 && density <= 2.5 ? 1 : density > 0 && density < 0.3 ? 0.5 : density > 2.5 ? 0.4 : 0;

  // content length: full at 1000+, scaled down to 300
  const lengthFrac = words >= 1000 ? 1 : words >= 600 ? 0.7 + ((words - 600) / 400) * 0.3 : words >= 300 ? 0.3 + ((words - 300) / 300) * 0.4 : (words / 300) * 0.3;

  const titleLc = lc(title);
  const kwAtTitleStart = hasKeyword && titleLc.trimStart().startsWith(kw);

  const longParas = paragraphs.filter((p) => wordCount(p) > 120).length;
  const shortParaFrac = paragraphs.length === 0 ? 0 : longParas === 0 ? 1 : longParas <= 1 ? 0.6 : 0.3;

  const mediaFrac = imgs.length >= 1 ? 1 : 0;
  const tocFrac = headings.length >= 4 ? 1 : headings.length >= 2 ? 0.7 : headings.length === 1 ? 0.4 : 0;

  const raw: Raw[] = [
    // Basic SEO
    { id: "kw-title", group: "Basic SEO", label: "Focus keyword in the SEO title", weight: 9, frac: kwIn(title) ? 1 : 0, needsKw: true },
    { id: "kw-meta", group: "Basic SEO", label: "Focus keyword in the meta description", weight: 6, frac: kwIn(desc) ? 1 : 0, needsKw: true },
    { id: "kw-url", group: "Basic SEO", label: "Focus keyword in the URL", weight: 5, frac: hasKeyword && slug.includes(kw.replace(/\s+/g, "-")) ? 1 : 0, needsKw: true },
    { id: "kw-start", group: "Basic SEO", label: "Focus keyword near the start of the content", weight: 6, frac: hasKeyword && firstChunk.includes(kw) ? 1 : 0, needsKw: true },
    { id: "kw-content", group: "Basic SEO", label: "Focus keyword appears in the content", weight: 5, frac: anyIn(text) ? 1 : 0, needsKw: true },
    { id: "length", group: "Basic SEO", label: `Content length (${words} words)`, weight: 10, frac: lengthFrac, needsKw: false, note: words < 600 ? "Aim for 600+ words" : undefined },
    // Additional
    { id: "kw-subhead", group: "Additional", label: "Keyword in a subheading (H2–H3)", weight: 5, frac: hasKeyword && headings.some((h) => anyIn(h)) ? 1 : 0, needsKw: true },
    { id: "kw-alt", group: "Additional", label: "Keyword in an image alt attribute", weight: 4, frac: hasKeyword && imgAlts.some((a) => anyIn(a)) ? 1 : 0, needsKw: true },
    { id: "density", group: "Additional", label: `Keyword density (${density.toFixed(1)}%)`, weight: 5, frac: densityFrac, needsKw: true, note: density > 2.5 ? "A bit high — avoid stuffing" : undefined },
    { id: "url-len", group: "Additional", label: "URL length is reasonable", weight: 3, frac: slug.length === 0 ? 1 : slug.length <= 75 ? 1 : 0.4, needsKw: false },
    { id: "internal", group: "Additional", label: "Links to internal pages", weight: 5, frac: internalLinks.length > 0 ? 1 : 0, needsKw: false, note: internalLinks.length === 0 ? "Add a link to a service page" : undefined },
    { id: "external", group: "Additional", label: "Links to an external source", weight: 3, frac: externalLinks.length > 0 ? 1 : 0, needsKw: false },
    // Title readability
    { id: "kw-title-start", group: "Title Readability", label: "Focus keyword at the beginning of the title", weight: 4, frac: kwAtTitleStart ? 1 : (kwIn(title) ? 0.5 : 0), needsKw: true },
    { id: "title-number", group: "Title Readability", label: "Title contains a number", weight: 3, frac: /\d/.test(title) ? 1 : 0, needsKw: false },
    { id: "title-power", group: "Title Readability", label: "Title contains a power word", weight: 3, frac: POWER_WORDS.some((w) => titleLc.includes(w)) ? 1 : 0, needsKw: false },
    // Content readability
    { id: "toc", group: "Content Readability", label: "Uses subheadings to structure content", weight: 4, frac: tocFrac, needsKw: false },
    { id: "short-paras", group: "Content Readability", label: "Uses short paragraphs", weight: 4, frac: shortParaFrac, needsKw: false, note: longParas > 0 ? `${longParas} long paragraph(s)` : undefined },
    { id: "media", group: "Content Readability", label: `Uses media (${imgs.length} image${imgs.length === 1 ? "" : "s"})`, weight: 4, frac: mediaFrac, needsKw: false, note: imgs.length === 0 ? "Add at least one image" : undefined },
  ];

  let earned = 0, possible = 0;
  for (const t of raw) {
    if (t.needsKw && !hasKeyword) continue;
    possible += t.weight;
    earned += t.weight * t.frac;
  }
  const score = possible === 0 ? 0 : Math.round((earned / possible) * 100);

  const tests: SeoTest[] = raw.map((t) => ({
    id: t.id,
    group: t.group,
    label: t.label,
    status: t.needsKw && !hasKeyword ? "warn" : statusFor(t.frac),
    note: t.needsKw && !hasKeyword ? "Set a focus keyword" : t.note,
  }));

  return { score, color: score >= 81 ? "good" : score >= 51 ? "warn" : "bad", tests, hasKeyword };
}
