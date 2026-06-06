"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Rotating benefit line for the hero. SSR/crawler-safe: renders the first item
 * server-side and on first paint; rotates only on the client. Respects
 * prefers-reduced-motion (no rotation - shows the first item statically).
 */
export function RotatingBenefit({
  items,
  intervalMs = 2600,
  className = "",
  tone = "light",
}: {
  items: string[];
  intervalMs?: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const [i, setI] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % items.length), intervalMs);
    return () => window.clearInterval(id);
  }, [items.length, intervalMs]);

  // No color token of its own - color is inherited from the parent via `className`,
  // so tone has no class to remap here; the prop exists for API consistency.
  void dark;

  return (
    <span className={cn("relative inline-flex overflow-hidden align-bottom", className)} aria-live="polite">
      {/* reserve height; animate the active item */}
      <span key={i} className="motion-safe:animate-fade-up">
        {items[i]}
      </span>
    </span>
  );
}

export default RotatingBenefit;
