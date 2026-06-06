"use client";
// Trust signals immediately under H1 - passes the 5-second test on every page.
// Star is amber, separators hide on mobile and stack vertically with gap.
import { Star, MapPin, Clock } from "lucide-react";
import { REVIEW_AVERAGE, REVIEW_COUNT } from "@/content/site";
import { cn } from "@/lib/utils";

interface TrustLineProps {
  variant?: "default" | "compact";
  /** Render light text (for dark hero backgrounds like home / device variants) */
  tone?: "dark" | "light";
}

export function TrustLine({ variant = "default", tone = "dark" }: TrustLineProps) {
  const muted = tone === "light" ? "text-on-primary-muted" : "text-text-muted";
  const strong = tone === "light" ? "text-on-primary" : "text-text";
  const sep = tone === "light" ? "text-on-primary-faint" : "text-text-faint";

  return (
    <div
      className={cn(
        "trust-line flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px]",
        muted,
        variant === "compact" ? "mt-sm" : "mt-md",
      )}
      aria-label="Trust signals"
    >
      <span className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-star text-star" aria-hidden="true" />
        <strong className={strong}>{REVIEW_AVERAGE.toFixed(1)}</strong>
        <span aria-hidden="true">·</span>
        <span>{REVIEW_COUNT}+ Google reviews</span>
      </span>
      <span className={cn("hidden sm:inline", sep)} aria-hidden="true">·</span>
      <span className="flex items-center gap-1">
        <Clock className="h-4 w-4" aria-hidden="true" />
        Since October 2004
      </span>
      <span className={cn("hidden sm:inline", sep)} aria-hidden="true">·</span>
      <span className="flex items-center gap-1">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        Concord Tower, Media City
      </span>
    </div>
  );
}

export default TrustLine;
