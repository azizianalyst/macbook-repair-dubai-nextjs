"""Writes src/content/repair-prices.json: owner-approved invoice price ranges (decision D17, 2026-10-19).

Rows are per Apple model number (A-number) where that model alone has 5+ taxed invoices; the other
models of a family get one combined row only if THEY have 5+ invoices; otherwise they are quoted on
WhatsApp. Each row = middle half (p25-p75) of taxed, VAT-inclusive invoices, whole AED.
No customer data is read here: input is the de-identified lines file from extract.py.
Usage: python3 -I scripts/pos/publish.py <lines.json> src/content/repair-prices.json
"""
import json, re, sys, statistics as st, os
sys.path.insert(0, os.path.dirname(__file__))
from classify import load_keep

MIN_N = 5
SCREEN, BATTERY = "Screen replacement", "Battery replacement"
# Apple's names, as on "About This Mac" / support.apple.com/en-ae/102869 and /108052.
MODELS = [  # (id, repair, A-number, Apple model name)
 ("screen-a2337", SCREEN, "A2337", "MacBook Air (M1, 2020)"),
 ("screen-a2681", SCREEN, "A2681", "MacBook Air (13-inch, M2, 2022)"),
 ("screen-a3113", SCREEN, "A3113", "MacBook Air (13-inch, M3, 2024)"),
 ("screen-a2159", SCREEN, "A2159", "MacBook Pro (13-inch, 2019, Two Thunderbolt 3 ports)"),
 ("screen-a2338", SCREEN, "A2338", "MacBook Pro (13-inch, M1, 2020) and (13-inch, M2, 2022)"),
 ("screen-a2442", SCREEN, "A2442", "MacBook Pro (14-inch, 2021), M1 Pro or M1 Max"),
 ("screen-a2991", SCREEN, "A2991", "MacBook Pro (16-inch, Nov 2023), M3 Pro or M3 Max"),
 ("screen-a2141", SCREEN, "A2141", "MacBook Pro (16-inch, 2019)"),
 ("battery-a1989", BATTERY, "A1989", "MacBook Pro (13-inch, 2018 and 2019, Four Thunderbolt 3 ports)"),
 ("battery-a2141", BATTERY, "A2141", "MacBook Pro (16-inch, 2019)"),
]
REMAINDERS = [  # (id, repair, family in classify.py, label) = family minus its split-out models
 ("screen-pro13-intel-other", SCREEN, 'MacBook Pro 13" Intel Touch Bar era (2016-2020)', "Other MacBook Pro 13-inch Intel (2016 to 2020)"),
 ("screen-pro14-other", SCREEN, 'MacBook Pro 14" (M1 Pro to M4, 2021-2025)', "MacBook Pro 14-inch, M2 Pro to M4 (2023 and 2024)"),
 ("battery-pro13-intel-other", BATTERY, 'MacBook Pro 13" Intel Touch Bar era (2016-2020)', "Other MacBook Pro 13-inch Intel (2016 to 2020)"),
]
FAMILIES = [  # rows kept at family level (no single model reaches MIN_N); from the D17 table
 ("battery-air-intel", BATTERY, 'MacBook Air 13" Intel Retina (2018-2020)', "MacBook Air 13-inch Intel Retina (2018 to 2020)"),
 ("battery-pro15-intel", BATTERY, 'MacBook Pro 15" Intel (2016-2019)', "MacBook Pro 15-inch Intel (2012 to 2019)"),
 ("board-any", "Logic board / no-power repair", None, "Any MacBook"),
 ("liquid-any", "Liquid damage repair", None, "Any MacBook"),
 ("trackpad-any", "Trackpad replacement", None, "Any MacBook"),
]

L, keep, _ = load_keep(sys.argv[1])
taxed = [r for r in keep if r["taxed"] and r["fam"].startswith("MacBook")]
def anums(r):
    a = sorted(set(re.findall(r"A\d{4}", r["model"])))
    # a screen part named for exactly one laptop model identifies it; battery part numbers don't
    if not a and r["type"] == SCREEN:
        a = sorted(set(re.findall(r"A\d{4}", r["product"])))
    return a
def row(rid, repair, label, lines, numbers):
    v = sorted(r["paid"] for r in lines)
    if len(v) < MIN_N:
        print(f"SKIP {rid}: only {len(v)} invoices"); return None
    q = st.quantiles(v, n=4)
    return {"id": rid, "repair": repair, "model": label, "modelNumbers": numbers,
            "min": round(q[0]), "max": round(q[2]), "median": round(st.median(v)), "invoices": len(v)}

rows, split = [], set()
for rid, rep, a, name in MODELS:
    lines = [r for r in taxed if r["type"] == rep and anums(r) == [a]]
    split.add((rep, a)); rows.append(row(rid, rep, name, lines, [a]))
for rid, rep, fam, label in REMAINDERS:
    lines = [r for r in taxed if r["type"] == rep and r["fam"] == fam and anums(r)
             and not any((rep, x) in split for x in anums(r))]
    nums = sorted({x for r in lines for x in anums(r)})
    rows.append(row(rid, rep, label, lines, nums))
for rid, rep, fam, label in FAMILIES:
    lines = [r for r in taxed if r["type"] == rep and (fam is None or r["fam"] == fam)]
    rows.append(row(rid, rep, label, lines, sorted({x for r in lines for x in anums(r)}) if fam else []))
rows = [r for r in rows if r]
out = {"source": "docs/prices-from-pos-2026-10-19.md", "decision": "D17", "approved": "2026-10-19",
       "window": {"from": "2025-09-13", "to": "2026-09-12"},
       "basis": "Middle half (25th-75th percentile) of taxed POS invoices, whole AED, incl. 5% VAT; per Apple model number where it has 5+ invoices",
       "rows": rows}
with open(sys.argv[2], "w") as f:
    json.dump(out, f, indent=2, ensure_ascii=False); f.write("\n")
for r in rows:
    print(f'{r["id"]:26} {r["min"]:>5}-{r["max"]:<5} n={r["invoices"]:<3} {",".join(r["modelNumbers"])[:60]}')
