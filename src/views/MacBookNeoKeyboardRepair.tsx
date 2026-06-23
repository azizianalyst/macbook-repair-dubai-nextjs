"use client";
// MacBook Neo keyboard repair spoke (L5) - Magic Keyboard scissor-switch, Touch ID, March 2026.
// Individual key cap replacement from AED 300. Top-case from AED 500. Check AppleCare+ first.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacBookNeoKeyboardRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Keyboard Repair Dubai - Magic Keyboard + Touch ID from AED 300"
      seoDescription="MacBook Neo keyboard repair Dubai from AED 300. Magic Keyboard with Touch ID (A18 Pro model, 2026). Individual key cap replacement or top-case. Check AppleCare+ first. Call 055 741 3706."
      path="/macbook-neo-keyboard-repair-dubai"
      eyebrow="Magic Keyboard · Touch ID · A18 Pro · 2026"
      h1="MacBook Neo Keyboard Repair Dubai"
      subtitle="MacBook Neo uses the same Magic Keyboard scissor-switch design Apple introduced on the MacBook Air M1. Individual key cap replacement from AED 300. Top-case replacement from AED 500. Likely under AppleCare+."
      startingPrice={300}
      timeline="Same day (key cap) · 2-3 days (top-case)"
      whatsappPrefill="Hi, I need MacBook Neo keyboard repair:"
      breadcrumb={[
        { name: "Home",               path: "/" },
        { name: "MacBook Repair",     path: "/macbook-repair-dubai" },
        { name: "MacBook Neo Repair", path: "/macbook-neo-repair-dubai" },
        { name: "Keyboard Repair",    path: "/macbook-neo-keyboard-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook and A-chip board-level repair" }}
      serviceName="MacBook Neo Keyboard Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            MacBook Neo ships with Apple's <strong>Magic Keyboard using scissor-switch mechanisms</strong> - the
            same keyboard architecture introduced on the MacBook Air M1 in 2020 and continued on the M2, M3, and M4 Air.
            Each key sits on a butterfly-free scissor mechanism that provides 1mm of travel and a satisfying click.
            The power button doubles as a <strong>Touch ID fingerprint sensor</strong> and the full keyboard
            includes backlighting.
          </p>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">Common keyboard issues on a 6-month-old Neo</h3>
            <p className="text-[15px] mb-sm">
              The MacBook Neo is a popular choice with students, and the most frequent keyboard complaint in the
              first 6 months is a <strong>key cap that popped off</strong> - either from aggressive typing or
              pulling the keycap when something got stuck under it. The scissor mechanism clip can break when
              the cap is removed without care. This is a straightforward same-day repair from AED 300.
            </p>
            <p className="text-[15px]">
              Spill damage is the second most common cause. If liquid reached the keyboard, bring it in within
              24 hours. We clean the affected keys and test all switches before quoting a top-case replacement.
              At 6 months old, the machine is almost certainly still under Apple's 1-year warranty - we check
              warranty status first on every visit.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">Key cap vs top-case: what is the difference?</h2>
          <p className="text-[15px] mb-md text-text-muted">
            <strong>Key cap and clip replacement (AED 300):</strong> When a single key has popped off or the
            scissor clip is broken but the underlying switch is functional, we replace just the cap and clip.
            Same day, no data risk.
          </p>
          <p className="text-[15px] mb-md text-text-muted">
            <strong>Top-case replacement (AED 500):</strong> When a spill has damaged multiple switches, the
            backlight layer, or the trackpad mechanism that lives in the same assembly, the entire top-case
            (keyboard + trackpad + palm rest) is replaced as a single unit. This is a 2 to 3 day job. All data
            stays on the logic board - your files are untouched.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">MacBook Neo vs MacBook Air M2 keyboard - repair comparison</h2>
          <p className="text-[15px] mb-md text-text-muted">
            The Neo and the Air M2/M3 use scissor-switch keyboards with the same 1mm travel and the same backlight
            layer. The key difference is the chassis: the Neo uses a slightly different top-case form factor sized
            for its 12.9-inch footprint. Individual key caps from the Air M2 are not direct swap-ins, but the
            repair technique is identical. See also the{" "}
            <Link to="/macbook-air-keyboard-repair-dubai" className="text-accent hover:underline">
              MacBook Air keyboard repair
            </Link>{" "}
            page for Air-specific pricing.
          </p>
        </>
      }
      whatWeFix={[
        "Individual key cap and scissor clip replacement - AED 300",
        "Sticky or unresponsive keys - switch cleaning or cap replacement",
        "Spill-damaged individual keys - ultrasonic clean + key swap",
        "Keyboard backlight failure - layer inspection or top-case",
        "Touch ID power button replacement",
        "Full top-case replacement (severe spill or multi-key failure) - AED 500",
      ]}
      steps={[
        {
          title: "Key inspection and quote",
          body: "We test every key on the keyboard and map the damage before quoting. A single popped cap is AED 300. Multi-key failure or backlight damage is quoted for top-case. Apple warranty checked at this step - if covered, no charge.",
        },
        {
          title: "Key cap / clip or top-case replacement",
          body: "Single cap: cap and scissor clip replaced under magnification. Top-case: logic board transferred to new top-case, all cables reconnected, trackpad calibrated.",
        },
        {
          title: "Full keyboard test",
          body: "Every key tested for actuation, travel and registration. Backlight uniformity checked. Touch ID fingerprint enrolment confirmed. Written 3-month warranty on the replaced parts.",
        },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "3 months on key cap, clip, or top-case replacement",
        "Sticky key recurrence within warranty fixed free",
        "Touch ID button: fingerprint registration covered for 3 months",
        "Spill damage after repair is not covered",
        "Claim: WhatsApp warranty card photo for free collection",
      ]}
      faqs={[
        {
          q: "Can individual keys be replaced on MacBook Neo?",
          a: "Yes. The MacBook Neo uses a scissor-switch keyboard, which means each key has a replaceable cap and a plastic scissor mechanism clip. If a key cap has popped off or the clip is broken, we replace just that cap and clip - same day, AED 300. This is much more cost-effective than a full top-case if only one or two keys are affected.",
        },
        {
          q: "Is MacBook Neo keyboard the same as MacBook Air M2?",
          a: "Very similar in design. Both use Apple's Magic Keyboard with the same 1mm scissor-switch travel and backlight layer. The Neo's top-case is a different part number sized for the Neo chassis, so key caps are not direct cross-compatible at the part level. Repair technique is identical, and the typing feel is the same. Neither model has a separate Touch ID key. On both the Neo and the MacBook Air M2, Touch ID is built into the power button.",
        },
        {
          q: "My MacBook Neo Touch ID stopped working - is it the keyboard or logic board?",
          a: "In most cases it is the keyboard assembly, specifically the Touch ID power button which contains the fingerprint sensor. On A-chip and M-chip Macs, Touch ID is managed partly in the Secure Enclave on the logic board, but the physical sensor is in the keyboard. If Touch ID fails after a drop or spill, we test the button first. If the button tests clean and Touch ID still does not register, we diagnose the logic board Secure Enclave connection - free as part of the same visit.",
        },
        {
          q: "How does MacBook Neo keyboard repair cost compare to a full top-case?",
          a: "Individual key cap and clip replacement: AED 300, same day. Full top-case replacement (keyboard, trackpad and palm rest as a single assembly): AED 500, 2 to 3 days. Top-case is recommended when a spill has damaged more than 3 to 4 keys or when the backlight layer is non-functional. If only one or two keys are affected, individual replacement is always the right first step.",
        },
      ]}
      reviewNames={["Marianne Chehade El Dfouni", "Binod Shrestha"]}
      related={[
        {
          label: "MacBook Neo Repair Dubai",
          href: "/macbook-neo-repair-dubai",
          description: "All MacBook Neo repairs - screen, battery, ports, water damage.",
        },
        {
          label: "MacBook Neo Screen Repair Dubai",
          href: "/macbook-neo-screen-repair-dubai",
          description: "12.9-inch Liquid Retina screen replacement from AED 650.",
        },
        {
          label: "MacBook Air Keyboard Repair Dubai",
          href: "/macbook-air-keyboard-repair-dubai",
          description: "Magic Keyboard repair for MacBook Air M1 through M4 from AED 300.",
        },
      ]}
      blogLink={{ label: "MacBook Neo: Worth Buying in 2026?", href: "/blog/macbook-neo-worth-buying-2026" }}
    />
  );
}
