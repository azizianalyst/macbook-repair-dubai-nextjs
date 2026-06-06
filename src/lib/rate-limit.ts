// Tiny in-memory sliding-window rate limiter for the public lead endpoint.
// Single-process (next start) — sufficient for one Hostinger Node app. Not shared
// across instances; if you ever scale horizontally, move this to a shared store.

type G = typeof globalThis & { __rl?: Map<string, number[]> };

export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

export function rateLimit(key: string, max: number, windowMs: number): { allowed: boolean; retryAfterSec: number } {
  const g = globalThis as G;
  if (!g.__rl) g.__rl = new Map();
  const store = g.__rl;
  const now = Date.now();
  const hits = (store.get(key) || []).filter((t) => now - t < windowMs);

  if (hits.length >= max) {
    store.set(key, hits);
    const retryAfterSec = Math.max(1, Math.ceil((windowMs - (now - hits[0])) / 1000));
    return { allowed: false, retryAfterSec };
  }

  hits.push(now);
  store.set(key, hits);

  // bound memory: occasionally drop fully-expired keys
  if (store.size > 5000) {
    for (const [k, v] of store) if (v.every((t) => now - t >= windowMs)) store.delete(k);
  }
  return { allowed: true, retryAfterSec: 0 };
}
