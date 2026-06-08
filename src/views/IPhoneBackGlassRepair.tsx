"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneBackGlassRepair() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Back Glass Repair Dubai - Laser Removal | From AED 350 | All Models"
      seoDescription="iPhone back glass repair Dubai from AED 350. Laser removal saves the phone - Apple swaps whole device. MagSafe + wireless coil preserved. WhatsApp 055 741 3706."
      path="/iphone-back-glass-repair-dubai"
      eyebrow="iPhone Back Glass Repair"
      h1="iPhone Back Glass Repair Dubai"
      subtitle="Cracked back glass on iPhone 8 onwards. Laser removal - we save the phone. Apple's policy is to swap the whole device. MagSafe and wireless charging coil preserved."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, iPhone back glass repair quote please. Model: "
      technician={{ name: "Shafiq Ahmed", years: 21, specialisation: "Laser back-glass removal" }}
      serviceName="iPhone Back Glass Repair"
      pricingRows={[
        { model: "iPhone 8 / 8 Plus",                price: 350, timeline: "Same day" },
        { model: "iPhone X / XR / XS",               price: 400, timeline: "Same day" },
        { model: "iPhone 11 / 11 Pro",               price: 450, timeline: "Same day" },
        { model: "iPhone 12 / 12 Pro / 13 / 13 Pro", price: 550, timeline: "Same day · 1 day" },
        { model: "iPhone 14 / 14 Pro / 15 / 15 Pro", price: 650, timeline: "1 day" },
        { model: "iPhone 16 / 16 Pro / 16e",         price: 750, timeline: "1 day" },
        { model: "iPhone 17 / Air / Pro / 17e",      price: 850, timeline: "1 day" },
      ]}
      pricingCaption="Pro Max sizes add AED 100. Includes MagSafe magnet ring and wireless charging coil preservation."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone back glass repair in Dubai starts at AED 350 - and the workshop's approach is fundamentally different from Apple. Apple's official policy on a cracked back glass is to swap the entire device for a service unit, costing the customer AED 1,400 to AED 2,800 depending on model. The workshop instead removes the broken glass with a 532nm green laser at 30W, leaving the chassis, MagSafe magnet ring, and wireless charging coil intact, then bonds a fresh glass panel with industrial 3M structural adhesive. The phone keeps its original logic board, original Face ID, original battery, and original IMEI.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            The laser process matters because the back glass on iPhone 8 onward is glued to the chassis with a heat-resistant epoxy that won't peel, sand, or chemical-strip without damaging the wireless coil underneath. The 532nm wavelength heats the epoxy without burning the chassis, the glass shatters into removable shards under controlled pressure, and the residue is wiped off with isopropyl. The new glass arrives pre-cut to model spec with the camera cutout, flash cutout, and antenna lines already laser-etched. Bonding takes 90 minutes of cure time at room temperature.
          </p>
        </>
      }
      problems={[
        { title: "Hairline crack with no broken pieces", body: "Cosmetic - wireless charging and MagSafe still work. Replace if you plan to keep the phone 12+ months. AED 350 to AED 850 same/next day." },
        { title: "Shattered with pieces missing", body: "Wireless charging compromised because the gap above the coil disrupts inductive coupling. Replace soon - moisture entry through the gap will hit the logic board within weeks." },
        { title: "Apple Store quoted AED 1,400 to swap the device", body: "Apple's official price for iPhone 11 back glass is AED 1,449. iPhone 14 Pro is AED 2,099. iPhone 16 Pro Max is AED 2,749. The workshop saves the original device at AED 450 to AED 950." },
        { title: "MagSafe weak after a previous back-glass repair", body: "Cheap aftermarket back glass uses thinner magnet rings or omits the array entirely. The workshop fits glass with the full Apple-spec 18-magnet MagSafe array. AED 450 to AED 850." },
        { title: "Wireless charging stopped after a drop", body: "Could be back glass, could be the wireless coil itself. Free diagnosis confirms - 70% of these are back-glass cracks blocking the coil; the rest need a coil swap (AED 250 add-on)." },
        { title: "Camera glass cracked alongside back glass", body: "Two-in-one repair. Back glass and camera lens cover replaced same day. AED 350 to AED 850 for back glass plus AED 100 to AED 200 for the camera lens." },
        { title: "Water entry through cracked back glass", body: "Once the seal is broken, IP68 rating is gone. Internal corrosion sets in within days. Back glass replacement + ultrasonic clean (AED 250 on top) restores function and seal." },
        { title: "Back glass split but phone still works", body: "Lucky - wireless coil is still intact. Replace within a week to prevent moisture damage and to restore IP rating (the new bond seals back to ~IP67 equivalent)." },
        { title: "iPhone 15 back glass differs from iPhone 14", body: "iPhone 15 introduced the colour-infused glass (titanium chassis on Pro models). The workshop stocks colour-matched replacements for every iPhone 15, 16, and 17 finish." },
        { title: "Repaired elsewhere, MagSafe broken", body: "Common - low-end shops use back glass without the MagSafe magnet array. The workshop refits with full-spec glass. Trade-in pricing (AED 100 off) when fixing a previous bad repair." },
      ]}
      steps={[
        { title: "WhatsApp model + photo of damage", body: "Photo showing the crack pattern. Quote back in 4 minutes." },
        { title: "Free pickup or walk in", body: "Pickup anywhere on Dubai mainland. Diagnosis on the spot." },
        { title: "Laser back-glass removal", body: "Phone clamped, 532nm laser run across the glass at controlled speed. Glass shatters into removable shards. Residue wiped with isopropyl. Wireless coil and MagSafe array inspected for damage." },
        { title: "New back glass bonded with 3M adhesive", body: "Replacement glass aligned to camera cutout. 3M VHB structural adhesive applied. Phone clamped at 5kg pressure for 90 minutes at room temp." },
        { title: "Wireless charging + MagSafe test", body: "Charged on a Qi pad - must reach 7.5W (15W on MagSafe-enabled iPhones). MagSafe accessory snap test. Camera autofocus checked through new glass." },
        { title: "Free delivery + 90-day warranty", body: "Same day on iPhone 8 to iPhone 11. 1 day on iPhone 12 to 17. Warranty covers the bond and the wireless coil function." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covered: bond failure, glass defects, wireless charging or MagSafe failure caused by the repair.",
        "Not covered: new physical damage, water damage post-repair, back glass shattered by a fresh drop.",
        "IP68 water resistance is partially restored (~IP67 equivalent) - Apple does not certify post-repair phones to IP68.",
      ]}
      comparisonRows={[
        ["iPhone 11 back glass",        "AED 450",                                 "AED 1,449 (whole-unit swap)"],
        ["iPhone 14 Pro back glass",    "AED 700",                                 "AED 2,099 (whole-unit swap)"],
        ["iPhone 16 Pro Max back glass","AED 850",                                 "AED 2,749 (whole-unit swap)"],
        ["Method",                      "532nm laser removal, original phone kept","Whole-device service swap"],
        ["MagSafe preserved",           "Yes - full 18-magnet array",              "Yes - new device"],
        ["Wireless coil preserved",     "Yes - original coil retained",            "Yes - new device"],
        ["Original IMEI / battery / FaceID retained", "Yes",                        "No - service unit"],
        ["Repair window",               "Same/next day in Dubai",                  "5 to 10 business days, mail-in"],
        ["Warranty",                    "90 days written",                         "90 days on service unit"],
      ]}
      faqs={[
        { q: "How much does iPhone back glass repair cost in Dubai?", a: "From AED 350 for iPhone 8. AED 400 for X, XR, XS. AED 450 for 11. AED 550 for 12 and 13. AED 650 for 14 and 15. AED 750 for 16. AED 850 for the iPhone 17 line. Pro Max sizes add AED 100. Apple's whole-device swap is AED 1,400 to AED 2,800 depending on model - the workshop saves AED 1,000+ on most models." },
        { q: "Why doesn't Apple repair just the back glass?", a: "Apple's design uses a heat-cured epoxy that's nearly impossible to remove without damaging the wireless charging coil and MagSafe magnet ring underneath. Their official process is whole-device replacement. The workshop uses a 532nm green laser to bypass this - heat-vaporising the epoxy at the bond line without touching the components beneath." },
        { q: "Will MagSafe still work after a back glass repair?", a: "Yes - provided the workshop fits a back glass with the full 18-magnet Apple-spec ring (every iPhone 12 onward). Cheap aftermarket glass omits the magnets. The workshop quotes only full-spec parts. MagSafe accessory snap is tested before handover." },
        { q: "Will wireless charging still work?", a: "Yes - the wireless charging coil sits on the chassis, not the glass. The laser removes glass without touching the coil. Charging is tested on a Qi pad before the phone leaves the bench (must reach 7.5W standard or 15W MagSafe)." },
        { q: "Can a hairline crack wait?", a: "Cosmetically yes, functionally no. Once the glass is cracked, IP68 water resistance is broken. Moisture and dust enter through the crack within days. Even if MagSafe and wireless charging still work, the logic board is now exposed to humidity. Repair within 2 weeks is recommended." },
        { q: "How long does the repair take?", a: "Same day on iPhone 8 to iPhone 11 - laser removal takes 20 minutes, bonding 90 minutes, total bench time 2 to 3 hours. iPhone 12 onward typically finishes next day because the bond cure is the slowest step. Free pickup and delivery." },
        { q: "Will the IP68 rating still be valid?", a: "Apple does not certify post-repair phones to IP68. The workshop's bond restores approximately IP67-equivalent water resistance - handles splashes, rain, brief water contact. The phone should not be submerged or used for swimming." },
        { q: "Will the colour match exactly?", a: "Yes for every iPhone 15, 16, and 17 colour. The workshop stocks Pacific Blue, Deep Purple, Titanium Natural, Titanium Black, Titanium White, Desert Titanium, and the iPhone 17 line in matching shades. Colour confirmed on WhatsApp before booking." },
        { q: "What if the camera lens is also cracked?", a: "Two-in-one repair, both done same day. Back glass replacement plus camera lens cover swap (AED 100 to AED 200 extra depending on model). Camera autofocus and image quality verified after." },
        { q: "Can you fix iPad back panel cracks too?", a: "Yes - iPad back panel repair from AED 450, but the process differs (no wireless coil to preserve, but Apple Pencil charging coil on iPad Pro models). WhatsApp the iPad model for a quote." },
      ]}
      reviewNames={["Sergej Schlegel", "Saeed Alam", "Wellington Academy"]}
      relatedSlugs={["/iphone-screen-repair-dubai", "/iphone-water-damage-repair-dubai", "/iphone-camera-repair-dubai"]}
    />
  );
}
