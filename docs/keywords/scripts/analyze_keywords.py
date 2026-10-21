#!/usr/bin/env python3
"""Classify the Semrush keyword harvest, map it to existing pages, group into content topics.

Inputs  (repo):  docs/keywords/semrush-kmt-ae-2026-09-26.tsv
                 docs/keywords/semrush-positions-ae-2026-09-25.tsv
        (scratch): inventory.tsv  (path, title, robots, cluster)
Outputs (repo):  docs/keywords/keyword-bank-2026-09.csv
                 docs/keywords/content-topics-2026-09.csv
                 docs/keywords/competitor-gap-2026-09.csv
                 docs/keywords/summary-2026-09.json
"""
import csv, json, re, sys, os
from collections import defaultdict

REPO = "/Users/azizi/Claude/Projects/macbook-repair-dubai.ae"
SCR = os.path.dirname(os.path.abspath(__file__))
KW = f"{REPO}/docs/keywords"

def num(v):
    v = (v or "").replace(",", "").strip()
    if not v or v.lower() == "n/a":
        return None
    m = re.match(r"^([\d.]+)\s*([KkMm]?)$", v)
    if not m:
        return None
    x = float(m.group(1))
    x *= {"k": 1e3, "m": 1e6}.get(m.group(2).lower(), 1)
    return int(round(x))

# ---------------------------------------------------------------- load
rows = []
with open(f"{KW}/semrush-kmt-ae-2026-09-26.tsv", encoding="mac_roman") as f:
    r = csv.reader(f, delimiter="\t")
    next(r)
    for p in r:
        if len(p) < 6 or not p[0].strip() or "?" in p[0]:
            continue
        rows.append(dict(keyword=p[0].strip().lower(), intent=p[1], volume=num(p[2]) or 0,
                         kd=num(p[3]), cpc=p[4], seed=p[5]))

inventory = []
with open(f"{KW}/page-inventory-2026-09-26.tsv", encoding="utf-8") as f:
    r = csv.reader(f, delimiter="\t")
    next(r)
    for p in r:
        if len(p) >= 4 and p[2] == "index":
            inventory.append(dict(path=p[0], title=p[1], cluster=p[3]))

ours = defaultdict(list)          # keyword -> [(pos, url)]
comp = defaultdict(dict)          # keyword -> {domain: (pos,url)}
comp_meta = {}
with open(f"{KW}/semrush-positions-ae-2026-09-25.tsv", encoding="mac_roman") as f:
    r = csv.reader(f, delimiter="\t")
    next(r)
    for p in r:
        if len(p) < 8:
            continue
        dom, kw, intent, pos, traffic, vol, kd, url = p[:8]
        kw = kw.strip().lower()
        pos_n = 0 if pos.lower().startswith("local") else (num(pos) if num(pos) is not None else 0)
        label = "LP" if pos.lower().startswith("local") else ("AIO" if "ai overview" in pos.lower() else pos)
        if dom == "macbook-repair-dubai.ae":
            ours[kw].append((pos_n, label, url or "/"))
        else:
            prev = comp[kw].get(dom)
            if prev is None or (pos_n and (prev[0] == 0 or pos_n < prev[0])):
                comp[kw][dom] = (pos_n, label, url)
            comp_meta[kw] = (num(vol) or 0, num(kd), intent)

def our_best(kw):
    """Best organic numeric position (LP/AIO noted separately)."""
    hits = ours.get(kw, [])
    nums = [(p, u) for p, l, u in hits if p]
    flags = sorted({l for p, l, u in hits if l in ("LP", "AIO")})
    best = min(nums) if nums else (None, None)
    return best[0], best[1], flags, len({u for _, _, u in hits})

# ---------------------------------------------------------------- classify
NOISE = re.compile(r"forex|trading|trade licen[cs]e|trade mark|trademark|trade name|trade cent|trade fair|trade show|trade finance|"
                   r"world trade|free trade|lipstick|powder|foundation|mac studio fix|nc\d\d|wallpaper|backgrounds?\b|"
                   r"\bcase\b|\bcases\b|cover|sleeve|\bbag\b|pouch|\bskin\b|protector|screen guard|tempered|"
                   r"screen ?record|mirror|split screen|screen time|call screen|lock screen|home screen|rotate screen|screen rotation|"
                   r"full screen video|screen share|share screen|flip screen|excel|vpn|visual studio|fl studio|antivirus|translate|"
                   r"in india|in pakistan|in kenya|in egypt|in saudi|saudi arabia|\busa\b|\bin us\b|apple uk|apple us|apple india|"
                   r"\bcar\b|audi|bmw|ford|hyundai|nissan|tesla|\bvw\b|bicycle|samsung|oppo|oneplus|huawei|xiaomi|"
                   r"restaurant|badminton|office for rent|jobs|courses?\b|classes|dubizzle|croma|valentine|du iphone|etisalat iphone|"
                   r"imac_too|twitter|\bmeaning\b|pdf|\bage in trade|averaging|black swan|hedging|indices|leverage|margin|"
                   r"lifeguard|easeus|recuva|stellar|minitool|testdisk|iboysoft|disk drill|dr fone|software|\bapk\b|\bapp\b|"
                   r"whatsapp data|android|sd card|memory card|nas data|forensic|open source|google|mouse|dongle|docking|adapter|"
                   r"charger|keyboard shortcuts|shortcuts|hacks|emax|jumbo|sharaf|istyle|amazon|brightstar|mac mini monitor")
DEVICE = [
    ("iphone", re.compile(r"iphone|آيفون|ايفون")),
    ("ipad", re.compile(r"ipad")),
    ("apple-watch", re.compile(r"apple watch|iwatch|watch battery|watch repair|watch screen|watch glass")),
    ("airpods", re.compile(r"airpod")),
    ("mac-desktop", re.compile(r"imac|mac mini|mac studio|mac pro\b|studio display|pro display")),
    ("macbook", re.compile(r"macbook|mac book|ماك|\bmac\b|mac repair|mac screen|mac battery|mac service|macrepair|apple laptop")),
    ("data-recovery", re.compile(r"data recover|recover data|recovery")),
    ("laptop", re.compile(r"laptop|computer|\bpc\b|لابتوب")),
    ("apple-general", re.compile(r"apple|ابل")),
]
TYPE_RULES = [
    ("sell-tradein", re.compile(r"\bsell\b|trade ?in\b|trade-in|buy ?back|\bused\b|second hand|2nd hand|refurbished|renewed|for sale")),
    ("cost", re.compile(r"\bcost\b|\bprice|prices|how much|\bfee\b|charges")),
    ("problem", re.compile(r"not (working|charging|turning|responding|opening)|won.?t|doesn.?t|stopped|black screen|blank|dead|stuck|frozen|freez|"
                           r"overheat|heat up|\bhot\b|flicker|lines on|lines|spots|spot on|shadow|yellow screen|gray screen|grey screen|"
                           r"cracked|broken|water|liquid|spill|swollen|drain|beep|noise|no display|no sound|no camera|without camera|"
                           r"dent|scratch|keeps|problem|issue|fault|error|screen is black|bent|loose|slow")),
    ("service", re.compile(r"repair|replac|\bfix\b|fixing|service|centre|center|shop|technician|near me|upgrade|unlock|"
                           r"recovery|install|clean(ing)? service|appointment|تصليح|صيانة")),
    ("howto", re.compile(r"^how |how to|^what |^why |^which |^is |^can |^does |guide|tips|check|reset|restore|wipe|factory|clean|"
                         r"screenshot|screen shot|print screen|copy|paste|battery health|battery life|\bmah\b|\bsize\b|specs|"
                         r"dimensions|megapixel|capacity|list of|models|\bvs\b|difference|or pro|best ")),
]
SERVICE_WORDS = re.compile(r"repair|replac|fix|service|recovery|unlock|upgrade|cost|price|تصليح|صيانة")
LATEST = re.compile(r"iphone ?18|iphone duo|iphone fold|iphone ?17|iphone air|17e|16e|macbook neo|air m5|pro m5|m5 pro|m5 max|"
                    r"\bm5\b|\bm6\b|mac mini m6|mac studio m5|m5 ultra|ipad pro m5|ipad air m4|series 12|ultra 4|airpods 5|"
                    r"airpods pro 3|airpods max 2|studio display xdr|vision pro")

def device_of(k):
    for name, rx in DEVICE:
        if rx.search(k):
            return name
    return "other"

REPAIRISH = re.compile(r"repair|replac|\bfix|screen|battery|glass|camera|keyboard|display|lcd|port|logic board|motherboard|service|unlock|recovery")
QUESTION = re.compile(r"^(how|what|why|which|is|can|does|do|should|where|when) ")
def type_of(k):
    if TYPE_RULES[0][1].search(k):
        return "sell-tradein"
    q = bool(QUESTION.match(k))
    prob = TYPE_RULES[2][1].search(k)
    if q:
        if prob or re.search(r"repair|replac|\bfix", k):
            return "problem"
        if TYPE_RULES[1][1].search(k) and REPAIRISH.search(k):
            return "cost"
        return "howto"
    if TYPE_RULES[1][1].search(k):
        return "cost" if REPAIRISH.search(k) else "product"
    if prob:
        return "problem"
    if TYPE_RULES[3][1].search(k):
        return "service"
    if TYPE_RULES[4][1].search(k):
        return "howto"
    return "product"

PARTS = [
    ("back-glass", r"back glass|back replacement|back cover glass|rear glass|glass back"),
    ("screen", r"screen|display|lcd|oled|glass|panel"),
    ("battery", r"battery|batteries"),
    ("keyboard", r"keyboard|keys?\b|trackpad|touch ?bar"),
    ("camera", r"camera|lens|face ?id"),
    ("charging-port", r"charging port|charge port|not charging|charger port|usb-?c port|lightning"),
    ("logic-board", r"logic board|motherboard|board repair|chip level|gpu|graphics"),
    ("water-damage", r"water|liquid|spill"),
    ("data", r"data|recover"),
    ("storage-ram", r"ssd|ram\b|storage|upgrade"),
    ("unlock", r"unlock|icloud|activation|password|locked"),
    ("speaker-mic", r"speaker|mic|microphone|audio|sound"),
    ("power", r"won.?t turn on|not turning on|no power|dead|power supply|black screen"),
    ("overheat", r"overheat|heat up|heating|\bfan\b|\bhot\b"),
]
def part_of(k):
    for name, rx in PARTS:
        if re.search(rx, k):
            return name
    return "general"

MODEL_RX = [
    (re.compile(r"iphone ?(\d{1,2}e?|x[sr]?|se|air|duo|fold)( ?(pro max|promax|pro|plus|mini|max))?"), "iphone"),
    (re.compile(r"macbook (air|pro|neo)( ?(m\d( pro| max)?|intel|a18|i[57]))?"), "macbook"),
    (re.compile(r"ipad ?(pro|air|mini)?( ?(m\d|\d{1,2}(th)?))?"), "ipad"),
    (re.compile(r"(imac|mac mini|mac studio|mac pro)( ?m\d( pro| max| ultra)?)?"), "mac"),
]
def model_of(k):
    for rx, fam in MODEL_RX:
        m = rx.search(k)
        if m:
            return re.sub(r"\s+", " ", m.group(0)).strip()
    return ""

def business_fit(dev, typ):
    if dev in ("apple-watch", "airpods"):
        return 0            # owner confirmed 2026-09-01: no in-house service
    if typ == "product":
        return 1
    if dev == "laptop":
        return 2 if typ in ("service", "problem", "cost") else 1
    if dev == "other":
        return 0
    if typ in ("service", "problem", "cost"):
        return 3
    if typ == "sell-tradein":
        return 2
    return 1                 # howto

def tier(kd):
    if kd is None: return "not-measured"
    if kd <= 14: return "very-easy"
    if kd <= 29: return "easy"
    if kd <= 49: return "medium"
    return "hard"

# ---------------------------------------------------------------- page matching
LOC_RX = re.compile(r"\b(in )?(dubai|uae|abu dhabi|sharjah|ajman|al ain)\b|\bnear me\b")
STOP = {"dubai","uae","in","near","me","the","a","an","for","of","my","to","how","is","on","and","with","at","abu","dhabi",
        "sharjah","price","cost","best","apple","repair","service","replacement","replace","fix","centre","center","shop",
        "cheap","original","new","what","why","does","do","can","i","it","after","not","your"}
def toks(s):
    s = s.lower().replace("-", " ").replace("/", " ")
    return [t for t in re.findall(r"[a-z0-9]+", s)]

INV = []
for p in inventory:
    st = set(toks(p["path"]))
    INV.append((p, st, set(toks(p["title"]))))

PATHS = {p["path"]: p for p in inventory}
HEAD_MAP = {"macbook repair dubai": "/", "macbook repair": "/", "mac repair dubai": "/mac-repair-dubai",
            "mac repair": "/mac-repair-dubai", "apple macbook repair dubai": "/", "apple mac repair dubai": "/mac-repair-dubai",
            "macbook repair near me": "/macbook-repair-near-me-dubai", "mac repair near me": "/mac-repair-near-me-dubai"}
def best_page(k, dev, typ=None):
    if k in HEAD_MAP and HEAD_MAP[k] in PATHS:
        return PATHS[HEAD_MAP[k]], 2.0
    base = re.sub(r"\b(in )?(dubai|uae)\b|\bnear me\b", " ", k)
    slug = "-".join(toks(base))
    for cand in (f"/{slug}-dubai", f"/{slug}", f"/blog/{slug}"):
        if cand in PATHS:
            return PATHS[cand], 1.5
    kt = [t for t in toks(k) if t not in STOP]
    if not kt:
        kt = toks(k)
    kts = set(kt)
    best, score = None, 0.0
    for p, st, tt in INV:
        inter = len(kts & st)
        if not inter:
            continue
        s = inter / len(kts) + 0.15 * (len(kts & tt) / len(kts)) - 0.01 * len(st - kts)
        if p["cluster"] == "area" and not (kts & st - {"macbook", "repair"}):
            s -= 0.5
        if typ in ("service", "cost", "problem") and p["path"].startswith("/blog/"):
            s -= 0.2
        if typ == "howto" and p["path"].startswith("/blog/"):
            s += 0.1
        if p["path"] in ("/macbook-guides", "/blog", "/pricing"):
            s -= 0.4
        if s > score:
            best, score = p, s
    return best, score

# ---------------------------------------------------------------- run
bank = []
seen = set()
for r0 in rows:
    k = r0["keyword"]
    if k in seen:
        continue
    seen.add(k)
    if NOISE.search(k):
        continue
    dev = device_of(k)
    typ = type_of(k)
    if dev == "other" and not SERVICE_WORDS.search(k):
        continue
    bp = business_fit(dev, typ)
    pos, url, flags, n_urls = our_best(k)
    page, ms = best_page(k, dev, typ)
    covered = page is not None and ms >= 0.99
    partly = page is not None and ms >= 0.6
    status = ("ranking-top3" if (pos and pos <= 3) or "LP" in flags else
              "striking-4-20" if pos and pos <= 20 else
              "ranking-21-100" if pos else
              "page-exists-not-ranking" if covered else
              "partial-page" if partly else "gap")
    bank.append(dict(keyword=k, volume=r0["volume"], kd=r0["kd"] if r0["kd"] is not None else "", competition=tier(r0["kd"]),
                     intent=r0["intent"], type=typ, device=dev, model=model_of(k), part=part_of(k),
                     latest_model="yes" if LATEST.search(k) else "", business_fit=bp,
                     our_position=pos or "", our_flags="+".join(flags), our_url=url or "", our_urls_ranking=n_urls or "",
                     best_existing_page=page["path"] if page else "", match_score=round(ms, 2), status=status, seed=r0["seed"]))

# priority: volume weight x fit x ease
EASE = {"very-easy": 1.0, "easy": 0.85, "not-measured": 0.75, "medium": 0.5, "hard": 0.25}
TYPEW = {"service": 1.0, "problem": 0.9, "cost": 0.95, "sell-tradein": 0.8, "howto": 0.45, "product": 0.2}
for b in bank:
    b["priority"] = round((b["volume"] ** 0.5) * (b["business_fit"] / 3) * EASE[b["competition"]] * TYPEW[b["type"]], 2)

bank.sort(key=lambda b: -b["priority"])
cols = ["keyword","volume","kd","competition","intent","type","device","model","part","latest_model","business_fit","priority",
        "status","our_position","our_flags","our_url","our_urls_ranking","best_existing_page","match_score","seed"]
with open(f"{KW}/keyword-bank-2026-09.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=cols)
    w.writeheader()
    for b in bank:
        w.writerow({c: b[c] for c in cols})

# ---------------------------------------------------------------- topics (one URL per topic)
LOC = re.compile(r"\b(in )?(dubai|uae|abu dhabi|sharjah|ajman|al ain)\b|\bnear me\b|\bnearby\b")
def topic_key(b):
    k = LOC.sub(" ", b["keyword"])
    dev = b["device"]
    model = b["model"] or dev
    t = b["type"]
    if t in ("service", "cost"):
        t2 = "service"      # service & cost share the money page; cost gets a section/FAQ
    else:
        t2 = t
    geo = "abu-dhabi" if "abu dhabi" in b["keyword"] else ("sharjah" if "sharjah" in b["keyword"] else "")
    return "|".join(x for x in (dev, model, b["part"], t2, geo) if x)

topics = defaultdict(list)
for b in bank:
    if b["business_fit"] == 0:
        continue
    topics[topic_key(b)].append(b)

trows = []
for key, items in topics.items():
    items.sort(key=lambda b: -b["volume"])
    head = items[0]
    kds = [b["kd"] for b in items if b["kd"] != ""]
    pos = [b["our_position"] for b in items if b["our_position"] != ""]
    pages = defaultdict(int)
    for b in items:
        if b["best_existing_page"]:
            pages[b["best_existing_page"]] += b["volume"]
    page = max(pages, key=pages.get) if pages else ""
    statuses = {b["status"] for b in items}
    st = ("winning" if "ranking-top3" in statuses else
          "striking" if "striking-4-20" in statuses else
          "weak" if "ranking-21-100" in statuses else
          "not-ranking" if ("page-exists-not-ranking" in statuses or "partial-page" in statuses) else "gap")
    typ = head["type"]
    ptype = ("service page" if typ in ("service", "cost") else "problem page" if typ == "problem" else
             "sell/trade-in page" if typ == "sell-tradein" else "blog post" if typ == "howto" else "blog post (awareness)")
    maxkd = max(kds) if kds else None
    trows.append(dict(topic=key, primary_keyword=head["keyword"], primary_position=head["our_position"], page_type=ptype, device=head["device"],
                      total_volume=sum(b["volume"] for b in items), keywords=len(items),
                      min_kd=min(kds) if kds else "", max_kd=maxkd if maxkd is not None else "",
                      competition=tier(maxkd) if kds else "not-measured",
                      latest_model="yes" if any(b["latest_model"] for b in items) else "",
                      best_position=min(pos) if pos else "", status=st, target_page=page,
                      priority=round(sum(b["priority"] for b in items), 2),
                      all_keywords=" | ".join(f'{b["keyword"]} ({b["volume"]}{", KD "+str(b["kd"]) if b["kd"] != "" else ""})' for b in items[:40])))
trows.sort(key=lambda t: -t["priority"])
tcols = ["topic","primary_keyword","primary_position","page_type","device","total_volume","keywords","min_kd","max_kd","competition","latest_model",
         "best_position","status","target_page","priority","all_keywords"]
with open(f"{KW}/content-topics-2026-09.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=tcols)
    w.writeheader()
    for t in trows:
        w.writerow(t)

# ---------------------------------------------------------------- competitor gap
gap = []
for kw, doms in comp.items():
    if NOISE.search(kw):
        continue
    top = {d: v for d, v in doms.items() if (v[0] and v[0] <= 20) or v[1] == "LP"}
    if not top:
        continue
    pos, url, flags, _ = our_best(kw)
    if (pos and pos <= 10) or "LP" in flags:
        continue
    vol, kd, intent = comp_meta.get(kw, (0, None, ""))
    dev, typ = device_of(kw), type_of(kw)
    fit = business_fit(dev, typ)
    gap.append(dict(keyword=kw, volume=vol, kd=kd if kd is not None else "", device=dev, type=typ, business_fit=fit,
                    our_position=pos or "", our_url=url or "",
                    competitors="; ".join(f"{d} {v[1]}" for d, v in sorted(top.items(), key=lambda x: x[1][0] or 0)),
                    competitor_urls="; ".join(f"{v[2]}" for d, v in top.items())))
gap.sort(key=lambda g: (-g["business_fit"], -g["volume"]))
with open(f"{KW}/competitor-gap-2026-09.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(gap[0].keys()))
    w.writeheader()
    for g in gap:
        w.writerow(g)

# ---------------------------------------------------------------- summary
def cnt(it, key):
    d = defaultdict(int)
    for x in it:
        d[x[key]] += 1
    return dict(sorted(d.items(), key=lambda kv: -kv[1]))
low = [b for b in bank if b["competition"] in ("very-easy", "easy") and b["business_fit"] >= 1]
summary = dict(
    raw_rows=len(rows), relevant=len(bank),
    by_device=cnt(bank, "device"), by_type=cnt(bank, "type"), by_competition=cnt(bank, "competition"),
    by_status=cnt(bank, "status"),
    low_kd_fit=len(low), low_kd_fit_volume=sum(b["volume"] for b in low),
    low_kd_fit_gap=len([b for b in low if b["status"] in ("gap", "partial-page", "page-exists-not-ranking")]),
    fit3=len([b for b in bank if b["business_fit"] == 3]), fit3_volume=sum(b["volume"] for b in bank if b["business_fit"] == 3),
    watch_airpods_demand=sum(b["volume"] for b in bank if b["device"] in ("apple-watch", "airpods")),
    topics=len(trows), topics_by_status=cnt(trows, "status"), topics_by_type=cnt(trows, "page_type"),
    competitor_gap=len(gap), competitor_gap_fit3=len([g for g in gap if g["business_fit"] == 3]),
)
with open(f"{KW}/summary-2026-09.json", "w") as f:
    json.dump(summary, f, indent=1)
print(json.dumps(summary, indent=1))
