"use client";
/**
 * Data Recovery Dubai (/mac-data-recovery-dubai/). Rebuilt 2026-09-26 onto the Azizi page
 * standard (SEO master plan, Phase 2.3 item 7).
 *
 * Semrush UAE targets now covered by their own H2s: "data recovery dubai" (590, fixsquad #1,
 * we did not rank), "data recovery services dubai", "hard drive / hdd / hard disk data
 * recovery dubai", "ssd data recovery", "mac / macbook data recovery", "data recovery near
 * me" and "data recovery abu dhabi" (served honestly by the courier, since there is no
 * branch there). The SSD, T2, water-damage and per-device sections are short and hand off
 * to their own pages, so this hub feeds them rather than competing with them.
 *
 * Only services the site's other data-recovery pages already claim are claimed here:
 * external SSD/USB drives (/ssd-data-recovery-dubai), external 2.5"/3.5" and Time Machine
 * drives (/macbook-data-recovery-dubai), Fusion Drive and HDD work with mechanical faults
 * going to a partner clean room and quoted separately (/imac-data-recovery-dubai), privacy
 * handling (area pages, Mac mini page, NDA from the MacBook page).
 *
 * Removed as untrue or unsourced: the success-rate table (85–90%, 60–75%, 40–60% — no
 * source, and every recovery page quoted different numbers), "chip-off" recovery on Apple
 * silicon (the storage is encrypted to the Secure Enclave, so chip-off yields ciphertext),
 * "Intel Mac (2017–2020) removable SSD" (2018–2020 Intel Macs are T2 with soldered storage),
 * an SSD that "clicks", "recovery needs your Apple ID" (it is the login password or the
 * FileVault recovery key), a literal "14 years" byline (now read from TEAM), and the
 * "same day to 5 days" timeline. useSeo() dropped: meta comes from metaForPath() in
 * page.tsx and schema from <PageSchema/>.
 */
import { Search, ShieldCheck, Lock, Truck } from "lucide-react";

import { AziziMoneyPage, InLink, WaLink, waHref } from "@/components/azizi/AziziMoneyPage";
import { PRESETS } from "@/data/form-presets";
import { REVIEWS } from "@/content/reviews";
import { REVIEW_AVERAGE, REVIEW_COUNT } from "@/content/business.generated";
import { NAP, TEAM } from "@/content/site";
import { DATA_RECOVERY_AREAS } from "@/content/data-recovery-areas";

const PATH = "/mac-data-recovery-dubai";
const WA_MSG = "Hi, I need data recovery. Device or drive: ... What happened: ...";
/* The roster's data-recovery technician; name and years come from TEAM, never a literal. */
const TECH = TEAM.find((t) => t.name === "Ali");

/* Real reviews about dead Macs and saved data, filtered from the live set at render time. */
const recoveryReviews = REVIEWS
  .filter((r) => /saved my data|from the dead|wouldn.t even turn on/i.test(r.text ?? ""))
  .slice(0, 3)
  .map((r) => ({ name: r.name, date: r.date, rating: r.rating, text: r.text }));

const AREA_LINKS = DATA_RECOVERY_AREAS.map((a) => ({
  label: `Mac data recovery ${a.area}`,
  to: `/mac-data-recovery-${a.slug}`,
}));

const RECOVERY_SERVICES = [
  { label: "MacBook data recovery", to: "/macbook-data-recovery-dubai" },
  { label: "SSD data recovery", to: "/ssd-data-recovery-dubai" },
  { label: "Apple T2 chip data recovery", to: "/apple-t2-chip-data-recovery-dubai" },
  { label: "Data recovery after water damage", to: "/mac-data-recovery-after-water-damage-dubai" },
  { label: "iMac data recovery", to: "/imac-data-recovery-dubai" },
  { label: "Mac mini data recovery", to: "/mac-mini-data-recovery-dubai" },
  { label: "Mac Studio data recovery", to: "/mac-studio-data-recovery-dubai" },
  { label: "Mac Pro data recovery", to: "/mac-pro-data-recovery-dubai" },
  { label: "iPhone data recovery", to: "/iphone-data-recovery-dubai" },
  { label: "iPad data recovery", to: "/ipad-data-recovery-dubai" },
  { label: "MacBook logic board repair", to: "/macbook-logic-board-repair-dubai" },
  { label: "MacBook water damage repair", to: "/macbook-water-damage-repair-dubai" },
  { label: "Mac not turning on", to: "/mac-not-turning-on-dubai" },
] as const;

const RELATED_HUBS = [
  { label: "MacBook Repair Dubai", to: "/macbook-repair-dubai" },
  { label: "Mac Repair Dubai", to: "/mac-repair-dubai" },
  { label: "iMac Repair Dubai", to: "/imac-repair-dubai" },
  { label: "Mac mini Repair Dubai", to: "/mac-mini-repair-dubai" },
  { label: "Apple Repair Dubai", to: "/apple-repair-dubai" },
  { label: "MacBook Repair Abu Dhabi", to: "/macbook-repair-abu-dhabi" },
  { label: "MacBook Repair Sharjah", to: "/macbook-repair-sharjah" },
  { label: "Data recovery from a broken MacBook (guide)", to: "/blog/data-recovery-broken-macbook-2026" },
] as const;

const FAQS = [
  {
    q: "How much does data recovery cost in Dubai?",
    a: "It depends on why the data cannot be reached: a deleted folder is a very different job from a dead Apple silicon board. The assessment is free, you get a written quote before any paid work, and if nothing is recovered you pay nothing. Partner clean-room work for mechanical drive faults is quoted separately and charged whatever the outcome.",
  },
  {
    q: "Can you recover data from a MacBook that won't turn on?",
    a: "Often, yes. Many Macs that will not power on have a board fault while the storage is fine. On T2 and Apple silicon models we repair the original logic board so the data can be read; if the security chip or the storage is destroyed, it cannot be recovered.",
  },
  {
    q: "Do you need my Mac's password to recover the data?",
    a: "Usually, so bring it. If FileVault was on, the data cannot be read without the login password or the FileVault recovery key, by us, by Apple or by any lab. If you have forgotten it, reset it with your Apple Account where your Mac offers that option, or with the recovery key.",
  },
  {
    q: "Do you recover external hard drives and SSDs?",
    a: "Yes: external SSDs, USB flash drives and 2.5- or 3.5-inch hard drives, including Time Machine drives, with the same free assessment. A hard drive that clicks or will not spin goes to a partner clean room, quoted separately and charged whatever the outcome.",
  },
  {
    q: "Is my data kept private?",
    a: "Yes. We do not browse or copy anything beyond what the recovery needs, our working copy is deleted once you confirm, and an NDA is available on request.",
  },
  {
    q: "Do you offer data recovery in Abu Dhabi?",
    a: "We have no branch in Abu Dhabi, but a free courier collects from Abu Dhabi and Sharjah and returns your device. The work happens at our Dubai Media City workshop once you approve the quote on WhatsApp.",
  },
];

export default function MacDataRecovery() {
  return (
    <AziziMoneyPage
      path={PATH}
      preset={PRESETS["data-recovery"]}
      leadFormDeviceType="MacBook"

      breadcrumb={[
        { name: "Home", path: "/" },
        { name: "MacBook Repair Dubai", path: "/macbook-repair-dubai" },
        { name: "Data Recovery Dubai", path: PATH },
      ]}

      hero={{
        eyebrow: "Data recovery · Macs, SSDs and hard drives · Dubai Media City",
        title: "Data Recovery Dubai: Macs, SSDs and Hard Drives",
        subtitle:
          "Files back from Macs that won't boot, failed SSDs, liquid damage and external drives. Free assessment, a straight answer, and no charge if nothing comes back.",
        timeline: "Given with your written quote",
        image: "/images/real/lab/macbook-pro-internals-topdown-dubai.jpg",
        imageAlt:
          "MacBook Pro opened on the bench at MacBook Repair Dubai, showing the logic board where Apple silicon storage is soldered",
        ctaLabel: "WhatsApp for a free assessment",
      }}

      authorByline={{
        author: "MacBook Repair Dubai workshop team",
        role: "Concord Tower, Dubai Media City",
        reviewer: TECH ? `${TECH.name}, data recovery technician (${TECH.years} years)` : undefined,
        updated: "September 2026",
      }}

      quickAnswer={{
        question: "Where can I get data recovered in Dubai?",
        answer:
          "MacBook Repair Dubai recovers data from Macs, SSDs and external drives at its workshop in Concord Tower, Dubai Media City. The assessment is free, you see a written quote before any paid work, and there is no charge if nothing is recovered. On T2 and Apple silicon Macs, recovery depends on getting the original logic board working.",
      }}

      keyTakeaways={{
        updated: "September 2026",
        lead:
          "MacBook Repair Dubai is an independent workshop in Dubai Media City that recovers data from Macs and the drives used with them.",
        items: [
          "The data recovery assessment is free, and there is no charge if nothing is recovered. Partner clean-room work for mechanical drive faults is quoted separately and charged whatever the outcome.",
          "On T2 and Apple silicon Macs the SSD is encrypted to the Mac's own chip, so recovery means repairing the original logic board; chip-off does not work.",
          "With FileVault on, data cannot be read without the login password or recovery key, by anyone.",
          "Stop using a failing Mac or drive: every restart or save can overwrite what is left.",
        ],
      }}

      whatIs={{
        heading: "Data recovery services in Dubai: what can and cannot come back",
        entityName: "Data recovery",
        definition: (
          <>
            <p>
              A logical failure (deleted files, a formatted drive, a corrupted macOS volume) leaves the storage
              healthy, and files often survive until overwritten. A physical failure (a dead board, a failed SSD,
              liquid damage, a clicking hard drive) must be fixed before any file can be read.
            </p>
            <p>
              On T2 and Apple silicon Macs, encryption decides the outcome: the data can only be read through the
              original, working board. The free assessment tells you which case you are in.
            </p>
          </>
        ),
        benefits: [
          { icon: Search, title: "Free assessment", body: "The failure is found before any quote." },
          { icon: ShieldCheck, title: "No recovery, no charge", body: "Clean-room drive work aside, you pay only when files come back." },
          { icon: Lock, title: "Private by default", body: "One bench, nothing browsed, copy deleted." },
          { icon: Truck, title: "Free collection", body: "Anywhere in Dubai; courier from Abu Dhabi." },
        ],
      }}

      sections={[
        {
          id: "mac-data-recovery",
          heading: "Mac data recovery: MacBook, iMac, Mac mini, Studio and Pro",
          body: (
            <p>
              Older Intel Macs such as 2012–2015 MacBook Pros and pre-2018 MacBook Airs have a removable SSD or
              drive we read on a separate workstation; older iMacs and Mac minis may use a hard drive or Fusion Drive.
              T2 and Apple silicon Macs have soldered storage (below). Details: <InLink to="/macbook-data-recovery-dubai">MacBook data recovery</InLink>,{" "}
              <InLink to="/imac-data-recovery-dubai">iMac data recovery</InLink>,{" "}
              <InLink to="/mac-mini-data-recovery-dubai">Mac mini data recovery</InLink>.
            </p>
          ),
        },
        {
          id: "t2-apple-silicon",
          heading: "T2 and Apple silicon Macs: why the original board matters",
          body: (
            <>
              <p>
                The SSD is encrypted with a key that never leaves the security chip: the T2 on 2018–2020 Intel
                models, the Secure Enclave on Apple silicon. The storage chips alone hold only encrypted data, so
                chip-off does not work, and a board swap ends any chance of recovery: a new board has a new key.
              </p>
              <p>
                Recovery here is component-level board repair, often of a power rail or corrosion, until the Mac
                starts and the data can be copied off. If the security chip or storage
                is destroyed, nobody can recover the data, and we will say so. See{" "}
                <InLink to="/apple-t2-chip-data-recovery-dubai">T2 chip data recovery</InLink>,{" "}
                <InLink to="/macbook-logic-board-repair-dubai">logic board repair</InLink> and{" "}
                <InLink to="/mac-not-turning-on-dubai">Mac not turning on</InLink>; forgotten your password? Read{" "}
                <InLink to="/blog/how-to-recover-macbook-password">how to recover a MacBook password</InLink>.
              </p>
            </>
          ),
        },
        {
          id: "ssd-data-recovery",
          heading: "SSD data recovery: internal and external",
          body: (
            <p>
              When an SSD can be read on its own, as on older Intel Macs and external drives, we image it and work
              from the copy. External SSDs and USB flash drives (Samsung T7,
              WD My Passport SSD, Kingston) get the same free assessment as a Mac. See <InLink to="/ssd-data-recovery-dubai">SSD data recovery</InLink>.
            </p>
          ),
        },
        {
          id: "hard-drive-data-recovery",
          heading: "Hard drive data recovery in Dubai (HDD)",
          body: (
            <p>
              Hard disk recovery covers the drives in older iMacs and Mac minis, the disk half of a Fusion Drive, and
              external 2.5- and 3.5-inch drives, including Time Machine backups. If it spins normally and the fault
              is logical, we recover from an image. A drive that clicks, grinds or will not spin has a
              mechanical fault: power it off and leave it off. Partner clean-room work for mechanical drive faults
              is quoted separately and charged whatever the outcome.
            </p>
          ),
        },
        {
          id: "what-not-to-do",
          heading: "What not to do before data recovery",
          body: (
            <ul>
              <li>Do not keep switching it on; power cycling can finish off a failing drive.</li>
              <li>Do not reinstall macOS or save files to the drive; an SSD can clear deleted data in the background.</li>
              <li>Do not run Disk Utility First Aid again and again on a failing drive.</li>
              <li>Do not put a drive in the freezer; condensation makes it worse.</li>
              <li>Do not open a hard drive. Dust on the platters destroys data.</li>
              <li>
                Do not charge a wet Mac. Follow our <InLink to="/blog/water-damage-macbook-immediate-action">spill steps</InLink>{" "}
                and see <InLink to="/mac-data-recovery-after-water-damage-dubai">data recovery after water damage</InLink>.
              </li>
              <li>Do not let anyone replace a T2 or Apple silicon logic board until your data is off it.</li>
            </ul>
          ),
        },
        {
          id: "near-me",
          heading: "Data recovery near me: Dubai areas and Abu Dhabi",
          body: (
            <p>
              Walk in to Concord Tower, Dubai Media City, or we collect free from anywhere in Dubai.{" "}
              {AREA_LINKS.map((a, i) => (
                <span key={a.to}>
                  <InLink to={a.to}>{a.label.replace("Mac data recovery ", "")}</InLink>
                  {i < AREA_LINKS.length - 2 ? ", " : i === AREA_LINKS.length - 2 ? " and " : ""}
                </span>
              ))}{" "}
              have their own pages. For data recovery in Abu Dhabi or Sharjah, a free courier collects and returns
              your Mac or drive; we have no branch outside Dubai.{" "}
              <WaLink message="Hi, I need data recovery with courier collection. Area: ... Device or drive: ...">
                Book a collection on WhatsApp
              </WaLink>
              .
            </p>
          ),
        },
      ]}

      comparison={{
        eyebrow: "Independent vs Apple",
        headline: "Data recovery here vs sending your Mac to Apple",
        description:
          "We are independent, not an Apple Authorised Service Provider. Apple repairs hardware; it does not recover files.",
        leftLabel: "MacBook Repair Dubai",
        rightLabel: "Apple Store / AASP",
        rows: [
          { feature: "Data recovery", left: "The whole job", right: "Not offered; back up first" },
          { feature: "Dead T2 or Apple silicon board", left: "Original board repaired", right: "Board replaced; data lost with it" },
          { feature: "Assessment", left: "Free, walk in", right: "Reservation recommended" },
          { feature: "If nothing is recovered", left: "No charge", right: "Not applicable: Apple doesn't recover data" },
          { feature: "Older Intel Macs", left: "Worked on while parts exist", right: "Refused once classed obsolete" },
        ],
      }}

      methodology={{
        heading: "How the diagnosis and quote work",
        intro: "Nothing is charged until you approve the quote.",
        steps: [
          { title: "Message us", body: "Send the model or drive and what happened." },
          { title: "Free assessment", body: "We find whether the failure is logical or physical, and whether the board can be revived." },
          { title: "Written quote", body: "The price and what is realistic." },
          { title: "Recover and check", body: "We work from an image where possible and show you the recovered file list before you pay." },
          { title: "Hand back", body: "Files go onto your drive or one we supply; our copy is then deleted. Data work carries a 15-day written warranty." },
        ],
      }}

      showLocation
      showTeam
      showStats

      relatedServices={{ heading: "Data recovery services and related repairs", links: RECOVERY_SERVICES }}

      relatedPosts
      relatedPostsTopics={["data recovery", "ssd"]}

      faqs={{
        heading: "Data recovery Dubai: common questions",
        intro: "Straight answers, including the ones where the answer is no.",
        items: FAQS,
      }}

      sources={{
        heading: "Sources and Apple documentation",
        links: [
          { label: "Apple Platform Security — Volume encryption with FileVault", href: "https://support.apple.com/guide/security/volume-encryption-with-filevault-sec4c6dc1b6e/web", note: "Keys held in the Secure Enclave." },
          { label: "Apple — Mac computers with the Apple T2 Security Chip", href: "https://support.apple.com/en-us/103265", note: "Which Intel Macs have the T2." },
          { label: "Apple — Back up your Mac with Time Machine", href: "https://support.apple.com/en-us/104984", note: "The backup that avoids recovery." },
          { label: "Apple — If you forgot your Mac login password", href: "https://support.apple.com/en-us/102633", note: "Reset with your Apple Account or FileVault recovery key." },
        ],
      }}

      relatedHubs={{ heading: "Other Apple repair hubs", links: RELATED_HUBS }}

      hubLinks={{
        eyebrow: "By area",
        heading: "Mac data recovery across Dubai",
        links: AREA_LINKS,
      }}

      reviews={recoveryReviews}
      reviewsHeading={`Dead and damaged Macs · ${REVIEW_AVERAGE.toFixed(1)} from ${REVIEW_COUNT}+ Google reviews`}

      finalCta={{
        eyebrow: "Before you try anything else",
        headline: "Free assessment, no charge if nothing comes back",
        description:
          "Tell us the device and what happened; we will say honestly what can come back before you commit.",
        primary: { label: "Message us on WhatsApp", href: waHref(WA_MSG) },
        secondary: { label: `Call ${NAP.phoneDisplay}`, href: `tel:${NAP.phoneE164}` },
      }}
    />
  );
}
