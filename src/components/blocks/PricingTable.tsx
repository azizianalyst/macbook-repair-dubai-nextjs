"use client";
import { MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { Reveal } from "@/components/blocks/Reveal";
import { ScrollHintTable } from "@/components/blocks/ScrollHintTable";
import { cn } from "@/lib/utils";

export type PricingRow = {
  model: string;
  price: number;       // AED
  timeline: string;    // "Same day"
};

type Props = {
  service: string;             // header label
  rows: PricingRow[];
  caption?: string;
  tone?: "light" | "dark";     // "dark" for use on the bg-bg-alt band; default light
};

export function PricingTable({ service, rows, caption, tone = "light" }: Props) {
  const dark = tone === "dark";
  const quoteHref = (model: string) =>
    `${NAP.whatsappUrl}?text=${encodeURIComponent(`Hi, quote for ${model} ${service}`)}`;
  return (
    <Reveal className={cn(
      "border rounded-md motion-safe:hover:-translate-y-0.5 hover:shadow-md",
      dark ? "border-border bg-bg-alt" : "border-border bg-bg-card shadow-sm",
    )}>
      {/* Mobile: stacked rows so model + price + timeline are always visible (never clipped). */}
      <ul className="md:hidden divide-y divide-border">
        {rows.map((r) => (
          <li key={r.model} className="flex items-center justify-between gap-md px-md py-sm">
            <div className="min-w-0">
              <p className={cn("font-medium truncate", dark ? "text-text" : "text-text")}>{r.model}</p>
              <p className="text-[13px] text-text-muted mono">{r.timeline}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className={cn("mono font-semibold", dark ? "text-accent" : "text-primary")}>AED {r.price.toLocaleString("en-US")}</p>
              <a
                href={quoteHref(r.model)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] text-whatsapp font-semibold hover:underline"
              >
                <MessageCircle size={13} aria-hidden /> Quote
              </a>
            </div>
          </li>
        ))}
      </ul>
      {/* Desktop: full table, with a scroll hint as a safety net on mid widths. */}
      <ScrollHintTable className="hidden md:block" fadeClass={dark ? "from-bg-alt" : "from-bg-card"}>
        <table className="w-full text-[14px] min-w-[520px]">
          <caption className="sr-only">{caption ?? `${service} pricing`}</caption>
          <thead className={cn("sticky top-0", dark ? "bg-bg-card" : "bg-bg-alt")}>
            <tr className={cn("text-left", dark && "text-accent")}>
              <th scope="col" className="px-md py-sm font-semibold">Model</th>
              <th scope="col" className="px-md py-sm font-semibold">{service}</th>
              <th scope="col" className="px-md py-sm font-semibold">Timeline</th>
              <th scope="col" className="px-md py-sm font-semibold text-right">Book</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.model} className={cn(dark ? "border-b border-border last:border-0" : (i % 2 ? "bg-bg-alt/40" : ""))}>
                <td className={cn("px-md py-sm", dark && "text-text")}>{r.model}</td>
                <td className={cn("px-md py-sm mono font-semibold", dark ? "text-accent" : "text-primary")}>AED {r.price.toLocaleString("en-US")}</td>
                <td className={cn("px-md py-sm mono", dark ? "text-text-muted" : "text-text-muted")}>{r.timeline}</td>
                <td className="px-md py-sm text-right">
                  <a
                    href={quoteHref(r.model)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-whatsapp font-semibold hover:underline"
                  >
                    <MessageCircle size={14} aria-hidden /> Quote
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollHintTable>
    </Reveal>
  );
}
