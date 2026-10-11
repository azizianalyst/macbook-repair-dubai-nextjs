"use client";
// iPhone Duo (Apple's first foldable iPhone) - STAGED hub, noindex until 23 Oct 2026 (see
// src/app/iphone-duo-repair-dubai/page.tsx). Facts only from docs/apple-lineup-2026-09-26.md:
// Apple newsroom (9 Sep 2026), Gulf News UAE launch coverage, Apple UAE AppleCare+ widget, and
// iFixit's 9 Sep pre-launch opinion piece. There is NO teardown and NO out-of-warranty price yet;
// the page says so and never claims parts are in stock. Re-check both on 23 Oct before publishing.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhoneDuoRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Duo Repair Dubai - Foldable Screen & Hinge Help"
      seoDescription="iPhone Duo repair in Dubai: inner and outer screens, hinge, battery and data. AppleCare+ checked first, free diagnosis. WhatsApp 055 741 3706."
      path="/iphone-duo-repair-dubai"
      eyebrow="iPhone Duo · Apple's first foldable iPhone · UAE stores 23 Oct 2026"
      h1="iPhone Duo Repair Dubai"
      subtitle="Help with Apple's first foldable iPhone: cracked inner or outer screens, hinge problems, battery, liquid damage and data recovery. It is brand new, so we check AppleCare+ first and confirm part availability on WhatsApp before you book."
      startingPrice={0}
      timeline="Free diagnosis same day · part availability confirmed on WhatsApp"
      whatsappPrefill="Hi, I have an iPhone Duo and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Duo",    path: "/iphone-duo-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "screens, batteries and iPhone repair" }}
      serviceName="iPhone Duo Repair Dubai"
      quickAnswer={{
        question: "Can you repair an iPhone Duo in Dubai?",
        answer:
          "We diagnose iPhone Duo faults for free at our Dubai Media City workshop and quote before any work. Apple's first foldable is so new (UAE on-sale date 23 October 2026) that no teardown or Apple out-of-warranty price exists yet, so we confirm parts on WhatsApp. With AppleCare+, Apple lists inner-display damage at AED 349.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The iPhone Duo is Apple&apos;s first foldable iPhone, and we are treating it the way we treat
            every new model: facts first, promises later.</strong> Apple announced it on 9 September 2026. In the UAE,
            pre-orders open on 16 October at 4 p.m. and it is in stores from 23 October, in the first wave of more
            than 70 countries. This page sets out what Apple has confirmed, what is still unknown about repairing it,
            and what we can honestly do for you from day one.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">What Apple has confirmed about the iPhone Duo</h2>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• <strong>Chip:</strong> A20 Pro, the same chip as the iPhone 18 Pro.</li>
            <li>• <strong>Displays:</strong> a 7.6-inch inner display and a 5.4-inch outer display. The inner display has a nano-textured polymer layer.</li>
            <li>• <strong>Build:</strong> a Grade 5 titanium frame and hinge cover, Ceramic Shield 2 on the front and a Ceramic Shield back.</li>
            <li>• <strong>Water resistance:</strong> rated IP68.</li>
            <li>• <strong>UAE dates:</strong> pre-orders from 16 October 2026 (4 p.m. UAE time); in stores from 23 October 2026.</li>
            <li>• <strong>UAE price:</strong> Apple lists it from AED 8,499; the top configuration is about AED 13,599, per Gulf News.</li>
          </ul>
          <p className="text-[14px] text-text-muted mb-lg">
            Sources: Apple&apos;s iPhone Duo announcement (9 September 2026) and UAE launch coverage. Earlier rumours
            quoted 7.7-inch and 5.3-inch screens; Apple&apos;s own figures are 7.6 and 5.4 inches.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the iPhone Duo repairable? What we know and what we don&apos;t</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            No teardown of a retail iPhone Duo has been published, so there is no repairability score, and we will
            not guess one. A &quot;2/10&quot; figure has circulated in search summaries, but it could not be traced to
            any teardown, so ignore it. What does exist is a pre-launch opinion piece from iFixit, which says it is
            sceptical and flags three concerns:
          </p>
          <ul className="space-y-1 text-[15px] mb-md">
            <li>• dust getting into the hinge;</li>
            <li>• the effort needed to replace the inner screen;</li>
            <li>• glued batteries.</li>
          </ul>
          <p className="text-[15px] leading-relaxed mb-lg">
            Those are concerns, not findings. Until someone opens a retail unit, nobody outside Apple knows how the
            inner screen, hinge or battery come out, which is why we confirm every Duo repair on WhatsApp before you
            travel to us.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Inner screen, outer screen and hinge: how we handle each</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            On a foldable, the two screens are separate jobs. The 5.4-inch outer display sits under Ceramic Shield 2.
            The 7.6-inch inner display folds and carries a nano-textured polymer layer, and it is the part iFixit&apos;s
            pre-launch piece singles out as the hard one to replace. Our approach until parts and a teardown exist:
          </p>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Inner screen damage</strong> (lines, dead areas, touch faults, damage along the fold): send
              photos and a short video on WhatsApp first.
              If you have AppleCare+, Apple lists inner-display damage at AED 349, and that is usually the route we will point you to.</li>
            <li>• <strong>Outer screen cracks:</strong> we confirm part availability before you visit.
              With AppleCare+, Apple lists front-display damage at AED 99.</li>
            <li>• <strong>Hinge stiffness, grit or noise:</strong> we inspect it, tell you honestly whether it is
              something we can address, and send you to Apple when it is not.</li>
            <li>• <strong>Won&apos;t power on, liquid exposure or data at risk:</strong> free diagnosis and, where needed,{" "}
              <Link to="/iphone-data-recovery-dubai" className="text-accent underline underline-offset-2 hover:no-underline">iPhone data recovery</Link>,
              the same board-level work we do on other A-series iPhones.</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">AppleCare+ or pay per repair?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Apple has not published an out-of-warranty repair price for the iPhone Duo yet.
            Apple lists its AppleCare+ service fees in the UAE, excluding VAT: AED 99 for front-display or back-glass damage, AED 349 for the inner display or other accidental damage, and AED 0 for a battery service.
            On a first-generation foldable, those numbers make AppleCare+ worth serious thought. If you have it, Apple is usually the right
            first stop, and we will tell you so after a free serial-number check. We are an independent workshop, not
            an Apple Authorised Service Provider, and we have no stake in selling you cover.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Protecting a new iPhone Duo in Dubai</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Until the first repair data comes in, prevention is the best repair. Keep the phone out of sand and beach
            bags, where grit can reach a hinge. Close it before it goes into a pocket with keys or coins. Do not fit
            screen protectors to the inner display unless they are made for it. And if it gets wet, power it down and
            message us rather than charging it. For the non-foldable Pro models, see{" "}
            <Link to="/iphone-18-pro-repair-dubai" className="text-accent underline underline-offset-2 hover:no-underline">iPhone 18 Pro repair</Link>.
          </p>
        </>
      }
      whatWeFix={[
        "Free diagnosis, plus an Apple warranty and AppleCare+ check",
        "Outer 5.4-inch screen cracks, with part availability confirmed first",
        "Inner 7.6-inch screen faults, assessed from photos before you visit",
        "Hinge stiffness, grit or noise: inspection and honest advice",
        "Battery and charging faults",
        "Liquid exposure assessment",
        "Data recovery from an iPhone Duo that will not start",
      ]}
      steps={[
        { title: "WhatsApp us",        body: "Send photos or a short video of the fault. We confirm what is possible and whether a part exists before you visit." },
        { title: "Warranty check",     body: "Free serial-number check. If Apple warranty or AppleCare+ covers it, we tell you to go to Apple." },
        { title: "Diagnose + quote",   body: "Free diagnosis and a written quote. Nothing is opened until you approve it." },
        { title: "QC + return",        body: "Both displays, touch, hinge action, cameras and charging tested before the phone goes back to you." },
      ]}
      warrantyDays={365}
      warrantyHeadline
      warrantyBullets={[
        "Screens: 90 days on the part and the fitting.",
        "Batteries: 3 months, with an 80% capacity guarantee.",
        "Other hardware: up to 12 months.",
        "Board, liquid-damage, software and data work: 15 days.",
      ]}
      faqs={[
        {
          q: "Can you repair the iPhone Duo in Dubai?",
          a: "We can diagnose it, check warranty and AppleCare+ status, recover data and quote any repair. The iPhone Duo's UAE on-sale date is 23 October 2026 and no teardown exists yet, so we confirm part availability on WhatsApp first and will not promise a screen or hinge repair until the part is in hand.",
        },
        {
          q: "How much does an iPhone Duo inner screen replacement cost?",
          a: "Apple has not published an out-of-warranty price for it yet. With AppleCare+, Apple lists inner-display damage at AED 349, excluding VAT, which is why we suggest checking your cover first. Without AppleCare+, we quote on WhatsApp once a replacement part and a price exist.",
        },
        {
          q: "Is the iPhone Duo waterproof?",
          a: "Apple rates the iPhone Duo IP68. That rating applies to a sealed, undamaged phone. Once any phone has been opened for repair, by anyone, water resistance cannot be guaranteed, so treat a repaired foldable carefully around water and never charge it while wet.",
        },
        {
          q: "What is the iPhone Duo made of?",
          a: "Apple says the iPhone Duo has a Grade 5 titanium frame and hinge cover, Ceramic Shield 2 on the front and a Ceramic Shield back. The inner display is 7.6 inches with a nano-textured polymer layer, the outer display is 5.4 inches, and the chip is the A20 Pro.",
        },
        {
          q: "How repairable is the iPhone Duo?",
          a: "Nobody knows yet. No teardown of a retail unit has been published, so there is no repairability score. iFixit's pre-launch opinion raised concerns about dust in the hinge, the effort of replacing the inner screen, and glued batteries. We will update this page when a real teardown appears.",
        },
        {
          q: "Should I buy AppleCare+ for an iPhone Duo?",
          a: "For a first-generation foldable, it deserves serious thought. Apple's published AppleCare+ fees in the UAE are AED 99 for front-display damage and AED 349 for the inner display, before VAT, and there is no out-of-warranty price yet. As an independent workshop, we have nothing to gain from you buying it.",
        },
      ]}
      reviewNames={["Wellington Academy", "Tim Quick"]}
      related={[
        { label: "iPhone 18 Pro Repair",       href: "/iphone-18-pro-repair-dubai",  description: "Same A20 Pro chip, with a published teardown and Apple prices." },
        { label: "iPhone Data Recovery Dubai", href: "/iphone-data-recovery-dubai",  description: "Get photos and files off an iPhone that will not start." },
        { label: "iPhone Repair Dubai",        href: "/iphone-repair-dubai",         description: "Every current iPhone model, one hub." },
      ]}
    />
  );
}
