"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Star, Send, Trash2, RefreshCw, AlertCircle, MessageSquare,
  Check, ChevronDown, ChevronUp,
} from "lucide-react";
import Link from "next/link";

type GbpReview = {
  name: string;
  reviewId: string;
  reviewer: { displayName: string; isAnonymous?: boolean };
  starRating: "ONE" | "TWO" | "THREE" | "FOUR" | "FIVE";
  comment?: string;
  createTime: string;
  updateTime: string;
  reviewReply?: { comment: string; updateTime: string };
};

const STAR_MAP = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

// ─── Reply generator ──────────────────────────────────────────────────────────
// Short (80–130 chars), human, specific to what the reviewer actually said.
// No "Thank you for your wonderful review!" boilerplate.
function generateReply(review: GbpReview): string {
  const text = (review.comment || "").toLowerCase();
  const firstName = review.reviewer.displayName.split(" ")[0];
  const isEmpty = !review.comment || review.comment.trim().length < 5;
  const has = (kw: string[]) => kw.some((k) => text.includes(k));

  if (isEmpty) {
    const opts = [
      `Means a lot, ${firstName} — thank you! 🙏`,
      `Really appreciate the 5 stars, ${firstName}! 🙏`,
      `Thank you, ${firstName} — see you next time! 🙏`,
    ];
    return opts[review.reviewId.charCodeAt(0) % opts.length];
  }

  if (has(["water", "liquid", "spill", "coffee", "tea", "wet"]))
    return `Water damage is always a race against time — really glad we got there for you, ${firstName}. Come back any time! 🙏`;

  const hasPu = has(["pickup", "picked up", "collect", "came to my", "home", "delivery", "delivered", "drop"]);
  const hasSc = has(["screen", "display", "pink", "lines", "flicker", "broke"]);
  const haBt = has(["battery", "drain", "charge", "capacity"]);
  const haKb = has(["keyboard", "key cap", "keycap", "key "]);
  const haFa = has(["quick", "fast", "same day", "hour", "minute", "min ", "record time"]);
  const haPr = has(["price", "affordable", "fair", "cheap", "competitive", "reasonable", "cost"]);

  if (hasSc && hasPu) return `Screen sorted and dropped back to you — that's what the free pickup is for. Thank you, ${firstName}! 🙏`;
  if (haBt && hasPu) return `Battery done and delivered back to you — really glad it worked out. Thanks ${firstName}! 🙏`;
  if (hasSc) return `Screen back to new — exactly what we aim for every time. Thank you, ${firstName}! 🙏`;
  if (haBt) return `Full battery life restored — always satisfying to see. Really appreciate it, ${firstName}! 🙏`;
  if (haKb) return `Keys all working again — glad we could sort it. Come back any time! 🙏`;
  if (hasPu && haFa) return `Same-day and right back to you — that's the goal every time. Thank you, ${firstName}! 🙏`;
  if (hasPu) return `Free pickup and back with you — really glad that worked well, ${firstName}! 🙏`;
  if (haFa && haPr) return `Fast and at a fair price — that's exactly what we aim for. Thank you, ${firstName}! 🙏`;
  if (haFa) return `Same-day is always the target — really glad we hit it. Thank you, ${firstName}! 🙏`;
  if (haPr) return `Really glad the pricing worked for you, ${firstName} — always try to keep it fair. 🙏`;

  const fallbacks = [
    `Really appreciate it, ${firstName} — means a lot to the whole team! 🙏`,
    `Glad everything went well — come back any time, ${firstName}! 🙏`,
    `That kind of feedback keeps us going. Thank you, ${firstName}! 🙏`,
    `Really glad to hear it, ${firstName}. Thanks for taking the time! 🙏`,
  ];
  const idx = review.reviewId.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % fallbacks.length;
  return fallbacks[idx];
}

// ─── StarRating ───────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: GbpReview["starRating"] }) {
  const n = STAR_MAP[rating] || 5;
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={12} className={i < n ? "fill-yellow-400 text-yellow-400" : "text-border"} />
      ))}
    </span>
  );
}

// ─── ReviewCard ───────────────────────────────────────────────────────────────
function ReviewCard({ review, onReplied }: { review: GbpReview; onReplied: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [reply, setReply] = useState(() => review.reviewReply?.comment || generateReply(review));
  const [saving, setSaving] = useState(false);
  const [postStatus, setPostStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [deleting, setDeleting] = useState(false);

  const reviewId = review.name.split("/").pop()!;
  const hasReply = !!review.reviewReply;
  const charCount = reply.length;

  let dateStr = "";
  try {
    dateStr = new Date(review.createTime).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch {}

  const postReply = async () => {
    if (!reply.trim()) return;
    setSaving(true); setPostStatus("idle"); setErrMsg("");
    try {
      const res = await fetch(`/api/admin/gbp/reviews/${reviewId}/reply/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: reply.trim() }),
        cache: "no-store",
      });
      const j = await res.json();
      if (j.ok) { setPostStatus("ok"); setTimeout(() => setPostStatus("idle"), 3000); onReplied(); }
      else { setPostStatus("error"); setErrMsg(j.error || "Unknown error"); }
    } catch (e) { setPostStatus("error"); setErrMsg(String(e)); }
    setSaving(false);
  };

  const deleteReply = async () => {
    if (!confirm("Remove this reply from Google Business Profile?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/admin/gbp/reviews/${reviewId}/reply/`, { method: "DELETE", cache: "no-store" });
      const j = await res.json();
      if (j.ok) { setReply(generateReply(review)); onReplied(); }
    } catch {}
    setDeleting(false);
  };

  return (
    <div className={`rounded-xl border overflow-hidden ${hasReply ? "border-green-500/20 bg-green-500/3" : "border-border bg-bg"}`}>
      {/* Header */}
      <div
        className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-bg-alt transition-colors select-none"
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <StarRating rating={review.starRating} />
            {hasReply ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[10px] font-semibold text-green-400">
                <Check size={10} /> Replied
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-2 py-0.5 text-[10px] font-semibold text-orange-400">
                <MessageSquare size={10} /> Needs reply
              </span>
            )}
            {dateStr && <span className="text-[10px] text-text-muted">{dateStr}</span>}
          </div>
          <p className="m-0 text-[13px] font-semibold text-text">{review.reviewer.displayName}</p>
          {review.comment && (
            <p className="m-0 mt-0.5 text-[12px] text-text-muted leading-snug line-clamp-2">{review.comment}</p>
          )}
        </div>
        <div className="shrink-0 pt-1 text-text-muted">
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </div>
      </div>

      {/* Expanded */}
      {expanded && (
        <div className="border-t border-border px-4 pt-3 pb-4 space-y-3">
          {/* Full review */}
          {review.comment && (
            <div className="rounded-lg bg-bg-alt px-3 py-2.5">
              <p className="m-0 text-[12.5px] text-text-muted leading-relaxed italic">"{review.comment}"</p>
            </div>
          )}

          {/* Current reply */}
          {hasReply && (
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 px-3 py-2.5">
              <p className="m-0 mb-1 text-[10px] font-semibold uppercase tracking-wide text-green-400">Current reply on Google</p>
              <p className="m-0 text-[12.5px] text-text leading-relaxed">{review.reviewReply!.comment}</p>
            </div>
          )}

          {/* Reply editor */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-text-muted">{hasReply ? "Update reply" : "Write reply"}</span>
              <span className="text-[11px] font-mono text-text-muted">{charCount} chars</span>
            </div>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-border bg-bg-alt px-3 py-2.5 text-[13px] leading-relaxed text-text resize-y focus:outline-none focus:border-accent/50"
            />
          </div>

          {/* Action row */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={postReply}
              disabled={saving || !reply.trim()}
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-[12px] font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              {saving ? <RefreshCw size={13} className="animate-spin" /> : postStatus === "ok" ? <Check size={13} /> : <Send size={13} />}
              {saving ? "Posting…" : postStatus === "ok" ? "Posted!" : hasReply ? "Update reply" : "Post reply"}
            </button>

            {hasReply && (
              <button
                onClick={deleteReply}
                disabled={deleting}
                className="inline-flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/5 px-2.5 py-1.5 text-[12px] font-semibold text-red-400 hover:bg-red-500/10 disabled:opacity-50 transition-colors"
              >
                <Trash2 size={13} /> {deleting ? "Deleting…" : "Delete reply"}
              </button>
            )}

            {postStatus === "error" && (
              <span className="text-[12px] text-red-400 flex items-center gap-1">
                <AlertCircle size={12} /> {errMsg}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function GbpReviewsAdmin() {
  const [reviews, setReviews] = useState<GbpReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"all" | "needs-reply" | "replied">("needs-reply");

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/admin/gbp/reviews/", { cache: "no-store" });
      const j = await res.json();
      if (j.ok) setReviews(j.reviews || []);
      else setError(j.error || "Failed to load reviews");
    } catch (e) { setError(String(e)); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const replied = reviews.filter((r) => !!r.reviewReply).length;
  const pending = reviews.length - replied;

  const filtered = reviews.filter((r) => {
    if (filter === "needs-reply") return !r.reviewReply;
    if (filter === "replied") return !!r.reviewReply;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <RefreshCw size={20} className="animate-spin text-text-muted" />
        <span className="ml-2 text-[13px] text-text-muted">Loading reviews from Google…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="m-0 text-[22px] font-bold text-text">GBP Reviews</h1>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 space-y-2">
          <p className="m-0 text-[13px] text-red-400 flex items-center gap-2">
            <AlertCircle size={15} /> {error}
          </p>
          {(error.includes("No location") || error.includes("not connected")) && (
            <p className="m-0 text-[12px] text-text-muted">
              Connect your Google Business Profile first:{" "}
              <Link href="/admin/gbp" className="text-accent underline">Admin → Google Business</Link>
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="m-0 text-[22px] font-bold text-text">GBP Reviews</h1>
          <p className="m-0 mt-1 text-[13px] text-text-muted">
            {reviews.length} total · <span className="text-green-400 font-semibold">{replied} replied</span>
            {" · "}<span className="text-orange-400 font-semibold">{pending} pending</span>
          </p>
        </div>
        <button
          onClick={load}
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-[12px] text-text-muted hover:text-text transition-colors"
        >
          <RefreshCw size={13} /> Refresh
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-bg-alt overflow-hidden">
        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{ width: `${reviews.length ? (replied / reviews.length) * 100 : 0}%` }}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {(["all", "needs-reply", "replied"] as const).map((f) => {
          const count = f === "all" ? reviews.length : f === "replied" ? replied : pending;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`h-8 rounded-lg border px-3 text-[12px] font-semibold capitalize transition-colors ${
                filter === f ? "border-accent/40 bg-accent/10 text-accent" : "border-border bg-bg text-text-muted hover:text-text"
              }`}
            >
              {f.replace("-", " ")} ({count})
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.length === 0 && (
          <p className="py-10 text-center text-[13px] text-text-muted">
            {filter === "needs-reply" && pending === 0
              ? "All reviews have replies — great work! 🎉"
              : "No reviews match this filter."}
          </p>
        )}
        {filtered.map((r) => (
          <ReviewCard key={r.reviewId} review={r} onReplied={load} />
        ))}
      </div>
    </div>
  );
}
