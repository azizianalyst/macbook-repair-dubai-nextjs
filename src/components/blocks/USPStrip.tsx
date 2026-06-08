"use client";
import { Award, Clock, Search, ShieldCheck, Star, Truck, type LucideIcon } from "lucide-react";
import { USPS } from "@/content/site";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { Award, Clock, Search, ShieldCheck, Star, Truck };

// flat strip, no gradient, no blur.
export function USPStrip({ items = USPS, tone = "light" }: { items?: typeof USPS; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={cn("border-y", dark ? "border border-border bg-bg-card" : "bg-bg-alt border-border")}>
      <ul className="mx-auto max-w-content px-5 md:px-6 py-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-md">
        {items.map((u) => {
          const Icon = ICONS[u.icon] ?? ShieldCheck;
          return (
            <li key={u.label} className={cn("flex items-center gap-sm text-[14px] font-medium", dark ? "text-text" : "text-text")}>
              <Icon size={18} className={cn("shrink-0", dark ? "text-accent" : "text-accent")} aria-hidden />
              <span>{u.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
