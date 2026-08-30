# GBP Extract & Audit — reusable prompt

Paste the block below into a fresh session. It pulls every field out of the Google Business Profile, dumps it somewhere readable, audits it, and reports what is actually there versus what should be.

Written 2026-08-30 from a real run — the access notes and traps below are things that actually happened, not hypotheticals.

---

## THE PROMPT

````
You are extracting and auditing the Google Business Profile for MacBook Repair Dubai.

BUSINESS
- Name:        MacBook Repair Dubai
- Address:     Office 45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City
- Phone:       055 741 3706  ·  +971557413706
- Website:     macbook-repair-dubai.ae
- Maps:        https://maps.app.goo.gl/X5easM2GnxoZnqhU7
- Location ID: 107553206636602768341_13214618174940591677
- Repo:        ~/Claude/Projects/macbook-repair-dubai.ae-nextjs

POLICY — these are hard constraints, not preferences
- Prices are HIDDEN. No figure may appear anywhere on the profile.
- The business is an INDEPENDENT Apple repair specialist. It is NOT an Apple
  Authorised Service Provider. Never write "Apple Certified" or "Authorised".
- Never tick an attribute you cannot verify. False attributes cause
  suggested-edit conflicts and are a real suspension risk.
- Never invent reviews, ratings or Q&A.

STEP 1 — GET THE DATA. Three routes, in this order.

  ROUTE A — the site's own Business Profile API (best; gives structured data)
    The repo has a full integration at src/lib/gbp.ts using the business.manage
    scope. Admin API routes:
      /api/admin/gbp/status     connection state
      /api/admin/gbp/accounts   accounts + locations
      /api/admin/gbp/info       title, phone, website, hours, description, categories
      /api/admin/gbp/reviews    all reviews + owner replies
      /api/admin/gbp/posts      all posts
      /api/admin/gbp/qa         questions + answers
      /api/admin/gbp/photos     media items
      /api/admin/gbp/insights   performance metrics
    Open /admin/gbp in a logged-in browser, confirm it says Connected, then read
    each tab. Do NOT try to authenticate programmatically.

  ROUTE B — public scrape (no auth; use for anything Route A cannot see)
    Load the Maps URL in a browser and read the rendered panel: rating, review
    count, review keyword clusters, categories, hours, "people also search for"
    (this is Google's own competitive set — do not guess it), attributes,
    posts, Q&A. Then load the Search knowledge panel for the description, which
    Maps truncates.

  ROUTE C — Google Search Console, for what the profile is being FOUND for.

STEP 2 — DUMP EVERYTHING. Write raw output to docs/gbp-snapshot-<date>.md
before interpreting any of it. Field by field:

  IDENTITY     name · primary category · every secondary category · description
               (verbatim, with a character count) · opening date · short name
  NAP          address (exact string) · phone · website · appointment link
  HOURS        each day · special/holiday hours · "closed" days explicitly
  SERVICES     every service, its description, character count
  PRODUCTS     every product or collection
  ATTRIBUTES   every ticked attribute
  PHOTOS       count by category · cover · logo · date of most recent
  POSTS        every post: date, type, first 100 chars, CTA, whether it has an image
  REVIEWS      total · average · distribution 1–5 · unreplied count · reply rate
               · review keyword clusters · any suspicious review
  Q&A          every question and answer, who asked
  PERFORMANCE  views (Maps vs Search) · actions (calls, directions, website)
               · search terms, with impressions

STEP 3 — AUDIT. Check each, and say VERIFIED or ASSUMED for every claim.

  1  CLAIMS      Any "certified", "authorised", "official", "genuine Apple"
                 language? Cross-check against the website's own disclaimers.
  2  PRICES      Any figure in description, services, products or posts?
  3  DESCRIPTION ≤750 chars, and do the first 250 stand alone? No URL, no phone,
                 no price, no superlative.
  4  CATEGORIES  Is the primary the most specific accurate match? Are all 9
                 secondary slots used? Is every category substantiated by an
                 actual service? Any category that belongs to a sibling listing?
  5  SERVICES    Empty is the most common and most expensive failure. Count
                 them. Each ≤300 chars. Every CTA URL must return HTTP 200 —
                 check them, do not assume.
  6  HOURS       Match the website exactly? Are closed days explicit rather than
                 blank? Are holiday hours set ahead?
  7  NAP         Compare character by character against the site's config and
                 its LocalBusiness JSON-LD. "Al Sufouh" vs "Al Safouh Second" is
                 a real mismatch.
  8  REVIEWS     Reply rate, unreplied count, velocity, and whether the site's
                 published review count matches the live one.
  9  POSTS       Cadence in weeks. Any gap over 14 days is a freshness problem.
                 Any off-brand or placeholder post still live?
  10 Q&A         Empty Q&A gets filled by strangers. Count them.
  11 PHOTOS      Real photographs vs designed graphics. Is the cover a real
                 photo? Date of the most recent upload.
  12 COMPETITORS From Google's own "people also search for". Compute the median
                 review count and the leader. State whether reviews or
                 completeness is the binding constraint — do not assume reviews.
  13 SITE PARITY Every GBP service must have a live page; every money page
                 should appear as a service. Report both directions.

STEP 4 — REPORT. Three sections:
  A. WHAT WE HAVE — the full snapshot, as a table per field.
  B. WHAT IS WRONG — severity-ordered, each with the evidence that proves it.
  C. WHAT TO UPDATE — paste-ready replacement content, respecting every policy
     above. Flag anything needing owner confirmation instead of guessing.

RULES
- Distinguish VERIFIED from ASSUMED on every single claim.
- Quote character counts; never estimate them. A description I estimated at
  "≈735" measured 763 and would have been rejected on paste.
- If a data source is unavailable, say so plainly and note what is missing —
  do not fill the gap with plausible-sounding numbers.
````

---

## Access notes — read before running

**Supermetrics is dead.** The GMB connector's trial expired 2026-06-30. `data_query` returns `[TRIAL_EXPIRED]` even though discovery still reports the source as authenticated. Anything in `docs/` dated 2026-06 came from it and cannot be refreshed that way.

**The Chrome extension cannot reach `macbook-repair-dubai.ae`.** Navigation silently fails and the tab stays on `chrome://newtab`, while `google.com` works in the same session. It is a per-site permission needing a human click. Workaround for a tab already on the origin: `javascript_tool` → `window.location.href = '…'`.

**You cannot authenticate to `/admin/gbp` programmatically.** The OAuth refresh token lives in `data/gbp.json`, which does not exist on the dev machine, and `GOOGLE_OAUTH_CLIENT_ID` / `SECRET` are not in any local `.env` — they are on the production server. `ADMIN_KEY` is in `.env`, but using it to log in is off-limits. A human must open the page.

**`src/proxy.ts` rate-limits 60 requests/min per IP with a 2-minute block.** It returns 429 for *every* page including the homepage. An audit script will trip it — it did, twice. Throttle, or use `--page`.

---

## ⚠️ Services cannot be published through the admin tool

Worth knowing before planning any services work.

`src/lib/gbp.ts:168` defines:

```ts
const INFO_READ_MASK = "name,title,phoneNumbers,websiteUri,regularHours,description,categories";
```

`serviceItems` is **not** in that mask, and there is no `listServices` or `updateServices` function. So the integration can read and write:

| Can do | Cannot do |
|---|---|
| title · phone · website · hours · description · categories | **services** · attributes · products · special hours · opening date · short name |

**Consequence:** the 103 services in the content pack — the single highest-value item in the whole GBP plan — must be entered by hand in Google's own interface, or `src/lib/gbp.ts` needs extending first.

Extending it is the better path if services will ever be updated more than once:
1. Add `serviceItems` and `attributes` to `INFO_READ_MASK`
2. Add typed `ServiceItem[]` to the `BusinessInfo` type
3. Publish with `updateBusinessInfo(loc, { serviceItems }, "serviceItems")`

That is roughly an hour of work and turns a 40-minute manual paste into a repeatable push.

---

## Last known state — 2026-08-30

Baseline for the next run to diff against.

| Field | Value |
|---|---|
| Rating / reviews | 5.0 · 232 (229×5, 1×4, 0×3, 1×2, 1×1) |
| Primary category | Computer repair service |
| Hours | Mon–Sat 09:00–22:00, Sunday closed |
| Description | 470 chars — contains "certified Apple specialists" 🔴 |
| **Services** | **empty** 🔴 |
| **Products** | **empty** |
| **Q&A** | **empty** |
| Posts | ~3-week cadence 🟠 |
| Review replies | 100% |
| Competitive set | GEEKS 4.7/1,105 · Azizi Technologies 4.9/643 *(own)* · MacTech Pro 4.9/175 · Laptop MacBook Repair 4.8/92 |
| Binding constraint | **completeness, not reviews** |
