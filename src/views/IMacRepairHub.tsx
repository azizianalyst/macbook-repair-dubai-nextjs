"use client";
// iMac Repair Dubai - faithful rebuild of the original WordPress /imac-repair-dubai page
// (user: "save data as I give you", 2026-06-01). Reproduces the old content INCLUDING its
// AED pricing table. Preserves the model + service internal links the family hub provided.
// ⚠️ HAND-EDITED - do NOT regenerate via build-family-hubs.mjs (it would overwrite this content).
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { QuickAnswer, deriveFamilyQuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";

const SIBLINGS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai" },
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

const MODELS = [
  `24" M4 (2024)`, `24" M3 (2023)`,
  `A2438 24" M1 (2021)`, `A2116 21.5" Intel (2020)`, `A2115 27" Intel (2020)`, `A2116 21.5" Intel (2019)`,
  `A2115 27" Intel (2019)`, `A1419 27" Intel (2017)`, `A1418 21.5" Intel (2017)`, `iMac Pro A1862 (2017)`,
  `A1419 27" Intel (2015)`, `A1419 27" Intel (2014)`, `A1419 27" Intel (Late 2013)`,
];

// Dedicated model pages (preserved from the family hub so they stay internally linked)
const MODEL_PAGES = [
  { label: "iMac 24\" M4 2024", href: "/imac-24-m4-2024-repair-dubai" },
  { label: "iMac 24\" M3 2023", href: "/imac-24-m3-2023-repair-dubai" },
  { label: "iMac 24\" M1 2021", href: "/imac-24-m1-2021-repair-dubai" },
  { label: "iMac 27\" Intel 2020", href: "/imac-27-intel-2020-repair-dubai" },
  { label: "iMac 27\" Intel 2019", href: "/imac-27-intel-2019-repair-dubai" },
  { label: "iMac 27\" Intel 2017", href: "/imac-27-intel-2017-repair-dubai" },
  { label: "iMac Pro 2017", href: "/imac-27-pro-2017-repair-dubai" },
];

// Chip-generation hub pages (grouped landing pages by silicon generation)
const CHIP_PAGES = [
  { label: "iMac Intel Repair (27-inch 5K & 21.5-inch 4K)", href: "/imac-intel-repair-dubai" },
  { label: "iMac M1 Repair (24-inch 2021)", href: "/imac-m1-repair-dubai" },
  { label: "iMac M3 Repair (24-inch 2023)", href: "/imac-m3-repair-dubai" },
  { label: "iMac M4 Repair (24-inch 2024)", href: "/imac-m4-repair-dubai" },
];

const SERVICE_PAGES = [
  { label: "iMac Screen", href: "/imac-screen-repair-dubai" },
  { label: "iMac Logic Board", href: "/imac-logic-board-repair-dubai" },
  { label: "iMac Not Turning On", href: "/imac-not-turning-on-dubai" },
  { label: "iMac RAM Upgrade", href: "/imac-ram-upgrade-dubai" },
  { label: "iMac SSD Upgrade", href: "/imac-ssd-upgrade-dubai" },
  { label: "iMac Data Recovery", href: "/imac-data-recovery-dubai" },
  { label: "iMac Virus Removal", href: "/imac-virus-removal-dubai" },
  { label: "iMac Overheating Fix", href: "/imac-overheating-fix-dubai" },
  { label: "iMac OS Reinstall", href: "/imac-os-reinstall-dubai" },
  { label: "iMac Fan Cleaning", href: "/imac-fan-cleaning-dubai" },
  { label: "iMac Power Supply", href: "/imac-power-supply-repair-dubai" },
  { label: "iMac GPU", href: "/imac-gpu-repair-dubai" },
  { label: "iMac Full Diagnostic", href: "/imac-full-diagnostic-dubai" },
];

// Faithful pricing table from the original page
const PRICING = [
  { service: "Screen Repair", cost: "99-299", desc: "Minor repairs to fix screen issues.", time: "1-2 hours" },
  { service: "Screen Replacement", cost: "499-2499", desc: "Complete screen replacement.", time: "2-4 hours" },
  { service: "Hard Drive Replacement", cost: "99-499", desc: "Replacing faulty hard drive.", time: "1-2 hours" },
  { service: "SSD Upgrade", cost: "299-2999", desc: "Upgrading to a faster SSD.", time: "1-3 hours" },
  { service: "RAM Upgrade", cost: "99-499", desc: "Increasing memory capacity.", time: "1 hour" },
  { service: "Logic Board Repair", cost: "99-799", desc: "Repairing the logic board.", time: "2-3 hours" },
  { service: "Graphics Card Replacement", cost: "99-499", desc: "Replacing the graphics card.", time: "1-2 hours" },
  { service: "Power Supply Replacement", cost: "299-799", desc: "Replacing the power supply unit.", time: "1-2 hours" },
  { service: "Cooling Fan Replacement", cost: "199-499", desc: "Replacing the cooling fan.", time: "1-2 hours" },
  { service: "Software Troubleshooting", cost: "49-199", desc: "Fixing software-related issues.", time: "1-2 hours" },
  { service: "Virus Removal", cost: "49-199", desc: "Removing malware and viruses.", time: "1-2 hours" },
  { service: "Keyboard Repair", cost: "49-199", desc: "Fixing or replacing keyboard issues.", time: "1 hour" },
  { service: "Mouse Repair", cost: "49-199", desc: "Fixing or replacing mouse issues.", time: "1 hour" },
  { service: "Speaker Repair", cost: "99-499", desc: "Repairing or replacing speakers.", time: "1-2 hours" },
  { service: "Microphone Repair", cost: "99-499", desc: "Repairing or replacing the microphone.", time: "1-2 hours" },
  { service: "Webcam Replacement", cost: "99-499", desc: "Replacing the built-in webcam.", time: "1-2 hours" },
  { service: "Wi-Fi and Bluetooth Repair", cost: "99-499", desc: "Fixing connectivity issues.", time: "1-2 hours" },
  { service: "USB Port Repair", cost: "99-499", desc: "Repairing USB ports.", time: "1-2 hours" },
  { service: "iMac Display Port Repair", cost: "99-499", desc: "Repairing display port issues.", time: "1-2 hours" },
  { service: "iMac Optical Drive Replacement", cost: "N/A", desc: "Replacing the optical drive.", time: "N/A" },
  { service: "iMac Backup and Restore Services", cost: "99-999", desc: "Backup and restore data.", time: "Varies" },
  { service: "iMac Liquid Damage Repair", cost: "99-499", desc: "Repairing liquid damage.", time: "2-4 hours" },
  { service: "iMac OS Installation and Upgrade", cost: "49-299", desc: "Installing or upgrading macOS.", time: "1-2 hours" },
  { service: "iMac Component-Level Repair", cost: "299-849", desc: "Repairing individual components.", time: "2-3 hours" },
];

const WHY = [
  { title: "OEM parts for repairs", body: "To ensure your iMac works well, is compatible, and lasts a long time, we only use OEM parts. A genuine OEM part matches the exact specs and quality standards of the original iMac parts." },
  { title: "Convenient on-site repairs", body: "Being without your iMac, even briefly, can be inconvenient - and your device likely holds valuable files. Our trained technicians provide on-site repairs, so your device is fixed in your presence, minimising downtime and keeping your data secure." },
  { title: "Your iMac will be perfect again in no time", body: "We'll quickly figure out what's wrong and fix it so it works as well as it did before. There's no need to wait days without your iMac - we understand its importance and treat it accordingly." },
  { title: "A qualified technician is the only one who should fix it", body: "All of our repair techs are certified with a lot of experience across all iMac types. They go through extensive training to deliver quick, perfect, and long-lasting repairs." },
];

const TESTIMONIALS = [
  { name: "Jay Sharma", body: "The best place in Dubai to get your iMac fixed. The team works quickly to solve the problem. Liquid had ruined it and there seemed to be no way to fix it, but the team got it back in working order. Thanks to the team - if you have any related problems, I strongly suggest this tech service shop." },
  { name: "Atif Saleem", body: "The repair team did another great job fixing my iMac. After a leaky roof caused a lot of water damage, Apple Support told me I should replace the whole thing - but they saved me a lot of money. Very strongly recommended." },
];

const FAQS = [
  { q: "How long will the iMac repair take?", a: "iMac display, power supply, and camera replacements take 3-4 hours. When parts are not in stock, it typically takes 1-2 business days to receive them from our suppliers. You can pre-book your repair to receive premium services." },
  { q: "Will the iMac repair process remove my data?", a: "Our professionals do not remove data unless the repair necessitates it. We always advise customers to keep a backup at all times." },
  { q: "Will repairing my iMac impact my warranty?", a: "We are independent Apple specialists, not an Apple Authorised Service Centre - so if your iMac is still under Apple's warranty or AppleCare+, we'll tell you honestly and point you to Apple first, since a covered repair there keeps your Apple warranty intact. For out-of-warranty iMacs there's nothing left to void, and every repair we do is backed by our own written warranty up to 12 months." },
  { q: "Can you fix any model of iMac?", a: "Yes, we repair all iMac models, from older Intel-based systems to the latest M4-powered iMacs. Our technicians handle both hardware and software issues for 21.5-inch, 24-inch, and 27-inch versions, including iMac Pro." },
  { q: "Do you offer on-site iMac repair in Dubai?", a: "Absolutely! For your convenience, we provide on-site iMac repair and troubleshooting. Our technicians can come to your home or office to perform diagnostics or minor repairs, ensuring minimal downtime for your work." },
  { q: "Do you offer free diagnostics for iMac repairs?", a: "Yes, we offer free diagnostics and inspection before starting any repair. Once the issue is identified, we'll share a transparent quote outlining the cost and time required - no hidden fees, no surprises." },
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function IMacRepairHub() {
  useSeo(
    {
      title: "iMac Repair Dubai - Certified Logic Board & SSD Specialists",
      description:
        "Expert iMac repair in Dubai. Our Apple specialists fix screen, SSD, RAM, GPU & logic board issues. Support for Intel, M1 & M3 iMac models.",
      path: "/imac-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  const qa = deriveFamilyQuickAnswer({ family: "iMac", startingPrice: 1040 });

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/imac-repair-hub-dubai.jpg"
        imageAlt="iMac repair Dubai - 24-inch M4 all-in-one teardown exploded-view engineering infographic"
        variant="device"
        tone="dark"
        eyebrow="iMac specialist"
        title="Professional iMac Repair in Dubai - Fast & Reliable Service"
        subtitle="Do you have issues with your iMac? Our skilled technicians provide reliable and quick services for iMac repair in Dubai. If you want your iMac to run like new again, you can trust us to provide quality service."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Independent Apple specialists</span>
          <span>·</span>
          <span>OEM parts</span>
          <span>·</span>
          <span>Free pickup & delivery</span>
        </p>
      </Hero>

      <QuickAnswer question={qa.question} answer={qa.answer} tone="dark" />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Mac Repair", path: "/mac-repair-dubai" },
          { name: "iMac Repair", path: "/imac-repair-dubai" },
        ]} />
      </section>



      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">iMac models we repair</h2>
        <ul className="flex flex-wrap gap-2 mb-lg">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[13px] text-text mono">{m}</li>
          ))}
        </ul>
        <p className="text-[14px] mb-sm font-semibold text-text">Dedicated model pages:</p>
        <ul className="flex flex-wrap gap-2">
          {MODEL_PAGES.map((m) => (
            <li key={m.href}><Link to={m.href} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors mono">{m.label}</Link></li>
          ))}
        </ul>
        <p className="text-[14px] mt-lg mb-sm font-semibold text-text">Repair by chip generation:</p>
        <ul className="flex flex-wrap gap-2">
          {CHIP_PAGES.map((c) => (
            <li key={c.href}><Link to={c.href} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{c.label}</Link></li>
          ))}
        </ul>
      </section>

      {/* iMac Repair Solution */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">iMac Repair Dubai. Expert Solution</h2>
        <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[75ch]">
          <p>For good reason, iMacs are considered among the best computers in their class. Even high-quality machines can develop problems that require service. A common reason for repairs is accidental drops or shocks, water damage, software issues, and DIY repairs. These issues are relatively common, but more severe problems such as motherboard failure can also occur. iMac repairs require patience, care, and expertise.</p>
          <p>To repair Apple technology, you need specialists with extensive knowledge and experience. We at MacBook Repair Dubai are committed to providing high-quality iMac repair services in Dubai.</p>
          <p>Does your iMac run slow or freeze up? Don't replace it just yet - our expert iMac repair and troubleshooting service might be all you need. Our skilled technicians will inspect your system and suggest the best upgrades to speed things up and boost performance without breaking your budget.</p>
          <p>We offer everything from RAM upgrades to super-fast SSD installations. These changes can make your iMac start up quicker, transfer files faster, and run more smoothly overall. We only use high-quality parts from trusted brands and make sure every fix or upgrade meets your expectations.</p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Reliable iMac Upgrade Service</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-md">We fix the most common iMac problems at competitive prices. Estimated costs (AED) and timings:</p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-alt">
            <table className="w-full text-[14px] min-w-[640px]">
              <caption className="sr-only">iMac repair services, estimated AED cost, description, and estimated time.</caption>
              <thead className="bg-bg-card">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Service</th>
                  <th className="px-md py-sm font-semibold">Est. cost (AED)</th>
                  <th className="px-md py-sm font-semibold">Description</th>
                  <th className="px-md py-sm font-semibold">Est. time</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((r, i) => (
                  <tr key={r.service} className={i % 2 ? "bg-bg-alt" : ""}>
                    <td className="px-md py-sm font-semibold">{r.service}</td>
                    <td className="px-md py-sm mono text-accent whitespace-nowrap">{r.cost}</td>
                    <td className="px-md py-sm text-text-muted">{r.desc}</td>
                    <td className="px-md py-sm text-text-muted whitespace-nowrap">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-text-muted mt-sm">Estimated ranges only - final price confirmed after a free diagnosis.</p>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Service pages */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">iMac services we specialise in</h2>
        <ul className="flex flex-wrap gap-2">
          {SERVICE_PAGES.map((s) => (
            <li key={s.href}><Link to={s.href} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[14px] text-accent hover:bg-bg-alt transition-colors">{s.label}</Link></li>
          ))}
        </ul>
      </section>

      {/* Why choose us */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Why Choose Us?</h2>
          <p className="text-[16px] text-text-muted max-w-[75ch] mb-lg">Some of the top iMac repair techs in Dubai work at MacBook Repair Dubai. We have one of the highest customer retention rates in the UAE - most visitors become happy customers thanks to our low prices. We also offer free pickup and delivery to all our valued clients.</p>
          <div className="grid gap-md sm:grid-cols-2">
            {WHY.map((w) => (
              <article key={w.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{w.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
        <div className="grid gap-md md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
              <div className="flex gap-1 mb-sm" role="img" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
              </div>
              <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
              <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Save Time and Schedule Your Repair Now</h2>
          <p className="relative text-text-muted text-[16px] max-w-[70ch]">
            Our goal is to provide the supreme-quality Apple device repair available in Dubai, UAE - quick and reasonably priced. We fix all types of Apple Macs, iMac, Mac Pro, MacBook, iPad and iPhone with a 100% data-loss-free guarantee. Free diagnosis, same-day fixing, pickup and delivery available. Simply call us or fill out our short form and we'll get back to you right away.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>

      {/* FAQ */}
      <VsAppleStore tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
        <div className="mt-lg border border-border bg-bg-card rounded-md p-lg max-w-[60ch]">
          <h3 className="text-[18px] font-bold mb-sm">Business Hours</h3>
          <p className="text-[15px] text-text-muted">Monday - Saturday: 9:00 AM - 10:00 PM</p>
          <p className="text-[15px] text-text-muted">Sunday: our technicians are resting, but onsite service is available.</p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* Related services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[22px] font-semibold mb-sm">Related Services</h2>
        <div className="flex flex-wrap gap-sm text-sm">
          {[
            { label: "Mac Repair Dubai", href: "/mac-repair-dubai" },
            { label: "MacBook Repair Dubai", href: "/macbook-repair-dubai" },
            { label: "MacBook Air Repair Dubai", href: "/macbook-air-repair-dubai" },
            { label: "MacBook Pro Repair Dubai", href: "/macbook-pro-repair-dubai" },
            { label: "Mac mini Repair Dubai", href: "/mac-mini-repair-dubai" },
            { label: "Apple Repair Dubai", href: "/apple-repair-dubai" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-accent underline underline-offset-2 hover:text-accent/80">{l.label}</a>
          ))}
        </div>
      </section>
      </div>
    <RelatedArticles path="/imac-repair-dubai" />
    </PageShell>
  );
}
