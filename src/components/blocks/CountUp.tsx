"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Animated count-up for stat numbers. SSR/crawler-safe and reduced-motion-safe:
 * renders the FINAL value immediately (so prerendered HTML + no-JS show the real
 * number), and only animates from 0 as a progressive enhancement once visible.
 *
 * Parses a leading integer out of strings like "21+", "99%", "1 hour" and keeps
 * the surrounding prefix/suffix; non-numeric values (e.g. "Free") render as-is.
 */
export function CountUp({ value, durationMs = 1100 }: { value: string; durationMs?: number }) {
  // Ratio-style values like "24/7" must NOT animate - counting the leading number
  // flashes nonsensical intermediates ("0/7", "11/7") before settling.
  const m = value.includes("/") ? null : value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  const target = m ? parseInt(m[2].replace(/,/g, ""), 10) : NaN;
  const prefix = m?.[1] ?? "";
  const suffix = m?.[3] ?? "";

  const ref = useRef<HTMLSpanElement>(null);
  // start at the real value (SSR + no-JS correct); animation overrides on the client
  const [display, setDisplay] = useState<number>(Number.isNaN(target) ? 0 : target);

  useEffect(() => {
    if (Number.isNaN(target)) return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    let started = false;
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
        setDisplay(Math.round(eased * target));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            setDisplay(0);
            animate();
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target, durationMs]);

  if (Number.isNaN(target)) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default CountUp;
