"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqPage } from "@/lib/schema";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

type Props = {
  items: FAQ[];
  injectSchema?: boolean;     // emit FAQPage JSON-LD
  tone?: "light" | "dark";    // "dark" for use on the bg-bg-alt band; default light
};

// plus/minus toggle (NOT chevron). one open at a time.
export function FAQAccordion({ items, injectSchema = true, tone = "light" }: Props) {
  const dark = tone === "dark";
  // Single column: a 2-col grid ties paired rows to the same height, so expanding
  // one item left an empty gap beside it. Single-column keeps every answer flush
  // under its question. Multiple items can be open at once.
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });

  return (
    <>
      <ul className={cn("border-t", dark ? "border-border" : "border-border")}>
        {items.map((item, i) => {
          const isOpen = open.has(i);
          const id = `faq-${i}`;
          return (
            <li key={id} className={cn("border-b", dark ? "border-border" : "border-border")}>
              <h3 className="m-0">
                <button
                  type="button"
                  className={cn(
                    "w-full flex items-start justify-between gap-md py-md text-left rounded focus-visible:outline-none focus-visible:ring-2",
                    dark ? "focus-visible:ring-accent" : "focus-visible:ring-accent",
                  )}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-panel`}
                  onClick={() => toggle(i)}
                >
                  <span className={cn("text-[16px] md:text-[17px] font-semibold", dark ? "text-text" : "text-text")}>{item.q}</span>
                  <span className={cn("mt-1 shrink-0", dark ? "text-accent" : "text-text-muted")} aria-hidden>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
              </h3>
              <div
                id={`${id}-panel`}
                role="region"
                hidden={!isOpen}
                className={cn("pb-md text-[15px] leading-relaxed max-w-[70ch]", dark ? "text-text-muted" : "text-text-muted")}
              >
                {item.a}
              </div>
            </li>
          );
        })}
      </ul>

      {injectSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage(items.map(({ q, a }) => ({ q, a })))) }}
        />
      )}
    </>
  );
}
