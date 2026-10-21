"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard, type Review } from "./ReviewCard";

type Props = { reviews: Review[]; intervalMs?: number };

// auto-rotate 6s. pause on hover.
export function ReviewCarousel({ reviews, intervalMs = 6000 }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), intervalMs);
    return () => clearInterval(t);
  }, [paused, reviews.length, intervalMs]);

  if (!reviews.length) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {reviews.map((r, idx) => (
            <div key={idx} className="w-full shrink-0 px-2">
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-sm mt-md">
        <button
          onClick={() => setI((x) => (x - 1 + reviews.length) % reviews.length)}
          aria-label="Previous review"
          className="w-10 h-10 rounded-md border border-border-strong flex items-center justify-center hover:bg-bg-alt"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <div className="flex gap-1" role="tablist">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to review ${idx + 1}`}
              aria-selected={idx === i}
              className={
                "w-2 h-2 rounded-full transition-colors " +
                (idx === i ? "bg-bg-alt" : "bg-border-strong")
              }
            />
          ))}
        </div>
        <button
          onClick={() => setI((x) => (x + 1) % reviews.length)}
          aria-label="Next review"
          className="w-10 h-10 rounded-md border border-border-strong flex items-center justify-center hover:bg-bg-alt"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
