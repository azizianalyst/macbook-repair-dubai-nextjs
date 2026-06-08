"use client";
// Contextual bridge from a how-to guide to the most relevant repair service.
// Turns informational guide traffic into repair leads. Looks the bridge up by slug.
import { Link } from "@/lib/router-compat";
import { ArrowRight, Wrench } from "lucide-react";
import { guideBySlug } from "@/content/guides";
import { cn } from "@/lib/utils";

export function GuideServiceBridge({ slug, tone = "light" }: { slug: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const g = guideBySlug(slug);
  if (!g) return null;
  const { line, label, href } = g.bridge;
  return (
    <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
      <div className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-md rounded-md p-lg",
        dark ? "border border-border bg-bg-card" : "bg-bg-alt border border-border",
      )}>
        <Wrench size={22} className={cn("shrink-0", dark ? "text-accent" : "text-accent")} aria-hidden />
        <p className={cn("text-[15px] flex-1 m-0", dark ? "text-text-muted" : "text-text")}>{line}</p>
        <Link
          to={href}
          className={cn("inline-flex items-center gap-2 text-[15px] font-semibold hover:underline shrink-0", dark ? "text-accent" : "text-primary")}
        >
          {label} <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
