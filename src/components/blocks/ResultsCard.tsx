"use client";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/blocks/Reveal";
import { CountUp } from "@/components/blocks/CountUp";

export type ResultsCardStatusTone = "live" | "tracking" | "online";

export interface ResultsCardProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  status?: { label: string; tone?: ResultsCardStatusTone };
  stats: { value: string; label: string }[];
  breakdown?: { name: string; value: string }[];
  className?: string;
}

const TONE_DOT: Record<ResultsCardStatusTone, string> = {
  live: "bg-emerald-400",
  tracking: "bg-emerald-400",
  online: "bg-emerald-400",
};

/**
 * Small animated status pill: a pinging dot + a solid dot + a label.
 * Used in the card header to signal "Live" / "Tracking" / "Online".
 */
function StatusPill({ label, tone = "live" }: { label: string; tone?: ResultsCardStatusTone }) {
  const dot = TONE_DOT[tone];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/80">
      <span className="relative inline-flex h-2 w-2">
        <span
          className={cn(
            "absolute inline-flex h-full w-full rounded-full opacity-75 motion-safe:animate-ping",
            dot,
          )}
          aria-hidden="true"
        />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dot)} aria-hidden="true" />
      </span>
      {label}
    </span>
  );
}

/**
 * Glassmorphism results card for the dark hero band's right column.
 * Pure HTML (never an image) so the numbers are real, crawlable text.
 * SSR-safe: CountUp renders the final value immediately, Reveal is no-JS safe.
 */
export function ResultsCard({
  icon: Icon,
  title,
  subtitle,
  status,
  stats,
  breakdown,
  className,
}: ResultsCardProps) {
  const tiles = stats.slice(0, 4);

  return (
    <Reveal className={cn("relative", className)}>
      {/* soft radial accent glow behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_30%,hsl(150_84%_40%/0.28),transparent_70%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-md shadow-lg backdrop-blur-xl sm:p-lg">
        {/* Header row */}
        <div className="flex items-start gap-3">
          {Icon ? (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[hsl(150_84%_40%/0.18)] text-emerald-300">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          ) : null}

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {subtitle ? (
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50">
                    {subtitle}
                  </p>
                ) : null}
                <h3 className="truncate text-base font-semibold text-on-primary sm:text-lg">
                  {title}
                </h3>
              </div>
              {status ? <StatusPill label={status.label} tone={status.tone} /> : null}
            </div>
          </div>
        </div>

        {/* 2x2 stat grid */}
        {tiles.length > 0 ? (
          <div className="mt-md grid grid-cols-2 gap-3">
            {tiles.map((s, i) => (
              <div
                key={`${s.label}-${i}`}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="text-3xl font-extrabold leading-none text-on-primary sm:text-4xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1.5 text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        {/* Optional breakdown list */}
        {breakdown && breakdown.length > 0 ? (
          <div className="mt-md divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.04]">
            {breakdown.map((row, i) => (
              <div
                key={`${row.name}-${i}`}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm"
              >
                <span className="min-w-0 truncate text-white/70">{row.name}</span>
                <span className="shrink-0 font-semibold text-on-primary">{row.value}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}

export default ResultsCard;
