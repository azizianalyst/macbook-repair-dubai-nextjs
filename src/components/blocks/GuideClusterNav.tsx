"use client";
// Guide-cluster cross-linking. How-to guides previously linked 0% to their /macbook-guides hub
// and barely to each other (a weak silo). Rendered by BlogPostTemplate when the page is a guide
// (guideBySlug match), this adds a hub backlink + sibling guides — same theme first, then fill —
// so every guide links up to the hub and across to its siblings.
import { Link } from "@/lib/router-compat";
import { ArrowRight, BookOpen } from "lucide-react";
import { GUIDES, guideBySlug } from "@/content/guides";
import { cn } from "@/lib/utils";

export function GuideClusterNav({ slug, limit = 3 }: { slug: string; limit?: number }) {
  const current = guideBySlug(slug);
  if (!current) return null;

  // Same-theme siblings first (most relevant), then fill from the rest of the cluster.
  const others = GUIDES.filter((g) => g.slug !== slug);
  const sameTheme = others.filter((g) => g.theme === current.theme);
  const rest = others.filter((g) => g.theme !== current.theme);
  const siblings = [...sameTheme, ...rest].slice(0, limit);

  return (
    <section aria-label="More MacBook guides" className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
      <div className="flex flex-wrap items-center justify-between gap-sm mb-md">
        <h2 className="text-[24px] md:text-[28px] text-text">More MacBook guides</h2>
        <Link
          to="/macbook-guides"
          className="inline-flex items-center gap-1 text-[14px] font-semibold text-accent hover:gap-2 transition-all"
        >
          <BookOpen size={15} aria-hidden /> All MacBook guides <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {siblings.map((g) => (
          <Link
            key={g.slug}
            to={g.slug}
            className={cn(
              "group flex items-center justify-between gap-md rounded-md px-lg py-md transition-colors",
              "border border-border/70 bg-bg-card ring-1 ring-black/[0.03] hover:border-accent/40",
            )}
          >
            <span className="text-[15px] font-medium leading-snug text-text group-hover:text-accent">{g.title}</span>
            <ArrowRight size={16} className="shrink-0 text-accent" aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
