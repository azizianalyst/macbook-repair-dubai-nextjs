"use client";
// Swipeable scroll-snap slider for the real workshop photos on the home page.
// No carousel lib: native scroll + CSS snap (touch swipe works for free), with
// arrow buttons for desktop. All slides stay in the SSR DOM (image SEO intact).
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResponsiveImage } from "@/components/blocks/ResponsiveImage";

export interface WorkshopSlide {
  src: string;
  alt: string;
  title: string;
}

export function WorkshopSlider({ slides }: { slides: WorkshopSlide[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateEnds();
    const el = trackRef.current;
    el?.addEventListener("scroll", updateEnds, { passive: true });
    window.addEventListener("resize", updateEnds);
    return () => {
      el?.removeEventListener("scroll", updateEnds);
      window.removeEventListener("resize", updateEnds);
    };
  }, [updateEnds]);

  const slide = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.querySelector("li")?.getBoundingClientRect().width ?? el.clientWidth * 0.8;
    el.scrollBy({ left: dir * (step + 12), behavior: "smooth" });
  };

  const arrowCls =
    "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text transition-all hover:border-accent/40 hover:text-accent disabled:opacity-35 disabled:pointer-events-none";

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Photos from our Dubai workshop">
      <ul
        ref={trackRef}
        className="m-0 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto p-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((g) => (
          <li key={g.src} className="w-[64%] shrink-0 snap-start sm:w-[42%] lg:w-[31%]">
            <figure className="group relative m-0 overflow-hidden rounded-xl bg-bg-card">
              {/* 3:4 frame matches the portrait lab photos exactly (1600×2133), so the
                  full photo is visible; the lone landscape shot letterboxes inside it. */}
              <ResponsiveImage
                src={g.src}
                alt={g.alt}
                title={g.title}
                width={390}
                height={520}
                sizes="(max-width: 640px) 64vw, (max-width: 1024px) 42vw, 370px"
                className="block"
                imgClassName="w-full h-auto aspect-[3/4] object-contain transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 text-[13px] md:text-[14px] font-medium text-white">
                {g.title}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <div className="mt-md flex justify-center gap-2.5">
        <button type="button" onClick={() => slide(-1)} disabled={atStart} aria-label="Previous photo" className={arrowCls}>
          <ChevronLeft size={18} aria-hidden />
        </button>
        <button type="button" onClick={() => slide(1)} disabled={atEnd} aria-label="Next photo" className={arrowCls}>
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}

export default WorkshopSlider;
