"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Clock, Award, Search, Truck, Check, AlertTriangle, Wrench, HardDrive, Database, Cpu } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Button } from "@/components/ui/button";
import { useSeo, preloadFromHero } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { NAP } from "@/content/site";

const HERO_IMG = "/images/real/lab/macbook-air-lid-dubai.jpg";

function CallButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={`${NAP.whatsappUrl}?text=${encodeURIComponent("Hi Shafiq, quote please: ")}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden /> WhatsApp Us
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className={dark ? "bg-white/10 text-white border-white/30 hover:bg-white/20" : ""}>
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

const SCENARIOS = [
  {
    icon: <HardDrive size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "MacBook won't boot or stuck on spinning wheel",
    price: "AED 500-800",
    body: "Often a corrupted macOS volume or failing SSD directory, not necessarily a dead drive. We image the drive state without writing to it first, then attempt logical recovery. High success rate on drives that won't boot but are still detected.",
  },
  {
    icon: <AlertTriangle size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "Accidental file delete or format",
    price: "AED 500-700",
    body: "Time-sensitive. Stop using the Mac immediately -- every write reduces the recovery window. Do not empty the Trash. Bring in or send to us as soon as possible. Logical file recovery from a still-functioning SSD has a very high success rate when the drive has not been written to since deletion.",
  },
  {
    icon: <Truck size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "Water damage",
    price: "AED 600-1500",
    body: "Logic board repair usually comes first (ultrasonic clean, corrosion removal, component work), then SSD health is assessed. If the SSD controller was damaged by liquid, chip-level recovery techniques are used. AED 800-1500 all-in for board repair plus recovery.",
  },
  {
    icon: <Database size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "SSD failure -- not detected or clicking",
    price: "AED 600-1200",
    body: "A drive that is not detected may have a failed SSD controller or bad NAND blocks. We run non-destructive diagnostics first. Physical SSD failure recovery is successful in 60-75% of cases. Apple Silicon SSDs are soldered and require board-level work for physical failures.",
  },
  {
    icon: <Cpu size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "macOS corruption after update",
    price: "AED 300-600",
    body: "A partial or interrupted macOS update can leave the system volume corrupted. In most cases your data is intact on the volume -- we reinstall macOS around it without erasing. Full data recovery is rarely needed for this scenario.",
  },
  {
    icon: <ShieldCheck size={22} className="text-accent transition-colors group-hover:text-white" aria-hidden />,
    title: "T2 chip lock or FileVault encrypted drive",
    price: "AED 500-1000",
    body: "T2-secured Macs (2018-2020 Intel) encrypt the SSD at the hardware level. Recovery requires your Apple ID and FileVault password -- without them, data cannot be decrypted by anyone. We assist with account recovery and T2 bypass diagnostics where possible.",
  },
];

const PRICING_ROWS = [
  { label: "Logical recovery (won't boot, corrupted macOS)", price: "AED 500-700" },
  { label: "Accidental format or file delete", price: "AED 500-700" },
  { label: "Physical SSD failure", price: "AED 700-1200" },
  { label: "Water damage board repair plus recovery", price: "AED 800-1500" },
  { label: "T2 chip lock or FileVault issues", price: "AED 500-1000" },
];

const SUCCESS_RATES = [
  { scenario: "Logical failure (won't boot, corrupted macOS)", rate: "85-90%" },
  { scenario: "Physical SSD failure", rate: "60-75%" },
  { scenario: "Accidental format (drive not overwritten)", rate: "80-90%" },
  { scenario: "Severe water damage", rate: "40-60%" },
];

const VS_ROWS = [
  { label: "Assessment", us: "Free -- we assess before you pay anything", them: "Diagnostic fee charged upfront" },
  { label: "Apple Silicon recovery", us: "Board-level and chip-off techniques", them: "Often not serviceable" },
  { label: "No-recovery guarantee", us: "No recovery, no charge", them: "Diagnostic fee non-refundable" },
  { label: "Data stays private", us: "Recovered to your external drive", them: "Data may be handled off-site" },
  { label: "Water damage", us: "Board repair plus recovery in one job", them: "Usually declined" },
  { label: "Vintage Intel models", us: "2012 onward", them: "Refused on obsolete (pre-2017)" },
];

const FAQS = [
  {
    q: "Can data be recovered from a MacBook that won't turn on?",
    a: "In most cases yes. If the Mac won't turn on due to a power fault (not SSD failure), the data is safe on the SSD -- we repair the power issue first, then the data is accessible. If the SSD itself failed, recovery is still possible in 60-75% of cases.",
  },
  {
    q: "How much does Mac data recovery cost in Dubai?",
    a: "From AED 500 for logical recovery (corrupted macOS, won't boot). AED 700-1200 for physical SSD failure. AED 800-1500 for water damage. Free assessment before any paid work -- we tell you the recovery probability and cost before you commit.",
  },
  {
    q: "Can data be recovered from a MacBook with a soldered Apple Silicon SSD?",
    a: "Yes in most cases. The M1-M4 SSD is soldered to the logic board, which means standard SSD recovery tools cannot be connected. We use board-level diagnostics and, where necessary, chip-off recovery techniques. More complex than Intel recovery but achievable.",
  },
  {
    q: "I accidentally deleted important files -- what should I do?",
    a: "Stop using the Mac immediately. Every write to the SSD reduces the chance of recovery. Do not empty the Trash. Bring in or send to us as soon as possible. Logical file recovery from a still-functioning SSD has a very high success rate if the drive has not been written to since deletion.",
  },
  {
    q: "My MacBook SSD is showing as not mounted -- is my data gone?",
    a: "Not necessarily. A drive that won't mount may have a corrupted partition table or directory. This is a logical failure with high recovery rates. Do not run Disk Utility First Aid repeatedly -- it can overwrite the recovery window. Bring in for professional assessment.",
  },
  {
    q: "Is data recovery from a water-damaged MacBook possible?",
    a: "Yes, in 60-75% of cases after water damage. We repair the logic board first (ultrasonic clean, component repair), then assess SSD health. If the SSD controller was damaged by liquid, recovery is harder but still possible with chip-level techniques. AED 800-1500 all-in.",
  },
];

export default function MacDataRecovery() {
  useSeo(
    {
      title: "Mac Data Recovery Dubai - SSD, Deleted Files, Won't Boot",
      description:
        "Mac data recovery Dubai. MacBook won't boot, SSD failure, accidental delete, water damage, formatted drive. Apple Silicon and Intel. Free assessment. From AED 500. Call 055 741 3706.",
      path: "/mac-data-recovery-dubai",
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Mac Data Recovery Dubai",
        price: 500,
        timeline: "Same day to 5 days",
        warranty: "P90D",
        url: "/mac-data-recovery-dubai",
        description:
          "Mac data recovery in Dubai from MacBooks that won't boot, have failed SSDs, suffered water damage, or were accidentally formatted. Apple Silicon (M1-M4) and Intel. Free assessment.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">

        {/* Breadcrumb */}
        <div className="mx-auto max-w-content px-5 md:px-6 pt-[100px]">
          <BreadcrumbTrail
            tone="dark"
            trail={[
              { name: "Home", path: "/" },
              { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
              { name: "Mac Data Recovery", path: "/mac-data-recovery-dubai" },
            ]}
          />
        </div>

        {/* Hero */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="Data recovery specialist · Dubai Media City · Free assessment"
          title="Mac Data Recovery Dubai"
          image={HERO_IMG}
          imageAlt="MacBook on repair bench in Dubai Media City workshop for data recovery assessment"
        />

        {/* AI-quotable answer */}
        <div className="mx-auto max-w-content px-5 md:px-6 mt-[40px]">
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-lg md:p-xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">Quick answer</p>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-text m-0">
              Mac data recovery in Dubai starts with a free assessment at MacBook Repair Dubai. We recover data from MacBooks that won't boot, have failed SSDs, suffered water damage, or were accidentally formatted. Apple Silicon (M1-M4) recovery is more complex due to soldered SSD but achievable in most cases. From AED 500 for standard recovery.
            </p>
          </div>
        </div>

        {/* IMPORTANT notice */}
        <div className="mx-auto max-w-content px-5 md:px-6 mt-[32px]">
          <div className="rounded-2xl border border-orange-500/40 bg-orange-500/[0.08] p-lg md:p-xl flex gap-md items-start">
            <AlertTriangle size={22} className="text-orange-400 shrink-0 mt-0.5" aria-hidden />
            <div>
              <p className="text-[14px] font-bold text-orange-300 m-0 mb-2">Do not attempt DIY recovery on Apple Silicon Macs</p>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">
                The SSD is soldered to the logic board on all M1-M4 MacBooks. Running disk repair tools on a failing drive can permanently destroy data by overwriting the recovery window. Bring in for professional assessment before trying anything.
              </p>
            </div>
          </div>
        </div>

        {/* USP strip */}
        <div className="border-y border-border bg-bg-alt mt-[48px]">
          <div className="mx-auto max-w-content px-5 md:px-6 py-lg">
            <ul className="flex flex-wrap gap-x-2xl gap-y-sm list-none p-0 m-0">
              {[
                { icon: <Search size={15} className="text-accent" aria-hidden />, label: "Free assessment" },
                { icon: <ShieldCheck size={15} className="text-accent" aria-hidden />, label: "No recovery, no charge" },
                { icon: <Database size={15} className="text-accent" aria-hidden />, label: "Apple Silicon and Intel" },
                { icon: <Truck size={15} className="text-accent" aria-hidden />, label: "Free pickup across Dubai" },
                { icon: <Award size={15} className="text-accent" aria-hidden />, label: "Independent Apple specialists" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-[14px] text-text-muted">
                  {item.icon}
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recovery scenarios */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">Six recovery scenarios</p>
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white leading-[1.1] mb-2xl">
              What situation is your Mac in?
            </h2>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {SCENARIOS.map((s) => (
                <div key={s.title} className="group rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg flex flex-col gap-sm transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
                  <div className="flex items-center gap-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0 transition-colors group-hover:bg-accent">{s.icon}</span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[12px] font-medium text-accent">{s.price}</span>
                  </div>
                  <h3 className="m-0 text-text text-[16px] font-bold">{s.title}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apple Silicon vs Intel */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Apple Silicon vs Intel</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1] mb-xl">
            SSD recovery depends on the chip generation
          </h2>
          <div className="grid gap-lg md:grid-cols-2">
            <div className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg group transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center gap-sm mb-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0 transition-colors group-hover:bg-accent">
                  <HardDrive size={20} className="text-accent transition-colors group-hover:text-white" aria-hidden />
                </span>
                <h3 className="m-0 text-text text-[18px] font-bold">Intel Mac (2017-2020)</h3>
              </div>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed mb-md">
                Intel MacBooks use a removable SSD card (blade format). The SSD can be connected directly to a recovery workstation, making physical and logical recovery more straightforward. Higher success rates for physical failure.
              </p>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" aria-hidden />
                <span className="text-[13px] text-text-muted">Removable SSD -- direct workstation connection</span>
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg group transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center gap-sm mb-md">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 shrink-0 transition-colors group-hover:bg-accent">
                  <Cpu size={20} className="text-accent transition-colors group-hover:text-white" aria-hidden />
                </span>
                <h3 className="m-0 text-text text-[18px] font-bold">Apple Silicon (M1-M4)</h3>
              </div>
              <p className="m-0 text-[14px] text-text-muted leading-relaxed mb-md">
                M-chip MacBooks have the SSD soldered directly onto the logic board. For logical failures (corrupted OS, won't boot) the recovery process is board-level and still achieves high success rates. Physical NAND failure requires chip-off techniques.
              </p>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-accent shrink-0" aria-hidden />
                <span className="text-[13px] text-text-muted">Soldered SSD -- board-level and chip-off recovery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Recovery process */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">How it works</p>
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white leading-[1.1] mb-2xl">
              The recovery process
            </h2>
            <ol className="grid gap-lg md:grid-cols-3 list-none p-0 m-0">
              {[
                {
                  n: 1,
                  title: "Free assessment",
                  body: "We image the drive state without writing to it. Non-destructive diagnostics tell us whether the failure is logical (corrupted directory) or physical (NAND failure). We give you the success rate estimate and cost before any paid work starts.",
                },
                {
                  n: 2,
                  title: "Recovery attempt",
                  body: "Logical failures are addressed with software tools that reconstruct the file system. Physical failures may require component-level board repair or chip-level techniques on Apple Silicon. We keep you updated throughout.",
                },
                {
                  n: 3,
                  title: "Verify and deliver",
                  body: "Recovered files are verified by browsing the directory with you present or via a screenshot gallery sent on WhatsApp. Data is delivered to your external drive. The original Mac is repaired or returned as agreed.",
                },
              ].map((step) => (
                <li key={step.n} className="rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] p-lg group transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-accent/40">
                  <span aria-hidden className="mb-md flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 font-bold text-[18px] text-accent transition-colors group-hover:bg-accent group-hover:text-white">{step.n}</span>
                  <p className="font-semibold text-[16px] m-0 mb-2 text-text">{step.title}</p>
                  <p className="text-[13.5px] text-text-muted leading-relaxed m-0">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Success rates */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Realistic expectations</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1] mb-xl">
            Recovery success rates
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] mb-md">
            <table className="w-full border-collapse text-left text-[14px] min-w-[420px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-lg py-md font-semibold text-accent">Failure type</th>
                  <th className="px-lg py-md font-semibold text-accent">Typical success rate</th>
                </tr>
              </thead>
              <tbody>
                {SUCCESS_RATES.map((r) => (
                  <tr key={r.scenario} className="border-b border-border last:border-0">
                    <td className="px-lg py-sm text-text">{r.scenario}</td>
                    <td className="px-lg py-sm font-bold text-accent">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-text-muted leading-relaxed max-w-[72ch]">
            We tell you the estimated success rate before you commit to paid recovery. If we cannot recover your data, you pay nothing beyond the free assessment.
          </p>
        </section>

        {/* Pricing */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">Transparent pricing</p>
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-white leading-[1.1] mb-xl">
              Mac data recovery pricing in Dubai
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03]">
              <table className="w-full border-collapse text-left text-[14px] min-w-[480px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-lg py-md font-semibold text-accent">Recovery type</th>
                    <th className="px-lg py-md font-semibold text-accent whitespace-nowrap">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING_ROWS.map((r) => (
                    <tr key={r.label} className="border-b border-border last:border-0">
                      <td className="px-lg py-sm text-text">{r.label}</td>
                      <td className="px-lg py-sm font-semibold text-accent whitespace-nowrap">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-md text-[13px] text-on-primary-muted">
              All prices in AED, VAT inclusive. Free assessment before any paid work. No recovery, no charge. Payment on data delivery.
            </p>
          </div>
        </section>

        {/* VsAppleStore */}
        <div className="mt-[80px]">
          <VsAppleStore
            tone="dark"
            heading="Mac data recovery vs sending to Apple Store"
            intro="Apple does not offer data recovery -- they replace or wipe devices. An independent data recovery specialist works on the drive directly, with no-recovery no-charge terms."
            rows={VS_ROWS}
          />
        </div>

        {/* FAQ */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-2xl items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-4">FAQ</p>
                <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-white leading-[1.1] mb-md">
                  Data recovery questions
                </h2>
                <p className="text-[15px] text-on-primary-muted leading-relaxed mb-lg">
                  Common questions about Mac data recovery in Dubai, Apple Silicon SSDs, and what happens when a MacBook won't boot.
                </p>
                <CallButtons dark />
              </div>
              <FAQAccordion items={FAQS} injectSchema={true} tone="dark" />
            </div>
          </div>
        </section>

        {/* Location */}
        <div className="mt-[80px]">
          <LocationBlock tone="dark" compact />
        </div>

        {/* Related Articles */}
        <RelatedArticles path="/mac-data-recovery-dubai" topics={["data recovery", "mac", "ssd"]} />

        {/* Final CTA bar */}
        <section className="mt-[80px] py-[64px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent-bright font-semibold mb-3">Mac data recovery · Dubai Media City</p>
              <h2 className="m-0 text-[26px] md:text-[32px] font-bold text-white leading-tight">
                Lost your Mac data? Free assessment. No recovery, no charge.
              </h2>
            </div>
            <div className="shrink-0">
              <CallButtons dark />
            </div>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
