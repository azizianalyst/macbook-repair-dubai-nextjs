"use client";
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export type RelatedItem = { label: string; href: string; description: string };

export function RelatedServices({
  items,
  tone = "light",
}: {
  items: RelatedItem[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section aria-label="Related services">
      <h2 className={cn("mb-lg", dark && "text-on-primary")}>Related repairs</h2>
      <div className="grid gap-md md:grid-cols-3">
        {items.slice(0, 3).map((it, i) => (
          <Reveal key={it.href} delay={i * 80}>
          <Link
            to={it.href}
            className={cn(
              "group block rounded-md p-lg motion-safe:transition motion-safe:hover:-translate-y-0.5",
              dark
                ? "border border-white/10 bg-white/[0.04] hover:border-accent-bright/40"
                : "bg-bg-card border border-border shadow-sm hover:shadow-md",
            )}
          >
            <p className={cn("font-semibold text-[16px] mb-2", dark && "text-on-primary")}>{it.label}</p>
            <p className={cn("text-[14px] mb-md", dark ? "text-on-primary-muted" : "text-text-muted")}>{it.description}</p>
            <span className={cn("inline-flex items-center gap-1 text-[14px] font-semibold group-hover:gap-2 transition-all", dark ? "text-accent-bright" : "text-primary")}>
              View details <ArrowRight size={14} aria-hidden />
            </span>
          </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
