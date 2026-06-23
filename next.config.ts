import type { NextConfig } from "next";
import { REDIRECTS } from "./redirects.generated";

const nextConfig: NextConfig = {
  // Canonical URL form: trailing slash on every route (/x -> 308 -> /x/). Chosen to match the
  // legacy WordPress URLs Google still has indexed (the bulk of accumulated authority carries a
  // trailing slash), so the indexed URLs resolve 200 directly instead of via a redirect hop.
  // Next auto-appends the slash to internal <Link> hrefs and matches redirect sources in either
  // form; redirect DESTINATIONS are slashed in redirects.generated.ts to stay single-hop.
  trailingSlash: true,
  // Don't advertise the framework in response headers (drops X-Powered-By: Next.js).
  poweredByHeader: false,
  // Hide the floating "N" dev-tools indicator during `next dev` (dev-only widget;
  // production builds never include it either way).
  devIndicators: false,
  images: {
    // Ported components use plain <img>; skip the Image Optimization pipeline.
    unoptimized: true,
  },
  // Legacy WordPress URLs -> new pages (301). Ported from the live site's .htaccess
  // so old indexed/linked URLs keep resolving. Regenerate via scripts (see redirects.generated.ts).
  async redirects() {
    return [
      // Canonical host: www -> non-www (301). The site's canonical is the bare apex
      // (https://macbook-repair-dubai.ae); without this, www is a crawlable duplicate
      // that only canonical-tags away. A hard 301 collapses both into one indexable host.
      // Behind Hostinger's reverse proxy the Node app sees Host: localhost, and the real
      // requested hostname arrives in x-forwarded-host — so we match that, not `type: host`.
      {
        source: "/:path*",
        has: [{ type: "header", key: "x-forwarded-host", value: "www.macbook-repair-dubai.ae" }],
        destination: "https://macbook-repair-dubai.ae/:path*",
        permanent: true,
      },
      // Manual redirects (hand-added, kept separate from the auto-generated legacy set in
      // redirects.generated.ts). Common WordPress service-business paths that have no live
      // route — map them to the services hub instead of letting them 404.
      { source: "/services", destination: "/apple-repair-dubai/", statusCode: 301 },
      { source: "/our-services", destination: "/apple-repair-dubai/", statusCode: 301 },
      // Cannibalization merges (2026-06 architecture audit): same service / same intent
      // on two URLs — consolidated into the stronger page.
      { source: "/macbook-thermal-paste-replacement-dubai", destination: "/macbook-overheating-fix-dubai/", statusCode: 301 },
      { source: "/blog/macbook-repair-near-me-dubai", destination: "/macbook-repair-near-me/", statusCode: 301 },
      // Migration casualties found via the GSC top-pages audit (2026-06): legacy WordPress
      // Q&A / listing URLs Google still indexes that had no page AND no redirect, so the
      // trailing-slash normalisation dead-ended them at 404. The low-traffic ones (1–22
      // impressions) point to the closest live page; the four high-ranking ones (caps-lock,
      // internal-SSD, Siri, 403-download) were restored as real pages instead of redirected.
      { source: "/how-can-i-fix-the-missing-touch-bar-controls-for-the-calculator-in-macbook-pro", destination: "/macbook-touch-bar-repair-dubai/", statusCode: 301 },

      { source: "/how-can-i-inherit-folder-permissions-on-a-macbook", destination: "/how-do-i-reset-passwords-on-my-macbook/", statusCode: 301 },
      { source: "/macbook-keyboard-repair-replacement/page/2", destination: "/macbook-keyboard-repair-dubai/", statusCode: 301 },
      // GSC 404 batch (2026-06-19): legacy WordPress URLs still indexed — paginated listing,
      // orphaned category page, renamed service page, and malformed doubled-URL crawl error.
      { source: "/iphone-repair-dubai/page/5", destination: "/iphone-repair-dubai/", statusCode: 301 },
      { source: "/accessories", destination: "/apple-repair-dubai/", statusCode: 301 },
      { source: "/apple-laptop-repair-dubai", destination: "/macbook-repair-dubai/", statusCode: 301 },
      // Malformed doubled URL: old WordPress page had an absolute href that Googlebot
      // concatenated into the path. Wildcard catches both /macbook-settings-features/ and
      // /macbook-settings-features/https://macbook-repair-dubai.ae/…
      { source: "/macbook-settings-features/:rest*", destination: "/macbook-guides/", statusCode: 301 },
      // GSC noindex batch (2026-06-19): 47 legacy WordPress URLs "Excluded by noindex tag".
      // Root cause: old WP patterns hit the Next.js 404 page (which has noindex), so Google
      // reports them as excluded rather than simply not-found. Adding 301 redirects clears them
      // from the excluded bucket and passes any residual link equity to the canonical pages.
      //
      // Old blog posts → closest live equivalents
      { source: "/error-403-forbidden-on-macbook-and-says-cant-connect-to-apple-servers", destination: "/the-server-gave-an-error-during-download-403-forbidden/", statusCode: 301 },
      { source: "/which-is-the-best-iphone-repair-company-in-dubai", destination: "/iphone-repair-dubai/", statusCode: 301 },
      // WordPress tag archives → blog hub (wildcard; catches all /tag/* paths)
      { source: "/tag/:slug", destination: "/blog/", statusCode: 301 },
      // WordPress search URLs
      { source: "/search/:query*", destination: "/blog/", statusCode: 301 },
      // WordPress /?s= query-param search (has-based match so source "/" doesn't over-match)
      { source: "/", has: [{ type: "query", key: "s" }], destination: "/blog/", statusCode: 301 },
      // GSC "Page with redirect" audit (2026-06-19): old WordPress model-number slugs without the
      // -dubai suffix. The rules in redirects.generated.ts cover the -dubai variants; these shorter
      // slugs 404 without an explicit rule, wasting any residual link equity Google still credits.
      { source: "/macbook-pro-a1990-repair", destination: "/macbook-pro-repair-dubai/", statusCode: 301 },
      { source: "/macbook-pro-a2992-repair", destination: "/macbook-pro-14-m3-2023-repair-dubai/", statusCode: 301 },
      { source: "/macbook-pro-a2141-repair", destination: "/macbook-pro-repair-dubai/", statusCode: 301 },
      { source: "/macbook-pro-a2338-m2-repair", destination: "/macbook-pro-13-m2-2022-repair-dubai/", statusCode: 301 },
      // Old WordPress /adopters/ community page — no Next.js equivalent, send to About.
      { source: "/adopters", destination: "/about/", statusCode: 301 },
      // WordPress paginated archives → canonical base URL.
      // Must follow all specific /page/N redirects above (e.g. macbook-keyboard .../page/2
      // → a different destination); those specific entries win because Next checks in order.
      { source: "/:path*/page/:num", destination: "/:path*/", statusCode: 301 },
      ...REDIRECTS,
    ];
  },
  // Security headers for the Node deploy (the .htaccess does NOT apply to a Node app).
  // CSP allows the app's real externals: GA (script/connect) + Google Maps (frame).
  // script-src keeps 'unsafe-inline' because Next App Router emits inline hydration
  // scripts and the site is statically prerendered (a nonce CSP would force dynamic
  // rendering and break static caching/SEO).
  async headers() {
    // Dev (next dev / Turbopack) needs 'unsafe-eval' for HMR + React's dev-mode
    // debugging (callstack reconstruction). Production never uses eval(), so we
    // omit it there to keep the policy tight.
    const isDev = process.env.NODE_ENV !== "production";
    const scriptSrc = [
      "script-src 'self' 'unsafe-inline'",
      isDev ? "'unsafe-eval'" : "",
      "https://www.googletagmanager.com https://www.google-analytics.com",
    ]
      .filter(Boolean)
      .join(" ");
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      scriptSrc,
      // Site uses a system font stack — no Google Fonts hosts needed.
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
      "frame-src https://www.google.com",
      "upgrade-insecure-requests",
    ].join("; ");
    return [
      // Pre-optimized images never change in place (replace = rename). Serve them
      // with a 1y immutable TTL from the origin so browser + CDN caching no longer
      // depends on hcdn's per-extension defaults (.jpg was missing `immutable`).
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Root-level branded static images (OG card, favicons, logo) live in /public root, not
      // /images, so they missed the immutable rule above and fell back to hcdn's per-extension
      // default (.jpg = not immutable). They're replaced by rename, never edited in place, so
      // pin the same 1y immutable TTL. Deliberately EXCLUDES rss.xml & site.webmanifest — those
      // change and must keep revalidating.
      {
        source: "/:asset(og-default\\.jpg|favicon\\.svg|favicon-32\\.png|apple-touch-icon\\.png|logo-mrd\\.png)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // The production static layer mislabels .avif as text/plain (mime-table gap),
      // which together with `nosniff` is asking for decode refusals. `send` keeps a
      // pre-set Content-Type, so pinning it here wins over the static handler.
      {
        source: "/images/:path*.avif",
        headers: [{ key: "Content-Type", value: "image/avif" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=(), payment=(), interest-cohort=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
