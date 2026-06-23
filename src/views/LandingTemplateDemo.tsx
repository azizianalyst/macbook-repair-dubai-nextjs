"use client";
// LandingTemplateDemo - workstream H proof of the reusable <LandingTemplate>.
//
// This is a NOINDEX demo that proves the template by wiring all 8 sections to
// REAL MacBook-screen-repair data lifted from src/pages/MacBookScreenRepair.tsx
// (the live ranking page). Mounted at /landing-template-demo. It does NOT touch
// the live page, and robots = noindex so it can never compete in search.
//
// Pure config: every value below is honest and traceable to the live page,
// site.ts trust numbers, or verbatim reviews in reviews.ts.
import {
  Star, MessageSquare, CalendarClock, ShieldCheck, Truck, Monitor,
  Cable, Layers, Sun, Zap, Phone, MessageCircle, Sparkles, Clock, MapPin, BadgeCheck,
} from "lucide-react";

import { Link } from "@/lib/router-compat";
import LandingTemplate from "@/components/blocks/LandingTemplate";
import { GradientText } from "@/components/blocks/GradientText";

// inline contextual link style for the dark band (descriptive-anchor internal links)
const ilink = "text-accent underline underline-offset-2 hover:text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
import { localBusiness, organization, service as serviceSchema, faqPage, person, aggregateRating, reviewSchema } from "@/lib/schema";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

const WHATSAPP_QUOTE = `${NAP.whatsappUrl}?text=${encodeURIComponent(
  "Hi Shafiq, MacBook screen repair quote please. Model: ",
)}`;
const CALL = `tel:${NAP.phoneE164}`;
const DEMO_PATH = "/landing-template-demo";

// 8 honest, fact-dense FAQs adapted from the live MacBookScreenRepair page.
const FAQS = [
  {
    q: "How much does MacBook screen repair cost in Dubai?",
    a: "From AED 600 for a MacBook Air 13\" or MacBook Pro 13\" panel, AED 800 for the 14\" Pro, and AED 1,200 for the 16\" Pro. Glass-only repair is AED 600 on 2012-2015 Retina models; newer models need a full panel swap because Apple bonded the glass to the LCD.",
  },
  {
    q: "How long does MacBook screen replacement take?",
    a: "Same day for MacBook Air, MacBook Pro 13\", and 14\" Pro when the panel is in stock - typically 3 to 5 hours including the 90-minute adhesive cure. The 16\" Pro panel is sometimes a 1 to 2 day order. WhatsApp the serial first to confirm stock.",
  },
  {
    q: "Do you fix Flexgate on the 2016 and 2017 MacBook Pro?",
    a: "Yes. Flexgate on the A1706, A1707, and A1708 is repaired with a longer flex cable for AED 600, same day. The new cable is 2 mm longer than Apple's original to stop the wear pattern returning. It carries a 3-month warranty.",
  },
  {
    q: "Will True Tone still work after the screen is replaced?",
    a: "True Tone works on genuine Apple panels - MacBook Repair Dubai calibrates it against the original logic board serial during reassembly. With aftermarket A-grade panels True Tone is disabled by macOS, but P3 colour, brightness, and contrast are identical. Both options carry the 3-month warranty.",
  },
  {
    q: "Can you replace just the cracked glass without changing the LCD?",
    a: "On 2012-2015 Retina MacBooks, yes - an AED 600 glass-only swap. On every MacBook from 2016 onward Apple bonded the glass to the LCD as a single assembly, so the full panel must be replaced. We will not charge for glass-only on bonded models because the result is unreliable.",
  },
  {
    q: "Do you use genuine Apple screens?",
    a: "Genuine Apple panels are stocked for MacBook Pro M3, M4, and M5 - the only way to keep True Tone active. For 2012-2022 models we fit A-grade panels from the original Samsung or LG factories that built the Apple part. Both are labelled clearly on the WhatsApp quote and carry a 3-month warranty.",
  },
  {
    q: "Is there a warranty on the new screen?",
    a: "A 3-month written warranty on parts and labour. It covers manufacturing defects, dead pixels appearing post-repair, backlight bleed, and cable failure. It does not cover new physical damage. The warranty is transferable once, free of charge, if the MacBook is sold.",
  },
  {
    q: "Do you offer pickup for screen repair?",
    a: "Free pickup and delivery across Dubai mainland - Marina, Downtown, JBR, JLT, Palm, Business Bay, and Al Barsha. Same-hour pickup from Internet City and Knowledge Village. Sharjah and Abu Dhabi pickup is AED 100 each way.",
  },
];

export default function LandingTemplateDemo() {
  return (
    <LandingTemplate
      seo={{
        title: "MacBook Screen Repair Dubai - From AED 600",
        description:
          "MacBook screen repair Dubai from AED 600. Same-day Air & Pro 14\". Flexgate, cracked glass, dead pixels. 3-month warranty. Call 055 741 3706.",
        path: DEMO_PATH,
        canonical: DEMO_PATH,
        noindex: true,
        robots: "noindex,nofollow",
        dateModified: "2026-06-02",
        schemas: [
          localBusiness(),
          organization(),
          serviceSchema({
            name: "MacBook Screen Repair Dubai",
            price: 600,
            priceMax: 1200,
            timeline: "Same day to 2 days",
            warranty: "P3M",
            url: DEMO_PATH,
            description:
              "MacBook screen and LCD replacement in Dubai. Flexgate, cracked glass, dead pixels, backlight failure. Air, Pro 13/14/16, Intel and Apple Silicon.",
          }),
          faqPage(FAQS),
          // E-E-A-T: the named technician behind the repairs
          person({
            name: "Abdul Aziz",
            jobTitle: "Lead Repair Technician",
            yearsExperience: 21,
            knowsAbout: ["MacBook screen repair", "Flexgate repair", "MacBook logic board repair", "Apple display calibration"],
          }),
          // Social proof for AI + rich results
          aggregateRating({ value: REVIEW_AVERAGE, count: REVIEW_COUNT }),
          reviewSchema({ author: "Pauline Georgiadis", rating: 5, body: "My MacBook Pro had an issue with the screen sensor and a motherboard short. They fixed it in record time and the price was very fair. Highly recommend!" }),
          reviewSchema({ author: "Lloyd Stevens", rating: 5, body: "Very professional and quick service, my 2017 MacBook Pro had an issue with the screen and needed a new battery, Aziz sorted this out the same day. Highly recommend!" }),
        ],
      }}

      /* Breadcrumb - emits BreadcrumbList schema + visible trail */
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Apple Repair", path: "/apple-repair-dubai" },
        { name: "MacBook Screen Repair", path: DEMO_PATH },
      ]}

      /* Related internal links - GEO entity-linking */
      relatedServices={[
        { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "Swollen or short-lived battery, from AED 450, same day." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Board-level micro-soldering for no-power and short faults." },
        { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid spill cleaning and corrosion repair, free diagnosis." },
      ]}

      /* Link hub - maximises internal navigation + crawl paths from this page */
      linkHub={{
        heading: "Explore more across MacBook Repair Dubai",
        clusters: [
          {
            heading: "MacBook services",
            links: [
              { label: "Battery replacement", href: "/macbook-battery-replacement-dubai" },
              { label: "Keyboard repair", href: "/macbook-keyboard-repair-dubai" },
              { label: "Logic board repair", href: "/macbook-logic-board-repair-dubai" },
              { label: "Water damage repair", href: "/macbook-water-damage-repair-dubai" },
              { label: "Trackpad repair", href: "/macbook-trackpad-repair-dubai" },
              { label: "Charging port repair", href: "/macbook-charging-port-repair-dubai" },
              { label: "Data recovery", href: "/macbook-data-recovery-dubai" },
            ],
          },
          {
            heading: "Popular models",
            links: [
              { label: "MacBook Pro repair", href: "/macbook-pro-repair-dubai" },
              { label: "MacBook Air repair", href: "/macbook-air-repair-dubai" },
              { label: "MacBook Pro 14\" M4", href: "/macbook-pro-14-m4-2024-repair-dubai" },
              { label: "MacBook Pro 16\" M4", href: "/macbook-pro-16-m4-2024-repair-dubai" },
              { label: "MacBook Air 13\" M3", href: "/macbook-air-13-m3-2024-repair-dubai" },
            ],
          },
          {
            heading: "Areas we cover",
            links: [
              { label: "Dubai Marina", href: "/macbook-repair-dubai-marina" },
              { label: "Downtown Dubai", href: "/macbook-repair-downtown-dubai" },
              { label: "Business Bay", href: "/macbook-repair-business-bay" },
              { label: "JBR", href: "/macbook-repair-jbr" },
              { label: "DIFC", href: "/macbook-repair-difc" },
              { label: "MacBook repair near me", href: "/macbook-repair-near-me" },
            ],
          },
          {
            heading: "Guides",
            links: [
              { label: "Screen repair cost in Dubai", href: "/blog/macbook-screen-repair-cost-dubai-2026" },
              { label: "MacBook won't turn on", href: "/blog/macbook-not-turning-on-fix-guide" },
              { label: "MacBook running slow: 10 fixes", href: "/blog/macbook-running-slow-10-fixes" },
              { label: "vs Apple Store repair cost", href: "/blog/macbook-pro-m5-vs-apple-store-repair-cost" },
            ],
          },
        ],
      }}

      /* Reviews - real verbatim Google reviews + aggregate rating */
      reviews={{
        heading: "What our customers say",
        rating: REVIEW_AVERAGE,
        count: REVIEW_COUNT,
        ctaHref: "/reviews",
        ctaLabel: `Read all ${REVIEW_COUNT}+ reviews`,
        items: [
          { name: "Pauline Georgiadis", date: "2 weeks ago", rating: 5, text: "My MacBook Pro had an issue with the screen sensor and a motherboard short. I was so stressed out! They fixed it in record time and the price was very fair. Highly recommend!" },
          { name: "Lloyd Stevens", date: "2 weeks ago", rating: 5, text: "Very professional and quick service, my 2017 MacBook Pro had an issue with the screen and needed a new battery, Aziz sorted this out the same day. Highly recommend!" },
          { name: "Neil Morecraft", date: "3 weeks ago", rating: 5, text: "Friendly staff, quick turnaround, and great value for money. My MacBook came back looking spotless after a thorough clean and service - really pleased with the overall experience." },
        ],
      }}

      /* Key info - the things people ask AI: hours, pickup, location, quote */
      keyInfo={{
        heading: "Hours, pickup & location",
        columns: [
          { icon: Clock, title: "Opening hours", lines: ["Mon to Sat: 9 am - 10 pm", "Sunday: Closed", "WhatsApp replies 24/7"] },
          { icon: Truck, title: "Free pickup & delivery", lines: ["Across Dubai mainland", "Courier within about 2 hours", "Free - you pay only on approval"] },
          { icon: MapPin, title: "Visit the workshop", lines: ["Office #45, 10th Floor", "Concord Tower, Dubai Media City", "Al Sufouh, Dubai"] },
          { icon: BadgeCheck, title: "Quote & warranty", lines: ["Free diagnosis, fixed written quote", "No fix, no charge", "3-month written warranty"] },
        ],
      }}

      /* Related posts - guides that build topical authority */
      relatedPosts={{
        heading: "MacBook screen repair guides",
        posts: [
          { href: "/blog/macbook-screen-repair-cost-dubai-2026", meta: "Pricing", title: "MacBook Screen Repair Cost Dubai 2026 - All Models", excerpt: "Panel prices for every MacBook Air and Pro, Flexgate, glass-only vs full assembly, and how we compare to the Apple Store." },
          { href: "/blog/macbook-not-turning-on-fix-guide", meta: "Troubleshooting", title: "MacBook Not Turning On? 7 Fixes Before You Bring It In", excerpt: "SMC reset, charger checks, and display-vs-board diagnosis you can try at home before booking a repair." },
          { href: "/blog/macbook-pro-m5-vs-apple-store-repair-cost", meta: "Comparison", title: "MacBook Pro M5 Repair - Us vs Apple Store Dubai (2026)", excerpt: "Side-by-side turnaround, price, parts and warranty against the Apple Store for the latest MacBook Pro." },
        ],
      }}

      /* Models we service - links to every relevant model page + ItemList schema */
      models={{
        heading: "MacBook models we repair screens on",
        description:
          "We replace screens on every MacBook Air and Pro from Intel through the latest M5 - genuine Apple and A-grade panels in stock. Pick your exact model for its screen price and turnaround.",
        clusters: [
          {
            heading: "MacBook Air 13\"",
            models: [
              { label: "Intel 2020", href: "/macbook-air-13-intel-2020-repair-dubai", note: "MacBook Air 13-inch Intel 2020 screen replacement" },
              { label: "M1 2020", href: "/macbook-air-13-m1-2020-repair-dubai", note: "MacBook Air 13-inch M1 2020 screen replacement" },
              { label: "M2 2022", href: "/macbook-air-13-m2-2022-repair-dubai", note: "MacBook Air 13-inch M2 2022 screen replacement" },
              { label: "M3 2024", href: "/macbook-air-13-m3-2024-repair-dubai", note: "MacBook Air 13-inch M3 2024 screen replacement" },
              { label: "M4 2025", href: "/macbook-air-13-m4-2025-repair-dubai", note: "MacBook Air 13-inch M4 2025 screen replacement" },
              { label: "M5 2026", href: "/macbook-air-13-m5-2026-repair-dubai", note: "MacBook Air 13-inch M5 2026 screen replacement" },
            ],
          },
          {
            heading: "MacBook Air 15\"",
            models: [
              { label: "M2 2023", href: "/macbook-air-15-m2-2023-repair-dubai", note: "MacBook Air 15-inch M2 2023 screen replacement" },
              { label: "M3 2024", href: "/macbook-air-15-m3-2024-repair-dubai", note: "MacBook Air 15-inch M3 2024 screen replacement" },
              { label: "M4 2025", href: "/macbook-air-15-m4-2025-repair-dubai", note: "MacBook Air 15-inch M4 2025 screen replacement" },
              { label: "M5 2026", href: "/macbook-air-15-m5-2026-repair-dubai", note: "MacBook Air 15-inch M5 2026 screen replacement" },
            ],
          },
          {
            heading: "MacBook Pro 13\"",
            models: [
              { label: "Intel 2020", href: "/macbook-pro-13-intel-2020-repair-dubai", note: "MacBook Pro 13-inch Intel 2020 screen replacement (Flexgate-prone)" },
              { label: "M1 2020", href: "/macbook-pro-13-m1-2020-repair-dubai", note: "MacBook Pro 13-inch M1 2020 screen replacement" },
              { label: "M2 2022", href: "/macbook-pro-13-m2-2022-repair-dubai", note: "MacBook Pro 13-inch M2 2022 screen replacement (last 13-inch Pro)" },
            ],
          },
          {
            heading: "MacBook Pro 14\"",
            models: [
              { label: "M1 Pro 2021", href: "/macbook-pro-14-m1-pro-2021-repair-dubai", note: "MacBook Pro 14-inch M1 Pro 2021 mini-LED screen replacement" },
              { label: "M2 Pro 2023", href: "/macbook-pro-14-m2-pro-2023-repair-dubai", note: "MacBook Pro 14-inch M2 Pro 2023 screen replacement" },
              { label: "M3 2023", href: "/macbook-pro-14-m3-2023-repair-dubai", note: "MacBook Pro 14-inch M3 2023 screen replacement" },
              { label: "M4 2024", href: "/macbook-pro-14-m4-2024-repair-dubai", note: "MacBook Pro 14-inch M4 2024 screen replacement" },
              { label: "M5 2025", href: "/macbook-pro-14-m5-2025-repair-dubai", note: "MacBook Pro 14-inch M5 2025 screen replacement" },
              { label: "M5 Pro 2026", href: "/macbook-pro-14-m5-pro-2026-repair-dubai", note: "MacBook Pro 14-inch M5 Pro 2026 screen replacement" },
            ],
          },
          {
            heading: "MacBook Pro 16\"",
            models: [
              { label: "M1 Pro 2021", href: "/macbook-pro-16-m1-pro-2021-repair-dubai", note: "MacBook Pro 16-inch M1 Pro 2021 mini-LED screen replacement" },
              { label: "M2 Pro 2023", href: "/macbook-pro-16-m2-pro-2023-repair-dubai", note: "MacBook Pro 16-inch M2 Pro 2023 screen replacement" },
              { label: "M3 2023", href: "/macbook-pro-16-m3-2023-repair-dubai", note: "MacBook Pro 16-inch M3 2023 screen replacement" },
              { label: "M4 2024", href: "/macbook-pro-16-m4-2024-repair-dubai", note: "MacBook Pro 16-inch M4 2024 screen replacement" },
              { label: "M5 Pro 2026", href: "/macbook-pro-16-m5-pro-2026-repair-dubai", note: "MacBook Pro 16-inch M5 Pro 2026 screen replacement" },
            ],
          },
        ],
      }}

      /* 1 - HERO */
      hero={{
        badge: "MacBook screen repair - Dubai Media City",
        title: (
          <>
            MacBook screen repair, <GradientText>from AED 600</GradientText>
          </>
        ),
        description:
          "MacBook Repair Dubai replaces cracked glass, Flexgate cables, dead pixels, and dead backlights on every MacBook Air and Pro from Intel through M5. Same-day on most models, bench-tested for colour and dead pixels, and backed by a 3-month written warranty.",
        primary: { label: "Get a quote on WhatsApp", href: WHATSAPP_QUOTE },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: CALL },
        trustPills: [
          { icon: Star, label: `${REVIEW_AVERAGE.toFixed(1)} Google rating` },
          { icon: MessageSquare, label: `${REVIEW_COUNT}+ reviews` },
          { icon: CalendarClock, label: "Repairing Apple since 2004" },
          { icon: ShieldCheck, label: "3-month warranty" },
        ],
        results: {
          icon: Monitor,
          title: "Screen repair at a glance",
          subtitle: "Live workshop",
          status: { label: "Live", tone: "live" },
          stats: [
            { value: "3,400+", label: "Screens fitted" },
            { value: "5.0", label: "Google rating" },
            { value: "216+", label: "Reviews" },
            { value: "Same-day", label: "Most models" },
          ],
          breakdown: [
            { name: "Price from", value: "AED 600" },
            { name: "Diagnosis", value: "Free" },
            { name: "Turnaround", value: "Same day" },
            { name: "Warranty", value: "3 months" },
          ],
        },
      }}

      /* 2 - WHAT IS */
      whatIs={{
        heading: "What is MacBook screen repair at MacBook Repair Dubai?",
        entityName: "MacBook screen repair at MacBook Repair Dubai",
        definition: (
          <>
            is the in-workshop replacement or repair of a MacBook display - the LCD panel, the bonded glass, the eDP/Flexgate cable, or the backlight - carried out at Office #45, Concord Tower, Dubai Media City. The shop has fitted 3,400+ MacBook displays since 2004, covering the 2008 unibody through the 2025 M5 Pro 16". It sits alongside <Link to="/macbook-battery-replacement-dubai" className={ilink}>battery replacement</Link>, <Link to="/macbook-logic-board-repair-dubai" className={ilink}>logic-board repair</Link> and <Link to="/macbook-water-damage-repair-dubai" className={ilink}>water-damage repair</Link> as part of the full <Link to="/apple-repair-dubai" className={ilink}>Apple repair service in Dubai</Link>. Every panel is bench-tested for dead pixels, backlight uniformity, and P3 colour before handover, and True Tone is preserved on genuine Apple panels.
          </>
        ),
        benefits: [
          {
            icon: Sparkles,
            title: "Free diagnosis",
            body: "On-the-spot diagnosis in about 15 minutes. No diagnostic fee, no adhesive surcharge - the WhatsApp quote is the price paid on collection.",
          },
          {
            icon: Truck,
            title: "Free pickup in Dubai",
            body: "Free pickup and delivery across Dubai mainland, same day. Sharjah and Abu Dhabi pickup is AED 100 each way.",
          },
          {
            icon: ShieldCheck,
            title: "3-month written warranty",
            body: "Parts and labour covered for 3 months against defects, dead pixels, backlight bleed, and cable failure. Transferable once, free of charge.",
          },
          {
            icon: CalendarClock,
            title: "Same-day turnaround",
            body: "Air 13\" and 15\", Pro 13\" Touch Bar, and Pro 14\" delivered same day when the panel is in stock - 90 of the last 100 same-day tickets shipped before 8 pm.",
          },
        ],
      }}

      /* 3 - FEATURES */
      features={{
        heading: "What we repair on a MacBook display",
        subheading:
          "Six of the highest-volume screen jobs at the workshop, with the honest numbers behind each.",
        features: [
          {
            icon: Cable,
            name: "Flexgate cable fix",
            description:
              "Stage-light backlight and horizontal lines on the 2016-2017 Pro (A1706/A1707/A1708). Fixed with a 2 mm-longer flex cable so the wear pattern does not return.",
            metric: { value: "AED 600", label: "Same-day cable swap" },
          },
          {
            icon: Layers,
            name: "Panel-only vs full assembly",
            description:
              "LCD-only keeps the original camera, hinges, and antenna; full assembly swaps the whole lid. We quote both prices on every WhatsApp ticket.",
            metric: { value: "AED 200-400", label: "Saved with LCD-only" },
          },
          {
            icon: Sun,
            name: "True Tone retention",
            description:
              "Genuine Apple panels keep True Tone, calibrated against the original logic-board serial during reassembly. A-grade panels match P3 colour and brightness.",
          },
          {
            icon: Monitor,
            name: "eDP cable & tint repair",
            description:
              "Pink, green, or purple tint is usually a loose or oxidised eDP cable. Reseating fixes about 30% of cases at no charge; the rest get a panel swap.",
            metric: { value: "~30%", label: "Fixed by reseating" },
          },
          {
            icon: CalendarClock,
            name: "Same-day service",
            description:
              "Air 13\"/15\", Pro 13\", and Pro 14\" finish the same day when the panel is in stock - typically 3 to 5 hours including the 90-minute adhesive cure.",
            metric: { value: "3-5 hrs", label: "In-stock turnaround" },
          },
          {
            icon: Truck,
            name: "Free pickup & delivery",
            description:
              "Free pickup from anywhere in Dubai mainland, same day. Or walk in to Office #45, Concord Tower, Media City - across from Media City Metro.",
          },
        ],
      }}

      /* 4 - CASE STUDIES (verbatim reviews from reviews.ts) */
      caseStudies={{
        heading: "Real screen-repair outcomes",
        cases: [
          {
            tag: "Pro screen + board",
            metric: "Same day",
            metricLabel: "Screen sensor + motherboard short",
            quote:
              "My MacBook Pro had an issue with the screen sensor and a motherboard short. I was so stressed out! They fixed it in record time and the price was very fair. Highly recommend!",
            author: "Pauline Georgiadis",
          },
          {
            tag: "2017 Pro screen + battery",
            metric: "Same day",
            metricLabel: "Screen and new battery",
            quote:
              "Very professional and quick service, my 2017 MacBook Pro had an issue with the screen and needed a new battery, Aziz sorted this out the same day. Highly recommend!",
            author: "Lloyd Stevens",
          },
          {
            tag: "Air screen on-site",
            metric: "Same day",
            metricLabel: "On-site visit and repair",
            quote:
              "My MacBook Air had a problem with the screen so I contacted them for help. Their staff came to my place on the same day and fixed it quickly. Great service and very professional!",
            author: "Dania Aziz",
          },
        ],
      }}

      /* 5 - METHODOLOGY (real 5-step flow) */
      methodology={{
        heading: "Our screen repair process",
        subheading:
          "From WhatsApp to delivery, every step has a fixed time estimate - no vague 'we'll call you back'.",
        steps: [
          {
            title: "WhatsApp the model + photo",
            body: "Send the serial from About This Mac and a photo of the damage. Quote back in 4 to 8 minutes during business hours.",
          },
          {
            title: "Free pickup or drop-off",
            body: "Free pickup from anywhere in Dubai mainland, or walk in to Office #45, Concord Tower, Media City. Diagnosis on the spot, about 15 minutes.",
          },
          {
            title: "Panel swap in the workshop",
            body: "Lid removed in 25 minutes, adhesive heated, panel disconnected, replacement seated, eDP cable routed, lid re-bonded - under microscope throughout.",
          },
          {
            title: "True Tone calibration + cure",
            body: "On genuine panels, True Tone re-calibrates against the original board serial. The lid press cures for 90 minutes at 45 C before the MacBook leaves the bench.",
          },
          {
            title: "47-point QC + 3-month warranty",
            body: "Backlight uniformity, dead-pixel scan, hinge torque, lid sensor, P3 gamut, and cable strain test - signed at handover with the warranty card.",
          },
        ],
      }}

      /* 6 - PRICING (3 honest tiers) */
      pricing={{
        heading: "MacBook screen repair pricing",
        subheading:
          "All-in: panel, labour, and 3-month warranty. No diagnostic fee, no adhesive surcharge, VAT inclusive.",
        tiers: [
          {
            name: "MacBook Air 13\" / Pro 13\"",
            price: "AED 600",
            period: "from",
            description: "Air 13\" M1/M2/M3 and Pro 13\" Touch Bar.",
            features: [
              "Same-day when in stock",
              "A-grade Samsung/LG panel",
              "Free diagnosis & pickup",
              "3-month written warranty",
            ],
            cta: { label: "Get a quote", href: WHATSAPP_QUOTE },
          },
          {
            name: "MacBook Pro 14-16\"",
            price: "AED 800",
            period: "from",
            description: "Pro 14\" from AED 800, Pro 16\" from AED 1,200.",
            features: [
              "Genuine Apple panel option",
              "True Tone retained on genuine",
              "Same-day on 14\", 1-2 days on 16\"",
              "3-month written warranty",
            ],
            highlighted: true,
            cta: { label: "Get a quote", href: WHATSAPP_QUOTE },
          },
          {
            name: "Retina / assembly",
            price: "AED 600",
            period: "from",
            description: "2012-2015 Retina glass-only and 12\" Retina assembly.",
            features: [
              "Glass-only on 2012-2015 Retina",
              "Original Samsung panel sourcing",
              "LCD-only saves AED 200-400",
              "3-month written warranty",
            ],
            cta: { label: "Get a quote", href: WHATSAPP_QUOTE },
          },
        ],
      }}

      /* 7 - FAQ */
      faqs={FAQS}

      /* 8 - FINAL CTA */
      finalCta={{
        eyebrow: "Free diagnosis",
        headline: "Cracked screen? WhatsApp the model - quote in 4 minutes",
        description:
          "Send the year, screen size, processor, and a photo of the damage. Free pickup across Dubai mainland and a 3-month written warranty on every panel fitted.",
        primary: { label: "Message on WhatsApp", href: WHATSAPP_QUOTE },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: CALL },
      }}
    />
  );
}
