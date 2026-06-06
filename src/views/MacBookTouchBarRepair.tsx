"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookTouchBarRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Touch Bar Repair Dubai - AED 600 | Dead Strip Fixed"
      seoDescription="MacBook Pro Touch Bar repair Dubai. Dead strip, flickering, half-lit, ghost touches, Touch ID at the end not working. AED 600, 1-2 days. WhatsApp 055 741 3706."
      path="/macbook-touch-bar-repair-dubai"
      eyebrow="MacBook Touch Bar repair"
      h1="MacBook Touch Bar Repair Dubai"
      subtitle="Dead strip, flickering, half the bar lit, or ghost taps firing on their own. The Touch Bar is replaceable on every 2016-2022 Pro that has one. From AED 600, most done in 1-2 days."
      startingPrice={600}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook Pro Touch Bar has a problem - model year and symptom:"
      breadcrumb={[
        { name: "Home",            path: "/" },
        { name: "MacBook Repair",  path: "/" },
        { name: "Touch Bar Repair", path: "/macbook-touch-bar-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 21, specialisation: "MacBook board-level & Touch Bar repair" }}
      serviceName="MacBook Touch Bar Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            The <strong>Touch Bar</strong> is the slim OLED strip above the keyboard on the 2016-2019 MacBook Pro 13″ and 15″, plus the 13″ M1 and M2. Apple dropped it on the 14″ and 16″, so if you've got one of those, the issue is something else and we'll tell you straight. When a Touch Bar fails it usually goes dark in patches, flickers, freezes on one app's controls, or starts registering taps nobody made. The strip is a bonded OLED with its own flex cable, and on most of these models it can be replaced on the bench. Touch Bar repair starts at <strong>AED 600</strong>, including the part, labour and a 90-day warranty.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            One thing to flag — on a lot of these units the Touch Bar shares its flex with the keyboard and the Touch ID sensor at the right end. We open it, find out whether it's the strip, the cable or the board controller, and quote before anything is swapped. We've worked Apple hardware at Concord Tower, Dubai Media City since 2004, and the Touch Bar Pros are some of the most common boards on the bench.
          </p>
        </>
      }
      whatWeFix={[
        "Touch Bar completely dark / no backlight",
        "Half the strip lit, the other half black",
        "Flickering or random brightness changes",
        "Frozen on one app's controls, won't update",
        "Ghost taps - volume or brightness changing on their own",
        "Touch ID at the right end not responding",
        "Touch Bar dead after a liquid spill",
        "Esc key or function row unresponsive",
      ]}
      steps={[
        { title: "Bench diagnosis", body: "We confirm whether it's the OLED strip, the flex cable, or the controller on the logic board. Free, before any quote." },
        { title: "Quote on WhatsApp", body: "Written price before a screwdriver moves. 80% of Touch Bar jobs land at the AED 600 mark; board-level controller faults are quoted separately." },
        { title: "Replace and reseal", body: "New Touch Bar assembly fitted, flex reseated, Touch ID checked, top case closed up properly with fresh adhesive where needed." },
        { title: "Full function test", body: "Every zone of the strip tested - brightness, volume, Esc, app controls and Touch ID enrolment - before it leaves the bench." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers the Touch Bar strip, its flex cable and the fit.",
        "Excludes new liquid contact after delivery.",
        "Free re-fit if the same fault returns inside 90 days.",
      ]}
      faqs={[
        { q: "Can you fix just the Touch Bar without replacing the whole keyboard?", a: "On most 2016-2019 Pros, yes - the Touch Bar comes off as its own assembly and we replace just that. On a few units it's bonded to the top case with the keyboard, and then it's a top-case job. We open it first and tell you which one you've got before quoting. No-fix-no-charge on the diagnosis." },
        { q: "Why does my Touch Bar show ghost taps and change volume on its own?", a: "That's almost always a failing flex cable or moisture under the strip. The digitiser reads phantom touches as the signal degrades. Replacing the Touch Bar assembly clears it. If a spill caused it, we check the board for corrosion at the same time so it doesn't come back." },
        { q: "How much does Touch Bar repair cost in Dubai?", a: "From AED 600 for the strip replacement on the 13″ and 15″ Pro, parts and labour included, VAT-inclusive. If the fault is the Touch Bar controller on the logic board rather than the strip itself, that's a board-level repair and we quote it after diagnosis - usually still under what Apple charges for a full top-case swap." },
        { q: "Will Touch ID still work after the repair?", a: "Yes, when the fault is the strip. The Touch ID sensor sits at the right end and is paired to your logic board - we keep your original sensor wherever possible so enrolment stays intact. If the sensor itself is damaged, see our Touch ID repair page; pairing on T2 Macs can need an extra step." },
        { q: "Do you repair the Touch Bar on the 14″ or 16″ MacBook Pro?", a: "Those models don't have a Touch Bar - Apple replaced it with physical function keys from the M1 Pro generation onward. If your function row isn't working on a 14″ or 16″, it's a keyboard or board fault. WhatsApp the model and we'll point you to the right fix." },
        { q: "How long does it take?", a: "Most Touch Bar swaps are done in 1-2 days once the part's in hand, and we stock the common 13″ and 15″ strips. Board-level controller repairs run 2-4 days. Free pickup and delivery across Dubai mainland, so you don't need to come to Media City yourself." },
      ]}
      reviewNames={["Lloyd Stevens", "Daniel Layzell", "Akshay Dalal"]}
      related={[
        { label: "MacBook Keyboard Repair",   href: "/macbook-keyboard-repair-dubai",   description: "Full deck replacement from AED 350." },
        { label: "MacBook Touch ID Repair",   href: "/macbook-touch-id-repair-dubai",   description: "Fingerprint sensor and power button." },
        { label: "MacBook Logic Board Repair", href: "/macbook-logic-board-repair-dubai", description: "Touch Bar controller faults, board-level." },
      ]}
      blogLink={{ label: "MacBook Touch Bar not working? Here's what's going on", href: "/blog/macbook-touch-bar-not-working" }}
    />
  );
}
