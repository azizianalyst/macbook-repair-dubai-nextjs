"use client";
/**
 * MacBook Air Repair Dubai — rebuilt 2026-09-26 (SEO master plan, Phase 2.3 item 5).
 *
 * GSC: position 57 with impressions and ~0 clicks; the homepage outranks it for its own
 * terms. This version gives the page its own H2s for the Semrush UAE keywords the hub
 * should own or feed: "macbook air repair" (+ dubai / near me / cost), "macbook air
 * screen replacement", "macbook air battery replacement", "macbook air charging port",
 * "apple laptop repair", "macbook air ram upgrade / ssd", and the current M5 line
 * ("latest / new macbook air", "macbook air price in dubai" via Apple's own list price).
 *
 * The screen and battery sections are deliberately short and hand off to the dedicated
 * pages (plan 2.1: /macbook-air-screen-replacement-dubai/ is the screen target) so the hub
 * feeds its spokes instead of competing with them.
 *
 * Facts: M5 lineup, Apple UAE list and battery-service prices and the M5 teardown notes
 * come from docs/apple-lineup-2026-09-26.md only. Warranty tiers from site.ts WARRANTY.
 * No price of ours anywhere; Apple's figures are attributed on the same line so the
 * price gate recognises them. Reviews are filtered from the real review set at render
 * time. The byline names Shafiq, the roster's lead for screens, batteries and water damage.
 */
import {
  Keyboard, Droplets, Cpu, Thermometer, MousePointer2, Wifi,
  Search, ShieldCheck, Clock, MapPin,
} from "lucide-react";

import { AziziMoneyPage, InLink, WaLink, waHref } from "@/components/azizi/AziziMoneyPage";
import { PRESETS } from "@/data/form-presets";
import { REVIEWS } from "@/content/reviews";
import { REVIEW_AVERAGE, REVIEW_COUNT } from "@/content/business.generated";
import { NAP } from "@/content/site";

const PATH = "/macbook-air-repair-dubai";
const WA_MSG = "Hi, I need a MacBook Air repair quote. Model: ... Fault: ...";

/* Real MacBook Air reviews, filtered from the live set rather than pasted in. */
const airReviews = REVIEWS
  .filter(
    (r) =>
      /macbook air/i.test(r.text ?? "") &&
      /(screen|battery|display|spill|slow)/i.test(r.text ?? "") &&
      (r.text?.length ?? 0) > 110,
  )
  .slice(0, 3)
  .map((r) => ({ name: r.name, date: r.date, rating: r.rating, text: r.text }));

/* Every Air generation we service, newest first. The model pages have no other hub. */
const MODEL_LINKS = [
  { label: 'MacBook Air 15" M5 (2026)', to: "/macbook-air-15-m5-2026-repair-dubai" },
  { label: 'MacBook Air 13" M5 (2026)', to: "/macbook-air-13-m5-2026-repair-dubai" },
  { label: 'MacBook Air 15" M4 (2025)', to: "/macbook-air-15-m4-2025-repair-dubai" },
  { label: 'MacBook Air 13" M4 (2025)', to: "/macbook-air-13-m4-2025-repair-dubai" },
  { label: 'MacBook Air 15" M3 (2024)', to: "/macbook-air-15-m3-2024-repair-dubai" },
  { label: 'MacBook Air 13" M3 (2024)', to: "/macbook-air-13-m3-2024-repair-dubai" },
  { label: 'MacBook Air 15" M2 (2023, A2941)', to: "/macbook-air-15-m2-2023-repair-dubai" },
  { label: 'MacBook Air 13" M2 (2022, A2681)', to: "/macbook-air-13-m2-2022-repair-dubai" },
  { label: 'MacBook Air 13" M1 (2020, A2337)', to: "/macbook-air-13-m1-2020-repair-dubai" },
  { label: 'MacBook Air 13" Intel (2020, A2179)', to: "/macbook-air-13-intel-2020-repair-dubai" },
  { label: 'MacBook Air 13" Intel (2019, A1932)', to: "/macbook-air-13-intel-2019-repair-dubai" },
  { label: 'MacBook Air 13" Intel (2018, A1932)', to: "/macbook-air-13-intel-2018-repair-dubai" },
  { label: "MacBook Air M5 — all sizes", to: "/macbook-air-m5-repair-dubai" },
  { label: "MacBook Air M4 — all sizes", to: "/macbook-air-m4-repair-dubai" },
  { label: "MacBook Air M3 — all sizes", to: "/macbook-air-m3-repair-dubai" },
  { label: "MacBook Air M2 — all sizes", to: "/macbook-air-m2-repair-dubai" },
  { label: "MacBook Air M1", to: "/macbook-air-m1-repair-dubai" },
  { label: "MacBook Air Intel", to: "/macbook-air-intel-repair-dubai" },
] as const;

const AIR_SERVICES = [
  { label: "MacBook Air screen replacement", to: "/macbook-air-screen-replacement-dubai" },
  { label: "MacBook Air battery replacement", to: "/macbook-air-battery-replacement-dubai" },
  { label: "MacBook Air keyboard repair", to: "/macbook-air-keyboard-repair-dubai" },
  { label: "MacBook Air charging port repair", to: "/macbook-air-charging-port-repair-dubai" },
  { label: "MacBook Air M5 screen repair", to: "/macbook-air-m5-screen-repair-dubai" },
  { label: "MacBook Air M5 battery replacement", to: "/macbook-air-m5-battery-replacement-dubai" },
  { label: "MacBook Neo repair", to: "/macbook-neo-repair-dubai" },
  { label: "MacBook water damage repair", to: "/macbook-water-damage-repair-dubai" },
  { label: "MacBook logic board repair", to: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook trackpad repair", to: "/macbook-trackpad-repair-dubai" },
  { label: "MacBook Wi-Fi and Bluetooth repair", to: "/macbook-wifi-bluetooth-repair-dubai" },
  { label: "MacBook overheating fix", to: "/macbook-overheating-fix-dubai" },
  { label: "MacBook SSD upgrade", to: "/macbook-ssd-upgrade-dubai" },
  { label: "Mac data recovery", to: "/mac-data-recovery-dubai" },
  { label: "Mac not turning on", to: "/mac-not-turning-on-dubai" },
] as const;

const RELATED_HUBS = [
  { label: "MacBook Repair Dubai", to: "/macbook-repair-dubai" },
  { label: "MacBook Pro Repair Dubai", to: "/macbook-pro-repair-dubai" },
  { label: "Mac Repair Dubai", to: "/mac-repair-dubai" },
  { label: "iMac Repair Dubai", to: "/imac-repair-dubai" },
  { label: "Apple Repair Dubai", to: "/apple-repair-dubai" },
  { label: "MacBook Repair Abu Dhabi", to: "/macbook-repair-abu-dhabi" },
  { label: "MacBook Repair Sharjah", to: "/macbook-repair-sharjah" },
  { label: "Onsite MacBook repair", to: "/onsite-macbook-repair-dubai" },
] as const;

const FAQS = [
  {
    q: "How much does MacBook Air repair cost in Dubai?",
    a: "We quote after a free diagnosis, because the same symptom can be a cable, a panel or a board fault. Send your model and the symptom on WhatsApp and we will tell you what is involved. If we cannot fix it, you pay nothing.",
  },
  {
    q: "How long does a MacBook Air repair take?",
    a: "Screen and battery replacements usually take 45–90 minutes when the part is in stock. Keyboard and top-case work takes 2–3 hours because the whole assembly comes out. Component-level logic board work is typically 24–48 hours. You get an estimated completion time with the quote.",
  },
  {
    q: "Which MacBook Air models do you repair?",
    a: "Intel 2017–2020 (A1466, A1932, A2179), M1 (A2337), M2 13- and 15-inch (A2681, A2941), M3, M4 and the current M5 13- and 15-inch. Older Airs are still worth bringing in for screens and batteries while parts exist.",
  },
  {
    q: "Is there MacBook Air repair near me if I'm not in Media City?",
    a: "Walk in to Concord Tower, Dubai Media City, without an appointment - it is a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. WhatsApp photos and the serial number first for a quote. If you can't come in, book any same-day courier app, hand the MacBook to the driver and WhatsApp us the tracking link. A paid onsite visit is also possible, subject to technician availability and quoted on WhatsApp. We have no branch outside Dubai.",
  },
  {
    q: "Will repairing my MacBook Air void the Apple warranty?",
    a: "If it is inside Apple's one-year warranty or AppleCare+, go to Apple first and we will tell you so. Out of warranty there is nothing to void. Our written warranty: 90 days on screens, 3 months on batteries with an 80% capacity guarantee, up to 12 months on other hardware, 15 days on keyboard, board and liquid work.",
  },
  {
    q: "My MacBook Air won't charge. Is it the port?",
    a: "Not always. Try another cable and adapter, and on models with MagSafe try both MagSafe and USB-C. If neither charges, the port, the charging circuit or the battery is the cause, and the free diagnosis tells you which before you pay anything.",
  },
  {
    q: "Can a MacBook Air be saved after a liquid spill?",
    a: "Often, if it reaches the bench quickly. Switch it off, do not charge it or test it, and bring it in the same day. The board is cleaned and inspected; we tell you what can be saved before any repair is quoted.",
  },
  {
    q: "Is it worth repairing an older Intel MacBook Air?",
    a: "For a battery, screen or keyboard on an Air that still runs the macOS version you need, usually yes. A board fault on an Air that no longer gets macOS updates is a closer call. We give you the total after the free diagnosis so you can compare it with replacing it.",
  },
  {
    q: "Will I lose my data during a MacBook Air repair?",
    a: "Not for a screen, battery, port, keyboard or trackpad job. On M-series Airs the SSD is soldered to the logic board, so board work is the one case where data is at risk; we tell you before starting. Back up first if you can.",
  },
];

export default function MacBookAirRepair() {
  return (
    <AziziMoneyPage
      path={PATH}
      preset={PRESETS.repair}
      /* DEVICE_TYPES has no "MacBook Air" member; the model goes in the message. */
      leadFormDeviceType="MacBook"

      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
        { name: "MacBook Air Repair Dubai", path: PATH },
      ]}

      hero={{
        eyebrow: "MacBook Air specialist · Intel through M5 · Dubai Media City",
        title: "MacBook Air Repair Dubai",
        subtitle:
          "Screens, batteries, charging ports, keyboards and board faults on every MacBook Air, from the Intel models to the 2026 M5. Free diagnosis at Concord Tower, Dubai Media City. Walk in, no appointment needed.",
        timeline: "Same day when the part is in stock",
        image: "/images/real/lab/macbook-air-lid-dubai.jpg",
        imageAlt:
          "MacBook Air open on the workshop bench at MacBook Repair Dubai, Dubai Media City",
        ctaLabel: "WhatsApp for a free diagnosis",
      }}

      authorByline={{
        author: "Shafiq",
        role: "Lead technician — screens, batteries and water damage",
        updated: "October 2026",
      }}

      quickAnswer={{
        question: "Where can I get a MacBook Air repaired in Dubai?",
        answer:
          "MacBook Repair Dubai repairs every MacBook Air, Intel through the 2026 M5, at its own workshop in Concord Tower, Dubai Media City. Screen, battery, charging-port, keyboard and logic-board faults are diagnosed free and quoted in writing on WhatsApp before anything is opened, and most screen and battery jobs finish the same day when the part is in stock.",
      }}

      keyTakeaways={{
        updated: "October 2026",
        lead:
          "MacBook Repair Dubai is an independent workshop that repairs every MacBook Air generation at Concord Tower, Dubai Media City.",
        items: [
          "Most MacBook Air screen and battery replacements are finished the same day when the part is in stock.",
          "For the M5 Air and MacBook Neo, part availability is confirmed on WhatsApp first.",
          "M-series Airs are fanless: warm under load is normal, shutting down is not.",
          "A swollen battery lifting the trackpad should be powered off and not charged again.",
          "RAM is soldered on every MacBook Air, and the SSD is soldered on every Air from 2018 onwards.",
          "Diagnosis is free, and there is no charge if the fault cannot be fixed.",
        ],
      }}

      whatIs={{
        heading: "What fails on a MacBook Air, and why?",
        entityName: "MacBook Air repair",
        definition: (
          <>
            <p>
              The Air fails differently from the Pro because of the chassis. No M-series Air has a fan, so heat
              leaves through the aluminium and the stress lands on the battery and the board. Swollen cells and
              heat-related board faults are what we see most on Airs three years old or more.
            </p>
            <p>
              The rest is mechanical: the Air is the laptop people carry, so it takes the drops and the spilled
              coffee. We repair at component level where the fault allows, rather than swapping a whole board
              because one power rail is down.
            </p>
          </>
        ),
        benefits: [
          { icon: Search, title: "Free diagnosis", body: "The actual fault is found before any quote." },
          { icon: Clock, title: "Same day on most jobs", body: "Screens and batteries in 45–90 minutes when in stock." },
          { icon: ShieldCheck, title: "Written warranty", body: "Up to 12 months, depending on the repair." },
          { icon: MapPin, title: "Walk in", body: "Concord Tower, Dubai Media City. Parking on site." },
        ],
      }}

      sections={[
        {
          id: "air-screen",
          heading: "Can you replace a MacBook Air screen?",
          body: (
            <>
              <p>
                Every MacBook Air uses an LCD panel — Liquid Retina on the M2 and later, Retina on the M1 and
                2018–2020 Intel models. None is OLED. Cracks come from drops or from something left on the keyboard
                when the lid was shut; lines or flicker usually mean the panel or its cable.
              </p>
              <p>
                We replace the panel alone where the design allows, the full assembly where it does not — genuine
                where supply allows, quality-tested otherwise, and you are told which first. Screens carry a 90-day
                warranty. Details on the{" "}
                <InLink to="/macbook-air-screen-replacement-dubai">MacBook Air screen replacement</InLink> page and the{" "}
                <InLink to="/macbook-air-m5-screen-repair-dubai">M5 Air screen repair</InLink> page.
              </p>
            </>
          ),
        },
        {
          id: "air-battery",
          heading: "When does a MacBook Air battery need replacing?",
          body: (
            <>
              <p>
                Replace the battery when macOS shows &ldquo;Service Recommended&rdquo; in System Settings &gt;
                Battery, when the Air dies long before the percentage says, or at once if the trackpad is lifting.
                On the M5 Air the cells use stretch-release adhesive and screws, and the logic board comes out to
                reach them.
              </p>
              <p>
                For comparison, Apple lists battery service for the 13-inch M5 Air at AED 689 and the 15-inch at AED 759, excluding VAT.
                Our battery replacements carry 3 months&rsquo; warranty with an 80% capacity guarantee. See{" "}
                <InLink to="/macbook-air-battery-replacement-dubai">MacBook Air battery replacement</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "air-charging-port",
          heading: "Why won't my MacBook Air charge?",
          body: (
            <p>
              An Air that stops charging is not always a broken port. We test the charger, cable, port and the
              charging circuit on the board, in that order. M2 and later Airs charge through MagSafe 3 or USB-C,
              the M1 and 2018–2020 Intel Airs through USB-C only, older Airs through MagSafe 2. See{" "}
              <InLink to="/macbook-air-charging-port-repair-dubai">MacBook Air charging port repair</InLink>.
            </p>
          ),
        },
        {
          id: "air-upgrade",
          heading: "Can you upgrade MacBook Air RAM or SSD?",
          body: (
            <p>
              RAM is soldered on every MacBook Air, so no Air can take a memory upgrade. The SSD is a removable
              module only on 2017 and earlier Airs. On those, an{" "}
              <InLink to="/macbook-ssd-upgrade-dubai">SSD upgrade</InLink> is often worth it; on newer Airs an
              external SSD is the honest answer.
            </p>
          ),
        },
        {
          id: "air-m5-neo",
          heading: "Do you repair the MacBook Air M5 and the MacBook Neo?",
          body: (
            <>
              <p>
                The current MacBook Air is the M5, in 13- and 15-inch sizes, on sale since March 2026. Apple lists it from AED 4,599 (13-inch) and AED 5,499 (15-inch).
                Most are still inside Apple&rsquo;s warranty, so use Apple for defects; we handle accidental
                damage and out-of-warranty faults. See <InLink to="/macbook-air-m5-repair-dubai">MacBook Air M5 repair</InLink>.
              </p>
              <p>
                The low-cost MacBook Neo (A18 Pro) is a separate line; iFixit rates it 6/10. See{" "}
                <InLink to="/macbook-neo-repair-dubai">MacBook Neo repair</InLink>, and for any new model{" "}
                <WaLink message="Hi, is the part in stock for my MacBook? Model: ...">check part availability on WhatsApp</WaLink>{" "}
                first.
              </p>
            </>
          ),
        },
      ]}

      features={{
        heading: "What other MacBook Air repairs do you do?",
        subheading: "Apple laptop repair at component level, on every Air generation.",
        features: [
          { icon: Keyboard, name: "Keyboard and top case", description: "Butterfly keyboards on the 2018–2019 Intel Airs, scissor keyboards on the 2017 and 2020 Intel Airs and every M-series." },
          { icon: Droplets, name: "Liquid damage", description: "Ultrasonic clean and board rework. Power it off; rice does nothing." },
          { icon: Cpu, name: "Logic board repair", description: "No power or no video, fixed at component level." },
          { icon: Thermometer, name: "Overheating and shutdowns", description: "Battery health, thermal interface and board checked together." },
          { icon: MousePointer2, name: "Trackpad", description: "Unresponsive or no click. It can be a swollen battery pushing from below, so we check that first." },
          { icon: Wifi, name: "Wi-Fi and Bluetooth", description: "We rule out macOS first, then check the antenna cables that run through the display hinge." },
        ],
      }}

      comparison={{
        eyebrow: "Independent vs Apple Store",
        headline: "How is an independent workshop different from the Apple Store?",
        description:
          "We are independent, not an Apple Authorised Service Provider. The trade-offs run both ways.",
        leftLabel: "MacBook Repair Dubai",
        rightLabel: "Apple Store / AASP",
        rows: [
          { feature: "Diagnosis", left: "Free, walk in without an appointment", right: "Appointment required" },
          { feature: "Board-level faults", left: "Component-level rework", right: "Whole-board replacement" },
          { feature: "Older and vintage models", left: "Repaired while parts exist", right: "Refused once classed obsolete" },
          { feature: "If it cannot be fixed", left: "No charge", right: "Diagnostic fee may apply" },
          { feature: "Inside Apple warranty", left: "We send you to Apple", right: "The right choice" },
        ],
      }}

      showLocation
      showTeam
      showStats

      relatedServices={{
        heading: "MacBook Air services and related repairs",
        links: AIR_SERVICES,
      }}

      relatedPosts
      relatedPostsFamily="macbook-air"

      faqs={{
        heading: "MacBook Air repair Dubai: common questions",
        intro: "The questions we are asked at the counter, answered straight.",
        items: FAQS,
      }}

      sources={{
        heading: "Sources and Apple documentation",
        links: [
          { label: "Apple — check your coverage", href: "https://checkcoverage.apple.com/", note: "Check warranty or AppleCare+ status first." },
          { label: "Apple UAE — Mac laptop repair and battery service", href: "https://support.apple.com/en-ae/mac-laptops/repair?services=service", note: "Apple's UAE battery-service prices." },
          { label: "Apple — vintage and obsolete products", href: "https://support.apple.com/en-us/102772", note: "Which models Apple no longer services." },
          { label: "iFixit — MacBook Air 13\" (2026, M5)", href: "https://www.ifixit.com/Device/MacBook_Air_13%22_2026_%28M5%29", note: "M5 Air teardown notes." },
        ],
      }}

      relatedHubs={{ heading: "Other Apple repair hubs", links: RELATED_HUBS }}

      hubLinks={{
        eyebrow: "Every model covered",
        heading: "MacBook Air models we repair",
        links: MODEL_LINKS,
      }}

      reviews={airReviews}
      reviewsHeading={`MacBook Air customers · ${REVIEW_AVERAGE}.0 from ${REVIEW_COUNT}+ Google reviews`}

      finalCta={{
        eyebrow: "Ready when you are",
        headline: "Free diagnosis, no charge if we cannot fix it",
        description:
          "Send us the model and what it is doing, and we will tell you what is involved before you commit.",
        primary: { label: "Message us on WhatsApp", href: waHref(WA_MSG) },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: `tel:${NAP.phoneE164}` },
      }}
    />
  );
}
