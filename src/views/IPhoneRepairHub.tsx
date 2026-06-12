"use client";
// iPhone Repair Dubai - faithful rebuild of the live WordPress /iphone-repair-dubai page
// (user: "all old data which I give you", 2026-06-01; pulled from live site). Reproduces the old
// content INCLUDING its AED pricing table, and PRESERVES all model + service child-page links.
// ⚠️ HAND-EDITED - do NOT regenerate via build-family-hubs.mjs (it would overwrite this content).
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
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
  { label: "Mac Repair", href: "/mac-repair-dubai" },
  { label: "iPad", href: "/ipad-repair-dubai" },
  { label: "Apple Display", href: "/apple-display-repair-dubai" },
];

// All model child pages (preserved so they stay internally linked)
const MODEL_PAGES = [
  ["iPhone 17 Pro Max", "/iphone-17-pro-max-repair-dubai"], ["iPhone 17 Pro", "/iphone-17-pro-repair-dubai"], ["iPhone 17", "/iphone-17-repair-dubai"], ["iPhone 17e", "/iphone-17e-repair-dubai"], ["iPhone Air", "/iphone-air-repair-dubai"],
  ["iPhone 16 Pro Max", "/iphone-16-pro-max-repair-dubai"], ["iPhone 16 Pro", "/iphone-16-pro-repair-dubai"], ["iPhone 16 Plus", "/iphone-16-plus-repair-dubai"], ["iPhone 16", "/iphone-16-repair-dubai"], ["iPhone 16e", "/iphone-16e-repair-dubai"],
  ["iPhone 15 Pro Max", "/iphone-15-pro-max-repair-dubai"], ["iPhone 15 Pro", "/iphone-15-pro-repair-dubai"], ["iPhone 15 Plus", "/iphone-15-plus-repair-dubai"], ["iPhone 15", "/iphone-15-repair-dubai"],
  ["iPhone 14 Pro Max", "/iphone-14-pro-max-repair-dubai"], ["iPhone 14 Pro", "/iphone-14-pro-repair-dubai"], ["iPhone 14 Plus", "/iphone-14-plus-repair-dubai"], ["iPhone 14", "/iphone-14-repair-dubai"],
  ["iPhone 13 Pro Max", "/iphone-13-pro-max-repair-dubai"], ["iPhone 13 Pro", "/iphone-13-pro-repair-dubai"], ["iPhone 13", "/iphone-13-repair-dubai"], ["iPhone 13 mini", "/iphone-13-mini-repair-dubai"],
  ["iPhone SE (3rd gen)", "/iphone-se-3rd-gen-repair-dubai"],
  ["iPod touch (7th gen)", "/ipod-touch-7-repair-dubai"],
];

// All repair-type + service child pages (preserved)
const SERVICE_PAGES = [
  ["Screen Repair", "/iphone-screen-repair-dubai"], ["Back Glass", "/iphone-back-glass-repair-dubai"], ["Battery Replacement", "/iphone-battery-replacement-dubai"], ["Camera Repair", "/iphone-camera-repair-dubai"], ["Charging Port", "/iphone-charging-port-repair-dubai"], ["Lightning Port", "/iphone-lightning-port-repair-dubai"], ["USB-C Port", "/iphone-usb-c-port-repair-dubai"], ["Speaker", "/iphone-speaker-repair-dubai"], ["Earpiece", "/iphone-earpiece-repair-dubai"], ["Microphone", "/iphone-microphone-repair-dubai"], ["Headphone Jack", "/iphone-headphone-jack-repair-dubai"], ["Face ID", "/iphone-face-id-repair-dubai"], ["Home Button", "/iphone-home-button-repair-dubai"], ["Power Button", "/iphone-power-button-repair-dubai"], ["Volume Button", "/iphone-volume-button-repair-dubai"], ["Vibration Motor", "/iphone-vibration-motor-repair-dubai"], ["SIM Tray", "/iphone-sim-tray-repair-dubai"], ["NFC Repair", "/iphone-nfc-repair-dubai"], ["Wi-Fi & Bluetooth", "/iphone-wifi-bluetooth-repair-dubai"], ["Water Damage", "/iphone-water-damage-repair-dubai"], ["Data Recovery", "/iphone-data-recovery-dubai"], ["Software Fix", "/iphone-software-fix-dubai"], ["Full Diagnostic", "/iphone-full-diagnostic-dubai"], ["iCloud Unlock", "/iphone-icloud-unlock-dubai"], ["Network Unlock", "/iphone-network-unlock-dubai"],
];

// Faithful pricing table from the original page
const PRICING = [
  ["iPhone Screen Repair", "149-399"], ["iPhone Screen Replacement", "199-1599"], ["iPhone Battery Replacement", "99-399"], ["iPhone Back Glass Replacement", "149-549"], ["iPhone Camera Repair", "299-649"], ["iPhone Charging Port Repair", "149-449"], ["iPhone Speaker Repair", "99-349"], ["iPhone Microphone Repair", "149-449"], ["iPhone Water Damage Repair", "249-699"], ["iPhone Logic Board Repair", "200-849"], ["iPhone Data Recovery", "350-1499"], ["iPhone Software Troubleshooting", "99-299"], ["iPhone Button Repair", "99-249"], ["iPhone Volume Button Repair", "99-249"], ["iPhone Power Button Repair", "99-249"], ["iPhone Face ID Repair", "299-599"], ["iPhone Touch ID Repair", "299-599"],
];

const PROCESS = [
  "Expert techs carefully check your iPhone to find the exact problem(s).",
  "We give you an accurate quote listing the repairs needed, parts required, and expected cost - so you can see the whole process.",
  "After you approve the repair quote, we start the repair process.",
  "Our technicians replace any broken parts with high-quality original ones and reassemble them.",
  "Your fixed iPhone undergoes thorough quality inspection to ensure it meets our high standards.",
  "We clean and polish your iPhone so it looks brand new before giving it back.",
  "We guarantee all of our iPhone repairs for as long as you own the phone, so you can relax even after leaving our center.",
];

const SIGNS = [
  "Water damage.", "Battery draining quickly.", "Cracked or shattered screen.", "Overheating during normal usage.",
  "Unresponsive or sluggish performance.", "Physical damage (dents, cracks, bent edges).", "Sound problems (distorted, muffled, or no sound).",
  "Charging issues (failure to charge, intermittent charging).", "Camera issues (blurry or distorted images, focusing problems).", "Buttons not working (Home, power, volume).",
];

const TIPS = [
  "Regularly update your iPhone to keep it safe and working well.",
  "Protect your iPhone from drops and bumps with a case.",
  "Use a soft cloth to clean the screen, camera, and ports.",
  "Protect the screen with a display cover to prevent scratches or cracks.",
  "Free up space by removing apps, photos, and files you don't use.",
  "Use Low Power Mode, adjust brightness, and close apps to make it last longer.",
  "Don't expose your device to extreme temperatures.",
  "Use only Apple-made chargers and accessories.",
  "Back up data via iCloud or iTunes to prevent loss in accidents.",
  "Be careful of factors that could damage your iPhone, like water and dust.",
];

const WHY = [
  { title: "In-depth Knowledge", body: "Our highly trained, experienced technicians deal with all types of iPhone fixes, keeping up with the newest methods and tools." },
  { title: "Genuine Parts", body: "We only use original, high-quality parts so your device works perfectly and stays as good as before the repair." },
  { title: "Same-Day Service", body: "We understand how important your iPhone is, so we fix most issues the same day, minimising downtime." },
  { title: "Transparency", body: "Upfront pricing in our repair process - you know what to expect with no surprises or hidden costs." },
  { title: "Warranty", body: "All iPhone repairs are covered by a warranty for both parts and labour." },
  { title: "Customer Service", body: "Our friendly staff is always ready to resolve your queries and concerns." },
  { title: "Location", body: "Conveniently located in Dubai, making it easy to drop off your iPhone and pick it up when ready." },
  { title: "Reasonable Pricing", body: "Our iPhone repair services are reasonably priced without skimping on quality." },
  { title: "Wide Range of Services", body: "Beyond iPhones, we also service MacBooks, iMacs, and iPads." },
  { title: "Trusted Company", body: "We've built a strong reputation over the years for top-notch iPhone repair services." },
];

const TESTIMONIALS = [
  { name: "Nathan Brown", body: "I want to thank the repair team for their excellent service. They changed the battery and front camera on my son's iPhone 13. I highly recommend this service center and thank the team for their amazing service." },
  { name: "Sarah Omer", body: "I wasn't sure what was wrong with my iPhone, but the repair center swiftly detected the problem and quoted a reasonable fee. They didn't try to upsell me on anything needless, which I greatly appreciated. They've won my trust." },
];

const FAQS = [
  { q: "Can you fix my device on the same day?", a: "Yes, if you require an on-site technician (only for specific repairs) or IT/WiFi support, we may fix your device the same day. In severe circumstances it may take up to two days, depending on the nature of the repair." },
  { q: "What components do you use in iPhone repair?", a: "When we repair an iPhone, we use an original equipment manufacturer (OEM) screen. If the customer has a limited budget, we offer additional non-OEM options that are more affordable." },
  { q: "How much does it cost to fix an iPhone?", a: "The price of each iPhone repair varies depending on the model, the degree of damage, and the cost of new parts. Diagnosing the damage to an iPhone is free if we proceed with the repair." },
  { q: "Do you use genuine iPhone parts?", a: "Yes. We only use genuine Apple or OEM-grade replacement parts to ensure your iPhone performs like new after repair." },
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

export default function IPhoneRepairHub() {
  useSeo(
    {
      title: "iPhone Repair Dubai - Certified Apple Technicians & Genuine Parts",
      description:
        "Trusted iPhone repair in Dubai for screen, battery, water damage & logic board issues. Certified technicians. Fast service with original Apple parts.",
      path: "/iphone-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/iphone-repair-hub-dubai.jpg"
        imageAlt="iPhone repair Dubai - iPhone 17 Pro full teardown exploded-view engineering infographic"
        variant="device"
        tone="dark"
        eyebrow="iPhone specialist"
        title="Top Rated iPhone Repair Dubai"
        subtitle="Finding a competent, trustworthy store for iPhone repair in Dubai can be difficult - we have your back. With years of experience and thousands of repairs, our service center is a top choice. No more searching for 'iPhone repair near me'. Book your service now!"
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Certified technicians</span>
          <span>·</span>
          <span>Genuine / OEM parts</span>
          <span>·</span>
          <span>Same-day service</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <p className="flex flex-wrap items-center gap-2 text-[14px] text-text-muted">
          <span className="font-semibold text-text">We also repair:</span>
          {SIBLINGS.map((s) => (
            <Link key={s.href} to={s.href} className="px-3 py-1 border border-border bg-bg-card rounded-md text-accent hover:bg-bg-alt transition-colors">{s.label}</Link>
          ))}
        </p>
      </section>

      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">iPhone models we repair</h2>
        <ul className="flex flex-wrap gap-2">
          {MODEL_PAGES.map(([label, href]) => (
            <li key={href}><Link to={href} className="px-3 py-1 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{label}</Link></li>
          ))}
        </ul>
      </section>

      {/* Pricing table */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Services &amp; estimated prices</h2>
          <p className="text-[16px] text-text-muted max-w-[70ch] mb-md">Discover available services and estimated prices at the best iPhone repair shop in Dubai:</p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-alt max-w-[640px]">
            <table className="w-full text-[14px]">
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Estimated price (AED)</th></tr></thead>
              <tbody>
                {PRICING.map(([s, p], i) => (
                  <tr key={s} className={i % 2 ? "bg-bg-alt" : ""}>
                    <td className="px-md py-sm font-semibold">{s}</td>
                    <td className="px-md py-sm mono text-accent whitespace-nowrap">{p}</td>
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
        <h2 className="text-[28px] md:text-[32px] mb-md">iPhone repairs we specialise in</h2>
        <ul className="flex flex-wrap gap-2">
          {SERVICE_PAGES.map(([label, href]) => (
            <li key={href}><Link to={href} className="px-3 py-1 border border-border bg-bg-card rounded-md text-[14px] text-accent hover:bg-bg-alt transition-colors">{label}</Link></li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Our iPhone Repair Process</h2>
          <ol className="space-y-md max-w-[80ch]">
            {PROCESS.map((step, i) => (
              <li key={i} className="flex gap-md">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
                <p className="text-[15px] text-text-muted leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Signs Your iPhone Needs Repair</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {SIGNS.map((s) => <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>)}
        </ul>
      </section>

      {/* Tips */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Maintenance Tips for iPhone Users</h2>
          <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
            {TIPS.map((t) => <li key={t} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {t}</li>)}
          </ul>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Why Choose Us?</h2>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <article key={w.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm">{w.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
          <div className="grid gap-md md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
                <div className="flex gap-1 mb-sm" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
                </div>
                <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
                <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
              </figure>
            ))}
          </div>
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

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Book an appointment for iPhone repair in Dubai</h2>
          <p className="relative text-text-muted text-[16px] max-w-[70ch]">
            We do more than just fix iPhones - we bring them back to original condition. Our qualified technicians diagnose even the most complicated problems and fix them ASAP. Get quality repair service for your iPhone today.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/iphone-repair-dubai" />
    </PageShell>
  );
}
