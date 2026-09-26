"use client";
// MacBook Neo keyboard repair spoke. Facts only from docs/apple-lineup-2026-09-26.md:
// iFixit - keyboard replaceable but takes 41 screws; display/trackpad/battery/Touch ID swap without
// parts-pairing warnings; pentalobe screws. Owner reports - no keyboard backlight, no Touch ID on
// the base model (design limits, not faults). Apple UAE AppleCare+ fee for other accidental damage.
// NB: the old copy claimed backlighting and a top-case swap - both removed as unverified/wrong.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoKeyboardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Keyboard Repair Dubai - Stuck Keys & Spills"
      seoDescription="MacBook Neo keyboard repair in Dubai: stuck or missing keys, spills and full keyboard replacement. Free diagnosis, warranty checked first. WhatsApp us."
      path="/macbook-neo-keyboard-repair-dubai"
      eyebrow="MacBook Neo · keyboard · 41-screw replacement"
      h1="MacBook Neo Keyboard Repair Dubai"
      subtitle="Stuck, missing or dead keys, or a keyboard that stopped working after a spill? We fix MacBook Neo keyboards at our Dubai Media City workshop, trying the simple fixes before a full replacement."
      startingPrice={0}
      timeline="Free diagnosis same day · keyboard replacement time confirmed with your quote"
      whatsappPrefill="Hi, I need a MacBook Neo keyboard repair:"
      breadcrumb={[
        { name: "Home",               path: "/" },
        { name: "MacBook Repair",     path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "Keyboard Repair",    path: "/macbook-neo-keyboard-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook screens, batteries and water damage" }}
      serviceName="MacBook Neo Keyboard Repair Dubai"
      quickAnswer={{
        question: "Can you repair a MacBook Neo keyboard in Dubai?",
        answer:
          "Yes. We fix stuck or missing keys and replace MacBook Neo keyboards after spills. iFixit found the keyboard is replaceable, but it takes 41 screws, so a full replacement is labour-heavy and we try cleaning or single-key fixes first. The Neo has no keyboard backlight by design, so a dark keyboard is not a fault.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>The MacBook Neo&apos;s keyboard can be replaced on its own, but iFixit&apos;s teardown counted 41
            screws to do it.</strong> That shapes how we approach every Neo keyboard fault. A full keyboard replacement
            is a lot of labour, so we rule out the cheaper fixes first: debris under a key, a cap that has come off, a
            small spill that cleaning can reverse. Only then do we quote the whole keyboard, and we tell you which of
            those it is before any work starts.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Two things that are not faults</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            Two of the most common MacBook Neo owner complaints are design choices, not repairs:
          </p>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>No keyboard backlight.</strong> The Neo&apos;s keys do not light up. If yours are dark, the
              keyboard is working as Apple designed it.</li>
            <li>• <strong>No Touch ID on the base model.</strong> Only some configurations have Touch ID. If yours never
              had it, there is nothing to repair.</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Stuck, missing or dead keys</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            A key that sticks, double-types or has stopped registering is usually debris or a damaged key mechanism,
            not a failed keyboard. We inspect it under magnification and clean it first. If a cap has come off, we
            check whether the cap and its clip are intact enough to refit; if they are not, we confirm on WhatsApp
            whether a single-key part is available for the Neo before suggesting anything larger. When several keys
            or a whole row fail together, the fault is more likely the keyboard itself or its connection, and a
            replacement becomes the honest answer.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Spills on a MacBook Neo keyboard</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Switch the Neo off, do not charge it, and turn it upside down to drain. Liquid that gets past the keyboard
            reaches the logic board, and corrosion keeps working while there is power. Bring it in the same day if you
            can. We open it, check the board as well as the keyboard, and clean before we decide what needs
            replacing. If the board is affected, see{" "}
            <Link to="/macbook-neo-a18-repair-dubai" className="text-accent hover:underline">MacBook Neo A18 Pro repair</Link>{" "}
            and{" "}
            <Link to="/macbook-water-damage-repair-dubai" className="text-accent hover:underline">MacBook water damage repair</Link>.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Touch ID and the trackpad</h2>
          <p className="text-[15px] leading-relaxed mb-md">
            On models that have Touch ID, iFixit found the Touch ID sensor can be swapped without parts-pairing
            warnings, and so can the trackpad. So a failed Touch ID button or a dead trackpad does not automatically
            mean a new keyboard: we test them separately and replace only what has failed. More on{" "}
            <Link to="/macbook-touch-id-repair-dubai" className="text-accent hover:underline">MacBook Touch ID repair</Link>.
          </p>
          <p className="text-[15px] leading-relaxed mb-lg">
            Warranty first: a keyboard that fails on its own inside Apple&apos;s one-year warranty is Apple&apos;s to
            fix, and the Neo only went on sale on 11 March 2026. A spill is accidental damage, which the standard
            warranty does not cover; with AppleCare+, Apple lists other accidental damage on the Neo at AED 579, excluding VAT.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">What to try first, and what to expect on time</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            Before booking, plug in a USB keyboard. If it types normally, macOS is fine and the fault is in the
            built-in keyboard. If it misbehaves too, the problem is more likely software, and a restart or a look
            through the Keyboard settings may fix it for free. Keyboard work does not touch the soldered storage, so
            your files stay in place, though we still suggest a backup first. Cleaning or refitting a key is usually
            quick. A full 41-screw replacement depends on the part reaching us, so we give you a realistic turnaround
            with the quote instead of guessing.
          </p>
        </>
      }
      whatWeFix={[
        "Stuck, sticky or double-typing keys (cleaned first)",
        "Missing key caps: refit or single-key replacement where the part exists",
        "Rows or groups of dead keys",
        "Keyboard damaged by a spill (with a board check)",
        "Full keyboard replacement (a 41-screw job)",
        "Touch ID button faults on models that have Touch ID",
      ]}
      steps={[
        { title: "Photo or video on WhatsApp", body: "Show us which keys fail. We tell you whether it looks like debris, a key or the whole keyboard." },
        { title: "Free diagnosis",             body: "Every key tested, plus an Apple warranty check. Factory faults inside warranty go to Apple." },
        { title: "Cheapest fix first",         body: "Clean, refit or single key where possible; a full keyboard only when nothing smaller will do." },
        { title: "Test + return",              body: "Every key tested for travel and registration, plus Touch ID on models that have it." },
      ]}
      warrantyDays={15}
      warrantyBullets={[
        "15 days on keyboard work, as set out in our warranty policy.",
        "Free re-diagnosis if the same fault returns within the warranty period.",
        "New spills or physical damage after the repair are not covered.",
        "Written on your invoice.",
      ]}
      faqs={[
        {
          q: "Can a single key be fixed on a MacBook Neo?",
          a: "Often, yes. Sticky or unresponsive keys are usually debris, which we clean. A cap that has come off can be refitted if its clip is intact. If it is broken, we confirm on WhatsApp whether a single-key part is available for the Neo before suggesting a full keyboard replacement.",
        },
        {
          q: "Why doesn't my MacBook Neo keyboard light up?",
          a: "The MacBook Neo has no keyboard backlight. It is one of the most common owner complaints, but it is a design choice rather than a fault, so there is nothing to repair. The base model also has no Touch ID, for the same reason.",
        },
        {
          q: "How hard is it to replace a MacBook Neo keyboard?",
          a: "It can be replaced on its own, which is good, but iFixit's teardown counted 41 screws to do it. That makes it labour-heavy, so we only recommend a full keyboard when cleaning or a single-key fix will not solve the problem.",
        },
        {
          q: "I spilled a drink on my MacBook Neo. What should I do?",
          a: "Switch it off straight away, do not charge it, and turn it upside down to drain. Bring it in the same day if you can. Liquid that gets past the keyboard reaches the logic board, so we check the board as well as the keys before quoting.",
        },
        {
          q: "Is a MacBook Neo keyboard fault covered by Apple?",
          a: "A keyboard that fails on its own is covered by Apple's one-year limited warranty, and most Neos are still inside it. Spills are accidental damage and need AppleCare+; Apple lists other accidental damage on the Neo at AED 579, excluding VAT. We check your coverage for free.",
        },
      ]}
      reviewNames={["Saeed Alam", "E. Saey Debrus"]}
      related={[
        { label: "MacBook Neo Repair Dubai",         href: "/macbook-neo-repair-dubai",          description: "Every MacBook Neo repair in one place." },
        { label: "MacBook Neo A18 Pro Repair",       href: "/macbook-neo-a18-repair-dubai",      description: "Board-level work after spills and power faults." },
        { label: "MacBook Keyboard Repair Dubai",    href: "/macbook-keyboard-repair-dubai",     description: "Keyboard repair for every MacBook Air and Pro." },
      ]}
      blogLink={{ label: "MacBook Neo: worth buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
