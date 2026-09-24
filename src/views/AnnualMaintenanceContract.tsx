"use client";
import { Star, MessageCircle, Phone, ShieldCheck, Check, Building2, Calendar, Headphones } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
import { Hero } from "@/components/blocks/Hero";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema, breadcrumbs, itemList } from "@/lib/schema";
import { NAP } from "@/content/site";

const INCLUDED = [
  { title: "Scheduled servicing", body: "Planned check-ups for every Mac, iPhone and iPad in your fleet - no waiting for something to break." },
  { title: "Battery-health checks", body: "Cycle counts and capacity logged each visit, with replacement before swelling or shutdowns hit." },
  { title: "Dust & thermal cleaning", body: "Fans and heatsinks cleared and re-pasted to stop throttling in Dubai's heat." },
  { title: "Hardware & software support", body: "macOS updates, driver and app fixes, storage clean-ups and performance tuning." },
  { title: "Priority repairs", body: "Contract devices jump the queue - same-day turnaround on most in-stock parts." },
  { title: "Discounted parts & labour", body: "Preferential pricing on any out-of-scope repair or replacement part." },
  { title: "Remote assistance", body: "Phone, WhatsApp and remote-desktop support for quick software and account fixes." },
  { title: "Backup & recovery support", body: "Time Machine and cloud-backup setup, plus priority data recovery if a drive fails." },
];

const PLANS = [
  { name: "Solo & freelancer", body: "1-3 devices. Two scheduled visits a year, priority repairs and remote support for individuals and home offices.", best: "Freelancers, home studios" },
  { name: "Business", body: "4-25 devices. Quarterly on-site servicing, asset logging, priority turnaround and a named technician.", best: "SMEs, agencies, clinics" },
  { name: "Enterprise & education", body: "25+ devices. Custom SLA, monthly visits, loaner units, and a single point of contact for your IT team.", best: "Schools, large offices" },
];

const ONBOARDING = [
  { step: "Free device audit", body: "We list every Apple device you run - model, year, serial, battery cycle count, storage health and current macOS. You get the audit as a written asset register whether or not you sign anything." },
  { step: "Plan and scope in writing", body: "We come back with the recommended plan, what is in scope, what is charged separately, and the response commitment for your fleet. Nothing starts until you approve it in writing." },
  { step: "First service visit", body: "The first visit clears the backlog: thermal cleaning and repaste, batteries flagged in the audit, macOS and storage housekeeping, and backup checks on machines that have none." },
  { step: "Scheduled cycle begins", body: "After that the fleet runs on the agreed schedule, with a named technician who knows your machines and a single WhatsApp thread for the whole account." },
];

// Stated plainly on purpose. Businesses compare contracts on the exclusions, and
// discovering them after signing is how a maintenance contract loses a client.
const NOT_INCLUDED = [
  { title: "Replacement parts", body: "Batteries, screens, SSDs and boards are charged at your contract rate, not included in the annual fee. The rate is fixed in the contract so there is no negotiation when something breaks." },
  { title: "Accidental and liquid damage", body: "A dropped or drowned Mac is a repair, quoted separately. Contract devices still get priority turnaround and the contract parts rate." },
  { title: "Apple hardware purchases", body: "We service and repair; we do not sell you the fleet. If a machine is genuinely past economic repair we will tell you, and we have no incentive to say otherwise." },
  { title: "Software licences and cloud subscriptions", body: "We manage and support what you own. Licences, Apple Business Manager seats and cloud storage stay your cost." },
];

const OFFBOARDING = [
  { title: "Secure wipe on staff exit", body: "When someone leaves, we wipe and re-provision the Mac to your standard and confirm it in writing - the record your IT or compliance file usually needs." },
  { title: "Asset register kept current", body: "Every visit updates the register: what is in service, what was replaced, what is nearing end of life. It is yours to keep, and you leave with it if you leave us." },
  { title: "No lock-in on your data", body: "Nothing about the contract holds your devices or your records hostage. Backups are configured to systems you control, not to us." },
];

const FAQS = [
  { q: "What is an Apple Annual Maintenance Contract (AMC) in Dubai?",
    a: "An AMC is a yearly agreement that keeps your Apple devices serviced and supported for a fixed annual fee. It covers scheduled cleaning, battery and health checks, software upkeep, priority repairs and discounted parts - so you avoid surprise downtime and surprise bills." },
  { q: "How much does an AMC cost?",
    a: "Pricing is per device and scales with fleet size and the level of cover you need. Solo plans start low for 1-3 devices; business and enterprise plans are quoted after a free audit of your devices. WhatsApp us your device count for a same-day quote." },
  { q: "Does the AMC include spare parts and repairs?",
    a: "Scheduled servicing, diagnostics and remote support are included. Physical replacement parts (batteries, screens, SSDs) are charged at a discounted contract rate, and contract devices always get priority turnaround." },
  { q: "Can you service mixed fleets - Mac, iPhone, iPad and Windows?",
    a: "Yes. Our AMC covers MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone and iPad, and we also maintain Windows laptops from Lenovo, Dell, HP and Microsoft Surface alongside your Apple gear." },
  { q: "Do you come to our office?",
    a: "Yes - on-site servicing and free pickup/delivery across Dubai mainland are part of every business and enterprise plan. We work around your schedule to avoid disrupting the team." },
  { q: "How do we start?",
    a: "Send us your device list on WhatsApp or call 055 741 3706. We do a free audit, recommend the right plan, and put it in writing - no obligation until you approve." },
  { q: "What is NOT covered by the AMC?",
    a: "Replacement parts (batteries, screens, SSDs, boards) are charged at your contract rate rather than included, and accidental or liquid damage is quoted as a separate repair. Hardware purchases and software licences are not included either. All of it is listed in the contract before you sign - we would rather lose the deal than have you find out later." },
  { q: "What response time do we get?",
    a: "The response commitment is agreed per contract and written into it, because it depends on fleet size, location and whether you need on-site attendance or collection. Contract devices always take priority over walk-in work, and most in-stock-part repairs are same-day." },
  { q: "Can we cancel or change the plan mid-term?",
    a: "Yes. Fleets change - people join, people leave, machines are retired. Device counts can be adjusted during the term, and the terms for ending the contract are written into it rather than buried." },
  { q: "Do you provide loaner devices while ours are repaired?",
    a: "Loaner units are part of the enterprise and education plans and can be added to a business plan. Availability depends on the model, so it is agreed in the contract rather than promised on a web page." },
  { q: "What happens to a device when an employee leaves?",
    a: "We wipe it securely, re-provision it to your standard and confirm the wipe in writing. That written confirmation is usually what an IT or compliance file needs, and it is included rather than charged as an extra." },
  { q: "Is an AMC actually cheaper than paying per repair?",
    a: "It depends on your fleet. For a handful of newer machines, paying per repair is often the sensible choice and we will say so. An AMC starts paying for itself once you have enough devices, or old enough devices, that something is failing every few months - and the audit tells us which situation you are in before you commit." },
  { q: "Do you work with our existing IT provider?",
    a: "Yes, and it is common. Plenty of Dubai companies have a general IT partner for network and Windows, and use us for the Apple hardware they cannot service. We work alongside them rather than trying to replace them." },
];

export default function AnnualMaintenanceContract() {
  useSeo(
    {
      title: "Apple AMC Dubai - Annual Maintenance Contract for Mac & iPhone",
      description:
        "Annual Maintenance Contract (AMC) for Apple devices in Dubai. Scheduled servicing, battery checks, priority repairs, discounted parts & on-site support for businesses. Call 055 741 3706.",
      path: "/annual-maintenance-contract-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Apple Annual Maintenance Contract Dubai",
        timeline: "Annual contract",
        warranty: "P1Y",
        url: "/annual-maintenance-contract-dubai",
        description: "Annual maintenance contracts for Apple and Windows device fleets in Dubai - scheduled servicing, priority repairs, discounted parts and on-site support.",
      }),
      itemList({
        name: "What an Apple AMC includes",
        items: INCLUDED.map((i) => ({ name: i.title, url: "/annual-maintenance-contract-dubai", description: i.body })),
      }),
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "Annual Maintenance Contract", path: "/annual-maintenance-contract-dubai" },
      ]),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/annual-maintenance-contract-dubai")?.src}
        imageAlt={topicForPath("/annual-maintenance-contract-dubai")?.alt}
        variant="service"
        tone="dark"
        eyebrow="Annual Maintenance Contract · Dubai"
        title="Apple Annual Maintenance Contract (AMC) in Dubai"
        subtitle="Keep every Mac, iPhone and iPad in your business serviced, healthy and repaired-on-priority for one predictable yearly fee. Scheduled visits, on-site support and discounted parts."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 232+ reviews</span>
          <span>·</span>
          <span>On-site across Dubai</span>
          <span>·</span>
          <span>21+ years on Apple hardware</span>
        </p>
      </Hero>

      <QuickAnswer
        tone="dark"
        question="What does an Apple AMC cover for a Dubai business?"
        answer="An Annual Maintenance Contract covers every Mac, iPhone and iPad in your business for one yearly fee: scheduled servicing, battery and health checks, priority repairs and on-site support. Replacement parts are charged at a fixed contract rate and accidental damage is quoted separately. It starts with a free device audit, delivered as a written asset register."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Annual Maintenance Contract", path: "/annual-maintenance-contract-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <p className="text-[18px] leading-relaxed max-w-[75ch] mb-md">
          An <strong>Annual Maintenance Contract</strong> turns unpredictable repair bills and surprise downtime into one fixed yearly cost. Your devices are serviced on a schedule, problems are caught before they stop work, and when something does break, contract devices go to the front of the queue. Ideal for agencies, clinics, schools and any Dubai business that runs on Apple.
        </p>
      </section>

      {/* What's included */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <ShieldCheck size={28} className="text-accent" aria-hidden /> What every AMC includes
          </h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
            {INCLUDED.map((i) => (
              <article key={i.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm flex items-start gap-2"><Check size={18} className="text-accent mt-1 shrink-0" aria-hidden /> {i.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
          <Building2 size={28} className="text-accent" aria-hidden /> Plans that scale with your fleet
        </h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Three starting points - every contract is tailored after a free device audit. Pay per device, scale up or down as your team changes.
        </p>
        <div className="grid gap-md md:grid-cols-3">
          {PLANS.map((p) => (
            <article key={p.name} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg flex flex-col">
              <h3 className="text-[18px] font-bold mb-sm">{p.name}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-md flex-1">{p.body}</p>
              <p className="text-[13px] mono text-accent">Best for: {p.best}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Calendar size={28} className="text-accent" aria-hidden /> Why businesses sign an AMC
          </h2>
          <div className="grid gap-md md:grid-cols-3">
            {[
              { title: "No surprise downtime", body: "Failing batteries and clogged fans are caught on schedule, not when a laptop dies mid-deadline." },
              { title: "Predictable budget", body: "One annual figure for servicing and support, plus discounted rates on any parts you do need." },
              { title: "One trusted partner", body: "The same workshop that's serviced Apple hardware in Dubai since 2004 - a named technician, no call centre." },
            ].map((c) => (
              <article key={c.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm flex items-center gap-2"><Headphones size={18} className="text-accent" aria-hidden /> {c.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed m-0">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">How an AMC starts - the first four weeks</h2>
        <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
          You get the device audit as a written asset register before any money changes hands, so the
          first thing an AMC produces is a clear picture of what you actually own and what state it is in.
        </p>
        <ol className="grid gap-md md:grid-cols-2 lg:grid-cols-4">
          {ONBOARDING.map((o, i) => (
            <li key={o.step} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <span className="mono text-accent text-[13px] font-bold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[17px] font-bold mb-sm mt-1">{o.step}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{o.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* What is not included */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">What an AMC does not cover</h2>
          <p className="text-[16px] text-text-muted max-w-[72ch] mb-lg">
            Every maintenance contract has exclusions. Ours are listed here and in the contract itself,
            because finding them out after signing is the fastest way to lose a client.
          </p>
          <div className="grid gap-md md:grid-cols-2">
            {NOT_INCLUDED.map((n) => (
              <article key={n.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm">{n.title}</h3>
                <p className="text-[14px] text-text-muted leading-relaxed m-0">{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Offboarding / governance */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Staff changes, records and leaving us</h2>
        <div className="grid gap-md md:grid-cols-3">
          {OFFBOARDING.map((o) => (
            <article key={o.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm">{o.title}</h3>
              <p className="text-[14px] text-text-muted leading-relaxed m-0">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">AMC FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where we're based</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl mb-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Send your device count - get an AMC quote the same day</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Free device audit, written plan, no obligation. WhatsApp the number and types of devices and we'll recommend the right level of cover.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
      {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
        <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a fleet or AMC quote</h2>
        <LeadForm preset={PRESETS.business} sourcePath="/annual-maintenance-contract-dubai" defaultDeviceType="MacBook" />
      </section>

      <RelatedArticles path="/annual-maintenance-contract-dubai" />
    </PageShell>
  );
}
