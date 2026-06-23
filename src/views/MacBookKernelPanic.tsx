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

const CAUSES = [
  {
    icon: <Cpu size={22} className="text-accent" aria-hidden />,
    title: "Software or driver conflict",
    price: "Free fix",
    body: "The most common cause, especially after a macOS update that installs a bad kernel extension (kext). Removing the conflicting extension or rolling back the update costs nothing. We check crash logs to identify the offending process before touching anything.",
  },
  {
    icon: <HardDrive size={22} className="text-accent" aria-hidden />,
    title: "Failing SSD",
    price: "AED 300-800",
    body: "A drive with bad sectors can trigger a kernel panic when macOS tries to read from a failing block. Diagnosis is free. If the SSD is failing we recover your data first, then replace the drive. Data recovery plus SSD replacement from AED 300.",
  },
  {
    icon: <Database size={22} className="text-accent" aria-hidden />,
    title: "Incompatible RAM (Intel Mac)",
    price: "AED 0-200+",
    body: "Intel MacBooks with aftermarket RAM upgrades occasionally panic when a module is incompatible or seated incorrectly. Removing the third-party RAM and reverting to original spec costs nothing. If the original RAM is faulty, replacement starts at AED 200.",
  },
  {
    icon: <Wrench size={22} className="text-accent" aria-hidden />,
    title: "Logic board solder fault under GPU or CPU",
    price: "AED 800-2500",
    body: "A cold solder joint or failed capacitor near the GPU or CPU causes the chip to misbehave under load, which macOS logs as a kernel panic. Component-level board repair under the microscope. More common on Intel 2011-2013 models and the 2016 Touch Bar.",
  },
  {
    icon: <AlertTriangle size={22} className="text-accent" aria-hidden />,
    title: "Overheating causing emergency thermal shutdown",
    price: "AED 150-300",
    body: "When a Mac hits its thermal limit it shuts down immediately and logs the event as a kernel panic. Blocked vents, dried thermal paste, or a failing fan are the usual causes. Thermal re-paste, vent clean and fan check from AED 150.",
  },
  {
    icon: <Search size={22} className="text-accent" aria-hidden />,
    title: "macOS corruption after a bad update",
    price: "AED 0-200",
    body: "A partial or interrupted macOS update can leave the system volume in a state that panics on boot. macOS reinstall over your data costs AED 0-200 depending on whether we need to image the drive first. Your files stay intact.",
  },
];

const PRICING_ROWS = [
  { label: "Software fix (bad kernel extension, macOS reinstall)", price: "AED 0-200" },
  { label: "SSD diagnosis", price: "Free" },
  { label: "SSD replacement (data recovered first)", price: "AED 300-800" },
  { label: "Logic board repair (GPU/CPU solder fault)", price: "AED 800-2500" },
  { label: "Thermal fix (paste, vent clean, fan)", price: "AED 150-300" },
];

const FAQS = [
  {
    q: "What causes kernel panics on MacBook?",
    a: "Most common causes: software or driver conflict (especially after a macOS update), failing SSD, overheating causing an emergency thermal shutdown logged as a kernel panic, or logic board component failure. A single kernel panic after an update is usually software. Repeated panics need a hardware investigation.",
  },
  {
    q: "How much does MacBook kernel panic repair cost in Dubai?",
    a: "From AED 0 for software fixes to AED 800-2500 for logic board repair. Most kernel panics are software or SSD-related and cost AED 0-400. Free diagnosis at MacBook Repair Dubai confirms the cause before any paid work.",
  },
  {
    q: "How do I know if my kernel panic is hardware or software?",
    a: "Read the panic log. If it mentions a specific kernel extension or process name, it is likely software. If it shows memory address errors or 'double fault', it is likely hardware. Bring the Mac in and we read the logs as part of free diagnosis.",
  },
  {
    q: "My MacBook restarts randomly -- is that a kernel panic?",
    a: "Not always. Random restarts can also be caused by a worn battery triggering voltage protection or a power circuit fault. We check crash logs, battery health, and logic board to confirm. Free diagnosis.",
  },
  {
    q: "Can a kernel panic damage my data?",
    a: "A kernel panic itself does not corrupt data -- it is a controlled emergency stop. However, if the cause is a failing SSD, the underlying drive fault can corrupt data over time. If you are seeing repeated panics, back up immediately before bringing in for diagnosis.",
  },
  {
    q: "My M1/M2/M3 MacBook is getting kernel panics -- should I be worried?",
    a: "Apple Silicon Macs (M1-M4) have very low kernel panic rates compared to Intel. If you are seeing panics on an M-chip Mac, it is usually a software conflict (bad kernel extension, incompatible app) or a macOS update issue. Hardware faults are rare but possible. Free diagnosis confirms.",
  },
];

export default function MacBookKernelPanic() {
  useSeo(
    {
      title: "MacBook Kernel Panic Dubai - Random Restart Fix Same Day",
      description:
        "MacBook kernel panic in Dubai? Random restarts, grey/black screen crash, crash log showing kernel panic. Logic board, RAM, SSD or software. Free diagnosis. From AED 200. Call 055 741 3706.",
      path: "/macbook-kernel-panic-dubai",
      preloadImage: preloadFromHero(HERO_IMG),
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Kernel Panic Repair Dubai",
        price: 200,
        timeline: "Same day",
        warranty: "P90D",
        url: "/macbook-kernel-panic-dubai",
        description:
          "MacBook kernel panic diagnosis and repair in Dubai. Software conflicts, SSD failure, RAM, overheating, and logic board faults. Free diagnosis. From AED 200.",
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
              { name: "Kernel Panic Repair", path: "/macbook-kernel-panic-dubai" },
            ]}
          />
        </div>

        {/* Hero */}
        <Hero
          variant="device"
          tone="dark"
          eyebrow="Kernel panic specialist · Dubai Media City · Free diagnosis"
          title="MacBook Kernel Panic Dubai"
          image={HERO_IMG}
          imageAlt="MacBook open on repair bench in Dubai Media City workshop showing kernel panic diagnosis"
        />

        {/* AI-quotable answer */}
        <div className="mx-auto max-w-content px-5 md:px-6 mt-[40px]">
          <div className="rounded-2xl border border-accent/30 bg-accent/[0.06] p-lg md:p-xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">Quick answer</p>
            <p className="text-[16px] md:text-[17px] leading-relaxed text-text m-0">
              MacBook kernel panics in Dubai are diagnosed free at MacBook Repair Dubai. Most kernel panics are caused by a software or driver conflict (free fix), failing SSD (AED 300-800 data recovery plus SSD), RAM fault, or logic board component failure (AED 800-2500). A single kernel panic is not a crisis -- repeated panics need diagnosis.
            </p>
          </div>
        </div>

        {/* USP strip */}
        <div className="border-y border-border bg-bg-alt mt-[48px]">
          <div className="mx-auto max-w-content px-5 md:px-6 py-lg">
            <ul className="flex flex-wrap gap-x-2xl gap-y-sm list-none p-0 m-0">
              {[
                { icon: <Search size={15} className="text-accent" aria-hidden />, label: "Free diagnosis" },
                { icon: <Clock size={15} className="text-accent" aria-hidden />, label: "Same-day software fix" },
                { icon: <ShieldCheck size={15} className="text-accent" aria-hidden />, label: "3-month warranty on repairs" },
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

        {/* What is a kernel panic */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">What is a kernel panic?</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1] mb-lg">
            Your Mac's equivalent of a Windows blue screen
          </h2>
          <div className="grid gap-lg md:grid-cols-2 max-w-[78ch] md:max-w-none">
            <div>
              <p className="text-[16px] leading-relaxed text-text-muted m-0">
                A kernel panic is a safety mechanism built into macOS. When the operating system detects a condition it cannot recover from -- a hardware fault, a driver crash, or a memory access violation -- it stops everything, saves a crash log, and restarts the Mac. You see a grey or black screen with the message "Your computer restarted because of a problem."
              </p>
            </div>
            <div>
              <p className="text-[16px] leading-relaxed text-text-muted m-0">
                The crash log is saved automatically to <code className="text-accent text-[14px] bg-bg-card px-1 py-0.5 rounded">/Library/Logs/DiagnosticReports</code> on the Mac. We read these logs as part of free diagnosis -- they usually tell us within minutes whether the cause is software, a failing drive, or a hardware fault on the board.
              </p>
            </div>
          </div>
        </section>

        {/* How to find crash logs */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <div className="rounded-2xl border border-border bg-bg-card p-lg md:p-xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Before you come in</p>
            <h2 className="text-[26px] md:text-[32px] font-bold tracking-tight text-text leading-[1.15] mb-md">
              How to find your kernel panic crash logs
            </h2>
            <ol className="space-y-md list-none p-0 m-0">
              {[
                "Open System Settings (or System Preferences on older macOS).",
                "Go to Privacy and Security, then Analytics and Improvements.",
                "Click Analytics Data.",
                "Look for files named panic-full or Sleep Wake Failure. These are your kernel panic logs.",
                "Screenshot the list and send it on WhatsApp -- it speeds up diagnosis significantly.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-md">
                  <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent text-[13px] font-bold mt-0.5">{i + 1}</span>
                  <span className="text-[15px] text-text-muted leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-lg text-[14px] text-text-faint m-0">
              Not sure how to find them? Just bring the Mac in -- we pull the logs directly during free diagnosis.
            </p>
          </div>
        </section>

        {/* Causes */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Six root causes</p>
            <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1] mb-2xl">
              What causes MacBook kernel panics
            </h2>
            <div className="grid gap-lg md:grid-cols-2 lg:grid-cols-3">
              {CAUSES.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-bg-card p-lg flex flex-col gap-sm">
                  <div className="flex items-center gap-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 shrink-0">{c.icon}</span>
                    <span className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-[12px] font-medium text-accent">{c.price}</span>
                  </div>
                  <h3 className="m-0 text-text text-[16px] font-bold">{c.title}</h3>
                  <p className="m-0 text-[14px] text-text-muted leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">Transparent pricing</p>
          <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-text leading-[1.1] mb-xl">
            MacBook kernel panic repair pricing
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
            <table className="w-full border-collapse text-left text-[14px] min-w-[480px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-lg py-md font-semibold text-accent">Repair type</th>
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
          <p className="mt-md text-[13px] text-text-faint">
            All prices in AED, VAT inclusive. Free diagnosis before any paid work. Payment on collection.
          </p>
        </section>

        {/* VsAppleStore */}
        <div className="mt-[80px]">
          <VsAppleStore
            tone="dark"
            heading="MacBook Repair Dubai vs the Apple Store for kernel panics"
            intro="An independent repair shop reads crash logs the same day and fixes software panics at no charge. The Apple Store often requires a mail-in, charges a diagnostic fee, and replaces whole modules rather than repairing the root cause."
          />
        </div>

        {/* FAQ */}
        <section className="mt-[96px] py-[80px]" style={{ background: "#1E2329" }}>
          <div className="mx-auto max-w-content px-5 md:px-6">
            <div className="grid lg:grid-cols-[280px_1fr] gap-2xl items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">FAQ</p>
                <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight text-text leading-[1.1] mb-md">
                  Kernel panic questions
                </h2>
                <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
                  Common questions about MacBook kernel panics, crash logs, and repair costs in Dubai.
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
        <RelatedArticles path="/macbook-kernel-panic-dubai" topics={["kernel panic", "macbook", "repair"]} />

        {/* Final CTA bar */}
        <section className="mt-[80px] py-[64px]" style={{ background: "#2C3137" }}>
          <div className="mx-auto max-w-content px-5 md:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-lg">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">MacBook kernel panic repair · Dubai Media City</p>
              <h2 className="m-0 text-[26px] md:text-[32px] font-bold text-white leading-tight">
                MacBook restarting with kernel panic? Free diagnosis. From AED 200.
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
