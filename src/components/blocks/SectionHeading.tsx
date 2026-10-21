"use client";
// Shared centered section heading — the accent-eyebrow + large bold H2 style from the
// MacBook Pro master template (src/views/MacBookProRepair.tsx). Used across every
// service / device / area / city template so section headers match the hub exactly.
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-[48px]", className)}>
      {eyebrow && (
        <p className="text-center text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-center text-[32px] md:text-[44px] font-bold tracking-tight text-text leading-[1.12]">
        {title}
      </h2>
      {sub && (
        <p className="text-center mt-5 text-[16px] text-text-muted max-w-[60ch] mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
