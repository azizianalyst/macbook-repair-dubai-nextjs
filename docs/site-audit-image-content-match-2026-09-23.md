# macbook-repair-dubai.ae — Full Site Audit (2026-09-23)

**Scope:** every prerendered route (601 public pages, `/admin/*` excluded as noindex+disallowed),
audited for image↔content match, image integrity, and the SEO checklist (`/nextjs-site-audit`).

**Method:** fresh `next build`, then a static pass over all 625 prerendered HTML files
(`scratchpad/audit.mjs`) extracting title/description/canonical/og:image/H1/JSON-LD/`<img>` src+alt,
plus **visual inspection of all 145 distinct images actually in use** (contact sheets) — because the
bug you spotted is invisible to filename-based checks: `svc-screen.jpg` has no device token in its name.

**Score: 588 / 601 pages clean on the automated checks.** 🔴2 🟠3 🟡4

---

## Top fixes (impact × effort)

### 🔴 1. An iPhone photo is used on 4 MacBook screen-repair pages — *the one you spotted*
`/images/services/svc-screen.jpg` shows a **cracked iPhone** being lifted off its frame with a suction
cup. It is served on:

| Page | Alt text currently claims |
|---|---|
| `/macbook-screen-repair-dubai` | "technician fitting a new **Retina display**" |
| `/macbook-pro-screen-repair-dubai` | "technician fitting a **Liquid Retina XDR panel**" |
| `/macbook-neo-screen-repair-dubai` | "MacBook Neo Screen Repair Dubai" |
| `/macbook-screen-repair-near-me-dubai` | "MacBook Screen Repair Near Me Dubai" |

So it is a **double failure**: wrong device *and* alt text that asserts something the image does not show
(a Google image-search / AI-extraction liability, and an E-E-A-T problem on a money page).

Sources — three places, all need the same new asset:
- `src/lib/page-images.ts:325` — `if (p.includes("screen")) return \`${SVC}/svc-screen.jpg\`;`
- `src/views/MacBookScreenRepair.tsx:227`
- `src/views/MacBookProScreenRepair.tsx:212`

**Fix:** shoot/source a MacBook display-assembly photo → `/images/real/lab/macbook-screen-repair-dubai.jpg`,
repoint all three, rewrite both alt strings to describe what is actually in frame. Keep `svc-screen.jpg`
only if an iPhone screen page wants it.

### 🔴 2. Broken image (HTTP 404) on 5 MacBook Pro screen pages
`/images/real/lab/macbook-pro-screen-repair.jpg` **does not exist** in `public/` and returns **404 on the
live site** (verified). The `.avif` responsive variants are also absent, so every source in the `<picture>`
fails — these pages render a blank image box.

- Referenced from `src/components/blocks/MacBookProChipScreenPage.tsx:21`
- Affects: `/macbook-pro-m1-screen-repair-dubai`, `…-m2-`, `…-m3-`, `…-m4-`, `…-m5-`

**Fix:** same asset as #1 solves both; then run `node scripts/optimize-images.cjs` to regenerate variants.

### 🟠 3. The "Mac Studio" photo is actually a Mac mini — 13 Mac Studio pages
`/images/real/lab/mac-studio-dubai.jpg` is a squat Mac mini (with the Mac mini retail box behind it),
not the much taller Mac Studio. Served on all 13 `/mac-studio-*-repair-dubai` pages.
Same class of error as #1, just not yet noticed.

- `src/lib/page-images.ts` — `macDesktopImage()` (`mac-studio` branch) and `imageForFamily()` (`studio`)
- **Fix:** rename the file to `mac-mini-*` and use it where it is honest, or replace with a real Mac Studio photo.

### 🟠 4. 11 desktop-Mac pages show MacBook imagery (9 also in `og:image`)
The `topicForPath()` fallbacks in `src/lib/page-images.ts` drop Mac mini / Studio / Pro / iMac routes onto
generic *MacBook* topic infographics:

| Page | Gets |
|---|---|
| `/mac-pro-data-recovery-dubai` | `macbook-data-recovery-dubai.jpg` |
| `/mac-pro-full-diagnostic-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-pro-gpu-repair-dubai` | `macbook-gpu-repair-dubai.jpg` |
| `/mac-pro-not-turning-on-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-studio-data-recovery-dubai` | `macbook-data-recovery-dubai.jpg` |
| `/mac-studio-not-turning-on-dubai` | `macbook-diagnostic-dubai.jpg` |
| `/mac-studio-overheating-fix-dubai` | `macbook-fan-heatsink-dubai.jpg` |
| `/mac-mini-overheating-fix-dubai` | `macbook-fan-heatsink-dubai.jpg` |
| `/mac-mini-ram-upgrade-dubai` | `macbook-ram-upgrade-dubai.jpg` |
| `/imac-virus-removal-dubai` | `macbook-virus-removal-dubai.jpg` |
| `/blog/imac-not-turning-on-power-supply-issues` | `macbook-diagnostic-dubai.jpg` — **alt says "iMac 27-inch power supply"** |

**Fix:** add device-family guards ahead of the generic MacBook block in `topicForPath()` so a
`mac-pro`/`mac-studio`/`mac-mini`/`imac` route never falls through to a MacBook asset.

### 🟠 5. 39 public pages have **zero images** — including money pages
Your rule ("every page should have images according to their title") is unmet on:

**Commercial / money pages (fix first):** `/best-macbook-repair-dubai`, `/best-apple-repair-dubai`,
`/best-iphone-repair-dubai`, `/same-day-macbook-repair-dubai`, `/corporate-macbook-repair-dubai`,
`/pricing`, `/reviews`, `/contact`, `/about`, `/mac-repair-cost-dubai`, `/imac-repair-cost-dubai`,
`/apple-repair-near-me-dubai`, `/iphone-repair-near-me-dubai`, `/mac-repair-near-me-dubai`,
`/apple-watch-repair-dubai`, `/apple-t2-chip-data-recovery-dubai`, `/ssd-data-recovery-dubai`,
`/mac-data-recovery-after-water-damage-dubai`, `/macbook-battery-swollen-repair-dubai`

**Blog hubs / tag pages:** `/blog`, `/blog/apple-news`, `/blog/buying-guides`, `/blog/care-maintenance`,
`/blog/fixes`, `/blog/repair-costs`, `/blog/sell-trade-in`, `/blog/why-us`, `/blog/tag/{imac,ipad,iphone,mac,macbook}`

**Legal/utility (acceptable to leave):** `/privacy`, `/terms`, `/refund`, `/cookies`, `/warranty`,
`/image-usage-license`, `/landing-template-demo`

Note `/apple-watch-repair-dubai` is the sharpest gap — `watchImage()` exists in `page-images.ts` and
`/images/devices/watch-*.jpg` are referenced, but the page renders no image at all.

### 🟠 6. `https://www.` is broken (HTTP 525), not redirecting
`www.macbook-repair-dubai.ae` resolves to Cloudflare but the TLS handshake to origin fails → **525**.
The checklist wants one canonical host with `www → non-www` as a **301**. Today anyone (or any crawler)
hitting the www variant gets an error page instead. `http → https` on the apex is correct (301).
**Fix:** add the www hostname to the origin cert / Hostinger SSL, then a 301 to apex.

### 🟡 7. Six MacBook Air blog posts have no `og:image`
`/blog/macbook-air-{intel,m1,m2,m3,m4,m5}-common-problems-dubai` — `blogTopicForPath()` matches
`/m[1-5]/` → `blog-apple-silicon-dubai` for most posts but these fall through. Zero social/AI preview image.

### 🟡 8. Meta length overruns
- 12 descriptions at 166–174 chars (truncate to ≤155): 8 blog posts + `/macbook-air-m5-repair-dubai` (174),
  `/macbook-pro-intel-repair-dubai`, `/macbook-pro-m1-repair-dubai`, `/macbook-pro-m2-repair-dubai`
- 1 title at 66 chars: `/blog/macbook-pro-m5-battery-draining-overnight-dubai`

### 🟡 9. Prices and facts are baked **into** the topic infographics
The generated 2×2 blueprint images (88 of them) carry AED figures as pixels — e.g.
`blog-repair-cost-dubai.jpg` renders "AED 8,000–16,000" and "AED 4,500–7,000".
Two consequences:
1. **This conflicts with the `hide-prices-whatsapp` branch you are on** — the build-time price stripping
   cannot reach text inside a JPEG, so prices stay publicly visible after the change ships.
2. AEO: LLMs and AI Overviews cannot extract text from images. Every stat in those panels is invisible
   to the engines you want citing you, and the body copy must carry it instead.

---

## Full checklist results

| § | Area | Status |
|---|---|---|
| A | Framework & config | ✅ Next 16 App Router, `poweredByHeader:false`, `trailingSlash` consistent, clean build (exit 0), no `ignoreBuildErrors` |
| B | Indexability | ⚠️ apex/http 301 ✅, real 404 ✅, robots ✅ (`/api/`,`/admin/` disallowed, all AI crawlers explicitly allowed), sitemap ✅ — **www 525 ❌** |
| C | On-page SEO | ⚠️ 1×H1 on every public page ✅, canonical on all 601 ✅, unique titles ✅, unique descriptions ✅ — 12 descs + 1 title too long |
| D | Structured data | ✅ server-rendered JSON-LD on all 601 public pages |
| E | Performance | ✅ **582/582 images carry explicit width+height** (zero CLS risk), AVIF+responsive `<picture>` throughout; field CWV still 🔍 |
| F | Accessibility | ✅ **582/582 images have alt text; 0 missing, 0 empty** — but see #1/#4, two alts describe the wrong device |
| G | Security | ✅ Strong: HSTS w/ preload, real CSP (`object-src 'none'`, `base-uri 'self'`, `frame-ancestors`), nosniff, X-Frame-Options, Referrer-Policy, Permissions-Policy. `'unsafe-inline'` in `script-src` is the one tradeoff (static prerender) |
| H | AEO/GEO | ⚠️ crawlers allowed, `llms.txt` present — undermined by #9 (facts locked in images) |
| I | Local SEO | ✅ LocalBusiness schema, NAP, area pages |
| J | Analytics | 🔍 verify GA4 fires in prod |
| K | Mobile | ✅ favicon/manifest/apple-touch wired |
| L | Content & trust | ⚠️ `page-images.ts` still carries the PLACEHOLDER NOTICE — `/images/devices/*-product.jpg` are AI renders pending real photography |

**False positives I ruled out:** 24 `/admin/*` pages (noindex + robots-disallowed + 307 auth redirect —
correct, not gaps); 190 "og family mismatch" hits (my regex was matching the word *macbook* inside the
domain name); 5 homepage "mismatches" (the device grid legitimately shows iMac/mini/Studio/Pro).

## Verify externally (🔍)
Field CWV via PSI/GSC · GA4 real-time · Rich Results Test on the new schema · `npm audit`

---

# FIX LOG — 2026-09-23 (branch `fix/image-content-match`, commit 23c584e)

## Root cause of the whole screen-image mess
iPhone, iPad and iMac each had a `*-screen-repair-dubai` topic image. **MacBook never
did.** So `topicForPath()` fell through to `apple-display-repair-dubai` (an Apple Studio
Display / 27" 5K panel), and somebody hand-patched the hero with the iPhone photo. Both
symptoms, one missing asset.

## Fixed and verified

| # | Issue | Scope | Status |
|---|---|---|---|
| 1 | iPhone photo on MacBook screen pages + false alt text | 4 pages | ✅ |
| 2 | `macbook-pro-screen-repair.jpg` 404 → blank hero | 5 pages | ✅ |
| 3 | **12 further images referenced but never processed into `public/`** | site-wide | ✅ |
| 4 | `gen-ts.mjs` emitted manifest entries with no image (root defect behind #3) | build tooling | ✅ |
| 5 | Mac mini photo presented as Mac Studio | 13 pages | ✅ |
| 6 | Desktop Macs falling through to MacBook imagery | 11 routes | ✅ |
| 7 | **91 blog pages: AVIF og:image, wrong dimensions → broken share cards** | 91 pages | ✅ |
| 8 | Double-escaped entities (`13&amp;quot;`) in titles/descriptions | 6 routes | ✅ |
| 9 | Over-length titles/descriptions | 28 pages | ✅ |
| 10 | Blog posts with no og:image | 6 pages | ✅ |
| 11 | Blog category hubs with no imagery | 8 pages | ✅ |

**Final state:** 0 missing image references · 0 alt/image contradictions · 0 AVIF
og:images · 0 over-length titles or descriptions · clean build · hero render confirmed
in-browser.

## Deliberately NOT changed (with reasons)

- **`/imac-virus-removal-dubai`** keeps the MacBook virus-removal infographic. macOS
  malware removal is identical across Macs and the image is a software/diagnostic
  diagram, so topic-correctness beats chassis-correctness. Flagged, not forced.
- **`/blog/mac-mini-vs-mac-studio-2026`** legitimately shows a Mac Studio; it is a
  comparison post. Homepage device grid likewise shows every Mac on purpose.
- **Blog tag pages** (`/blog/tag/*`) have no imagery but are `noindex` by design.

## Still open — needs a decision or spend

1. 🟠 **Generate `macbook-screen-repair-dubai`.** The manifest entry is written and
   `gen-ts.mjs` will pick it up automatically once the image exists. Blocked: the
   Higgsfield account is on the **free plan with 0 credits**. Until then MacBook screen
   pages use `blog-screen-display-dubai` (honest, MacBook-inclusive, correctly alt'd).
   Run after topping up: `node scripts/topic-images/generate.mjs && node scripts/topic-images/process.mjs && node scripts/topic-images/gen-ts.mjs`
2. 🟠 **`https://www.` returns 525.** Origin SSL does not cover the www hostname, so the
   www variant errors instead of 301-ing to apex. Hostinger/Cloudflare fix, not code.
3. ✅ **DONE** (commit 8e71c10) — see "Second pass" below.
4. 🟡 **Prices baked into the topic infographics as pixels** (e.g. "AED 8,000–16,000" in
   `blog-repair-cost-dubai.jpg`). Build-time price stripping cannot reach text inside a
   JPEG, so `hide-prices-whatsapp` will ship with prices still publicly visible. Needs
   regeneration of the affected images with the AED panels removed.
5. 🟡 **7 blog titles exceed 60 chars** and lose their "2026" suffix to truncation.
   Shorten the source titles so the year survives.
6. 🟢 Pre-existing React duplicate-key warning on `/macbook-screen-repair-dubai`
   ("Diagnosis" list). Unrelated to this work; not touched.


---

# SECOND PASS — hero imagery (commit 8e71c10)

**Pages with no imagery: 39 → 8.**

The 13 bespoke views were not a design decision. Each was scaffolded with a literal
`image={undefined}` **and an `imageAlt` already written for the image** — git shows they
were born that way (`d485064`), never wired up. None used the `sidecar` slot, so my
earlier caution about that was unfounded. All 13 now take `src` **and** `alt` from
`imageForRoute()`, so the two cannot drift apart — that drift is exactly what produced
the original iPhone-on-a-MacBook-page bug.

Also wired: `BlogTag` (5 pages), `BestAppleRepair`, `/blog`, `/pricing`, and
`/about`, `/contact`, `/reviews`.

## A third missing-asset problem
The earlier sweep only matched quoted literal paths, so it missed everything assembled
from a template literal in `page-images.ts`. **12 more files did not exist.** None were
rendered yet — they were 404s waiting for a route:

- **No Apple Watch photography exists at all.** `watchImage()` returned five paths that
  cannot resolve. It now returns `undefined` so the Hero degrades to text-only.
- `mac-mini.jpg`, `mac-mini-pro.jpg`, `mac-pro-rack.jpg` never existed → repointed at the
  real product shots.
- iPhone 12 / 11 / X-era / 6–8 branches had neither routes nor assets → removed.

## AI-generated images presented as the real business 🟠
The three `/images/brand/*` files are AI-generated placeholders (the file header in
`page-images.ts` says so). Two places treated them as real:

1. **`schema.ts` — FIXED.** `LocalBusiness.image` tells Google "these are photographs of
   this business" and listed all three, including a synthetic storefront **bearing an
   Apple logo**, which an independent repair shop may not display. Swapped for genuine
   Concord Tower photos.
2. **`gbp-content.generated.ts` — NOT FIXED, needs your decision.** That same AI storefront
   is queued as the image for **9 Google Business Profile posts**. Google requires GBP
   photos to genuinely represent the business, and the Apple-logo signage is a trademark
   exposure. Left alone because it publishes outward.

## Remaining 8 without imagery — all deliberate
| Page | Why |
|---|---|
| `/cookies` `/privacy` `/refund` `/terms` `/warranty` `/image-usage-license` | Legal/utility text pages |
| `/landing-template-demo` | `noindex` demo |
| `/apple-watch-repair-dubai` | **Genuinely blocked** — no Apple Watch image exists anywhere in the repo |

---

# THIRD PASS — coverage, analytics, dependencies (2026-09-23)

## Fixed (commit c1fe4fb)
🟠 **17 how-to guides were in no sitemap at all.** `guides.xml` matched only root-level
`/how-to…` paths, but every guide lives at `/blog/how-to…`, so it caught 2 of 19.
`blog.xml` could not cover them either — it is driven by the `POSTS` registry, which does
not contain them. Pattern widened and the two sitemaps kept disjoint.
**Sitemap coverage: 576 → 593 URLs = every indexable page, 0 duplicates, 0 missing.**

## New findings — NOT fixed, need your decision

### 🔴 Analytics has never fired in production
There is **no GA tag on the live site at all**. `NEXT_PUBLIC_GA_ID` is not set in the
Hostinger build environment, so `src/lib/analytics.ts` no-ops and no gtag script is
emitted. Every call, WhatsApp click and form submit has gone unmeasured. This is the exact
silent failure the audit checklist calls out (§J). Fix: set `NEXT_PUBLIC_GA_ID=G-…` in the
Hostinger Node env, then rebuild — build-time vars require a new build.

### 🔴 Next.js critical CVE, and this site uses the affected feature
`npm audit --omit=dev`: **1 critical, 6 high, 1 moderate.** The critical is a Next.js
**Middleware / Proxy bypass in App Router apps** — and `src/proxy.ts` exists, so the
affected surface is in use.
- Installed **16.2.7** · fixed in **16.3.6** · `isSemVerMajor: false`
- Also high: `sharp` (libvips CVEs — used by the image pipeline), `nodemailer` (used by
  the lead mailer), `postcss`, `nanoid`, `brace-expansion`, `linkify-it`
- A framework bump on a 601-page production site should be deliberate, so I have not run it.

### 🟡 107 pages have only 1–2 inbound internal links
**0 orphans** — every indexable page is linked from somewhere. But 107 sit on 1–2 inbound
links, including money pages (`/best-macbook-repair-dubai`, `/best-iphone-repair-dubai`,
`/apple-display-repair-dubai`). Hub-to-spoke linking would concentrate crawl priority.

---

# WHAT IS LEFT — consolidated

## Blocked on you
| # | Item | Why it needs you |
|---|---|---|
| 1 | 🔴 Set `NEXT_PUBLIC_GA_ID` in Hostinger env | Only you can set the build env |
| 2 | 🔴 `npm i next@16.3.6` + the other audit fixes | Framework bump on production — your call |
| 3 | 🟠 Higgsfield credits (account is free plan, 0 credits) | Unblocks the real MacBook screen image |
| 4 | 🟠 `www` SSL → 301 to apex (currently **525**) | Hostinger/Cloudflare, not code |
| 5 | 🟠 AI storefront queued for 9 GBP posts | Publishes outward; needs your decision |
| 6 | 🟡 Prices baked into infographics as pixels | Conflicts with `hide-prices-whatsapp`; needs image regeneration |

## I can do next, on your word
- 🟡 Internal linking pass for the 107 weak pages
- 🟡 Shorten the 7 blog titles that lose "2026" to truncation
- 🟡 `/apple-watch-repair-dubai` — still no watch image anywhere in the repo
- 🟢 Pre-existing React duplicate-key warning on `/macbook-screen-repair-dubai`

## Never audited — real gaps, need live tools or a human
| Area | Why it is still unknown |
|---|---|
| **Core Web Vitals (field)** | Needs PageSpeed Insights / GSC field data |
| **Accessibility beyond alt** | Contrast, keyboard nav, focus order, ARIA — needs axe/Lighthouse + manual keyboard pass. Only alt text and landmarks were checked |
| **Schema validity** | Presence verified on all 601 pages; never validated against Google's Rich Results Test |
| **GSC indexation reality** | Coverage, exclusions, manual actions — needs Search Console access |
| **Redirect chains / legacy URLs** | `redirects.generated.ts` never traced end to end |
| **Content truth** | `TRUST-CLAIMS.md` exists but claims like "40,000+ repairs", "5.0 from 232+ reviews", "since 2004" were never verified against source records |
| **Responsive/visual QA** | Only spot-checked at 1280px; no systematic multi-viewport pass |
| **Lead delivery** | Never tested that a submitted form actually reaches a human |

---

# LEAD-DELIVERY CANARY — 2026-09-23 (commit 4af5bb1)

## Verdict: ✅ the pipeline works — leads reach a human
Unlike the sellyourmac.ae failure this check exists for, a submitted lead here is
delivered on **two independent channels**, verified against production:

| Channel | Evidence |
|---|---|
| **Email** | `emailed:true` — SMTP accepted the message |
| **CRM** | `azizgc.com` issued a real ticket: **ref LD2026/3001, code MRD-1461** |

Storage (`saved:true`), validation (400 on empty/invalid JSON) and the honeypot
(200, silently dropped) all behave correctly.

**One limit on that claim:** `emailed:true` proves SMTP *accepted* the message, not that
it landed in an inbox. `LEAD_TO_EMAIL` is not `azizianalyst@gmail.com` — I searched that
mailbox and the canary is not there — so final inbox delivery could not be confirmed from
here. Worth one manual look at whatever address `LEAD_TO_EMAIL` points to.

## Two real gaps found and fixed

### 🟠 The CRM mirror could fail silently
`mirrorLeadToCrm()` was called as `void mirrorLeadToCrm(...)` — fire-and-forget. Its
boolean result went nowhere. If the CRM were down, the endpoint would still answer
`{ok:true, emailed:true}` and the failure would exist only in a server log nobody reads.
Now raced against a 2.5s budget (measured ~0.7s) and reported as `sent`/`failed`/`pending`,
so a slow CRM degrades rather than blocking the visitor.

### 🟠 No Origin check whatsoever
The route never inspected `Origin` — any site could POST into the lead pipeline, with only
the per-IP rate limit (20/10min) in the way. Foreign origins now get **403**. A *missing*
Origin is still allowed: that is not a CSRF vector, and blocking it would break
server-to-server monitors including this canary.

### 🟡 Every submission ate a redirect
`LeadForm` posted to `/api/lead` while `next.config` sets `trailingSlash: true` → a 308 on
the conversion path. Fixed.

## The endpoint now has a verifiable contract
```jsonc
{ "ok": true, "id": 1, "saved": true, "emailed": true,
  "notified": { "email": "sent", "crm": "sent" } }
```
`id` proves it was **stored**; `notified` proves a human was **told**. Without the
per-channel breakdown you cannot tell "delivered" from "written to a table nobody reads".

## Re-runnable: `scripts/lead-canary.mjs`
The shared `/lead-delivery-canary` script speaks a Supabase-shaped payload and fails this
site's schema before reaching the delivery logic, so this is the project-local version.
**All 11 checks pass.** Exit 0 = leads reach a human; alert on non-zero.

```bash
node scripts/lead-canary.mjs --require email,crm        # production
node scripts/lead-canary.mjs --json                     # for cron/CI
```
Worth putting on a weekly schedule — this class of failure appears *later*, when a
password rotates or a provider suspends an account.

## ⚠️ Test records to delete
These runs created real, deliberately-tagged records — roughly **5 CRM tickets** (including
`LD2026/3001`) and **~4 emails**. All are labelled `CANARY … please ignore`, model
`CANARY`, phone in the `+9715000000xx` block. Please delete them from the CRM Inbox so
they never enter real reporting.

## Unrelated, but it surfaced while searching mail
GitHub Actions is emailing **repeated canary failures for two other sites**:
`azizitechnologies.ae` (Uptime canary — all jobs failed) and `azizitechnologies.co.uk`
(Site health canary — failing since 22 Sept). Different projects, so untouched here.
