"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneScreenRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Screen Repair Dubai - From AED 350 | All Models | Same-Day"
      seoDescription="iPhone screen repair Dubai from AED 350. OLED & LCD, True Tone calibration, all models 6 to 17. Same-day, 3-month warranty. WhatsApp 055 741 3706."
      path="/iphone-screen-repair-dubai"
      eyebrow="iPhone Screen Repair"
      h1="iPhone Screen Repair Dubai - From AED 350 | All Models"
      subtitle="Cracked glass, dead touch, green tint, no display. iPhone 6 through iPhone 17 - OLED and LCD, True Tone preserved. Same-day on most models, 3-month written warranty."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, iPhone screen repair quote please. Model: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Display & micro-soldering" }}
      serviceName="iPhone Screen Repair"
      pricingRows={[
        { model: "iPhone 6 / 6s / 7",                price: 350, timeline: "Same day" },
        { model: "iPhone 8 / 8 Plus / SE 2 / SE 3",  price: 350, timeline: "Same day" },
        { model: "iPhone X / XR / XS",               price: 450, timeline: "Same day" },
        { model: "iPhone 11 / 11 Pro",               price: 500, timeline: "Same day" },
        { model: "iPhone 12 / 12 Pro / 13 / 13 Pro", price: 650, timeline: "Same day" },
        { model: "iPhone 14 / 14 Pro / 15 / 15 Pro", price: 750, timeline: "Same day · 1 day" },
        { model: "iPhone 16 / 16 Pro / 16e",         price: 850, timeline: "Same day · 1 day" },
        { model: "iPhone 17 / Air / 17 Pro / 17e",   price: 950, timeline: "1 day" },
      ]}
      pricingCaption="Pro Max sizes add AED 150. Original Apple OLED add AED 200-400 (preserves True Tone)."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone screen repair in Dubai starts at AED 350 for the iPhone 6 through iPhone 8, and finishes the same day on every model up to the iPhone 16 Pro Max when stock is on the shelf. The workshop has fitted more than 6,800 iPhone screens since 2014 - when the iPhone 6 first brought the larger 4.7" panel to the bench. Every replacement is bench-tested for touch responsiveness, 3D Touch / Haptic Touch where applicable, P3 colour gamut, and pixel uniformity before the phone leaves the workshop. True Tone is preserved on genuine Apple OLED panels by transferring the calibration chip from the original screen with a dedicated programmer.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            The split between OLED and LCD matters for both price and method. Every iPhone from the iPhone X onward (except XR, 11, SE 2, SE 3) uses an OLED panel - Samsung E2/E3 or LG-built - bonded to a digitiser and an under-screen sensor stack. LCD models (iPhone 6 through 8, XR, 11, SE 2/3) use a backlit IPS panel with a separate digitiser layer. OLED replacements are more expensive because the panel itself costs more and the bonding tolerance is tighter. The workshop quotes both genuine and high-grade aftermarket on every WhatsApp ticket so the choice stays with the customer.
          </p>
        </>
      }
      problems={[
        { title: "Cracked glass, touch still works", body: "Most common iPhone ticket. Glass is bonded to the digitiser and OLED in one assembly from iPhone X onward - full panel swap, no glass-only option. AED 450 to AED 950 depending on model." },
        { title: "Green tint or pink line across the OLED", body: "Pixel-driver IC on the panel is failing, or the display flex is partially disconnected after a drop. Reseating fixes around 10% of cases at no charge - full panel swap on the rest." },
        { title: "Dead touch, image fine (ghost touch)", body: "Digitiser flex damage, common after a fall on a corner. iPhone 11/12/13 are particularly prone. Panel swap restores normal touch - AED 500 to AED 750." },
        { title: "Black screen, phone vibrates and rings", body: "Backlight circuit on LCD models, or panel-side power IC on OLED. Free diagnosis confirms whether the panel or the logic-board backlight rail needs work." },
        { title: "True Tone disabled after a previous repair", body: "Aftermarket panels skip the EEPROM calibration chip. The workshop transfers the original chip from the broken screen onto the replacement - True Tone restored, AED 100 add-on." },
        { title: "Face ID greyed out after screen swap", body: "On iPhone 11-17, the proximity and ambient-light sensors live behind the OLED. They must be transferred from the original assembly. Done correctly Face ID stays active. AED 0 if we did the original repair." },
        { title: "Screen lifting from the chassis", body: "Battery swelling pushes the OLED out of the frame. Common on iPhone X, XS, 11, 12 after 3-4 years. Battery replacement (AED 250) plus reseat solves it without a panel swap if the OLED is undamaged." },
        { title: "Vertical pink or yellow lines", body: "Source driver IC failure on the panel. Not fixable at IC level - full panel replacement. Often appears 6-18 months after a previous low-grade repair." },
        { title: "Touch works in some areas, dead in others", body: "Digitiser controller IC failure or hairline crack in the flex. Panel swap restores 100% touch grid. Tested with multi-touch validation tool before handover." },
        { title: "Cracked glass on the iPhone 17 Air", body: "The titanium-edge Air is thinner than any prior iPhone - drops on edges fracture the OLED almost every time. AED 950 panel swap, 1 day, genuine-only available so far." },
      ]}
      steps={[
        { title: "WhatsApp the model + photo", body: "Send the iPhone model from Settings > General > About and a photo of the cracked screen. Quote back in 4-8 minutes during business hours." },
        { title: "Free pickup or walk in", body: "Free pickup across Dubai mainland or walk into Office #45, Concord Tower, Media City. Diagnosis on the spot - about 10 minutes." },
        { title: "Panel swap on the bench", body: "Pentalobe screws out, screen detached at 70 °C, OLED disconnected, sensor stack transferred (proximity, ambient light, earpiece, Face ID flood/dot). Under microscope from start to finish." },
        { title: "True Tone & sensor calibration", body: "Original EEPROM chip transferred to the new panel with a dedicated programmer. True Tone re-enabled. Face ID re-tested. Multi-touch grid validated." },
        { title: "QC - 32-point checklist", body: "Touch grid, P3 colour, max brightness 800 nits (1,000 nits HDR), proximity sensor (auto-off during call), ambient light auto-brightness, 3D / Haptic Touch on supported models." },
        { title: "Free delivery + 3-month warranty", body: "Same day on iPhone 6 to iPhone 16. Next day on iPhone 17 line. Warranty card lists panel batch - covers manufacturing defects and post-repair touch failure." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covered: dead pixels, backlight bleed, digitiser failure, ghost touch, True Tone calibration loss caused by the part.",
        "Not covered: new physical damage, water damage after the repair, software issues unrelated to the display.",
        "Genuine Apple OLED carries the same 3-month warranty plus Apple's own 1-year warranty (when sourced from authorised distributor - confirmed on every quote).",
      ]}
      comparisonRows={[
        ["Repair window",          "Same day on iPhone 6 to 16",                "5 to 10 business days, mail-in"],
        ["iPhone 11 panel",         "AED 500",                                   "AED 1,099 (Apple list, AE)"],
        ["iPhone 14 Pro panel",     "AED 750",                                   "AED 1,599 (Apple list, AE)"],
        ["iPhone 16 Pro Max panel", "AED 1,000",                                 "AED 1,899 (Apple list, AE)"],
        ["Free pickup in Dubai",   "Yes",                                        "No, customer must visit/courier"],
        ["True Tone preserved",     "Yes - chip transfer included",              "Yes - only with genuine repair"],
        ["Vintage models (6, 6s)", "Yes - AED 350",                              "Refused, model obsolete"],
        ["Warranty",                "3 months written",                           "12 months"],
        ["No-fix-no-charge",        "Yes",                                       "No, diagnostic fee charged"],
      ]}
      faqs={[
        { q: "How much does iPhone screen replacement cost in Dubai?", a: "From AED 350 for iPhone 6 through 8 and SE. AED 450-500 for iPhone X, XR, 11. AED 650 for iPhone 12 and 13. AED 750 for iPhone 14 and 15. AED 850 for iPhone 16. AED 950 for iPhone 17 line. Pro Max sizes add AED 150. Original Apple OLED option adds AED 200 to AED 400." },
        { q: "Is the screen original Apple or aftermarket?", a: "Both options are quoted on every WhatsApp ticket. Genuine Apple OLED is sourced from a local Apple-authorised distributor with traceable batch numbers - keeps True Tone and HDR brightness identical. A-grade aftermarket comes from the same Samsung and LG factories that build the Apple panel, sold without the Apple label. Both carry the 3-month workshop warranty." },
        { q: "Will Face ID still work after a screen replacement?", a: "Yes. The proximity sensor, flood illuminator, and ambient-light sensor are transferred from the original screen to the replacement. The dot projector and IR camera live in the chassis, not the screen, so they are untouched. Face ID is tested before the phone leaves the bench." },
        { q: "Will True Tone work after a non-Apple screen?", a: "Only if the EEPROM calibration chip from the original screen is transferred. The workshop does this transfer as standard on iPhone 8 and later - no extra charge on most models. On the iPhone 17 line the genuine panel is required for full True Tone - aftermarket disables it." },
        { q: "How long does iPhone screen repair take?", a: "Same day on iPhone 6 through iPhone 16 - typically 60 to 90 minutes at the bench plus a 30-minute adhesive cure. The iPhone 17 line is 1 day because the genuine OLED is special-ordered. WhatsApp the model first to confirm stock." },
        { q: "Can you replace just the cracked glass?", a: "Only on iPhone 6, 6s, 7, and 8 LCD models - AED 350 glass-only swap. From iPhone X onward the glass is fused to the OLED - no reliable glass-only option exists, full panel must be replaced." },
        { q: "What if the touch screen stops working but the phone seems fine otherwise?", a: "Digitiser failure - phone receives calls and notifications but you cannot interact. Panel swap restores 100% touch. AED 350 to AED 950 depending on model. Same day." },
        { q: "Will my screen replacement void Apple warranty?", a: "If the iPhone is still inside Apple's 1-year warranty or AppleCare+, going to Apple keeps full coverage. The workshop is the right fit when the warranty has expired, the device is vintage, or you need same-day turnaround. The workshop's own 3-month warranty covers the repair itself." },
        { q: "My iPhone fell in water and the screen has dark patches - is it the display?", a: "Often yes - the OLED layer is moisture-sensitive. Panel swap fixes the display, but a water-damage clean (AED 250 on top) is recommended to prevent corrosion on the logic board long-term. Both done same day in most cases." },
        { q: "Do you offer free pickup for screen repair?", a: "Yes - free pickup and delivery across Dubai mainland: Marina, Downtown, JBR, JLT, Palm, Business Bay, Al Barsha, Jumeirah, Internet City, Knowledge Village. Sharjah and Abu Dhabi are AED 100 each way." },
      ]}
      reviewNames={["Saeed Alam", "Tim Quick", "Sergej Schlegel", "Wellington Academy"]}
      relatedSlugs={["/iphone-battery-replacement-dubai", "/iphone-back-glass-repair-dubai", "/iphone-water-damage-repair-dubai"]}
    />
  );
}
