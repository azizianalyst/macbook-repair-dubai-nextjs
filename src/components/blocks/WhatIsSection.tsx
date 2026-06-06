"use client";
import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export type WhatIsBenefit = {
  icon?: LucideIcon;
  title: string;
  body: string;
};

export type WhatIsSectionProps = {
  heading: string;
  entityName: string;
  definition: string | ReactNode;
  benefits: WhatIsBenefit[];
  className?: string;
};

/**
 * Entity-definition lead block ("What is X") for AI search, followed by a
 * 4-card benefit grid. SSR-safe, single h2.
 */
export default function WhatIsSection({
  heading,
  entityName,
  definition,
  benefits,
  className,
}: WhatIsSectionProps) {
  return (
    <Reveal as="section" className={cn("py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        <div className="max-w-[760px]">
          <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight text-on-primary">
            {heading}
          </h2>
          <p className="mt-md text-[17px] md:text-[19px] leading-relaxed text-on-primary-muted">
            <span className="font-semibold text-on-primary">{entityName}</span>{" "}
            {definition}
          </p>
        </div>

        {benefits.length > 0 && (
          <div className="mt-2xl grid gap-md sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-lg"
                >
                  {Icon && (
                    <span className="mb-md inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06] text-accent-bright">
                      <Icon size={22} aria-hidden />
                    </span>
                  )}
                  <h3 className="text-[17px] font-bold text-on-primary">{b.title}</h3>
                  <p className="mt-sm text-[14px] leading-relaxed text-on-primary-muted">
                    {b.body}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Reveal>
  );
}
