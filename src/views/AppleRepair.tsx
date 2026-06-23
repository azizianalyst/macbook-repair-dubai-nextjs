"use client";
import {
  Laptop, Monitor, HardDrive, Smartphone, Tablet,
  Cloud, Repeat, Wifi, Users, Wrench, Star,
} from "lucide-react";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { PageShell } from "@/components/layout/PageShell";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { topicForPath } from "@/lib/page-images";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { DeviceFamilyCard, type DeviceFamily } from "@/components/blocks/DeviceFamilyCard";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { VsAppleStore } from "@/components/blocks/VsAppleStore";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { useSeo } from "@/hooks/use-seo";
import {
  itemList, localBusiness, organization, service as serviceSchema,
} from "@/lib/schema";
import { REVIEWS } from "@/content/reviews";

const FAMILIES: DeviceFamily[] = [
  { name: "MacBook",     href: "/",    startingPrice: 350, models: "Air, Pro 13-16\", Intel through M5", icon: Laptop },
  { name: "iMac",        href: "/imac-repair-dubai",       startingPrice: 300, models: "21.5\", 24\", 27\" - Retina 5K",     icon: Monitor },
  { name: "Mac mini & Studio", href: "/mac-mini-repair-dubai", startingPrice: 400, models: "Mac mini, Studio, Mac Pro",      icon: HardDrive },
  { name: "iPhone",      href: "/iphone-repair-dubai",     startingPrice: 250, models: "iPhone 8 through iPhone 16 Pro Max", icon: Smartphone },
  { name: "iPad",        href: "/ipad-repair-dubai",       startingPrice: 350, models: "mini, Air, standard, Pro 11/12.9\"", icon: Tablet },
];

const CROSS_DEVICE = [
  { icon: Cloud,  title: "iCloud sync stops mid-stream", body: "Photos that upload from the iPhone but never reach the Mac. Fix usually involves Keychain reset, iCloud token refresh, and a check on the system date drift on Apple Silicon Macs running on the wrong DST." },
  { icon: Repeat, title: "Continuity & Handoff broken",  body: "Universal Clipboard fails, Handoff refuses to pass apps between iPhone and MacBook, Sidecar disconnects every 90 seconds. Almost always a Bluetooth Low Energy advertising issue tied to one device - fix one and the rest stop fighting." },
  { icon: Wifi,   title: "AirDrop refuses everything",   body: "On a 2018+ MacBook, AirDrop failures are 9 times out of 10 a corrupted Wi-Fi profile or a stale AWDL service. The Mac, iPhone, and iPad get diagnosed together - fix on one rarely sticks without a check on the others." },
  { icon: Users,  title: "Apple ID locked across devices", body: "Two-factor codes go to a number you no longer own. The recovery flow is slow with Apple support but workable when 3 devices in the same Apple ID family are physically present at the workshop." },
];

const FAMILY_DETAILS = [
  { name: "MacBook repair", href: "/", body: "MacBook is 70% of the workshop volume. Screen, battery, keyboard, trackpad, USB-C, logic board, water damage - all covered for Intel models from 2012 onward and every Apple Silicon model M1 through M5. Average turnaround on screens and batteries: same day. Logic board work: 2 to 5 days." },
  { name: "iMac repair", href: "/imac-repair-dubai", body: "iMac 21.5\", 24\", and 27\" Retina 5K screen replacement, Fusion-to-SSD upgrades, power supply repair, and fan-cleaning service. The 27\" 5K panel is rebonded with the original adhesive frame to preserve the slim bezel - 2 to 4 days for screen, same day for SSD upgrade." },
  { name: "Mac mini, Studio & Pro repair", href: "/mac-mini-repair-dubai", body: "Mac mini logic board repair, SSD upgrades on 2014 and 2018 models, and full diagnostics on Mac Studio. Mac Pro power supply replacement and GPU module work for 2013 cylinder Pros and 2019 tower Pros. Cylinder GPU thermal failures are the single most common issue - fix runs AED 1,500." },
  { name: "iPhone repair", href: "/iphone-repair-dubai", body: "Screen replacement on iPhone 8 through iPhone 16 Pro Max in 40 minutes. Battery replacement in 30 minutes. Back glass, charging port, water damage, and Face ID dot-projector repair available. iPhone 15 and 16 panels carry True Tone calibration when fitted with genuine Apple displays." },
  { name: "iPad repair", href: "/ipad-repair-dubai", body: "iPad mini, Air, standard, and Pro screen replacement. The 12.9\" Pro panel runs AED 1,200 because the OLED stack is bonded directly to the chassis - no separate digitiser repair option. Battery service for older iPads runs AED 400 with a warranty of up to 12 months." },
];

const FAQS = [
  { q: "Do you really repair every Apple device?",
    a: "Every consumer Apple product released since 2009 except discontinued iPods (Classic and Shuffle) and the Apple-branded displays sold before 2016. The 9 active families above cover 99% of devices brought in. If unsure, send a photo to 055 741 3706 - the team replies within 4 minutes during business hours." },
  { q: "Are you an Apple Authorised Service Provider?",
    a: "No - independent specialist. AASP status restricts repairs to full-module swaps at Apple's set prices. Independent status allows component-level board work, panel-only screen swaps, and out-of-warranty repair on devices Apple no longer services. Costs run roughly 50% of Apple Store prices on like-for-like work." },
  { q: "Can you repair multiple devices in one visit?",
    a: "Yes - drop off MacBook, iPhone, and iPad together and pay one combined invoice. Multi-device drop-offs of 3+ items get a 15% labour discount. Common with corporate clients in Media City, JLT, and Internet City." },
  { q: "What's the warranty on Apple-wide repairs?",
    a: "Standard written warranty up to 12 months on every paid repair, regardless of device family. Battery work (MacBook, iPhone, iPad) carries a 3-month warranty plus an 80% capacity guarantee. Full terms on the warranty page." },
  { q: "Where exactly are you based?",
    a: "Office #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City. Across from Media City Metro. Paid parking on-site. Open Monday to Saturday, 9 am to 10 pm. Sunday: WhatsApp answered, storefront closed." },
  { q: "Do you offer free pickup for non-MacBook devices?",
    a: "Yes - same free pickup and delivery for iPhone and iPad across Dubai Mainland. Sharjah and Abu Dhabi pickup runs AED 100 each way." },
  { q: "Can you set up a new Apple device after repair?",
    a: "Yes - full migration from old to new device, including macOS Migration Assistant and iPhone Quick Start. Included free with any same-day repair, AED 150 as a standalone service." },
  { q: "What if my Apple ID is locked after a board repair?",
    a: "T2 and Apple Silicon devices tie the logic board to the original Apple ID. The team unlocks via Apple Support's account recovery flow when ID and proof of purchase are presented in person. Average resolution time: 5 to 14 days through Apple's workflow." },
  { q: "Do you handle data transfer between Apple devices?",
    a: "Yes - Mac to Mac via Migration Assistant or Time Machine, iPhone to iPhone via Quick Start, iPad to iPad via iCloud or wired transfer. Standalone AED 150. Free with any concurrent repair." },
  { q: "Why one specialist for all 9 device families?",
    a: "macOS, iOS, watchOS, and tvOS share the same kernel base, the same Bluetooth stack, the same iCloud sync layer, and the same Apple ID account system. A bug on the iPhone often manifests on the Mac. One technician who knows all 9 platforms diagnoses cross-device issues in one session - instead of three trips to three shops." },
];

const FEATURED_REVIEW_INDEXES = [1, 4, 7, 12, 18, 25];

export default function AppleRepair() {
  const reviews = FEATURED_REVIEW_INDEXES
    .map((i) => REVIEWS[i % REVIEWS.length])
    .filter(Boolean);

  useSeo(
    {
      title: "Apple Repair Dubai - All Devices Since 2004",
      description:
        "Every Apple device repair in Dubai. MacBook, iMac, iPhone, iPad. Free diagnosis at Concord Tower. 055 741 3706.",
      path: "/apple-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "Apple Device Repair Dubai",
        price: 250,
        timeline: "Same day to 5 days",
        warranty: "P1Y",
        url: "/apple-repair-dubai",
        description: "Component-level repair for MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone, and iPad in Dubai.",
      }),
      itemList({
        name: "Apple device families serviced",
        items: FAMILIES.map((f) => ({ name: f.name, url: f.href, description: f.models })),
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image={topicForPath("/apple-repair-dubai")?.src}
        imageAlt={topicForPath("/apple-repair-dubai")?.alt}
        variant="device"
        tone="dark"
        eyebrow="Apple specialist · Since 2004"
        title="Apple Repair Dubai - All Devices, One Place"
        subtitle="MacBook, iMac, Mac, iPhone, iPad. One workshop since 2004."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> 5.0 · 216+ reviews</span>
          <span>·</span>
          <span>9 Apple device families</span>
          <span>·</span>
          <span>21+ years in Media City</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[{ name: "Home", path: "/" }, { name: "Apple Repair", path: "/apple-repair-dubai" }]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <QuickAnswer
          tone="dark"
          question="Where can I get Apple devices repaired in Dubai?"
          answer="Apple Repair Dubai at Concord Tower, Dubai Media City repairs every Apple device. MacBook, iMac, Mac mini, Mac Studio, Mac Pro, iPhone, iPad, since 2004. Screen repair from AED 179, battery from AED 179, logic board from AED 800. Free diagnosis, free pickup across Dubai, warranty up to 12 months."
        />
      </section>

      {/* 9 device family cards */}
      <section aria-labelledby="families" className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 id="families" className="text-[28px] md:text-[32px] mb-md">Every Apple device repaired here</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          Pick a device family to see the full repair list, starting prices, and turnaround times. Or message {`055 741 3706`} on WhatsApp with the model - Shafiq replies within 4 minutes during business hours.
        </p>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {FAMILIES.map((f) => <DeviceFamilyCard key={f.name} {...f} tone="dark" />)}
        </div>
      </section>

      {/* Why one specialist */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm">
            <Wrench size={28} className="text-accent" aria-hidden /> Why one Apple specialist beats nine generalists
          </h2>
          <div className="grid gap-lg md:grid-cols-3">
            {[
              { title: "Deep, narrow knowledge", body: "Apple is 100% of the workshop volume. Shafiq has seen every common board fault on every Apple Silicon Mac shipped since 2020. A general repair shop splits attention across Samsung, Huawei, Lenovo, and HP - every diagnosis takes longer and the failure rate runs 3× higher on logic-board work." },
              { title: "Cross-device diagnosis",  body: "An iPhone that won't sync to a Mac is rarely an iPhone problem alone. iCloud Keychain, Bluetooth advertising, AWDL service, and Apple ID two-factor flows interact in ways that need both devices on the bench at the same time. One specialist with both devices fixes the root cause in 1 visit." },
              { title: "One warranty, one invoice", body: "Drop off MacBook, iPhone, and iPad in the same visit. One warranty of up to 12 months card lists all 3 devices and 3 serial numbers. One WhatsApp thread tracks all 3 repairs. One invoice for accounting. Multi-device discount of 15% on labour applies automatically." },
            ].map((c) => (
              <article key={c.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{c.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-device issues */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Common cross-device problems we untangle</h2>
        <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
          The 4 most-common multi-device tickets that arrive each week, and how the fix runs.
        </p>
        <div className="grid gap-md md:grid-cols-2">
          {CROSS_DEVICE.map(({ icon: Icon, title, body }) => (
            <article key={title} className="border border-border bg-bg-card rounded-md p-lg flex gap-md">
              <Icon size={32} className="text-accent shrink-0 mt-1" aria-hidden />
              <div>
                <h3 className="text-[18px] font-bold mb-sm">{title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Per-family deep-dives */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Apple repair by device family</h2>
        <div className="grid gap-lg md:grid-cols-2">
          {FAMILY_DETAILS.map((f) => (
            <article key={f.href} className="border-l-2 border-accent pl-lg">
              <h3 className="text-[20px] font-bold mb-sm">
                <a href={f.href} className="text-text hover:text-accent">{f.name}</a>
              </h3>
              <p className="text-[15px] text-text-muted leading-relaxed mb-sm">{f.body}</p>
              <a href={f.href} className="text-[14px] font-semibold text-accent hover:underline">
                See {f.name} pricing →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">What customers say across all 9 device families</h2>
          <ReviewGrid reviews={reviews} tone="dark" />
        </div>
      </section>

      {/* FAQ */}
      <VsAppleStore tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Apple repair FAQ</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to find the workshop</h2>
        <LocationBlock tone="dark" />
      </section>
      </div>
    <RelatedArticles path="/apple-repair-dubai" />
    </PageShell>
  );
}
