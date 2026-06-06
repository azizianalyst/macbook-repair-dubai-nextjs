"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IPadScreenRepair() {
  return (
    <DevicePageTemplate
      family="ipad"
      seoTitle="iPad Screen Repair Dubai - From AED 350 | Pencil-Compatible | Same-Day"
      seoDescription="iPad screen repair Dubai. Laminated displays for iPad, Air, Mini, Pro 11 and Pro 13. Apple Pencil layer preserved. From AED 350. Call 055 741 3706."
      path="/ipad-screen-repair-dubai"
      eyebrow="iPad screen repair"
      h1="iPad Screen Repair Dubai"
      subtitle="Cracked glass, dead touch, lines on the panel. Laminated displays replaced with the Pencil digitiser intact. From AED 350, most jobs same day."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, my iPad screen is broken - model:"
      technician={{ name: "Shafeeq", years: 12, specialisation: "iPad & MacBook display specialist" }}
      serviceName="iPad Screen Repair"
      pricingRows={[
        { model: "iPad (9th / 10th / 11th gen)",  price: 350, timeline: "Same day" },
        { model: "iPad mini (6 / 7)",             price: 450, timeline: "Same day" },
        { model: "iPad Air (4 / 5 / 6 / 7)",      price: 500, timeline: "Same day" },
        { model: "iPad Pro 11\" (M1 / M2 / M4)",  price: 700, timeline: "1 day" },
        { model: "iPad Pro 13\" (M2 / M4 tandem-OLED)", price: 900, timeline: "1 day" },
        { model: "iPad 5 / 6 / 7 / 8 (older)",    price: 350, timeline: "Same day" },
      ]}
      pricingCaption={`Pro 13" tandem-OLED is a controlled order - pricing confirmed before bench work.`}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iPad screens are not iPhone screens. They are <strong>fully laminated</strong> - glass, touch digitiser and LCD or OLED bonded as one unit. That changes the repair: there is no "glass-only" swap on a modern iPad. The whole assembly is replaced and the Apple Pencil layer is calibrated back into place.
          </p>
          <p className="text-[16px] text-on-primary-muted leading-relaxed">
            We quote the part you actually need, not a worst-case price. iPad 9 with cracked glass and clean LCD is AED 350. iPad Pro 13 with the tandem-OLED panel is AED 900 because the part is AED 700+ at trade. You see both numbers before we open the device.
          </p>
        </>
      }
      problems={[
        { title: "Cracked glass, touch still works", body: "Spider-web cracks across the front but the screen still responds. On laminated iPads (Air 2 onwards) glass-only is not safe. Full assembly swap. Same day on iPad, Mini, Air." },
        { title: "Black screen, iPad still on", body: "You hear notifications but the panel stays dark. Backlight failure on LCD models or OLED driver fault on Pro 13. Display swap, not logic-board work." },
        { title: "Apple Pencil skips or misses", body: "Pencil works on a small area and dies elsewhere. Digitiser damage from a drop. Replacement screen brings full Pencil tracking back." },
        { title: "Vertical lines or pink tint", body: "Display flex cable damaged near the hinge or impact bruise on the panel. Screen replacement, not a software fix." },
        { title: "Touch dead zone or ghost touches", body: "Strip across the bottom won't respond, or the keyboard types on its own. Digitiser fault. Same day on most models." },
        { title: "True Tone gone after a previous repair", body: "Bring it back. We pair the new display so True Tone, auto-brightness and ambient sensors all keep working - most third-party screens skip this step." },
      ]}
      steps={[
        { title: "WhatsApp the model", body: "Send a photo plus the model number from Settings → General → About. Quote back in minutes." },
        { title: "Free pickup", body: "Driver collects from home, office or hotel. Dubai mainland, no charge." },
        { title: "Bench diagnosis", body: "Confirm whether it is glass-only, full assembly or a deeper LCD-to-board issue. You approve before any work." },
        { title: "Replacement", body: "Heat-strip the bezel, lift the old assembly, transfer brackets, install new screen, reseal with fresh adhesive." },
        { title: "Calibration & QC", body: "Pair display, recalibrate Pencil, run touch grid test, brightness, True Tone, ambient sensors. Sign QC sheet." },
        { title: "Free delivery", body: "Back to you the same day with a 30-day written warranty card." },
      ]}
      warrantyDays={30}
      warrantyBullets={[
        "Covers display assembly, touch, Pencil response and adhesive seal.",
        "Excludes new physical damage (a fresh drop after the repair).",
        "Free re-fit if any cosmetic gap appears in the first 30 days.",
      ]}
      comparisonRows={[
        ["Starting price",        "AED 350",                         "AED 1,200+ (whole-unit swap on most models)"],
        ["Same-day option",       "Yes, on iPad, Mini, Air",         "No - usually 5-7 days"],
        ["Pickup & delivery",     "Free, Dubai mainland",            "Drop in to Mall of Emirates yourself"],
        ["Pencil calibration",    "Included on every job",           "Included"],
        ["True Tone preserved",   "Yes - display pairing done",      "Yes"],
        ["Data on the device",    "Stays put, never wiped",          "Often replaced unit, data restore needed"],
        ["Warranty",              "30 days written, dated",          "90 days on the new unit"],
      ]}
      faqs={[
        { q: "Can you replace just the broken glass on my iPad?", a: "On iPad 2, 3 and 4 yes - those have a separate glass layer. On any laminated iPad (Air 2 onwards, all Pro models, iPad 5+), the glass and LCD are fused. Trying to split them cracks the LCD. We replace the full assembly. Honest answer, every time." },
        { q: "Will Apple Pencil still work after the repair?", a: "Yes. The digitiser inside the new assembly carries the same Pencil tech. We test pressure, tilt and palm rejection on the bench before delivery. If anything is off, we re-do it free." },
        { q: "Do you use original Apple screens?", a: "We offer two grades: original-pulled (from new but cosmetically blemished iPads) and high-grade compatible. Both are quoted upfront. Original-pulled costs more and is the choice for Pro models." },
        { q: "How long does an iPad Pro 13-inch screen take?", a: "1 working day. The tandem-OLED panel is ordered confirmed against your serial number - we don't keep stock of every variant. Standard iPad and iPad Air are same day from the workshop." },
        { q: "My iPad screen is lifting after a repair somewhere else. Can you fix it?", a: "Yes - we re-do other shops' work weekly. Usually a missing adhesive frame or wrong bracket transfer. We strip the assembly, install fresh adhesive and seat it correctly. Quote based on what we find." },
        { q: "Will True Tone still work?", a: "Yes. We pair the new display to the iPad so True Tone, auto-brightness and the ambient light sensor stay live. Many cheap shops skip this step - that's why their screens look flat." },
        { q: "What about the warranty if the iPad is dropped again?", a: "A new drop is not covered - we'll see the fresh impact on the new panel and have to charge for the second repair. Discounted return-customer rate applies." },
        { q: "Do you collect from Abu Dhabi?", a: "Yes, but with a small driver fee. WhatsApp the location and we'll quote the round trip." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Shah nawaz", "David Boulos", "vinay menon", "Ahsan Shahbaz"]}
      relatedSlugs={[
        "/ipad-battery-replacement-dubai",
        "/ipad-charging-port-repair-dubai",
        "/ipad-water-damage-repair-dubai",
      ]}
    />
  );
}
