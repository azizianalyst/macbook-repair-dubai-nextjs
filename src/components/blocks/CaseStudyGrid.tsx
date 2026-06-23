"use client";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export type CaseStudy = {
  tag: string;
  metric: string;
  metricLabel?: string;
  quote: string;
  author?: string;
};

export type CaseStudyGridProps = {
  heading?: string;
  cases: CaseStudy[];
  className?: string;
};

/**
 * 3-card outcomes grid (md:3). Each card: uppercase repair/industry tag pill,
 * a big metric number, optional metric label, a short customer quote, optional
 * author line. SSR-safe.
 */
export default function CaseStudyGrid({
  heading,
  cases,
  className,
}: CaseStudyGridProps) {
  return (
    <Reveal as="section" className={cn("py-3xl lg:py-4xl", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        {heading && (
          <h2 className="mb-2xl max-w-[680px] text-[28px] md:text-[32px] font-semibold tracking-tight text-text">
            {heading}
          </h2>
        )}

        <div className="grid gap-md md:grid-cols-3">
          {cases.map((c, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-md border border-border bg-bg-card p-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                {c.tag}
              </span>

              <div className="mt-md text-[40px] font-bold leading-none tracking-tight text-text">
                {c.metric}
              </div>
              {c.metricLabel && (
                <div className="mt-1 text-[13px] text-text-muted">
                  {c.metricLabel}
                </div>
              )}

              <blockquote className="mt-md text-[15px] leading-relaxed text-text-muted">
                {c.quote}
              </blockquote>

              {c.author && (
                <figcaption className="mt-md text-[13px] font-semibold text-text">
                  {c.author}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
