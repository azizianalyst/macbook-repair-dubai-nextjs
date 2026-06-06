"use client";
import { Link } from "@/lib/router-compat";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type DeviceFamily = {
  name: string;
  href: string;
  startingPrice: number;
  models: string;          // "Air, Pro 13-16, M1-M5"
  icon: LucideIcon;
  tone?: "light" | "dark";
};

export function DeviceFamilyCard({ name, href, startingPrice, models, icon: Icon, tone = "light" }: DeviceFamily) {
  const dark = tone === "dark";
  return (
    <Link
      to={href}
      className={cn(
        "group block rounded-md p-lg transition-shadow",
        dark
          ? "border border-white/10 bg-white/[0.04]"
          : "bg-bg-card border border-border shadow-sm hover:shadow-md",
      )}
    >
      <Icon size={32} className={cn("mb-md", dark ? "text-accent-bright" : "text-accent")} aria-hidden />
      <p className={cn("font-bold text-[18px] mb-1", dark ? "text-on-primary" : undefined)}>{name}</p>
      <p className={cn("text-[13px] mb-sm", dark ? "text-on-primary-muted" : "text-text-muted")}>{models}</p>
      <p className={cn("mono text-[13px] mb-md", dark ? "text-on-primary-faint" : "text-text-faint")}>From AED {startingPrice}</p>
      <span className={cn("inline-flex items-center gap-1 text-[14px] font-semibold group-hover:gap-2 transition-all", dark ? "text-accent-bright" : "text-primary")}>
        See repairs <ArrowRight size={14} aria-hidden />
      </span>
    </Link>
  );
}
