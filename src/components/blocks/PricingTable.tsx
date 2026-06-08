"use client";
import { MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { Reveal } from "@/components/blocks/Reveal";
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
  return (
    <Reveal className={cn(
      "overflow-x-auto border rounded-md motion-safe:hover:-translate-y-0.5 hover:shadow-md",
      dark ? "border-border bg-bg-alt" : "border-border bg-bg-card shadow-sm",
    )}>
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
              <td className={cn("px-md py-sm mono font-semibold", dark ? "text-accent" : "text-primary")}>AED {r.price}</td>
              <td className={cn("px-md py-sm mono", dark ? "text-text-muted" : "text-text-muted")}>{r.timeline}</td>
              <td className="px-md py-sm text-right">
                <a
                  href={`${NAP.whatsappUrl}?text=${encodeURIComponent(`Hi, quote for ${r.model} ${service}`)}`}
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
    </Reveal>
  );
}
