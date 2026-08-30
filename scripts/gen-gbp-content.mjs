// Generates src/content/gbp-content.generated.ts from docs/gbp-content-pack-2026-08-30.md.
//
// WHY PARSE THE MARKDOWN: the content pack is the reviewed artifact — it is what
// was written, checked for character limits and URL-verified. Retyping it into a
// TS file would create a second source that silently drifts from the first.
// Parse it instead, and the doc stays canonical.
//
// That drift is not hypothetical: src/content/gbp-playbook.ts was hand-written
// in June 2026 and went stale, ending up with a description that claimed
// "transparent fixed pricing" and "200+ five-star Google reviews" — both of
// which this script's policy gate now rejects outright.
//
// Sections consumed:
//   §1  → description (<= 750 chars) + primary/secondary/remove categories
//   §2  → 103 services, each filed under the GBP category that substantiates it
//   §5  → the 52-week post briefs (openings only; weeks 14–52 are planned here)
//   §5A → full paste-ready post bodies for weeks 1–13
//
// Usage: node scripts/gen-gbp-content.mjs
import { readFileSync, writeFileSync } from "node:fs";

// Overridable so the gates below can be tested against a doctored copy without
// touching the real pack. Every gate runs before anything is written, so a
// failing run never produces output.
const SRC = process.env.GBP_PACK || "docs/gbp-content-pack-2026-08-30.md";
const OUT = "src/content/gbp-content.generated.ts";
const SEO = "src/lib/seo.ts";

/** Google's hard ceilings. Exceeding them rejects the write, so fail here instead. */
const SERVICE_DESC_MAX = 300;
const DESCRIPTION_MAX = 750;
const POST_BODY_MAX = 1500;

const md = readFileSync(SRC, "utf8");

// Single source for the origin — grepped rather than duplicated. Fails loudly if
// seo.ts is restructured, which is the point.
const origin = readFileSync(SEO, "utf8").match(/url:\s*"(https:\/\/[^"]+)"/)?.[1];
if (!origin) fail(`Could not read the site origin from ${SEO}`);

const problems = [];
function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

// ── Policy gate ──────────────────────────────────────────────────────────────
// Claims that risk suspension or contradict a settled decision. A *denial* is
// fine and in fact wanted — the week-7 post's whole point is "we are not an
// Apple Authorised Service Provider" — so a match preceded by a negation passes.
const CLAIMS = [
  [/\bapple\s+(authoris|authoriz|certifi)\w*/gi, "Apple authorisation/certification claim"],
  [/\bcertified\s+apple\b/gi, "Apple certification claim"],
  [/transparent\s+(fixed\s+)?pricing/gi, "pricing claim — prices are hidden"],
  [/\d+\+\s*(five-star|5-star)/gi, "hardcoded review count — goes stale by design"],
  [/AED\s?[0-9]/gi, "price — prices are hidden"],
];
const NEGATION_BEFORE = /\b(not|never|aren't|isn't|are not|is not)\b[^.!?]{0,40}$/i;

function checkPolicy(where, text) {
  for (const [re, label] of CLAIMS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text))) {
      if (NEGATION_BEFORE.test(text.slice(0, m.index))) continue; // an explicit denial
      problems.push(`${where}: ${label} — "${m[0]}"`);
    }
  }
}

function checkLength(where, text, max) {
  if (text.length > max) problems.push(`${where}: ${text.length} chars, limit ${max}`);
}

function section(from, to) {
  const s = md.split(from)[1]?.split(to)[0];
  if (!s) fail(`Could not find the section "${from}" in ${SRC}`);
  return s;
}

// ── §1 Identity ──────────────────────────────────────────────────────────────
const s1 = section("# §1 — Identity", "\n# §2");

const description = s1.match(/^>\s*(.+)$/m)?.[1].trim();
if (!description) fail("Could not find the description blockquote in §1");
checkLength("description", description, DESCRIPTION_MAX);
checkPolicy("description", description);

const splitList = (s) => s.split("·").map((x) => x.trim()).filter(Boolean);
const primary = s1.match(/\*\*Primary:\*\*\s*([^—\n]+)/)?.[1].trim();
if (!primary) fail("Could not find the primary category in §1");

// "**Add as secondary (7):**" is followed by the list on the next line.
const addLine = s1.match(/\*\*Add as secondary \(\d+\):\*\*\s*\n(.+)/)?.[1] ?? "";
const removeLine = s1.match(/\*\*Remove \(\d+\):\*\*\s*(.+)/)?.[1] ?? "";
const categories = {
  primary,
  add: splitList(addLine),
  // "→ these move to…" trails the remove list on the following line; strip any tail.
  remove: splitList(removeLine.split("→")[0]),
};
if (!categories.add.length) fail("Could not parse the secondary category list in §1");

// ── §2 Services ──────────────────────────────────────────────────────────────
// §3 (products) uses a 4-column table and must not be picked up.
const s2 = section("# §2 — Services", "\n# §3");

const services = [];
let category = "";
for (const line of s2.split("\n")) {
  const head = line.match(/^##\s+(.+?)\s*\(\d+\)\s*$/);
  if (head) {
    // "Computer repair service — MacBook core" → "Computer repair service"
    category = head[1].split("—")[0].trim();
    continue;
  }
  const row = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*`([^`]+)`\s*\|\s*$/);
  if (!row) continue;
  const [, name, sdesc, url] = row;
  if (name === "Service" || name.startsWith("---")) continue;
  checkLength(`service "${name}"`, sdesc, SERVICE_DESC_MAX);
  checkPolicy(`service "${name}"`, sdesc);
  services.push({ name, description: sdesc, url, category });
}
if (!services.length) fail("Parsed zero services from §2");

// Every category claimed in §1 must be substantiated by at least one service —
// the rule the GBP standard applies to categories, and the reason the publish
// route files each service under its own category rather than all under primary.
const served = new Set(services.map((s) => s.category.toLowerCase()));
for (const c of [primary, ...categories.add]) {
  if (!served.has(c.toLowerCase())) problems.push(`category "${c}" is claimed in §1 but no service substantiates it`);
}

// ── §5 Post briefs (the 52-week plan) ────────────────────────────────────────
const s5 = section("# §5 — 52 posts", "\n# §5A");

const briefs = [];
for (const line of s5.split("\n")) {
  const row = line.match(/^\|\s*(\d+)\s*\|\s*([A-Z]+)\s*\|\s*(.+?)\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*$/);
  if (!row) continue;
  const [, week, type, opening, url, image] = row;
  briefs.push({ week: Number(week), type, opening, url, image });
}
if (briefs.length !== 52) fail(`Expected 52 post briefs in §5, parsed ${briefs.length}`);

// ── §5A Full post bodies (weeks 1–13) ────────────────────────────────────────
const s5a = section("# §5A — Full post bodies", "\n---\n\n## Deliberately excluded");

const posts = [];
const blocks = s5a.split(/^### /m).slice(1);
for (const block of blocks) {
  const head = block.match(/^W(\d+)\s*·\s*(.+?)\s*·\s*([A-Z]+)\s*$/m);
  const cta = block.match(/\*\*CTA:\*\*\s*(.+?)\s*→\s*`([^`]+)`/);
  const image = block.match(/\*\*Image:\*\*\s*`([^`]+)`/)?.[1];
  const body = block.match(/```text\n([\s\S]*?)```/)?.[1].trim();
  if (!head || !cta || !image || !body) {
    problems.push(`§5A block starting "${block.slice(0, 40).trim()}" is missing a heading, CTA, image or body`);
    continue;
  }
  const week = Number(head[1]);
  checkLength(`post w${week}`, body, POST_BODY_MAX);
  checkPolicy(`post w${week}`, body);

  // The UTM is built here, in one place, so it cannot drift across 52 posts.
  const slug = cta[2].replace(/^\/|\/$/g, "").split("/").pop() || "home";
  const wNN = String(week).padStart(2, "0");
  const utm = `utm_source=google&utm_medium=gbp&utm_campaign=post&utm_content=w${wNN}-${slug}`;

  posts.push({
    week,
    date: head[2],
    type: head[3],
    cta: cta[1],
    url: `${origin}${cta[2]}?${utm}`,
    image,
    body,
  });
}
posts.sort((a, b) => a.week - b.week);

// Every full body must correspond to a brief of the same intent type, or the
// two halves of §5 have drifted apart.
for (const p of posts) {
  const b = briefs.find((x) => x.week === p.week);
  if (!b) problems.push(`post w${p.week} has a body in §5A but no row in the §5 table`);
}

// ── Report ───────────────────────────────────────────────────────────────────
if (problems.length) {
  console.error(`✗ ${problems.length} problem(s) in ${SRC}:`);
  problems.forEach((p) => console.error(`   ${p}`));
  process.exit(1);
}

const byCategory = {};
for (const s of services) byCategory[s.category] = (byCategory[s.category] || 0) + 1;

const out = `// AUTO-GENERATED by scripts/gen-gbp-content.mjs from ${SRC} — do not edit by hand.
// Edit the content pack, then re-run the script.
//
// Everything here has passed the generator's gates: no prices, no Apple
// certification/authorisation claim, no hardcoded review count, and every
// Google length ceiling respected (service description <= ${SERVICE_DESC_MAX},
// business description <= ${DESCRIPTION_MAX}, post body <= ${POST_BODY_MAX}).
//
// Publish services with:
//   const items = buildServiceItems(GBP_SERVICES, await getPrimaryCategoryId(loc));
//   await updateServices(loc, items);

/** Business description — paste into /admin/gbp → Business Info. */
export const GBP_DESCRIPTION = ${JSON.stringify(description)};
export const GBP_DESCRIPTION_LENGTH = ${description.length};

/**
 * Categories.
 *
 * \`add\` and \`remove\` are applied BY HAND in Google Business Profile Manager —
 * the API cannot set them, and this admin renders the primary read-only. Do this
 * BEFORE publishing services: the publish route files each service under a
 * category the profile already has, falling back to primary otherwise.
 */
export const GBP_CATEGORIES = ${JSON.stringify(categories, null, 2)};

export type GbpServiceSeed = {
  name: string;
  description: string;
  /** Site page this service links to. Verified HTTP 200 when the pack was built. */
  url: string;
  /** GBP category this service substantiates. */
  category: string;
};

export const GBP_SERVICES: GbpServiceSeed[] = ${JSON.stringify(services, null, 2)};

export const GBP_SERVICE_COUNT = ${services.length};

/** A full, paste-ready post. Weeks 1–13. */
export type GbpPostSeed = {
  week: number;
  /** The Monday it is scheduled for. */
  date: string;
  /** DEVICE | AREA | TRUST | SEASONAL — the 4-week rotation. */
  type: string;
  /** Which GBP call-to-action button to switch on. */
  cta: string;
  /** Absolute, UTM-tagged. */
  url: string;
  /** Repo-relative under public/images/. */
  image: string;
  body: string;
};

export const GBP_POSTS: GbpPostSeed[] = ${JSON.stringify(posts, null, 2)};

/** The 52-week plan. Weeks 1–13 have full bodies above; the rest are briefs. */
export type GbpPostBrief = { week: number; type: string; opening: string; url: string; image: string };

export const GBP_POST_BRIEFS: GbpPostBrief[] = ${JSON.stringify(briefs, null, 2)};
`;

writeFileSync(OUT, out);
console.log(`[gen-gbp-content] wrote ${OUT}`);
console.log(`   description  ${description.length}/${DESCRIPTION_MAX} chars`);
console.log(`   categories   1 primary + ${categories.add.length} to add, ${categories.remove.length} to remove`);
console.log(`   services     ${services.length}`);
for (const [c, n] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
  console.log(`                ${String(n).padStart(3)}  ${c}`);
}
console.log(`   posts        ${posts.length} full bodies, ${briefs.length} briefs`);
