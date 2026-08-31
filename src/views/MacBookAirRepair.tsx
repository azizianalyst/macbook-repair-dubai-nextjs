"use client";
/**
 * MacBook Air Repair Dubai — rebuilt onto AziziTemplate (2026-08-30).
 *
 * GSC: position 57 with impressions and ~0 clicks. The previous version scored
 * 68% on the landing tier and carried a nine-row price table, a priced hero
 * subtitle and four priced FAQ answers — all of which the hide-prices decision
 * removes. Cost intent is served by the free-diagnosis CTA instead.
 *
 * Everything factual here is carried over from the previous version or read
 * from site data: the model matrix, turnaround times, warranty terms and
 * pickup coverage. Reviews are filtered from the real 212-review set at render
 * time rather than pasted, so the page follows the store. The byline names
 * Shafiq because he is the real lead technician for screens, batteries and
 * water damage in TEAM — the three failures this page is mostly about.
 */
import {
  Monitor, BatteryCharging, Keyboard, Droplets, Cpu, Thermometer,
  Search, ShieldCheck, Clock, Truck,
} from "lucide-react";

import { AziziTemplate } from "@/components/azizi/AziziTemplate";
import { PRESETS } from "@/data/form-presets";
import { REVIEWS } from "@/content/reviews";
import { REVIEW_AVERAGE, REVIEW_COUNT } from "@/content/business.generated";

const PATH = "/macbook-air-repair-dubai";

/* Real MacBook Air reviews, filtered from the live set rather than pasted in.
   Constrained to ones that name an actual Air repair so the module is relevant,
   and long enough to read as evidence. If the store changes, this changes. */
const airReviews = REVIEWS
  .filter(
    (r) =>
      /macbook air/i.test(r.text ?? "") &&
      /(screen|battery|display|spill|slow)/i.test(r.text ?? "") &&
      (r.text?.length ?? 0) > 110,
  )
  .slice(0, 3)
  .map((r) => ({ name: r.name, date: r.date, rating: r.rating, text: r.text }));

/* Every Air generation we service, newest first. This is also the page's main
   internal-link surface — the model pages have no other hub pointing at them. */
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
  { label: "MacBook Air screen repair", to: "/macbook-air-screen-repair-dubai" },
  { label: "MacBook Air battery replacement", to: "/macbook-air-battery-replacement-dubai" },
  { label: "MacBook Air keyboard repair", to: "/macbook-air-keyboard-repair-dubai" },
  { label: "MacBook Air charging port repair", to: "/macbook-air-charging-port-repair-dubai" },
  { label: "MacBook screen repair", to: "/macbook-screen-repair-dubai" },
  { label: "MacBook battery replacement", to: "/macbook-battery-replacement-dubai" },
  { label: "MacBook keyboard repair", to: "/macbook-keyboard-repair-dubai" },
  { label: "MacBook water damage repair", to: "/macbook-water-damage-repair-dubai" },
  { label: "MacBook logic board repair", to: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook trackpad repair", to: "/macbook-trackpad-repair-dubai" },
  { label: "MacBook hinge repair", to: "/macbook-hinge-repair-dubai" },
  { label: "MacBook overheating fix", to: "/macbook-overheating-fix-dubai" },
  { label: "Mac data recovery", to: "/mac-data-recovery-dubai" },
  { label: "Mac not turning on", to: "/mac-not-turning-on-dubai" },
] as const;

const RELATED_HUBS = [
  { label: "MacBook Repair Dubai", to: "/macbook-repair-dubai" },
  { label: "MacBook Pro Repair Dubai", to: "/macbook-pro-repair-dubai" },
  { label: "Mac Repair Dubai", to: "/mac-repair-dubai" },
  { label: "iMac Repair Dubai", to: "/imac-repair-dubai" },
  { label: "Mac mini Repair Dubai", to: "/mac-mini-repair-dubai" },
  { label: "Mac Studio Repair Dubai", to: "/mac-studio-repair-dubai" },
  { label: "Mac Pro Repair Dubai", to: "/mac-pro-repair-dubai" },
  { label: "Apple Repair Dubai", to: "/apple-repair-dubai" },
  { label: "Same-day MacBook repair", to: "/same-day-macbook-repair-dubai" },
  { label: "Onsite MacBook repair", to: "/onsite-macbook-repair-dubai" },
] as const;

const FAQS = [
  {
    q: "Which MacBook Air models do you repair?",
    a: "Every MacBook Air generation. That covers Intel 2017–2020 (A1932, A2179), M1 2020 (A2337), M2 13-inch and 15-inch (A2681, A2941), M3 13-inch and 15-inch, M4 13-inch and 15-inch, and the current M5 line. Older unibody Airs are still repairable for screens and batteries. Diagnosis is free on all of them, so bring it in even if you are not sure which model you have.",
  },
  {
    q: "How long does a MacBook Air repair take?",
    a: "Screen and battery replacements are usually 45–90 minutes. Keyboard and top-case work is 2–3 hours because the whole assembly comes out. Water damage is assessed the same day, with the repair itself depending on what the board looks like once it is cleaned. Component-level logic board work is 24–48 hours. You get an estimated completion time when we confirm the quote, not before.",
  },
  {
    q: "What does a MacBook Air repair cost?",
    a: "We quote after the diagnosis, never before it — the same symptom can be a cable, a panel or a board fault, and those are very different jobs. Diagnosis is free, the written quote is free, and if we cannot fix the fault there is no charge at all. Message us on WhatsApp with your model and what it is doing and we will tell you what is involved.",
  },
  {
    q: "Do you charge for the diagnosis?",
    a: "No. Diagnosis is free on every MacBook Air and there is no obligation to go ahead afterwards. If the machine cannot be repaired you owe nothing — no diagnostic fee, no inspection charge, no labour.",
  },
  {
    q: "My MacBook Air is fanless — why does it still overheat?",
    a: "Every M-series Air is fanless, so heat leaves through the chassis rather than through a vent. Sustained loads such as video export or long Teams calls make the aluminium hot and macOS throttles to protect the SoC. That is normal. What is not normal is shutting down, waking hot from sleep, or getting hot while idle — those point to a battery or board fault and are worth a free diagnosis.",
  },
  {
    q: "My MacBook Air battery is swollen. Is it safe to use?",
    a: "Stop using it and do not charge it. A swelling cell is under mechanical stress and pressure on the trackpad or the underside of the case is the usual first sign. Power it down, keep it somewhere cool and away from anything flammable, and bring it in or request a pickup. We remove swollen cells routinely and it is a same-day job on most Air models.",
  },
  {
    q: "Is it worth repairing an older Intel MacBook Air?",
    a: "For a screen or a battery on a 2018–2020 Intel Air, usually yes — the machine still runs current macOS well and the repair costs a fraction of replacing it. For a logic board fault on a pre-2018 model we will tell you honestly when the repair is not worth it against what the machine is worth. We would rather lose the job than take money for a machine you should replace.",
  },
  {
    q: "Do you offer free pickup for MacBook Air repair in Dubai?",
    a: "Yes, free door-to-door collection and delivery anywhere in mainland Dubai — Marina, Downtown, JBR, JLT, Business Bay, Al Barsha, Media City and the rest. A courier collects the machine, we diagnose and repair it at the Concord Tower workshop, and it comes back to you. You can also walk in without an appointment.",
  },
  {
    q: "Will repairing my MacBook Air void the Apple warranty?",
    a: "If the machine is still inside Apple's one-year warranty or an active AppleCare+ plan, use Apple first — they will fix a manufacturing defect at no cost and we will tell you so. If you are out of warranty there is nothing left to void. Our own work carries a written warranty of up to 12 months on screens and batteries and 90 days on other hardware.",
  },
  {
    q: "Will I lose my data during a MacBook Air repair?",
    a: "Not for a screen, battery, keyboard or trackpad job — the storage is untouched. On M-series Airs the SSD is soldered to the logic board, so board-level work is the one case where data is genuinely at risk. We tell you that before starting and recover data first where it matters. Back up before any repair anywhere if you can.",
  },
];

export default function MacBookAirRepair() {
  return (
    <AziziTemplate
      path={PATH}
      preset={PRESETS.repair}
      /* DEVICE_TYPES has no "MacBook Air" member — the Air is a MacBook for
         lead-routing purposes, and the model is captured in the message. */
      leadFormDeviceType="MacBook"

      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
        { name: "MacBook Air Repair Dubai", path: PATH },
      ]}

      hero={{
        eyebrow: "MacBook Air specialist · Intel through M5",
        title: "MacBook Air Repair Dubai",
        subtitle:
          "Screens, batteries, keyboards and board-level faults on every MacBook Air generation. Free diagnosis, same-day on most jobs, free pickup across Dubai.",
        timeline: "Most screen and battery jobs: same day",
        image: "/images/real/lab/macbook-air-lid-dubai.jpg",
        imageAlt:
          "MacBook Air open on the workshop bench at MacBook Repair Dubai, Dubai Media City",
        ctaLabel: "Get a free diagnosis",
      }}

      authorByline={{
        author: "Shafiq",
        role: "Lead technician — screens, batteries and water damage",
        reviewer: "MacBook Repair Dubai workshop team",
        updated: "August 2026",
      }}

      quickAnswer={{
        question: "What is MacBook Air repair at MacBook Repair Dubai?",
        answer:
          "MacBook Air repair at MacBook Repair Dubai is in-workshop repair of any MacBook Air — display, battery, keyboard, trackpad, charging port or logic board — carried out at Office 45, Concord Tower, Dubai Media City. We have repaired Apple hardware since 2004 and cover every Air generation from the Intel models through the current M5. Diagnosis is free, most screen and battery work is finished the same day, and there is no charge if we cannot fix the fault.",
      }}

      keyTakeaways={{
        updated: "August 2026",
        lead:
          "MacBook Repair Dubai repairs every MacBook Air generation at its own workshop inside Concord Tower, Dubai Media City.",
        items: [
          "Most MacBook Air screen and battery replacements are finished the same day.",
          "Diagnosis is free and there is no charge if the fault cannot be fixed.",
          "Every M-series Air is fanless, so heat is normal under load — shutting down is not.",
          "A swollen battery pushing up the trackpad should be powered off and not charged.",
          "On M-series Airs the SSD is soldered to the board, so board faults put data at risk.",
          "Free collection and delivery anywhere in mainland Dubai, or walk in without an appointment.",
        ],
      }}

      whatIs={{
        heading: "What actually fails on a MacBook Air",
        entityName: "MacBook Air repair",
        definition: (
          <>
            <p>
              The MacBook Air fails differently from the Pro, and the reason is the
              chassis. There is no fan in any M-series Air, so heat leaves through the
              aluminium. That makes the machine silent, and it also means thermal stress
              lands on the battery and the board rather than being carried out through a
              vent. Swollen cells and heat-related board faults are the two things we see
              most on Airs that are three years old or more.
            </p>
            <p>
              The other pattern is mechanical. The Air is the machine people carry, so it
              takes the drops, the bag pressure and the spilled coffee. Cracked displays
              and liquid damage make up most of what arrives on the bench. Intel-era Airs
              add the butterfly keyboard, where a single piece of grit under a key is
              enough to kill it. We repair all of it at component level where the fault
              allows, rather than replacing a whole board because one rail is down.
            </p>
          </>
        ),
        benefits: [
          { icon: Search, title: "Free diagnosis, then a quote", body: "We find the actual fault before quoting. The same symptom can be a cable, a panel or a board — those are different jobs and different costs." },
          { icon: Clock, title: "Same day on most jobs", body: "Screens and batteries are typically 45–90 minutes. Drop off in the morning and the machine is usually ready that evening." },
          { icon: ShieldCheck, title: "Written warranty", body: "Up to 12 months on screens and batteries, 90 days on other hardware. In writing, on the job sheet, not a verbal promise." },
          { icon: Truck, title: "Free pickup across Dubai", body: "Door-to-door collection and return anywhere on the mainland, or walk into the Media City workshop without an appointment." },
        ],
      }}

      features={{
        heading: "MacBook Air repairs we do most",
        subheading: "Each of these is a same-week job on every Air generation, Intel through M5.",
        features: [
          { icon: Monitor, name: "Screen replacement", description: "Cracked, flickering or dead Liquid Retina panels. We replace the LCD alone where possible, which keeps your original camera, hinges and antenna." },
          { icon: BatteryCharging, name: "Battery replacement", description: "Swelling, rapid drain, or a machine that dies away from the charger. Cells matched to the original Wh rating, with a battery health check afterwards." },
          { icon: Keyboard, name: "Keyboard and top case", description: "Butterfly keyboards on Intel Airs and scissor keyboards on M-series. Single keys where the mechanism allows, full assembly where it does not." },
          { icon: Droplets, name: "Water and liquid damage", description: "Ultrasonic clean and board rework. Bring it in powered off — rice does nothing and time on the board is what costs you the machine." },
          { icon: Cpu, name: "Logic board repair", description: "Power rail faults, no video, no power. Component-level rework rather than a board swap, which is what makes an out-of-warranty Air worth fixing." },
          { icon: Thermometer, name: "Overheating and throttling", description: "Fanless design means heat is expected, shutdowns are not. We check thermal interface, battery health and board temperatures together." },
        ],
      }}

      comparison={{
        eyebrow: "Independent vs Apple Store",
        headline: "How an independent workshop differs from the Apple Store",
        description:
          "We are an independent Apple repair specialist — not an Apple Authorised Service Provider. That has real trade-offs in both directions, so here they are.",
        leftLabel: "MacBook Repair Dubai",
        rightLabel: "Apple Store / AASP",
        rows: [
          { feature: "Diagnosis", left: "Free, no appointment needed", right: "Genius Bar appointment required" },
          { feature: "Turnaround on screens and batteries", left: "Usually same day", right: "Typically several days, often sent away" },
          { feature: "Board-level repair", left: "Component-level rework on the board", right: "Whole-board replacement" },
          { feature: "Out-of-warranty older models", left: "Repaired while parts exist", right: "Refused once classed as vintage" },
          { feature: "Collection", left: "Free pickup and delivery in mainland Dubai", right: "You travel to the store" },
          { feature: "If it cannot be fixed", left: "No charge at all", right: "Diagnostic fee may still apply" },
          { feature: "Apple warranty on the device", left: "Use Apple first if still covered — we will say so", right: "Correct choice while in warranty or AppleCare+" },
        ],
      }}

      methodology={{
        heading: "How a MacBook Air repair runs",
        intro: "Four steps, and you approve the cost before anything is opened.",
        steps: [
          { title: "Free diagnosis", body: "Drop in or request a pickup. A technician finds the actual fault at no cost and explains it before any work is discussed." },
          { title: "Written quote", body: "You get the parts, the labour and the turnaround in writing. Nothing is opened until you approve it, and there is no charge to walk away." },
          { title: "Repair", body: "Most screen and battery work is 45–90 minutes. Board-level jobs are 24–48 hours. We tell you if the timeline changes rather than letting it slip." },
          { title: "Bench test and handover", body: "Display calibration, battery cycle count, keyboard scan and trackpad response are all checked before the machine goes back to you." },
        ],
      }}

      partsAndTooling={{
        headline: "Parts and tooling we use on MacBook Air",
        intro: "What the bench actually runs on. We are independent, so we are explicit about part grades rather than implying everything is Apple original.",
        items: [
          { name: "Genuine and OEM-grade display panels", note: "Genuine Apple panels where supply allows, OEM-grade otherwise. True Tone is preserved on genuine panels. We tell you which you are getting before fitting." },
          { name: "Capacity-matched battery cells", note: "Matched to the original Wh rating, with the battery management system re-paired so macOS reports cycle count and health correctly." },
          { name: "Hot-air rework and micro-soldering", note: "Board-level component replacement — power rails, charging ICs, backlight circuits — instead of replacing a whole logic board." },
          { name: "Ultrasonic cleaning bath", note: "For liquid damage. Removes corrosion and residue from under chips, which a manual clean cannot reach." },
          { name: "Thermal camera and bench PSU", note: "Finds shorted rails by where the board gets hot, so a dead machine can be traced without guesswork." },
          { name: "Calibrated display test rig", note: "Dead-pixel, backlight-uniformity and colour checks on every panel before the lid is closed and the machine handed back." },
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
        intro: "The questions we are actually asked at the counter, answered straight.",
        items: FAQS,
      }}

      sources={{
        heading: "Apple's own documentation",
        links: [
          { label: "Apple — MacBook Air service and repair", href: "https://support.apple.com/mac/repair", note: "Apple's official repair options and warranty status check." },
          { label: "Apple — check your coverage", href: "https://checkcoverage.apple.com/", note: "Confirm whether your Air is still inside warranty or AppleCare+ before paying anyone." },
          { label: "Apple — about battery service", href: "https://support.apple.com/mac-notebooks/repair/battery-replacement", note: "Apple's guidance on battery health, cycle counts and when a battery needs replacing." },
          { label: "Apple — vintage and obsolete products", href: "https://support.apple.com/en-us/102772", note: "Which models Apple has stopped servicing — the point where an independent workshop becomes the only option." },
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
          "Send us the model and what it is doing, and we will tell you what is involved before you commit to anything.",
        primary: { label: "Message us on WhatsApp", href: "https://wa.me/971557413706" },
        secondary: { label: "Call 055 741 3706", href: "tel:+971557413706" },
      }}
    />
  );
}
