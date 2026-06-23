# Theme / UI-UX Audit — macbookrepair.ae

_Human-grade design + content audit. Method: 105 full-page screenshots (35 templates × 3 breakpoints) + a 75-agent two-pass review across visual QA, source-level theme consistency (spacing/type/color/components/layout/a11y), content completeness, copy, and images. Top findings adversarially verified (26 confirmed / 4 refuted)._

**Total: 499 findings — 14 critical · 131 high · 236 medium · 118 low.**

---

## TL;DR — is it "AI-built"?

**Individual sections look genuinely hand-crafted.** Spacing tokens exist, the palette is disciplined, the office hero photo is real, accessibility foundations (focus ring, skip link, reduced-motion, ARIA) are properly considered, and the 92 service / 72 model / 24 location pages are content-complete and largely *unique* — not name-swapped boilerplate. This is **not** a thin AI site.

**But it fails the "no visitor would guess AI built this" bar on three axes:**

1. **Length & repetition.** The homepage is **28 sections / 25,650px desktop / 46,790px mobile (~58 screens)**. Service/model/hub pages run 16–24 sections with 3–5 near-identical WhatsApp CTA blocks each. The endless scroll of "eyebrow + H2 + card grid" is the single biggest tell.
2. **Self-contradiction.** The same page states **3 different warranty durations**, two different lead technicians (Abdul Aziz vs Shafiq), iMac reviews under "Reviews for this iPhone service," calibration "60 min" and "4 hours," wrong device photos, and fabricated model numbers. These come from a few shared components stamping hardcoded values onto every page.
3. **Image incoherence.** Four clashing image styles (real photos / dark AI renders / blueprint infographics / wood-table snapshots), several with **the wrong domain baked in** (`macbook-repair-dubai.ae`), garbled AI text, a wrong Apple logo, and an **iPhone photo as the MacBook-screen-repair hero**.

The good news: **almost every problem is systemic** — it lives in ~12 shared files. Fix those and the polish propagates to hundreds of pages at once.

---

## Theme recommendation

You asked whether to adopt one unified theme — "nice, simple, without colors," same system across pages/posts/categories/blogs. **Yes. Keep the current near-monochrome direction — it's the right call — but enforce it as a single token system instead of ~2,500 ad-hoc values.** Concretely:

- **One ink + one green, flat.** White/near-white surfaces, near-black bands, a single green accent (`#0A7A40`). Remove the second green (`--success` used decoratively), the SaaS "glow blob" gradients, the gold stars (or keep only as a real Google-review convention), and the emoji icons. Monochrome **line icons only** (lucide).
- **One type ramp, one spacing rhythm, one card, one button, one CTA pattern** — defined once, used everywhere (spec below). Right now the same H2 renders at 3 sizes, the eyebrow has 6 recipes, cards have 3 radii, and WhatsApp buttons have 4 looks.
- **Shorter pages.** Cap templates at ~10 sections; one mid-page CTA + one closing CTA (not five). Move overflow blocks to their existing dedicated pages as link-cards.
- **One image language.** Real lab/workshop photos as the hero treatment everywhere; demote blueprints to small secondary explainer slots only; never bake URLs/prices/specs into art.

This is a **consolidation**, not a redesign — the visual DNA is already good. No URL/homepage-H1/price changes required (all constraints respected).

---

## CRITICAL (14) — visibly broken or embarrassing

| # | Page(s) | Issue | Root cause / fix |
|---|---------|-------|------------------|
| C1 | `/reviews` | Active filter chips are **green-text-on-green-fill = invisible**; page loads showing 3 blank green pills | `Reviews.tsx:258` `bg-accent text-accent` → `text-white` |
| C2 | 5 views (water-damage, pricing, data-recovery) | **`error` color token undefined** → Tailwind drops it → invisible red emergency/alert bands | Add `error` alias = `--danger`, or find/replace `error`→`danger` |
| C3 | `/macbook-screen-repair-dubai` | Hero is an **iPhone** photo (AI-generated, malformed hands) on the MacBook **screen** page | Replace `services/svc-screen.jpg` + derivatives |
| C4 | `/iphone-16-repair-dubai` | Hero shows a **Pro-model** iPhone (gold, triangular triple-camera) next to "dual camera" copy | Replace `devices/iphone-16.jpg` |
| C5 | `/imac-repair-dubai`, `/iphone-repair-dubai`, `/mac-repair-dubai`, calculator, service-center, Pro hub | Hero blueprints bake in **wrong domain** `macbook-repair-dubai.ae`, AI-garbled labels, prompt-leak watermarks ("azizi z / z aziz"), fake specs | Regenerate or crop; never bake URLs into art |
| C6 | `/mac-logic-board-repair-dubai` | **Three** warranty durations on one page (15-day / 12-month / 6-month) | Drive all from `warrantyDays` prop |
| C7 | `/ipad-screen-repair-dubai` | Hero "12-month" vs body "3-month" warranty in one viewport | `WarrantyBar`/`FloatingBookingCard` from prop |
| C8 | `/pricing` (mobile) | All 5 price tables + vs-Apple table **clip off-screen**; prices read "AED" with number cut, Apple column invisible | Stack as cards below `md` |
| C9 | iMac & iPhone hubs | **Stale WordPress price tables** contradict canonical prices (iMac board "99-799" vs AED 1,300; iPhone battery "99-399" vs AED 330) | Replace with canonical figures or link to `/pricing` |
| C10 | All 98 blog posts | **Two people both credited "Founder"** (Ali ×5, Shafiq ×4) — emitted to Person schema | Lock one founder, one title each |
| C11 | 74 Mac/iPad/iMac/desktop model pages | **Zero images** — pure text-and-table walls (vs iPhone pages which all have a hero) | Wire `imageForSlug()` into the 4 Mac model templates |
| — | (refuted) | "Apple Watch images, zero pages" — **actually 301-redirected** in `.htaccess`; "About has no CTA" — covered by footer band; "Home padding arbitrary" — zoned | adversarial verify caught these |

_(C5 spans several pages; counted as the cluster of wrong-domain hero images, the most-repeated critical.)_

---

## The 12 systemic root-causes (fix once → fixes hundreds of pages)

These are where the "AI feel" actually comes from. Ordered by reach:

1. **`WarrantyBar.tsx:10` hardcodes "12-month written warranty" + "30-min appointment repairs"** — renders on every template page regardless of the page's real `warrantyDays`. Contradicts ~44 pages (15-day, 90-day, 0-day). → Pass `warrantyDays` in; render the real label; hide when 0.
2. **`Footer.tsx:115` hardcodes "Broken Mac?"** pre-footer band → shows on every iPhone/iPad/trade-in/AMC page. → Device-aware prop ("Broken iPhone?" / neutral "Broken Apple device?").
3. **`SubServicePageTemplate.tsx:236` sets the closing CTA heading to `{p.h1} - book in 4 minutes on WhatsApp`** → a 110-char keyword string wrapping to 7 lines on every service/model page. → Use `serviceName`.
4. **Duplicate end CTA**: template's own final CTA (`SubServicePageTemplate.tsx:233-253`) renders directly above the footer band → two identical green CTA blocks in one viewport on every page. → Suppress one.
5. **Reviews not filtered by device**: `reviews.ts` pool returns MacBook/iMac reviews under "Reviews for this iPhone/iPad service," sometimes a single review. → Filter by `services` tag; guarantee 2-3 distinct.
6. **Mobile tables clip** (`VsAppleStore.tsx`, `DevicePageTemplate.tsx`, `MacDesktopModelPage.tsx`, `Pricing.tsx`, several views): `min-w` inside `overflow-x-auto` with no scroll affordance → the Apple-Store comparison column and prices are invisible on mobile. → Stack as cards below `md`.
7. **Typography**: globals.css has a clean h1–h6 ramp, but it's bypassed by **~2,500 hardcoded `text-[NNpx]`**. Section H2 = 3 sizes/2 weights; eyebrow = 6 recipes; muted text = token + faint + 5 opacity whites. → Adopt 5 utility classes (`.eyebrow/.h2/.h3/.body/.small`).
8. **Spacing**: three competing rhythms — token templates (`gap-3xl`), a raw `py-14 lg:py-20` family (off-grid 56/80px) in `LandingTemplate`/`FeatureGrid`/`FinalCTA`/etc, and a `-mb-[4rem]` hack in 46 files cancelling `PageShell`'s `pb-3xl`. Sibling templates disagree on body gap (48/64/32px). → One section gap (`gap-3xl`), kill the raw family and the hack.
9. **`bg/bg-alt` alternation collapses to one flat `#F1F4F8`** — Hero templates wrap the whole page in `bg-alt`, plain sections inherit it, bands re-use it → page is one grey slab, separated only by hairlines. → Real two-tone alternation.
10. **Component drift**: WhatsApp action in 4 visual recipes (2 sticky bars bypass the `Button` primitive); `ui/badge.tsx` defined but unused beside ~20 ad-hoc chips; cards across 3 radii / 3 shadows; **FeatureGrid icon tile is white-on-white (invisible)**. → Route everything through `Button`/`Badge`; one card recipe.
11. **Identity contradictions**: lead tech is "Shafiq 15yr" (38 pages) / "Shafiq 21yr" (6) / "Shafeeq 12yr" (11) / "Abdul Aziz 21yr" (home) — plus ~20 fabricated author titles each and faked `dateModified` on all 98 posts. → One name + tenure (Shafiq); one title per author; drop fake "last updated."
12. **`startingPrice={0}` prints "From AED 0"** on 7 free-consult pages (iCloud unlock, diagnostics) and auto-claims "same-day completion" via `QuickAnswer.tsx:79`. → Show "Free / From quote"; suppress same-day on consult pages.

Plus two more design-level: `MacBookModelPage.tsx:332` says **"MacBook Air" on 15 Pro pages**; `QuickAnswer.tsx:79-82` injects an unconditional **"same-day completion"** clause that contradicts board-repair timelines.

---

## Design-token spec — the single source of truth

Keep `tokens.css`/`tailwind.config.ts` as the home; the job is to **make every component consume these and delete the ad-hoc values.**

**Color (near-monochrome + ONE green)**
```
Surfaces:  bg #FAFBFD · bg-alt #F1F4F8 · bg-card #FFFFFF   (use a real 2-tone alternation)
Ink:       text #131822 · text-muted #535B6B · text-faint #5E6675
Dark band: primary #1B1F22 (near-black) — hero/footer/CTA only
Accent:    ONE green #0A7A40 (hover #075C30). text on dark: accent-bright #34C172
Functional ONLY: danger (define `error` alias), star — never decorative
Remove: --success as a decorative 2nd green · glow-blob gradients · emoji icons
```

**Type ramp (5 roles — replace the ~2,500 arbitrary sizes)**
```
.eyebrow  12px / semibold / uppercase / tracking-wider / mono / accent
.h2       clamp(28,4vw,32) / 600           (section headers — ONE size everywhere)
.h3       clamp(22,3vw,24) / 600           (card titles)
.body     17px / 1.47 / 400                (max-w ~72ch for prose)
.small    14px / 1.5 / muted               (meta, labels)
h1 stays clamp(32,5.5vw,56)/800 — do not touch homepage H1
```

**Spacing rhythm (one scale: 4/8/16/24/32/48/64/96)**
```
Between sections:  py-3xl (64) standard · py-4xl (96) major breaks — pick per type, apply consistently
In-page section gap: gap-3xl (64) for ALL device/service/hub templates (Blog prose may stay tighter)
Kill: raw py-14/py-20 · the -mb-[4rem] PageShell hack · px-5 md:px-6 → container token
```

**Radius / shadow / container**
```
Cards: rounded-md (10px) — ONE radius. Larger radius only on hero/CTA panels.
Shadow: sm/md/lg tokens only.   Container: max-w-content 1180px (already consistent — good).
```

**Components (consolidate to one each)**
```
Button: route ALL CTAs through ui/button.tsx (incl. both sticky bars). 1 filled + 1 text-link WhatsApp recipe.
Chip:   adopt ui/badge.tsx (2-3 variants); delete the ~20 inline pill recipes.
Card:   one recipe (bg-card, rounded-md, border-border, shadow-sm, p-lg). Fix FeatureGrid white-on-white tile → bg-accent/10.
CTA:    one mid-page band + one closing band per page. No duplicates.
Tables: <md → stacked cards. No clipped columns, ever.
Tap targets: inputs h-11, buttons ≥44px on touch.
```

---

## Content — what's missing (you said "a lot of content is missing")

**Reality check:** existing pages are *not* thin — services/models/locations are content-complete and unique. The gaps are (a) **missing high-intent pages** and (b) **finish/E-E-A-T**, not word count.

**Missing money pages (build, in priority order — no URL changes to existing):**
1. **`/apple-watch-repair-dubai`** hub + battery/screen/back-glass — image sets already exist; currently only 301-redirects (high-intent, zero coverage).
2. **iPhone 11 / 12 / X / XR / XS + a 6/7/8 "legacy"** model pages — images exist (`iphone-11/12/x-era/legacy.jpg`), nav already advertises "iPhone 6 → 17," highest repair volume.
3. **`/same-day-macbook-repair-dubai`** (emergency/express) — "30-min / same-day" is a core claim with no landing page.
4. **`/corporate-apple-repair-dubai`** (B2B / bulk / fleet / VAT invoicing) — highest-margin segment, zero pages.
5. **`/macbook-pickup-and-delivery-dubai`** — sold everywhere but only lives as a *blog post*; needs an indexable service page.
6. **Per-device cost hubs** + **iPhone/iPad sell-trade** pages.

**Finish / E-E-A-T fixes (existing content):**
- One lead technician name + tenure everywhere (Shafiq). One title per blog author (kill ~60 fabricated titles).
- Stop faking `dateModified` (= published on all 98 posts). Add a TOC to long posts.
- Give high-value posts distinct hero images (27 iPhone posts currently share ONE; only 1 of 98 has an in-body image).
- About: differentiation table currently ends on two ties ("OEM parts" ✓/✓, "warranty" 12mo/12mo) — reorder so it doesn't close by proving you're identical to Apple.
- Pricing: add a freshness date. Contact/area pages: fix blank Maps embeds (static map fallback).

---

## Image system plan

- **Replace the wrong/garbled assets** (criticals): `svc-screen.jpg` (iPhone→MacBook), `iphone-16.jpg` (Pro→base), and all wrong-domain blueprint heroes (`imac/iphone/mac/macbook-pro` hubs, calculator, service-center, screenshot guide). Fix the **distorted Apple logo** on `real/lab/macbook-pro-lid-*.jpg` (it's the site-wide MacBook fallback).
- **One hero treatment**: real lab/workshop photos across hubs + model pages; blueprints demoted to small explainer slots only.
- **Add photos to the 74 image-less Mac/iPad/iMac model pages** via `imageForSlug()`.
- **Alt text**: all 118 topic alts are the identical "… Dubai … infographic" stamp — vary them.
- **Hygiene**: ~33 orphaned device/lab assets referenced by no route (dead `page-images.ts` mappers) — wire or delete.

---

## Suggested rollout (each batch = visible lift, re-screenshot to verify)

- **Batch 1 — Stop the embarrassment (1 day):** C1, C2, and the 12 systemic root-causes #1–6 (warranty prop, "Broken Mac?", CTA heading, duplicate CTA, review filter, mobile tables). One PR, hundreds of pages fixed.
- **Batch 2 — Theme system (2–3 days):** type ramp + spacing rhythm + bg alternation + component consolidation + token cleanup (#7–10). This is the "one theme" you asked for.
- **Batch 3 — Images (1–2 days):** replace wrong/garbled assets, unify hero treatment, add model-page photos.
- **Batch 4 — Content trim & identity (2 days):** shorten homepage + over-long pages to ~10 sections; fix technician/author/date/warranty-wording consistency; legacy copy rewrite to the `areas.ts` voice.
- **Batch 5 — Missing pages (ongoing):** Apple Watch, legacy iPhones, same-day, corporate, pickup-delivery.

_Full per-page findings: `.audit/pass1.json` + `.audit/pass2.json` (499 findings with file:line + screenshot evidence). Screenshots: `.audit/screens/`._
