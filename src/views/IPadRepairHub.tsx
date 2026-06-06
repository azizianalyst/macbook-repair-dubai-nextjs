"use client";
// iPad Repair Dubai - faithful rebuild of the live WordPress /ipad-repair-dubai page
// (user: "all old data which I give you", 2026-06-01; pulled from live site). Preserves all
// model + service child-page links. ⚠️ HAND-EDITED - do NOT regenerate via build-family-hubs.mjs.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
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

const SIBLINGS = [
  { label: "Mac Repair", href: "/mac-repair-dubai" },
  { label: "iPhone", href: "/iphone-repair-dubai" },
  { label: "Apple Display", href: "/apple-display-repair-dubai" },
];

const MODEL_PAGES = [
  ["iPad Pro 13\" M5", "/ipad-pro-13-m5-repair-dubai"], ["iPad Pro 13\" M4", "/ipad-pro-13-m4-repair-dubai"], ["iPad Pro 12.9\" M2", "/ipad-pro-12.9-m2-repair-dubai"], ["iPad Pro 12.9\" M1", "/ipad-pro-12.9-m1-repair-dubai"], ["iPad Pro 11\" M5", "/ipad-pro-11-m5-repair-dubai"], ["iPad Pro 11\" M4", "/ipad-pro-11-m4-repair-dubai"], ["iPad Pro 11\" M2", "/ipad-pro-11-m2-repair-dubai"], ["iPad Pro 11\" M1", "/ipad-pro-11-m1-repair-dubai"],
  ["iPad Air M4 13\"", "/ipad-air-m4-13-repair-dubai"], ["iPad Air M4 11\"", "/ipad-air-m4-11-repair-dubai"], ["iPad Air M3 13\"", "/ipad-air-m3-13-repair-dubai"], ["iPad Air M3 11\"", "/ipad-air-m3-11-repair-dubai"], ["iPad Air M2 13\"", "/ipad-air-m2-13-repair-dubai"], ["iPad Air M2 11\"", "/ipad-air-m2-11-repair-dubai"], ["iPad Air 5", "/ipad-air-5-repair-dubai"], ["iPad Air 4", "/ipad-air-4-repair-dubai"],
  ["iPad 11th gen", "/ipad-11th-gen-repair-dubai"], ["iPad 10th gen", "/ipad-10th-gen-repair-dubai"], ["iPad 9th gen", "/ipad-9th-gen-repair-dubai"], ["iPad (older gen)", "/ipad-older-gen-repair-dubai"],
  ["iPad mini 7", "/ipad-mini-7-repair-dubai"], ["iPad mini 6", "/ipad-mini-6-repair-dubai"], ["iPad mini 5", "/ipad-mini-5-repair-dubai"],
];

const SERVICE_PAGES = [
  ["Screen Repair", "/ipad-screen-repair-dubai"], ["Battery Replacement", "/ipad-battery-replacement-dubai"], ["Charging Port", "/ipad-charging-port-repair-dubai"], ["Back Glass", "/ipad-back-glass-repair-dubai"], ["Camera Repair", "/ipad-camera-repair-dubai"], ["Speaker", "/ipad-speaker-repair-dubai"], ["Home Button", "/ipad-home-button-repair-dubai"], ["Power Button", "/ipad-power-button-repair-dubai"], ["Smart Connector", "/ipad-smart-connector-repair-dubai"], ["Water Damage", "/ipad-water-damage-repair-dubai"], ["Software Reset", "/ipad-software-reset-dubai"], ["Full Diagnostic", "/ipad-full-diagnostic-dubai"], ["iCloud Unlock", "/ipad-icloud-unlock-dubai"], ["Pencil Compatibility", "/ipad-pencil-compatibility-dubai"],
];

const MODELS = [
  "iPad 10 (2022)", "iPad Pro 12.9\" 6 (2022)", "iPad Pro 11\" 4 (2022)", "iPad Air 5 (2022)", "iPad 9 (2021)",
  "iPad Pro 12.9\" 5 (2021)", "iPad Pro 11\" 3 (2021)", "iPad Air 4 (2020)", "iPad Pro 12.9\" 4 (2020)", "iPad Pro 11\" 2 (2020)",
  "iPad 7 (2019)", "iPad mini 5 (2019)", "iPad Pro 12.9\" 3 (2018)", "iPad Pro 11\" (2018)", "iPad 6 (2018)", "iPad Pro 12.9\" 2 (2017)",
];

const SERVICES = [
  { title: "Screen Repair / Replacement", body: "Our skilled technicians can efficiently repair or replace your iPad's screen. Whether you have a cracked or shattered display, we have the expertise to get your iPad looking and functioning like new." },
  { title: "Battery Replacement", body: "All systems depend on their batteries. If your iPad is losing charge faster than usual, it may indicate a battery or charging issue. Our team can assist with a trusted battery replacement." },
  { title: "Logic Board Repair", body: "Repairing a motherboard successfully takes specialised skills, expert knowledge, and the right tools. We've been leading the way in chip-level fixes at our service center for quite some time." },
  { title: "iPad Won't Charge", body: "It can be very frustrating when your iPad doesn't get power when charging. Depending on the problem, our experts can help - addressing the issue promptly and systematically often restores normal charging." },
  { title: "Virus Removal or Backing Up Your Data", body: "If you downloaded a virus-infected file or deleted an important document, we help you recover your data. The process is quick and easy, and we handle your device carefully and precisely." },
  { title: "Fixing Wi-Fi Connectivity Problems", body: "Can't connect your iPad to Wi-Fi? First check whether the router is having trouble. If that's not the issue, let us know and our techs may adjust the Wi-Fi network settings to resolve it." },
  { title: "Water Damage Repair", body: "When your iPad comes into contact with water or liquid, it may not function properly. Stop using it right away and contact our trained technicians for water damage repair." },
];

const OTHER = ["Slower performance", "Charging malfunctions", "Microphone issues", "Crackling or damaged speakers", "OS randomly crashing", "AirDrop not working"];

const PROCESS = [
  "Our skilled technicians examine your iPad to identify the error, then discuss the findings and explain the problem and necessary solutions.",
  "We give you a truthful cost estimate based on the findings - we prioritise informing you of the price beforehand so you know what to anticipate.",
  "Once you authorise us, our experts proceed with the repair, using only top-notch replacement components and modern equipment.",
  "After the fix, we conduct a complete quality check to verify the functionality of all parts and functions.",
  "We clean your iPad to remove any dust or dirt, safely package it, and let you know when it's ready for pickup or delivery.",
];

const SIGNS = [
  "Cracked or shattered screen.", "Exposure to liquid or water damage.", "Malfunctioning cameras or flashlight.", "Unresponsive or inconsistent touchscreen.",
  "Inability to connect to Wi-Fi or cellular networks.", "Physical damage to the body or buttons.", "Issues with the headphone jack or Lightning port.", "Bent or warped iPad body affecting functionality.",
  "Abnormal sounds or noises from the device.", "Distorted or non-functioning speakers or microphone.", "Display discoloration, flickering, or dead pixels.", "Battery draining unusually quickly or not charging properly.",
  "Frequent overheating, even when not in use.", "Persistent software issues like app crashes or freezes.", "Unresponsive or malfunctioning Home button or Touch ID sensor.",
];

const TIPS = [
  "Clean the iPad often with a soft cloth.", "Back up your iPad data using iCloud or iTunes.", "Use chargers and accessories made by Apple.", "Don't let the battery charge get too low or too high.", "Update the iPad and apps when new versions come out.",
  "Turn off Wi-Fi and Bluetooth when you're not using them.", "Have your iPad checked and cleaned occasionally by a professional.", "Use a case and screen protector to avoid scratches and cracks.", "Remove apps, photos, and videos you don't need to save space.", "Check which apps can access your location, camera, and microphone.",
];

const WHY = ["Chip-level repairs", "Competitive prices", "Same-day delivery", "Data security provided", "100% guaranteed solutions", "Authentic and compatible spare parts", "Quick, convenient on-site repair and maintenance", "Skilled, licensed, and experienced technicians"];

const TESTIMONIALS = [
  { name: "Leilla Manic", body: "My iPad's charging port was faulty and I had trouble finding a place that could fix it quickly. The service provider addressed the issue promptly, ensuring a smooth, hassle-free process. The repair was efficient and affordable - highly recommended." },
  { name: "Sarah Ahmad", body: "I couldn't find anyone to fix my iPad near me. Luckily, the repair service offered a mail-in option. I sent it in, got it fixed, and had it back in a few days. Very convenient." },
  { name: "Vinketish", body: "My iPad had suffered water damage and I was worried about losing all my data. The experts not only restored my iPad but also saved all my important files. Their attention to detail and customer service is top-notch." },
];

const FAQS = [
  { q: "Will replacing the screen on an iPad damage user data?", a: "No, a screen replacement is unrelated to the device's data. You will only lose your data if the device's data storage fails for some other reason." },
  { q: "How long does it take to repair my iPad?", a: "The time required varies according to the model. However, the specialists at our service center will provide a repair time before starting the repair." },
  { q: "Is it worth changing the iPad's screen?", a: "A replacement screen is always preferable to purchasing a new device - it saves time and money. An inexpensive screen repair can extend the life of your device by months or years, and it's beneficial to the environment because it reduces e-waste." },
  { q: "Do you use genuine Apple parts for repairs?", a: "Absolutely. We only use authentic, high-quality OEM parts compatible with Apple iPads to maintain original performance and durability." },
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

export default function IPadRepairHub() {
  useSeo(
    {
      title: "iPad Repair Dubai - Screen, Battery & Logic Board Experts",
      description:
        "Professional iPad repair in Dubai for all models. Certified technicians fix screens, batteries, charging ports, and logic boards with genuine Apple parts.",
      path: "/ipad-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">
      <Hero
        variant="device"
        tone="dark"
        eyebrow="iPad specialist"
        title="Cost-Effective iPad Repair Dubai Service"
        subtitle="The Apple iPad is one of the most dependable devices in the world - but even the most reliable device is susceptible to damage. For expert iPad troubleshooting and repair, MacBook Repair Dubai is your one-stop Apple iPad repair facility."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-on-primary-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Expert Apple technicians</span>
          <span>·</span>
          <span>Genuine / OEM parts</span>
          <span>·</span>
          <span>Same-day delivery</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "iPad Repair", path: "/ipad-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <p className="flex flex-wrap items-center gap-2 text-[14px] text-on-primary-muted">
          <span className="font-semibold text-on-primary">We also repair:</span>
          {SIBLINGS.map((s) => (
            <Link key={s.href} to={s.href} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-accent-bright hover:bg-white/[0.08] transition-colors">{s.label}</Link>
          ))}
        </p>
      </section>

      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">iPad models we repair</h2>
        <ul className="flex flex-wrap gap-2 mb-lg">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[13px] text-on-primary mono">{m}</li>
          ))}
        </ul>
        <p className="text-[14px] text-on-primary mb-sm font-semibold">Dedicated model pages:</p>
        <ul className="flex flex-wrap gap-2">
          {MODEL_PAGES.map(([label, href]) => (
            <li key={href}><Link to={href} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[13px] text-accent-bright hover:bg-white/[0.08] transition-colors">{label}</Link></li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">iPad Repair Services We Offer</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[15px] text-on-primary-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <p className="text-[14px] text-on-primary mt-lg mb-sm font-semibold">Other problems we deal with:</p>
          <ul className="flex flex-wrap gap-2">
            {OTHER.map((o) => <li key={o} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[13px] text-on-primary-muted">{o}</li>)}
          </ul>
          <p className="text-[14px] text-on-primary mt-lg mb-sm font-semibold">iPad repairs we specialise in:</p>
          <ul className="flex flex-wrap gap-2">
            {SERVICE_PAGES.map(([label, href]) => (
              <li key={href}><Link to={href} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[13px] text-accent-bright hover:bg-white/[0.08] transition-colors">{label}</Link></li>
            ))}
          </ul>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Our iPad Repair Process</h2>
        <ol className="space-y-md max-w-[80ch]">
          {PROCESS.map((step, i) => (
            <li key={i} className="flex gap-md">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-bright/15 text-accent-bright font-bold flex items-center justify-center">{i + 1}</span>
              <p className="text-[15px] text-on-primary-muted leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Signs */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Signs Your iPad Needs Service</h2>
          <ul className="grid gap-sm sm:grid-cols-2 max-w-[95ch]">
            {SIGNS.map((s) => <li key={s} className="flex gap-sm text-[15px] text-on-primary-muted"><CheckCircle2 size={18} className="text-accent-bright flex-shrink-0 mt-1" aria-hidden /> {s}</li>)}
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Maintenance Tips for iPad Users</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {TIPS.map((t) => <li key={t} className="flex gap-sm text-[15px] text-on-primary-muted"><CheckCircle2 size={18} className="text-accent-bright flex-shrink-0 mt-1" aria-hidden /> {t}</li>)}
        </ul>
      </section>

      {/* Why choose */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Why Choose Us for iPad Repair in Dubai?</h2>
          <ul className="grid gap-sm sm:grid-cols-2 max-w-[80ch]">
            {WHY.map((w) => <li key={w} className="flex gap-sm text-[15px] text-on-primary-muted"><CheckCircle2 size={18} className="text-accent-bright flex-shrink-0 mt-1" aria-hidden /> {w}</li>)}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
        <div className="grid gap-md md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <div className="flex gap-1 mb-sm" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
              </div>
              <blockquote className="text-[15px] text-on-primary-muted leading-relaxed">{t.body}</blockquote>
              <figcaption className="mt-sm font-semibold text-on-primary">- {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
        <div className="mt-lg border border-white/10 bg-white/[0.04] rounded-md p-lg max-w-[60ch]">
          <h3 className="text-[18px] font-bold mb-sm">Business Hours</h3>
          <p className="text-[15px] text-on-primary-muted">Monday - Saturday: 9:00 AM - 10:00 PM</p>
          <p className="text-[15px] text-on-primary-muted">Sunday: our technicians are resting, but onsite service is available.</p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-white/10 bg-white/[0.04] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-on-primary text-[28px] md:text-[32px] max-w-[30ch]">Book your iPad repair today</h2>
          <p className="relative text-on-primary-muted text-[16px] max-w-[70ch]">
            From broken glass replacement to screen repair, our Dubai service center handles all levels of Apple repair quickly - and always with respect for your time and budget. Contact us for cost-effective service.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/ipad-repair-dubai" />
    </PageShell>
  );
}
