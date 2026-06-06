"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";
import { cn } from "@/lib/utils";

export type HeroSlide = { src: string; alt: string };

// Hero image slideshow: auto-advances (~4s), pauses on hover, swipeable, with
// dots + arrows. SSR/crawler-safe (first slide is real markup with priority load)
// and reduced-motion-safe (no auto-advance when the user prefers reduced motion).
export function HeroSlider({ slides, intervalMs = 4000 }: { slides: HeroSlide[]; intervalMs?: number }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => { embla.off("select", onSelect); };
  }, [embla]);

  // auto-advance - disabled for reduced-motion users
  useEffect(() => {
    if (!embla || paused || slides.length < 2) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => embla.scrollNext(), intervalMs);
    return () => window.clearInterval(id);
  }, [embla, paused, intervalMs, slides.length]);

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/10 shadow-lg bg-white/[0.04]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="MacBook Repair Dubai workshop photos"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div className="min-w-0 flex-[0_0_100%]" key={s.src} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`}>
              <ResponsiveImage
                src={s.src}
                alt={s.alt}
                width={760}
                height={560}
                priority={i === 0}
                sizes="(max-width: 1068px) 100vw, 560px"
                className="block h-full w-full"
                imgClassName="w-full h-[300px] md:h-[440px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          {/* arrows */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => embla?.scrollPrev()}
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04]/80 text-on-primary backdrop-blur border border-white/10 shadow-sm transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => embla?.scrollNext()}
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04]/80 text-on-primary backdrop-blur border border-white/10 shadow-sm transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight size={20} aria-hidden />
          </button>
          {/* dots */}
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Go to photo ${i + 1}`}
                aria-current={selected === i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  selected === i ? "w-6 bg-accent" : "w-2 bg-white/[0.04]/70 hover:bg-white/[0.04]",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HeroSlider;
