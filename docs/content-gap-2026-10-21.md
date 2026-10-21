# Content gaps vs competitors

**21 October 2026**

## How this was found
- **Sitemaps:** crawled live for 14 competitors (2,633 page addresses). After dropping other brands, Apple Watch/AirPods and shop or legal pages, 1,586 are Apple topics.
- **Our side:** compared with our 664 built pages (the full page text, not just the addresses), the keyword universe and Search Console (28 days).
- **Live Google:** 6 gap queries checked on 21 Oct.
- **Section-by-section:** mactechpro.ae's water-damage and battery pages compared with ours.

Raw data: `scratchpad` crawl (not committed). Competitor list:
- mactechpro.ae
- fixermanme.com
- fixsquad.ae
- scorpionfix.com
- celmetro.com
- mycelcare.com
- techmanme.com
- geeks.ae
- macrepair.ae
- irepairs.ae
- prabhatmaccare.com
- macbookrepairdubai.net
- techfix.ae
- macbookrepairsdubai.ae (its sitemap was empty)

## Main finding

We already have **more topics than any competitor**, and our main service pages are as deep as theirs or deeper (our water damage page has about 2,400 words and 27 sections; mactechpro's has 1,860 and 21). Most of what competitors have and we lack are **model-by-service matrix pages**, such as "iPhone 11 Pro Max camera replacement" repeated for every model. Our rules forbid that pattern, and those pages are thin.

The real gaps are smaller and sharper: **wording we don't use, model numbers we don't list, and a few genuine questions no page of ours answers.**

## Live Google checks (21 Oct, Dubai)

| Search | Us | Who's #1 | What it tells us |
|---|---|---|---|
| macbook liquid damage repair dubai | homepage #2; **our water-damage page not in the top 10** | mactechpro.ae (dedicated page) | Our owner page doesn't use "liquid damage" wording |
| macbook backlight repair dubai | homepage #2 | mactechpro.ae homepage | No clear owner page for backlight failures |
| macbook speaker crackling no sound repair dubai | /macbook-speaker-repair-dubai/ #4 | **azizitechnologies.ae** (our sister site, same page) | Decision D3: the two sites compete |
| is it worth repairing an old macbook | not in the top 10 | reddit; macbook-repair-dubai.**com** #2, mactechpro.ae #3 | No MacBook repair-or-replace guide |
| macbook ssd not detected repair dubai | **#1** (/ssd-data-recovery-dubai/) | us | Covered |
| macbook won't wake from sleep repair dubai | **#1** (/macbook-not-turning-on-dubai/) | us | Covered |

## The gaps, in priority order

### A. Fix existing pages (fast; no new URLs)

1. **Water damage page: add the "liquid damage" and "spill" wording** (`/macbook-water-damage-repair-dubai/`).
   - Five competitors use "liquid damage" in their URLs and headings. We use "water damage" everywhere, and our page doesn't rank for the liquid wording.
   - Add "liquid damage" and "coffee/juice spill" naturally to the H2s and FAQs.
   - Add a "models we repair for liquid damage" section by family (Air, Pro Intel, Pro Apple silicon), as mactechpro has.
   - Only mention ultrasonic cleaning or a microscope if the fact sheet confirms we use them (it doesn't yet).
2. **Battery page: a "find your model" table with A-numbers** (`/macbook-battery-replacement-dubai/`), and the same on `/macbook-screen-repair-dubai/` (protected: additive only).
   - The keyword universe has 90 model-number searches (e.g. "macbook air a1466" 170/mo, "macbook pro a1278" 110, "a1398" 110, "a3401" 110), about **2,490 searches a month** in total. Search Console shows **0** impressions for any of them.
   - mactechpro lists 33 A-numbers on its battery page and has a page per model.
   - We add one table (model, year, A-number, notes, link to our model page) using Apple's published model identifiers. **No page per A-number.**
3. **Backlight failures: give them one owner page.** "Screen dark but the image is faintly visible / no backlight" is a different repair from a cracked screen. Add a section to `/macbook-flexgate-repair-dubai/` (covers backlight and the display cable) or the screen page, and record the owner in `docs/keyword-page-map.csv`.
4. **Overheating page:** add "thermal paste replacement" and "still hot after cleaning" sections (`/macbook-overheating-fix-dubai/`). No page of ours covers either; mactechpro and macrepair do.
5. **Genuine vs alternative parts post:** add an "OEM vs aftermarket screens" section for MacBook and iPhone (`/blog/genuine-parts-vs-quality-alternative-explained`). mactechpro and fixsquad have dedicated pages.
6. **Battery health guide:** add "cycle count explained" and "how long a MacBook battery lasts in Dubai heat" (`/blog/macbook-battery-health-check-guide`). mactechpro has two pages on these; we have no section.

### B. New pages (each a distinct search intent with new information)

7. **"Which MacBook do I have? Find your model number (A-number)":** an identification guide. Where to read the A-number, a table of A-number to model and year, then links to the repair pages. Facts from Apple's identification pages. It supports gap 2 and earns the model-number searches without doorway pages.
8. **"Repair or replace your MacBook? How we advise customers":** a decision guide from the bench (age, macOS support, repair cost vs value, data). We have this for iPhone and Mac mini, not MacBook; two competitors rank with it.
9. **Real repair case studies (hub plus one per job):** built from the video and photo pipeline (team brief). Only real jobs, no customer data. mactechpro has a case-studies page; it's strong first-hand evidence for Google.

### C. Not worth copying

- **One page per A-number** (mactechpro has about 60): this is the swap-the-model pattern. Use the table (gaps 2 and 7) instead.
- **iPhone/iPad model × service matrices** (techfix, celmetro, macrepair): thin.
- **"M1 RAM upgrade" pages:** memory on Apple silicon Macs is soldered to the chip, so we can't honestly offer this.
- **Activation lock / firmware lock removal, "iCloud locked MacBook":** legal and ethical risk; not a service for us.
- **"Repair at home / free pickup" pages:** we stopped free pickup on 15 Oct (onsite visits are paid).

### D. Truth flags found during the crawl

- Our live battery page says **"Get your battery quote in 4 minutes"**. This is one of the unproven claims waiting on decision **D6**.
- The fact sheet doesn't mention a **microscope** or **ultrasonic cleaner**. Confirm before any page or video claims them (team brief video 6 assumes a microscope).

## Expected effect

- **Gaps 1–6:** improve pages that already have authority, so changes can show within weeks of deploy.
- **Gap 2 + 7:** opens about 2,490 searches a month we currently get nothing from.
- **Gap 8:** a decision-stage search where only out-of-country and lookalike sites rank.
- **Gap 9:** adds the first-hand evidence the competitor pages lack.

None of this moves the map pack on its own; the reviews and Business Profile work in the outrank plan still lead.
