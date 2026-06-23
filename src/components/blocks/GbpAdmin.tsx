"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Loader2, ArrowLeft, Link2, Link2Off, RefreshCw, Star, MessageSquare, Send,
  Trash2, Plus, X, MapPin, Phone, Globe, Clock, BarChart2, Megaphone, Info,
  CheckCircle2, AlertTriangle, ChevronDown, ChevronUp, Eye, Image as ImageIcon,
  HelpCircle, TrendingUp, TrendingDown, Minus, Upload, Check,
} from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────
type Status = { connected: boolean; locationName?: string; locationId?: string; connectedAt?: string };
type StarRating = "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
const STARS: Record<StarRating, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

type Review = {
  name: string; reviewId: string;
  reviewer: { displayName: string; isAnonymous?: boolean };
  starRating: StarRating; comment?: string;
  createTime: string; updateTime: string;
  reviewReply?: { comment: string; updateTime: string };
};
type Post = {
  name: string; topicType: string; summary?: string;
  createTime: string; updateTime: string;
  callToAction?: { actionType: string; url?: string };
  searchUrl?: string;
};
type BusinessInfo = {
  title?: string; description?: string;
  phoneNumbers?: { primaryPhone?: string };
  websiteUri?: string;
  regularHours?: { periods: HourPeriod[] };
  categories?: { primaryCategory?: { displayName: string } };
};
type HourPeriod = { openDay: string; openTime: string; closeDay: string; closeTime: string };
type InsightSeries = { dailyMetric: string; timeSeries: { datedValues: { date: { year: number; month: number; day: number }; value: string }[] } };
type MediaItem = { name: string; googleUrl?: string; thumbnailUrl?: string; createTime?: string; sourceUrl?: string };
type QaItem = {
  name: string; text: string; createTime: string; updateTime: string; upvoteCount: number;
  author: { displayName: string; type: string };
  topAnswers?: { name: string; text: string; updateTime: string; author: { displayName: string; type: string } }[];
  totalAnswerCount?: number;
};

const TABS = ["Overview", "Reviews", "Posts", "Business Info", "Photos", "Q&A"] as const;
type Tab = (typeof TABS)[number];
const CTA_TYPES = ["LEARN_MORE", "BOOK", "ORDER", "SHOP", "SIGN_UP", "CALL"] as const;
const DAYS_ORDER = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

// ── Helpers ───────────────────────────────────────────────────────────────────
function StarRow({ n, max = 5 }: { n: number; max?: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} size={13} fill={i < n ? "#fbbf24" : "none"} stroke={i < n ? "#fbbf24" : "#d1d5db"} />
      ))}
    </span>
  );
}

function fmtDate(s: string) {
  try { return new Date(s).toLocaleDateString("en-AE", { day: "numeric", month: "short", year: "numeric" }); }
  catch { return s; }
}

function daysSince(s: string): number {
  return Math.floor((Date.now() - new Date(s).getTime()) / 86_400_000);
}

function sumSeries(series: InsightSeries[], metric: string): number {
  const s = series.find((x) => x.dailyMetric === metric);
  return s ? s.timeSeries.datedValues.reduce((a, v) => a + (Number(v.value) || 0), 0) : 0;
}

// Sentiment based on star rating
function sentiment(rating: StarRating): { label: string; color: string; bg: string } {
  const n = STARS[rating];
  if (n >= 5) return { label: "Positive", color: "#16a34a", bg: "rgba(22,163,74,0.10)" };
  if (n >= 3) return { label: "Neutral", color: "#d97706", bg: "rgba(217,119,6,0.10)" };
  return { label: "Negative", color: "#dc2626", bg: "rgba(220,38,38,0.10)" };
}

// Reply templates based on star rating
function replyTemplates(rating: StarRating, name: string): string[] {
  const n = STARS[rating];
  const first = name.split(" ")[0];
  if (n >= 5) return [
    `Thank you so much, ${first}! 🙏 We're thrilled you had such a great experience with us. Your kind words mean the world to our team. We look forward to serving you again!`,
    `Wow, thank you ${first}! Reviews like yours keep us motivated. We always aim to provide the best Apple repair service in Dubai — glad we delivered! See you next time.`,
    `We really appreciate your 5-star review, ${first}! It was a pleasure working on your device. Thank you for trusting MacBook Repair Dubai — we're here whenever you need us.`,
  ];
  if (n >= 3) return [
    `Thank you for your feedback, ${first}. We're glad your device is working well. If there's anything we could have done better, please don't hesitate to reach out directly.`,
    `We appreciate you taking the time to leave a review, ${first}. We always strive to improve — your feedback helps us do that. Thank you for choosing us!`,
    `Thanks for your honest review, ${first}. We value your experience and would love the chance to make it a 5-star one next time. Feel free to contact us anytime.`,
  ];
  return [
    `We sincerely apologise for your experience, ${first}. This is not the standard we hold ourselves to. Please contact us directly at info@macbook-repair-dubai.ae so we can make this right.`,
    `Thank you for bringing this to our attention, ${first}. We take every piece of feedback seriously and want to resolve your concerns. Please reach out to us directly.`,
    `We're very sorry to hear this, ${first}. Your satisfaction is our priority and we'd like the opportunity to address what went wrong. Please contact us so we can help.`,
  ];
}

// SVG ring for character count
function RingCounter({ value, max, size = 32 }: { value: number; max: number; size?: number }) {
  const r = (size - 4) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);
  const color = pct >= 0.95 ? "#ef4444" : pct >= 0.8 ? "#f59e0b" : "#10b981";
  const remaining = max - value;
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border,#e5e7eb)" strokeWidth={3} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={3}
          strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s, stroke 0.2s" }} />
      </svg>
      {pct >= 0.8 && (
        <span className="absolute text-[9px] font-bold" style={{ color }}>{remaining}</span>
      )}
    </div>
  );
}

// Trend arrow for metric comparison
function TrendArrow({ current, previous }: { current: number; previous: number }) {
  if (previous === 0) return <Minus size={12} className="text-text-faint" />;
  const pct = Math.round(((current - previous) / previous) * 100);
  if (pct > 0) return <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-green-600"><TrendingUp size={12} />+{pct}%</span>;
  if (pct < 0) return <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-red-500"><TrendingDown size={12} />{pct}%</span>;
  return <Minus size={12} className="text-text-faint" />;
}

const inp = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none";
const sel = "w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text focus:border-accent focus:outline-none";

// ── Main ──────────────────────────────────────────────────────────────────────
export default function GbpAdmin() {
  const [status, setStatus] = useState<Status | null>(null);
  const [tab, setTab] = useState<Tab>("Overview");
  const [err, setErr] = useState("");
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  const loadStatus = useCallback(async () => {
    const res = await fetch("/api/admin/gbp/status/", { cache: "no-store" });
    if (res.status === 401) { window.location.href = "/admin/login"; return; }
    setStatus(await res.json());
    setLastRefresh(Date.now());
  }, []);

  // [10] Auto-refresh every 5 min when tab is visible
  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("connected")) window.history.replaceState({}, "", "/admin/gbp");
    if (sp.get("error")) { setErr(`OAuth error: ${sp.get("error")}`); window.history.replaceState({}, "", "/admin/gbp"); }
    loadStatus();

    const timer = setInterval(() => {
      if (document.visibilityState === "visible") loadStatus();
    }, 5 * 60 * 1000);
    return () => clearInterval(timer);
  }, [loadStatus]);

  async function disconnect() {
    if (!confirm("Disconnect Google Business Profile?")) return;
    await fetch("/api/admin/gbp/disconnect/", { method: "POST" });
    await loadStatus();
  }

  const minsAgo = Math.floor((Date.now() - lastRefresh) / 60_000);

  if (!status) return <div className="flex justify-center py-2xl"><Loader2 className="animate-spin text-text-faint" /></div>;

  return (
    <div className="mx-auto max-w-content">
      {/* Header */}
      <div className="mb-lg flex flex-wrap items-start justify-between gap-sm">
        <div className="flex items-center gap-3">
          <a href="/admin" className="inline-flex items-center gap-1 text-[13px] text-text-muted hover:text-text"><ArrowLeft size={14} /> Admin</a>
          <h1 className="m-0 text-[24px] text-text">Google Business Profile</h1>
        </div>
        <div className="flex items-center gap-2">
          {/* [10] last updated indicator */}
          <span className="text-[11px] text-text-faint">{minsAgo === 0 ? "Updated just now" : `Updated ${minsAgo}m ago`}</span>
          <button onClick={loadStatus} className="rounded-md border border-border p-1.5 text-text-muted hover:text-text"><RefreshCw size={14} /></button>
          {status.connected ? (
            <>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-whatsapp/30 bg-whatsapp/10 px-3 py-1 text-[12px] font-semibold text-whatsapp">
                <CheckCircle2 size={13} /> Connected
              </span>
              <button onClick={disconnect} className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[12px] text-danger hover:bg-danger/5">
                <Link2Off size={13} /> Disconnect
              </button>
            </>
          ) : (
            <a href="/api/admin/gbp/connect/" className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-white hover:opacity-90">
              <Link2 size={14} /> Connect Google Account
            </a>
          )}
        </div>
      </div>

      {err && (
        <div className="mb-md flex items-center gap-2 rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">
          <AlertTriangle size={14} /> {err}
          <button onClick={() => setErr("")} className="ml-auto"><X size={14} /></button>
        </div>
      )}

      {!status.connected ? <NotConnected /> : (
        <>
          {status.locationName && (
            <div className="mb-md flex items-center gap-2 text-[13px] text-text-muted">
              <MapPin size={14} className="text-accent" />
              <span className="font-medium text-text">{status.locationName}</span>
              {status.connectedAt && <span className="text-text-faint">· connected {fmtDate(status.connectedAt)}</span>}
            </div>
          )}

          {/* Tab bar */}
          <div className="mb-lg flex gap-0 overflow-x-auto border-b border-border">
            {TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)}
                className={`whitespace-nowrap px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors ${tab === t ? "border-accent text-accent" : "border-transparent text-text-muted hover:text-text"}`}>
                {t}
              </button>
            ))}
          </div>

          {tab === "Overview" && <OverviewTab locationName={status.locationName} />}
          {tab === "Reviews" && <ReviewsTab />}
          {tab === "Posts" && <PostsTab locationName={status.locationName} />}
          {tab === "Business Info" && <InfoTab />}
          {tab === "Photos" && <PhotosTab />}
          {tab === "Q&A" && <QaTab />}
        </>
      )}
    </div>
  );
}

// ── Not connected ─────────────────────────────────────────────────────────────
function NotConnected() {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-xl text-center">
      <div className="mx-auto mb-md flex h-16 w-16 items-center justify-center rounded-full bg-bg-alt">
        <MapPin size={28} className="text-text-faint" />
      </div>
      <h2 className="mb-2 text-[18px] font-semibold text-text">Connect your Google Business Profile</h2>
      <p className="mx-auto mb-lg max-w-sm text-[14px] text-text-muted">
        Reply to reviews, publish posts, update business info, upload photos, and track performance — all from here.
      </p>
      <div className="mb-lg grid gap-2 text-left max-w-sm mx-auto">
        {[["Read & reply to Google reviews", "★"], ["Publish posts & offers", "📢"], ["Update phone, hours, description", "✏️"], ["Track impressions, calls, clicks", "📊"]] .map(([text, icon]) => (
          <div key={text} className="flex items-center gap-3 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text">
            <span>{icon}</span>{text}
          </div>
        ))}
      </div>
      <div className="mb-sm rounded-md border border-border bg-bg-alt px-3 py-2 text-left text-[12px] text-text-muted">
        <strong className="text-text">Before connecting:</strong> enable the Business Profile API in your <span className="font-mono text-accent">Google Cloud Console</span> and add <span className="font-mono text-text">/api/admin/gbp/callback</span> as an authorized redirect URI.
      </div>
      <a href="/api/admin/gbp/connect/" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 text-[14px] font-semibold text-white hover:opacity-90">
        <Link2 size={15} /> Connect Google Account
      </a>
    </div>
  );
}

// ── Overview tab ──────────────────────────────────────────────────────────────
function OverviewTab({ locationName }: { locationName?: string }) {
  const [series, setSeries] = useState<InsightSeries[] | null>(null);
  const [previous, setPrevious] = useState<InsightSeries[] | null>(null);
  const [reviews, setReviews] = useState<{ averageRating: number; totalReviewCount: number } | null>(null);
  const [days, setDays] = useState(28);
  const [loading, setLoading] = useState(true);
  const [insightErr, setInsightErr] = useState("");

  const load = useCallback(async (d: number) => {
    setLoading(true); setInsightErr("");
    const [ir, rr] = await Promise.all([
      fetch(`/api/admin/gbp/insights/?days=${d}&compare=1`, { cache: "no-store" }).then((r) => r.json()).catch(() => ({ ok: false })),
      fetch("/api/admin/gbp/reviews/", { cache: "no-store" }).then((r) => r.json()).catch(() => ({ ok: false })),
    ]);
    if (ir.ok) { setSeries(ir.series); setPrevious(ir.previous || []); }
    else setInsightErr(ir.error || "Insights not available");
    if (rr.ok) setReviews({ averageRating: rr.averageRating, totalReviewCount: rr.totalReviewCount });
    setLoading(false);
  }, []);

  useEffect(() => { load(days); }, [load, days]);

  const cur = series || [];
  const prev = previous || [];

  const metrics = [
    { label: "Search views", cur: sumSeries(cur, "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH") + sumSeries(cur, "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), prev: sumSeries(prev, "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH") + sumSeries(prev, "BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), color: "#0ea5e9" },
    { label: "Maps views", cur: sumSeries(cur, "BUSINESS_IMPRESSIONS_DESKTOP_MAPS") + sumSeries(cur, "BUSINESS_IMPRESSIONS_MOBILE_MAPS"), prev: sumSeries(prev, "BUSINESS_IMPRESSIONS_DESKTOP_MAPS") + sumSeries(prev, "BUSINESS_IMPRESSIONS_MOBILE_MAPS"), color: "#8b5cf6" },
    { label: "Direction requests", cur: sumSeries(cur, "BUSINESS_DIRECTION_REQUESTS"), prev: sumSeries(prev, "BUSINESS_DIRECTION_REQUESTS"), color: "#f59e0b" },
    { label: "Call clicks", cur: sumSeries(cur, "CALL_CLICKS"), prev: sumSeries(prev, "CALL_CLICKS"), color: "#10b981" },
    { label: "Website clicks", cur: sumSeries(cur, "WEBSITE_CLICKS"), prev: sumSeries(prev, "WEBSITE_CLICKS"), color: "#ef4444" },
  ];

  return (
    <div>
      <div className="mb-md flex items-center justify-between">
        <h2 className="m-0 text-[16px] font-semibold text-text">Performance · {locationName || "Your location"}</h2>
        <div className="flex gap-1.5">
          {[7, 28, 90].map((d) => (
            <button key={d} onClick={() => { setDays(d); load(d); }}
              className={`rounded-md px-2.5 py-1 text-[12px] ${days === d ? "bg-accent text-white" : "border border-border text-text-muted hover:text-text"}`}>
              {d}d
            </button>
          ))}
        </div>
      </div>

      {insightErr && (
        <div className="mb-md flex items-start gap-2 rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text-muted">
          <Info size={14} className="mt-0.5 shrink-0 text-accent" />{insightErr}
        </div>
      )}

      {loading ? <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div> : (
        <>
          {reviews && (
            <div className="mb-md grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-bg-card p-md">
                <p className="m-0 mb-1 text-[12px] text-text-faint">Average rating</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-[28px] font-bold text-text">{reviews.averageRating.toFixed(1)}</span>
                  <StarRow n={Math.round(reviews.averageRating)} />
                </div>
              </div>
              <div className="rounded-xl border border-border bg-bg-card p-md">
                <p className="m-0 mb-1 text-[12px] text-text-faint">Total reviews</p>
                <span className="text-[28px] font-bold text-text">{reviews.totalReviewCount.toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* [7] Metric cards with trend arrows */}
          <div className="mb-md grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-bg-card p-md">
                <p className="m-0 mb-1 text-[11px] text-text-faint">{m.label}</p>
                <span className="text-[22px] font-bold" style={{ color: m.color }}>{m.cur.toLocaleString()}</span>
                <div className="mt-1"><TrendArrow current={m.cur} previous={m.prev} /></div>
                <p className="m-0 mt-0.5 text-[10px] text-text-faint">vs prev {days}d</p>
              </div>
            ))}
          </div>

          {cur.length > 0 && <TrendChart series={cur} days={days} />}
        </>
      )}
    </div>
  );
}

function TrendChart({ series, days }: { series: InsightSeries[]; days: number }) {
  const s = series.find((x) => x.dailyMetric === "BUSINESS_IMPRESSIONS_MOBILE_SEARCH" || x.dailyMetric === "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH");
  if (!s?.timeSeries?.datedValues?.length) return null;
  const vals = s.timeSeries.datedValues.slice(-days);
  const max = Math.max(...vals.map((v) => Number(v.value) || 0), 1);
  return (
    <div className="rounded-xl border border-border bg-bg-card p-md">
      <p className="m-0 mb-3 text-[12px] font-semibold text-text">Search impressions — last {days} days</p>
      <div className="flex h-24 items-end gap-px">
        {vals.map((v, i) => (
          <div key={i} className="group relative flex-1" title={`${v.date.month}/${v.date.day}: ${v.value}`}>
            <div className="w-full rounded-t-sm bg-accent/40 group-hover:bg-accent transition-colors"
              style={{ height: Math.max(2, Math.round(((Number(v.value) || 0) / max) * 96)) }} />
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-text-faint">
        {vals[0] && <span>{vals[0].date.month}/{vals[0].date.day}</span>}
        {vals[vals.length - 1] && <span>{vals[vals.length - 1].date.month}/{vals[vals.length - 1].date.day}</span>}
      </div>
    </div>
  );
}

// ── Reviews tab ───────────────────────────────────────────────────────────────
function ReviewsTab() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [busy, setBusy] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  // [5] Bulk reply
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [bulkText, setBulkText] = useState("");
  const [bulkBusy, setBulkBusy] = useState(false);
  const [bulkDone, setBulkDone] = useState(0);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    const res = await fetch("/api/admin/gbp/reviews/", { cache: "no-store" });
    const d = await res.json();
    if (d.ok) setReviews(d.reviews || []);
    else setErr(d.error || "Failed to load reviews");
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function submitReply(reviewId: string, text: string) {
    setBusy(true);
    const res = await fetch(`/api/admin/gbp/reviews/${reviewId}/reply/`, {
      method: "PUT", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: text }),
    });
    const d = await res.json();
    if (d.ok) { setReplyingTo(null); setReplyText(""); await load(); }
    else setErr(d.error || "Reply failed");
    setBusy(false);
  }

  async function deleteReply(reviewId: string) {
    if (!confirm("Delete this reply from Google?")) return;
    setBusy(true);
    await fetch(`/api/admin/gbp/reviews/${reviewId}/reply/`, { method: "DELETE" });
    await load(); setBusy(false);
  }

  async function sendBulkReplies() {
    if (!bulkText.trim() || selected.size === 0) return;
    setBulkBusy(true); setBulkDone(0);
    for (const id of selected) {
      await fetch(`/api/admin/gbp/reviews/${id}/reply/`, {
        method: "PUT", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: bulkText }),
      }).catch(() => {});
      setBulkDone((n) => n + 1);
    }
    setSelected(new Set()); setBulkText(""); setBulkBusy(false);
    await load();
  }

  const noReply = reviews.filter((r) => !r.reviewReply);

  if (loading) return <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div>;

  return (
    <div>
      <div className="mb-md flex items-center justify-between">
        <h2 className="m-0 text-[16px] font-semibold text-text">Reviews <span className="text-[13px] font-normal text-text-faint">({reviews.length})</span></h2>
        <button onClick={load} className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[12px] text-text-muted hover:text-text">
          <RefreshCw size={13} /> Refresh
        </button>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {noReply.length > 0 && (
        <div className="mb-md flex items-center justify-between rounded-md border border-amber-400/30 bg-amber-50/20 px-3 py-2 text-[13px]">
          <span className="text-amber-700 dark:text-amber-400"><AlertTriangle size={13} className="mr-1.5 inline" />{noReply.length} review{noReply.length > 1 ? "s" : ""} awaiting reply</span>
          {selected.size === 0 ? (
            <button onClick={() => setSelected(new Set(noReply.map((r) => r.reviewId)))}
              className="text-[12px] text-accent hover:underline">Select all unanswered</button>
          ) : (
            <button onClick={() => setSelected(new Set())} className="text-[12px] text-text-muted hover:underline">Deselect all</button>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3">
        {reviews.map((r) => {
          const stars = STARS[r.starRating] || 5;
          const sent = sentiment(r.starRating);
          const isExp = expanded === r.reviewId;
          const isReplying = replyingTo === r.reviewId;
          const isSelected = selected.has(r.reviewId);
          const templates = replyTemplates(r.starRating, r.reviewer.displayName);
          const daysSinceCreated = daysSince(r.createTime);
          const daysSinceReply = r.reviewReply ? daysSince(r.reviewReply.updateTime) : null;

          return (
            <div key={r.reviewId}
              className={`rounded-xl border bg-bg-card transition-colors ${isSelected ? "border-accent/50 bg-accent/5" : !r.reviewReply ? "border-amber-400/40" : "border-border"}`}>
              <div className="p-md">
                <div className="flex items-start gap-3">
                  {/* [5] Bulk checkbox — only on unanswered */}
                  {!r.reviewReply && (
                    <input type="checkbox" checked={isSelected}
                      onChange={(e) => setSelected((prev) => { const n = new Set(prev); e.target.checked ? n.add(r.reviewId) : n.delete(r.reviewId); return n; })}
                      className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent" />
                  )}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg-alt text-[15px] font-bold text-text">
                    {r.reviewer.displayName.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[14px] font-semibold text-text">{r.reviewer.displayName}</span>
                      {/* [2] Sentiment badge */}
                      <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ color: sent.color, background: sent.bg }}>{sent.label}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <StarRow n={stars} />
                      <span className="text-[11px] text-text-faint">{fmtDate(r.createTime)}</span>
                      {/* [3] Reply time tracker */}
                      {r.reviewReply ? (
                        <span className="text-[11px] text-whatsapp">Replied {daysSinceReply === 0 ? "today" : `${daysSinceReply}d ago`}</span>
                      ) : (
                        <span className={`text-[11px] font-medium ${daysSinceCreated > 3 ? "text-danger" : "text-amber-500"}`}>
                          Awaiting {daysSinceCreated}d
                        </span>
                      )}
                    </div>
                  </div>
                  <button onClick={() => setExpanded(isExp ? null : r.reviewId)} className="shrink-0 text-text-faint hover:text-text">
                    {isExp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {r.comment && (
                  <p className={`m-0 mt-2 pl-[60px] text-[13px] text-text-muted ${!isExp && r.comment.length > 160 ? "line-clamp-2" : ""}`}>
                    {r.comment}
                  </p>
                )}

                {/* Existing reply */}
                {r.reviewReply && (
                  <div className="mt-3 ml-[60px] rounded-md border border-border bg-bg-alt px-3 py-2">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-text">Your reply · {fmtDate(r.reviewReply.updateTime)}</span>
                      <button onClick={() => deleteReply(r.reviewId)} disabled={busy}
                        className="text-[11px] text-danger hover:underline disabled:opacity-50">
                        <Trash2 size={11} className="inline mr-0.5" />Delete
                      </button>
                    </div>
                    <p className="m-0 text-[13px] text-text-muted">{r.reviewReply.comment}</p>
                  </div>
                )}

                {/* Reply area */}
                {!r.reviewReply && !isReplying && (
                  <button onClick={() => { setReplyingTo(r.reviewId); setReplyText(""); }}
                    className="mt-3 ml-[60px] inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[12px] text-text-muted hover:border-accent hover:text-accent">
                    <MessageSquare size={13} /> Reply
                  </button>
                )}

                {isReplying && (
                  <div className="mt-3 ml-[60px]">
                    {/* [1] AI template suggestions */}
                    <div className="mb-2 flex flex-col gap-1.5">
                      <p className="text-[11px] font-semibold text-text-faint">Quick templates — click to use:</p>
                      {templates.map((t, i) => (
                        <button key={i} onClick={() => setReplyText(t)}
                          className="rounded-md border border-border bg-bg-alt px-3 py-1.5 text-left text-[12px] text-text-muted hover:border-accent hover:text-text line-clamp-2 transition-colors">
                          {t}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-end gap-2">
                      <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} rows={3}
                        placeholder="Write your reply…"
                        className="flex-1 rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none resize-none" />
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => submitReply(r.reviewId, replyText)} disabled={busy || !replyText.trim()}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50">
                        <Send size={12} /> {busy ? "Posting…" : "Post reply"}
                      </button>
                      <button onClick={() => setReplyingTo(null)} className="text-[12px] text-text-muted hover:text-text">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {reviews.length === 0 && <p className="py-xl text-center text-[14px] text-text-faint">No reviews yet.</p>}
      </div>

      {/* [5] Bulk reply floating bar */}
      {selected.size > 0 && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-xl px-4">
          <div className="rounded-xl border border-accent/30 bg-bg-card p-md shadow-2xl">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-text">{selected.size} review{selected.size > 1 ? "s" : ""} selected</span>
              <button onClick={() => setSelected(new Set())} className="text-text-muted hover:text-text"><X size={14} /></button>
            </div>
            <textarea value={bulkText} onChange={(e) => setBulkText(e.target.value)} rows={2}
              placeholder="Reply to all selected…"
              className="mb-2 w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none resize-none" />
            <div className="flex items-center gap-2">
              <button onClick={sendBulkReplies} disabled={bulkBusy || !bulkText.trim()}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">
                {bulkBusy ? <><Loader2 size={13} className="animate-spin" /> {bulkDone}/{selected.size}</> : <><Send size={13} /> Reply to all {selected.size}</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Posts tab ─────────────────────────────────────────────────────────────────
function PostsTab({ locationName }: { locationName?: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [creating, setCreating] = useState(false);
  const [busy, setBusy] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [draft, setDraft] = useState({ topicType: "STANDARD", summary: "", ctaType: "LEARN_MORE", ctaUrl: "", addCta: false });

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/admin/gbp/posts/", { cache: "no-store" });
    const d = await res.json();
    if (d.ok) setPosts(d.posts || []);
    else setErr(d.error || "Failed to load posts");
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function publish() {
    if (!draft.summary.trim()) return;
    setBusy(true);
    const payload: Record<string, unknown> = { topicType: draft.topicType, summary: draft.summary };
    if (draft.addCta && draft.ctaType) payload.callToAction = { actionType: draft.ctaType, ...(draft.ctaUrl ? { url: draft.ctaUrl } : {}) };
    const res = await fetch("/api/admin/gbp/posts/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const d = await res.json();
    if (d.ok) { setCreating(false); setDraft({ topicType: "STANDARD", summary: "", ctaType: "LEARN_MORE", ctaUrl: "", addCta: false }); await load(); }
    else setErr(d.error || "Publish failed");
    setBusy(false);
  }

  async function remove(postName: string) {
    if (!confirm("Delete this post from Google?")) return;
    const id = postName.split("/").pop();
    setBusy(true);
    await fetch(`/api/admin/gbp/posts/${id}/`, { method: "DELETE" });
    await load(); setBusy(false);
  }

  const typeLabel = (t: string) => t === "STANDARD" ? "What's New" : t === "EVENT" ? "Event" : "Offer";
  const typeBadge = (t: string) => t === "OFFER" ? "bg-green-100 text-green-700" : t === "EVENT" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700";

  if (loading) return <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div>;

  return (
    <div>
      <div className="mb-md flex items-center justify-between">
        <h2 className="m-0 text-[16px] font-semibold text-text">Posts <span className="text-[13px] font-normal text-text-faint">({posts.length})</span></h2>
        <div className="flex gap-2">
          <button onClick={load} className="rounded-md border border-border p-1.5 text-text-muted hover:text-text"><RefreshCw size={14} /></button>
          <button onClick={() => setCreating(true)} className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white">
            <Plus size={13} /> New post
          </button>
        </div>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {/* Create panel */}
      {creating && (
        <div className="mb-lg rounded-xl border border-accent/30 bg-bg-card p-md">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="m-0 text-[15px] font-semibold text-text">New post</h3>
            <button onClick={() => setCreating(false)}><X size={16} className="text-text-muted" /></button>
          </div>
          <div className="grid gap-3">
            <div>
              <label className="mb-1 block text-[12px] text-text-faint">Post type</label>
              <select value={draft.topicType} onChange={(e) => setDraft({ ...draft, topicType: e.target.value })} className={sel}>
                <option value="STANDARD">What's New</option>
                <option value="EVENT">Event</option>
                <option value="OFFER">Offer</option>
              </select>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-[12px] text-text-faint">Post content *</label>
                {/* [4] Ring counter */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-text-faint">{draft.summary.length}/1500</span>
                  <RingCounter value={draft.summary.length} max={1500} size={28} />
                </div>
              </div>
              <textarea value={draft.summary} onChange={(e) => setDraft({ ...draft, summary: e.target.value })}
                rows={4} placeholder="Write your update, offer, or announcement…"
                className={`${inp} resize-none`} maxLength={1500} />
            </div>

            {/* [6] Post preview toggle */}
            {draft.summary.trim() && (
              <button onClick={() => setShowPreview((p) => !p)}
                className="flex items-center gap-1.5 text-[12px] text-accent hover:underline self-start">
                <Eye size={13} /> {showPreview ? "Hide preview" : "Preview post"}
              </button>
            )}

            {showPreview && draft.summary.trim() && (
              <div className="rounded-xl border border-border bg-bg-alt p-md">
                <p className="m-0 mb-2 text-[11px] font-semibold uppercase tracking-wider text-text-faint">Preview — how it looks on Google</p>
                <div className="rounded-lg border border-border bg-bg p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-[11px] font-bold text-accent">M</div>
                    <div>
                      <p className="m-0 text-[13px] font-semibold text-text">{locationName || "MacBook Repair Dubai"}</p>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${typeBadge(draft.topicType)}`}>{typeLabel(draft.topicType)}</span>
                    </div>
                  </div>
                  <p className="m-0 text-[13px] text-text leading-relaxed">{draft.summary}</p>
                  {draft.addCta && draft.ctaType && (
                    <div className="mt-2">
                      <span className="inline-block rounded-md border border-accent px-3 py-1 text-[12px] font-semibold text-accent">
                        {draft.ctaType.replace("_", " ")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <label className="flex items-center gap-2 text-[13px] text-text-muted cursor-pointer">
              <input type="checkbox" checked={draft.addCta} onChange={(e) => setDraft({ ...draft, addCta: e.target.checked })} className="rounded" />
              Add call-to-action button
            </label>
            {draft.addCta && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-[12px] text-text-faint">Button type</label>
                  <select value={draft.ctaType} onChange={(e) => setDraft({ ...draft, ctaType: e.target.value })} className={sel}>
                    {CTA_TYPES.map((t) => <option key={t} value={t}>{t.replace("_", " ")}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-[12px] text-text-faint">URL (optional)</label>
                  <input value={draft.ctaUrl} onChange={(e) => setDraft({ ...draft, ctaUrl: e.target.value })} placeholder="https://…" className={inp} />
                </div>
              </div>
            )}
            <div className="flex gap-2">
              <button onClick={publish} disabled={busy || !draft.summary.trim()}
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">
                <Megaphone size={14} /> {busy ? "Publishing…" : "Publish to Google"}
              </button>
              <button onClick={() => setCreating(false)} className="text-[13px] text-text-muted hover:text-text">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Posts list */}
      <div className="flex flex-col gap-3">
        {posts.map((p) => (
          <div key={p.name} className="rounded-xl border border-border bg-bg-card p-md">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <span className={`inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold mb-2 ${typeBadge(p.topicType)}`}>{typeLabel(p.topicType)}</span>
                <p className="m-0 text-[13px] text-text">{p.summary || "(no text)"}</p>
                <p className="m-0 mt-1 text-[11px] text-text-faint">{fmtDate(p.createTime)}</p>
                {p.callToAction && <span className="mt-1 inline-block text-[11px] text-accent">{p.callToAction.actionType}{p.callToAction.url ? ` → ${p.callToAction.url}` : ""}</span>}
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {p.searchUrl && <a href={p.searchUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-border p-1.5 text-text-muted hover:text-text"><Eye size={14} /></a>}
                <button onClick={() => remove(p.name)} disabled={busy} className="rounded-md border border-border p-1.5 text-danger hover:bg-danger/5 disabled:opacity-50"><Trash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
        {posts.length === 0 && !creating && <p className="py-xl text-center text-[14px] text-text-faint">No posts yet. Create your first post above.</p>}
      </div>
    </div>
  );
}

// ── Business Info tab ─────────────────────────────────────────────────────────
function InfoTab() {
  const [info, setInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [edited, setEdited] = useState<Partial<BusinessInfo>>({});
  const [saved, setSaved] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    const res = await fetch("/api/admin/gbp/info/", { cache: "no-store" });
    const d = await res.json();
    if (d.ok) { setInfo(d.info); setEdited({}); }
    else setErr(d.error || "Failed to load");
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function save(patch: Partial<BusinessInfo>, mask: string) {
    setBusy(true); setErr(""); setSaved(false);
    const res = await fetch("/api/admin/gbp/info/", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ patch, updateMask: mask }) });
    const d = await res.json();
    if (d.ok) { setSaved(true); await load(); }
    else setErr(d.error || "Save failed");
    setBusy(false);
  }

  if (loading) return <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div>;
  const cur = info || {};

  return (
    <div className="flex flex-col gap-lg">
      {err && <p className="rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {saved && <p className="rounded-md border border-whatsapp/30 bg-whatsapp/5 px-3 py-2 text-[13px] text-whatsapp flex items-center gap-2"><CheckCircle2 size={14} /> Saved to Google</p>}

      <InfoSection title="Business description" icon={<Info size={15} />}>
        <div className="relative">
          <textarea defaultValue={cur.description || ""}
            onChange={(e) => setEdited((p) => ({ ...p, description: e.target.value }))}
            rows={4} className={`${inp} resize-none pr-10`} maxLength={750} placeholder="Describe your business…" />
          <div className="absolute bottom-2 right-2"><RingCounter value={(edited.description ?? cur.description ?? "").length} max={750} size={24} /></div>
        </div>
        <SaveBtn onClick={() => save({ description: edited.description ?? cur.description }, "description")} busy={busy} />
      </InfoSection>

      <InfoSection title="Phone number" icon={<Phone size={15} />}>
        <input defaultValue={cur.phoneNumbers?.primaryPhone || ""}
          onChange={(e) => setEdited((p) => ({ ...p, phoneNumbers: { primaryPhone: e.target.value } }))}
          placeholder="+971 4 XXX XXXX" className={inp} />
        <SaveBtn onClick={() => save({ phoneNumbers: { primaryPhone: edited.phoneNumbers?.primaryPhone ?? cur.phoneNumbers?.primaryPhone } }, "phoneNumbers")} busy={busy} />
      </InfoSection>

      <InfoSection title="Website URL" icon={<Globe size={15} />}>
        <input defaultValue={cur.websiteUri || ""}
          onChange={(e) => setEdited((p) => ({ ...p, websiteUri: e.target.value }))}
          placeholder="https://macbook-repair-dubai.ae" className={inp} />
        <SaveBtn onClick={() => save({ websiteUri: edited.websiteUri ?? cur.websiteUri }, "websiteUri")} busy={busy} />
      </InfoSection>

      <InfoSection title="Business hours" icon={<Clock size={15} />}>
        <div className="rounded-md border border-border bg-bg-alt p-md text-[13px]">
          {cur.regularHours?.periods && cur.regularHours.periods.length > 0 ? (
            <table className="w-full">
              <tbody>
                {DAYS_ORDER.map((day) => {
                  const p = cur.regularHours?.periods?.find((x) => x.openDay === day);
                  return (
                    <tr key={day} className="border-b border-border last:border-0">
                      <td className="py-1.5 pr-4 font-medium text-text capitalize">{day.toLowerCase()}</td>
                      <td className="py-1.5 text-text-muted">{p ? `${p.openTime} – ${p.closeTime}` : "Closed"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : <p className="m-0 text-text-faint">No hours set.</p>}
        </div>
        <p className="text-[11px] text-text-faint flex items-start gap-1"><Info size={11} className="mt-0.5 shrink-0" />Edit complex schedules via Google Maps app or Business Profile Manager.</p>
      </InfoSection>

      {cur.categories?.primaryCategory && (
        <InfoSection title="Primary category" icon={<BarChart2 size={15} />}>
          <div className="rounded-md border border-border bg-bg-alt px-3 py-2 text-[13px] text-text">{cur.categories.primaryCategory.displayName}</div>
          <p className="text-[11px] text-text-faint flex items-start gap-1"><Info size={11} className="mt-0.5 shrink-0" />Category changes require verification via Google Business Profile Manager.</p>
        </InfoSection>
      )}
    </div>
  );
}

function InfoSection({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-md">
      <h3 className="m-0 mb-3 flex items-center gap-2 text-[14px] font-semibold text-text">{icon}{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function SaveBtn({ onClick, busy }: { onClick: () => void; busy: boolean }) {
  return (
    <button onClick={onClick} disabled={busy}
      className="self-start inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50">
      {busy ? <Loader2 size={12} className="animate-spin" /> : <CheckCircle2 size={12} />}
      {busy ? "Saving…" : "Save to Google"}
    </button>
  );
}

// ── Photos tab ─────────────────────────────────────────────────────────────────
function PhotosTab() {
  const [photos, setPhotos] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("ADDITIONAL");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const PHOTO_CATEGORIES = ["ADDITIONAL", "COVER", "PROFILE", "LOGO", "EXTERIOR", "INTERIOR", "PRODUCT", "AT_WORK", "FOOD_AND_DRINK", "MENU", "COMMON_AREA", "ROOMS", "TEAMS"];

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    const res = await fetch("/api/admin/gbp/photos/", { cache: "no-store" });
    const d = await res.json();
    if (d.ok) setPhotos(d.photos || []);
    else setErr(d.error || "Failed to load photos");
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function upload() {
    if (!url.trim()) return;
    setUploading(true); setErr(""); setSuccess(false);
    const res = await fetch("/api/admin/gbp/photos/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sourceUrl: url, category }) });
    const d = await res.json();
    if (d.ok) { setUrl(""); setSuccess(true); await load(); }
    else setErr(d.error || "Upload failed");
    setUploading(false);
  }

  async function remove(mediaName: string) {
    if (!confirm("Delete this photo from your GBP listing?")) return;
    const id = mediaName.split("/").pop();
    setBusy(true);
    await fetch(`/api/admin/gbp/photos/${id}/`, { method: "DELETE" });
    await load(); setBusy(false);
  }

  if (loading) return <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div>;

  return (
    <div>
      <div className="mb-md flex items-center justify-between">
        <h2 className="m-0 text-[16px] font-semibold text-text">Photos <span className="text-[13px] font-normal text-text-faint">({photos.length})</span></h2>
        <button onClick={load} className="rounded-md border border-border p-1.5 text-text-muted hover:text-text"><RefreshCw size={14} /></button>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">{err}</p>}
      {success && <p className="mb-md rounded-md border border-whatsapp/30 bg-whatsapp/5 px-3 py-2 text-[13px] text-whatsapp flex items-center gap-2"><Check size={14} /> Photo uploaded to Google</p>}

      {/* Upload by URL */}
      <div className="mb-lg rounded-xl border border-border bg-bg-card p-md">
        <h3 className="m-0 mb-3 flex items-center gap-2 text-[14px] font-semibold text-text"><Upload size={15} />Upload photo by URL</h3>
        <div className="grid gap-3">
          <div>
            <label className="mb-1 block text-[12px] text-text-faint">Image URL (must be publicly accessible)</label>
            <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://your-site.com/image.jpg" className={inp} />
          </div>
          <div>
            <label className="mb-1 block text-[12px] text-text-faint">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className={sel}>
              {PHOTO_CATEGORIES.map((c) => <option key={c} value={c}>{c.replace(/_/g, " ")}</option>)}
            </select>
          </div>
          <button onClick={upload} disabled={uploading || !url.trim()}
            className="self-start inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50">
            {uploading ? <><Loader2 size={14} className="animate-spin" /> Uploading…</> : <><Upload size={14} /> Upload to Google</>}
          </button>
        </div>
      </div>

      {/* Photo grid */}
      {photos.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-xl border border-border bg-bg-alt aspect-square">
              {(p.thumbnailUrl || p.googleUrl) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.thumbnailUrl || p.googleUrl} alt="GBP photo" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center"><ImageIcon size={32} className="text-text-faint" /></div>
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => remove(p.name)} disabled={busy}
                  className="rounded-md bg-danger px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50">
                  <Trash2 size={13} className="inline mr-1" />Delete
                </button>
              </div>
              {p.createTime && <div className="absolute bottom-1 left-1 rounded px-1 py-0.5 bg-black/60 text-[10px] text-white">{fmtDate(p.createTime)}</div>}
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-bg-alt py-xl text-center">
          <ImageIcon size={28} className="mx-auto mb-2 text-text-faint" />
          <p className="m-0 text-[14px] text-text-faint">No photos yet. Upload your first photo above.</p>
        </div>
      )}
    </div>
  );
}

// ── Q&A tab ───────────────────────────────────────────────────────────────────
function QaTab() {
  const [questions, setQuestions] = useState<QaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [answeringId, setAnsweringId] = useState<string | null>(null);
  const [answerText, setAnswerText] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setErr("");
    const res = await fetch("/api/admin/gbp/qa/", { cache: "no-store" });
    const d = await res.json();
    if (d.ok) setQuestions(d.questions || []);
    else setErr(d.error || "Failed to load Q&A");
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function submitAnswer(questionId: string) {
    if (!answerText.trim()) return;
    setBusy(true);
    const res = await fetch(`/api/admin/gbp/qa/${questionId}/answer/`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: answerText }),
    });
    const d = await res.json();
    if (d.ok) { setAnsweringId(null); setAnswerText(""); await load(); }
    else setErr(d.error || "Failed to post answer");
    setBusy(false);
  }

  async function removeAnswer(questionId: string) {
    if (!confirm("Delete your answer?")) return;
    setBusy(true);
    await fetch(`/api/admin/gbp/qa/${questionId}/answer/`, { method: "DELETE" });
    await load(); setBusy(false);
  }

  const unanswered = questions.filter((q) => !q.topAnswers?.some((a) => a.author.type === "MERCHANT"));

  if (loading) return <div className="flex justify-center py-xl"><Loader2 className="animate-spin text-text-faint" /></div>;

  return (
    <div>
      <div className="mb-md flex items-center justify-between">
        <h2 className="m-0 text-[16px] font-semibold text-text">Q&A <span className="text-[13px] font-normal text-text-faint">({questions.length})</span></h2>
        <button onClick={load} className="rounded-md border border-border p-1.5 text-text-muted hover:text-text"><RefreshCw size={14} /></button>
      </div>

      {err && <p className="mb-md rounded-md border border-danger/30 bg-danger/5 px-3 py-2 text-[13px] text-danger">{err}</p>}

      {unanswered.length > 0 && (
        <div className="mb-md rounded-md border border-amber-400/30 bg-amber-50/20 px-3 py-2 text-[13px] text-amber-700 dark:text-amber-400">
          <AlertTriangle size={13} className="mr-1.5 inline" />{unanswered.length} question{unanswered.length > 1 ? "s" : ""} without your answer
        </div>
      )}

      <div className="flex flex-col gap-3">
        {questions.map((q) => {
          const qId = q.name.split("/").pop()!;
          const myAnswer = q.topAnswers?.find((a) => a.author.type === "MERCHANT");
          const isExp = expanded === qId;
          const isAnswering = answeringId === qId;

          return (
            <div key={q.name} className={`rounded-xl border bg-bg-card ${!myAnswer ? "border-amber-400/40" : "border-border"}`}>
              <div className="p-md">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <HelpCircle size={18} className={`mt-0.5 shrink-0 ${!myAnswer ? "text-amber-500" : "text-accent"}`} />
                    <div>
                      <p className="m-0 text-[14px] font-medium text-text">{q.text}</p>
                      <p className="m-0 mt-0.5 text-[11px] text-text-faint">
                        {q.author.displayName} · {fmtDate(q.createTime)} · {q.upvoteCount} upvote{q.upvoteCount !== 1 ? "s" : ""}
                        {q.totalAnswerCount ? ` · ${q.totalAnswerCount} answer${q.totalAnswerCount !== 1 ? "s" : ""}` : ""}
                      </p>
                    </div>
                  </div>
                  {(q.topAnswers?.length ?? 0) > 0 && (
                    <button onClick={() => setExpanded(isExp ? null : qId)} className="shrink-0 text-text-faint hover:text-text">
                      {isExp ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                {/* Existing answers */}
                {isExp && q.topAnswers && q.topAnswers.length > 0 && (
                  <div className="mt-3 ml-[30px] flex flex-col gap-2">
                    {q.topAnswers.map((a, i) => (
                      <div key={i} className={`rounded-md border px-3 py-2 ${a.author.type === "MERCHANT" ? "border-accent/30 bg-accent/5" : "border-border bg-bg-alt"}`}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-text">
                            {a.author.type === "MERCHANT" ? "Your answer" : a.author.displayName} · {fmtDate(a.updateTime)}
                          </span>
                          {a.author.type === "MERCHANT" && (
                            <button onClick={() => removeAnswer(qId)} disabled={busy} className="text-[11px] text-danger hover:underline disabled:opacity-50">
                              <Trash2 size={11} className="inline mr-0.5" />Delete
                            </button>
                          )}
                        </div>
                        <p className="m-0 text-[13px] text-text-muted">{a.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Answer button / form */}
                {!myAnswer && !isAnswering && (
                  <button onClick={() => { setAnsweringId(qId); setAnswerText(""); }}
                    className="mt-3 ml-[30px] inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[12px] text-text-muted hover:border-accent hover:text-accent">
                    <MessageSquare size={13} /> Answer
                  </button>
                )}

                {isAnswering && (
                  <div className="mt-3 ml-[30px]">
                    <textarea value={answerText} onChange={(e) => setAnswerText(e.target.value)} rows={3}
                      placeholder="Write your answer…"
                      className="mb-2 w-full rounded-md border border-border bg-bg px-3 py-2 text-[13px] text-text placeholder:text-text-faint focus:border-accent focus:outline-none resize-none" />
                    <div className="flex gap-2">
                      <button onClick={() => submitAnswer(qId)} disabled={busy || !answerText.trim()}
                        className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50">
                        <Send size={12} /> {busy ? "Posting…" : "Post answer"}
                      </button>
                      <button onClick={() => setAnsweringId(null)} className="text-[12px] text-text-muted hover:text-text">Cancel</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        {questions.length === 0 && <div className="rounded-xl border border-border bg-bg-alt py-xl text-center"><HelpCircle size={28} className="mx-auto mb-2 text-text-faint" /><p className="m-0 text-[14px] text-text-faint">No questions yet on your Google listing.</p></div>}
      </div>
    </div>
  );
}
