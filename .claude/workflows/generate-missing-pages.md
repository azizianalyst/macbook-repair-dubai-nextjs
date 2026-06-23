# Agent prompt — generate missing pages (staged, brand-safe)

Paste this as the task for an agent (or promote to a Workflow). It generates the backlog pages in
[`docs/seo-recovery-internal-linking-and-gaps.md`](../../docs/seo-recovery-internal-linking-and-gaps.md)
**one small batch at a time**. Do NOT bulk-create — the site is mid SEO-recovery and a flood of new
URLs at once risks the reindex. After each batch: build, verify, deploy, `check:urls:live`, then stop
for sign-off before the next batch.

---

## Role & non-negotiables

You are extending an independent Apple/Mac repair site in Dubai (`macbook-repair-dubai.ae`,
Next.js 16 App Router). Before writing code, read `AGENTS.md` (this Next.js has breaking changes —
read `node_modules/next/dist/docs/` for anything unfamiliar).

Hard rules (violations are bugs):
1. **Independent, NOT "Apple Authorized".** Never write "Apple Authorized Service Center" or imply
   official Apple affiliation. We are independent Apple specialists, operating in Dubai since 2004.
2. **Facts must be true.** Pull NAP/phone/warranty from `@/content/site` (`NAP`, warranty helpers) —
   never hardcode a different phone, address or claim. Real device eras, chip years, AED currency.
3. **Pricing & board-level warranty are DEFERRED.** Prices and board-repair warranty terms are under
   reconciliation. For new pages: set provisional AED ranges consistent with the closest existing
   sibling page, and **flag every price + any board-level warranty wording for owner confirmation**
   (leave a `// TODO: confirm price/warranty` comment). Battery = 3-month and tech = Shafiq are
   already settled; don't relitigate those.
4. **Images:** don't invent or fabricate imagery. Let `topicForPath`/`imageForService` supply the
   existing infographic/photo fallback. If a new image is truly needed, follow the house style in
   `scripts/topic-images/` (blueprint 2×2) and the factual-accuracy rule (correct AED, chip years,
   device eras) — then inspect the output before using it.
5. **Additive only.** No URL changes to existing pages, no edits to the homepage title/H1/URLs, no
   new redirects. New routes only.

## Page anatomy (copy an existing sibling exactly)

For each new page create two files, mirroring a close existing page:

- **`src/app/<slug>/page.tsx`** — identical pattern to every page:
  ```tsx
  import type { Metadata } from "next";
  import { metaForPath } from "@/lib/page-meta";
  import { PageSchema } from "@/components/PageSchema";
  import View from "@/views/<ViewName>";
  export const metadata: Metadata = metaForPath("/<slug>");
  export default function Page() {
    return (<><PageSchema path="/<slug>" /><View /></>);
  }
  ```
- **`src/views/<ViewName>.tsx`** — `"use client"`, render the right template:
  - **Desktop-Mac service** (mini/studio/pro): `DevicePageTemplate family="mac"` — copy
    `src/views/IMacLogicBoardRepair.tsx` and adapt (pricingRows, intro, problems, steps, faqs).
  - **Simple sub-service**: `SubServicePageTemplate` — copy any `*Repair.tsx` sub-service view.
  - **Blog post**: `BlogPostTemplate` — copy an existing `src/views/Blog*.tsx`; include
    `quickAnswer`, `faqs`, byline, `datePublished`/`dateModified`.
  - **Guide**: add an entry (with a `bridge` to the relevant service) to `src/content/guides.ts`.

Do **not** hand-write a `related`/`relatedSlugs` array unless you want to override — the resolver
(`src/lib/related-services.ts`) auto-fills a family-correct "Related repairs" block, and
`linkify.tsx` auto-adds in-body links scoped to the page's family. That's the whole point of the
recent internal-linking upgrade; new pages inherit it for free.

## Per-page SEO requirements

- `seoTitle` ≤ ~60 chars of useful content (the meta layer trims), `seoDescription` ≤ ~155, both
  with the AED price + Dubai + phone where natural. Unique H1. Answer-first intro (AEO).
- Service pages get `Service` JSON-LD automatically via `PageSchema` (slug-matched) — no manual schema.
- 3–6 FAQs that match real "people also ask" intent (the FAQ accordion injects FAQPage schema).
- Link is automatic, but make sure the body prose naturally uses the fault keywords (e.g. "logic
  board", "data recovery", "thermal paste") so linkify has anchors to work with.

## Batch order (one batch, then stop for sign-off)

Follow `docs/seo-recovery-internal-linking-and-gaps.md` §4:
1. Desktop-Mac services (Mac mini / Studio / Pro) — biggest gap.
2. Device guides (iPhone/iPad/desktop) — mirror the MacBook guide set.
3. Blog topics (case studies, board-level, security/lock, Dubai-heat, desktop troubleshooting).
4. New Dubai area pages.

**Before creating any slug, check it isn't already a route** (`ls src/app/<slug>` or grep
`routes.generated.ts`) — some areas already exist (e.g. `production-city`, `the-greens`).

## After each batch (verify → deploy → confirm)

```
npm run gen:routes            # register new routes
node scripts/extract-meta.cjs # extract titles/descriptions + blog-index families/topics
npm run build                 # must pass (typecheck + static export)
# with the dev server running on :3006:
npm run check:links           # no broken internal links
npm run check:orphans         # every new page has an inbound link (resolver/linkify/nav)
```
Then deploy per `DEPLOY.md`, run `npm run check:urls:live`, and **stop** — report what was created
and wait for the owner to confirm prices/warranty and approve before the next batch.
