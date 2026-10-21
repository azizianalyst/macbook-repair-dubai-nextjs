# MacBook Repair Dubai — Next.js Site Audit (2026-06-08)

**Stack:** Next.js 16.2.7 · React 19.2.4 · App Router (`src/app`) · ~349 static-prerendered routes · Node deploy behind Hostinger reverse proxy.
**Method:** Code review against the reusable `nextjs-site-audit` checklist (technical, on-page, schema, performance, a11y, security, AEO/GEO, local, analytics, content).
**Headline:** Strong SEO/schema foundation. No critical defects. Real gaps are concentrated in `<head>` wiring (icons/manifest), runtime-error handling, analytics activation, and a few polish items.

Status key: ✅ Pass · ⚠️ Partial · ❌ Gap · ➖ N/A · 🔍 Verify with a live tool.

---

## Implemented 2026-06-08 (quick wins — typecheck clean)
- ✅ **#1 Icons + PWA manifest wired** — `metadata.icons` (SVG, 32px PNG, apple-touch-icon) + `manifest` in [src/app/layout.tsx](../src/app/layout.tsx); also added `viewport.themeColor`.
- ✅ **#2 Runtime-error UI** — added [src/app/error.tsx](../src/app/error.tsx) + [src/app/global-error.tsx](../src/app/global-error.tsx) (branded fallback, retry, call CTA).
- ✅ **#5 Blog Open Graph** — `/blog/*` now emits `og:type=article` + author in [src/lib/page-meta.ts](../src/lib/page-meta.ts). (Per-post dates/images still TODO.)
- ✅ **#6 `poweredByHeader: false`** in [next.config.ts](../next.config.ts) — `X-Powered-By` no longer sent.
- ✅ **#8 `max-image-preview:large` + `max-snippet:-1`** robots directive added to default metadata.
- ✅ **Cosmetic** — stale `VITE_GA_ID` comment corrected to `NEXT_PUBLIC_GA_ID` in `analytics.ts`.
- ✅ **#3 Analytics turned on (GDPR opt-in)** — new [src/components/ConsentBanner.tsx](../src/components/ConsentBanner.tsx) (bottom banner, equally-weighted "Accept analytics"/"Reject analytics", `mrd_consent` cookie 12mo) wired into [layout](../src/app/layout.tsx); `initAnalytics()` made idempotent + `analyticsConfigured()` added; `NEXT_PUBLIC_GA_ID=G-V2VX2CRTKN` set in `.env.local`. **Verified by production build:** the ID + banner inline into the client bundle and GA loads only after Accept. Now matches the Cookie/Privacy policy.

## Top fixes (remaining)

| # | Sev | Finding | Where | Fix |
|---|-----|---------|-------|-----|
| 4 | 🟡 | **Sitemap `lastModified` = build time for every URL** (`new Date()`) — all 349 pages claim the same date, weak freshness signal. | `src/app/sitemap.ts` | Derive per-page `lastModified` from real content/edit dates; fall back to build time. |
| 7 | 🟡 | **2 moderate npm vulns** — transitive `postcss` (<8.5.10, XSS via unescaped `</style>`) pulled by `next`; the auto-"fix" wrongly downgrades Next to 9.x. Build-time only, low practical risk. | deps | Don't `--force`. Track for a Next patch that bumps `postcss`; re-run `npm audit` each release. |
| 9 | 🟢 | **Single OG image sitewide** (`/og-default.jpg` on all 349 pages). | `src/lib/page-meta.ts` | Optional: category-specific OG images (MacBook / iPhone / iPad / blog). |
| 10 | 🟢 | **AI-placeholder imagery** still in use pending real workshop photos (tracked in `docs/`). | `public/images/` | Ship real Concord Tower lab photography — E-E-A-T + trust win. |
| — | 🔍 | **Core Web Vitals, contrast, schema validity, GSC coverage** not measurable from code. | — | Run PageSpeed Insights + GSC CWV, Rich Results Test, axe/Lighthouse a11y, confirm GSC+Bing verified & sitemap submitted. |

---

## Full results by section

### A. Framework & config
- ✅ App Router, Server Components by default; tiny client surface (`Providers.tsx` only: React Query, Toaster, Tooltip).
- ✅ Latest Next 16; standard Node server build (correct for API routes + `headers()`/`redirects()`).
- ✅ Static prerender across all marketing/content routes; only `/api/leads/[id]` truly dynamic.
- ⚠️ `images.unoptimized: true` — deliberate; backed by a real `<picture>` AVIF→WebP→JPG system (`ResponsiveImage.tsx`) with mobile/tablet/desktop variants. Acceptable, but you own sizing/CLS.
- ➖ No `next/font` — system-font stack (fastest path; fine).
- ⚠️ 3rd-party script (GA) hand-injected, not `next/script` (see fix #3).
- ✅ `error.tsx` + `global-error.tsx` added (fix #2 done); `not-found.tsx` → real `NotFound` view.
- ✅ `poweredByHeader: false` (fix #6 done). `compress`/`trailingSlash`/`output` unset = sensible defaults (no trailing slash, matches canonicals).
- ⚠️ Stale `VITE_GA_ID` reference in `analytics.ts` (cosmetic migration cruft).

### B. Indexability & crawlability
- ✅ `www → non-www` 301 via `x-forwarded-host` (correct for the Hostinger proxy). HSTS + `upgrade-insecure-requests` cover http→https.
- ✅ `robots.ts`: allows public, disallows `/api` `/admin`, welcomes AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot…), references sitemap + host.
- ✅ `sitemap.ts`: 349 canonical URLs, category-based `changeFrequency` + `priority`; excludes admin/demo.
- ⚠️ `lastModified` is build-time for all URLs (fix #4).
- ✅ Self-referencing absolute canonicals + `metadataBase` on every page.
- ✅ `noindex` scoped correctly (admin leads, landing-template-demo) via Metadata `robots`.
- ✅ Legacy redirects: ~993 lines, all 301, generated from old `.htaccess` (no chains-to-home pattern observed).
- ✅ Custom 404 view. 🔍 Confirm it returns HTTP 404 in prod.
- 🔍 Crawl depth/orphans — verify with Screaming Frog/Ahrefs.

### C. On-page SEO
- ✅ One `<h1>` per page (sampled Home + 4 service views = 1 each).
- ✅ Title clamp to ≤60 chars w/ brand suffix logic; description clamp to ~155–160 (`page-meta.ts`/`seo.ts`).
- ✅ Clean keyword slugs (`/macbook-air-repair-dubai`, etc.).
- ✅ **Breadcrumbs implemented** — `BreadcrumbTrail.tsx` used across device/model/service/blog/area templates (the earlier "missing breadcrumb UI" note was wrong).
- 🔍 Internal-link density per page + image `alt` coverage — spot-audit.
- ⚠️ Blog meta auto-derived from slug when not in `ROUTE_META` → generic; hand-write the top posts (fix #5).

### D. Structured data
- ✅ Server-rendered JSON-LD via `PageSchema` (in prerendered HTML — good for LLMs).
- ✅ Rich type coverage: `Organization`, `WebSite`, `LocalBusiness`(ElectronicsStore), `Service`, `Article`, `HowTo`, `FAQPage`, `BreadcrumbList`, `Review`/`AggregateRating`, `Place`, `ItemList`, `speakable`.
- ✅ `@id` graph linking (ORG/BUSINESS/WEBSITE ids); Service intentionally omits `Offer` to avoid price mismatch.
- 🔍 Validate with Rich Results Test (esp. FAQ/Article/LocalBusiness).

### E. Performance / CWV
- ✅ Minimal client JS; no web-font payload; AVIF/WebP responsive images; lazy by default + `priority` for LCP.
- ⚠️ `unoptimized` images mean CLS protection depends on the component setting dimensions — confirm `width`/`height`/aspect-ratio on heroes.
- 🔍 LCP/INP/CLS — measure on PageSpeed Insights + GSC field data.

### F. Accessibility
- ✅ `<html lang="en-AE">`; semantic templates; one `<h1>`/page.
- 🔍 Contrast, focus states, skip-to-content link, form labels — run axe/Lighthouse + manual keyboard test.

### G. Security
- ✅ Strong headers: CSP, HSTS (preload), `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'self'`, `form-action 'self'`.
- ⚠️ CSP keeps `script-src 'unsafe-inline'` (documented: needed for static-prerender hydration; nonce would force dynamic rendering). Everything else is tight.
- ❌ `X-Powered-By` exposed (fix #6).
- ✅ Admin behind `requireAdmin()` (Bearer `ADMIN_KEY`) + robots-disallowed; API uses zod.
- ⚠️ 2 moderate transitive vulns (fix #7). 🔍 Confirm API rate-limiting on `/api/lead`.

### H. AEO / GEO
- ✅ AI crawlers explicitly allowed; `llms.txt` + `llms-full.txt` present.
- ✅ `speakable` + FAQ schema; answer-oriented content.
- ⚠️ Strengthen: visible "Updated [Month Year]" + named author bios on blog/guides; per-post freshness (ties to fix #4/#5).

### I. Local SEO
- ✅ Full `LocalBusiness`/ElectronicsStore schema (NAP, geo, hours, priceRange AED 49–3,500, payment, languages); 20+ area pages with `Place`; Google Maps embed; reviews scoped to avoid sitewide spam.
- 🔍 Confirm site NAP === Google Business Profile NAP exactly.

### J. Analytics & monitoring
- ✅ GA4 (`G-V2VX2CRTKN`) loads via a GDPR opt-in consent banner; `initAnalytics()` wired + idempotent; tel:/wa.me/mailto conversion tracking runs once accepted. Matches the Cookie/Privacy policy (fix #3 done).
- 🔍 Confirm GSC + Bing verified, sitemap submitted; add error monitoring (Sentry) + 404 watch.

### K. Mobile & UX
- ✅ Default viewport (Next-provided); responsive Apple-style design system.
- ✅ `viewport.themeColor` + icons/manifest now wired (fix #1 done).

### L. Content & trust
- ✅ About/Contact with real NAP + 21-yr history; full legal suite (terms, privacy, warranty, refund, cookies); ACMT certification surfaced; 215+ reviews referenced.
- ⚠️ AI-placeholder images pending real photos (fix #10); add visible updated dates (fix toward AEO freshness).

---

## Verify externally (can't be read from code)
1. **Core Web Vitals** — PageSpeed Insights (mobile) + GSC CWV report.
2. **Schema validity** — Rich Results Test on Home, a service page, a blog post, `/reviews`.
3. **Accessibility** — Lighthouse a11y + axe + manual keyboard pass (contrast, focus, skip link).
4. **Analytics live** — GA4 real-time after confirming `NEXT_PUBLIC_GA_ID` on Hostinger.
5. **GSC/Bing** — properties verified, sitemap submitted, Pages coverage clean (Discovered/Crawled-not-indexed).
6. **Live headers** — `curl -sI https://macbook-repair-dubai.ae` for header parity behind the proxy + 404/redirect spot checks.

*Reusable checklist behind this audit: `~/.claude/skills/nextjs-site-audit` (works on any Next.js site).*
