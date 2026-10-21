#!/usr/bin/env python3
"""Render docs/keywords/low-competition-content-bank.md from content-topics-2026-09.csv."""
import csv, re
from collections import defaultdict

KW = "/Users/azizi/Claude/Projects/macbook-repair-dubai.ae/docs/keywords"
topics = list(csv.DictReader(open(f"{KW}/content-topics-2026-09.csv", encoding="utf-8")))
bank = list(csv.DictReader(open(f"{KW}/keyword-bank-2026-09.csv", encoding="utf-8")))

LOW = {"very-easy", "easy", "not-measured"}
def slugify(s):
    s = re.sub(r"\b(in )?(dubai|uae)\b|\bnear me\b", " ", s.lower())
    return "-".join(re.findall(r"[a-z0-9]+", s))

def where(t):
    st, page, typ = t["status"], t["target_page"], t["page_type"]
    if st in ("winning", "striking", "weak") and page:
        return f"Optimise `{page}`"
    if st == "not-ranking" and page:
        return f"Strengthen `{page}` (page exists, not ranking)"
    base = slugify(t["primary_keyword"])
    if typ.startswith("service") or typ.startswith("sell"):
        return f"NEW page `/{base}-dubai/`"
    return f"NEW post `/blog/{base}/`"

ACTION_ORDER = {"striking": 0, "weak": 1, "not-ranking": 2, "gap": 3, "winning": 4}
DEV_NAMES = [("macbook", "MacBook"), ("mac-desktop", "iMac, Mac mini, Mac Studio, displays"), ("iphone", "iPhone"),
             ("ipad", "iPad"), ("data-recovery", "Data recovery"), ("apple-general", "Apple brand and service-centre searches"),
             ("laptop", "Laptop (generic, MacBook angle)")]

sel = [t for t in topics if t["page_type"] != "blog post (awareness)" and t["competition"] in LOW and int(t["total_volume"]) >= 20]
by_dev = defaultdict(list)
for t in sel:
    by_dev[t["device"]].append(t)

out = []
out.append("# Low-competition content bank — macbook-repair-dubai.ae")
out.append("")
out.append("**Built 2026-09-26 from Semrush (UAE database).** 35 seed searches produced 8,421 usable keywords. After removing noise, 6,184 are relevant to the business. This file lists every topic that has search volume and **low competition**: Semrush KD 0–29, or long-tail terms Semrush has not scored yet, which are almost always easy for local repair searches.")
out.append("")
out.append("**How to use it:**")
out.append("- One topic is one URL. Every keyword under a topic belongs on that one page, as H2s, FAQs and body copy. Never build a second page for the same topic, because that is what causes cannibalisation.")
out.append("- **Optimise / Strengthen** means the page already exists; improve it rather than creating a new one.")
out.append("- **NEW** means no page targets the topic yet; the suggested slug follows the site's `keyword = slug` rule.")
out.append("- **Pos** is our current Google position for the topic's main keyword (Semrush, 25 Sep 2026), where we have one.")
out.append("- Before writing, follow the rules in `TRUST-CLAIMS.md` and `automation/AUTOPILOT.md`:")
out.append("  - no AED prices (quotes go through WhatsApp)")
out.append("  - never \"Apple Authorised\"")
out.append("  - warranty tiers from `site.ts`")
out.append("  - 40–60-word answer block")
out.append("  - 4–6 FAQs")
out.append("  - at least 3 inbound links")
out.append("  - WhatsApp as the main CTA")
out.append("")
out.append("Machine-readable versions:")
out.append("- `content-topics-2026-09.csv` (all 597 topics)")
out.append("- `keyword-bank-2026-09.csv` (all 6,184 keywords, with KD, intent, status and best page)")
out.append("- `competitor-gap-2026-09.csv`")
out.append("- the raw Semrush exports alongside them")
out.append("")
tot_kw = sum(int(t["keywords"]) for t in sel)
tot_vol = sum(int(t["total_volume"]) for t in sel)
out.append(f"**In this bank:** {len(sel)} topics · {tot_kw:,} keywords · {tot_vol:,} searches/month combined.")
out.append("")

def table(rows):
    out.append("| Priority | Main keyword | Type | Searches/mo | KD | Pos | Do this | Keywords to cover on the page |")
    out.append("|---:|---|---|---:|---|---:|---|---|")
    for t in rows:
        kd = f'{t["min_kd"]}–{t["max_kd"]}' if t["min_kd"] else "n/m"
        kws = t["all_keywords"].split(" | ")
        more = f" … +{int(t['keywords']) - len(kws)} more" if int(t["keywords"]) > len(kws) else ""
        kw_str = "; ".join(kws[:12]) + (f"; … ({int(t['keywords'])} total)" if int(t["keywords"]) > 12 else "") + more
        out.append(f'| {float(t["priority"]):.0f} | **{t["primary_keyword"]}** | {t["page_type"]} | {int(t["total_volume"]):,} | {kd} | {t["primary_position"] or t["best_position"] or "—"} | {where(t)} | {kw_str.replace("|", "/")} |')
    out.append("")

for dev, name in DEV_NAMES:
    rows = sorted(by_dev.get(dev, []), key=lambda t: -float(t["priority"]))
    if not rows:
        continue
    vol = sum(int(t["total_volume"]) for t in rows)
    out.append(f"## {name} — {len(rows)} topics, {vol:,} searches/month")
    out.append("")
    table(rows)

# latest models
out.append("## Latest Apple models — why there is almost no repair volume yet")
out.append("")
lat = [b for b in bank if b["latest_model"] == "yes"]
out.append(f"Semrush UAE has {len(lat)} keywords naming the newest models (iPhone 17/18, iPhone Air, 17e, MacBook Neo, M5/M6 Macs, iPad Pro M5, iPad Air M4). **None of them have measurable repair volume yet.** They are all shopping searches, such as \"iphone 17 pro max\" (135,000/mo), \"iphone 18 pro max\" (9,900/mo) and \"macbook neo\" (2,900/mo).")
out.append("")
out.append("Repair demand for a model usually shows up after launch, starting with accidents (screens and back glass) and later batteries. So the plan is to have each model's pages ready before the searches arrive, and to watch Search Console, which reports new queries before Semrush does. The model pages and target keywords are in the master plan (`docs/seo-master-plan-2026-09-26.md`, section 5).")
out.append("")
out.append("| Shopping keyword (context only) | Searches/mo | KD |")
out.append("|---|---:|---:|")
for b in sorted(lat, key=lambda b: -int(b["volume"]))[:25]:
    out.append(f'| {b["keyword"]} | {int(b["volume"]):,} | {b["kd"] or "n/m"} |')
out.append("")

# owner decision keywords
out.append("## Demand that needs an owner decision before any page is built")
out.append("")
wa = [b for b in bank if b["device"] in ("apple-watch", "airpods")]
out.append(f"- **Apple Watch and AirPods:** {len(wa)} keywords, {sum(int(b['volume']) for b in wa):,} searches/month. On 2026-09-01 the owner confirmed there is no in-house service, so no pages will be built. If that changes, the keyword list is in `keyword-bank-2026-09.csv` (filter `device`).")
st = [t for t in topics if t["page_type"].startswith("sell")]
out.append(f"- **Sell and trade-in:** {len(st)} topics, {sum(int(t['total_volume']) for t in st):,} searches/month, including \"apple trade in\", \"iphone trade in\", \"used imac\" and \"second hand macbook pro\". The site only buys MacBooks today, so iPhone buy-back needs the owner's go-ahead.")
lap = [t for t in topics if t["device"] == "laptop"]
out.append(f"- **Generic laptop repair:** {len(lap)} topics, {sum(int(t['total_volume']) for t in lap):,} searches/month, e.g. \"laptop repair dubai\" 1,000/mo. The positioning is Mac-only; a MacBook-angle page is possible but needs a decision.")
out.append("")
open(f"{KW}/low-competition-content-bank.md", "w", encoding="utf-8").write("\n".join(out) + "\n")
print(len(sel), "topics", tot_kw, "keywords", tot_vol, "volume;", len("\n".join(out)), "chars")
