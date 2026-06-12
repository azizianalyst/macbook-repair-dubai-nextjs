"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IMacScreenRepair() {
  return (
    <DevicePageTemplate
      family="imac"
      seoTitle={`iMac Screen Repair Dubai - From AED 800 | 24" M-Series & 27" 5K | Call 055 741 3706`}
      seoDescription={`iMac screen repair Dubai. 24" M1/M2/M3/M4 and 27" Intel 5K Retina. Adhesive removal, dust-free reseal, full calibration. From AED 800. Call 055 741 3706.`}
      path="/imac-screen-repair-dubai"
      eyebrow="iMac screen repair"
      h1={`iMac Screen Repair Dubai - 24" M1/M2/M3/M4 + 27" Intel`}
      subtitle={`Cracked glass, dead pixels, backlight gone, lines on the panel. iMac displays are bonded to the chassis - we cut, swap, and reseal dust-free in our clean bench. From AED 800.`}
      startingPrice={800}
      timeline="2-3 days"
      whatsappPrefill="Hi, my iMac screen is damaged - model and year:"
      technician={{ name: "Shafeeq", years: 12, specialisation: "iMac & desktop display lead" }}
      serviceName="iMac Screen Repair"
      pricingRows={[
        { model: `iMac 24" M1 (2021)`,                  price: 800,  timeline: "2-3 days" },
        { model: `iMac 24" M3 (2023)`,                  price: 800,  timeline: "2-3 days" },
        { model: `iMac 24" M4 (2024)`,                  price: 850,  timeline: "2-3 days" },
        { model: `iMac 27" 5K Retina (2017-2020 Intel)`, price: 1000, timeline: "3 days" },
        { model: `iMac 21.5" Retina 4K (2017-2019)`,    price: 850,  timeline: "2-3 days" },
        { model: `iMac Pro 27" (2017)`,                  price: 1200, timeline: "3 days" },
      ]}
      pricingCaption="Quoted prices include adhesive strips and dust-free reseal. Panel cost confirmed against your serial number before we open the chassis."
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iMac screen repair is one of the hardest jobs in the Apple ecosystem. The display is <strong>laminated and adhered to the chassis</strong> with a continuous foam-tape gasket - there are no screws, no clips, no service hatch. Most local shops in Dubai refuse the work entirely.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mb-md">
            We do them because we built a dust-free reseal bench for exactly this purpose. The 27" 5K Retina panel costs more than some MacBooks, so a single dust speck behind the glass means the job is wrong. Our protocol: cut the adhesive with a thin pizza-wheel tool, lift the panel onto a vacuum stand, transfer the LCD or replace the assembly, then re-bond with fresh 3M adhesive in a particle-controlled area.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            M-series 24" iMacs use a different bonding pattern than 27" Intel models - and the 5K Retina panel itself is a sealed Apple-Samsung unit that cannot be split. Knowing which approach belongs to which year is half the job.
          </p>
        </>
      }
      honestyCallout={
        <div className="text-[15px] leading-relaxed space-y-2">
          <p><strong>iMac screen repair is the hardest Apple display job we do.</strong> Most local shops refuse it. Here's the honest framing:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The bezel is glued, not screwed. Removal carries a real risk of cracking the panel if not done with the right tool.</li>
            <li>The 27" 5K Retina LCD is sold by Apple as a whole assembly - replacement parts are expensive and lead-time can run 5-10 days for confirmed orders.</li>
            <li>Reassembly must be dust-free. A single particle inside the lamination shows up as a black dot on a white background.</li>
            <li>If you have the original Apple receipt and the iMac is under 12 months old, AppleCare covers it. Use that first.</li>
          </ul>
          <p>If you've been quoted "swap the whole iMac" elsewhere, talk to us before paying that price - we save the chassis, the data, the SSD, and the original ports.</p>
        </div>
      }
      problems={[
        { title: "Cracked front glass, panel still works", body: `On 27" Retina pre-2012 models the glass was a separate magnetic panel. On every modern iMac (Late 2012 onwards) glass and LCD are a single laminated assembly - you can't replace just the glass.` },
        { title: "Dead pixels or vertical lines", body: `Dropped or impacted iMacs often show line clusters or stuck pixels. LCD-side fault. Full panel swap on 24" M-series. On 27" Intel we sometimes recover with a flex-cable reseat - diagnosed first, no charge if not viable.` },
        { title: "Backlight gone - image faintly visible with a torch", body: `Backlight LED string failure. Common on 2017-2020 27" 5K models. Backlight rework AED 800 if isolated, full panel AED 1,000 if the string is integral.` },
        { title: "Pink or yellow tint across the screen", body: "Display flex degradation or panel ageing. Calibration reset first; if that doesn't restore neutral whites, panel replacement is the only fix." },
        { title: "Dust trapped behind the glass", body: "Usually after a previous repair somewhere else. We strip the adhesive, ultrasonically clean the inside of the glass and the LCD top surface, reseal in our dust-controlled area." },
        { title: `Image shifted or "shadow" of a previous frame`, body: "Image retention on 5K Retina panels - usually heat-related. We test for thermal fault first; sometimes it's a fan or thermal-paste issue, not the panel itself." },
      ]}
      steps={[
        { title: "WhatsApp the model + year", body: `Send the serial number from About This Mac. We confirm the exact panel SKU and the price before pickup.` },
        { title: "Free pickup", body: "Driver collects from home, office or studio. Soft-padded transport - iMacs are not hand-luggage." },
        { title: "Bench diagnosis (1 hr)", body: "Confirm panel vs backlight vs flex. Open quote, no work without your sign-off." },
        { title: "Adhesive cut + panel lift", body: "Pizza-wheel tool around the bezel, panel lifted onto a vacuum stand. Old adhesive scraped clean." },
        { title: "Replacement + dust-free reseal", body: "New panel installed, fresh 3M adhesive, particle-controlled bench. Pressure cycle 30 min." },
        { title: "Calibration + 24 hr burn-in", body: "Display profiled with a colorimeter, white balance reset, 24-hour burn-in test. Then back to you." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covers panel, backlight, calibration and adhesive seal.",
        "Excludes new physical impact after delivery.",
        "Free re-seal if any dust speck appears in the first 3 months - extremely rare with our protocol but covered.",
      ]}
      comparisonRows={[
        ["Starting price",        "AED 800",                            "AED 3,500+ (whole-unit replacement)"],
        ["27\" 5K Retina swap",   "AED 1,000",                          "AED 4,500+ in many cases"],
        ["Data on the SSD",       "Stays put on your original SSD",     "Often replaced unit - full restore needed"],
        ["Pickup & delivery",     "Free, Dubai mainland",               "Drop in to Mall of Emirates yourself"],
        ["Adhesive reseal",       "Dust-free bench, 3M factory adhesive", "Apple OEM seal"],
        ["Lead time",             "2-3 days standard",                  "1-2 weeks (sent to regional centre)"],
        ["Warranty",              "3 months written, dated",             "12 months on the new unit"],
      ]}
      faqs={[
        { q: "Can you replace just the glass on my iMac?", a: `Only on 21.5" and 27" iMacs from Mid-2011 and earlier - those have a magnetic glass panel separate from the LCD. From Late 2012 onwards (Slim iMac body), the glass and LCD are fully laminated and replaced as one assembly.` },
        { q: `Is the iMac 24" M4 the same screen as the M1 24"?`, a: `The panel is the same physical 4.5K Retina unit but the connector pinout and the way it pairs with the M-series board is slightly different. We carry both SKUs and confirm the correct one against your serial.` },
        { q: "Will my data survive the screen repair?", a: "Yes. We don't touch the SSD or the logic board for a screen-only job. Your data, apps, login chain and Time Machine history all stay intact on your original drive." },
        { q: `Does the 27" iMac 5K Retina panel come from Apple?`, a: "We use Apple-original pulled panels (from cosmetically-imperfect new iMacs) for 27\" 5K work - the only realistic source, since Apple no longer sells these as service parts. Quoted upfront." },
        { q: "How dust-free is your bench, really?", a: "We work inside a partitioned area with HEPA-filtered air, anti-static surface and tacky floor mats at the entrance. Reseal happens within 90 seconds of the panel coming out of its protective film. We've delivered hundreds of iMac screens with zero dust complaints." },
        { q: "Can you fix an iMac that was opened by someone else and now has dust behind the screen?", a: "Yes, and we get this regularly. We strip the existing adhesive, ultrasonically clean both glass surfaces, replace the panel if it's been damaged on removal, and reseal in our clean bench. Quoted after diagnosis." },
        { q: `My 27" iMac shows lines after a recent move from my old apartment in Dubai Marina. Is this a panel fault?`, a: "Usually yes - vibration during transport can crack the LCD's internal driver tracks. A flex reseat sometimes helps; if the lines persist, panel replacement is the fix. Free diagnosis." },
        { q: `Do you support iMac Pro 27" (2017)?`, a: "Yes. The iMac Pro uses the same 5K Retina panel as the consumer 27\" of that era. Repair process and pricing are similar (AED 1,200) but the chassis is space-grey and we adapt the adhesive colour to match." },
        { q: "What about the older Intel 27\" iMacs from 2013-2015?", a: "Fully supported. Often a backlight or flex repair rather than a full panel - we diagnose before quoting. Many of these iMacs are still daily-driven by designers in Dubai and Sharjah; the cost-to-repair is well below replacement." },
      ]}
      reviewNames={["Shah nawaz", "Marianne Chehade El Dfouni", "Ali Hassan"]}
      relatedSlugs={[
        "/imac-logic-board-repair-dubai",
        "/imac-not-turning-on-dubai",
      ]}
    />
  );
}
