"""Build the master keyword universe for macbook-repair-dubai.ae (2026-10-09).
Every number keeps its source; nothing is estimated. Run from the repo root."""
import csv, re, json, collections
K = "docs/keywords/"; D = "automation/data/"
def n(x):
    try: return float(str(x).replace(",", "").replace("%", ""))
    except: return None
M = {}  # keyword -> record
def rec(k):
    k = re.sub(r"\s+", " ", k.strip().lower())
    if not k: return None
    if k not in M: M[k] = {"keyword": k, "sources": set()}
    return M[k]
# 1. Semrush Keyword Magic UAE (raw, 26 Sep)
for r in csv.DictReader(open(K+"semrush-kmt-ae-2026-09-26.tsv", encoding="utf-8", errors="replace"), delimiter="\t"):
    x = rec(r["keyword"]); x["sources"].add("semrush-kmt")
    x["vol_semrush"] = n(r["volume"]); x["kd_semrush"] = n(r["kd"]); x["cpc_usd"] = n(r["cpc_usd"]); x["intent_semrush"] = r["intent"]; x["seed"] = r["seed"]
for r in csv.DictReader(open(K+"semrush-kmt-arabic-ae-2026-09-26.tsv", encoding="utf-8", errors="replace"), delimiter="\t"):
    x = rec(r["keyword"]); x["sources"].add("semrush-kmt-arabic"); x["lang"] = "ar"
    x["vol_semrush"] = n(r["volume"]); x["kd_semrush"] = n(r["kd"]); x["intent_semrush"] = r["intent"]; x["seed"] = r["seed"]
# 2. Classified bank (26 Sep)
for r in csv.DictReader(open(K+"keyword-bank-2026-09.csv", encoding="utf-8", errors="replace")):
    x = rec(r["keyword"]); x["sources"].add("bank")
    x.setdefault("vol_semrush", n(r["volume"])); x.setdefault("kd_semrush", n(r["kd"]))
    x["device"] = r["device"]; x["type"] = r["type"]; x["part"] = r["part"]; x["model"] = r["model"]
    x["fit"] = n(r["business_fit"]); x["bank_status"] = r["status"]; x["best_page"] = r["best_existing_page"] or r["our_url"]
    if r["our_position"]: x["pos_semrush"] = n(r["our_position"])
# 3. Semrush positions: ours + competitors (25-26 Sep)
for f in ["semrush-positions-ae-2026-09-25.tsv", "semrush-positions-competitors2-ae-2026-09-26.tsv"]:
    for r in csv.DictReader(open(K+f, encoding="utf-8", errors="replace"), delimiter="\t"):
        x = rec(r["keyword"]);
        if not x: continue
        x["sources"].add("semrush-positions"); x.setdefault("vol_semrush", n(r["volume"].replace("K","000") if r["volume"] else None))
        p = r["position"]
        if r["domain"] == "macbook-repair-dubai.ae":
            v = 0 if p == "Local pack" else n(p)
            if v is not None and (x.get("pos_semrush") is None or v < x["pos_semrush"]): x["pos_semrush"] = v; x["url_semrush"] = r["url"]
        else:
            c = x.setdefault("competitors", {}); v = n(p) if p != "Local pack" else 0
            if v is not None and (r["domain"] not in c or v < c[r["domain"]]): c[r["domain"]] = v
# 4. Competitor gap flags
for r in csv.DictReader(open(K+"competitor-gap-expanded-2026-09-26.csv", encoding="utf-8", errors="replace")):
    x = rec(r["keyword"]); x["sources"].add("competitor-gap"); x["gap"] = True
# 5. Ahrefs top 100 organic keywords (9 Oct)
for line in open(D+"ahrefs-organic-keywords-2026-10-09.tsv", encoding="utf-8"):
    c = line.rstrip("\n").split("\t")
    if not c or not c[0] or c[0] == "keyword": continue
    url = next((v for v in c if v.startswith("http")), ""); i = c.index(url) if url else -1
    x = rec(c[0]); x["sources"].add("ahrefs")
    x["vol_ahrefs"] = n(c[5]); x["kd_ahrefs"] = n(c[6]); x["pos_ahrefs"] = n(c[i-1]) if i > 0 else None
    x["url_ahrefs"] = url.replace("https://macbook-repair-dubai.ae", "")
# 5b. Ahrefs competitor top keywords (9 Oct): fixsquad.ae, fixermanme.com, macrepair.ae
for line in open(D+"ahrefs-competitor-keywords-2026-10-09.tsv", encoding="utf-8"):
    c = line.rstrip("\n").split("\t")
    if len(c) < 8 or c[0] == "competitor": continue
    dom = c[0].rstrip("/"); kw = c[1]
    nums = [v for v in c[2:] if re.fullmatch(r"[\d.,]+K?|N/A", v)]
    url = next((v for v in c if v.startswith("http")), ""); i = c.index(url) if url else -1
    x = rec(kw); x["sources"].add("ahrefs-competitors")
    def kn(v): return None if v in (None, "N/A") else (float(v[:-1].replace(",",""))*1000 if v.endswith("K") else float(v.replace(",","")))
    if nums:
        # columns after intents: sf, volume, kd, cpc, traffic, paid, position
        try: x.setdefault("vol_ahrefs", kn(nums[1])); x.setdefault("kd_ahrefs", kn(nums[2]))
        except Exception: pass
    pos = kn(c[i-1]) if i > 0 and re.fullmatch(r"[\d.,]+", c[i-1] or "") else None
    comp = x.setdefault("competitors", {})
    if pos is not None and (dom not in comp or pos < comp[dom]): comp[dom] = pos

# 6. Search Console (9 Oct): 28-day with comparison, and 90-day
for r in csv.reader(open(D+"gsc-queries-28d-2026-10-09.tsv"), delimiter="\t"):
    if not r or r[0] == "query": continue
    x = rec(r[0]); x["sources"].add("gsc-28d")
    x["gsc28_clicks"] = n(r[1]); x["gsc28_impr"] = n(r[4]); x["gsc28_pos"] = n(r[10])
for r in csv.reader(open(D+"gsc-queries-90d-2026-10-09.tsv"), delimiter="\t"):
    if not r or r[0] == "query": continue
    x = rec(r[0]); x["sources"].add("gsc-90d")
    x["gsc90_clicks"] = n(r[1]); x["gsc90_impr"] = n(r[2]); x["gsc90_pos"] = n(r[4])
# 7. Owner pages from the keyword map
owner = {r["primary_keyword"].strip().lower(): r["owner_page"] for r in csv.DictReader(open("docs/keyword-page-map.csv"))}
# ---- classification (only fills what the bank did not) ----
DEV = [("apple-watch", r"\bwatch\b"), ("airpods", r"airpod"), ("ipad", r"\bipad"), ("iphone", r"iphone|ايفون|آيفون"),
       ("mac-desktop", r"\bimac\b|mac ?mini|mac ?studio|mac ?pro\b(?!ok)|studio display|pro display"),
       ("macbook", r"macbook|mac ?book|ماك ?بوك"), ("mac-general", r"\bmac\b|macos|os x|osx"),
       ("apple-general", r"\bapple\b|ابل|آبل"), ("laptop", r"laptop|notebook|لابتوب"), ("phone-tablet", r"phone|mobile|tablet|جوال|موبايل")]
PART = [("screen", r"screen|display|lcd|oled|glass(?! back)|lines|flicker|shadow|crack|شاشة"), ("battery", r"batter|بطارية"),
        ("keyboard", r"keyboard|keys?\b|touch ?bar|trackpad|كيبورد"), ("charging-port", r"charg|port|magsafe|usb-?c|شحن"),
        ("water-damage", r"water|liquid|spill"), ("logic-board", r"logic ?board|motherboard|board|chip|gpu|graphic"),
        ("storage-ram", r"\bssd\b|\bram\b|memory|storage|upgrade"), ("data", r"data|recover|backup"),
        ("software", r"macos|reinstall|update|install|virus|malware|password|reset|format|factory|403|error|slow|kernel|restart|freez"),
        ("camera", r"camera|face ?id|كاميرا"), ("back-glass", r"back ?glass"), ("speaker-mic", r"speaker|mic|sound|audio"),
        ("unlock", r"unlock|icloud|activation"), ("sell-buy", r"sell|buy|price of|used|refurb|trade")]
TYPE = [("near-me", r"near me|nearby|قريب"), ("cost", r"cost|price|how much|charges|سعر|اسعار"), ("comparison", r"\bvs\b|versus|best|which|compare|difference"),
        ("howto", r"^how|how to|^can i|^what|^why|^is |^does|fix |tutorial|guide"), ("problem", r"not |won.?t|doesn.?t|stuck|dead|broken|issue|problem|lines|shadow|flicker|black|overheat|hot\b|slow|crash|restart"),
        ("service", r"repair|replace|replacement|fix|service|center|centre|shop|technician|تصليح|صيانة|اصلاح"), ("product", r".")]
def first(rules, k):
    for name, rx in rules:
        if re.search(rx, k, re.I): return name
    return "other"
LOC = r"dubai|uae|abu dhabi|sharjah|ajman|al ain|marina|deira|jumeirah|barsha|jlt|jvc|karama|business bay|downtown|دبي|الامارات"
rows = []
for k, x in M.items():
    dev = x.get("device") or first(DEV, k); part = x.get("part") or first(PART, k)
    # "screen" in these phrases is software or usage, not a screen repair
    if re.search(r"screen ?(record|shot|time|saver|mirror|shar|split)|split ?screen|lock ?screen|home ?screen|full ?screen|screenshot|print ?screen|black screen of death", k, re.I) and not re.search(r"repair|replace|crack|broken|fix (the )?screen", k, re.I):
        part = "software"
    typ = x.get("type") if x.get("type") else first(TYPE, k)
    if re.search(r"near me|nearby", k): typ = "near-me" if typ in ("service","product","problem") else typ
    vols = [v for v in (x.get("vol_semrush"), x.get("vol_ahrefs")) if v]
    best_pos = min([p for p in (x.get("pos_semrush"), x.get("pos_ahrefs"), x.get("gsc28_pos"), x.get("gsc90_pos")) if p is not None and p > 0] or [None]) if any(x.get(f) is not None for f in ("pos_semrush","pos_ahrefs","gsc28_pos","gsc90_pos")) else None
    if x.get("pos_semrush") == 0: best_pos = 0  # Local pack
    service_ok = dev not in ("apple-watch", "airpods") and dev not in ("laptop","phone-tablet","other") or bool(re.search(r"mac|apple|iphone|ipad", k))
    rows.append({
        "keyword": k, "lang": x.get("lang", "en"), "device": dev, "part": part, "type": typ,
        "cluster": f"{dev} · {part}", "local": bool(re.search(LOC, k, re.I)),
        "volume": max(vols) if vols else None, "vol_semrush": x.get("vol_semrush"), "vol_ahrefs": x.get("vol_ahrefs"),
        "kd": x.get("kd_semrush") if x.get("kd_semrush") is not None else x.get("kd_ahrefs"),
        "cpc_usd": x.get("cpc_usd"), "intent": x.get("intent_semrush", ""),
        "pos_semrush": x.get("pos_semrush"), "pos_ahrefs": x.get("pos_ahrefs"), "gsc_pos": x.get("gsc28_pos") or x.get("gsc90_pos"),
        "gsc90_impr": x.get("gsc90_impr"), "gsc90_clicks": x.get("gsc90_clicks"), "gsc28_impr": x.get("gsc28_impr"), "gsc28_clicks": x.get("gsc28_clicks"),
        "best_pos": best_pos, "ranking_url": x.get("url_ahrefs") or (x.get("url_semrush") or "").replace("https://macbook-repair-dubai.ae",""),
        "owner_page": owner.get(k, ""), "best_page": x.get("best_page", ""),
        "competitors": "; ".join(f"{d} {int(p) if p else 'LP'}" for d, p in sorted((x.get("competitors") or {}).items(), key=lambda t: t[1])[:5]),
        "gap": bool(x.get("gap")), "service_we_offer": service_ok,
        "sources": "|".join(sorted(x["sources"])),
    })
OTHER_BRAND = re.compile(r"samsung|galaxy|huawei|xiaomi|redmi|sony|xperia|lenovo|\bhp\b|dell|asus|acer|msi|oppo|vivo|pixel|oneplus|nokia|gionee|realme|honor|motorola|tecno|infinix|ps4|ps5|playstation|xbox|nintendo|printer|طابع|trade licen|trading|forex|cctv|camera installation|home automation|security system|scooter|wall|meeting room|surface pro|windows|android|fixerman|fixsquad|macrepair\b|geeks|celmetro|emax|sharaf|istyle", re.I)
APPLE = re.compile(r"mac|imac|iphone|ipad|apple|airpod|ios\b|ايفون|ماك|آيفون|ابل", re.I)
for r in rows:
    k = r["keyword"]
    if OTHER_BRAND.search(k) and not re.search(r"apple|iphone|ipad|mac", k, re.I): rel = "off-topic"
    elif r["device"] in ("apple-watch", "airpods"): rel = "not offered"
    elif r["device"] in ("other", "laptop", "phone-tablet") and not APPLE.search(k): rel = "off-topic"
    elif r["type"] in ("service", "cost", "near-me", "problem") or r["part"] in ("screen","battery","keyboard","charging-port","water-damage","logic-board","storage-ram","data","camera","back-glass","speaker-mic","unlock"): rel = "core"
    else: rel = "adjacent"
    r["relevance"] = rel
rows.sort(key=lambda r: (-(r["volume"] or 0), -(r["gsc90_impr"] or 0)))
cols = list(rows[0].keys())
with open(K+"keyword-universe-2026-10-09.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=cols); w.writeheader(); w.writerows(rows)
json.dump(rows, open(K+"keyword-universe-2026-10-09.json", "w"), separators=(",", ":"))
# compact copy for the explorer page
SRC = {"semrush-kmt":"S","semrush-kmt-arabic":"S","bank":"B","semrush-positions":"P","competitor-gap":"G","ahrefs":"A","ahrefs-competitors":"C","gsc-28d":"Q","gsc-90d":"Q"}
compact = [[r["keyword"], r["lang"], r["device"], r["part"], r["type"], r["relevance"], r["volume"], r["kd"], r["best_pos"],
            r["gsc90_impr"] or r["gsc28_impr"], r["gsc90_clicks"] or r["gsc28_clicks"], r["owner_page"] or r["ranking_url"] or "",
            1 if r["gap"] else 0, "".join(sorted(set(SRC.get(x,"") for x in r["sources"].split("|")))), r["competitors"], r["cpc_usd"]] for r in rows]
json.dump({"generated":"2026-10-09","cols":["k","lang","dev","part","type","rel","vol","kd","pos","impr","clicks","page","gap","src","comp","cpc"],"rows":compact}, open("/private/tmp/claude-504/-Users-azizi-Claude-Projects-macbook-repair-dubai-ae/b4de3bb5-246c-4390-9f24-579369201a4d/scratchpad/kw/keywords.json","w"), separators=(",",":"))
# summary
c = collections.Counter(r["device"] for r in rows); src = collections.Counter(s for r in rows for s in r["sources"].split("|"))
print("TOTAL", len(rows)); print("by relevance", collections.Counter(r["relevance"] for r in rows).most_common()); print("by device", c.most_common()); print("by source", src.most_common())
print("by type", collections.Counter(r["type"] for r in rows).most_common())
print("clusters", len(set(r["cluster"] for r in rows)), "| with volume", sum(1 for r in rows if r["volume"]), "| with real GSC impressions", sum(1 for r in rows if r["gsc90_impr"] or r["gsc28_impr"]))
print("sum volume (Semrush/Ahrefs max)", int(sum(r["volume"] or 0 for r in rows)))
