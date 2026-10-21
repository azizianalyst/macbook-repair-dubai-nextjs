"use client";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export type Step = { title: string; body: string };

// numbered, not iconic - numbers signal sequence better. A subtle connecting
// line threads the steps together (decorative, reduced-motion + no-CLS safe).
export function StepList({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className="relative grid gap-lg md:grid-cols-2 lg:grid-cols-4">
      {/* connecting line - only on the 4-up desktop row, behind the cards */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent to-transparent lg:block",
          dark ? "via-white/15" : "via-border",
        )}
      />
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={i}
          delay={i * 80}
          className={cn(
            "group relative flex gap-md rounded-md border p-md motion-safe:transition motion-safe:hover:-translate-y-0.5 hover:shadow-md",
            dark
              ? "border-border bg-bg-card hover:border-border-strong"
              : "border-border bg-bg-card shadow-sm hover:border-border-strong",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "relative shrink-0 w-10 h-10 rounded-md font-heading font-bold text-[18px] flex items-center justify-center ring-4 transition-colors duration-300 group-hover:bg-accent",
              dark
                ? "bg-accent text-white ring-white/10"
                : "bg-bg-alt text-text shadow-sm ring-bg-alt",
            )}
          >
            {i + 1}
          </span>
          <div>
            <p className={cn("font-semibold text-[16px] mb-1", dark && "text-text")}>{s.title}</p>
            <p className={cn("text-[14px] leading-relaxed", dark ? "text-text-muted" : "text-text-muted")}>{s.body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
