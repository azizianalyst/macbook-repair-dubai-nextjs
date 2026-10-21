"use client";
/**
 * MacBook Pro Repair Dubai — rebuilt 2026-09-26 onto the Azizi page standard
 * (SEO master plan, Phase 2.3 item 8).
 *
 * Keywords given their own H2s: "macbook pro repair dubai" (#2 via the homepage today),
 * "apple macbook pro screen repair", "macbook pro battery replacement dubai",
 * "apple macbook pro service center near me" (comparison headline), "macbook pro
 * keeps restarting / won't turn on" ("macbook pro frozen" is owned by /macbook-freezing-repair-dubai/), the older-model terms (2012, 2015, A1278, A1398) and
 * "macbook pro price in dubai" via Apple's own attributed list prices. Screen and battery
 * sections are short and hand off to /macbook-pro-screen-repair-dubai/ and
 * /macbook-pro-battery-replacement-dubai/, the plan 2.1 targets for those clusters.
 *
 * Removed as untrue or unsourced: "current M5 OLED" (no MacBook ships OLED — the 14/16-inch
 * use mini-LED), the "30-minute appointment repair … or the repair is free" guarantee and
 * its stat tile (open owner claim in TRUST-CLAIMS.md), "we train monthly on each release",
 * "100% genuine … or certified OEM", the 6-month paid logic-board warranty extension (not
 * a site.ts tier), and unverified M4/M5 A-numbers. useSeo() dropped — meta comes from
 * metaForPath() in page.tsx, schema from <PageSchema/>.
 *
 * Facts on the current line, Apple's UAE prices and the iFixit 4/10 score come from
 * docs/apple-lineup-2026-09-26.md only. Warranty tiers from site.ts WARRANTY.
 */
import {
  Keyboard, Droplets, PlugZap, MousePointer2, Fingerprint, Fan,
  Search, ShieldCheck, Clock, MapPin,
} from "lucide-react";

import { AziziMoneyPage, InLink, WaLink, waHref } from "@/components/azizi/AziziMoneyPage";
import { PRESETS } from "@/data/form-presets";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { NAP, TEAM } from "@/content/site";

const PATH = "/macbook-pro-repair-dubai";
const WA_MSG = "Hi, I need a MacBook Pro repair quote. Model/year: ... Fault: ...";
const REVIEWER = TEAM.find((t) => t.name === "Shafiq");

/* Every MacBook Pro generation, newest first: chip hubs then dated model pages. */
const MODEL_LINKS = [
  { label: "MacBook Pro M5 — all models", to: "/macbook-pro-m5-repair-dubai" },
  { label: "MacBook Pro M4 — all models", to: "/macbook-pro-m4-repair-dubai" },
  { label: 'MacBook Pro 16" M4 (2024)', to: "/macbook-pro-16-m4-2024-repair-dubai" },
  { label: 'MacBook Pro 14" M4 (2024)', to: "/macbook-pro-14-m4-2024-repair-dubai" },
  { label: "MacBook Pro M3 — all models", to: "/macbook-pro-m3-repair-dubai" },
  { label: 'MacBook Pro 16" M3 (2023, A2991)', to: "/macbook-pro-16-m3-2023-repair-dubai" },
  { label: 'MacBook Pro 14" M3 (2023, A2918/A2992)', to: "/macbook-pro-14-m3-2023-repair-dubai" },
  { label: "MacBook Pro M2 — all models", to: "/macbook-pro-m2-repair-dubai" },
  { label: 'MacBook Pro 16" M2 Pro/Max (2023, A2780)', to: "/macbook-pro-16-m2-pro-2023-repair-dubai" },
  { label: 'MacBook Pro 14" M2 Pro/Max (2023, A2779)', to: "/macbook-pro-14-m2-pro-2023-repair-dubai" },
  { label: 'MacBook Pro 13" M2 (2022, A2338)', to: "/macbook-pro-13-m2-2022-repair-dubai" },
  { label: "MacBook Pro M1 — all models", to: "/macbook-pro-m1-repair-dubai" },
  { label: 'MacBook Pro 16" M1 Pro/Max (2021, A2485)', to: "/macbook-pro-16-m1-pro-2021-repair-dubai" },
  { label: 'MacBook Pro 14" M1 Pro/Max (2021, A2442)', to: "/macbook-pro-14-m1-pro-2021-repair-dubai" },
  { label: 'MacBook Pro 13" M1 (2020, A2338)', to: "/macbook-pro-13-m1-2020-repair-dubai" },
  { label: "MacBook Pro Intel (2016–2020)", to: "/macbook-pro-intel-repair-dubai" },
  { label: 'MacBook Pro 13" Intel (2020, A2251/A2289)', to: "/macbook-pro-13-intel-2020-repair-dubai" },
  { label: 'MacBook Pro 13" Intel (2019, A2159)', to: "/macbook-pro-13-intel-2019-repair-dubai" },
] as const;

const PRO_SERVICES = [
  { label: "MacBook Pro screen repair", to: "/macbook-pro-screen-repair-dubai" },
  { label: "MacBook Pro battery replacement", to: "/macbook-pro-battery-replacement-dubai" },
  { label: "MacBook Pro M5 screen repair", to: "/macbook-pro-m5-screen-repair-dubai" },
  { label: "MacBook Pro M5 battery replacement", to: "/macbook-pro-m5-battery-replacement-dubai" },
  { label: "MacBook flexgate repair", to: "/macbook-flexgate-repair-dubai" },
  { label: "MacBook keyboard repair", to: "/macbook-keyboard-repair-dubai" },
  { label: "MacBook Touch Bar repair", to: "/macbook-touch-bar-repair-dubai" },
  { label: "MacBook charging port repair", to: "/macbook-charging-port-repair-dubai" },
  { label: "MacBook trackpad repair", to: "/macbook-trackpad-repair-dubai" },
  { label: "MacBook hinge repair", to: "/macbook-hinge-repair-dubai" },
  { label: "MacBook water damage repair", to: "/macbook-water-damage-repair-dubai" },
  { label: "MacBook logic board repair", to: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook overheating fix", to: "/macbook-overheating-fix-dubai" },
  { label: "MacBook freezing repair", to: "/macbook-freezing-repair-dubai" },
  { label: "MacBook SSD upgrade", to: "/macbook-ssd-upgrade-dubai" },
  { label: "Mac not turning on", to: "/mac-not-turning-on-dubai" },
  { label: "Mac data recovery", to: "/mac-data-recovery-dubai" },
] as const;

const RELATED_HUBS = [
  { label: "MacBook Repair Dubai", to: "/macbook-repair-dubai" },
  { label: "MacBook Air Repair Dubai", to: "/macbook-air-repair-dubai" },
  { label: "Mac Repair Dubai", to: "/mac-repair-dubai" },
  { label: "iMac Repair Dubai", to: "/imac-repair-dubai" },
  { label: "Apple Repair Dubai", to: "/apple-repair-dubai" },
  { label: "MacBook Repair Abu Dhabi", to: "/macbook-repair-abu-dhabi" },
  { label: "MacBook Repair Sharjah", to: "/macbook-repair-sharjah" },
  { label: "MacBook Air vs MacBook Pro (2026)", to: "/blog/macbook-air-vs-macbook-pro-2026" },
] as const;

const FAQS = [
  {
    q: "How much does MacBook Pro repair cost in Dubai?",
    a: "It depends on the model and the fault; a screen on a 16-inch M5 Max is a very different job from a battery on a 2019 13-inch. We quote after a free diagnosis — send the model and symptom on WhatsApp — and nothing starts until you approve. No fix, no charge.",
  },
  {
    q: "Do you offer same-day MacBook Pro repair?",
    a: "Screen, battery, keyboard, charging-port and trackpad jobs are usually done the same day, often within 2–3 hours, when the part is in stock. Logic board and liquid-damage repairs usually take 24–48 hours. We confirm the timeline at diagnosis.",
  },
  {
    q: "Do you use genuine Apple parts?",
    a: "Genuine where supply allows and quality-tested otherwise. We tell you which one you are getting before it is fitted, so the choice is yours.",
  },
  {
    q: "What warranty do you give on MacBook Pro repairs?",
    a: "It depends on the repair: 90 days on screens, 3 months on batteries with an 80% capacity guarantee, up to 2 years on other hardware such as ports, trackpads and hinges, and 15 days on keyboard, logic-board, liquid-damage and software work.",
  },
  {
    q: "Can you recover data from a broken MacBook Pro?",
    a: "Often. If the fault is power or display, the data is usually untouched. On T2 and Apple silicon models the SSD is soldered and encrypted to the logic board, so recovery means repairing that board rather than moving the drive. Our Mac data recovery page explains the limits.",
  },
  {
    q: "My MacBook Pro won't turn on. What should I check first?",
    a: "Try a different power adapter and cable, and leave it charging for 15 minutes. Then hold the power button for 10 seconds and press it again. If the fans or keyboard light come on but the screen stays black, connect an external display. Tell us what you saw on WhatsApp; it narrows the fault before the free diagnosis.",
  },
  {
    q: "Is it worth repairing an older Intel MacBook Pro?",
    a: "Often, when the fault is a battery, screen or port and the MacBook still runs the macOS version you need. A board fault on a model that no longer gets macOS updates is a closer call. After the free diagnosis we give you the total so you can compare it with replacing the MacBook.",
  },
  {
    q: "Do you repair the latest MacBook Pro M5, M5 Pro and M5 Max?",
    a: "Yes. If it is still inside Apple's one-year warranty or AppleCare+, go to Apple first and we will tell you so. For accidental damage or out-of-warranty faults we confirm part availability on WhatsApp before you bring it in.",
  },
  {
    q: "Do you repair MacBook Pros from Abu Dhabi or Sharjah?",
    a: "Yes, at our Dubai workshop - we have no branch outside Dubai. Customers from Sharjah and Abu Dhabi WhatsApp photos and the serial number first for a quote, then either walk in to Concord Tower, Dubai Media City, or book a courier themselves to send the MacBook to the workshop and WhatsApp us the tracking link. When it's fixed, we book a courier to send it back, arranged on WhatsApp.",
  },
];

export default function MacBookProRepair() {
  const reviews = pickReviews([], { devices: reviewDevicesForPath(PATH), min: 3, seed: PATH });

  return (
    <AziziMoneyPage
      path={PATH}
      preset={PRESETS.repair}
      leadFormDeviceType="MacBook"

      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
        { name: "MacBook Pro Repair Dubai", path: PATH },
      ]}

      hero={{
        eyebrow: "MacBook Pro specialist · 13-, 14- and 16-inch · Intel to M5 Max",
        title: "MacBook Pro Repair Dubai",
        subtitle:
          "Screen, battery, keyboard, charging and logic-board repair on every MacBook Pro, from the Intel Touch Bar models to the current 14-inch M5 and 14- and 16-inch M5 Pro and M5 Max. Free diagnosis at Concord Tower, Dubai Media City.",
        timeline: "Same day when the part is in stock",
        image: "/images/real/lab/macbook-pro-internal-layout-dubai.jpg",
        imageAlt:
          "MacBook Pro internal layout, logic board, dual fans and battery open on the workshop bench at MacBook Repair Dubai",
        ctaLabel: "WhatsApp for a free diagnosis",
      }}

      authorByline={{
        author: REVIEWER ? REVIEWER.name : "MacBook Repair Dubai workshop team",
        role: REVIEWER ? `Lead technician, ${REVIEWER.years} years` : "Concord Tower, Dubai Media City",
        updated: "October 2026",
      }}

      quickAnswer={{
        question: "Where can I get a MacBook Pro repaired in Dubai?",
        answer:
          "MacBook Repair Dubai repairs every MacBook Pro — 13-, 14- and 16-inch, Intel through M5 Max — at its workshop in Concord Tower, Dubai Media City. Diagnosis is free, logic boards are repaired at component level rather than swapped, and you approve a written quote on WhatsApp before any work starts.",
      }}

      keyTakeaways={{
        updated: "October 2026",
        lead:
          "MacBook Repair Dubai is an independent workshop that repairs every MacBook Pro generation at Concord Tower, Dubai Media City.",
        items: [
          "The current MacBook Pro is the 14-inch M5 and the 14- and 16-inch M5 Pro and M5 Max.",
          "No MacBook Pro has an OLED screen: the 14- and 16-inch use mini-LED, older models LCD.",
          "iFixit scores the 14-inch M5 MacBook Pro 4/10, largely because the battery sits under almost everything else.",
          "Screens and batteries are usually same-day when the part is in stock.",
          "Logic boards are repaired at component level, not swapped whole.",
          "Diagnosis is free, and there is no charge if the fault cannot be fixed.",
        ],
      }}

      whatIs={{
        heading: "What fails on each MacBook Pro generation?",
        entityName: "MacBook Pro repair",
        definition: (
          <>
            <p>
              Intel MacBook Pros from 2016 to 2020 have two well-known weak points: the butterfly keyboard used
              on most models until 2019, which fails from dust, and on the 2016–2017 models the display flex
              cable that wears through as the lid opens and closes (&ldquo;flexgate&rdquo;).
            </p>
            <p>
              The 14- and 16-inch Apple silicon models are better built but harder to repair. The mini-LED
              display is an expensive assembly, the battery sits deep in the chassis, and the SSD is soldered to
              the logic board, so a liquid spill becomes a board-level repair with your data on the line.
            </p>
          </>
        ),
        benefits: [
          { icon: Search, title: "Free diagnosis", body: "The actual fault is found before any quote." },
          { icon: Clock, title: "Same day on most jobs", body: "Screens and batteries when the part is in stock." },
          { icon: ShieldCheck, title: "Written warranty", body: "15 days to 2 years, depending on the repair." },
          { icon: MapPin, title: "Walk in", body: "Concord Tower, Dubai Media City. Parking on site." },
        ],
      }}

      sections={[
        {
          id: "pro-screen",
          heading: "Can you replace a MacBook Pro screen?",
          body: (
            <>
              <p>
                The 14- and 16-inch MacBook Pros since 2021 use a mini-LED Liquid Retina XDR display; the 13-inch
                and Intel models use an LCD Retina panel. None is OLED. A cracked 14- or 16-inch panel usually
                means a full display assembly.
              </p>
              <p>
                On 2016–2017 models, a backlight that dies past a certain lid angle is usually the flex cable, which
                can be replaced without a new screen — see{" "}
                <InLink to="/macbook-flexgate-repair-dubai">flexgate repair</InLink>. Screens carry a 90-day
                warranty. Full details on{" "}
                <InLink to="/macbook-pro-screen-repair-dubai">MacBook Pro screen repair</InLink> and{" "}
                <InLink to="/macbook-pro-m5-screen-repair-dubai">M5 screen repair</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "pro-battery",
          heading: "When does a MacBook Pro battery need replacing?",
          body: (
            <>
              <p>
                Replace it when System Settings &gt; Battery says &ldquo;Service Recommended&rdquo;, when the Mac
                shuts down at a healthy-looking percentage, or at once if the case or trackpad is lifting. On the
                14-inch M5, iFixit found that reaching the battery means removing nearly every other component.
              </p>
              <p>
                For comparison, Apple lists battery service at AED 879 for the 14-inch M5, M5 Pro and M5 Max, and AED 959 for the 16-inch, excluding VAT.
                Our battery replacements carry 3 months&rsquo; warranty with an 80% capacity guarantee. See{" "}
                <InLink to="/macbook-pro-battery-replacement-dubai">MacBook Pro battery replacement</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "pro-power",
          heading: "Why won't my MacBook Pro turn on, or why does it keep restarting?",
          body: (
            <p>
              A frozen screen or restart loop is often software, so we rule out macOS first. Repeated kernel
              panics, shutdowns at a healthy battery level or no power at all point to hardware: a failing SSD,
              a power-rail fault or corrosion from an old spill. We trace it on the board and quote the actual
              fault. See <InLink to="/mac-not-turning-on-dubai">Mac not turning on</InLink>,{" "}
              <InLink to="/macbook-freezing-repair-dubai">MacBook Pro frozen</InLink> and{" "}
              <InLink to="/macbook-logic-board-repair-dubai">MacBook logic board repair</InLink>.
            </p>
          ),
        },
        {
          id: "pro-m5",
          heading: "Can you repair the MacBook Pro M5, M5 Pro and M5 Max?",
          body: (
            <>
              <p>
                The 14-inch M5 arrived in October 2025; the 14- and 16-inch M5 Pro and M5 Max followed in March 2026.
                Apple lists the 14-inch M5 from AED 7,199, the 14-inch M5 Pro from AED 9,299 and the 16-inch M5 Pro from AED 11,499.
                That is the figure any repair should be weighed against.
              </p>
              <p>
                Most are still inside Apple&rsquo;s warranty, so use Apple for defects; we handle accidental
                damage and out-of-warranty faults, and{" "}
                <WaLink message="Hi, is the part in stock for my MacBook Pro M5? Model: ...">confirm part availability on WhatsApp</WaLink>{" "}
                first. See <InLink to="/macbook-pro-m5-repair-dubai">MacBook Pro M5 repair</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "pro-older",
          heading: "Do you still repair 2012–2015 and Intel Touch Bar MacBook Pros?",
          body: (
            <p>
              Pre-2016 machines — the A1278, A1398 and A1502 — are often still worth a battery or storage
              upgrade: the 2012–2015 Retina models take a removable SSD blade and the A1278 a standard 2.5-inch
              drive. A board fault on a 2012 machine can cost more than it is worth, and we will say so. Send the
              model number on WhatsApp and we confirm the part first. Touch Bar models are covered on{" "}
              <InLink to="/macbook-pro-intel-repair-dubai">MacBook Pro Intel repair</InLink>.
            </p>
          ),
        },
      ]}

      features={{
        heading: "What other MacBook Pro repairs do you do?",
        subheading: "All at component level in our Media City workshop.",
        features: [
          { icon: Keyboard, name: "Keyboard", description: "Butterfly and Magic Keyboard repairs, single keys where possible." },
          { icon: Droplets, name: "Liquid damage", description: "Ultrasonic clean and component rework. Power off first." },
          { icon: PlugZap, name: "Charging port and MagSafe", description: "Charger, port and charging circuit tested in that order." },
          { icon: MousePointer2, name: "Trackpad", description: "Force Touch trackpads that stop clicking or tracking." },
          { icon: Fingerprint, name: "Touch Bar and Touch ID", description: "Dead or flickering Touch Bars on 2016–2020 Intel models and the 13-inch M1 and M2." },
          { icon: Fan, name: "Overheating and fans", description: "Fans cleaned or replaced, thermal paste renewed." },
        ],
      }}

      comparison={{
        eyebrow: "Independent vs Apple",
        headline: "Looking for an Apple MacBook Pro service center? How we differ",
        description:
          "We are an independent workshop, not an Apple service center or Authorised Service Provider. The trade-offs run both ways.",
        leftLabel: "MacBook Repair Dubai",
        rightLabel: "Apple Store / AASP",
        rows: [
          { feature: "Diagnosis", left: "Free, walk in", right: "Appointment required" },
          { feature: "Logic board faults", left: "Component-level repair", right: "Whole-board replacement" },
          { feature: "Older Intel models", left: "Repaired while parts exist", right: "Refused once classed obsolete" },
          { feature: "If it cannot be fixed", left: "No charge", right: "Diagnostic fee may apply" },
          { feature: "Inside Apple warranty", left: "We send you to Apple", right: "The right choice" },
        ],
      }}

      showLocation
      showTeam
      showStats

      relatedServices={{ heading: "MacBook Pro services and related repairs", links: PRO_SERVICES }}

      relatedPosts
      relatedPostsTopics={["m5", "intel"]}

      faqs={{
        heading: "MacBook Pro repair Dubai: common questions",
        intro: "Straight answers to what we are asked most.",
        items: FAQS,
      }}

      sources={{
        heading: "Sources and Apple documentation",
        links: [
          { label: "Apple — check your coverage", href: "https://checkcoverage.apple.com/", note: "Check warranty or AppleCare+ status first." },
          { label: "Apple UAE — Mac laptop repair and battery service", href: "https://support.apple.com/en-ae/mac-laptops/repair?services=service", note: "Apple's UAE battery-service prices." },
          { label: "Apple UAE Newsroom — MacBook Pro with M5 Pro and M5 Max", href: "https://www.apple.com/ae/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/", note: "The current line and UAE pricing." },
          { label: "9to5Mac — iFixit tears down the M5 MacBook Pro", href: "https://9to5mac.com/2025/10/24/ifixit-tears-down-the-m5-macbook-pro-and-finds-small-but-welcome-repairability-improvements/", note: "The 4/10 repairability score." },
        ],
      }}

      relatedHubs={{ heading: "Other Apple repair hubs", links: RELATED_HUBS }}

      hubLinks={{
        eyebrow: "Every model covered",
        heading: "MacBook Pro models we repair",
        links: MODEL_LINKS,
      }}

      reviews={reviews}
      reviewsHeading="What MacBook Pro customers say"

      finalCta={{
        eyebrow: "Ready when you are",
        headline: "Free diagnosis, no charge if we cannot fix it",
        description: "Send the model and what it is doing, and we will tell you what is involved before you commit.",
        primary: { label: "Message us on WhatsApp", href: waHref(WA_MSG) },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: `tel:${NAP.phoneE164}` },
      }}
    />
  );
}
