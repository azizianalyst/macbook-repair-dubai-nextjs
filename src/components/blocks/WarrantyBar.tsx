"use client";
import { Clock, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";
import { warrantyLabel } from "@/content/site";

// single-line trust strip. tinted bg, no gradient.
// `warrantyDays` drives the warranty claim so the strip never contradicts the page's
// own warranty: battery/screen=90 → "3-month", board/liquid/software/data=15 → "15-day",
// hardware=365 → "12-month", unlock=0 → warranty chip dropped (no over-promise).
// Omit the prop to fall back to the brand-wide qualified "Up to 12-month warranty".
export function WarrantyBar({
  tone = "light",
  warrantyDays,
}: { tone?: "light" | "dark"; warrantyDays?: number } = {}) {
  const dark = tone === "dark";
  const label = warrantyDays === undefined ? "" : warrantyLabel(warrantyDays);
  const warrantyText =
    warrantyDays === undefined
      ? "Up to 12-month warranty"
      : label
        ? `${label} written warranty`
        : null; // unlock / no-warranty services: drop the chip rather than over-promise
  const items = [
    warrantyText ? { icon: ShieldCheck, label: warrantyText } : null,
    { icon: Wallet, label: "No fix, no charge" },
    { icon: Clock,  label: "30-min appointment repairs" },
  ].filter(Boolean) as { icon: typeof ShieldCheck; label: string }[];
  return (
    <Reveal className={cn("border-y", dark ? "border border-border bg-bg-card" : "bg-accent/10 border-accent/30")}>
      <ul className="mx-auto max-w-content px-5 md:px-6 py-md flex flex-wrap items-center justify-center gap-x-xl gap-y-sm">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className={cn("flex items-center gap-sm text-[14px] font-medium", dark ? "text-text" : "text-text")}>
            <Icon size={16} className="text-accent shrink-0" aria-hidden />
            {label}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
