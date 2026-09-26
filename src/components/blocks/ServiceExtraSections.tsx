"use client";
// Small building blocks for page-specific H2 sections on the iPhone service templates
// (IPhonePageTemplate `sections`, SubServicePageTemplate `intro`): a prose section and a
// "by model" card grid where every card carries its own WhatsApp prefill naming the model.
import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { NAP } from "@/content/site";
import { withSlash } from "@/lib/utils";

/** wa.me link with a prefilled message (the site's primary CTA). */
export function waHref(text: string): string {
  return withSlash(`${NAP.whatsappUrl}?text=${encodeURIComponent(text)}`);
}

export function ProseSection({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      <div className="max-w-[72ch] mx-auto flex flex-col gap-md text-[16px] text-text-muted leading-relaxed [&_strong]:text-text [&_a]:text-accent [&_a]:font-semibold [&_a:hover]:underline [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

export type ModelNote = {
  /** H3 text, e.g. "iPhone 7 Plus camera not working" */
  title: string;
  body: ReactNode;
  /** WhatsApp prefill, e.g. "Hi, iPhone 7 Plus camera repair quote please." */
  prefill: string;
};

export function ModelNotes({
  eyebrow = "By model",
  title,
  sub,
  items,
  footnote,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  items: ModelNote[];
  footnote?: ReactNode;
}) {
  return (
    <section>
      <SectionHeading eyebrow={eyebrow} title={title} sub={sub} />
      <div className="grid gap-md md:grid-cols-2">
        {items.map((m) => (
          <article key={m.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col">
            <h3 className="text-[16px] font-bold mb-sm text-text">{m.title}</h3>
            <div className="text-[14px] text-text-muted leading-relaxed flex-1 [&_a]:text-accent [&_a]:font-semibold [&_a:hover]:underline">{m.body}</div>
            <a
              href={waHref(m.prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-md inline-flex items-center gap-1 min-h-[44px] text-[14px] text-whatsapp font-semibold hover:underline"
            >
              <MessageCircle size={15} aria-hidden /> WhatsApp this model
            </a>
          </article>
        ))}
      </div>
      {footnote && <p className="text-[13px] text-text-muted mt-md max-w-[72ch] mx-auto leading-relaxed">{footnote}</p>}
    </section>
  );
}
