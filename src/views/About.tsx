"use client";
import { Check, X } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { PageMeta } from "@/components/blocks/PageMeta";
import { REVIEWS } from "@/content/reviews";
import { TEAM } from "@/content/site";

const MILESTONES = [
  { year: "2004", text: "Opened in Dubai under the Azizi Technologies name. First Apple-only repair shop in the area." },
  { year: "2010", text: "Moved into Office #45, Concord Tower in Dubai Media City. Same address ever since." },
  { year: "2015", text: "Added iMac and Mac mini coverage. Started doing logic-board level diagnostics in-house." },
  { year: "2020", text: "M1 MacBook Air launched - Shafiq spent 6 months mastering the new SoC architecture." },
  { year: "2024", text: "Component-level board work for T2-encrypted units. 40,000+ devices repaired to date." },
  { year: "2026", text: "M5 MacBook Pro and iPhone 17 line fully supported. 216+ five-star Google reviews." },
];

const COMPARE = [
  { row: "Free diagnosis",            us: true,  apple: false, note: "Apple charges AED 200 to look at it" },
  { row: "No fix, no charge",         us: true,  apple: false },
  { row: "Same-day service",          us: true,  apple: false, note: "Apple Store: 5-10 working days" },
  { row: "Component-level board work", us: true,  apple: false, note: "Apple swaps the whole board - much pricier" },
  { row: "Free pickup across Dubai",  us: true,  apple: false },
  { row: "Genuine OEM parts",         us: true,  apple: true },
  { row: "Written warranty",          us: "12 months",  apple: "12 months" },
];

export default function About() {
  // JSON-LD (Organization + LocalBusiness + technician Person nodes) is server-rendered
  // via <PageSchema path="/about"> in src/app/about/page.tsx, so it ships in the static
  // HTML that crawlers/AI engines read. (It used to be injected client-side via useSeo,
  // which never reached the prerendered HTML.) Title/description: App Router Metadata API.
  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <div className="pt-[96px] mx-auto max-w-content px-5 md:px-6">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      </div>

      <Hero
        variant="service"
        tone="dark"
        eyebrow="About us"
        title="MacBook Repair Dubai - built by technicians, not marketers"
        subtitle="Started October 2004 in Dubai. Same address since 2010. Same techs since most of you bought your first MacBook."
      />

      {/* story - varied paragraph rhythm */}
      <section className="mx-auto max-w-narrow px-5 md:px-6 py-3xl">
        <PageMeta />
        <div className="prose-content space-y-lg mt-md">
          <p className="text-[18px] leading-relaxed">
            MacBook Repair Dubai opened on 10 October 2004. The original sign said Azizi Technologies - some of the older Google reviews still mention that name.
          </p>

          <p>
            Twenty-one years. Same office. Same phone number. Same lead technicians.
          </p>

          <p>
            We've handled over 40,000 Apple devices - from PowerBook G4 trackpads in 2005 to T2-encrypted M-series logic boards last week. Shafiq has done over 8,000 screens by himself. Usman runs the microscope station for board work. Ali handles data recovery from drives most shops give up on.
          </p>

          <p className="text-[18px] font-semibold">
            We fix the board. We don't just swap parts.
          </p>

          <p>
            Most repair shops in Dubai do component swaps - bad battery, replace the battery; broken screen, replace the screen. That works for the easy stuff. The harder failures - a MacBook that won't charge, a logic board with a single dead capacitor, an iMac with backlight issues - those need a technician with a microscope, a hot air station, and the patience to find the actual fault. That's the work we built our reputation on.
          </p>

          <p>
            Our prices stay roughly half of what the Apple Store quotes because we don't run a global support operation. Just one shop. One team. One address since 2010.
          </p>
        </div>
      </section>

      {/* team */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <p className="mono text-[12px] uppercase tracking-wider text-accent mb-2">The bench</p>
          <h2 className="m-0 mb-xl">Who you'll actually meet</h2>
          <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((t) => (
              <div key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
                <TechnicianBadge {...t} tone="dark" />
              </div>
            ))}
          </div>
          <p className="text-[14px] text-text-muted mt-lg max-w-[60ch]">
            Ali joined in 2011 - he's been here longer than most of our customers' MacBooks.
          </p>
        </div>
      </section>

      {/* compare */}
      <section className="mx-auto max-w-content px-5 md:px-6 py-3xl">
        <p className="mono text-[12px] uppercase tracking-wider text-accent mb-2">Honest comparison</p>
        <h2 className="m-0 mb-xl">What makes us different from the Apple Store</h2>
        <div className="overflow-x-auto border border-border rounded-md bg-bg-alt">
          <table className="w-full text-[15px] min-w-[600px]">
            <thead className="bg-bg-card">
              <tr className="text-left">
                <th scope="col" className="px-md py-md font-semibold">Feature</th>
                <th scope="col" className="px-md py-md font-semibold">MacBook Repair Dubai</th>
                <th scope="col" className="px-md py-md font-semibold">Apple Store</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((c) => (
                <tr key={c.row} className="border-t border-border">
                  <td className="px-md py-md">
                    {c.row}
                    {c.note && <span className="block text-[12px] text-text-faint mt-1">{c.note}</span>}
                  </td>
                  <td className="px-md py-md">
                    {typeof c.us === "boolean"
                      ? (c.us ? <Check size={18} className="text-accent" aria-label="Yes" /> : <X size={18} className="text-text-faint" aria-label="No" />)
                      : <span className="mono">{c.us}</span>}
                  </td>
                  <td className="px-md py-md">
                    {typeof c.apple === "boolean"
                      ? (c.apple ? <Check size={18} className="text-accent" aria-label="Yes" /> : <X size={18} className="text-text-faint" aria-label="No" />)
                      : <span className="mono">{c.apple}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* milestones */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <p className="mono text-[12px] uppercase tracking-wider text-accent mb-2">21 years on the bench</p>
          <h2 className="m-0 mb-xl">Milestones</h2>
          <ol className="grid gap-md md:grid-cols-2">
            {MILESTONES.map((m) => (
              <li key={m.year} className="border border-border bg-bg-card rounded-md p-lg flex gap-md">
                <span className="mono text-[20px] font-bold text-accent shrink-0 w-16">{m.year}</span>
                <p className="text-[15px] text-text leading-relaxed m-0">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* reviews */}
      <section className="bg-bg-alt border-y border-border">
        <div className="mx-auto max-w-content px-5 md:px-6 py-3xl">
          <h2 className="m-0 mb-xl">What customers say</h2>
          <ReviewGrid reviews={REVIEWS.slice(0, 6)} tone="dark" />
        </div>
      </section>
      </div>
    </PageShell>
  );
}
