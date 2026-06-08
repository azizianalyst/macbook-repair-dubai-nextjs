"use client";
import { Link } from "@/lib/router-compat";
import { ChevronRight } from "lucide-react";
import { breadcrumbs } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

export function BreadcrumbTrail({ trail, tone = "light" }: { trail: Crumb[]; tone?: "light" | "dark" }) {
  if (trail.length === 0) return null;
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" className={cn("text-[13px] mb-md", dark ? "text-text-faint" : "text-text-muted")}>
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={`${c.path}-${i}`} className="flex items-center gap-1">
              {!last ? (
                <Link to={c.path} className={cn("rounded focus-visible:outline-none focus-visible:ring-2", dark ? "hover:text-text focus-visible:ring-accent" : "hover:text-primary focus-visible:ring-accent")}>{c.name}</Link>
              ) : (
                <span aria-current="page" className={dark ? "text-text" : "text-text"}>{c.name}</span>
              )}
              {!last && <ChevronRight size={12} aria-hidden className={dark ? "text-text-faint" : "text-text-faint"} />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs(trail)) }}
      />
    </nav>
  );
}
