"use client";
// "From our blog" - surfaces the blog posts most relevant to the current page's topic.
// Self-contained: derives family/topics from the page path, hides itself when <2 matches.
import { Link } from "@/lib/router-compat";
import { ArrowRight } from "lucide-react";
import { relatedArticles, familyFromPath, topicsFromPath } from "@/lib/related-articles";
import { cn } from "@/lib/utils";

export function RelatedArticles({
  path,
  family,
  topics,
  heading = "From our blog",
  limit = 4,
  tone = "light",
}: {
  path: string;                 // current page path - used to derive family/topics + exclude self
  family?: string;              // override the derived family if needed
  topics?: string[];            // extra topics to boost
  heading?: string;
  limit?: number;
  tone?: "light" | "dark";      // "dark" for use on the bg-bg-alt band; default light
}) {
  const dark = tone === "dark";
  const fam = family ?? familyFromPath(path);
  const tps = [...new Set([...(topics ?? []), ...topicsFromPath(path)])];
  const posts = relatedArticles({ family: fam, topics: tps, excludeSlug: path, limit });
  if (posts.length < 2) return null;

  return (
    <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
      <h2 className={cn("text-[24px] md:text-[28px] mb-md", dark && "text-text")}>{heading}</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={p.slug}
            className={cn(
              "group flex items-center justify-between gap-md rounded-md px-lg py-md transition-colors",
              dark
                ? "border border-border bg-bg-card hover:border-accent/40"
                : "bg-bg-card border border-border hover:border-primary",
            )}
          >
            <span className={cn("text-[15px] font-medium leading-snug", dark ? "text-text group-hover:text-accent" : "group-hover:text-primary")}>{p.title}</span>
            <ArrowRight size={16} className={cn("shrink-0", dark ? "text-accent" : "text-primary")} aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
