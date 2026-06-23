"use client";
import { ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type Review = {
  name: string;
  date: string;             // "April 2026" or "2 weeks ago"
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;             // verbatim from REVIEWS_LIBRARY.md
  ownerResponse?: string;
  googleUrl?: string;
  tone?: "light" | "dark";  // "dark" for use on the bg-bg-alt band; default light
};

export function ReviewCard({ name, date, rating, text, ownerResponse, googleUrl, tone = "light" }: Review) {
  const dark = tone === "dark";
  return (
    <article
      className={cn(
        "rounded-md p-lg flex flex-col gap-sm",
        dark
          ? "border border-border/70 bg-bg-card ring-1 ring-black/[0.03]"
          : "bg-bg-card border border-border shadow-sm",
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <div>
          <p className={cn("font-semibold text-[15px]", dark && "text-text")}>{name}</p>
          <p className={cn("text-[12px] mono", dark ? "text-text-faint" : "text-text-faint")}>{date}</p>
        </div>
        <div className="flex" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-star text-star" : "text-border-strong"}
              aria-hidden
            />
          ))}
        </div>
      </header>

      <p className={cn("text-[15px] leading-relaxed", dark ? "text-text-muted" : "text-text")}>{text}</p>

      {ownerResponse && (
        <div
          className={cn(
            "mt-sm pl-md border-l-2 text-[13px]",
            dark ? "border-border text-text-muted" : "border-accent text-text-muted",
          )}
        >
          <p className={cn("font-semibold mb-1", dark ? "text-text" : "text-text")}>Owner response</p>
          <p>{ownerResponse}</p>
        </div>
      )}

      {googleUrl && (
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-sm inline-flex items-center gap-1 text-[13px]",
            dark ? "text-text-muted hover:text-accent" : "text-text-muted hover:text-primary",
          )}
        >
          Read on Google <ExternalLink size={12} aria-hidden />
        </a>
      )}
    </article>
  );
}
