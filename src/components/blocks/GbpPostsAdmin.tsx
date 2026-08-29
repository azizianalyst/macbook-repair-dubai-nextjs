"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Copy, Check, CalendarCheck, CalendarX, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { POSTS, type Post } from "@/content/blog-posts";

const BASE_URL = "https://macbook-repair-dubai.ae";
type GbpType = "UPDATE" | "OFFER" | "EVENT";

const TYPE_COLORS: Record<GbpType, string> = {
  UPDATE: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  OFFER: "border-accent/40 bg-accent/10 text-accent",
  EVENT: "border-purple-500/30 bg-purple-500/10 text-purple-400",
};
const TYPE_LABELS: Record<GbpType, string> = { UPDATE: "What's New", OFFER: "Offer", EVENT: "Event" };
const TYPE_TIPS: Record<GbpType, string> = {
  UPDATE: "Use for guides, fixes, and how-to posts. No expiry. Most of your posts.",
  OFFER: "Use for cost guides and posts with a specific price. Gets an 'Offers' tab on your profile.",
  EVENT: "Use for time-limited events only (Ramadan promo, DSF deal). Requires start + end date.",
};

// ─── Caption engine ────────────────────────────────────────────────────────────

function detectType(post: Post): GbpType {
  const cat = post.category.toLowerCase();
  const t = post.title.toLowerCase();
  if (cat.includes("cost guide") || t.includes(" cost") || t.includes("price guide")) return "OFFER";
  if (t.includes("ramadan") || t.includes("eid") || t.includes("weekend deal")) return "EVENT";
  return "UPDATE";
}

function getEmoji(t: string): string {
  if (t.includes("battery") || t.includes("drain")) return "🔋";
  if (t.includes("screen") || t.includes("display") || t.includes("lines") || t.includes("flicker") || t.includes("black screen") || t.includes("no display")) return "🖥️";
  if (t.includes("data") || t.includes("recovery")) return "💾";
  if (t.includes("keyboard")) return "⌨️";
  if (t.includes("iphone") || (t.includes("ipad") && !t.includes("imac"))) return "📱";
  if (t.includes("water") || t.includes("liquid")) return "💧";
  if (t.includes("ssd") || t.includes("storage") || t.includes("upgrade") || t.includes("ram")) return "⚡";
  if (t.includes("overheating") || t.includes("fan noise") || t.includes("loud fan")) return "🌡️";
  if (t.includes("not turning") || t.includes("won't turn") || t.includes("dead") || t.includes("no power")) return "🔌";
  if (t.includes("slow") || t.includes("sluggish")) return "🐢";
  if (t.includes("charging") || t.includes("charger") || t.includes("magsafe")) return "🔌";
  if (t.includes("hinge")) return "🔩";
  if (t.includes("gpu") || t.includes("graphic")) return "🎮";
  if (t.includes("logic board") || t.includes("motherboard")) return "🛠️";
  return "🔧";
}

function getHashtags(t: string): string {
  if (t.includes("macbook air")) return "#MacBookAir #MacBookRepairDubai #AppleRepairDubai";
  if (t.includes("macbook pro")) return "#MacBookPro #MacBookRepairDubai #AppleRepairDubai";
  if (t.includes("macbook")) return "#MacBook #MacBookRepairDubai #AppleRepairDubai";
  if (t.includes("imac")) return "#iMac #iMacRepairDubai #AppleRepairDubai";
  if (t.includes("mac mini")) return "#MacMini #MacRepairDubai #AppleRepairDubai";
  if (t.includes("mac studio")) return "#MacStudio #MacRepairDubai #AppleRepairDubai";
  if (t.includes("mac pro")) return "#MacPro #MacRepairDubai #AppleRepairDubai";
  if (t.includes("iphone")) return "#iPhone #iPhoneRepairDubai #AppleRepairDubai";
  if (t.includes("ipad")) return "#iPad #iPadRepairDubai #AppleRepairDubai";
  return "#MacBookRepairDubai #AppleRepairDubai #Dubai";
}

function getDubaiContext(t: string, cat: string): string {
  if (t.includes("battery") || t.includes("drain"))
    return "Dubai heat degrades batteries faster than the manufacturer's rated cycle count — most MacBook owners here notice a real drop in battery life by year 2 or 3, not year 4 or 5.";
  if (t.includes("overheating") || t.includes("fan noise") || t.includes("loud fan") || t.includes("running hot"))
    return "This is one of our most common walk-ins in Dubai. Desert dust clogs the fan and heatsink faster here than almost anywhere else — an annual thermal clean makes the machine noticeably quieter and cooler.";
  if (t.includes("screen") || t.includes("lines") || t.includes("flicker") || t.includes("no display") || t.includes("black screen"))
    return "Dubai's heat cycles and humidity loosen display cable adhesive over time. If lines appear when you open the lid or the screen flickers under light pressure, the cable is almost always the first place to check.";
  if (t.includes("water") || t.includes("liquid"))
    return "Water damage is more common in Dubai than you'd expect — air conditioning condensation is a regular culprit we see in the workshop, especially in summer when ACs run hardest.";
  if (t.includes("slow") || t.includes("sluggish"))
    return "A slow MacBook in Dubai is almost always a storage issue. macOS needs 15–20% free space to run cleanly. An SSD upgrade is the single most impactful thing you can do for an older machine.";
  if (t.includes("ssd") || t.includes("upgrade") || t.includes("storage") || t.includes("ram"))
    return "Storage and RAM upgrades are popular with Dubai's creative community — architects, video editors, and photographers tend to outgrow their original spec within 2 to 3 years of daily use.";
  if (t.includes("not turning") || t.includes("won't turn") || t.includes("dead") || t.includes("no power"))
    return "Power faults are a daily walk-in at our workshop. Dubai voltage fluctuations and power surges can damage chargers and, in worse cases, the charging IC on the board itself.";
  if (t.includes("keyboard"))
    return "MacBook keyboards collect dust faster in Dubai's climate. The butterfly-mechanism models (2015–2019) are especially fragile — one grain of fine sand can stick a key or cause it to double-type.";
  if (t.includes("charging") || t.includes("usb-c") || t.includes("magsafe"))
    return "Charging port dust is the number one cause of 'my MacBook won't charge' calls we get in Dubai. Fine sand and grit pack into the USB-C port and block the pins — often a clean fixes it without any parts.";
  if (cat.includes("cost guide"))
    return "The most common question we get from Dubai customers is 'how much does it actually cost?' — so the page above has exact numbers, not ranges, and no hidden diagnostic fees.";
  if (t.includes("buying guide") || cat.includes("buying guide"))
    return "Buying a second-hand Mac in Dubai? Bring it to us before paying — a 30-minute bench check spots dead pixels, swollen batteries, and logic board faults that sellers don't mention.";
  return "This is one of the repairs we handle most at our Dubai Media City workshop. Walk-ins are welcome and most jobs are diagnosed and quoted within the hour.";
}

function getServiceDetail(t: string, cat: string): string {
  if (t.includes("battery"))
    return "We stock matched-capacity batteries for every MacBook, iPhone, and iPad model. Each cell is cycle-tested before fitting and we show you the health reading on the bench before handover.";
  if (t.includes("screen") || t.includes("lines") || t.includes("flicker") || t.includes("no display") || t.includes("black screen"))
    return "We carry display panels for MacBook Air, MacBook Pro, iMac, iPad, and iPhone. Most screen jobs are done same day, with original brightness, resolution, and True Tone restored where supported.";
  if (t.includes("data") || t.includes("recovery"))
    return "SSD firmware failure and physical damage need different approaches — we tell you which before quoting. No data recovered means no charge.";
  if (t.includes("keyboard"))
    return "We stock keycap sets, top-case assemblies, and full keyboards for butterfly and scissor models. Single key or full deck, we carry parts for both.";
  if (t.includes("water") || t.includes("liquid"))
    return "Get it off, don't plug it in, and bring it the same day if you can. We assess under magnification and give you a straight verdict before starting any work.";
  if (t.includes("slow") || t.includes("sluggish"))
    return "Storage is almost always the fix. An SSD upgrade from AED 500 turns a sluggish old MacBook into a different machine — data migration is included and most are done same day.";
  if (t.includes("not turning") || t.includes("won't turn") || t.includes("dead"))
    return "We work through it in order: charger, battery, SMC reset, then board-level. You get a written quote before we touch anything, and a warranty on whatever we fix.";
  if (t.includes("overheating") || t.includes("fan noise") || t.includes("loud fan"))
    return "A full thermal service — fan clean, new thermal paste, vent clearance — typically drops operating temps by 15 to 25 degrees. Most take under an hour and the difference is immediate.";
  if (t.includes("ssd") || t.includes("upgrade") || t.includes("storage"))
    return "We source spec-matched Apple SSDs and compatible NVMe drives for each model. Data migration is always included — same files, faster drive, same-day if the part's in stock.";
  if (t.includes("charging") || t.includes("usb-c") || t.includes("magsafe"))
    return "We test the cable, charger block, and port in sequence before quoting. MagSafe and USB-C port repairs from AED 350, most done the same day you bring it in.";
  if (t.includes("hinge"))
    return "A cracked hinge usually puts the display cable at risk too. We check the cable and bezel at the same time so you're not back in a second time.";
  if (t.includes("logic board") || t.includes("motherboard") || t.includes("gpu") || t.includes("graphic"))
    return "Board-level work goes under the microscope — Shafiq traces faults to the component and repairs them, not just replaces the whole board. Free diagnosis, written quote before we start.";
  if (cat.includes("cost guide"))
    return "All prices on that page are live and accurate — what you see is what you pay at our Dubai Media City workshop. No 'call us for a quote.'";
  return "Every repair gets a written quote before we start and a warranty on the work. Most faults diagnosed and quoted within the hour of walking in.";
}

function generateCaption(post: Post): string {
  const url = `${BASE_URL}${post.slug.startsWith("/") ? post.slug : "/" + post.slug}`;
  const t = post.title.toLowerCase();
  const cat = post.category.toLowerCase();

  const shortTitle = post.title
    .replace(/\s+Dubai\??\s+\d{4}.*$/i, "")
    .replace(/\s+\d{4}[:\s–\-].*$/i, "")
    .replace(/\s+Dubai\??$/i, "")
    .trim();

  const cleanExcerpt = post.excerpt
    .replace(/\. Our Dubai workshop.*$/i, "")
    .replace(/\. (?:A full|Repair|Service|All repairs?)?(?:\s+(?:thermal|battery|screen))?\s*(?:service|repairs?)?(?:s)?\s+(?:starts?|from|is included|are done).*$/i, "")
    .replace(/ at our .*$/i, "")
    .replace(/\.$/, "")
    .trim();

  const priceMatch = post.excerpt.match(/(?:from |starts from |repair from |starting from )(AED \d{2,4})/i);
  const priceNote = priceMatch ? ` Starts from ${priceMatch[1]}.` : "";

  const emoji = getEmoji(t);
  const hashtags = getHashtags(t);
  const dubaiCtx = getDubaiContext(t, cat);
  const serviceDetail = getServiceDetail(t, cat);

  const trust = "✅ Free diagnosis  ✅ Same-day repair  ✅ Up to 12 months warranty  ✅ Free pickup across Dubai";
  const nap = `📍 Concord Tower, Dubai Media City\n📞 055 741 3706\n🔗 ${url}`;

  let caption = `${emoji} ${shortTitle}\n\n${cleanExcerpt}.\n\n${dubaiCtx}\n\n${serviceDetail}${priceNote}\n\n${trust}\n\n${nap}\n\n${hashtags}`;

  if (caption.length > 750) {
    const cut = caption.slice(0, 748);
    const lb = Math.max(cut.lastIndexOf("\n"), cut.lastIndexOf(". "), cut.lastIndexOf(" "));
    caption = cut.slice(0, lb > 550 ? lb : 748) + "…";
  }

  return caption;
}

// ─── UI primitives ─────────────────────────────────────────────────────────────

function CopyBtn({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); setDone(true); setTimeout(() => setDone(false), 1800); } catch {}
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1 text-[12px] font-semibold text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
    >
      {done ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
      {done ? "Copied!" : label}
    </button>
  );
}

// ─── Post card ─────────────────────────────────────────────────────────────────

type PostedInfo = { date: string; type: GbpType };

function PostCard({ post, defaultType, postedInfo, onMark, onUnmark }: {
  post: Post;
  defaultType: GbpType;
  postedInfo: PostedInfo | null;
  onMark: (type: GbpType) => void;
  onUnmark: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [type, setType] = useState<GbpType>(postedInfo?.type ?? defaultType);
  const [caption, setCaption] = useState(() => generateCaption(post));

  const url = `${BASE_URL}${post.slug.startsWith("/") ? post.slug : "/" + post.slug}`;
  const charCount = caption.length;
  const charColor = charCount > 750 ? "text-red-400" : charCount > 700 ? "text-yellow-400" : "text-text-muted";

  return (
    <div className={`rounded-xl border overflow-hidden transition-colors ${postedInfo ? "border-green-500/20 bg-green-500/3" : "border-border bg-bg"}`}>
      <div
        className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-bg-alt transition-colors select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${TYPE_COLORS[type]}`}>
              {TYPE_LABELS[type]}
            </span>
            {postedInfo && (
              <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400">
                <CalendarCheck size={10} /> Posted {postedInfo.date}
              </span>
            )}
            <span className="text-[10px] text-text-muted truncate">{post.category}</span>
          </div>
          <p className="m-0 text-[13px] font-medium text-text leading-snug line-clamp-2">{post.title}</p>
        </div>
        <div className="shrink-0 pt-1 text-text-muted">
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border px-4 pt-3 pb-4 space-y-3">
          {/* Type selector */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-text-muted font-medium">GBP type:</span>
              {(["UPDATE", "OFFER", "EVENT"] as GbpType[]).map((tp) => (
                <button
                  key={tp}
                  onClick={() => setType(tp)}
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide transition-colors ${
                    type === tp ? TYPE_COLORS[tp] : "border-border text-text-muted hover:border-border-strong hover:text-text"
                  }`}
                >
                  {TYPE_LABELS[tp]}
                </button>
              ))}
            </div>
            <p className="m-0 text-[11px] text-text-muted">{TYPE_TIPS[type]}</p>
          </div>

          {/* Caption textarea */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-text-muted">GBP Caption — paste this into Google Business</span>
              <span className={`text-[11px] font-mono tabular-nums ${charColor}`}>{charCount} / 750</span>
            </div>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={13}
              className="w-full rounded-lg border border-border bg-bg-alt px-3 py-2.5 text-[12.5px] leading-relaxed text-text font-mono resize-y focus:outline-none focus:border-accent/50"
            />
            {charCount > 750 && (
              <p className="mt-1 text-[11px] text-red-400">Caption is over 750 characters — trim the last paragraph before pasting.</p>
            )}
          </div>

          {/* Action row */}
          <div className="flex flex-wrap items-center gap-2">
            <CopyBtn text={caption} label="Copy caption" />
            <CopyBtn text={url} label="Copy URL" />
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg px-2.5 py-1 text-[12px] font-semibold text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
            >
              <ExternalLink size={13} /> View page
            </a>
            <div className="ml-auto">
              {postedInfo ? (
                <button
                  onClick={onUnmark}
                  className="inline-flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/5 px-2.5 py-1 text-[12px] font-semibold text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <CalendarX size={13} /> Unmark posted
                </button>
              ) : (
                <button
                  onClick={() => onMark(type)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/10 px-2.5 py-1 text-[12px] font-semibold text-green-400 hover:bg-green-500/20 transition-colors"
                >
                  <CalendarCheck size={13} /> Mark as posted today
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function GbpPostsAdmin() {
  const [filter, setFilter] = useState<"all" | "unposted" | "posted">("unposted");
  const [search, setSearch] = useState("");
  const [posted, setPosted] = useState<Record<string, PostedInfo>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("gbp-posts-tracker");
      if (raw) setPosted(JSON.parse(raw));
    } catch {}
  }, []);

  const savePosted = useCallback((next: Record<string, PostedInfo>) => {
    setPosted(next);
    try { localStorage.setItem("gbp-posts-tracker", JSON.stringify(next)); } catch {}
  }, []);

  const handleMark = useCallback((slug: string, type: GbpType) => {
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    savePosted({ ...posted, [slug]: { date: today, type } });
  }, [posted, savePosted]);

  const handleUnmark = useCallback((slug: string) => {
    const next = { ...posted };
    delete next[slug];
    savePosted(next);
  }, [posted, savePosted]);

  const defaultTypes = useMemo(() => {
    const map: Record<string, GbpType> = {};
    for (const post of POSTS) map[post.slug] = detectType(post);
    return map;
  }, []);

  const filtered = useMemo(() => {
    let list = [...POSTS];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (filter === "unposted") list = list.filter((p) => !posted[p.slug]);
    if (filter === "posted") list = list.filter((p) => !!posted[p.slug]);
    return list;
  }, [filter, search, posted]);

  const doneCount = Object.keys(posted).length;
  const totalCount = POSTS.length;

  return (
    <div className="space-y-5">
      <div>
        <h1 className="m-0 text-[22px] font-bold text-text">GBP Posts</h1>
        <p className="m-0 mt-1 text-[13px] text-text-muted">
          Ready-to-paste Google Business captions for all {totalCount} posts.{" "}
          <span className="font-semibold text-green-400">{doneCount} posted</span>
          {" · "}{totalCount - doneCount} remaining.
        </p>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-bg-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${totalCount ? (doneCount / totalCount) * 100 : 0}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="search"
          placeholder="Search posts…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-8 rounded-lg border border-border bg-bg-alt px-3 text-[13px] text-text placeholder:text-text-muted focus:outline-none focus:border-accent/50 w-52"
        />
        {(["all", "unposted", "posted"] as const).map((f) => {
          const count = f === "all" ? totalCount : f === "posted" ? doneCount : totalCount - doneCount;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-8 rounded-lg border px-3 text-[12px] font-semibold capitalize transition-colors ${
                filter === f ? "border-accent/40 bg-accent/10 text-accent" : "border-border bg-bg text-text-muted hover:text-text"
              }`}
            >
              {f} ({count})
            </button>
          );
        })}
      </div>

      {/* How-to */}
      <div className="rounded-lg border border-border bg-bg-alt px-4 py-3 text-[12px] text-text-muted leading-relaxed">
        <strong className="text-text">How to post: </strong>
        Open{" "}
        <a href="https://business.google.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">
          business.google.com
        </a>{" "}
        → your listing → <strong className="text-text">Add update</strong> → choose type (What's New / Offer / Event) → paste the caption → add a photo → Post.
        {" "}Caption stays under 750 characters so the full text is visible in the feed without a "See more" cut.
        {" "}Mark each post done so you don't double-post. Tracker is saved in this browser.
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="py-10 text-center text-[13px] text-text-muted">
            {filter === "posted" && doneCount === 0 ? "No posts marked as posted yet." : "No posts match this filter."}
          </p>
        )}
        {filtered.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
            defaultType={defaultTypes[post.slug] ?? "UPDATE"}
            postedInfo={posted[post.slug] ?? null}
            onMark={(type) => handleMark(post.slug, type)}
            onUnmark={() => handleUnmark(post.slug)}
          />
        ))}
      </div>
    </div>
  );
}
