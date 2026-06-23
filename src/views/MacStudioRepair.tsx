"use client";
// Mac Studio Repair Dubai - faithful rebuild of the live WordPress /mac-studio-repair-dubai page
// (user: "same data", 2026-06-01; pulled from live site). Prior DevicePageTemplate version in git history.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import MAC_DESKTOP_MODELS from "@/content/mac-desktop-models.json";

const SIBLINGS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai" },
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
];

const MODELS = [
  "Mac Studio (M4 Max, 2025)", "Mac Studio (M3 Ultra, 2025)",
  "Mac Studio (M2 Max, 2023)", "Mac Studio (M2 Ultra, 2023)",
  "Mac Studio (M1 Max, 2022)", "Mac Studio (M1 Ultra, 2022)",
];

const SERVICES = [
  { title: "Water Damage Issue", body: "If your Mac Studio has suffered liquid spills or moisture exposure, we can help. Our technicians carefully clean and repair your device to restore its functionality." },
  { title: "Software Issues", body: "Software problems can be with the operating system or installed apps - showing up as errors, crashes, freezes, or unexpected behaviour." },
  { title: "Data Recovery", body: "Don't worry if you've lost important files or data on your Mac Studio. Our experts can recover your lost data using advanced techniques and tools." },
  { title: "Hardware Upgrade", body: "Upgrade your Mac Studio's hardware to enhance performance. We can install additional RAM or storage to help your device run more efficiently." },
  { title: "Overheating", body: "When your device becomes excessively hot, causing slowdowns or shutdowns, it can be due to a faulty cooling system, dust build-up, or prolonged heavy usage." },
  { title: "Hard Drive Replacement", body: "If your Mac Studio's hard drive has failed, we can replace it with a new one and restore your data so you don't lose any important files." },
  { title: "SSD Upgrade", body: "Experience a significant boost in speed and performance by upgrading to an SSD. Our technicians perform the upgrade and transfer your data seamlessly." },
  { title: "RAM Upgrade", body: "Increase your Mac Studio's RAM to handle more demanding tasks and run more smoothly. We install additional RAM to improve overall performance." },
  { title: "Graphics Card Problems", body: "Graphics card problems can cause glitches, flaws, or wrong rendering on screen - usually from hardware issues, overheating, or program compatibility." },
  { title: "Power Supply Issues", body: "Power issues may occur if your system won't turn on or shuts down suddenly. A bad power source, broken cables, or other electrical parts could be responsible." },
  { title: "Mac Studio Not Booting Fix", body: "If your Mac Studio won't boot, don't panic. Our skilled technicians diagnose the problem and implement the necessary fixes to get your device running again." },
  { title: "Diagnostic Services", body: "Our comprehensive diagnostic services help identify any issues with your Mac Studio, and we provide the best repair solutions based on our findings." },
  { title: "Mac Studio Won't Turn On", body: "If your Mac Studio won't power on, our experts troubleshoot the issue and perform the necessary repairs to get your device back up and running." },
  { title: "System Running Slow", body: "Your system may feel slow or take a long time to start up or open apps. This can be caused by hardware limitations, software issues, or not enough storage." },
  { title: "Mac Studio Crashing", body: "Experiencing frequent crashes or freezes? Our technicians identify the cause and implement a solution to stabilise your device." },
  { title: "Mac Studio Freezing", body: "If your Mac Studio keeps freezing or becoming unresponsive, our experts diagnose the error and resolve it to ensure smooth operation." },
  { title: "WiFi Issue", body: "Struggling with WiFi connectivity? We troubleshoot and fix the fault to restore reliable wireless internet access." },
  { title: "Bluetooth Issue", body: "If you're having difficulty connecting Bluetooth devices, our technicians resolve any Bluetooth connectivity challenges you may be experiencing." },
  { title: "Sound Not Working", body: "Audio problems can cause no sound, distorted sound, or non-working mics and speakers - from program settings, driver conflicts, or hardware failures." },
];

const PROCESS = [
  "Bring your Mac Studio to our repair centre or schedule an appointment.",
  "We carefully examine your device to find the fault.",
  "Our team suggests the best way to fix your Mac Studio.",
  "We use genuine Apple parts to repair your device.",
  "We thoroughly test your Mac Studio to make sure it works well.",
  "You get your fixed Mac Studio back, often on the same day.",
];

const SIGNS = [
  "Your Mac Studio won't turn on or keeps shutting down.",
  "The screen is cracked, frozen, or has odd colours.",
  "Your device is very slow or keeps crashing.",
  "You hear strange sounds coming from your Mac Studio.",
  "There is visible damage, like dents or liquid spills.",
  "Your Mac Studio is getting very hot, even when you're not using it much.",
];

const PERFORMANCE = [
  "Make sure your software is always up to date.",
  "Remove apps you don't use anymore.",
  "Free up space on your hard drive.",
  "Reduce the number of apps that start up automatically.",
  "Keep your Mac Studio clean so dust doesn't build up.",
  "Don't let your device get too hot or too cold.",
  "Keep it on a flat, stable surface so air can move well.",
  "Turn your system off when it isn't being used for a while.",
];

const WHY = [
  { title: "Commitment to Quality", body: "With years of experience, our highly skilled experts handle any Mac Studio issue. We exclusively use genuine Apple parts for long-term performance, and we stand behind our work with a warranty on all repair services." },
  { title: "Rapid Repair Service", body: "We make your Mac repair convenient and straightforward - no messing around, just super-fast Apple repairs. If you can't identify the problem, just tell us you need a solution and our service centre provides a repair quotation." },
  { title: "All Under One Roof", body: "Slow performance, OS issues, or data loss? We provide full software repair services including virus removal and optimisation, and fix fans, overheating, broken displays, and failed storage devices using high-tech tools and methods." },
];

const SPECS = [
  { title: "Mac Studio M2 Max Repair", items: ["12-core CPU", "Up to 38-core GPU", "Up to 96GB unified memory", "400GB/s memory bandwidth"] },
  { title: "Mac Studio M2 Ultra Repair", items: ["24-core CPU", "Up to 76-core GPU", "Up to 192GB unified memory", "800GB/s memory bandwidth"] },
];

const TESTIMONIALS = [
  { name: "Khurram Shahid", body: "To handle my heavy video editing work, I had to add more RAM to my Mac Studio. The techs helped me pick the right RAM and quickly installed it. There's no more lag when I edit my movies." },
  { name: "Sarah Omer", body: "I was worried about how long and how much it would cost to fix my cracked Mac Studio screen. The technicians fixed it really quickly and kept me informed the whole time. The team was very skilled and the service was great." },
];

const FAQS = [
  { q: "How much time will it take to fix my Mac Studio?", a: "The majority of repairs are completed the same day. The precise timing depends on the availability of parts and the device's diagnostic results." },
  { q: "Do I need to make an appointment for a repair?", a: "Walk-ins are welcome to drop off your device. But we ask all customers to call or book an appointment ahead of time so we can be ready to help you faster based on your problem." },
  { q: "Is it worth repairing an older Apple Mac Studio?", a: "Almost always, restoring an older Mac Studio is more cost-effective than buying a new one. They usually last between 3 and 8 years (longer if well cared for), and repairs are generally cheaper than buying a pricey new device." },
  { q: "Can you recover lost data from a Mac Studio?", a: "Absolutely. We provide professional data recovery services for Mac Studio devices affected by software crashes, drive corruption, or accidental deletion. Your data is handled safely and confidentially." },
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

export default function MacStudioRepair() {
  useSeo(
    {
      title: "Mac Studio Repair Dubai - Expert Logic Board & SSD Fix",
      description:
        "Professional Mac Studio repair in Dubai by independent Apple specialists. Logic board, SSD & power-issue repair. M1 Ultra & M2 Ultra models supported.",
      path: "/mac-studio-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/mac-studio-repair-dubai.jpg"
        imageAlt="Mac Studio repair Dubai - M4 Max compact workstation teardown engineering infographic"
        tone="dark"
        variant="device"
        eyebrow="Mac Studio specialist"
        title="Mac Studio Repair Dubai"
        subtitle="Your Mac Studio may be malfunctioning. Don't worry - MacBook Repair Dubai is the best place for Mac Studio repair in Dubai. Our expert staff can fix all problems, whether the screen is broken or the motherboard is damaged. Get in touch with us today."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Expert Apple technicians</span>
          <span>·</span>
          <span>Genuine Apple parts</span>
          <span>·</span>
          <span>Often same-day</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Where can I get my Mac Studio repaired in Dubai?"
        answer="MacBook Repair Dubai repairs every Mac Studio. M1 Max, M1 Ultra, M2 Max, M2 Ultra, M3 Ultra and M4 Max, at its Concord Tower workshop in Dubai Media City. Services include logic-board repair, SSD upgrades, no-power diagnosis and macOS reinstalls, with free diagnosis, free citywide pickup, OEM-grade parts and a written warranty up to 12 months."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Mac Repair", path: "/mac-repair-dubai" },
          { name: "Mac Studio Repair", path: "/mac-studio-repair-dubai" },
        ]} />
      </section>



      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Mac Studio models we repair</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Tap a model for its dedicated repair page with pricing, common faults and turnaround.</p>
        <div className="flex flex-wrap gap-2 mb-lg">
          {MAC_DESKTOP_MODELS.filter((m) => m.family === "studio").map((m) => (
            <Link key={m.slug} to={`/${m.slug}`} className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{m.name} →</Link>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-2 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-text mono">{m}</li>
          ))}
        </ul>
      </section>

      {/* Repair by chip generation */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Repair by chip generation</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Jump to the chip-specific repair page for your Mac Studio.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-studio-m1-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio M1 Max/Ultra (2022) →</Link>
          <Link to="/mac-studio-m2-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio M2 Max/Ultra (2023) →</Link>
          <Link to="/mac-studio-m3-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio M3 Ultra (2025) →</Link>
          <Link to="/mac-studio-m4-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio M4 Max (2025) →</Link>
        </div>
      </section>

      {/* Common Mac Studio services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Common Mac Studio services</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Go straight to the fix you need.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-studio-not-turning-on-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio Not Turning On →</Link>
          <Link to="/mac-studio-no-display-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio No Display →</Link>
          <Link to="/mac-studio-overheating-fix-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio Overheating →</Link>
          <Link to="/mac-studio-data-recovery-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Studio Data Recovery →</Link>
        </div>
      </section>

      {/* Issues / services */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Mac Studio Issues We Deal With</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Repair process */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">What is the repair process for Mac Studio?</h2>
        <ol className="space-y-md max-w-[80ch]">
          {PROCESS.map((step, i) => (
            <li key={i} className="flex gap-md">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center">{i + 1}</span>
              <p className="text-[15px] text-text-muted leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Signs */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Indications your device needs repair</h2>
          <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
            {SIGNS.map((s) => <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>)}
          </ul>
        </div>
      </section>

      {/* Performance tips */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">How to enhance Mac Studio performance</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {PERFORMANCE.map((p) => <li key={p} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {p}</li>)}
        </ul>
      </section>

      {/* Why choose + specs */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Why Choose Us?</h2>
          <div className="grid gap-md md:grid-cols-3 mb-xl">
            {WHY.map((w) => (
              <article key={w.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{w.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-md sm:grid-cols-2">
            {SPECS.map((s) => (
              <article key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
                <ul className="space-y-1">{s.items.map((it) => <li key={it} className="text-[14px] text-text-muted">{it}</li>)}</ul>
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
            <figure key={t.name} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <div className="flex gap-1 mb-sm" role="img" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
              </div>
              <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
              <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion tone="dark" items={FAQS} injectSchema />
        <div className="mt-lg border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg max-w-[60ch]">
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

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Contact us for immediate assistance</h2>
          <p className="relative text-text-muted text-[16px] max-w-[70ch]">
            Bring your Mac Studio to our repair centre and we'll diagnose it thoroughly before recommending a repair option. Begin the repair process immediately and get a free quote.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/mac-studio-repair-dubai" />
    </PageShell>
  );
}
