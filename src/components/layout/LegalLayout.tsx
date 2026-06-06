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
      <div data-hero-tone="dark" className="bg-primary text-on-primary -mb-[4rem]">
      <section className="bg-white/[0.02] pt-[96px] pb-xl border-b border-white/10">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: pageLabel, path: pagePath }]} />
          <p className="mono text-[12px] uppercase tracking-wider text-on-primary-muted mb-sm">Legal</p>
          <h1 className="max-w-[26ch] text-on-primary">{title}</h1>
          <p className="mt-md max-w-[60ch] text-[18px] text-on-primary-muted leading-relaxed">{intro}</p>
          <p className="mt-md flex items-center gap-1 text-[13px] mono text-on-primary-faint">
            <CalendarDays size={14} aria-hidden /> Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-2xl grid gap-2xl md:grid-cols-12">
        <article className="md:col-span-8 prose-legal text-[16px] leading-relaxed text-on-primary-muted [&_h2]:text-on-primary [&_h3]:text-on-primary [&_strong]:text-on-primary [&_a]:text-accent-bright">
          {children}
        </article>

        <aside className="md:col-span-4">
          <div className="sticky top-[100px] bg-white/[0.04] border border-white/10 rounded-md p-lg">
            <h2 className="text-[16px] font-bold mb-sm text-on-primary">Other policies</h2>
            <ul className="flex flex-col gap-1 text-[14px]">
              {others.map((r) => (
                <li key={r.href}>
                  <Link to={r.href} className="text-on-primary-muted hover:text-accent-bright">{r.label}</Link>
                </li>
              ))}
            </ul>
            <hr className="my-md border-white/10" />
            <h2 className="text-[16px] font-bold mb-sm text-on-primary">Questions?</h2>
            <p className="text-[14px] text-on-primary-muted leading-relaxed">
              Email <a href="mailto:info@macbook-repair-dubai.ae" className="text-accent-bright hover:underline">info@macbook-repair-dubai.ae</a> or
              WhatsApp <a href="https://wa.me/971557413706" target="_blank" rel="noopener noreferrer" className="text-accent-bright hover:underline">055 741 3706</a>.
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
      <div className="flex flex-col gap-md text-on-primary-muted">{children}</div>
    </section>
  );
}
