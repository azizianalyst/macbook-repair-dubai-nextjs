"use client";
import { CalendarDays, Clock, User } from "lucide-react";

type Props = {
  lastUpdated?: string;       // only render when a REAL date is known - no fabricated literals
  author?: string;
  readingMinutes?: number;
};

export function PageMeta({ lastUpdated, author, readingMinutes }: Props) {
  if (!lastUpdated && !author && !readingMinutes) return null;
  return (
    <p className="flex flex-wrap items-center gap-md text-[13px] text-text-muted mono">
      {lastUpdated && <span className="flex items-center gap-1"><CalendarDays size={14} aria-hidden /> Last updated: {lastUpdated}</span>}
      {author && <span className="flex items-center gap-1"><User size={14} aria-hidden /> {author}</span>}
      {readingMinutes && <span className="flex items-center gap-1"><Clock size={14} aria-hidden /> {readingMinutes} min read</span>}
    </p>
  );
}
