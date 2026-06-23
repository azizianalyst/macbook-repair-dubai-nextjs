# SEO recovery: bot policy, internal-linking upgrade & content-gap backlog

_Last updated: 2026-06-14. Branch: `seo-recovery-schema-cwv`._

Context: the site is recovering from a post-migration ranking drop (reindex lag + entity
fragmentation). Everything below is **additive** — no URL changes, no removed links, no new
redirects — to avoid disturbing the in-progress reindex. New pages are deferred to a staged
backlog (bottom of this doc) rather than shipped all at once.

---

## 1. Sell / trade-in pages — decision

**Keep all three** (`/sell-macbook-dubai`, `/sell-faulty-macbook-dubai`, `/trade-in-macbook-dubai`).
They are substantive, represent a real service ("we buy MacBooks, working or faulty"), and capture
the other fork of the same high-intent audience (repair *or* sell a dead MacBook).

- They remain **out of the mega-menu and footer** (contextual links only) — reduces casual
  competitor discovery without hurting customers (search still finds them).
- **Entity safeguard:** each links up to the MacBook-repair hub. NB: `/macbook-repair-dubai` is
  **not a page** — it 301s to `/` (the homepage *is* the MacBook-repair hub). So the correct hub
  link is `/`, which is what these pages already used. (An earlier edit briefly pointed them at the
  301 alias and was reverted.)
- **You cannot hide an indexed page from competitors** while keeping it findable by customers — same
  search visibility. The real protection (blocking SEO-intel crawlers) is already in place; see §2.

_Fixed: `src/views/MacOsReinstall.tsx` had a breadcrumb pointing at the `/macbook-repair-dubai` 301
alias (the only 301-hop internal link on the site) — repointed to the canonical `/`._

## 2. Crawler policy

- **AI search/answer crawlers explicitly welcomed** in `src/app/robots.ts` (was 6, now the full
  reputable set): OpenAI (GPTBot, OAI-SearchBot, ChatGPT-User), Anthropic (ClaudeBot, Claude-Web,
  Claude-SearchBot, Claude-User), PerplexityBot/Perplexity-User, Google-Extended, Bingbot, Applebot
  + Applebot-Extended, Amazonbot, Meta-ExternalAgent, cohere-ai, DuckAssistBot, YouBot, CCBot.
  The `*` rule already allowed them; naming them is explicit AEO signalling.
- **Competitor SEO/backlink crawlers stay blocked** (Ahrefs, Semrush, Majestic, DataForSEO, …).
- **Hard enforcement added** in `src/proxy.ts`: robots.txt is advisory, and this is a Hostinger
  Node app (`.htaccess` doesn't apply, no WAF via tooling), so the proxy now returns **403** to the
  blocked UA tokens. Case-insensitive substring match — cannot catch Googlebot/Bingbot/AI bots.
  True network-level blocking would be a manual Hostinger-panel step.

## 3. Internal-linking upgrade (on-page SEO)

Goal: every post → relevant page, every page → relevant service, every page surfaces relevant posts.
Done with **automated resolvers** so ~130 service pages aren't hand-edited.

| Change | File | Effect |
|---|---|---|
| **Related-services resolver** | `src/lib/related-services.ts` (new) | Given a path, returns family-scoped sibling services from the route registry. Token-based fault detection (so "…-karama" ≠ "ram"). Cross-family penalised −4 (hard guard); backfills the family hub so the block never empties. |
| **Auto "Related repairs"** | `SubServicePageTemplate`, `IPhonePageTemplate`, `DevicePageTemplate` | `related`/`relatedSlugs` props made **optional**; when absent, auto-resolved. Existing curated arrays preserved (fallback only fills gaps) — zero churn. |
| **Family-scoped linkify** | `src/lib/linkify.tsx` | Rules split into per-family sets (`RULES_BY_FAMILY`) + cross-family money pages. `family` threaded through (`default "macbook"`, so existing callers unchanged). |
| **Linkify on all posts** | `BlogPostTemplate` (+ SubService intro) | Removed the MacBook-only gate. **iPhone/iPad/iMac/Mac posts now get in-body links to their own family's services — previously they had none.** Verified: iPhone post → `/iphone-*`, iPad → `/ipad-*`, iMac → `/imac-*`, MacBook unchanged. |
| **Blog block backfill** | `src/lib/related-articles.ts` | When on-family posts are thin, backfill "general" trust/logistics posts so the "From our blog" block always fills. |
| **Orphan checker** | `scripts/orphan-check.cjs` (new) + `package.json` | `npm run check:orphans` flags any route with no inbound internal link. Plus `check:links`, `check:internal`. Manual QA gate (needs the dev server, like `check:urls`). |

**Verification (against the production build):** `npm run build` passes (typecheck + 373 static
routes). `npm run check:links` → **0 broken**, `npm run check:orphans` → **0 orphans**. Family-correct
in-body links and "Related repairs" blocks confirmed by spot-check (iPhone→`/iphone-*`, iMac→`/imac-*`,
etc.). Bot-block confirmed live: Googlebot/real users → 200, AhrefsBot/SemrushBot → 403.

---

## 4. Content-gap backlog (staged — generate in small batches, deploy, then `check:urls:live`)

Identified from a coverage audit vs. Mac-community research (Reddit/MacRumors/Apple Communities).
**Verify each slug against current routes before creating** — some areas already exist (e.g.
`production-city`, `the-greens`). New service/model pages auto-inherit the §3 internal linking.

**Batch 1 — Desktop-Mac services** (biggest gap: MacBook has 32 service pages, these have ~1–3):
- Mac mini: `mac-mini-logic-board-repair-dubai`, `mac-mini-data-recovery-dubai`, `mac-mini-fan-cleaning-dubai`, `mac-mini-not-turning-on-dubai`, `mac-mini-overheating-fix-dubai`
- Mac Studio: `mac-studio-logic-board-repair-dubai`, `mac-studio-thermal-repaste-dubai`, `mac-studio-data-recovery-dubai`, `mac-studio-psu-repair-dubai`, `mac-studio-fan-cleaning-dubai`
- Mac Pro: `mac-pro-psu-repair-dubai`, `mac-pro-mpx-gpu-module-dubai`, `mac-pro-thermal-repaste-dubai`

**Batch 2 — Device guides** (guides are 100% MacBook today; mirror for other devices, add bridges in `guides.ts`):
- iPhone: clean screen, check battery health, back up before repair, factory-reset before selling
- iPad: reset, extend battery life
- Desktop Mac: upgrade RAM in a Mac mini, identify your Mac model, check storage/thermal

**Batch 3 — Blog topics:**
- Real repair case studies per family (esp. Mac mini/Studio/Pro — currently MacBook-heavy)
- Board-level / micro-soldering explainer; GPU failure on Intel Macs
- Security: activation-lock / MDM-locked Mac (legitimate ownership), iCloud-locked
- Dubai-specific: Mac thermal & dust in summer heat
- RAM/SSD ceilings explained per model (M-series soldered vs upgradeable)

**Batch 4 — Dubai area pages** (candidates not yet covered — verify first):
- Media City, Design District (D3), Al Quoz, Dubai Hills, Arabian Ranches, Tecom, Festival City,
  Motor City, Discovery Gardens; + Abu Dhabi/Sharjah sub-areas (Al Reem, Yas, Al Nahda).

Generation is automated by the agent prompt at
[`.claude/workflows/generate-missing-pages.md`](../.claude/workflows/generate-missing-pages.md).

---

## 5. Link-equity audit & funnel upgrade (2026-06-14)

A cluster-level **contextual** link-graph audit (`scripts/cluster-audit.cjs`) revealed that §3's
"every page is connected, 0 orphans" was true but masked two equity problems — measured on the
**in-content** graph only (links inside `<main id="main">`, excluding the global nav/mega-menu/footer
chrome). Run it against a prod build: `BASE=http://localhost:3010 node scripts/cluster-audit.cjs`.

**What the audit found (before):**
- **Blog funnelled 0% of its contextual links to the conversion/money pages** (sell, trade-in,
  AppleCare, AMC, insurance, out-of-warranty, onsite, boot-camp) and only 20% to any revenue page —
  a cohesive content island that hoarded equity. AppleCare had **2** inbound contextual links,
  out-of-warranty **5**, AMC **3**; most money pages survived on footer/nav links alone.
- **Guides were a weak silo**: 2.3 in-links/pg, **0% linked to their `/macbook-guides` hub**, 9% intra.
- A **long tail** of services at 1 inbound contextual link (e.g. iPhone headphone-jack, sim-tray).

**Changes (all additive — no URL/redirect changes):**

| Change | File | Effect |
|---|---|---|
| **Money-page linkify rules** | `src/lib/linkify.tsx` | AppleCare + out-of-warranty added to `GENERAL_RULES` (fire on every family, not just MacBook); sell/Boot Camp added to MacBook. Prose mentions now link to conversion pages. |
| **`relatedConversion()`** | `src/lib/related-services.ts` | Resolves the most relevant conversion page for a content path (topic/keyword routing + a rotating device-agnostic fallback; never mis-routes a MacBook-only sell page onto an iPhone post). |
| **Conversion card on posts** | `BlogPostTemplate` | Appends one `relatedConversion()` card to every `/blog/*` post's related grid (dedupes vs curated). |
| **`GuideClusterNav`** | `src/components/blocks/GuideClusterNav.tsx` (new) + `BlogPostTemplate` | Guides render a hub backlink (`/macbook-guides`) + sibling guides (same theme first). Guides all render via `BlogPostTemplate`, so this is one insertion. |
| **Coverage ring** | `coverageSibling()` / `withCoverage()` in `related-services.ts`; wired into `SubServicePageTemplate`, `IPhonePageTemplate`, `DevicePageTemplate` | Each family's services form a fixed ring (page i links i+1); `withCoverage()` appends the ring successor even when a page uses a **curated** `related` array, so the tail gets lifted without changing the 3-card layout. Model pages (which render via `SubServicePageTemplate`) donate a hash-rotated bonus link to a service. |
| **Conversion cross-links** | `conversionSiblings()` + `SellMacBookDubai` / `SellFaultyMacBookDubai` / `TradeInMacBookDubai` | The bespoke sell/trade trident (no shared template, so no auto "Related repairs") now cross-links via a "More ways we can help" block. `RelatedServices` gained an optional `heading` prop. |
| **Model coverage ring** | `src/lib/model-siblings.ts` (new) → `IMacModelPage` / `IpadModelPage` / `MacDesktopModelPage` / `AccessoryModelPage` / `MacBookModelPage` | `relatedModels()` replaces each template's per-sub-group `pickRelatedModels` with a single ring over the FULL family list (model i always includes model i+1), so sub-group singletons (lone iMac Pro 2017) and tail models are never orphaned. Drives the "Other <family> models we repair" grid, which is **separate from the service block** — so it lifts the model tail without touching service coverage. |

**Results (after, contextual graph):**
- Blog → money **0% → 8%**, → revenue **20% → 26%**. Conversion-page inbound: **AppleCare 2 → 65,
  out-of-warranty 5 → 52, AMC 3 → 30, sell-MacBook 3 → 9**; insurance/onsite/boot-camp 1 → 3.
- Guides: in-links/pg **2.3 → 6.3**, **→ hub 0% → 93%**, min in-links **1 → 4**.
- Service tail: iPhone min in-links **1 → 3** (thin pages 5 → 0); iMac/iPad thin collapsed.
- Model tail (model-coverage ring): iMac min in-links **1 → 3**, iPad **1 → 2**; legacy models
  (`imac-27-pro-2017`, `mac-pro-intel-2019`) lifted off 1 inbound — **services unaffected** (iPhone
  still min 3, no stealing). Overall ≤2-inbound pages (excl. editorial blog) ~40 → ~5.
- Integrity unchanged: `check:links` **0 broken**, `check:orphans` **0 orphans**, 0 unreachable from `/`.

**Note on approach:** routing model coverage through the *shared service* ring (`withCoverage`) was
tried first and measured net-negative — it diverted the bonus coverage model pages donate to services
(iPhone min 3 → 2). The shipped fix instead gives models their **own** ring inside the model
templates' "Other models" grid (`model-siblings.ts`), which is independent of the service block, so
neither tail steals from the other.

**Still thin (by design / low value):** `apple-service-center-dubai` (general, no family ring) and
`macbook-neo-repair-dubai` (a one-off MacBook page rendered bespoke, not via `MacBookModelPage`) sit
at 1 inbound; the niche `sell-faulty` / `apple-repair-programs` sit at 2. Lifting these further would
mean forcing low-relevance links — left as-is.
