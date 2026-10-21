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
    <Reveal as="section" className={cn("py-3xl lg:py-4xl", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        <div className="max-w-[760px]">
          <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-text">
            {heading}
          </h2>
          {/* `definition` is typed `string | ReactNode`, and every real caller passes
              multiple <p> elements — but this wrapper was itself a <p>, so the markup
              came out as <p><p>…</p></p>. That is invalid HTML: the browser auto-closes
              the outer paragraph, the server and client trees disagree, and React threw
              "Hydration failed" on every page using the module, including the
              /azizi-template-demo proof page. A <div> makes block children legal.
              Rendered appearance is unchanged — the browser was already closing the
              outer <p> at the same point. */}
          <div className="mt-md text-[17px] md:text-[19px] leading-relaxed text-text-muted [&>p+p]:mt-md">
            {typeof definition === "string" ? (
              <p>
                <span className="font-semibold text-text">{entityName}</span>{" "}
                {definition}
              </p>
            ) : (
              <>
                <span className="font-semibold text-text">{entityName}</span>{" "}
                {definition}
              </>
            )}
          </div>
        </div>

        {benefits.length > 0 && (
          <div className="mt-2xl grid gap-md sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg"
                >
                  {Icon && (
                    <span className="mb-md inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={22} aria-hidden />
                    </span>
                  )}
                  <h3 className="text-[17px] font-bold text-text">{b.title}</h3>
                  <p className="mt-sm text-[14px] leading-relaxed text-text-muted">
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
