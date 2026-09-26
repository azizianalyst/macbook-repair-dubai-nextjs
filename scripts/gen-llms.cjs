// Generates public/llms.txt and public/llms-full.txt (llmstxt.org format) from the site's own
// sources of truth, so the files AI crawlers read can never drift from the live site again.
// Replaces the hand-maintained June 2026 files (4 H1 lines, 23 dead URLs, 364 missing pages,
// no trailing slashes, AED prices, Apple TV/HomePod claims, a stale review count) - see
// docs/seo-master-plan-2026-09-26.md item 1.7 and docs/repo-audit-2026-09-26.md section 5(d).
//
// Sources (nothing here is hand-typed business data):
//   routes      src/lib/routes.generated.ts (+ admin-authored posts from posts.generated.ts)
//   titles      the SAME precedence the site renders: src/lib/page-meta.ts metaForPath /
//               metaFromFields (admin overrides > dynamic-meta OVERRIDE > route-meta > data-driven
//               > slug fallback), then un-clamped to the full source string when the 60/155-char
//               SERP clamp cut it short
//   noindex     page.tsx robots literals, the admin Page SEO store (robots/canonical), site settings
//   redirects   next.config.ts redirects() + src/content/redirects.generated.ts (redirected = not live)
//   facts       src/content/site.ts (NAP, hours, REVIEW_COUNT, founding date, WARRANTY, TEAM founder)
//
// The .ts sources are loaded with a tiny in-process transpile via the project's own `typescript`
// devDependency (already required by `next build`), so no new dependency is needed.
//
// Policy enforced on every emitted string (docs/seo-master-plan-2026-09-26.md section 2):
//   - no AED/Dh amounts (quotes are given on WhatsApp)
//   - independent, never "Apple Authorised/Certified" (only an explicit "not Authorised" disclaimer)
//   - no Apple Watch / AirPods / Apple TV / HomePod service (not offered in-house)
//
// Fail-soft like gen-lastmod.cjs: on any error it logs loudly and keeps the committed files, so
// a generator bug can never block a deploy build.
const fs = require("fs");
const path = require("path");
const Module = require("module");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "src");
const APP = path.join(SRC, "app");
const OUT_SHORT = path.join(ROOT, "public", "llms.txt");
const OUT_FULL = path.join(ROOT, "public", "llms-full.txt");
const SITE = "https://macbook-repair-dubai.ae";

// ---------------------------------------------------------------------------------------------
// Tiny TS loader: transpile .ts/.tsx on require, resolve the "@/..." alias to src/.
// ---------------------------------------------------------------------------------------------
function installTsLoader() {
  const ts = require(path.join(ROOT, "node_modules", "typescript"));
  const origResolve = Module._resolveFilename;
  Module._resolveFilename = function (request, parent, ...rest) {
    if (request.startsWith("@/")) request = path.join(SRC, request.slice(2));
    return origResolve.call(this, request, parent, ...rest);
  };
  const compile = function (module, filename) {
    const out = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      fileName: filename,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        esModuleInterop: true,
        jsx: ts.JsxEmit.ReactJSX,
      },
    });
    module._compile(out.outputText, filename);
  };
  require.extensions[".ts"] = compile;
  require.extensions[".tsx"] = compile;
}

// ---------------------------------------------------------------------------------------------
// Text policy helpers
// ---------------------------------------------------------------------------------------------
function decodeEntities(s) {
  return String(s)
    .replace(/&quot;/g, '"')
    .replace(/&#(?:0*39|x0*27);/gi, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// Same phone-suffix rule page-meta.ts applies to titles.
const PHONE_IN_TITLE = /\s*[|\-–·]\s*(?:Call\s+)?0?5?5\s*741\s*3706\.?\s*$/i;
// Trailing call-to-action sentence on descriptions; the phone is stated once in the file header
// instead. Only a whole sentence is dropped (lookbehind), never the tail of "... - call 055 ...".
const TRAILING_CTA = /(?<=[.!?])\s+(?:(?:Call|WhatsApp)(?:\s+us)?(?:\s+on)?\s+(?:\+?971\s?|0)?5?5\s*741\s*3706|Call us(?: today)?)\.?\s*$/;

// Strip any AED / Dh amount (and the bare currency word). Quotes are given on WhatsApp.
const NUM = String.raw`\d+(?:,\d{3})*(?:\.\d+)?`;
const PRICE_BEFORE = new RegExp(String.raw`\(?\s*(?:(?:from|starting (?:at|from)|just|only|for|at|under|around|approx\.?)\s+)?(?:AED|Dhs?)\.?\s?${NUM}(?:\s*(?:-|–|to)\s*(?:(?:AED|Dhs?)\.?\s?)?${NUM})?\s*\)?`, "gi");
const PRICE_AFTER = new RegExp(String.raw`\(?\s*(?:(?:from|just|only|for|at|under|around)\s+)?${NUM}(?:\s*(?:-|–|to)\s*${NUM})?\s*(?:AED|Dhs?)\b\s*\)?`, "gi");
function stripPrices(s) {
  return String(s)
    .replace(PRICE_BEFORE, " ")
    .replace(PRICE_AFTER, " ")
    .replace(/\bAED\b/gi, "")
    .replace(/\(\s*\)/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .replace(/([.,;:])\1+/g, "$1")
    .trim();
}

const PRICE_RE = /AED|Dh\s?\d|\d+\s?AED/i;
const CLAIM_RE = /authori[sz]ed|certified/i;
const OFF_POLICY_RE = /apple\s*watch|airpods|apple\s*tv|homepod/i;
const OFF_POLICY_PATH = /(?:^|\/|-)(?:apple-watch|airpods|apple-tv|appletv|homepod)(?:-|\/|$)/i;

function claimOk(s) {
  if (!CLAIM_RE.test(s)) return true;
  // Every authorised/certified mention must sit inside a "not ... Authorised" disclaimer.
  const stripped = s.replace(/\bnot\s+(?:an?\s+)?(?:apple[\s-]+)?authori[sz]ed(?:\s+service\s+provider)?/gi, "");
  return !CLAIM_RE.test(stripped);
}

function cleanTitleFull(t) {
  return stripPrices(decodeEntities(t).replace(PHONE_IN_TITLE, "").trim());
}
function cleanDesc(d) {
  let s = stripPrices(decodeEntities(d).trim());
  const noCta = s.replace(TRAILING_CTA, "").trim();
  if (noCta.length >= 40) s = noCta;
  return s;
}

// Markdown-safe link text.
function mdText(s) {
  return String(s).replace(/([\[\]])/g, "\\$1");
}

function urlFor(p) {
  return SITE + (p === "/" ? "/" : p + "/");
}

// ---------------------------------------------------------------------------------------------
// Route discovery + indexability
// ---------------------------------------------------------------------------------------------
function redirectMatchers(nextConfigRedirects, contentRedirects) {
  const exact = new Set();
  const patterns = [];
  for (const r of nextConfigRedirects || []) {
    if (r.has || r.missing) continue; // host/header-conditional (www -> apex), not path redirects
    const src = r.source;
    if (!src.includes(":")) {
      exact.add(src.replace(/\/$/, "") || "/");
      continue;
    }
    // Minimal path-to-regexp: ":x*" -> any, ":x" -> one segment, "(...)" groups kept.
    const re =
      "^" +
      src
        .replace(/[.+?^${}[\]\\]/g, "\\$&")
        .replace(/\/:[A-Za-z0-9_]+\*/g, "(?:/.*)?")
        .replace(/:[A-Za-z0-9_]+(\([^)]*\))/g, "$1")
        .replace(/:[A-Za-z0-9_]+/g, "[^/]+") +
      "/?$";
    try {
      patterns.push(new RegExp(re));
    } catch {
      /* unparseable pattern: ignore */
    }
  }
  for (const k of Object.keys(contentRedirects || {})) exact.add(k.replace(/\/$/, "") || "/");
  return (p) => exact.has(p) || patterns.some((re) => re.test(p));
}

function readPageSource(route) {
  const f = path.join(APP, route === "/" ? "" : route, "page.tsx");
  try {
    return fs.readFileSync(f, "utf8");
  } catch {
    return "";
  }
}

// Parse metaFromFields("<path>", { title: "...", description: "..." }) literals from a page.tsx.
function inlineFields(src) {
  const m = src.match(
    /metaFromFields\(\s*"[^"]*"\s*,\s*\{\s*title:\s*("(?:[^"\\]|\\.)*")\s*,\s*description:\s*("(?:[^"\\]|\\.)*")/,
  );
  if (!m) return null;
  try {
    return { title: JSON.parse(m[1]), description: JSON.parse(m[2]) };
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------------------------
// Clusters (llms.txt "## " sections), in output order.
// ---------------------------------------------------------------------------------------------
const SECTIONS = [
  { id: "core", title: "Core pages" },
  { id: "macbook-services", title: "MacBook services" },
  { id: "macbook-models", title: "MacBook models" },
  { id: "desktops", title: "iMac, Mac mini, Mac Studio, Mac Pro and displays" },
  { id: "iphone", title: "iPhone" },
  { id: "ipad", title: "iPad" },
  { id: "data", title: "Data recovery" },
  { id: "areas", title: "Areas served" },
  { id: "sell", title: "Sell and trade-in" },
  { id: "guides", title: "Guides and blog" },
  { id: "company", title: "Company and legal" },
  { id: "optional", title: "Optional" }, // blog posts, last per the llms.txt spec
];

// Hubs lead their section, in this order; everything else follows alphabetically.
const LEADS = {
  core: ["/", "/apple-repair-dubai", "/macbook-repair-dubai", "/mac-repair-dubai", "/apple-service-center-dubai", "/contact", "/pricing"],
  "macbook-services": ["/macbook-screen-repair-dubai", "/macbook-battery-replacement-dubai", "/macbook-keyboard-repair-dubai", "/macbook-logic-board-repair-dubai", "/macbook-water-damage-repair-dubai"],
  "macbook-models": ["/macbook-air-repair-dubai", "/macbook-pro-repair-dubai", "/macbook-neo-repair-dubai"],
  desktops: ["/imac-repair-dubai", "/mac-mini-repair-dubai", "/mac-studio-repair-dubai", "/mac-pro-repair-dubai", "/apple-display-repair-dubai"],
  iphone: ["/iphone-repair-dubai"],
  ipad: ["/ipad-repair-dubai"],
  data: ["/mac-data-recovery-dubai", "/macbook-data-recovery-dubai"],
  areas: ["/macbook-repair-media-city", "/macbook-repair-al-sufouh"],
  sell: ["/sell-macbook-dubai"],
  guides: ["/blog", "/macbook-guides"],
  company: ["/about", "/reviews", "/warranty"],
};

const LOCATION_RE = /^\/macbook-repair-(?!near-me|cost|dubai$)[a-z0-9-]+$/;
const COMPANY = new Set(["/about", "/reviews", "/warranty", "/privacy", "/terms", "/refund", "/image-usage-license", "/cookies"]);
const CORE_EXACT = new Set(["/", "/contact", "/pricing", "/macbook-repair-dubai", "/mac-repair-dubai", "/macbook-repair-near-me-dubai", "/mac-repair-near-me-dubai", "/macbook-repair-cost-calculator-dubai", "/mac-repair-cost-dubai", "/macbook-insurance-dubai"]);

function classify(p, categorySlugs) {
  if (COMPANY.has(p)) return "company";
  if (CORE_EXACT.has(p)) return "core";
  if (p === "/blog" || p === "/macbook-guides") return "guides";
  if (p.startsWith("/blog/")) {
    const seg = p.slice("/blog/".length);
    return categorySlugs.has(seg) ? "guides" : "optional";
  }
  if (/^\/(sell|trade-in)-/.test(p)) return "sell";
  if (/data-recovery|backup-service/.test(p)) return "data";
  if (LOCATION_RE.test(p)) return "areas";
  if (!/-dubai$/.test(p)) return "guides"; // question-style guide slugs (no service suffix)
  if (/^\/(iphone|ipod)-/.test(p) || p === "/best-iphone-repair-dubai") return "iphone";
  if (/^\/ipad-/.test(p)) return "ipad";
  if (/^\/(imac|mac-mini|mac-studio|mac-pro|studio-display)-/.test(p) || p === "/apple-display-repair-dubai") return "desktops";
  if (/^\/macbook-(air|pro|neo)-repair-dubai$/.test(p)) return "macbook-models";
  if (/^\/macbook-(air|pro|neo)-/.test(p) && /-(?:\d{2}|m\d|intel|a18)(?:-|$)/.test(p)) return "macbook-models";
  if (/^\/(macbook|mac|macos)-/.test(p) || p === "/boot-camp-windows-macbook-dubai") return "macbook-services";
  return "core"; // general Apple-repair hubs: apple-*, best-*, same-day, onsite, corporate, AMC...
}

// ---------------------------------------------------------------------------------------------
// Business facts
// ---------------------------------------------------------------------------------------------
function formatPhoneIntl(e164) {
  const m = String(e164).match(/^\+971(\d{2})(\d{3})(\d{4})$/);
  return m ? `+971 ${m[1]} ${m[2]} ${m[3]}` : String(e164);
}

function hoursSummary(hours) {
  const groups = [];
  for (const h of hours) {
    const last = groups[groups.length - 1];
    if (last && last.open === h.open) last.to = h.day;
    else groups.push({ from: h.day, to: h.day, open: h.open });
  }
  return groups
    .map((g) => `${g.from === g.to ? g.from : `${g.from} to ${g.to}`}: ${/closed/i.test(g.open) ? "closed" : g.open}`)
    .join("; ");
}

// ---------------------------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------------------------
async function main() {
  installTsLoader();
  const load = (rel) => require(path.join(ROOT, rel));

  const { ROUTES } = load("src/lib/routes.generated.ts");
  const pageMeta = load("src/lib/page-meta.ts");
  const { ROUTE_META } = load("src/lib/route-meta.generated.ts");
  const dyn = load("src/lib/dynamic-meta.ts");
  const site = load("src/content/site.ts");
  const { SITE_SETTINGS } = load("src/content/settings.generated.ts");
  const { CATEGORIES } = load("src/content/blog-taxonomy.generated.ts");
  const { ADMIN_POST_RENDER } = load("src/content/posts.generated.ts");
  const { REDIRECTS: CONTENT_REDIRECTS } = load("src/content/redirects.generated.ts");

  let configRedirects = [];
  try {
    const cfg = load("next.config.ts").default;
    if (cfg && typeof cfg.redirects === "function") configRedirects = await cfg.redirects();
  } catch (e) {
    console.warn("[gen-llms] could not evaluate next.config.ts redirects (" + e.message + ") - using redirects.generated.ts only");
    try {
      configRedirects = load("redirects.generated.ts").REDIRECTS || [];
    } catch {
      configRedirects = [];
    }
  }
  const isRedirected = redirectMatchers(configRedirects, CONTENT_REDIRECTS);

  // Admin Page SEO store, read directly as a belt-and-braces noindex source (the same flags are
  // baked into page-meta-overrides.generated.ts, which metaForPath already honours).
  let storePageMeta = {};
  try {
    storePageMeta = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "seo.json"), "utf8")).pageMeta || {};
  } catch {
    /* not present on every build host */
  }

  const categorySlugs = new Set((CATEGORIES || []).map((c) => c.slug));
  const excluded = [];
  const pages = [];

  const candidates = [];
  for (const r of ROUTES) candidates.push({ path: r, kind: "route" });
  for (const [slug, post] of Object.entries(ADMIN_POST_RENDER || {})) {
    const p = (post.path || `/blog/${slug}`).replace(/\/$/, "");
    if (!ROUTES.includes(p)) candidates.push({ path: p, kind: "admin-post", post });
  }

  for (const c of candidates) {
    const p = c.path;
    const why = (reason) => excluded.push({ path: p, reason });

    if (/^\/(admin|api)(\/|$)/.test(p)) { why("private"); continue; }
    if (/-template-demo(\/|$)/.test(p)) { why("noindex demo"); continue; }
    if (/^\/blog\/tag(\/|$)/.test(p)) { why("noindex tag listing"); continue; }
    if (SITE_SETTINGS.siteNoindex) { why("site noindex switch"); continue; }
    if (p === "/" && SITE_SETTINGS.homepageNoindex) { why("homepage noindex switch"); continue; }
    if (isRedirected(p)) { why("redirected"); continue; }
    if (OFF_POLICY_PATH.test(p)) { why("service not offered in-house (Apple Watch/AirPods/Apple TV/HomePod)"); continue; }
    const store = storePageMeta[p];
    if (store && store.noindex) { why("noindex (admin store)"); continue; }

    let meta;
    let inline = null;
    if (c.kind === "admin-post") {
      if (c.post.robots && c.post.robots.noindex) { why("noindex (admin post)"); continue; }
      inline = { title: c.post.seoTitle, description: c.post.seoDescription };
      meta = pageMeta.metaFromFields(p, inline);
    } else {
      const src = readPageSource(p);
      if (/\brobots\s*:\s*\{[^}]*\bindex\s*:\s*false/.test(src)) { why("noindex (page robots)"); continue; }
      inline = /metaFromFields\(/.test(src) ? inlineFields(src) : null;
      if (/metaFromFields\(/.test(src) && !inline) console.warn("[gen-llms] could not parse metaFromFields literals in " + p + " - using metaForPath");
      meta = inline ? pageMeta.metaFromFields(p, inline) : pageMeta.metaForPath(p);
    }
    if (meta.robots && meta.robots.index === false) { why("noindex (meta)"); continue; }
    const canonical = meta.alternates && meta.alternates.canonical;
    if (canonical && String(canonical).replace(/\/$/, "") !== urlFor(p).replace(/\/$/, "")) { why("canonicalised to " + canonical); continue; }

    // Un-clamp: the rendered title/description are cut to 60/155 chars for the SERP. llms.txt
    // has no such limit, so recover the full source string the clamp was cut from - searching
    // the sources in the same precedence the site uses, so the winner never changes.
    const admin = dyn.adminMetaOverride(p) || {};
    const override = dyn.metaOverride(p) || {};
    const routeMeta = ROUTE_META[p] || {};
    const data = dyn.dynamicMeta(p) || {};
    // Only the source that actually WINS by the site's precedence may be used, and only to
    // undo the SERP clamp. metaForPath: admin title/description per field, else the first
    // entry of metaOverride ?? ROUTE_META ?? dynamicMeta; metaFromFields: the inline fields.
    // (Scanning every lower-priority source let a stale string that merely started with the
    // rendered title replace it - ~42 llms titles differed from the live site.)
    const entry = Object.keys(override).length ? override : Object.keys(routeMeta).length ? routeMeta : data;
    const winTitle = inline ? inline.title : (admin.title || entry.title);
    const winDesc = inline ? inline.description : (admin.description || entry.description);
    const rendTitle = String(meta.title || "");
    let title = rendTitle;
    if (winTitle) {
      const full = decodeEntities(winTitle).replace(PHONE_IN_TITLE, "").trim();
      if (full.length > rendTitle.length && full.startsWith(rendTitle.replace(/…$/, ""))) title = full;
    }
    const rendDesc = String(meta.description || "");
    const rendStem = rendDesc.replace(/…$/, "");
    let fullDesc = rendDesc;
    if (winDesc) {
      const full = decodeEntities(winDesc).trim();
      if (full.length > rendStem.length && full.startsWith(rendStem)) fullDesc = full;
    }

    title = cleanTitleFull(title);
    const shortDesc = cleanDesc(rendDesc);
    const longDesc = cleanDesc(fullDesc);

    // Policy gates on the page's own copy.
    if (OFF_POLICY_RE.test(title)) { why("title promises a service not offered in-house"); continue; }
    if (!claimOk(title)) { why("title carries an Authorised/Certified claim"); continue; }
    const safeShort = OFF_POLICY_RE.test(shortDesc) || !claimOk(shortDesc) ? "" : shortDesc;
    const safeLong = OFF_POLICY_RE.test(longDesc) || !claimOk(longDesc) ? safeShort : longDesc;

    pages.push({ path: p, section: classify(p, categorySlugs), title, shortDesc: safeShort, longDesc: safeLong });
  }

  // Order within sections: hubs first, then alphabetical by path.
  const bySection = new Map(SECTIONS.map((s) => [s.id, []]));
  for (const pg of pages) bySection.get(pg.section).push(pg);
  for (const [id, list] of bySection) {
    const lead = LEADS[id] || [];
    list.sort((a, b) => {
      const ia = lead.indexOf(a.path), ib = lead.indexOf(b.path);
      if (ia !== -1 || ib !== -1) return (ia === -1 ? 1e9 : ia) - (ib === -1 ? 1e9 : ib);
      return a.path.localeCompare(b.path, "en", { numeric: true });
    });
  }

  // ------------------------------------------------------------------ business facts
  const { NAP, HOURS, REVIEW_COUNT, REVIEW_AVERAGE, WARRANTY, TEAM, warrantyDaysForService } = site;
  const phoneIntl = formatPhoneIntl(NAP.phoneE164);
  const address = `${NAP.street}, ${NAP.area}, ${NAP.city}, ${NAP.country}`;
  const founder = (TEAM || []).find((t) => /founder/i.test(t.specialisation || ""));
  const rating = Number(REVIEW_AVERAGE).toFixed(1);
  const reviews = `${REVIEW_COUNT}+`;
  const siteSrc = fs.readFileSync(path.join(SRC, "content", "site.ts"), "utf8");
  const batteryGuarantee = /80% capacity guarantee/i.test(siteSrc) ? ", with an 80% capacity guarantee" : "";
  const screenDays = warrantyDaysForService("screen replacement");
  const unlockDays = warrantyDaysForService("iCloud unlock");
  const today = new Date().toLocaleDateString("en-CA", { timeZone: SITE_SETTINGS.timezone || "Asia/Dubai" });
  const has = (p) => pages.some((x) => x.path === p);

  const blockquote =
    `> ${NAP.name} is an independent Apple repair specialist in Dubai, United Arab Emirates, in business since ${NAP.founded}. ` +
    `The workshop is Mac-first (MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio and Mac Pro, down to board level) and also repairs iPhone and iPad. ` +
    `Walk in at ${NAP.street}, ${NAP.area}, or book a free pickup in Dubai. ` +
    `Repair quotes are given on WhatsApp at ${phoneIntl}.`;

  const intro = [
    `${NAP.name} is not an Apple Authorised Service Provider and is not affiliated with Apple Inc.`,
    ``,
    `Diagnosis is free. Repair prices are not published on the site: every repair is quoted on WhatsApp (${NAP.whatsappUrl}) once the model and fault are known, before any work starts.`,
    ``,
    `Opening hours (Dubai time): ${hoursSummary(HOURS)}. Google rating: ${rating} from ${reviews} reviews. Written warranty ${WARRANTY.headline}, depending on the repair.`,
    ``,
    `Not offered in-house: Apple Watch, AirPods, Apple TV and HomePod repair.`,
    ``,
    `Generated ${today} from the site's route table and business settings. ${pages.length} public pages are listed below; the long-form version with business facts is at ${SITE}/llms-full.txt`,
  ];

  // ------------------------------------------------------------------ llms.txt
  const short = [`# ${NAP.name}`, ``, blockquote, ``, ...intro, ``];
  for (const s of SECTIONS) {
    const list = bySection.get(s.id);
    if (!list.length) continue;
    short.push(`## ${s.title}`, ``);
    for (const pg of list) short.push(`- [${mdText(pg.title)}](${urlFor(pg.path)})${pg.shortDesc ? ": " + pg.shortDesc : ""}`);
    short.push(``);
  }

  // ------------------------------------------------------------------ llms-full.txt
  const devices = [
    ["MacBook Air", "/macbook-air-repair-dubai"],
    ["MacBook Pro", "/macbook-pro-repair-dubai"],
    ["MacBook Neo", "/macbook-neo-repair-dubai"],
    ["iMac", "/imac-repair-dubai"],
    ["Mac mini", "/mac-mini-repair-dubai"],
    ["Mac Studio", "/mac-studio-repair-dubai"],
    ["Mac Pro", "/mac-pro-repair-dubai"],
    ["Apple Studio Display", "/studio-display-repair-dubai"],
    ["iPhone", "/iphone-repair-dubai"],
    ["iPad", "/ipad-repair-dubai"],
    ["iPod touch (7th generation)", "/ipod-touch-7-repair-dubai"],
  ].filter(([, p]) => has(p));
  const services = [
    ["Screen and display repair", "/macbook-screen-repair-dubai"],
    ["Battery replacement", "/macbook-battery-replacement-dubai"],
    ["Keyboard and trackpad repair", "/macbook-keyboard-repair-dubai"],
    ["Charging port and power faults", "/macbook-charging-port-repair-dubai"],
    ["Component-level logic board repair", "/macbook-logic-board-repair-dubai"],
    ["Liquid and water damage repair", "/macbook-water-damage-repair-dubai"],
    ["SSD and RAM upgrades", "/macbook-ssd-upgrade-dubai"],
    ["macOS reinstall, software and virus removal", "/macos-reinstall-dubai"],
    ["Data recovery (Mac, iPhone and iPad, including T2 and soldered-SSD Macs)", "/mac-data-recovery-dubai"],
    ["Full diagnostics", "/macbook-full-diagnostic-dubai"],
    ["On-site and corporate repair", "/corporate-macbook-repair-dubai"],
    ["Annual maintenance contracts for businesses", "/annual-maintenance-contract-dubai"],
    ["Buying used and faulty MacBooks, and trade-in", "/sell-macbook-dubai"],
  ].filter(([, p]) => has(p));

  const full = [
    `# ${NAP.name}`,
    ``,
    blockquote,
    ``,
    `Generated ${today} from the site's route table, page metadata and business settings. This long-form companion to ${SITE}/llms.txt lists all ${pages.length} public pages with their titles and descriptions.`,
    ``,
    `## Business facts`,
    ``,
    `- Name: ${NAP.name}`,
    `- Status: independent Apple repair specialist; not an Apple Authorised Service Provider and not affiliated with Apple Inc.`,
    `- Founded: ${NAP.founded} (${NAP.yearsInBusiness} years in business)`,
    ...(founder ? [`- Founder: ${founder.name}`] : []),
    `- Address: ${address}`,
    `- Phone: ${phoneIntl} (${NAP.phoneDisplay} within the UAE)`,
    `- WhatsApp: ${NAP.whatsappUrl} (quotes are given here)`,
    `- Email: ${NAP.email}`,
    `- Website: ${SITE}/`,
    `- Opening hours (Dubai time): ${hoursSummary(HOURS)}`,
    `- Google rating: ${rating} from ${reviews} reviews`,
    ...[NAP.facebook, NAP.instagram, NAP.youtube].filter(Boolean).length
      ? [`- Social: ${[NAP.facebook, NAP.instagram, NAP.youtube].filter(Boolean).join(", ")}`]
      : [],
    ``,
    `## How a repair works`,
    ``,
    `- Diagnosis is free.`,
    `- Repair prices are not published on the site. Every repair is quoted on WhatsApp once the model and fault are known, before any work starts.`,
    `- Walk in at ${NAP.street}, ${NAP.area}, or book a free pickup and delivery in Dubai. Collection from the other emirates is covered on the Areas served pages.`,
    ``,
    `## Warranty`,
    ``,
    `A written warranty of ${WARRANTY.headline}, depending on the repair:`,
    ``,
    `- Hardware repairs (ports, trackpad, hinge, fan, speaker, SSD and RAM and similar): ${WARRANTY.hardware.label}`,
    `- Battery replacement: ${WARRANTY.battery.label}${batteryGuarantee}`,
    `- Screen replacement: ${screenDays} days`,
    `- Keyboard, software, logic-board, liquid-damage and data-recovery work: ${WARRANTY.short.label}`,
    ...(unlockDays === 0 ? [`- Unlock services carry no parts warranty`] : []),
    ``,
    `## Devices and services offered`,
    ``,
    `Devices: ${devices.map(([n]) => n).join(", ")}.`,
    ``,
    ...services.map(([n, p]) => `- ${n}: ${urlFor(p)}`),
    ``,
    `## Not offered`,
    ``,
    `- Apple Watch, AirPods, Apple TV and HomePod repair are not offered in-house.`,
    `- Published repair prices: none. Quotes are given on WhatsApp only.`,
    ``,
  ];
  for (const s of SECTIONS) {
    const list = bySection.get(s.id);
    if (!list.length) continue;
    full.push(`## ${s.title === "Optional" ? "Optional: blog posts" : s.title}`, ``);
    for (const pg of list) {
      full.push(`### ${pg.title}`, ``, `URL: ${urlFor(pg.path)}`);
      if (pg.longDesc) full.push(``, pg.longDesc);
      full.push(``);
    }
  }

  const shortTxt = short.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  const fullTxt = full.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";

  // ------------------------------------------------------------------ self-check
  const problems = [];
  for (const [name, txt] of [["llms.txt", shortTxt], ["llms-full.txt", fullTxt]]) {
    const lines = txt.split("\n");
    const h1 = lines.filter((l) => l.startsWith("# ")).length;
    if (h1 !== 1) problems.push(`${name}: ${h1} H1 lines`);
    const priceLines = lines.filter((l) => PRICE_RE.test(l));
    if (priceLines.length) problems.push(`${name}: ${priceLines.length} price lines`);
    const claimLines = lines.filter((l) => !claimOk(l));
    if (claimLines.length) problems.push(`${name}: ${claimLines.length} Authorised/Certified lines`);
    const offLines = lines.filter((l) => OFF_POLICY_RE.test(l) && !/not offered/i.test(l));
    if (offLines.length) problems.push(`${name}: ${offLines.length} off-policy service lines`);
    // No MacBook has an OLED display (Pro = mini-LED Liquid Retina XDR; Air/Neo = LCD). The
    // Touch Bar is OLED, and a line that negates OLED is fine.
    const oledMac = lines.filter((l) => /macbook/i.test(l.replace(/https?:\/\/\S+/g, "").replace(/MacBook Repair Dubai/gi, "")) && /\bOLED\b/.test(l) && !/touch ?bar|not (an )?OLED|no OLED|isn.t OLED|never (shipped with )?OLED|mini-LED|rumou?r/i.test(l));
    if (oledMac.length) problems.push(`${name}: ${oledMac.length} MacBook OLED lines:\n    ` + oledMac.map((l) => l.slice(0, 180)).join("\n    "));
  }
  if (problems.length) {
    console.error("[gen-llms] policy self-check FAILED - keeping the committed files:\n  " + problems.join("\n  "));
    return;
  }

  fs.writeFileSync(OUT_SHORT, shortTxt);
  fs.writeFileSync(OUT_FULL, fullTxt);
  const counts = SECTIONS.map((s) => `${s.id}:${bySection.get(s.id).length}`).join(" ");
  console.log(`[gen-llms] wrote llms.txt + llms-full.txt: ${pages.length} pages (${counts}); excluded ${excluded.length}`);
  for (const e of excluded.filter((x) => !/^private$/.test(x.reason))) console.log(`[gen-llms]   excluded ${e.path} - ${e.reason}`);
}

main().catch((e) => {
  console.error("[gen-llms] FAILED - keeping the committed llms files:", e && e.stack ? e.stack : e);
});
