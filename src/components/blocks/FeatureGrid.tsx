"use client";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export type Feature = {
  icon?: LucideIcon;
  name: string;
  description: string;
  metric?: { value: string; label: string };
};

export type FeatureGridProps = {
  heading?: string;
  subheading?: string;
  features: Feature[];
  className?: string;
};

/**
 * 6-card feature grid (sm:2 / lg:3). Each card has an icon tile, name (h3),
 * description, and an optional metric pair. SSR-safe.
 */
export default function FeatureGrid({
  heading,
  subheading,
  features,
  className,
}: FeatureGridProps) {
  return (
    <Reveal as="section" className={cn("py-14 lg:py-20", className)}>
      <div className="mx-auto max-w-content px-5 md:px-6">
        {(heading || subheading) && (
          <div className="mb-2xl max-w-[680px]">
            {heading && (
              <h2 className="text-[26px] md:text-[34px] font-bold tracking-tight text-text">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-sm text-[16px] md:text-[18px] leading-relaxed text-text-muted">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-bg-card p-lg"
              >
                {Icon && (
                  <span className="mb-md inline-flex h-11 w-11 items-center justify-center rounded-xl bg-bg-card text-accent">
                    <Icon size={22} aria-hidden />
                  </span>
                )}
                <h3 className="text-[18px] font-bold text-text">{f.name}</h3>
                <p className="mt-sm text-[14px] leading-relaxed text-text-muted">
                  {f.description}
                </p>
                {f.metric && (
                  <div className="mt-auto pt-md">
                    <div className="text-[28px] font-bold leading-none text-accent">
                      {f.metric.value}
                    </div>
                    <div className="mt-1 text-[13px] text-text-muted">
                      {f.metric.label}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
