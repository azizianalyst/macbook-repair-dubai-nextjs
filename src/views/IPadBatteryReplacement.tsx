"use client";
import DevicePageTemplate from "@/components/blocks/DevicePageTemplate";

export default function IPadBatteryReplacement() {
  return (
    <DevicePageTemplate
      family="ipad"
      seoTitle="iPad Battery Replacement Dubai - From AED 350 | Same-Day | 30-Day Warranty"
      seoDescription="iPad battery replacement Dubai. Glued cells removed safely on every iPad model. From AED 350. Free pickup across Dubai. Call 055 741 3706."
      path="/ipad-battery-replacement-dubai"
      eyebrow="iPad battery replacement"
      h1="iPad Battery Replacement Dubai"
      subtitle="Two-hour battery, sudden shutdowns, won't charge past 60%. We replace the cell safely - every iPad battery is glued to the chassis, so this is not an iPhone job."
      startingPrice={350}
      timeline="Same day · 1 day"
      whatsappPrefill="Hi, my iPad battery is dying - model:"
      technician={{ name: "Usman", years: 9, specialisation: "iPad & iPhone battery specialist" }}
      serviceName="iPad Battery Replacement"
      pricingRows={[
        { model: "iPad (9th / 10th / 11th gen)",  price: 350, timeline: "Same day" },
        { model: "iPad mini (6 / 7)",             price: 400, timeline: "Same day" },
        { model: "iPad Air (4 / 5 / 6 / 7)",      price: 450, timeline: "Same day" },
        { model: "iPad Pro 11\" (M1 / M2 / M4)",  price: 500, timeline: "1 day" },
        { model: "iPad Pro 13\" (M2 / M4)",       price: 500, timeline: "1 day" },
        { model: "iPad 5 / 6 / 7 / 8 (older)",    price: 350, timeline: "Same day" },
      ]}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            iPad batteries are <strong>glued, not screwed</strong>. Unlike iPhone - which has a pull-tab - every iPad cell is bonded to the aluminium chassis with industrial adhesive. Lift it the wrong way and you puncture the cell. We use isopropyl, controlled heat and plastic spudgers to release the adhesive safely. No bending, no shortcuts.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            If your iPad is two years old and lasts two hours, the cell is finished. If it shuts down at 30% and reboots, the protection circuit is calling time. Both are the same fix. Quote, pickup, swap, calibrate - usually back to you the same day.
          </p>
        </>
      }
      problems={[
        { title: "iPad lasts 2-3 hours instead of 10", body: "Classic capacity loss. After 1,000 charge cycles every Li-ion cell is at roughly 80%. Replacement restores design capacity." },
        { title: "Shuts down at 30-40%", body: "The protection circuit thinks the cell is empty even though Settings shows charge. Cell needs replacement, not a reset." },
        { title: "Won't charge past 60-80%", body: "Either the BMS chip is mis-reading or the cell has a failed segment. Battery swap fixes both." },
        { title: "Swollen battery - back panel lifting", body: "Stop using it. A swollen Li-ion can rupture. We strip and replace within hours of pickup. Common on iPad Air 2 and older Pro 12.9." },
        { title: "Pencil charging drains the iPad fast", body: "Old cell can't keep up with the Pencil's wireless draw. New battery handles it without measurable loss." },
        { title: "iPad won't power on at all", body: "Free diagnosis first - could be battery, charging IC, or board. We test before charging anything." },
      ]}
      steps={[
        { title: "WhatsApp the model + age", body: "Tell us which iPad and roughly when you bought it. Quote and pickup booked in minutes." },
        { title: "Free pickup", body: "Driver collects from home, office or hotel anywhere in Dubai mainland." },
        { title: "Bench check", body: "Read battery design vs current capacity, cycle count, and charging IC voltage. Confirm battery is the cause." },
        { title: "Adhesive release", body: "Display lifted with controlled heat, isopropyl injected under the cell, slow lift with plastic tools - no metal near the battery." },
        { title: "New cell + calibration", body: "OEM-grade cell installed, fresh adhesive frame, full discharge-to-charge cycle to register the new BMS readings." },
        { title: "Free delivery", body: "Same day on most models with the 30-day warranty card." },
      ]}
      warrantyDays={180}
      warrantyBullets={[
        "Covers battery cell, BMS reading and adhesive seal.",
        "Excludes new water exposure or impact damage.",
        "Free re-test if capacity drops below 95% in the first 30 days.",
      ]}
      comparisonRows={[
        ["Starting price",        "AED 350",                            "AED 600+ (Apple sometimes refuses older iPads)"],
        ["Same-day option",       "Yes, most models",                   "No - typically 7-10 days"],
        ["Pickup & delivery",     "Free, Dubai mainland",               "Drop in yourself"],
        ["Battery grade",         "OEM-grade cells, full BMS pairing",  "Apple Genuine"],
        ["Older iPads supported", "iPad 5 onwards, every Air, every Mini", "Often refused as 'vintage'"],
        ["Data preserved",        "Always - never wiped",               "Whole-unit swap means restore from backup"],
        ["Warranty",              "30 days written",                    "12 months"],
      ]}
      faqs={[
        { q: "How do I know if my iPad needs a new battery?", a: "Three signs: it lasts under half what it used to, it shuts down above 20%, or it gets warm while charging. Settings → Battery doesn't show a percentage on iPad like it does on iPhone, so we test it on the bench for free." },
        { q: "Why is iPad battery replacement more expensive than iPhone?", a: "The cell is glued to the chassis (iPhone uses a pull-tab strap), and the screen has to come off to reach it. That's an extra hour of careful work plus fresh display adhesive. The cell itself is also 3-4x larger." },
        { q: "Will I lose my data?", a: "No. Battery swap doesn't touch the storage. Apps, photos, settings - all stay exactly where they are. We still recommend an iCloud backup before any repair, just for peace of mind." },
        { q: "My iPad won't turn on at all. Is it the battery?", a: "Maybe. Could also be charging IC, tristar chip, or a damaged display blocking power. Free diagnosis tells us - we don't quote a battery until we've confirmed it's the cause." },
        { q: "Is a swollen iPad battery dangerous?", a: "Yes. Stop using it and stop charging it. The cell is producing gas - it can rupture. Bring it in same day, we'll handle it. Common on iPad Pro 12.9 first and second gen." },
        { q: "Do you replace the battery on iPad 2 / 3 / 4?", a: "Yes - we still service every iPad back to the original. Parts are harder to source so allow 2-3 days for the older models." },
        { q: "Will Pencil charging still work after?", a: "Yes. New battery handles wireless Pencil charging without issue. We test it on the bench before delivery." },
        { q: "How long does the new battery last?", a: "Same as factory - roughly 1,000 full cycles to 80% capacity. For most users that's 3-4 years of normal use." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Henry Choong", "Seyed Moulana", "marouane Ayadi", "Ana Undricova"]}
      relatedSlugs={[
        "/ipad-screen-repair-dubai",
        "/ipad-charging-port-repair-dubai",
        "/ipad-water-damage-repair-dubai",
      ]}
    />
  );
}
