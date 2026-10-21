# Link monitor (j08), second run — 2026-10-09 evening

**New data source: Google Search Console → Links** (read in the owner's Chrome). Semrush is still "Access Denied" on hindseo. Saved: automation/data/gsc-links-2026-10-09.tsv.

## Backlinks (GSC)
| | |
|---|---|
| External links | 129 |
| Linking sites listed | 26 |
| Links to the homepage | 52 (18 linking pages) |
| Links to http://www.macbook-repair-dubai.ae/ | 52 (18 linking pages) |
| Links to /imac-repair-dubai/ | 14 (from 1 page) |

GSC gives counts only, with no history, so "new and lost since last Friday" starts from this baseline.

## Urgent: the www host is broken for visitors
- `http://www.macbook-repair-dubai.ae/` serves a **"Parked Domain name on Hostinger DNS system"** page (200, served through Cloudflare).
- `https://www.macbook-repair-dubai.ae/` returns **525**.
- GSC counts 52 external links to the www address. Anyone following them lands on a parking page or an error, and the links pass nothing to the real site.
- Fix (owner, Cloudflare): a Redirect Rule `www.macbook-repair-dubai.ae/*` → `https://macbook-repair-dubai.ae/${1}` with 301. Task t02 raised to urgent.

## Link targets
All 11 non-www pages with external links return 200 on the current build. Nothing needs a 301.

## Link quality
- clubamericafansclub.com (42 links from 3 pages) and github.com (40 links from 2 pages) supply 64% of all external links. A fan-club site has no topical reason to link to a Dubai repair shop. Google says it ignores most spammy links on its own; no disavow unless a manual action appears in Search Console. Owner: say if either came from a paid or swapped link deal; the rules forbid both.
- Other low-value sources: getmonero.org, ai-hay.vn, ixbt.com, prosperopatches.com, imgur, slideserve (profile or upload links).
- Useful local sources already linking: bestthings.ae, bizmideast.com, dxblocal.ae, mistdirectory.ae, magicpin.com.

## Unlinked mentions
Searched this morning (no mentions without a link); not repeated within the same day.

## Directories
No change since this morning: 0 submitted this month (aim 10). 3 new listing drafts: automation/drafts/2026-10-09-directories-b.md (Yellow Pages UAE, Connect.ae, Cylex UAE). The morning's 3 outreach drafts are still unsent.
