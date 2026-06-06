// helper to pull verbatim reviews by name from the library.
// keeps page files terse and audit-able.
import { REVIEWS, type TaggedReview } from "@/content/reviews";

export function pickReviews(names: string[]): TaggedReview[] {
  const out: TaggedReview[] = [];
  for (const n of names) {
    const r = REVIEWS.find((x) => x.name === n);
    if (r) out.push(r);
  }
  return out;
}
