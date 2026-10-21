# Expanded competitor gap: 12 competitors vs macbook-repair-dubai.ae

**2026-09-26. Source:** Semrush UAE organic positions, the top ≤500 keywords for each of these domains:
- fixsquad.ae
- fixermanme.com
- macrepair.ae
- geeks.ae
- mycelcare.com
- mactechpro.ae
- techmanme.com
- celmetro.com
- techfix.ae
- 800fixing.com
- scorpionfix.com
- azizitechnologies.ae (the sister site)

**Data files:**
- `semrush-positions-ae-2026-09-25.tsv`
- `semrush-positions-competitors2-ae-2026-09-26.tsv`
- Output: `competitor-gap-expanded-2026-09-26.csv`
- Script: `scripts/gap_expanded.py`

**How a keyword counts as a gap:**
- At least one competitor ranks for it in the top 20 or in the Local Pack.
- We are not in the top 10 or the Local Pack.
- It is a repair, service or problem query.
- Queries about other brands (Samsung, HP, consoles and so on) are removed.

## Results

| | Keywords | Searches/mo |
|---|---:|---:|
| All gap keywords | 293 | — |
| Apple-device gaps | 137 | — |
| **Apple-device gaps with low KD (≤29 or unmeasured)** | **128** | **18,280** |
| Generic device (laptop, computer, phone) | 144 | — |
| Services we don't offer in-house (Watch, AirPods) | 12 | — |

**The pattern:** almost every easy gap is **iPhone or iPad**. Three to eight general repair shops each rank on page 1 with thin service pages, while we sit at #11–#32 or don't rank at all. These are the biggest:

| Keyword | Vol | KD | Competitors top 20 | Us |
|---|---:|---:|---:|---:|
| iphone repair dubai | 2,400 | 10 | 7 (fixsquad #2, geeks #3, fixermanme #5) | 32 |
| iphone repair near me | 1,000 | 15 | 6 | 22 |
| iphone screen repair | 1,000 | 7 | 3 | — |
| apple service center dubai | 1,000 | 19 | 4 | 21 |
| iphone repair | 880 | 12 | 7 | 22 |
| apple service center near me | 720 | 20 | 3 | 16 |
| iphone 6 plus screen replacement | 480 | 19 | 3 | — |
| iphone repair abu dhabi | 390 | 10 | 2 | — |
| iphone 6 screen replacement | 390 | 17 | 3 | — |
| ipad battery replacement dubai | 320 | 13 | 6 | 18 |
| iphone service center near me | 320 | 17 | 4 | 15 |
| iphone screen repair dubai | 260 | 9 | 6 | 12 |
| iphone service center dubai | 260 | 13 | 5 | 13 |
| replace iphone battery dubai | 210 | 10 | 6 | 18 |
| iphone battery replacement (in) dubai | 210 + 210 | 15–16 | 5–6 | 19 / — |
| iphone screen replacement dubai | 170 | 16 | 7 | 11 |
| ipad screen repair dubai | 170 | 16 | 6 | 19 |
| iphone display | 140 | 19 | 5 | — |
| iphone screen repair near me / iphone fix dubai / iphone repair sharjah | 110 each | 10–15 | 5–6 | — / 23 / — |

**What it means for the plan:** the iPhone hub and battery page rebuilds are done and awaiting review. These pages are still not started:
- `/iphone-screen-repair-dubai/` and `/iphone-screen-repair-cost-dubai/`
- the "by model" sections for old iPhones
- `/iphone-back-glass-repair-dubai/`

Together they cover about 4,000 searches/month of KD 7–19 demand, so they are the next build. After that comes the iPad trio, which is already rebuilt and awaiting fixes.

## Sister site: azizitechnologies.ae

- **41 keywords** where both sites rank. They compete with each other, and Google usually shows only one.
- **72 keywords** where azizitechnologies.ae ranks in the top 20 and this site doesn't rank. They are mostly trade-in, sell and general computer repair:

| Keyword | Searches/mo | azizitechnologies.ae position |
|---|---:|---:|
| apple trade in | 1,900 | #5 |
| apple trade in uae | 720 | #8 |
| sell iphone | 480 | #6 |
| sell iphone dubai | 320 | #5 |
| sell my iphone | 260 | #6 |
| computer repair (shop near me) | 590 / 880 | #8 / #12 |

- **Decision D2** (an iPhone trade-in page on this site) is effectively answered: the sister site already ranks for it. Building it here would split the ranking. Keep trade-in and sell on azizitechnologies.ae unless decision D3 (consolidate the two sites) says otherwise.

## Arabic

From `semrush-kmt-arabic-ae-2026-09-26.tsv` (171 keywords): Arabic repair demand is small.
- The largest term is "تصليح لابتوب" (laptop repair), 320/mo, KD 15.
- Arabic iPhone-repair variants are ≤30/mo each.
- The Arabic Mac terms are shopping searches ("ماك بوك برو", 260/mo).

Arabic pages are a low priority until the English iPhone and iPad gaps are closed.
