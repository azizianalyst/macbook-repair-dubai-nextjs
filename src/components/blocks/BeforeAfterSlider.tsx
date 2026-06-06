"use client";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;     // model + issue + fix + date
  tone?: "light" | "dark";
};

// drag handle, 50/50. no parallax.
export function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt, caption, tone = "light" }: Props) {
  const dark = tone === "dark";
  const [pos, setPos] = useState(50);
  const wrap = useRef<HTMLDivElement>(null);

  const onMove = useCallback((clientX: number) => {
    if (!wrap.current) return;
    const r = wrap.current.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  return (
    <figure className={cn("rounded-md overflow-hidden", dark ? "border border-white/10 bg-white/[0.04]" : "border border-border bg-bg-card shadow-sm")}>
      <div
        ref={wrap}
        className="relative aspect-[16/9] select-none touch-none"
        onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
        onTouchMove={(e) => onMove(e.touches[0].clientX)}
      >
        <img src={afterSrc} alt={afterAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={beforeSrc} alt={beforeAlt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>

        {/* handle */}
        <div
          className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-md cursor-ew-resize"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border border-border-strong flex items-center justify-center text-primary font-bold">
            ‹›
          </div>
        </div>

        <input
          type="range" min={0} max={100} value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Before / after slider"
          className="absolute inset-0 opacity-0 cursor-ew-resize"
        />

        <span className="absolute top-2 left-2 mono text-[11px] uppercase bg-black/60 text-on-primary px-2 py-1 rounded-sm">Before</span>
        <span className="absolute top-2 right-2 mono text-[11px] uppercase bg-primary text-on-primary px-2 py-1 rounded-sm">After</span>
      </div>
      {caption && (
        <figcaption className={cn("px-md py-sm text-[13px] border-t", dark ? "text-on-primary-muted border-white/10" : "text-text-muted border-border")}>{caption}</figcaption>
      )}
    </figure>
  );
}
