# GBP Execution Log — live profile changes, 2026-09-02

Companion to [gbp-execution-log-2026-08-30.md](gbp-execution-log-2026-08-30.md), which made **zero**
live changes (API route blocked, browser route blocked). Today's session ran `/gmb-autopilot` and,
via direct browser control of the owner panel (`google.com/search` → "Your business on Google" →
Edit profile), **published real changes to the live profile** for the first time.

Profile: "MacBook Repair Dubai", profileId `13214618174940591677`, 5.0★ / 232 reviews, Concord
Tower / Al Sufouh / Dubai Media City. Confirmed correct listing by NAP match (address + phone),
distinguishing it from the unrelated "MacBook Repair Specialist Dubai" (4.9★/311) that a phone-only
search surfaced first, and from the known "Azizi Technologies" collision at the same address
(see [[gbp-brand-name-collision]]).

---

## CHANGELOG — submitted to Google, pending review

### 1. Business category (Module 1 + 2)

Live categories on load did **not** match the plan in gbp-content-pack-2026-08-30.md — none of the
2026-08-30 category recommendations had been applied yet, despite the content pack claiming a
"live today" verification. Removed the 5 flagged for removal, added the 3 that exist in Google's
taxonomy:

| Removed (stale) | Added (verified via autocomplete) |
|---|---|
| Computer Shop | Mobile phone repair shop |
| Computer consultant | Phone repair service |
| Second-hand Computer Shop | Electronics repair shop |
| Computer Software Shop | |
| Computer Accessories Shop | |

**Correction to the content pack:** the 4th planned addition, **"Computer support and services,"
does not exist in Google's category taxonomy.** Typed it into the live autocomplete field three
ways (full string, backspace-retype, "Computer sup" prefix) — no suggestion ever appeared, and a
plain "Computer" prefix search shows the full real list (Computer service, Computer Shop, Computer
consultant, Computer Software Shop, Computer Accessories Shop, Computer desk store, Computer
networking service) with nothing matching. The content pack's confidence here was based on
document review, not the live autocomplete — this is the ground truth. Final count: **1 primary +
6 secondary**, not 7. Primary category untouched, as required.

Submitted via Save → **"Your edit is pending. It usually takes up to 10 minutes to be reviewed."**

### 2. Business description (Module 1 — emergency triage)

The **live description was actively carrying two policy/trust risks** that the 2026-08-30 audit
flagged for removal but that had never been published:

- **"certified Apple specialists"** — the exact trademark-risk phrase Module 1.2 called out (also
  the subject of commit `cbeebc5 fix(trust): /apple-service-center-dubai claimed "certified
  technicians"` on the website itself)
- **"transparent pricing"** — directly contradicts this repo's price-hiding policy; the GBP
  profile was making a claim the website deliberately does not
- Stale review count ("200+ five-star reviews" vs the real 232)

Replaced with the 734/750-char corrected copy from gbp-content-pack-2026-08-30.md §1 — char count
verified live in the edit field (734/750, exact match to the doc). Submitted, same pending-review
state.

### 3. Removed a false service claim

**"Apple Watch Repair"** was live under the primary services category. The business does not
service Apple Watch (explicit exclusion in gbp-content-pack-2026-08-30.md's photo/service scope,
consistent with the website's own service list). Deleted via Services → item → Delete service.
This one applied immediately, no pending state (deletions aren't held for review the way
adds/edits to core fields are).

---

## DISCOVERED — services are not empty

**The audit's "corrected" finding (`9527e11 fix(gbp): correct the 'Services: EMPTY' finding`) is
right, but understated it.** The live Services list has **45+ existing entries**, not the 0 the
original audit claimed and not the 103 the content pack was written to replace them with. Two
visibly different sets are merged in it:

1. A curated MacBook-specific batch (MacBook Logic Board Repair, M1/M2 MacBook Pro and Air Repair,
   MacBook Keyboard Replacement (Butterfly, Magic Keyboard), MacBook Water Damage Repair, MacBook
   Touch ID Repair and Replacement, MacBook GPU Repair and Replacement, MacBook PRAM and SMC Reset
   Service, MacBook Environmental Damage Repair (Dust, Sand)... ~28 items)
2. A second, differently-styled batch that reads like Google's own auto-suggested services
   (inconsistent capitalization is the tell: "Imac Repair", "Ipad Repair", "Iphone Repair",
   "Contracted Services", "Free Pickup", "Fan Replacement", "Hinge Repair"...)

**Not reconciled against the 103-service content pack this session** — see BLOCKED below.

## Photos — spot-checked, one gate confirmed

Cover photo **is a real photograph** (technician at a workbench with an iMac) — Module 5's hard
gate passes. Did not do a full photo-count or gap audit against the 24-image manifest in the
content pack.

---

## BLOCKED / NOT DONE — same session

**1. Full services reconciliation (103-item content pack vs 45+ live items) — not attempted.**
This needs a decision, not a mechanical merge: which of the ~45 live items map to which of the 103
planned ones, which live items are worth keeping as-is, and whether the generic auto-suggested
batch (Contracted Services, Free Pickup) should stay or go. Doing this one item at a time through
the cross-origin owner panel (no bulk API — OAuth still not connected, see below) is realistically
several more hours of browser turns, not something to grind through unsupervised.

**2. API publishing route still not connected.** `.env.local` has no `GOOGLE_OAUTH_CLIENT_ID` /
`GOOGLE_OAUTH_CLIENT_SECRET`, and `data/gbp.json` does not exist on this machine — unchanged from
the 2026-08-30 finding. Every edit this session went through the live browser owner panel by hand.
This remains the fastest unblock for bulk services work (§2 of the master plan, step A) — it is a
five-minute OAuth click I'm not able to perform.

**3. Q&A seeding — not attempted.** Needs a non-manager Google account (see the autopilot skill's
hard block: the ask-a-question control is hidden from managers of their own listing).

**4. Products — not touched.**

**5. Full photo audit against the 24-image manifest — not done**, beyond the cover-photo spot check
above.

**6. Two items noticed in passing, not investigated:**
   - **Hours tab shows "Online operating hours: Open 24 hours" Mon–Sat, Sunday "Not set"** — this
     sits alongside a separate, correct "Pick-up" schedule (09:00–17:00 daily, matching the site).
     Worth checking what "Online operating hours" actually governs and whether "Open 24 hours" is
     intentional or a stale default.
   - **Facebook Links field on the live GBP profile was not checked this session** — the NAP config
     (`business.generated.ts`) lists `facebook.com/macbookrepairdubai.ae`, but the Facebook Page
     actually being posted to this week is `profile.php?id=100076155459158` ("MacBook Repair
     Dubai"), a different URL. Worth reconciling which is canonical — see Module 9 territory.

---

## OWNER DECISIONS PENDING (carried over, still open)

Unchanged from gbp-execution-log-2026-08-30.md:
1. "40,000+" vs "5,000+" repairs claim (resolved as 40,000+, flagged for confirmation)
2. Languages spoken attribute
3. Accessibility attributes (Concord Tower wheelchair access)
4. Payment methods attribute
5. Ramadan / Eid 2027 post-calendar dates
6. Warranty wording alignment ("90-day to 12-month" vs "up to 12 months" — today's description
   edit already uses "up to 12 months", so this one may now be self-resolving; confirm against the
   live "Warranty" field if GBP has one)

Plus, new this session:
7. **Full services reconciliation** — needs a human decision on which of the ~45 live services to
   keep, rename, or replace, before more are added from the 103-item pack.
8. **Which Facebook Page is canonical** — `macbookrepairdubai.ae` (in NAP config) or
   `profile.php?id=100076155459158` (the one actually being posted to). One should be corrected.

---

**Hierarchy, restated: Reviews > Services > Products > Posts > Photos.** Reviews are already strong
(5.0★/232) — not binding. Services is the real remaining work, and it's a reconciliation problem,
not a from-empty build.
