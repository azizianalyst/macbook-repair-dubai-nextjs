"use client";
import IPhonePageTemplate from "@/components/blocks/IPhonePageTemplate";

export default function IPhoneBatteryReplacement() {
  return (
    <IPhonePageTemplate
      seoTitle="iPhone Battery Replacement Dubai - From AED 250 | Same-Day | Genuine Cells"
      seoDescription="iPhone battery replacement Dubai from AED 250. Health % reset, BMS pairing, swelling check. iPhone 6 to 17. Same-day. 3-month warranty. WhatsApp 055 741 3706."
      path="/iphone-battery-replacement-dubai"
      eyebrow="iPhone Battery Replacement"
      h1="iPhone Battery Replacement Dubai - From AED 250"
      subtitle="Battery health below 80%? Random shutdowns? Swelling? iPhone 6 through iPhone 17 - genuine cells, BMS pairing, health % reset. Same-day, 3-month warranty."
      startingPrice={250}
      timeline="Same day"
      whatsappPrefill="Hi, iPhone battery replacement quote please. Model: "
      technician={{ name: "Usman", years: 12, specialisation: "Battery & charging systems" }}
      serviceName="iPhone Battery Replacement"
      pricingRows={[
        { model: "iPhone 6 / 6s / 7 / 8 / SE",        price: 250, timeline: "Same day" },
        { model: "iPhone X / XR / XS",                 price: 350, timeline: "Same day" },
        { model: "iPhone 11 / 11 Pro / 12 / 12 Pro",   price: 400, timeline: "Same day" },
        { model: "iPhone 13 / 13 Pro / 14 / 14 Pro",   price: 450, timeline: "Same day" },
        { model: "iPhone 15 / 15 Pro / 16 / 16 Pro",   price: 500, timeline: "Same day" },
        { model: "iPhone 17 / Air / 17 Pro / 17e",     price: 600, timeline: "Same day · 1 day" },
      ]}
      pricingCaption="Pro Max sizes add AED 50. Genuine Apple cell add AED 150-200 (preserves health % reading)."
      intro={
        <>
          <p className="text-[17px] text-text leading-relaxed">
            iPhone battery replacement in Dubai starts at AED 250 and finishes the same day on every model from the iPhone 6 through the iPhone 16 Pro Max. The workshop fits more than 90 iPhone batteries every month - Usman runs the battery bench and has paired more than 4,000 BMS chips since 2018, when Apple introduced cell pairing on the iPhone XS. Every replacement battery is bench-tested for capacity (must read within 2% of label), peak power output, and short-circuit safety before installation. The phone leaves with a fresh "Maximum Capacity" reading at 100% and the cycle count reset to zero.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed mt-md">
            Apple's 80% rule is the key trigger. macOS and iOS suggest a battery service when Maximum Capacity drops below 80%, because peak power can no longer sustain the processor under load - the result is random shutdowns, throttling, and reduced screen-on time. From the iPhone XS onward, Apple paired the battery to the logic board with a 1-wire authentication chip; non-paired cells will show "Unknown Part" and disable the health reading. The workshop reprograms the original BMS chip onto the new cell so the health reading remains accurate and unbothered.
          </p>
        </>
      }
      problems={[
        { title: "Battery health below 80%", body: "iOS will display a yellow service warning. Random shutdowns under camera or game load are the next stage. AED 250 to AED 600 replacement, same day, BMS reprogrammed so health resets to 100%." },
        { title: "Swollen battery pushing the screen out", body: "Visible gap between OLED and chassis. Stop using the phone - pressure on the OLED will crack it. Same-day replacement, AED 250 to AED 600. Free disposal of the swollen cell at hazardous-waste vendor." },
        { title: "Phone shuts off at 30%, 40%, even 50%", body: "Cell impedance is too high to sustain peak load. Classic on iPhone 6, 6s (Apple recall era) and iPhone X after 3+ years. Replacement restores correct shutdown at <5%." },
        { title: "Phone doesn't last past lunchtime", body: "After 500-800 cycles capacity drops to 70-80%. Replacement returns the phone to all-day use. Most iPhones reach this point at 24-36 months of normal use." },
        { title: "'Unknown Part' warning after a previous repair", body: "Cell was swapped without BMS pairing. The workshop reprograms the original BMS onto a fresh cell - warning gone, health % reading restored. AED 100 add-on if the previous cell still works; full replacement otherwise." },
        { title: "Phone hot during charging", body: "Charging IC under stress because battery impedance is high. Replacement battery + thermal-paste refresh on the charging IC. AED 250 to AED 600 plus AED 100 thermal." },
        { title: "Battery drains overnight from 100% to 60%", body: "Failed cell + parasitic drain on a damaged port. Replacement plus port inspection. Often a 2-in-1 ticket on water-damaged phones." },
        { title: "iPhone 15+ won't reach 100% charge", body: "iPhone 15 onward uses lithium chemistry with optimised charging - capping at 80% or 100% by the user's setting. Check Settings > Battery > Charging before booking a replacement." },
        { title: "Cycle count above 1,000", body: "Apple's design target is 80% capacity at 500 cycles for older models, 1,000 cycles for iPhone 15+. Beyond that capacity drops faster. Replacement restores the cycle counter to zero." },
        { title: "Aftermarket battery installed elsewhere is failing fast", body: "Low-grade cells use recycled cores and inflated capacity labels. The workshop fits only A-grade or genuine Apple cells. Replacement, AED 250 to AED 600, with a 3-month warranty card listing the cell batch." },
      ]}
      steps={[
        { title: "WhatsApp model + screenshot of Battery Health", body: "Settings > Battery > Battery Health & Charging - screenshot showing Maximum Capacity. Quote back in 4 minutes." },
        { title: "Free pickup or walk in", body: "Pickup anywhere on Dubai mainland or walk into the workshop. Diagnosis is 5 minutes - multimeter test on the original cell to confirm replacement is needed." },
        { title: "Cell swap on the bench", body: "Pentalobe screws out, screen lifted at 70 °C, battery adhesive pulls activated, old cell removed. Bench-tested replacement seated, BMS chip transferred and re-paired." },
        { title: "Battery health reset", body: "Health reading reset to 100%, cycle count to 0. iOS shows the new cell as paired with no warnings. Verified in Settings before reassembly." },
        { title: "Charge cycle test", body: "Phone charged from 0% to 100% on the bench while monitored. Heat profile checked. No throttling under stress test." },
        { title: "Free delivery + 3-month warranty", body: "Same day, anywhere on Dubai mainland. Warranty card lists the battery batch and original install date." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "Covered: cell defects, capacity falling below 90% within 3 months, swelling, BMS pairing failure caused by the workshop.",
        "Not covered: liquid damage post-repair, capacity drop after 500+ cycles in 3 months (heavy use), physical damage.",
        "Genuine Apple cell option carries the workshop 3-month warranty plus Apple's distributor warranty (paperwork supplied on request).",
      ]}
      comparisonRows={[
        ["Repair window",            "Same day, all models",                       "5 to 10 business days, mail-in"],
        ["iPhone 11 battery",        "AED 400",                                    "AED 369 (Apple list, AE)"],
        ["iPhone 14 battery",        "AED 450",                                    "AED 419 (Apple list, AE)"],
        ["iPhone 16 Pro battery",    "AED 550",                                    "AED 489 (Apple list, AE)"],
        ["Health % reset",           "Yes - BMS reprogrammed",                     "Yes - genuine cell only"],
        ["Free pickup in Dubai",     "Yes",                                        "No"],
        ["Walk-in same day",         "Yes - Concord Tower, Media City",            "Apple Store appointment required"],
        ["Vintage models (6/6s)",    "Yes - AED 250",                              "Refused, model obsolete"],
        ["Warranty",                 "3 months written",                            "12 months"],
      ]}
      faqs={[
        { q: "How much does iPhone battery replacement cost in Dubai?", a: "From AED 250 for iPhone 6, 6s, 7, 8, and SE. AED 350 for X, XR, XS. AED 400 for 11 and 12. AED 450 for 13 and 14. AED 500 for 15 and 16. AED 600 for the iPhone 17 line. Pro Max sizes add AED 50. Genuine Apple cell adds AED 150 to AED 200." },
        { q: "When should I replace my iPhone battery?", a: "When Maximum Capacity (Settings > Battery > Battery Health) drops below 80%. iOS shows a yellow 'Service' warning. Other triggers: random shutdowns above 20%, phone hot during normal use, battery dies overnight, screen lifting from chassis (swelling)." },
        { q: "Will battery health reset to 100% after replacement?", a: "Yes - the workshop transfers the original BMS chip and re-pairs it with the new cell. iOS reads the new cell as paired and shows 100% Maximum Capacity with cycle count zero. No 'Unknown Part' warning." },
        { q: "What's the difference between A-grade and genuine Apple cells?", a: "Genuine cells are sourced from a local Apple-authorised distributor with traceable serials - same chemistry, same capacity, identical to a brand-new iPhone. A-grade cells come from ATL or Sunwoda (Apple's cell suppliers) without the Apple sticker - same chemistry, ~5% capacity variance, 30% cheaper. Both carry the 3-month workshop warranty." },
        { q: "Is it safe to use a swollen iPhone battery?", a: "No. Swelling means the cell has gas-vented internally and pressure is building up. The OLED can crack from below, the screen can detach, and in rare cases the cell can ignite. Stop using the phone, do not charge it, WhatsApp a photo and the workshop will collect same day." },
        { q: "How long does iPhone battery replacement take?", a: "60 to 90 minutes on the bench for iPhone 6 through iPhone 16. Plus a 30-minute charge-cycle test. Same day, no overnight stay needed. Bring the phone in or use free pickup - typical end-to-end time is 3 to 5 hours." },
        { q: "Will my Face ID still work after battery replacement?", a: "Yes. The battery sits below the logic board - Face ID hardware (dot projector, IR camera, flood) is in the screen and chassis, untouched during a battery swap." },
        { q: "Why does iPhone 15+ have an 80% charge limit option?", a: "Apple introduced charge-cycle optimisation on iPhone 15 to extend battery lifespan - capping at 80% reduces stress on the lithium-ion chemistry. If you've enabled this in Settings > Battery > Charging, your phone will not reach 100% by design. Disable it for road trips, re-enable for daily use." },
        { q: "Can you replace the battery without removing the screen?", a: "No. Apple designs the iPhone battery to be removed from the back of the chassis only after lifting the OLED screen. The workshop uses heat plates at 70 °C plus alcohol-activated adhesive pulls - the screen is reseated with fresh adhesive at the end. Total process takes 60 to 90 minutes." },
        { q: "How long should an iPhone battery last?", a: "Apple's design target is 80% capacity at 500 charge cycles for iPhone X to 14 (~24 months of normal use), and 80% at 1,000 cycles for iPhone 15 and later (~36 months). Heavy users (gaming, video, hot weather) may reach the 80% threshold sooner. Above 1,000 cycles capacity drops faster." },
      ]}
      reviewNames={["Saeed Alam", "Wellington Academy", "Henry Choong", "marouane Ayadi"]}
      relatedSlugs={["/iphone-screen-repair-dubai", "/iphone-charging-port-repair-dubai", "/iphone-water-damage-repair-dubai"]}
    />
  );
}
