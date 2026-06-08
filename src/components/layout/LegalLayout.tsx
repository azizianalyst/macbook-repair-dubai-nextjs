"use client";
import { ReactNode } from "react";
import { Link } from "@/lib/router-compat";
import { CalendarDays } from "lucide-react";
import { PageShell } from "./PageShell";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";

type Props = {
  title: string;
  intro: string;
  lastUpdated: string;       // "April 2026"
  pagePath: string;          // "/privacy"
  pageLabel: string;         // "Privacy Policy"
  children: ReactNode;
};

const RELATED = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Warranty Policy", href: "/warranty" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Cookie Policy", href: "/cookies" },
];

export function LegalLayout({ title, intro, lastUpdated, pagePath, pageLabel, children }: Props) {
  const others = RELATED.filter((r) => r.href !== pagePath);

  return (
    <PageShell>
      <div data-hero-tone="light" className="bg-bg-alt text-text -mb-[4rem]">
      <section className="bg-bg-alt pt-[96px] pb-xl border-b border-border">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: pageLabel, path: pagePath }]} />
          <p className="mono text-[12px] uppercase tracking-wider text-text-muted mb-sm">Legal</p>
          <h1 className="max-w-[26ch] text-text">{title}</h1>
          <p className="mt-md max-w-[60ch] text-[18px] text-text-muted leading-relaxed">{intro}</p>
          <p className="mt-md flex items-center gap-1 text-[13px] mono text-text-faint">
            <CalendarDays size={14} aria-hidden /> Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-2xl grid gap-2xl md:grid-cols-12">
        <article className="md:col-span-8 prose-legal text-[16px] leading-relaxed text-text-muted [&_h2]:text-text [&_h3]:text-text [&_strong]:text-text [&_a]:text-accent">
          {children}
        </article>

        <aside className="md:col-span-4">
          <div className="sticky top-[100px] bg-bg-card border border-border rounded-md p-lg">
            <h2 className="text-[16px] font-bold mb-sm text-text">Other policies</h2>
            <ul className="flex flex-col gap-1 text-[14px]">
              {others.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="text-text-muted hover:text-accent">{r.label}</Link>
                </li>
              ))}
            </ul>
            <hr className="my-md border-border" />
            <h2 className="text-[16px] font-bold mb-sm text-text">Questions?</h2>
            <p className="text-[14px] text-text-muted leading-relaxed">
              Email <a href="mailto:info@macbook-repair-dubai.ae" className="text-accent hover:underline">info@macbook-repair-dubai.ae</a> or
              WhatsApp <a href="https://wa.me/971557413706" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">055 741 3706</a>.
            </p>
          </div>
        </aside>
      </section>
      </div>
    </PageShell>
  );
}

// section helper - h2 + body
export function LegalSection({
  id, title, children,
}: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-2xl scroll-mt-24">
      <h2 className="text-[24px] md:text-[26px] mb-md">{title}</h2>
      <div className="flex flex-col gap-md text-text-muted">{children}</div>
    </section>
  );
}
