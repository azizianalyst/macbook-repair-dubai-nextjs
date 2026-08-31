#!/usr/bin/env node
/**
 * template-audit.mjs — grades pages against the Azizi template standard.
 *
 * Source of truth for the standard itself lives in the sibling project:
 *   ~/Claude/Projects/azizitechnologies.ae/_delivery/PAGE-TEMPLATE-STANDARD.md
 * The port into this codebase is src/components/azizi/{AziziTemplate,modules}.tsx.
 *
 *   node scripts/template-audit.mjs                       # summary
 *   node scripts/template-audit.mjs --json                # machine-readable
 *   node scripts/template-audit.mjs --page macbook-air-repair-dubai
 *   node scripts/template-audit.mjs --base https://macbook-repair-dubai.ae
 *
 * WHY HTTP AND NOT out/
 * ---------------------
 * The azizitechnologies.ae original walks `out/**\/index.html`, because that
 * site is a static export. This project builds as a Node app — there is no
 * `out/`, and `.next/server/app` holds compiled modules rather than a complete
 * set of HTML files. So this version fetches the server-rendered HTML over HTTP
 * instead.
 *
 * That also sidesteps the `cv-auto` trap the source documents twice: measuring
 * a live browser DOM gives false passes because `content-visibility: auto`
 * makes off-screen sections report empty innerText. Server-rendered HTML has no
 * such problem — nothing has been hidden yet.
 *
 * Start the dev server (npm run dev) or point --base at production.
 *
 * WHY TIERS, NOT ONE CHECKLIST
 * ----------------------------
 * The 24-module template describes a commercial LANDING page. A blog post is
 * not "missing" the location module — it would be WRONG with one. Pages are
 * graded against the tier they belong to.
 *
 * A check is STRUCTURAL (derivable from data — safe to fix template-wide) or
 * EDITORIAL (needs written prose — cannot be mass-produced without becoming
 * filler, which is scaled content abuse). Reported separately, because only the
 * first kind can be fixed by a template edit.
 *
 * TRUST THIS SCRIPT LAST. The original produced four false positives before it
 * was reliable, three of which looked like real site-wide problems. When it
 * reports a large number, open one page by hand before editing anything.
 */
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const onlyPage = args.includes("--page") ? args[args.indexOf("--page") + 1] : null;
const BASE = args.includes("--base") ? args[args.indexOf("--base") + 1] : "http://localhost:3000";

/** The 8 GSC money pages rebuilt to the full 24-module template. */
const LANDING = new Set([
  "macbook-air-repair-dubai",
  "apple-repair-dubai",
  "ipad-repair-dubai",
  "iphone-battery-replacement-dubai",
  "imac-repair-dubai",
  "iphone-repair-dubai",
  "mac-data-recovery-dubai",
  "macbook-pro-repair-dubai",
]);

/** Navigation and policy pages: graded on technical basics only. */
const UTILITY =
  /^(|about|contact|blog|reviews|pricing|privacy|terms|cookies|refund|warranty|image-usage-license|sitemap|landing-template-demo)$/;

const CHECKS = [
  // id, label, kind, test(html)
  ["h1", "exactly one H1", "structural", (h) => (h.match(/<h1[\s>]/gi) || []).length === 1],
  ["title", "title present", "structural", (h) => /<title>[^<]{10,}<\/title>/i.test(h)],
  ["meta", "meta description", "structural", (h) => /name="description" content="[^"]{50,}"/i.test(h)],
  ["meta-len", "meta ≤155 chars", "structural", (h) => {
    const m = h.match(/name="description" content="([^"]*)"/i);
    return !m || m[1].length <= 155;
  }],
  ["meta-cta", "meta has a CTA word", "editorial", (h) => {
    const m = h.match(/name="description" content="([^"]*)"/i);
    return !m || /\b(quote|audit|call|contact|book|free|whatsapp)\b/i.test(m[1]);
  }],
  ["meta-price", "no price in meta", "structural", (h) => {
    const m = h.match(/name="description" content="([^"]*)"/i);
    return !m || !/AED\s?[0-9]/i.test(m[1]);
  }],
  ["canonical", "canonical", "structural", (h) => /rel="canonical"/i.test(h)],
  ["schema", "JSON-LD", "structural", (h) => /application\/ld\+json/i.test(h)],
  ["schema-url", "schema not scoped to /", "structural", (h, slug) =>
    slug === "" || !/"url"\s*:\s*"https?:\/\/[^"/]+\/?"\s*,\s*"@id"\s*:\s*"[^"]*#webpage"/.test(h)],
  ["og", "og:image", "structural", (h) => /property="og:image"/i.test(h)],
  ["breadcrumb", "breadcrumb schema", "structural", (h) => /BreadcrumbList/.test(h)],
  ["internal", "20+ internal links", "structural", (h) => (h.match(/href="\/[a-z]/g) || []).length >= 20],
  ["hero-img", "hero image is LCP-primed", "structural", (h) =>
    /fetchPriority="high"/i.test(h) || /fetchpriority="high"/i.test(h) || /loading="eager"/i.test(h)],
  ["faq", "FAQ block", "editorial", (h) => /FAQPage|Frequently asked/i.test(h)],
  ["aeo", "AEO answer block", "editorial", (h) => /quick-answer|Quick answer|Key takeaways/i.test(h)],
  ["takeaways", "key takeaways", "editorial", (h) => /Key takeaways/i.test(h)],
  /* Three ways this site names an author, not just the template's phrasing.
     The source's first draft looked only for "Reviewed by" and flagged 573
     healthy blog posts that all emit a Person node. */
  ["byline", "author byline", "editorial", (h) =>
    /Reviewed by|Written by/i.test(h) ||
    /"author":\s*\{[^}]*"@type"\s*:\s*"Person"/.test(h) ||
    /itemprop="author"/i.test(h)],
  /* Any on-page capture counts. This site's LeadForm has no email requirement
     (phone is the required field), so testing for type="email" would report
     every page as formless while it converts fine. */
  ["form", "on-page lead form", "structural", (h) =>
    /aria-pressed/.test(h) || (/<form[\s>]/i.test(h) && /type="submit"|Send request|Get a quote/i.test(h))],
  ["team", "named technicians", "editorial", (h) => /years on Apple hardware|Lead technician/i.test(h)],
];

/** Modules that must NOT appear on an article — topic mismatch, not absence. */
const ARTICLE_FORBIDDEN = [
  ["maps", /maps\/embed\?pb=/],
  ["parts", /Parts and tooling we use/i],
];

const TIERS = {
  landing: ["h1","title","meta","meta-len","meta-cta","meta-price","canonical","schema","schema-url","og","breadcrumb","internal","hero-img","faq","aeo","takeaways","byline","form","team"],
  service: ["h1","title","meta","meta-len","meta-cta","meta-price","canonical","schema","schema-url","og","breadcrumb","internal","faq","aeo","form"],
  article: ["h1","title","meta","meta-len","meta-price","canonical","schema","og","breadcrumb","internal","byline"],
  index:   ["h1","title","meta","meta-len","canonical","schema","internal"],
};

function tierOf(slug, html) {
  if (LANDING.has(slug)) return "landing";
  if (UTILITY.test(slug)) return "index";
  if (slug.startsWith("blog/") || /BlogPosting/i.test(html)) return "article";
  // Question-shaped slugs are explainers, not sellable services.
  if (/^(how|why|what|can|is|does|where|which|the)-/.test(slug)) return "article";
  return "service";
}

function routes() {
  const src = readFileSync("src/lib/routes.generated.ts", "utf8");
  return [...src.matchAll(/"(\/[^"]*)"/g)]
    .map((m) => m[1])
    .filter((r) => !r.startsWith("/admin"));
}

async function grade(route) {
  const slug = route.replace(/^\/|\/$/g, "");
  let html = "";
  try {
    const res = await fetch(`${BASE}${route.endsWith("/") ? route : route + "/"}`, {
      headers: { "User-Agent": "template-audit" },
    });
    html = await res.text();
    if (!res.ok) return { slug, tier: "unreachable", required: 0, failed: [], wrong: [], status: res.status };
  } catch {
    return { slug, tier: "unreachable", required: 0, failed: [], wrong: [], status: 0 };
  }
  const tier = tierOf(slug, html);
  const required = TIERS[tier];
  const failed = [];
  for (const [id, label, kind, test] of CHECKS) {
    if (!required.includes(id)) continue;
    let ok = false;
    try { ok = test(html, slug); } catch { ok = false; }
    if (!ok) failed.push({ id, label, kind });
  }
  const wrong = [];
  if (tier === "article") for (const [id, re] of ARTICLE_FORBIDDEN) if (re.test(html)) wrong.push(id);
  const h2 = (html.match(/<h2[\s>]/gi) || []).length;
  const h3 = (html.match(/<h3[\s>]/gi) || []).length;
  const links = new Set((html.match(/href="(\/[a-z][^"#?]*)"/g) || [])).size;
  const faqs = (html.match(/"@type"\s*:\s*"Question"/g) || []).length;
  return { slug, tier, required: required.length, failed, wrong, h2, h3, links, faqs };
}

const score = (r) => (r.required ? Math.round(((r.required - r.failed.length) / r.required) * 100) : 0);

const targets = onlyPage
  ? [onlyPage.startsWith("/") ? onlyPage : `/${onlyPage}`]
  : routes();

const rows = [];
// Small concurrency: a dev server compiles routes on demand and falls over if
// you hit it with 50 parallel requests.
const CONC = 6;
for (let i = 0; i < targets.length; i += CONC) {
  rows.push(...(await Promise.all(targets.slice(i, i + CONC).map(grade))));
}

if (onlyPage) {
  const r = rows[0];
  console.log(`\n${r.slug || "(home)"}  tier=${r.tier}  score=${score(r)}%`);
  console.log(`  H2 ${r.h2} · H3 ${r.h3} · internal links ${r.links} · FAQs ${r.faqs}`);
  for (const f of r.failed) console.log(`  MISSING [${f.kind}] ${f.label}`);
  for (const w of r.wrong) console.log(`  WRONG-TIER ${w} does not belong on an article`);
  if (!r.failed.length && !r.wrong.length) console.log("  clean");
  process.exit(0);
}

if (asJson) { console.log(JSON.stringify(rows, null, 1)); process.exit(0); }

const byTier = {};
for (const r of rows) (byTier[r.tier] ||= []).push(r);

console.log(`\nTEMPLATE AUDIT — ${rows.length} pages via ${BASE}\n${"=".repeat(60)}`);
for (const [tier, list] of Object.entries(byTier)) {
  if (tier === "unreachable") { console.log(`\nUNREACHABLE  ${list.length} pages`); continue; }
  const avg = Math.round(list.reduce((a, r) => a + score(r), 0) / list.length);
  const clean = list.filter((r) => !r.failed.length && !r.wrong.length).length;
  console.log(`\n${tier.toUpperCase()}  ${list.length} pages · avg ${avg}% · ${clean} fully clean`);
  const counts = {};
  for (const r of list) for (const f of r.failed) counts[`${f.kind}:${f.label}`] = (counts[`${f.kind}:${f.label}`] || 0) + 1;
  for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 12)) {
    console.log(`   ${String(v).padStart(4)} missing  ${k}`);
  }
}
const gradable = rows.filter((r) => r.tier !== "unreachable");
const overall = Math.round(gradable.reduce((a, r) => a + score(r), 0) / gradable.length);
console.log(`\n${"=".repeat(60)}\nOVERALL ${overall}%  ·  ${gradable.filter((r) => !r.failed.length && !r.wrong.length).length}/${gradable.length} fully clean\n`);
