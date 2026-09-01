// Key-takeaways block + reviewer byline, the pair every audited money page was missing.
// One component so the byline format stays consistent with the About-page roster
// (name · roster title · "N years on Apple hardware") and cannot drift per page.
// Content is passed in per page - these must be real page-specific facts, never
// template filler: the template-audit deliberately treats repeated boilerplate
// as scaled-content abuse.
type Props = {
  updated: string;                    // "September 2026"
  reviewer: string;                   // "Shafiq, Lead technician"
  years: number;                      // roster years -> "· 15 years on Apple hardware"
  items: string[];                    // 5-6 concrete facts for THIS page
  className?: string;
};

export function TakeawaysByline({ updated, reviewer, years, items, className }: Props) {
  return (
    <section className={`mx-auto max-w-content px-5 md:px-6 mt-xl ${className ?? ""}`}>
      <div className="rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg">
        <h2 className="text-[22px] md:text-[26px] font-bold mb-sm">Key takeaways</h2>
        <p className="text-[13px] text-text-muted mb-md">
          Updated {updated} · Reviewed by {reviewer} · {years} years on Apple hardware
        </p>
        <ul className="grid gap-2 md:grid-cols-2 text-[15px] leading-relaxed list-disc pl-5">
          {items.map((t) => <li key={t.slice(0, 40)}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}
