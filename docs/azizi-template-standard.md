# Azizi Template Standard — macbook-repair-dubai.ae
**Locked 2026-08-30.** The one template. Build every new or rebuilt commercial page to this.

- **Component:** [`src/components/azizi/AziziTemplate.tsx`](../src/components/azizi/AziziTemplate.tsx)
- **Modules:** [`src/components/azizi/modules.tsx`](../src/components/azizi/modules.tsx)
- **Form presets:** [`src/data/form-presets.ts`](../src/data/form-presets.ts)
- **Audit:** `node scripts/template-audit.mjs --page <slug>`
- **Live proof:** `/azizi-template-demo` (noindex)
- **Ported from:** `~/Claude/Projects/azizitechnologies.ae/_delivery/PAGE-TEMPLATE-STANDARD.md`

Supersedes `src/components/blocks/LandingTemplate.tsx` (8 sections, one demo page). That one stays for `/landing-template-demo` only; do not build new pages on it.

---

## Verified state

Measured on `/azizi-template-demo` against the live reference `azizitechnologies.ae/it-support-dubai-media-city/`:

| | Reference | This template |
|---|---|---|
| H1 | 1 | **1** |
| H2 | 17 | **18** |
| FAQs | 10 | **10** |
| Internal links | 79 | **76** |
| BreadcrumbList schema | yes | **yes** |
| FAQPage schema | yes | **yes** |
| AggregateRating *(spec: none)* | present ⚠️ | **none** |
| Hero LCP-primed | no | **yes** |
| AVIF served | no | **yes** |
| Visible prices | 0 | **0** |
| Mobile overflow @375px | — | **0** |
| Form controls <16px | — | **0** |
| Tap targets <44px | 5/159 (chrome) | **12/215 (chrome)** |

`tsc --noEmit` → 0 errors. All 24 modules render.

---

## The 24 modules

| # | Module | Prop | Notes |
|---|---|---|---|
| 1 | Header | — | `PageShell` |
| 2 | Breadcrumb | `breadcrumb` | emits `BreadcrumbList` |
| 3 | **Hero** | `hero` | **required.** Image = LCP element |
| 4 | AuthorByline | `authorByline` | never mass-assign |
| 5 | QuickAnswer | `quickAnswer` | written per page |
| 6 | KeyTakeaways | `keyTakeaways` | 6 standalone claims |
| 7 | IntentRouter | `intentRouter` | **omit unless data shows mismatch** |
| 8 | WhatIs | `whatIs` | 2 paragraphs + 4 benefits |
| 9 | Features | `features` | 6 cards |
| 10 | Comparison | `comparison` | 5–8 rows |
| 11 | Methodology | `methodology` | 4–5 steps |
| 12 | PartsAndTooling | `partsAndTooling` | 6 items |
| 13+22 | LocationDetails + map | `showLocation` | |
| 14 | RelatedServiceChips | `relatedServices` | |
| 15 | RelatedBlogStrip | `relatedPosts` | + `relatedPostsFamily` to force it |
| 16 | FAQ | `faqs` | 8–10 Q, emits `FAQPage` |
| 17 | AuthorityOutboundLinks | `sources` | real sources only |
| 18 | RelatedHubs | `relatedHubs` | siblings + area pages |
| 19 | FinalCta | `finalCta` | |
| 20 | **LeadForm** | `preset` | **always pass one** |
| 21 | TeamCredentials | `showTeam` | reads real `TEAM` |
| 23 | StatsBlock | `showStats` | |
| 24 | ReviewsGrid | `reviews` | real reviews or omit |
| 25 | HubServiceLinks | `hubLinks` | closes the link target |
| — | StickyMobileCTA | — | `PageShell` |

Everything except `hero` and `preset` is optional and omits cleanly.

---

## Non-negotiable rules

**Prices.** None. Not in body, title, meta or schema. Cost intent is served by "free diagnosis".

**Claims.** Independent Apple specialist. Never "Apple Authorised" or "Apple Certified".

**Honesty.** Never invent reviews, case-study numbers or bylines. An empty slot beats fabricated proof — omit the module and say so.

**Meta.** ≤155 characters counted on the final string, must contain a CTA word, never a price.

**Schema.** Scoped to the page's own URL. No self-serving `Review`/`AggregateRating`. Never invent entity IDs.

**Images.** One hero per page — it is the LCP element. Real photographs, never generated imagery of the workshop or a device we repaired. Alt text names the outcome and the brand. WebP/AVIF are produced by the existing variant pipeline; the JPG is a fallback modern browsers never fetch.

**Mobile @375px — measure, don't eyeball.** Tap targets ≥44px (prose links exempt) · zero horizontal overflow · no form control under 16px.

**Registration — three places, not one.** `src/app/<slug>/page.tsx`, `src/views/<Name>.tsx`, and **remove the slug from `redirects.generated.ts`** if one exists. A live redirect beats a new page and ships it invisible.

---

## Fixes this template forced (all shared, all sitewide)

| Fix | File | Was |
|---|---|---|
| Textarea iOS auto-zoom | `ui/textarea.tsx` | `text-sm` (14px) → `text-base md:text-sm` |
| Hero CTA tap targets | `blocks/Hero.tsx` | h-10 (40px) → `size="lg"` (44px) |
| LeadForm chips | `blocks/LeadForm.tsx` | ~38px → `min-h-[44px]` |
| Stale years figure | `blocks/StatBand.tsx` | hardcoded "20+" → derives from `NAP.yearsInBusiness` (21) |
| Missing footer + sticky bar | `AziziTemplate.tsx` | bare fragment → wrapped in `PageShell` |
| Missing breadcrumb schema | `AziziTemplate.tsx` | none → `BreadcrumbTrail` |

Each was found by rendering and measuring, not by reading code.

---

## Known, accepted

- **12 tap targets under 44px** — all sitewide chrome (skip link, header logo, footer links, carousel arrows). The source spec explicitly says not to chase these per page.
- **H3 count 32 vs the reference's 17** — the reference keeps card titles out of headings; we use `h3` for feature/parts/team cards. Better for structure and screen readers. Deliberate.
- **Links 76 vs 79** — close enough; `hubLinks` is the lever if a page needs more.

---

## Cluster coverage — where this template gets applied

392 pages. Mac and iPhone are **74% of the site**.

| Cluster | Pages |
|---|---:|
| Mac · MacBook model pages | 69 |
| Mac · MacBook services | 53 |
| Mac · area pages | 33 |
| Mac · iMac | 26 |
| Mac · cross-device | 16 |
| Mac · Mac mini | 15 |
| Mac · Mac Studio | 15 |
| Mac · Mac Pro | 10 |
| **Mac total** | **237** |
| iPhone · services | 29 |
| iPhone · model pages | 26 |
| **iPhone total** | **55** |
| iPad | 40 |
| Apple umbrella | 8 |
| Other | 52 |

**Do not rebuild all 292.** Hub and money pages carry the cluster; model and area pages are long-tail and are served fine by their existing templates. Rebuild on evidence — GSC position and impressions — not on a schedule.

### Build order

1. **The 8 GSC money pages** (agreed) — all Mac/iPhone, all position 17–57 with impressions and ~0 clicks
2. **Cluster hubs** — `/macbook-repair-dubai/`, `/mac-repair-dubai/`, `/iphone-repair-dubai/`
3. **Top MacBook services** — screen, battery, logic board, water damage
4. **Top iPhone services** — screen, battery, charging port
5. Everything else only where GSC shows impressions without clicks

### Preset per cluster

Resolved automatically by `presetForSlug()` — verified across all 393 routes, 375 matched, 18 documented misses.

| Cluster | Preset |
|---|---|
| Mac + iPhone + iPad repair | `repair` |
| Data recovery | `data-recovery` |
| SSD / RAM upgrades | `upgrade` |
| Sell / trade-in | `sell-tradein` |
| Corporate / AMC | `business` |

---

## Per-page checklist

- [ ] `preset` passed (never null on a commercial page)
- [ ] Breadcrumb set
- [ ] Hero image: real photo, alt names outcome + brand
- [ ] QuickAnswer written for this page, not templated
- [ ] 6 KeyTakeaways, each readable out of context
- [ ] 8–10 FAQs
- [ ] Byline names a real technician
- [ ] Reviews real, or module omitted
- [ ] No price anywhere
- [ ] `hubLinks` populated → ~78 internal links
- [ ] Redirect removed if the slug had one
- [ ] `node scripts/template-audit.mjs --page <slug>` clean
- [ ] Mobile measured at 375px

⚠️ **The audit script trips `src/proxy.ts`** — 60 requests/min per IP, 2-minute block. Use `--page` for single pages; add a delay before running it site-wide.
