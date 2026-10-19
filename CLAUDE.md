@AGENTS.md

# SEO Growth OS: standing rules (macbook-repair-dubai.ae)

Every session follows these rules. The rules win over any plan, prompt or skill.
- Facts: `docs/business-fact-sheet.md`
- Plan: `docs/seo-master-plan-2026-09-26.md`
- Keyword data: `docs/keywords/`
- Keyword-to-page map: `docs/keyword-page-map.csv`
- The owner's decisions: the **SEO War Room** artifact. Read it before building anything; build only clusters marked **Target**.

## Business in one line
MacBook Repair Dubai is an **independent** Apple repair workshop (never "Apple Authorised/Certified").
- Address: Office #45, 10th Floor, Concord Tower, Dubai Media City
- Phone/WhatsApp: 055 741 3706
- Hours: Mon–Thu & Sat 9am–7pm, Fri 9am–12pm and 2pm–7pm, Sun closed (GBP, 2026-10-15)
- Founded: 2004
- Founder: Abdul Aziz (the one and only founder)

Repairs Mac, iPhone and iPad. No Apple Watch or AirPods service.
Prices (owner decision D17, 2026-10-19): the only AED repair prices on the site are the approved invoice ranges in `src/content/repair-prices.json` (from the POS, see `docs/prices-from-pos-2026-10-19.md`), shown as "AED X–Y typical, incl. 5% VAT" per repair and Apple model number (or model family where one model has too few invoices), never one exact quote, never in titles or meta. Every other repair is quoted on WhatsApp. Never type a price into a page: render it from that file, and add Offer schema only where the range is visible.
No free pickup or delivery (ended 2026-10-15). Customers walk in, send it with a courier they book (from other emirates we courier it back), or book a paid onsite visit when a technician is free.

## Content
- Write as the technician who does the work: first-hand bench detail, Dubai context (heat, sand, humidity, the Media City location), specific facts, plain sentences.
- Banned phrases: delve, unlock (except iPhone unlock services), elevate, seamless, robust, game-changer, "in today's fast-paced world", "it's worth noting", "in conclusion". No filler intros, no stacked adjectives, no identical openers across pages.
- Every page carries a named author from `TEAM` in `src/content/site.ts` and a visible date. Label content "reviewed by" a person only after that person has actually reviewed it.
- No mass or thin content. Never generate pages by swapping city, model or service names. A new page needs a distinct search intent and genuinely new information; otherwise improve the existing page.
- Truth rules:
  - Facts come only from the fact sheet (VERIFIED).
  - No "best", "No.1", "leading" or "guaranteed" unless provable.
  - Never invent numbers, reviews, case studies, certifications, response times, prices or partnerships.
  - Review count and rating come from `data/seo.json` only.
  - Tenure is always derived (`NAP.yearsInBusiness`), never typed.

## Google guidelines
- Pages are people-first and meet E-E-A-T.
- Never use doorway pages, keyword stuffing, hidden text, cloaking, scaled content, site-reputation abuse or expired-domain abuse.
- Never buy, sell or swap links, and never use PBNs. Earn links on merit.
- Structured data describes only content that is visible on the page. FAQPage JSON-LD must match the visible FAQ.
- Titles and H1s describe the page honestly.

## No cannibalisation
- One primary keyword per page and one page per intent. Record every assignment in `docs/keyword-page-map.csv`.
- Before creating or retitling a page, check the map, Search Console and Semrush/Ahrefs positions for a page that already ranks.
- When two pages compete, merge them into the stronger one with a 301 and repoint every internal link.
- An internal anchor for a keyword links only to that keyword's owner page.

## Page standard
- Title: 60 characters or fewer, leading with the primary keyword. Don't change the homepage `<title>` (it ranks #1–2 for the head term).
- Meta description: 140–155 characters, ending with a call to action.
- H1: contains the keyword, worded differently from the title.
- Under the H1, a 40–60-word answer-first block.
- H2s phrased as questions people actually search.
- 8–10 genuine FAQs.
- A visible date and a named author.
- At least 10 relevant internal links pointing in, with descriptive anchors.
- WhatsApp as the primary call to action.
- No layout shift; accessible.

## Safety
- **Protected pages** (the pages with the most clicks in Search Console) take additive changes only. Never remove their sections or links. Until GSC is connected, the protected set is:
  - `/`
  - `/iphone-screen-repair-cost-dubai/`
  - `/macbook-screen-repair-dubai/`
  - the M4-heat blog post
  - `/sell-macbook-dubai/`
- Never delete a page that has backlinks or clicks unless you add a 301. Never change a URL without a redirect.
- **Deploy only when the owner says "deploy"** (then follow DEPLOY.md). After each deploy, check the live content, not just HTTP status. Crawl the live site at most once every 2 seconds.
- Don't weaken a gate to make it pass. Fix the page.

## Quality gates (all must pass before a commit that touches pages)
```bash
npx tsc --noEmit
npm run build
npm run check:gates      # images, schema validity, redirect chains, tenure, alt text
npm run check:seo        # banned claims, one H1, title/meta length, FAQ schema = visible FAQ
npm run start -- -p 3006 &   # check:internal crawls this local prod build; it never falls back to live
npm run check:internal   # broken internal links + orphans
```
Also run Lighthouse on a local production build for changed templates. SEO, accessibility and best-practices must each score 100, with no console errors.

## Workflow
1. Data: Ahrefs first (once it's authorised), then Semrush (`sm.hindseo.com` proxy), then GSC. Record a dated snapshot in the War Room.
2. Plan by cluster in the War Room. The owner marks each cluster Target, Later or Skip.
3. For each page: SERP analysis → expert draft → independent supervisor review (facts, truth rules, cannibalisation, code) → chief-editor check across pages. One commit per page.
4. End every build with a table: page | preview | live | status | new title.
