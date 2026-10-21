#!/usr/bin/env python3
"""Expanded competitor gap: 12 competitors vs macbook-repair-dubai.ae (Semrush UAE, Sep 2026)."""
import csv, re, collections, json
KW = "docs/keywords"
def num(v):
    v = (v or "").replace(",", "").strip()
    m = re.match(r"^([\d.]+)\s*([KkMm]?)$", v)
    if not m: return None
    return int(round(float(m.group(1)) * {"k": 1e3, "m": 1e6}.get(m.group(2).lower(), 1)))
rows = []
for f, enc in [(f"{KW}/semrush-positions-ae-2026-09-25.tsv", "mac_roman"), (f"{KW}/semrush-positions-competitors2-ae-2026-09-26.tsv", "utf-8")]:
    for r in csv.DictReader(open(f, encoding=enc), delimiter="\t"):
        rows.append(r)
ours = collections.defaultdict(list); comp = collections.defaultdict(dict); meta = {}
for r in rows:
    kw = r["keyword"].strip().lower(); pos = r["position"]
    lp = pos.lower().startswith("local"); p = 0 if lp else (num(pos) or 0)
    meta.setdefault(kw, (num(r["volume"]) or 0, num(r["kd"]), r["intent"]))
    if r["domain"] == "macbook-repair-dubai.ae": ours[kw].append((p, lp, r["url"]))
    else:
        cur = comp[kw].get(r["domain"])
        if cur is None or (p and (cur[0] == 0 or p < cur[0])): comp[kw][r["domain"]] = (p, lp, r["url"])
NOISE = re.compile(r"samsung|huawei|xiaomi|oppo|oneplus|vivo|realme|nokia|hp |hp$|dell|lenovo|asus|acer|msi|toshiba|sony|playstation|ps4|ps5|xbox|nintendo|scooter|drone|printer|camera repair(?!.*iphone)|tv repair|washing|fridge|ac repair|gopro|dyson|jbl|bose|canon|nikon|garmin|fitbit|huawei|google pixel|pixel|motorola|lg |job|salary|course|forex|trading|price in india|pakistan")
DEV = re.compile(r"mac|imac|iphone|ipad|apple|airpod|watch|laptop|computer|pc\b|data recovery|screen|battery|phone|mobile|repair|fix|تصليح|صيانة|ايفون|ماك|لابتوب")
REPAIR = re.compile(r"repair|replac|fix|service|center|centre|shop|near me|broken|crack|not (working|charging|turning)|won.?t|battery|screen|display|water|data recovery|unlock|upgrade|logic board|motherboard|charging port|back glass|تصليح|صيانة")
BLOCK_DEVICE = re.compile(r"apple watch|iwatch|airpod|smart ?watch|watch repair|watch battery|watch strap|watch shop")
out = []
for kw, doms in comp.items():
    if NOISE.search(kw) or not DEV.search(kw) or not REPAIR.search(kw): continue
    top = {d: v for d, v in doms.items() if v[1] or (v[0] and v[0] <= 20)}
    if not top: continue
    our = ours.get(kw, [])
    best = min([p for p, lp, u in our if p] or [0]); our_lp = any(lp for p, lp, u in our)
    if our_lp or (best and best <= 10): continue
    vol, kd, intent = meta.get(kw, (0, None, ""))
    generic = not re.search(r"mac|imac|iphone|ipad|apple|ماك|ايفون", kw)
    blocked = bool(BLOCK_DEVICE.search(kw))
    fit = "no-service" if blocked else ("generic-device" if generic else "apple")
    kdv = kd if kd is not None else 20
    score = round(vol * len(top) / (kdv + 10), 1) if fit == "apple" else 0
    out.append(dict(keyword=kw, volume=vol, kd=kd if kd is not None else "", intent=intent, fit=fit,
                    competitors_top20=len(top), our_position=best or "", our_url=(our[0][2] if our else ""),
                    competitors="; ".join(f"{d} {'LP' if v[1] else v[0]}" for d, v in sorted(top.items(), key=lambda x: x[1][0] or 0)),
                    competitor_urls="; ".join(f"{d}{v[2]}" for d, v in list(top.items())[:3]), score=score))
out.sort(key=lambda r: (-r["score"], -r["volume"]))
with open(f"{KW}/competitor-gap-expanded-2026-09-26.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0].keys())); w.writeheader(); w.writerows(out)
apple = [r for r in out if r["fit"] == "apple"]
easy = [r for r in apple if r["kd"] == "" or int(r["kd"]) <= 29]
# sister-site overlap
az = {k: v for k, v in comp.items() if "azizitechnologies.ae" in v}
both = [k for k in az if k in ours]
az_only = [k for k in az if k not in ours and az[k]["azizitechnologies.ae"][0] and az[k]["azizitechnologies.ae"][0] <= 20]
print(json.dumps(dict(gap_total=len(out), apple_fit=len(apple), apple_easy=len(easy), apple_easy_volume=sum(r["volume"] for r in easy),
                      generic_device=len([r for r in out if r["fit"] == "generic-device"]), no_service=len([r for r in out if r["fit"] == "no-service"]),
                      sister_both_rank=len(both), sister_only_top20=len(az_only)), indent=1))
print("\nTOP 40 EASY APPLE GAPS")
for r in easy[:40]:
    print(f'{r["volume"]:>5} kd {str(r["kd"]):>3} n{r["competitors_top20"]} us {str(r["our_position"]):>3} | {r["keyword"][:48]:<48} | {r["competitors"][:70]}')
print("\nSISTER SITE azizitechnologies.ae — ranks top 20, MBR not ranking (top 15 by volume):")
for k in sorted(az_only, key=lambda k: -(meta.get(k,(0,))[0]))[:15]:
    print(f'{meta[k][0]:>5} {k[:50]:<50} pos {az[k]["azizitechnologies.ae"][0]} {az[k]["azizitechnologies.ae"][2]}')
