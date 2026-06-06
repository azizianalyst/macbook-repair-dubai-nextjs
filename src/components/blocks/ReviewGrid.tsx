"use client";
import { ReviewCard, type Review } from "./ReviewCard";

export function ReviewGrid({ reviews, tone = "light" }: { reviews: Review[]; tone?: "light" | "dark" }) {
  // Drop rating-only reviews with no written text - they render as empty cards.
  const withText = reviews.filter((r) => r.text && r.text.trim().length > 0);
  return (
    <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3">
      {withText.map((r, i) => <ReviewCard key={`${r.name}-${r.date}-${i}`} {...r} tone={tone} />)}
    </div>
  );
}
