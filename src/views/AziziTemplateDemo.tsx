"use client";
/**
 * AziziTemplateDemo — proof of the 24-module <AziziTemplate>.
 *
 * Deliberately built on the SAME subject as LandingTemplateDemo (MacBook screen
 * repair, Dubai Media City) so the two can be compared like for like:
 *
 *   /landing-template-demo  →  old 8-section LandingTemplate
 *   /azizi-template-demo    →  new 24-module AziziTemplate
 *
 * Both are NOINDEX and neither touches a live ranking page.
 *
 * Every figure here is traceable to site.ts, reviews.ts or the live
 * /macbook-screen-repair-dubai page. Nothing is invented:
 *   - reviews are filtered from the real 212-review set at render time, so they
 *     stay current and are never hand-copied
 *   - the byline names a real technician from the TEAM constant
 *   - NO PRICES anywhere, per the hide-prices decision
 */
import {
  Monitor, Sun, Cable, Layers, Zap, Timer, ShieldCheck, Truck, Search,
  Wrench, ClipboardCheck, PackageCheck, MapPin, Star, BadgeCheck, Laptop, HardDrive,
} from "lucide-react";

import { AziziTemplate } from "@/components/azizi/AziziTemplate";
import { PRESETS } from "@/data/form-presets";
import { REVIEWS } from "@/content/reviews";
import { NAP, REVIEW_COUNT, REVIEW_AVERAGE } from "@/content/site";

const PATH = "/azizi-template-demo";

/* Three real, named screen-repair reviews pulled from the live set rather than
   pasted in. If the review store changes, this changes with it. */
const screenReviews = REVIEWS
  .filter((r) => r.services?.includes("Screen") && r.text && r.text.length > 90)
  .slice(0, 3)
  .map((r) => ({ name: r.name, date: r.date, rating: r.rating, text: r.text }));

const faqs = [
  {
    q: "How long does a MacBook screen replacement take?",
    a: "Most are done the same day. The panel swap itself is around 90 minutes, plus a 90-minute adhesive cure before the lid can be handled, so a machine dropped off in the morning is usually ready that evening. We confirm the timeline after the free diagnosis, not before it.",
  },
  {
    q: "Do you charge for the diagnosis?",
    a: "No. Diagnosis is free on every device, and there is no obligation to proceed afterwards. If we cannot fix the fault there is no charge at all — no diagnostic fee, no inspection charge, no labour.",
  },
  {
    q: "Can you repair just the glass, or does the whole screen need replacing?",
    a: "On modern MacBooks the glass is bonded to the LCD, so a cracked front usually means the display assembly is replaced. What we can often do instead is replace the LCD panel alone rather than the full lid assembly, which keeps your original camera, hinges and antenna. We quote both options.",
  },
  {
    q: "My screen flickers or has a dark band along the bottom. Is that the panel?",
    a: "Usually not. That pattern is Flexgate — the display flex cable wearing through where it bends at the hinge, most common on 2016–2017 MacBook Pros. It is repairable with a longer replacement cable so the wear pattern does not return, and it costs far less than a panel.",
  },
  {
    q: "The display has a pink, green or purple tint. What causes that?",
    a: "Nearly always a loose or oxidised eDP display cable rather than a dead panel. Reseating it fixes roughly a third of the cases we see, and we do not charge when that is all it takes. The rest need the panel replaced.",
  },
  {
    q: "Will True Tone still work after the repair?",
    a: "Yes on genuine Apple panels — True Tone is recalibrated against your original logic board serial during reassembly. Quality-alternative panels match P3 colour and brightness but do not always retain True Tone, and we tell you which you are getting before you approve the work.",
  },
  {
    q: "Do you come to me, or do I bring the MacBook in?",
    a: "Either. Walk into Office 45 on the 10th floor of Concord Tower during workshop hours with no appointment, or we collect free from anywhere in Dubai and deliver it back when it is done.",
  },
  {
    q: "What warranty do I get on a screen repair?",
    a: "A written warranty covering parts and labour against defects, dead pixels, backlight bleed and cable failure. The exact term is on your invoice and we tell you what it is before you approve the work rather than after.",
  },
  {
    q: "Is my data safe during a screen repair?",
    a: "Yes. A display repair does not touch your storage, and because we repair at board level rather than swapping the logic board, your SSD and everything on it stays in the machine throughout.",
  },
  {
    q: "Are you an Apple Authorised Service Provider?",
    a: "No, and we will say so plainly. We are an independent Apple repair specialist and have been since 2004. If your Mac is still covered by Apple's warranty or AppleCare for a covered fault, go to Apple — you will pay nothing. We are the alternative for out-of-warranty machines and for board-level faults Apple does not repair.",
  },
];

export default function AziziTemplateDemo() {
  return (
    <AziziTemplate
      path={PATH}
      preset={PRESETS.repair}
      leadFormDeviceType="MacBook"

      /* 2 — BREADCRUMB. Emits BreadcrumbList JSON-LD alongside the visible trail. */
      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair", path: "/macbook-repair-dubai/" },
        { name: "Screen Repair", path: PATH },
      ]}

      /* 3 — HERO. No price: the old demo's hero carried a from-price; this one
         leads on turnaround and the free diagnosis instead. */
      hero={{
        eyebrow: "MacBook screen repair · Dubai Media City",
        title: "MacBook Screen Repair Dubai",
        subtitle:
          "Cracked glass, Flexgate cables, dead pixels and failed backlights on every MacBook Air and Pro from Intel through M5. Same-day on most models, bench-tested for colour and dead pixels before it goes back.",
        timeline: "Same day on most models",
        /* One hero image per page and it is the LCP element — Hero applies
           eager loading and fetchPriority. A real workshop photograph, not a
           generated graphic: the house style is photorealistic, and the alt
           text names the outcome and the brand rather than the object. */
        image: "/images/real/lab/macbook-open-topdown-dubai.jpg",
        imageAlt:
          "MacBook Repair Dubai technician's bench with a MacBook opened for display replacement at the Concord Tower workshop, Dubai Media City",
      }}

      /* 4 — AUTHOR BYLINE. Shafiq is the real lead technician for screens in
         the TEAM constant — not a mass-assigned name. */
      authorByline={{
        author: "Shafiq",
        role: "Lead technician, screens and displays",
        reviewer: "MacBook Repair Dubai workshop team",
        updated: "August 2026",
      }}

      /* 5 — QUICK ANSWER */
      quickAnswer={{
        question: "What is MacBook screen repair at MacBook Repair Dubai?",
        answer:
          "MacBook screen repair at MacBook Repair Dubai is the in-workshop replacement or repair of a MacBook display — the LCD panel, the bonded glass, the eDP or Flexgate cable, or the backlight — carried out at Office 45, Concord Tower, Dubai Media City. We have fitted MacBook displays since 2004, covering the 2008 unibody through the current M5 generation. Every panel is bench-tested for dead pixels, backlight uniformity and P3 colour before handover, and True Tone is preserved on genuine Apple panels. Diagnosis is free and there is no charge if we cannot fix it.",
      }}

      /* 6 — KEY TAKEAWAYS. Six claims, each readable out of context. */
      keyTakeaways={{
        updated: "August 2026",
        lead:
          "MacBook Repair Dubai replaces and repairs MacBook displays at its own workshop inside Concord Tower, Dubai Media City.",
        items: [
          "Most MacBook screen replacements are completed the same day.",
          "Diagnosis is free, and there is no charge if the fault cannot be fixed.",
          "Flickering or a dark band along the bottom is usually the flex cable, not the panel.",
          "A pink, green or purple tint is often a loose display cable and may need no new parts.",
          "True Tone is retained on genuine Apple panels, recalibrated to the original board serial.",
          "Free collection and delivery anywhere in Dubai, or walk in without an appointment.",
        ],
      }}

      /* 8 — WHAT IS */
      whatIs={{
        heading: "What actually fails on a MacBook display",
        entityName: "MacBook screen repair",
        definition: (
          <>
            <p>
              A MacBook display is not one part. It is a bonded stack — glass, LCD panel, backlight, and the thin flex
              cables that carry signal and power up through the hinge. Each of those fails differently, and the symptom
              usually tells you which one has gone.
            </p>
            <p>
              That distinction matters commercially, because a cable fault and a panel fault are very different pieces
              of work. A workshop that only swaps whole lid assemblies will quote you the same either way. We diagnose
              first so you are not paying for a panel when a cable is the actual problem.
            </p>
          </>
        ),
        benefits: [
          { icon: Cable, title: "Flex cable wear", body: "Backlight dies or bands as the lid opens. Repairable with a longer cable so the wear does not return." },
          { icon: Sun, title: "Backlight failure", body: "Image is there but very dim. Usually the backlight circuit on the board, not the panel itself." },
          { icon: Layers, title: "Bonded glass cracks", body: "Glass and LCD are laminated together, so a cracked front normally means the panel is replaced." },
          { icon: Zap, title: "eDP cable oxidation", body: "Pink, green or purple tint. Reseating the cable fixes a large share of these outright." },
        ],
      }}

      /* 9 — FEATURES */
      features={{
        heading: "What we repair on a MacBook display",
        subheading: "The highest-volume screen jobs at the workshop, and what each one actually involves.",
        features: [
          { icon: Monitor, name: "Panel replacement", description: "Cracked or failed LCD replaced and bench-tested for dead pixels, backlight uniformity and P3 colour before handover." },
          { icon: Cable, name: "Flexgate cable repair", description: "Stage-light banding on 2016–2017 Pros, fixed with a longer flex cable so the wear pattern does not recur." },
          { icon: Layers, name: "LCD-only vs full assembly", description: "Replacing the panel alone keeps your original camera, hinges and antenna. We quote both options every time." },
          { icon: Sun, name: "Backlight circuit repair", description: "Board-level repair of the backlight rail when the image is present but unlit — no panel needed." },
          { icon: Zap, name: "eDP cable and tint faults", description: "Pink, green or purple casts traced to the display cable, reseated or replaced as the fault requires." },
          { icon: BadgeCheck, name: "True Tone calibration", description: "Recalibrated against the original logic board serial on genuine panels, so colour behaves as it did before." },
        ],
      }}

      /* 10 — COMPARISON */
      comparison={{
        eyebrow: "Repair vs replace",
        headline: "Repairing the screen vs replacing the MacBook",
        description:
          "For a machine three to six years old this is the real decision, and it is rarely as close as people expect.",
        leftLabel: "Screen repair with us",
        rightLabel: "Buying a replacement Mac",
        rows: [
          { feature: "Turnaround", left: "Same day on most models", right: "Order, wait, then migrate everything" },
          { feature: "Your data", left: "Stays on the machine, untouched", right: "Full migration, and anything missed is gone" },
          { feature: "Your setup", left: "Apps, licences and settings unchanged", right: "Reinstall and re-authorise everything" },
          { feature: "What you keep", left: "The Mac you already know works", right: "A new machine, and a dead one to dispose of" },
          { feature: "Risk if wrong", left: "Free diagnosis first, no fix no fee", right: "Committed once you have bought it" },
          { feature: "Warranty", left: "Written warranty on parts and labour", right: "Manufacturer warranty on the new unit" },
        ],
      }}

      /* 11 — METHODOLOGY */
      methodology={{
        heading: "How a screen repair actually runs",
        intro: "Five steps from first message to handover, each with a real time attached rather than a vague promise.",
        steps: [
          { title: "Send the model and a photo", body: "Message us the serial from About This Mac and a picture of the damage. We come back with what is likely wrong and what it will take." },
          { title: "Free diagnosis", body: "Drop in or we collect free from anywhere in Dubai. On-the-spot diagnosis takes about 15 minutes, with no fee and no obligation." },
          { title: "Panel swap under the microscope", body: "Lid removed, adhesive heated, panel disconnected, replacement seated and the eDP cable routed — all under magnification." },
          { title: "Calibration and cure", body: "True Tone recalibrates against the original board serial on genuine panels, then the lid press cures before the machine leaves the bench." },
          { title: "QC and handover", body: "Backlight uniformity, dead-pixel scan, hinge torque, lid sensor and cable strain all checked and signed off with your warranty card." },
        ],
      }}

      /* 12 — PARTS AND TOOLING */
      partsAndTooling={{
        headline: "Parts and tooling we use",
        intro:
          "Screen work is as much about the bench as the part. This is what a display repair actually runs through here.",
        items: [
          { name: "Genuine and A-grade panels", note: "Genuine Apple panels retain True Tone; A-grade alternatives match P3 colour and brightness. We tell you which you are getting." },
          { name: "Heated lid separation", note: "Controlled heat and vacuum to lift bonded glass without stressing the hinge or the antenna running through it." },
          { name: "Microscope and hot-air station", note: "Board-level work on backlight rails and display connectors, where the components are too small to work on by eye." },
          { name: "True Tone recalibration rig", note: "Pairs a genuine panel to your original logic board serial so colour behaves exactly as it did before." },
          { name: "Dead-pixel and uniformity test", note: "Every panel is driven through a full-screen colour and brightness sweep on the bench before it goes back to you." },
          { name: "Adhesive cure press", note: "The lid is pressed and cured under controlled temperature so the bond holds rather than lifting at a corner weeks later." },
        ],
      }}

      /* 13 + 22 — LOCATION AND MAP */
      showLocation

      /* 14 — RELATED SERVICE CHIPS */
      relatedServices={{
        heading: "Related MacBook repairs",
        links: [
          { label: "MacBook battery replacement", to: "/macbook-battery-replacement-dubai/" },
          { label: "MacBook keyboard repair", to: "/macbook-keyboard-repair-dubai/" },
          { label: "MacBook logic board repair", to: "/macbook-logic-board-repair-dubai/" },
          { label: "MacBook water damage repair", to: "/macbook-water-damage-repair-dubai/" },
          { label: "MacBook Flexgate repair", to: "/macbook-flexgate-repair-dubai/" },
          { label: "MacBook hinge repair", to: "/macbook-hinge-repair-dubai/" },
        ],
      }}

      /* 7 — INTENT ROUTER.
         DEMO ONLY. On a real page this module is omitted unless GSC or GBP data
         shows genuinely mismatched traffic — on a page that already matches its
         intent it just pushes the real content down. It is wired here so the
         demo exercises all 24 modules, which is the demo's whole job. */
      intentRouter={{
        question: "Here for an iPhone or iPad screen instead?",
        detail:
          "This page covers MacBook displays. The bench is the same, but the parts and turnaround differ by device.",
        options: [
          { label: "iPhone screen repair", to: "/iphone-screen-repair-dubai/", icon: Laptop },
          { label: "iPad screen repair", to: "/ipad-screen-repair-dubai/", icon: HardDrive },
        ],
      }}

      /* 15 — RELATED BLOG STRIP. Forced to the MacBook family: RelatedArticles
         derives the family from `path`, and "/azizi-template-demo" maps to
         nothing, so without this the strip silently renders empty. */
      relatedPosts
      relatedPostsFamily="macbook"

      /* 16 — FAQ */
      faqs={{
        heading: "MacBook screen repair FAQs",
        intro: `${faqs.length} straight answers on turnaround, what actually failed, True Tone, warranty and what happens to your data.`,
        items: faqs,
      }}

      /* 17 — SOURCES */
      sources={{
        heading: "Sources and further reading",
        links: [
          { label: "Apple — Mac notebook display service", href: "https://support.apple.com/en-ae/mac-laptops/repair", note: "Apple's own service routes, for in-warranty machines." },
          { label: "Apple — About True Tone display", href: "https://support.apple.com/en-ae/102205", note: "How True Tone works and which models have it." },
        ],
      }}

      /* 18 — RELATED HUBS */
      relatedHubs={{
        heading: "Explore related repair hubs and service areas",
        links: [
          { label: "MacBook Pro repair", to: "/macbook-pro-repair-dubai/" },
          { label: "MacBook Air repair", to: "/macbook-air-repair-dubai/" },
          { label: "iMac screen repair", to: "/imac-screen-repair-dubai/" },
          { label: "iPad screen repair", to: "/ipad-screen-repair-dubai/" },
          { label: "iPhone screen repair", to: "/iphone-screen-repair-dubai/" },
          { label: "Mac repair hub", to: "/mac-repair-dubai/" },
          /* Area pages. These are the links that close the gap to the
             reference page's 79, and they are the ones that matter locally —
             a single workshop cannot rank in the map pack across Dubai, so the
             area pages carry the "near me" demand organically instead. */
          { label: "Dubai Marina", to: "/macbook-repair-dubai-marina/" },
          { label: "Downtown Dubai", to: "/macbook-repair-downtown-dubai/" },
          { label: "Business Bay", to: "/macbook-repair-business-bay/" },
          { label: "JLT", to: "/macbook-repair-jlt/" },
          { label: "JBR", to: "/macbook-repair-jbr/" },
          { label: "DIFC", to: "/macbook-repair-difc/" },
          { label: "Palm Jumeirah", to: "/macbook-repair-palm-jumeirah/" },
          { label: "Al Sufouh & Media City", to: "/macbook-repair-al-sufouh/" },
          { label: "Deira", to: "/macbook-repair-deira/" },
          { label: "Bur Dubai", to: "/macbook-repair-bur-dubai/" },
        ],
      }}

      /* 19 — FINAL CTA */
      finalCta={{
        eyebrow: "MacBook screen repair",
        headline: "Send us the model and a photo of the damage",
        description:
          "We come back with what is likely wrong and what it takes to fix. Diagnosis is free, collection across Dubai is free, and if we cannot fix it there is no charge.",
        primary: { label: "Get a quote on WhatsApp", href: NAP.whatsappUrl },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: `tel:${NAP.phoneE164}` },
      }}

      /* 21, 23 */
      showTeam
      showStats

      /* 24 — REAL reviews, filtered from the live set. If none matched, the
         module would simply not render — an empty slot beats invented proof. */
      reviews={screenReviews}
      reviewsHeading={`What customers say · ${REVIEW_AVERAGE}.0 from ${REVIEW_COUNT}+ Google reviews`}

      /* 25 — HUB SERVICE LINKS */
      hubLinks={{
        eyebrow: "MacBook repair cluster",
        heading: "Every MacBook repair we do in Dubai",
        links: [
          { label: "Screen repair", to: "/macbook-screen-repair-dubai/" },
          { label: "Battery replacement", to: "/macbook-battery-replacement-dubai/" },
          { label: "Keyboard repair", to: "/macbook-keyboard-repair-dubai/" },
          { label: "Logic board repair", to: "/macbook-logic-board-repair-dubai/" },
          { label: "Water damage repair", to: "/macbook-water-damage-repair-dubai/" },
          { label: "Charging port repair", to: "/macbook-charging-port-repair-dubai/" },
          { label: "Trackpad repair", to: "/macbook-trackpad-repair-dubai/" },
          { label: "Overheating and fans", to: "/macbook-overheating-fix-dubai/" },
          { label: "SSD upgrade", to: "/macbook-ssd-upgrade-dubai/" },
          { label: "RAM upgrade", to: "/macbook-ram-upgrade-dubai/" },
          { label: "Hinge repair", to: "/macbook-hinge-repair-dubai/" },
          { label: "Speaker repair", to: "/macbook-speaker-repair-dubai/" },
          { label: "Camera repair", to: "/macbook-camera-repair-dubai/" },
          { label: "Microphone repair", to: "/macbook-microphone-repair-dubai/" },
          { label: "Touch ID repair", to: "/macbook-touch-id-repair-dubai/" },
          { label: "Touch Bar repair", to: "/macbook-touch-bar-repair-dubai/" },
          { label: "Wi-Fi and Bluetooth", to: "/macbook-wifi-bluetooth-repair-dubai/" },
          { label: "Flexgate repair", to: "/macbook-flexgate-repair-dubai/" },
          { label: "GPU repair", to: "/macbook-gpu-repair-dubai/" },
          { label: "Data recovery", to: "/macbook-data-recovery-dubai/" },
          { label: "Full diagnostic", to: "/macbook-full-diagnostic-dubai/" },
          { label: "Cleaning and maintenance", to: "/macbook-cleaning-maintenance-dubai/" },
        ],
      }}
    />
  );
}
