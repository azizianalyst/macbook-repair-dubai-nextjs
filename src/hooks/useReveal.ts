import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal: returns a ref + `shown` flag that flips true once the element
 * enters the viewport.
 *
 * SSR/crawler-safe: `shown` starts TRUE so the prerendered HTML and the hydrated
 * first paint show content fully visible (never opacity:0 for no-JS clients or
 * AI crawlers that render CSS but don't scroll). The fade-up entrance is applied
 * only as a progressive enhancement: after mount, if motion is allowed and
 * IntersectionObserver exists, we reset to hidden and reveal on scroll-in.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(opts?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(true); // visible by default (SSR + no-JS)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // If the element is already in view at mount (e.g. above the fold on first
    // load), keep it visible - don't flash it out. Only arm the entrance for
    // elements currently below the fold.
    const rect = el.getBoundingClientRect();
    const inView = rect.top < (window.innerHeight || 0) && rect.bottom > 0;
    if (!inView) setShown(false);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (opts?.once !== false) io.unobserve(e.target);
          } else if (opts?.once === false) {
            setShown(false);
          }
        }
      },
      { threshold: opts?.threshold ?? 0.15, rootMargin: opts?.rootMargin ?? "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [opts?.threshold, opts?.rootMargin, opts?.once]);

  return { ref, shown };
}
