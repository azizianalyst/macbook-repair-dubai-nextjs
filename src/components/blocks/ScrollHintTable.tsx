"use client";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Wraps a wide table so mobile users get a clear scroll affordance instead of a
// silently-clipped table that reads as "broken". Shows a right-edge fade + a one-time
// "Swipe →" hint while the table overflows and hasn't been scrolled to the end.
// Use for comparison/odds tables. For price tables prefer a stacked mobile card layout
// so the price is never clipped (see PricingTable/BlogPriceTable).
export function ScrollHintTable({
  children,
  className,
  fadeClass = "from-bg-card",
}: {
  children: ReactNode;
  className?: string;
  fadeClass?: string; // tailwind `from-*` matching the scroll container's background
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState({ overflow: false, atStart: true, atEnd: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const overflow = el.scrollWidth > el.clientWidth + 1;
      setS({
        overflow,
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={ref} className={cn("overflow-x-auto", className)}>
        {children}
      </div>
      {s.overflow && !s.atEnd && (
        <div
          aria-hidden
          className={cn("pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l to-transparent", fadeClass)}
        />
      )}
      {s.overflow && s.atStart && (
        <span
          aria-hidden
          className="md:hidden pointer-events-none absolute right-2 top-2 rounded-full bg-text/85 px-2 py-0.5 text-[11px] font-medium text-white"
        >
          Swipe →
        </span>
      )}
    </div>
  );
}
