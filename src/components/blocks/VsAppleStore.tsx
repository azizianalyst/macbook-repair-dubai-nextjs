"use client";
// "Us vs Apple Store / Authorized centre" comparison - a conversion block that turns
// price-and-speed shoppers into bookings. All claims reflect the real independent model
// (component-level repair, ~50% of Apple pricing, same-day, free pickup, vintage support).
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Row = { label: string; us: string; them: string };

const DEFAULT_ROWS: Row[] = [
  { label: "Turnaround", us: "Same-day on most repairs", them: "5-10 business days (often sent away)" },
  { label: "Typical price", us: "Around half of Apple's pricing", them: "Full retail / whole-module swap" },
  { label: "Out-of-warranty & vintage", us: "Component-level board repair", them: "Often “not serviceable” - replace" },
  { label: "Your data", us: "Stays on the device, never wiped without consent", them: "Device often wiped or swapped" },
  { label: "Parts", us: "Genuine or quality-tested - your choice", them: "Genuine module swap only" },
  { label: "Getting it in", us: "Walk in or free pickup - no appointment", them: "Genius Bar appointment required" },
  { label: "Warranty", us: "Up to written warranty up to 12 months on the repair", them: "Varies by service" },
];

export function VsAppleStore({
  heading = "MacBook Repair Dubai vs the Apple Store",
  intro = "Independent, component-level repair - usually faster, cheaper, and kinder to your data than a whole-unit swap.",
  rows = DEFAULT_ROWS,
  tone = "light",
}: {
  heading?: string;
  intro?: string;
  rows?: Row[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
      <h2 className={cn("text-[28px] md:text-[32px] mb-sm", dark ? "text-text" : undefined)}>{heading}</h2>
      <p className={cn("text-[16px] max-w-[72ch] mb-lg", dark ? "text-text-muted" : "text-text-muted")}>{intro}</p>

      {/* Mobile: stack each factor as a card so the "Apple Store" column is never hidden off-screen. */}
      <ul className="md:hidden flex flex-col gap-sm">
        {rows.map((r) => (
          <li key={r.label} className="rounded-md border border-border bg-bg-card p-md">
            <p className="font-semibold text-text mb-sm">{r.label}</p>
            <p className="flex gap-2 text-[14px] text-text mb-xs">
              <Check size={16} className="shrink-0 mt-0.5 text-accent" aria-hidden />
              <span><span className="font-semibold text-accent">MacBook Repair Dubai:</span> {r.us}</span>
            </p>
            <p className="flex gap-2 text-[14px] text-text-muted">
              <X size={16} className="shrink-0 mt-0.5 text-text-faint" aria-hidden />
              <span><span className="font-semibold">Apple Store:</span> {r.them}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className={cn("hidden md:block overflow-x-auto rounded-md", dark ? "border border-border bg-bg-card" : "border border-border bg-bg-card shadow-sm")}>
        <table className="w-full text-[14px] min-w-[560px]">
          <caption className="sr-only">{heading}</caption>
          <thead>
            <tr className={cn("text-left border-b", dark ? "border-border" : "border-border")}>
              <th className={cn("px-md py-md font-semibold w-[28%]", dark ? "text-text-muted" : "text-text-muted")}> </th>
              <th className={cn("px-md py-md font-semibold bg-primary/[0.04]", dark ? "text-accent" : "text-primary")}>MacBook Repair Dubai</th>
              <th className={cn("px-md py-md font-semibold", dark ? "text-text-muted" : "text-text-muted")}>Apple Store / Authorized</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 ? (dark ? "bg-bg-alt" : "bg-bg-alt/40") : ""}>
                <td className={cn("px-md py-md font-semibold align-top", dark ? "text-text" : undefined)}>{r.label}</td>
                <td className={cn("px-md py-md align-top bg-primary/[0.04]", dark ? "text-text" : undefined)}>
                  <span className="flex gap-2"><Check size={16} className={cn("shrink-0 mt-0.5", dark ? "text-accent" : "text-accent")} aria-hidden /> {r.us}</span>
                </td>
                <td className={cn("px-md py-md align-top", dark ? "text-text-muted" : "text-text-muted")}>
                  <span className="flex gap-2"><X size={16} className={cn("shrink-0 mt-0.5", dark ? "text-text-faint" : "text-text-faint")} aria-hidden /> {r.them}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={cn("text-[13px] mt-sm max-w-[72ch]", dark ? "text-text-faint" : "text-text-faint")}>
        We are an independent specialist, not an Apple Authorized Service Provider. For in-warranty
        or AppleCare+ claims, Apple is the right call - we'll tell you honestly when that's the case.
      </p>
    </section>
  );
}
