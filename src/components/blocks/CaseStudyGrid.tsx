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
    <Reveal as="section" className={cn("py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        {heading && (
          <h2 className="mb-2xl max-w-[680px] text-[26px] md:text-[34px] font-bold tracking-tight text-on-primary">
            {heading}
          </h2>
        )}

        <div className="grid gap-md md:grid-cols-3">
          {cases.map((c, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-lg"
            >
              <span className="inline-flex w-fit rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-bright">
                {c.tag}
              </span>

              <div className="mt-md text-[40px] font-bold leading-none tracking-tight text-on-primary">
                {c.metric}
              </div>
              {c.metricLabel && (
                <div className="mt-1 text-[13px] text-on-primary-muted">
                  {c.metricLabel}
                </div>
              )}

              <blockquote className="mt-md text-[15px] leading-relaxed text-on-primary-muted">
                {c.quote}
              </blockquote>

              {c.author && (
                <figcaption className="mt-md text-[13px] font-semibold text-on-primary">
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
