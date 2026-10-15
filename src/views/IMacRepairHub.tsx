"use client";
/**
 * iMac Repair Dubai — rebuilt 2026-09-26 onto the Azizi page standard
 * (SEO master plan, Phase 2.3 item 6; plan 2.1 names this URL the target for
 * "imac repair dubai" / "imac repair in dubai", where the homepage currently ranks #2
 * and this page #51).
 *
 * What changed from the June WordPress port:
 *  - The AED price table is gone (hide-prices policy). Cost intent is served by the
 *    free diagnosis and a WhatsApp quote.
 *  - Unsourced claims removed: "certified" technicians, "OEM parts only" (contradicted
 *    the sitewide parts policy), "100% data-loss-free guarantee", "one of the highest
 *    customer retention rates", and the claim that the 27-inch display "lifts off
 *    magnetically" (every iMac since 2012 is held on with adhesive).
 *  - Links to the retired /imac-m1|m3|m4-repair-dubai hubs (now 301s) replaced by the
 *    dated model pages.
 *  - useSeo() dropped: meta comes from metaForPath() in page.tsx and schema from
 *    <PageSchema/>, as on every Azizi-template page. The old client-side title said
 *    "Certified", which the truth gate forbids.
 *
 * Kept true facts: model coverage, free diagnosis, walk-in workshop, paid on-site diagnosis and
 * minor repairs (subject to technician availability), 3–4 hour in-stock timings, 1–2 business days for ordered parts, 27-inch
 * RAM door (up to 128GB on 2019/2020), soldered M-series RAM/SSD, 2017 5K GPU faults.
 * Keywords covered: imac repair dubai / in dubai / near me / abu dhabi-adjacent courier,
 * imac screen replacement, imac upgrade (RAM, SSD), imac parts, imac not turning on.
 */
import {
  HardDrive, Fan, ShieldCheck, Camera, Droplets, Stethoscope,
  Search, MapPin, Wrench,
} from "lucide-react";

import { AziziMoneyPage, InLink, waHref } from "@/components/azizi/AziziMoneyPage";
import { PRESETS } from "@/data/form-presets";
import { pickReviews } from "@/lib/find-reviews";
import { NAP, TEAM } from "@/content/site";

const PATH = "/imac-repair-dubai";
const WA_MSG = "Hi, I need an iMac repair quote. Size/year: ... Fault: ...";
// Byline: Ali is on the roster for iMac and Mac mini work (years VERIFIED in the fact sheet).
// No "reviewed by" line until a named reviewer has actually reviewed this page (owner decision D8).
const AUTHOR = TEAM.find((t) => t.name === "Ali");

/* Dated model pages — the only model URLs (the chip hubs 301 here). */
const MODEL_PAGES = [
  { label: 'iMac 24" M4 (2024) repair', to: "/imac-24-m4-2024-repair-dubai" },
  { label: 'iMac 24" M3 (2023) repair', to: "/imac-24-m3-2023-repair-dubai" },
  { label: 'iMac 24" M1 (2021) repair', to: "/imac-24-m1-2021-repair-dubai" },
  { label: 'iMac 27" Intel 2020 repair', to: "/imac-27-intel-2020-repair-dubai" },
  { label: 'iMac 27" Intel 2019 repair', to: "/imac-27-intel-2019-repair-dubai" },
  { label: 'iMac 27" Intel 2017 repair', to: "/imac-27-intel-2017-repair-dubai" },
  { label: "iMac Pro 2017 repair", to: "/imac-27-pro-2017-repair-dubai" },
  { label: "iMac Intel repair (21.5- and 27-inch)", to: "/imac-intel-repair-dubai" },
] as const;

const SERVICE_LINKS = [
  { label: "iMac screen repair", to: "/imac-screen-repair-dubai" },
  { label: "iMac logic board repair", to: "/imac-logic-board-repair-dubai" },
  { label: "iMac not turning on", to: "/imac-not-turning-on-dubai" },
  { label: "iMac power supply repair", to: "/imac-power-supply-repair-dubai" },
  { label: "iMac GPU repair", to: "/imac-gpu-repair-dubai" },
  { label: "iMac RAM upgrade", to: "/imac-ram-upgrade-dubai" },
  { label: "iMac SSD upgrade", to: "/imac-ssd-upgrade-dubai" },
  { label: "iMac data recovery", to: "/imac-data-recovery-dubai" },
  { label: "iMac overheating fix", to: "/imac-overheating-fix-dubai" },
  { label: "iMac fan cleaning", to: "/imac-fan-cleaning-dubai" },
  { label: "iMac OS reinstall", to: "/imac-os-reinstall-dubai" },
  { label: "iMac virus removal", to: "/imac-virus-removal-dubai" },
  { label: "iMac full diagnostic", to: "/imac-full-diagnostic-dubai" },
  { label: "iMac repair cost", to: "/imac-repair-cost-dubai" },
] as const;

const RELATED_HUBS = [
  { label: "Mac Repair Dubai", to: "/mac-repair-dubai" },
  { label: "MacBook Repair Dubai", to: "/macbook-repair-dubai" },
  { label: "MacBook Air Repair Dubai", to: "/macbook-air-repair-dubai" },
  { label: "MacBook Pro Repair Dubai", to: "/macbook-pro-repair-dubai" },
  { label: "Mac mini Repair Dubai", to: "/mac-mini-repair-dubai" },
  { label: "Mac Studio Repair Dubai", to: "/mac-studio-repair-dubai" },
  { label: "Mac Data Recovery Dubai", to: "/mac-data-recovery-dubai" },
  { label: "Apple Repair Dubai", to: "/apple-repair-dubai" },
] as const;

const FAQS = [
  {
    q: "How much does iMac repair cost in Dubai?",
    a: "It depends on the model and the fault, so we quote after a free diagnosis. Send the size, year and symptom on WhatsApp and we will tell you what is involved. The written quote comes before any work, and there is no charge if we cannot fix it.",
  },
  {
    q: "How long does an iMac repair take?",
    a: "Display replacements take 2–3 days once the part is confirmed. Power supply and camera replacements take 3–4 hours when the part is in stock; if a part has to be ordered, allow 1–2 business days. Board-level and graphics repairs take longer, and you get a completion time with the quote.",
  },
  {
    q: "Can you repair the 24-inch M4 iMac?",
    a: "Yes, and the M1 and M3 models too. If it is still inside Apple's one-year warranty or AppleCare+, go to Apple first. For accidental damage or out-of-warranty faults we confirm part availability on WhatsApp before you bring it in.",
  },
  {
    q: "Will the iMac repair erase my data?",
    a: "Not unless the repair itself requires it, and we tell you before starting. On 24-inch Apple silicon iMacs the SSD is soldered to the logic board, so board work carries a real risk. If the iMac still boots, back it up first.",
  },
  {
    q: "Do you offer on-site iMac repair in Dubai?",
    a: "Yes, as a paid visit, subject to technician availability. A technician can come to your home or office for diagnosis and minor repairs; the charge is quoted on WhatsApp before booking. Bigger jobs need the Concord Tower workshop: carry the iMac in (parking on site), or book any same-day courier app and WhatsApp us the tracking link.",
  },
  {
    q: "Should I repair or replace an old iMac?",
    a: "Usually, when the fault is a part rather than the whole machine. A failed display, power supply or slow Fusion Drive on an otherwise healthy iMac is worth fixing; a board fault on a very old Intel iMac that can no longer run a supported macOS often is not. We tell you which after the free diagnosis, before you pay anything.",
  },
  {
    q: "Can you replace a cracked or dead iMac screen?",
    a: "Yes, on the 24-inch Apple silicon iMacs and on the 21.5- and 27-inch Intel models. Since late 2012 the display is bonded with adhesive, so the old adhesive is cut, the panel swapped and new adhesive fitted on the bench. Screen work carries a 90-day warranty.",
  },
  {
    q: "Can I upgrade the RAM or SSD in my iMac?",
    a: "It depends on the model. On 24-inch Apple silicon iMacs the RAM and SSD are soldered to the logic board and cannot be upgraded. On 27-inch Intel iMacs the RAM sits behind an access door at the back, and replacing the Fusion Drive or hard drive with an SSD is the biggest speed gain. Send the model and year on WhatsApp and we confirm what is possible.",
  },
  {
    q: "What warranty do you give on iMac repairs?",
    a: "It depends on the repair: 90 days on screens, up to 12 months on other hardware such as power supplies, SSDs and RAM, and 15 days on logic-board, liquid-damage and software work. The terms are written on your job sheet.",
  },
];

export default function IMacRepairHub() {
  const reviews = pickReviews([], { devices: ["iMac"], min: 3, seed: PATH });

  return (
    <AziziMoneyPage
      path={PATH}
      preset={PRESETS.repair}
      leadFormDeviceType="iMac"

      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "Mac Repair Dubai", path: "/mac-repair-dubai" },
        { name: "iMac Repair Dubai", path: PATH },
      ]}

      hero={{
        eyebrow: "iMac specialist · 24-inch M1 to M4 · 21.5- and 27-inch Intel",
        title: "iMac Repair in Dubai for Every Model, Intel to M4",
        subtitle:
          "Screen, power supply, logic board, SSD and RAM work on every iMac, from the 27-inch 5K Intel models to the current 24-inch M4. Free diagnosis at our Media City walk-in workshop, with parking on site.",
        image: "/images/real/lab/imac-front-dubai.jpg",
        imageAlt:
          "24-inch iMac on a desk at MacBook Repair Dubai in Dubai Media City, showing its About This Mac window",
        ctaLabel: "WhatsApp for a free iMac diagnosis",
      }}

      authorByline={{
        author: AUTHOR ? AUTHOR.name : "MacBook Repair Dubai workshop team",
        role: AUTHOR ? `${AUTHOR.specialisation}, ${AUTHOR.years} years` : "Concord Tower, Dubai Media City",
        updated: "October 2026",
      }}

      quickAnswer={{
        question: "Where can I get an iMac repaired in Dubai?",
        answer:
          "MacBook Repair Dubai repairs every iMac — the current 24-inch M4, the 24-inch M1 and M3, and the 21.5- and 27-inch Intel models — at its workshop in Concord Tower, Dubai Media City. Diagnosis is free, you approve a written quote before work starts, and you can walk in or send the iMac by a same-day courier you book.",
      }}

      keyTakeaways={{
        updated: "October 2026",
        lead:
          "MacBook Repair Dubai is an independent workshop that repairs every iMac generation at Concord Tower, Dubai Media City.",
        items: [
          "The current iMac is the 24-inch M4; the M1 and M3 24-inch and the Intel iMacs are repaired too.",
          "Every iMac since late 2012 has its display held on with adhesive, so opening one is a bench job.",
          "RAM and SSD are soldered on 24-inch Apple silicon iMacs and cannot be upgraded.",
          "On 27-inch Intel iMacs, an SSD in place of the Fusion Drive is still the biggest speed gain.",
          "A 27-inch Intel iMac that won't power on may need a power supply, not a logic board.",
          "Diagnosis is free, and there is no charge if we cannot fix it.",
        ],
      }}

      whatIs={{
        heading: "Why do older and newer iMacs fail differently?",
        entityName: "iMac repair",
        definition: (
          <>
            <p>
              The last Intel iMacs are now six years old or more, and they fail the way ageing desktops do:
              Fusion Drives and hard drives slow to a crawl, internal power supplies die, and on the 2017
              27-inch 5K models the AMD graphics chip can start drawing artefacts under load.
            </p>
            <p>
              The 24-inch M1, M3 and M4 iMacs are simpler inside. The power supply is the external brick and
              almost everything else sits on one small logic board, so repairs come down to the display, the
              board or the adapter — and with soldered storage, board work puts data at risk.
            </p>
          </>
        ),
        benefits: [
          { icon: Search, title: "Free diagnosis", body: "The fault is found and explained before any quote." },
          { icon: MapPin, title: "Walk-in workshop", body: "Concord Tower, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site." },
          { icon: ShieldCheck, title: "Written warranty", body: "Up to 12 months, depending on the repair." },
          { icon: Wrench, title: "Honest upgrade advice", body: "We say so when an iMac cannot be upgraded." },
        ],
      }}

      sections={[
        {
          id: "imac-screen",
          heading: "How is an iMac screen replaced?",
          body: (
            <>
              <p>
                On every iMac since late 2012 the glass is laminated to the panel and the display is held on with
                adhesive. Cracked glass therefore means a new display assembly, and every opening means fresh
                adhesive strips on reassembly.
              </p>
              <p>
                Lines, flicker or a pink tint are not always the screen. On 27-inch Intel iMacs we connect an
                external display first to tell a panel fault from a graphics fault, so you do not pay for the
                wrong part. Screens carry a 90-day warranty. See{" "}
                <InLink to="/imac-screen-repair-dubai">iMac screen repair</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "imac-upgrade",
          heading: "Which iMacs can take an SSD or RAM upgrade?",
          body: (
            <p>
              On 27-inch Intel iMacs from 2017 to 2020 the memory goes in through a door at the back — up to
              64GB on the 2017 and 2019 models and 128GB on the 2020 model — while replacing a Fusion Drive with an SSD means taking the
              display off. Both are covered on the <InLink to="/imac-ram-upgrade-dubai">iMac RAM upgrade</InLink>{" "}
              and <InLink to="/imac-ssd-upgrade-dubai">iMac SSD upgrade</InLink> pages. On the 24-inch M1, M3
              and M4, RAM and SSD are soldered: nobody can upgrade them, and we will tell you so.
            </p>
          ),
        },
        {
          id: "imac-power",
          heading: "Why won't my iMac turn on?",
          body: (
            <p>
              A 27-inch Intel iMac has its power supply inside the case, and a dead one looks exactly like a dead
              logic board. We test the supply before quoting, so you are not charged for a board you did not
              need. On 24-inch iMacs the external adapter is checked first. See{" "}
              <InLink to="/imac-not-turning-on-dubai">iMac not turning on</InLink>,{" "}
              <InLink to="/imac-power-supply-repair-dubai">iMac power supply repair</InLink>,{" "}
              <InLink to="/imac-logic-board-repair-dubai">iMac logic board repair</InLink> and{" "}
              <InLink to="/imac-gpu-repair-dubai">iMac GPU repair</InLink>.
            </p>
          ),
        },
        {
          id: "imac-parts",
          heading: "Which iMac parts do you fit?",
          body: (
            <p>
              Display assemblies, SSDs, RAM, power supplies, fans, speakers and cameras, plus the adhesive every
              opened iMac needs. Parts are genuine where supply allows and quality-tested otherwise, and you are
              told which before we fit them. For the 24-inch M4, we confirm availability on WhatsApp before you
              bring it in.
            </p>
          ),
        },
        {
          id: "imac-by-model",
          heading: "What fails on each iMac model?",
          body: (
            <>
              <p>What comes across the bench differs by generation, so the first question we ask is the size and year:</p>
              <ul>
                <li>
                  <strong>24-inch M1, M3 and M4 (2021 to 2024):</strong> the power supply is the external brick, and on
                  models with Ethernet the port sits in that brick, so a dead network connection can be the adapter
                  rather than the iMac. RAM and SSD are soldered to the logic board.
                </li>
                <li>
                  <strong>27-inch Intel 2020:</strong> SSD-only storage and a memory door at the back, so RAM changes are
                  quick; screen and power-supply faults are the usual reasons it comes in.
                </li>
                <li>
                  <strong>27-inch Intel 2017 and 2019:</strong> Fusion Drives whose hard-drive half has slowed right down,
                  and on the 2017 5K models AMD graphics faults that show as lines or artefacts under load.
                </li>
                <li>
                  <strong>21.5-inch Intel:</strong> no memory door. On many 21.5-inch models the RAM is soldered; where it is
                  not, and for any drive change, the display comes off and new adhesive goes on.
                </li>
                <li>
                  <strong>iMac Pro 2017:</strong> memory is not behind a door either; it is a display-off job like the
                  21.5-inch.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "imac-models",
          heading: "How do I find out which iMac I have?",
          body: (
            <p>
              Apple menu &gt; About This Mac shows the size and year. Each model has its own page:{" "}
              <InLink to="/imac-24-m4-2024-repair-dubai">24-inch M4 (2024)</InLink>,{" "}
              <InLink to="/imac-24-m3-2023-repair-dubai">24-inch M3 (2023)</InLink>,{" "}
              <InLink to="/imac-24-m1-2021-repair-dubai">24-inch M1 (2021)</InLink>, 27-inch Intel{" "}
              <InLink to="/imac-27-intel-2020-repair-dubai">2020</InLink>,{" "}
              <InLink to="/imac-27-intel-2019-repair-dubai">2019</InLink> and{" "}
              <InLink to="/imac-27-intel-2017-repair-dubai">2017</InLink>, and the{" "}
              <InLink to="/imac-27-pro-2017-repair-dubai">2017 iMac Pro</InLink>. Other Intel iMacs are on the{" "}
              <InLink to="/imac-intel-repair-dubai">iMac Intel repair</InLink> page.
            </p>
          ),
        },
      ]}

      features={{
        heading: "What other iMac repairs do you do?",
        subheading: "All on the bench at our Media City workshop.",
        features: [
          { icon: HardDrive, name: "Data recovery", description: "Fusion Drive, SSD and T2-encrypted iMac recovery." },
          { icon: Fan, name: "Overheating and fan noise", description: "Clogged fans and heat sinks cleaned or replaced." },
          { icon: ShieldCheck, name: "macOS and malware", description: "Reinstalls, virus removal and slow-Mac tune-ups." },
          { icon: Camera, name: "Camera, speakers, Wi-Fi", description: "Webcam, microphone, speaker and wireless faults." },
          { icon: Droplets, name: "Liquid damage", description: "Board cleaning and component rework after a spill." },
          { icon: Stethoscope, name: "Full diagnostic", description: "A complete hardware check before you buy or sell." },
        ],
      }}

      comparison={{
        eyebrow: "Independent vs Apple Store",
        headline: "How is an independent iMac workshop different from the Apple Store?",
        description: "We are independent, not an Apple Authorised Service Provider. The trade-offs run both ways.",
        leftLabel: "MacBook Repair Dubai",
        rightLabel: "Apple Store / AASP",
        rows: [
          { feature: "Diagnosis", left: "Free, no appointment", right: "Appointment required" },
          { feature: "Older Intel iMacs", left: "Repaired while parts exist", right: "Refused once classed obsolete" },
          { feature: "Getting it there", left: "Walk in, courier you book, or paid onsite visit", right: "You carry it to the store" },
          { feature: "If it cannot be fixed", left: "No charge", right: "Diagnostic fee may apply" },
          { feature: "Inside Apple warranty", left: "We send you to Apple", right: "The right choice" },
        ],
      }}

      showLocation
      showTeam
      showStats

      relatedServices={{ heading: "iMac repair services", links: SERVICE_LINKS }}

      relatedPosts

      faqs={{
        heading: "iMac repair Dubai: common questions",
        intro: "Straight answers to what we are asked most.",
        items: FAQS,
      }}

      sources={{
        heading: "Sources and Apple documentation",
        links: [
          { label: "Apple — check your coverage", href: "https://checkcoverage.apple.com/", note: "Check warranty or AppleCare+ status first." },
          { label: "Apple UAE — iMac", href: "https://www.apple.com/ae/imac/", note: "The current 24-inch M4 lineup." },
          { label: "Apple — vintage and obsolete products", href: "https://support.apple.com/en-us/102772", note: "Which iMacs Apple no longer services." },
        ],
      }}

      relatedHubs={{ heading: "Other Mac repair hubs", links: RELATED_HUBS }}

      hubLinks={{
        eyebrow: "Every model covered",
        heading: "iMac models we repair",
        links: MODEL_PAGES,
      }}

      reviews={reviews}
      reviewsHeading="What iMac customers say"

      finalCta={{
        eyebrow: "Walk in or send it by courier",
        headline: "Free iMac diagnosis at our Media City workshop",
        description: "Send the size, year and what it is doing, and we will tell you what is involved before you commit.",
        primary: { label: "Message us on WhatsApp", href: waHref(WA_MSG) },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: `tel:${NAP.phoneE164}` },
      }}
    />
  );
}
