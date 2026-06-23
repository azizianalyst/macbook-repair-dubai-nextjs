// helper to pull verbatim reviews by name from the library.
// keeps page files terse and audit-able.
import { REVIEWS, type TaggedReview, type ReviewService } from "@/content/reviews";

// Map a page path to the device tag(s) whose reviews belong on it, so an iPhone page
// never shows a MacBook review under "Reviews for this service". Empty = no filter.
export function reviewDevicesForPath(path: string): ReviewService[] {
  if (/iphone|ipod/.test(path)) return ["iPhone"];
  if (/ipad/.test(path)) return ["iPad"];
  if (/imac/.test(path)) return ["iMac"];
  if (/mac-(mini|studio|pro)/.test(path)) return ["iMac", "MacBook"]; // desktop Macs: scarce pool, allow Mac family
  if (/macbook|^\/mac[-/]|^\/mac$/.test(path)) return ["MacBook"];
  return [];
}

// Resolve curated reviewer names to reviews. With `opts.devices`, off-device names are
// dropped and the list is backfilled from the device-matching pool to `opts.min`,
// deterministically per `opts.seed` — so every page shows >=min distinct, on-topic reviews.
// Called with no opts it behaves exactly as before (lookup by name, no filter/backfill).
export function pickReviews(
  names: string[],
  opts?: { devices?: ReviewService[]; min?: number; seed?: string },
): TaggedReview[] {
  const devices = opts?.devices;
  const min = opts?.min ?? 0;
  const onDevice = (r: TaggedReview) =>
    !devices || devices.length === 0 || r.services.some((s) => devices.includes(s));

  const out: TaggedReview[] = [];
  const used = new Set<string>();
  // 1. curated names first — but only those that match the page's device
  for (const n of names) {
    const r = REVIEWS.find((x) => x.name === n);
    if (r && onDevice(r) && !used.has(r.name)) {
      out.push(r);
      used.add(r.name);
    }
  }
  // 2. backfill from the on-device pool to reach `min`, rotated by seed for per-page variety
  if (out.length < min) {
    const pool = REVIEWS.filter((r) => onDevice(r) && !used.has(r.name));
    const seed = opts?.seed ?? names.join("|");
    let h = 0;
    for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
    const start = pool.length ? Math.abs(h) % pool.length : 0;
    for (let i = 0; i < pool.length && out.length < min; i++) {
      out.push(pool[(start + i) % pool.length]);
    }
  }
  return out;
}
