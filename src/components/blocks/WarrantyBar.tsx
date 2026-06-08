"use client";
import { Clock, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

// single-line trust strip. tinted bg, no gradient.
export function WarrantyBar({ tone = "light" }: { tone?: "light" | "dark" } = {}) {
  const dark = tone === "dark";
  const items = [
    { icon: ShieldCheck, label: "90-day written warranty" },
    { icon: Wallet,      label: "No fix, no charge" },
    { icon: Clock,       label: "Same-day on common repairs" },
  ];
  return (
    <Reveal className={cn("border-y", dark ? "border border-border bg-bg-card" : "bg-success/10 border-success/30")}>
      <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap items-center justify-center gap-x-xl gap-y-sm">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className={cn("flex items-center gap-sm text-[14px] font-medium", dark ? "text-text" : "text-text")}>
            <Icon size={16} className="text-success shrink-0" aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
