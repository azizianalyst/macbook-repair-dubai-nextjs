"use client";
// AI-citation block: 40-word factual answer at top of every service / model / blog page.
// Renders Question + AcceptedAnswer microdata so crawlers (and AI Overviews) can lift it cleanly.
// The wrapping `.quick-answer` class is referenced by SpeakableSpecification xpath in schema.ts.
import { ReactNode } from "react";
import { warrantyClause, warrantyDaysForService } from "@/content/site";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export interface QuickAnswerProps {
  question: string;
  answer: ReactNode;
  /** Optional eyebrow label, default "Quick answer" */
  label?: string;
  /** "dark" for use on the bg-bg-alt band; default light */
  tone?: "light" | "dark";
  /** Extra classes on the outer section — lets a page embed the block inside its own grid */
  className?: string;
  /** Extra classes on the inner card — lets a page match surrounding card elevation/radius */
  cardClassName?: string;
}

export function QuickAnswer({ question, answer, label = "Quick answer", tone = "light", className, cardClassName }: QuickAnswerProps) {
  const dark = tone === "dark";
  return (
    <section
      className={cn("quick-answer mx-auto max-w-content px-5 md:px-6 mt-xl", className)}
      aria-label={label}
    >
      <Reveal className="h-full">
      <div
        className={cn(
          "border-l-4 rounded-md p-lg max-w-[72ch] h-full",
          dark ? "border border-border border-l-4 border-l-accent bg-bg-card" : "bg-bg-alt border-primary",
          cardClassName,
        )}
        itemScope
        itemType="https://schema.org/Question"
      >
        <h2
          className={cn("text-[12px] uppercase tracking-wider font-bold mb-xs mono", dark ? "text-accent" : "text-primary")}
          itemProp="name"
        >
          {question}
        </h2>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <p className={cn("text-[12px] uppercase tracking-wider mono mb-xs", dark ? "text-accent" : "text-accent")}>
            {label}
          </p>
          <div
            itemProp="text"
            className={cn("text-[16px] leading-relaxed", dark ? "text-text" : "text-text")}
          >
            {answer}
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers used by templates to auto-derive a 40-word factual answer  */
/* when the page does not pass an explicit override.                  */
/* ------------------------------------------------------------------ */

export function deriveServiceQuickAnswer(opts: {
  serviceName: string;
  startingPrice: number;
  timeline: string;
  warrantyDays?: number;
}): { question: string; answer: string } {
  const warrantyDays = opts.warrantyDays ?? warrantyDaysForService(opts.serviceName);
  return {
    question: `How much does ${opts.serviceName} in Dubai cost?`,
    answer:
      (opts.startingPrice > 0
        ? `${opts.serviceName} in Dubai starts from AED ${opts.startingPrice} - a starting price for the simplest model and fault. Your exact price is free to get and confirmed after we check your device's model and condition. `
        : `${opts.serviceName} in Dubai starts with a free diagnosis - we confirm the exact price before any work. `) +
      `Typical turnaround: ${opts.timeline}. ` +
      `All repairs include ${warrantyClause(warrantyDays)} on parts and labour, ` +
      `free pickup and delivery across Dubai mainland, and same-day completion on most common services.`,
  };
}

export function deriveFamilyQuickAnswer(opts: {
  family: string;
  startingPrice: number;
}): { question: string; answer: string } {
  return {
    question: `How much does ${opts.family} repair in Dubai cost?`,
    answer:
      `${opts.family} repair in Dubai starts from AED ${opts.startingPrice} - a starting price; your exact quote is free and confirmed after we check your model and its condition. Written warranty up to 12 months. ` +
      `Same-day to 5 days depending on the model and fault. Free pickup and delivery across Dubai. ` +
      `Genuine or OEM-grade parts. Quote in 4 minutes on WhatsApp.`,
  };
}

export default QuickAnswer;
