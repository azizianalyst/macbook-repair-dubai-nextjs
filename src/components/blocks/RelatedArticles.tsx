"use client";
// "From our blog" - surfaces the blog posts most relevant to the current page's topic.
// Self-contained: derives family/topics from the page path, hides itself when <2 matches.
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import { relatedArticles, familyFromPath, topicsFromPath } from "@/lib/related-articles";

export function RelatedArticles({
  path,
  family,
  topics,
  heading = "From our blog",
  limit = 5,
}: {
  path: string;
  family?: string;
  topics?: string[];
  heading?: string;
  limit?: number;
  tone?: "light" | "dark"; // kept for API compat, not used
}) {
  const fam = family ?? familyFromPath(path);
  const tps = [...new Set([...(topics ?? []), ...topicsFromPath(path)])];
  const posts = relatedArticles({ family: fam, topics: tps, excludeSlug: path, limit });
  if (posts.length < 2) return null;

  return (
    <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px] mb-[80px]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-1">Blog</p>
          <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-text">{heading}</h2>
        </div>
        <Link
          to="/blog"
          className="hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:underline shrink-0"
        >
          All articles <ArrowRight size={14} aria-hidden />
        </Link>
      </div>

      {/* horizontal scroll on mobile, grid on sm+ */}
      <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:overflow-visible sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0">
        {posts.map((p) => {
          const year = p.date?.slice(0, 4) ?? "";
          return (
            <Link
              key={p.slug}
              to={p.slug}
              className="group flex flex-col justify-between gap-3 rounded-xl border border-border bg-bg-card p-4 hover:border-accent/50 transition-colors shrink-0 w-[260px] sm:w-auto"
            >
              <p className="text-[14px] font-medium text-text leading-snug group-hover:text-accent line-clamp-3">
                {p.title}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-text-faint">{year}</span>
                <ArrowRight size={14} className="text-accent opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-4 sm:hidden text-center">
        <Link to="/blog" className="inline-flex items-center gap-1 text-[13px] font-semibold text-accent hover:underline">
          All articles <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
