"use client";
import { Link } from "@/lib/router-compat";
import { ArrowRight, MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  service: string;
  startingPrice: number;       // AED
  timeline: string;            // "Same day" / "1-2 days"
  href?: string;               // detail page
  whatsappMessage?: string;    // prefilled
  tone?: "light" | "dark";     // "dark" for use on the bg-bg-alt band; default light
};

export function PriceCard({ service, startingPrice, timeline, href, whatsappMessage, tone = "light" }: Props) {
  const dark = tone === "dark";
  const wa = whatsappMessage
    ? `${NAP.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`
    : NAP.whatsappUrl;

  return (
    <article className={cn(
      "rounded-md p-lg hover:shadow-md transition-shadow flex flex-col gap-md",
      dark ? "border border-border bg-bg-card" : "bg-bg-card border border-border shadow-sm",
    )}>
      <h3 className={cn("text-[18px] font-bold leading-snug", dark && "text-text")}>{service}</h3>

      <div className="flex items-baseline gap-2">
        <span className={cn("text-[12px] uppercase tracking-wider", dark ? "text-text-faint" : "text-text-faint")}>From</span>
        <span className={cn("mono text-[24px] font-semibold", dark ? "text-accent" : "text-primary")}>AED {startingPrice}</span>
      </div>

      <p className={cn("mono text-[13px]", dark ? "text-text-muted" : "text-text-muted")}>{timeline}</p>

      <div className="mt-auto flex items-center justify-between gap-sm pt-sm">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[14px] font-semibold text-whatsapp hover:underline"
        >
          <MessageCircle size={16} aria-hidden /> Quote on WhatsApp
        </a>
        {href && (
          <Link to={href} className={cn(
            "inline-flex items-center gap-1 text-[14px]",
            dark ? "text-text-muted hover:text-accent" : "text-text-muted hover:text-primary",
          )}>
            Details <ArrowRight size={14} aria-hidden />
          </Link>
        )}
      </div>
    </article>
  );
}
