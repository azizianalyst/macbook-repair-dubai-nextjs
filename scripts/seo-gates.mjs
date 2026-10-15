#!/usr/bin/env node
// SEO + truth gates on the prerendered build (.next/server/app). Run after `npm run build`.
//
//   node scripts/seo-gates.mjs                 # report; exit 1 on any violation not in the baseline
//   node scripts/seo-gates.mjs --write-baseline  # record today's known debt (never to hide new debt)
//   node scripts/seo-gates.mjs --json
//
// The baseline is a ratchet: known violations are listed so the backlog can be burned down,
// but any NEW violation fails. Shrink the baseline as pages are fixed; never add to it by hand.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BUILD = path.join(ROOT, ".next/server/app");
const BASELINE = path.join(ROOT, "scripts/seo-gates.baseline.json");
const args = new Set(process.argv.slice(2));

if (!existsSync(BUILD)) {
  console.error("No build at .next/server/app. Run `npm run build` first.");
  process.exit(2);
}

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;|&#160;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const norm = (s) => decode(s).replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim().toLowerCase();
const stripUrls = (s) => s.replace(/https?:\/\/\S+/g, " ").replace(/\b[\w-]+\.(ae|com|net|org)\/\S*/g, " ");

function visibleText(html) {
  return decode(
    html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  ).replace(/\s+/g, " ");
}

const pages = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = path.join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith(".html")) {
      let url = "/" + path.relative(BUILD, p).replace(/\.html$/, "");
      if (url === "/index") url = "/";
      if (url.startsWith("/admin") || url.startsWith("/_") || /\/_(not-found|global-error)/.test(url)) continue;
      pages.push({ url, file: p });
    }
  }
})(BUILD);

// Business-level claims only. "Apple Certified Mac Technician" is a verified personal credential.
const BANNED = [
  [/\bapple[- ]authori[sz]ed\b/i, "Apple authorised"],
  [/\bapple[- ]certified\b(?! mac technician)/i, "Apple certified (business)"],
  [/\bauthori[sz]ed (apple )?service provider\b/i, "authorised service provider"],
  [/\b(we are|we're|dubai'?s|uae'?s|the) (no\.? ?1|number one|#1) (apple|mac|macbook|iphone|repair|laptop)/i, "No.1 claim"],
  [/\b(dubai'?s|uae'?s) (best|leading|top|cheapest)\b/i, "superlative"],
  [/\b(the )?(best|leading|cheapest|lowest[- ]priced?) (apple|mac|macbook|iphone|ipad|imac|repair|laptop) (repair|service|shop|centre|center|technicians?)\b/i, "superlative"],
  [/\bleading (apple|mac|repair)\b/i, "superlative"],
  [/\bguaranteed\b/i, "guaranteed"],
  [/\blowest prices?\b/i, "lowest price"],
  // Free pickup/delivery ended 2026-10-15 (fact sheet). Onsite visits are paid, never free.
  [/\bfree (pick-?up|collection|delivery|courier|home visit|onsite|on-site)\b/i, "free pickup/delivery (discontinued)"],
  [/\b(we|our courier|our driver) (will )?(collect|pick (it )?up) (it|your|from|and deliver)\b/i, "we collect (discontinued)"],
];
const AI_PHRASES = [
  /\bdelve\b/i, /\belevate\b/i, /\bseamless(ly)?\b/i, /\brobust\b/i, /\bgame[- ]changer\b/i,
  /in today'?s fast[- ]paced world/i, /it'?s worth noting/i, /\bin conclusion\b/i,
  /\bhassle[- ]free\b/i, /\bstress[- ]free\b/i, /\beffortless(ly)?\b/i, /\bpeace of mind\b/i,
  /\blook no further\b/i, /\brest assured\b/i, /\btop[- ]notch\b/i, /\bcutting[- ]edge\b/i,
  /\bstate[- ]of[- ]the[- ]art\b/i, /\bleverag(e|es|ing)\b/i, /\bstreamlin(e|ed|es|ing)\b/i,
  /\bembark\b/i, /\butili[sz](e|es|ed|ing)\b/i, /\bfurthermore\b/i, /\bmoreover\b/i,
  /\bdon'?t hesitate to\b/i, /\ba testament to\b/i, /\bplays? a crucial role\b/i,
];

const violations = []; // { url, gate, detail }
const add = (url, gate, detail) => violations.push({ url, gate, detail });

for (const { url, file } of pages) {
  const html = readFileSync(file, "utf8");
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;

  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || "").trim();
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || "").trim();
  const h1s = html.match(/<h1[\s>]/gi) || [];
  const text = visibleText(html);

  if (!title) add(url, "title-missing", "");
  else if (title.length > 60) add(url, "title-length", `${title.length}: ${title}`);
  if (!desc) add(url, "meta-missing", "");
  else if (desc.length > 155) add(url, "meta-too-long", `${desc.length}`);
  else if (desc.length < 140) add(url, "meta-too-short", `${desc.length}`);
  if (h1s.length !== 1) add(url, "h1-count", `${h1s.length}`);

  const claimText = stripUrls(`${title} ${desc} ${text}`);
  // Customer reviews are quoted verbatim: AI-phrase and ended-service checks skip them.
  const ownText = stripUrls(`${title} ${desc} ${visibleText(html.replace(/<article data-customer-review[\s\S]*?<\/article>/gi, " "))}`);
  for (const [re, label] of BANNED) {
    const src = /discontinued/.test(label) ? ownText : claimText;
    for (const m of src.matchAll(new RegExp(re.source, "gi"))) {
      const before = src.slice(Math.max(0, m.index - 60), m.index).toLowerCase();
      const after = src.slice(m.index + m[0].length, m.index + m[0].length + 40).toLowerCase();
      // Status claims are fine inside a denial, a description of Apple's own network,
      // or when "certified" describes an Apple product rather than us.
      if (/authori|certified \(business/i.test(label)) {
        if (/\b(not|no|never|without|isn't|aren't|or|than|vs\.?|with|via|also works|apple store|are you( an?)?|years of)\b|n't\b/.test(before)) continue;
        if (/^\W*(service providers\b|ones\b|channels|refurb|vs\b|cables|tb\d|mpx)|^\)/.test(after)) continue;
      }
      // A buyer's guide may name the query it answers ("how to choose the best MacBook repair shop").
      if (label === "superlative") {
        if (/\b(choose|choosing|find|finding|what makes|what is)\b[^.]{0,20}$/.test(before)) continue;
        if (/^[^.]{0,25}(what to look for|checks? before|how to choose)/.test(after)) continue;
      }
      add(url, "banned-claim", `${label}: "${m[0]}"`);
      break;
    }
  }
  for (const re of AI_PHRASES) {
    const m = ownText.match(re);
    if (m) add(url, "ai-phrase", m[0]);
  }

  // FAQPage JSON-LD must match the visible FAQ.
  const visible = norm(text);
  for (const block of html.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []) {
    let data;
    try { data = JSON.parse(block.replace(/^<script[^>]*>|<\/script>$/gi, "")); } catch { continue; }
    const nodes = [];
    (function collect(n) {
      if (Array.isArray(n)) return n.forEach(collect);
      if (n && typeof n === "object") {
        const t = n["@type"];
        if (t === "FAQPage" || (Array.isArray(t) && t.includes("FAQPage"))) nodes.push(n);
        Object.values(n).forEach(collect);
      }
    })(data);
    for (const faq of nodes) {
      for (const q of [].concat(faq.mainEntity || [])) {
        const name = norm(String(q.name || ""));
        if (name && !visible.includes(name)) add(url, "faq-schema-not-visible", `Q: ${q.name}`.slice(0, 120));
        const ans = norm(visibleText(String(q.acceptedAnswer?.text || ""))).slice(0, 60);
        if (ans && !visible.includes(ans)) add(url, "faq-answer-not-visible", `Q: ${q.name}`.slice(0, 120));
      }
    }
  }
}

const key = (v) => `${v.url}|${v.gate}|${v.detail}`;
if (args.has("--write-baseline")) {
  writeFileSync(BASELINE, JSON.stringify(violations.map(key).sort(), null, 0).replace(/","/g, '",\n"') + "\n");
  console.log(`Baseline written: ${violations.length} known violations.`);
  process.exit(0);
}
const known = new Set(existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, "utf8")) : []);
const fresh = violations.filter((v) => !known.has(key(v)));
const fixed = [...known].filter((k) => !violations.some((v) => key(v) === k)).length;

const byGate = {};
for (const v of violations) byGate[v.gate] = (byGate[v.gate] || 0) + 1;

if (args.has("--json")) {
  console.log(JSON.stringify({ pages: pages.length, byGate, newViolations: fresh, fixedSinceBaseline: fixed }, null, 1));
} else {
  console.log(`Checked ${pages.length} pages.`);
  for (const [g, n] of Object.entries(byGate).sort()) console.log(`  ${g.padEnd(24)} ${n}`);
  console.log(`Known debt (baseline): ${known.size} · fixed since baseline: ${fixed} · NEW: ${fresh.length}`);
  for (const v of fresh.slice(0, 50)) console.log(`  NEW ${v.gate}  ${v.url}  ${v.detail}`);
}
process.exit(fresh.length ? 1 : 0);
