"use client";
// Shared dark stats band — the signature trust strip from the MacBook Pro master
// template (src/views/MacBookProRepair.tsx). Used across every service / device /
// area / city template so all pages carry the same recognisable look.
// Brand-level facts only (always true, never contradicts a page's own warranty days).
import { REVIEW_COUNT } from "@/content/site";

type Stat = { stat: string; label: string };

const DEFAULT_STATS: Stat[] = [
  { stat: "20+", label: "Years in Dubai" },
  { stat: `${REVIEW_COUNT}+`, label: "Google reviews" },
  { stat: "30 min", label: "Appointment repair" },
  { stat: "Up to 12mo", label: "Written warranty" },
];

export function StatBand({
  stats = DEFAULT_STATS,
  className = "mt-xl",
}: { stats?: Stat[]; className?: string }) {
  return (
    <section
      className={className}
      style={{
        background: "#2C3137",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.15)",
      }}
    >
      <div className="mx-auto max-w-content px-5 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map(({ stat, label }, i) => (
            <div
              key={label}
              className="py-lg px-xl flex flex-col justify-center"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : undefined,
                textShadow: "0 2px 12px rgba(0,0,0,0.6)",
              }}
            >
              <p className="text-[32px] md:text-[40px] font-bold leading-none tracking-tight text-white">{stat}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-on-primary-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatBand;
