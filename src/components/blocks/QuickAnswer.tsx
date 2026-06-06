"use client";
// AI-citation block: 40-word factual answer at top of every service / model / blog page.
// Renders Question + AcceptedAnswer microdata so crawlers (and AI Overviews) can lift it cleanly.
// The wrapping `.quick-answer` class is referenced by SpeakableSpecification xpath in schema.ts.
import { ReactNode } from "react";
import { Reveal } from "@/components/blocks/Reveal";
import { cn } from "@/lib/utils";

export interface QuickAnswerProps {
  question: string;
  answer: ReactNode;
  /** Optional eyebrow label, default "Quick answer" */
  label?: string;
  /** "dark" for use on the bg-primary band; default light */
  tone?: "light" | "dark";
}

export function QuickAnswer({ question, answer, label = "Quick answer", tone = "light" }: QuickAnswerProps) {
  const dark = tone === "dark";
  return (
    <section
      className="quick-answer mx-auto max-w-content px-5 md:px-6 mt-xl"
      aria-label={label}
    >
      <Reveal>
      <div
        className={cn(
          "border-l-4 rounded-md p-lg max-w-[72ch]",
          dark ? "border border-white/10 border-l-4 border-l-accent-bright bg-white/[0.04]" : "bg-bg-alt border-primary",
        )}
        itemScope
        itemType="https://schema.org/Question"
      >
        <h2
          className={cn("text-[12px] uppercase tracking-wider font-bold mb-xs mono", dark ? "text-accent-bright" : "text-primary")}
          itemProp="name"
        >
          {question}
        </h2>
        <div
          itemProp="acceptedAnswer"
          itemScope
          itemType="https://schema.org/Answer"
        >
          <p className={cn("text-[10px] uppercase tracking-wider mono mb-xs", dark ? "text-on-primary-faint" : "text-text-faint")}>
            {label}
          </p>
          <div
            itemProp="text"
            className={cn("text-[16px] leading-relaxed", dark ? "text-on-primary" : "text-text")}
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
  const warranty = opts.warrantyDays ?? 90;
  return {
    question: `How much does ${opts.serviceName} in Dubai cost?`,
    answer:
      `${opts.serviceName} in Dubai starts from AED ${opts.startingPrice}. ` +
      `Typical turnaround: ${opts.timeline}. ` +
      `All repairs include a ${warranty}-day written warranty on parts and labour, ` +
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
      `${opts.family} repair in Dubai starts from AED ${opts.startingPrice} with a 90-day written warranty. ` +
      `Same-day to 5 days depending on the model and fault. Free pickup and delivery across Dubai. ` +
      `Genuine or OEM-grade parts. Quote in 4 minutes on WhatsApp.`,
  };
}

export default QuickAnswer;
