"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * TradeInEstimator - a valuation *request* tool, not a price oracle.
 *
 * Three selects (device / model-era / condition) build a pre-filled WhatsApp
 * message so Shafiq can give an exact, human valuation. We deliberately do NOT
 * display a fabricated AED payout figure - every quote is confirmed by a real
 * technician. SSR-safe: no top-level browser APIs, useState defaults render
 * cleanly on the server, and the CTA is a plain <a> (works without JS).
 */

const DEVICE_OPTIONS = [
  { value: "", label: "Choose your device" },
  { value: "MacBook Pro", label: "MacBook Pro" },
  { value: "MacBook Air", label: "MacBook Air" },
  { value: "iMac", label: "iMac" },
  { value: "Mac mini / Mac Studio / Mac Pro", label: "Mac mini / Studio / Pro" },
  { value: "iPhone", label: "iPhone" },
  { value: "iPad", label: "iPad" },
] as const;

const ERA_OPTIONS = [
  { value: "", label: "Choose model / era" },
  { value: "Apple Silicon M5 (M5 / M5 Pro / M5 Max)", label: "Apple Silicon - M5 / M5 Pro / M5 Max (newest)" },
  { value: "Apple Silicon M4", label: "Apple Silicon - M4" },
  { value: "Apple Silicon M3", label: "Apple Silicon - M3" },
  { value: "Apple Silicon M2", label: "Apple Silicon - M2" },
  { value: "Apple Silicon M1", label: "Apple Silicon - M1" },
  { value: "Intel-based", label: "Intel-based" },
  { value: "Older / not sure", label: "Older model / not sure" },
] as const;

const CONDITION_OPTIONS = [
  { value: "", label: "Choose condition" },
  { value: "Working - good condition", label: "Working - good condition" },
  { value: "Minor damage (still works)", label: "Minor damage (still works)" },
  { value: "Not working / faulty", label: "Not working / faulty - we buy these too" },
] as const;

const arrowBg = cn(
  // native select arrow replaced with a token-coloured chevron
  "bg-[length:18px] bg-[right_0.75rem_center] bg-no-repeat",
  "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')]",
);

const selectClassesLight = cn(
  "w-full appearance-none rounded-md border border-border bg-bg px-md py-3 pr-10",
  "text-[15px] text-text",
  "shadow-sm transition-colors",
  "hover:border-border-strong focus:border-primary focus:outline-none",
  "focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg-card",
  arrowBg,
);

const selectClassesDark = cn(
  "w-full appearance-none rounded-md border border-white/10 bg-white/[0.04] px-md py-3 pr-10",
  "text-[15px] text-on-primary placeholder:text-on-primary-faint",
  "transition-colors",
  "hover:border-white/30 focus:border-accent-bright focus:outline-none",
  "focus-visible:ring-2 focus-visible:ring-accent-bright/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg-card",
  "[&>option]:bg-bg-card [&>option]:text-text",
  arrowBg,
);

type Props = {
  className?: string;
  /** Optional heading override; falls back to a sensible default. */
  heading?: string;
  tone?: "light" | "dark";
};

export function TradeInEstimator({ className, heading, tone = "light" }: Props) {
  const dark = tone === "dark";
  const selectClasses = dark ? selectClassesDark : selectClassesLight;
  const [device, setDevice] = useState("");
  const [era, setEra] = useState("");
  const [condition, setCondition] = useState("");

  const hasSelection = Boolean(device || era || condition);
  const isComplete = Boolean(device && era && condition);

  // Build the pre-filled WhatsApp message from whatever has been selected.
  const lines = [
    "Hi MacBook Repair Dubai - I'd like a trade-in valuation for my Apple device:",
    device ? `• Device: ${device}` : null,
    era ? `• Model / era: ${era}` : null,
    condition ? `• Condition: ${condition}` : null,
    "Can you tell me what you'd offer?",
  ].filter(Boolean);

  const whatsappHref = `${NAP.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;

  // Reassuring, condition-aware line - never a dirham figure.
  const reassurance = condition.startsWith("Not working")
    ? "Great - we buy faulty devices too. Get your exact valuation in minutes."
    : "Great - we buy that, working or not. Get your exact valuation in minutes.";

  return (
    <div
      className={cn(
        "rounded-lg p-lg md:p-xl",
        dark ? "border border-white/10 bg-white/[0.04]" : "bg-bg-card border border-border shadow-md",
        className,
      )}
    >
      <h3 className={cn("m-0 mb-xs text-[clamp(1.25rem,3vw,1.6rem)] font-bold tracking-tight", dark ? "text-on-primary" : "text-text")}>
        {heading ?? "Trade in your Apple device"}
      </h3>
      <p className={cn("m-0 mb-lg text-[15px] leading-relaxed max-w-[58ch]", dark ? "text-on-primary-muted" : "text-text-muted")}>
        Tell us what you have and Shafiq will send your exact offer on WhatsApp - working or not,
        we buy faulty devices too. Every quote is confirmed by a real technician, no lowball bots.
      </p>

      <div className="grid gap-md sm:grid-cols-3">
        <label className="block">
          <span className={cn("mb-1.5 block text-[13px] font-semibold", dark ? "text-on-primary" : "text-text")}>Device type</span>
          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            className={selectClasses}
            aria-label="Device type"
          >
            {DEVICE_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={cn("mb-1.5 block text-[13px] font-semibold", dark ? "text-on-primary" : "text-text")}>Model / era</span>
          <select
            value={era}
            onChange={(e) => setEra(e.target.value)}
            className={selectClasses}
            aria-label="Model or era"
          >
            {ERA_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className={cn("mb-1.5 block text-[13px] font-semibold", dark ? "text-on-primary" : "text-text")}>Condition</span>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className={selectClasses}
            aria-label="Condition"
          >
            {CONDITION_OPTIONS.map((o) => (
              <option key={o.label} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {hasSelection && (
        <p
          className={cn(
            "mt-lg mb-0 rounded-md p-md text-[15px] font-medium leading-relaxed",
            dark ? "text-on-primary border border-white/10 bg-white/[0.04]" : "text-text bg-bg-alt border border-border",
          )}
          role="status"
        >
          {reassurance}
        </p>
      )}

      <div className="mt-lg flex flex-col gap-xs">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp-tradein"
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 rounded-md px-lg py-3.5",
            "bg-primary text-on-primary text-[15px] font-semibold",
            "min-h-[44px]",
            dark ? undefined : "shadow-sm",
            "motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card",
          )}
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          Get my valuation on WhatsApp
        </a>
        <span className={cn("text-center text-[13px]", dark ? "text-on-primary-faint" : "text-text-faint")}>
          {isComplete
            ? "We usually reply with your offer in under 10 minutes during shop hours."
            : "Pick what you can - Shafiq will fill in the rest on chat."}
        </span>
      </div>
    </div>
  );
}

export default TradeInEstimator;
