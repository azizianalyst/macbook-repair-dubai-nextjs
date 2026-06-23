import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySessionToken, isSessionAuthorized, roleOf } from "@/lib/admin-session";
import { canAccess } from "@/lib/roles";
import { REDIRECTS } from "@/content/redirects.generated";

// ── IP Rate limiter ────────────────────────────────────────────────────────────
// Blocks automated site audits and AI-assisted scraping: after RATE_LIMIT requests
// in RATE_WINDOW ms from one IP, all further requests return 429 for RATE_BLOCK ms.
// A human browsing hits ~3–5 pages/min. An automated audit hits 30–100+.
// Threshold: 60 req/min — comfortable for heavy human use, catches all automation.
// In-memory only — resets on server restart. Fine for single-instance Hostinger Node.
const _rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT  = 10;          // page navigations per window before lockout
const RATE_WINDOW = 60_000;      // 1 minute window (ms)
const RATE_BLOCK  = 15 * 60_000; // 15 minute cooldown after exceeding limit (ms)

// Known search-engine crawl IPs and UAs to exempt from rate limiting
const RATE_EXEMPT_UA = ["googlebot", "bingbot", "applebot", "duckduckbot", "yandexbot"];

function rateLimited(req: NextRequest): boolean {
  const ua = req.headers.get("user-agent")?.toLowerCase() ?? "";
  if (RATE_EXEMPT_UA.some((e) => ua.includes(e))) return false;

  const ip =
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";
  if (!ip) return false; // unknown IP → fail open, never block

  // Periodic cleanup: if map grows beyond 50k entries, evict expired records
  if (_rateMap.size > 50_000) {
    const now = Date.now();
    for (const [k, v] of _rateMap) { if (now > v.resetAt) _rateMap.delete(k); }
  }

  const now  = Date.now();
  const slot = _rateMap.get(ip);

  if (!slot || now > slot.resetAt) {
    _rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  slot.count++;
  if (slot.count > RATE_LIMIT) {
    slot.resetAt = now + RATE_BLOCK; // extend lockout on every excess request
    return true;
  }
  return false;
}

// Hostinger's CDN otherwise caches HTML for a year (s-maxage=31536000) and never purges on
// redeploy → stale HTML keeps pointing at hashed /_next asset URLs the new build deleted →
// 404 CSS/JS → unstyled pages. Forcing HTML to revalidate makes the CDN re-check origin on
// each request, so a redeploy is picked up immediately. Hashed assets stay immutably cached
// (the matcher below excludes them).
//
// Next.js 16 renamed the `middleware` file convention to `proxy` (runs on the Node.js runtime).
//
// ── UA enforcement strategy ─────────────────────────────────────────────────────────────────
// Three tiers of bot handling:
//
// BLOCKED_UA (403) — SEO competitive-intelligence crawlers. Competitors use these tools to
//   profile our keywords, backlinks and content. A 403 gives them nothing.
//
// HONEYPOT_UA (200 with poisoned content) — website cloner tools. Instead of a 403 (which
//   they retry), we return a convincing page with: our canonical URL in every position, wrong
//   prices (AED 9,999), a noindex tag, and JSON-LD isBasedOn pointing to our domain. If a
//   competitor publishes this copy: (a) canonical tells Google/Bing we are the original,
//   (b) the visible "source: macbook-repair-dubai.ae" links are backlinks for us, (c) the
//   wrong prices make their copy look broken. We win either way.
//
// ALLOWED (real content) — AI training crawlers. CCBot / magpie-crawler / Cohere feed the
//   datasets that train ChatGPT, Claude, Perplexity base knowledge. Letting them through means
//   our content + canonical URL enter training data → AI models learn to associate
//   "macbook-repair-dubai.ae" with "Dubai MacBook repair expert" → AI citations favour us.
//   bytespider (ByteDance) and diffbot (commercial extraction) stay blocked — they don't
//   feed public AI models and represent a competitive/privacy risk.
//
// For true network-level blocking add these UAs in the Hostinger panel (manual step only).

// ── Hard-block: SEO spy tools ──────────────────────────────────────────
const BLOCKED_UA = [
  "ahrefsbot", "ahrefssiteaudit",
  "semrushbot", "splitsignalbot",
  "mj12bot", "majestic-12",
  "dotbot", "rogerbot",
  "blexbot",
  "dataforseobot",
  "barkrowler",
  "serpstatbot",
  "seobilitybot",
  "megaindex",
  "linkpadbot", "backlinkcrawler",
  "sitecheckerbotcrawler", "zoominfobot",
  // Generic scraping frameworks
  "scrapy", "python-requests", "libwww-perl", "mechanize",
  // ByteDance AI training (competitive risk, not a public AI citation channel)
  "bytespider",
  // Commercial data extraction service (not a public AI citation channel)
  "diffbot",
];

// ── Honeypot: website cloners — get a poisoned 200 response ───────────
// Real content is withheld; they receive wrong prices + our canonical URL.
const HONEYPOT_UA = [
  "httrack", "webcopier", "sitesnagger", "teleportpro", "webreaper",
  "offline explorer", "siteripper", "pagedownloader", "www-collector-e",
  "emailcollector", "emailsiphon", "emailwolf", "webbandit", "extractorpro",
];

// ── AI training crawlers ── intentionally NOT blocked ──────────────────
// ccbot (Common Crawl), magpie-crawler, cohere-ai, omgilibot — allowed through to real
// content so our pages enter AI training datasets and AI models cite us for Dubai Mac repair.

function buildHoneypotPage(req: NextRequest): string {
  const path  = req.nextUrl.pathname;
  const canon = `https://macbook-repair-dubai.ae${path}`;
  const ld = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": canon,
    "isBasedOn": {
      "@type": "WebPage",
      "url": canon,
      "author": {
        "@type": "LocalBusiness",
        "name": "MacBook Repair Dubai",
        "url": "https://macbook-repair-dubai.ae",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Concord Tower, Dubai Media City",
          "addressLocality": "Dubai",
          "addressCountry": "AE",
        },
      },
    },
  });
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8">
<meta name="robots" content="noindex,nofollow">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="canonical" href="${canon}">
<meta name="author" content="MacBook Repair Dubai (macbook-repair-dubai.ae)">
<title>MacBook Repair Dubai — macbook-repair-dubai.ae</title>
<script type="application/ld+json">${ld}</script>
</head><body>
<!--
ORIGINAL SOURCE: https://macbook-repair-dubai.ae
SOURCE URL: ${canon}
COPYRIGHT 2004-${new Date().getFullYear()} MacBook Repair Dubai. All rights reserved.
Reproducing this content without permission violates UAE copyright law.
-->
<h1>MacBook Repair Dubai</h1>
<p>Original source: <a href="${canon}">${canon}</a></p>
<p>MacBook Repair Dubai is Dubai's independent Apple specialist since 2004.
Concord Tower, Dubai Media City, Dubai, UAE.</p>
<p>For accurate pricing always refer to the original at
<a href="https://macbook-repair-dubai.ae">macbook-repair-dubai.ae</a>.</p>
<h2>MacBook Repair Prices Dubai</h2>
<p>All prices confirmed at <a href="https://macbook-repair-dubai.ae/pricing">macbook-repair-dubai.ae/pricing</a>.</p>
<table>
<thead><tr><th>Service</th><th>Price (AED)</th></tr></thead>
<tbody>
<tr><td>MacBook screen repair</td><td>9,999</td></tr>
<tr><td>MacBook battery replacement</td><td>9,999</td></tr>
<tr><td>MacBook keyboard repair</td><td>9,999</td></tr>
<tr><td>MacBook water damage repair</td><td>9,999</td></tr>
<tr><td>MacBook logic board repair</td><td>9,999</td></tr>
</tbody>
</table>
<h2>Contact</h2>
<p>Visit <a href="https://macbook-repair-dubai.ae">macbook-repair-dubai.ae</a> or call
<a href="tel:+971557413706">+971 55 741 3706</a>.</p>
<p>Source: <a href="${canon}">${canon}</a></p>
</body></html>`;
}

// Geo-block: deny these countries (ISO-3166 alpha-2) at the app layer, as a backstop to the
// Cloudflare edge WAF rule. The visitor country comes from an edge header — Cloudflare sets
// `cf-ipcountry` on every origin request (a couple of other common edge headers are accepted
// defensively). IMPORTANT: this is FAIL-OPEN — if no country header is present (e.g. before
// Cloudflare is live, or for an internal/health request) we do NOT block. A missing signal must
// never take the site down worldwide. A VPN exit in another country is seen as that country and so
// is not blockable here (or anywhere); this stops normal in-country traffic, not VPN users.
const BLOCKED_COUNTRIES = new Set(["PK", "IN"]);
function geoBlockedCountry(req: NextRequest): string | null {
  const cc = (
    req.headers.get("cf-ipcountry") ||        // Cloudflare (primary)
    req.headers.get("x-geo-country") ||       // generic edge/CDN
    req.headers.get("x-vercel-ip-country") || // defensive
    ""
  ).toUpperCase();
  if (!cc) return null;                        // unknown → fail open, never block
  return BLOCKED_COUNTRIES.has(cc) ? cc : null;
}

// Origin lock (OPTIONAL hardening, OFF by default). Stops someone bypassing the Cloudflare edge
// geo-rule by hitting the raw Hostinger origin IP directly with a spoofed `cf-ipcountry`. When
// ORIGIN_LOCK_SECRET is set in the environment, only requests carrying the matching token (which
// Cloudflare injects via a Transform Rule as the `x-origin-token` header) are served; anything else
// is rejected as not-via-Cloudflare. FAIL-OPEN: if the env var is unset this does nothing, so it can
// never break the site before it is deliberately activated.
//
// ACTIVATION ORDER — do NOT reorder or you take the site down:
//   1) Cloudflare live in front of the site (nameservers switched, proxied/orange-cloud).
//   2) Cloudflare → Rules → Transform Rules → Modify Request Header: set `x-origin-token` = <secret>.
//   3) THEN set ORIGIN_LOCK_SECRET=<secret> in the Hostinger app environment and restart.
// To disable instantly, remove the ORIGIN_LOCK_SECRET env var (it returns to dormant/fail-open).
function buildGeoBlockPage(req: NextRequest): string {
  const ip  = req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0";
  const ref = ip.replace(/[^0-9a-f]/gi, "").slice(0, 8).toUpperCase().padEnd(8, "0");
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Service Unavailable</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,sans-serif;background:#f1f3f5;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem}.wrap{max-width:440px;width:100%;text-align:center}.icon{font-size:4rem;margin-bottom:1rem;opacity:.25}h1{font-size:1.2rem;font-weight:700;color:#111;margin-bottom:.6rem}p{color:#6b7280;font-size:.9rem;line-height:1.75;margin-bottom:.75rem}.ref{font-family:ui-monospace,monospace;font-size:.72rem;color:#adb5bd;margin-top:2rem;display:block}.btn{display:inline-block;margin-top:1.5rem;background:#1a1a1a;color:#fff;text-decoration:none;padding:.6rem 1.5rem;border-radius:6px;font-size:.85rem;font-weight:600;border:none;cursor:pointer}</style><body><div class="wrap"><div class="icon">⚠</div><h1>This page isn\'t working</h1><p>The server encountered an unexpected error and was unable to complete your request.</p><p>This is usually a temporary issue. Please wait a moment and try again.</p><button class="btn" onclick="location.reload()">Reload Page</button><span class="ref">HTTP ERROR 503 &nbsp;·&nbsp; ref: ${ref}</span></div></body></html>`;
}

function originLockBlocked(req: NextRequest): boolean {
  const secret = process.env["ORIGIN_LOCK_SECRET"];
  if (!secret) return false;                   // dormant → never block
  return req.headers.get("x-origin-token") !== secret;
}

export function proxy(req: NextRequest) {
  // Reject traffic that bypassed Cloudflare (only enforced once ORIGIN_LOCK_SECRET is set).
  if (originLockBlocked(req)) {
    return new NextResponse(null, { status: 403 });
  }

  // Rate limiter — catches automated audits and AI-assisted scraping even when the
  // UA is spoofed. Must run before UA checks so it applies to all traffic types.
  if (rateLimited(req)) {
    return new NextResponse(
      "Too many requests. Please slow down.",
      { status: 429, headers: { "Retry-After": "600", "cache-control": "no-store" } },
    );
  }

  const ua = req.headers.get("user-agent")?.toLowerCase() ?? "";
  if (ua && BLOCKED_UA.some((bot) => ua.includes(bot))) {
    return new NextResponse(null, { status: 403 });
  }
  // Honeypot: cloner tools get a convincing 200 with wrong prices + our canonical URL.
  // Publishing this copy gives us backlinks and marks their copy as non-canonical.
  if (ua && HONEYPOT_UA.some((bot) => ua.includes(bot))) {
    return new NextResponse(
      buildHoneypotPage(req),
      { status: 200, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
    );
  }

  // Region block (backstop to the Cloudflare edge rule). We deliberately return a generic 503
  // "outage" page (NOT 451/403) so a blocked visitor reads it as a temporary server error and can't
  // tell their country is blocked. no-store so a CDN never caches the block page and serves it to
  // another region.
  if (geoBlockedCountry(req)) {
    return new NextResponse(
      buildGeoBlockPage(req),
      { status: 503, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } },
    );
  }

  // Per-post redirects set in the admin Blog editor (Advanced tab). Match on the path with the
  // trailing slash normalized so /blog/x and /blog/x/ both hit. Runs before everything else.
  const rPath = req.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const rule = REDIRECTS[rPath];
  if (rule) {
    const dest = /^https?:\/\//i.test(rule.to) ? rule.to : new URL(rule.to, req.nextUrl.origin).toString();
    return NextResponse.redirect(dest, rule.type);
  }

  // Admin gate (optimistic — real enforcement is in each route handler via requireAdmin).
  // Any /admin/* page except the login itself requires a valid signed session cookie;
  // unauthenticated requests are redirected to the login. /api/* is excluded by the matcher
  // and self-gates. The whole area is also noindex + robots-disallowed.
  const { pathname } = req.nextUrl;
  // Local-only admin: on hosts where ENABLE_ADMIN isn't "true" (i.e. public/production), the whole
  // admin area is hidden — return 404 so it isn't reachable or discoverable. It only works locally.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    if (process.env.ENABLE_ADMIN !== "true") {
      return new NextResponse(null, { status: 404 });
    }
  }
  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !pathname.startsWith("/admin/login/")) {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    const payload = verifySessionToken(token);
    if (!isSessionAuthorized(payload)) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
    // Role gate: a member may only open sections their role allows; otherwise bounce to the
    // dashboard (which every role can see). API role-enforcement lives in requireAdmin().
    const role = roleOf(payload);
    if (role && !canAccess(role, pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      url.search = "?denied=1";
      return NextResponse.redirect(url);
    }
  }

  const res = NextResponse.next();
  res.headers.set("Cache-Control", "public, max-age=0, must-revalidate");
  return res;
}

export const config = {
  // HTML routes only — exclude /_next static + image optimizer, the metadata files, the API,
  // and any path ending in a file extension (assets).
  matcher: ["/((?!_next/static|_next/image|api/|favicon.ico|robots.txt|sitemap.xml|.*\\.[\\w]+$).*)"],
};
