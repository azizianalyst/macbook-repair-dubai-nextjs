"use client";
import MacBookAirChipBatteryPage from "@/components/blocks/MacBookAirChipBatteryPage";

export default function MacBookAirM5BatteryReplacement() {
  return (
    <MacBookAirChipBatteryPage
      path="/macbook-air-m5-battery-replacement-dubai"
      chip="M5"
      years="2026"
      seoTitle="MacBook Air M5 Battery Replacement Dubai"
      seoDescription="MacBook Air M5 (2026) battery replacement Dubai. 13-inch and 15-inch, BMS re-pair included, warranty checked first. Free diagnosis. Call 055 741 3706."
      h1="MacBook Air M5 Battery Replacement Dubai"
      eyebrow="M5 Air battery specialist · Dubai Media City · warranty checked before any paid work"
      capacity="Same cells as the M4 Air: about 54 Wh (13-inch) / 66.5 Wh (15-inch)"
      cycleLimit="1,000 cycles"
      chargingPort="MagSafe 3 + USB-C (Thunderbolt 4)"
      heroAnswer="MacBook Air M5 battery replacement is quoted after a free diagnosis at MacBook Repair Dubai. The M5 Air launched in March 2026, so almost every unit is still inside Apple's 1-year warranty - we check your serial number first and send you to Apple if a defect is covered. For accidental damage, swollen cells outside warranty, or owners who want a same-week fix without a Genius Bar wait, we fit genuine-grade cells with BMS firmware re-pair included. Turnaround 1–2 business days while M5 parts stock builds."
      chipUniquePoints={[
        "The MacBook Air M5 (March 2026) keeps the M4-era chassis and battery capacities (about 54 Wh on the 13-inch, 66.5 Wh on the 15-inch). What changed is inside: the M5 chip, 512GB base storage on dual-NAND, and the Apple N1 networking chip for Wi-Fi 7 and Bluetooth 6. The battery module carries a new part number, so we stock M5-specific cells rather than reusing M4 stock.",
        "Apple quotes up to 18 hours on the 13-inch and 15 hours on the 15-inch - unchanged from M4 - but the M5's efficiency gains mean real-world life is slightly better at the same capacity. If an M5 Air is lasting under 6 hours on light work in Dubai, that is a fault, not ageing: the machine is too new for wear.",
        "All Apple Silicon Airs need BMS firmware re-pair after a battery swap. Without it macOS shows undefined capacity and cycle count, and MagSafe 3 fast charging may not negotiate. Re-pair is included in every M5 battery job here.",
        "At under 1 year old, an M5 Air showing 'Service Recommended' is a warranty case in most situations. Apple's standard warranty covers manufacturing defects; AppleCare+ covers replacement once capacity drops below 80%. We tell you this at the free diagnosis - our paid service is for what Apple excludes (liquid, drops, physical damage) or owners who cannot wait.",
        "Dubai heat is the main enemy of a new battery. An M5 Air left in a parked car at 50°C or charged on a bed with the vents covered ages its cells far faster than cycle count suggests. We include a thermal-history check in the diagnosis so you know whether the swap will hold.",
      ]}
      prices={[
        { model: 'MacBook Air 13" M5 (2026)', price: 520, applePrice: 599, timeline: "1–2 business days", l4href: "/macbook-air-13-m5-2026-repair-dubai" },
        { model: 'MacBook Air 15" M5 (2026)', price: 570, applePrice: 699, timeline: "1–2 business days", l4href: "/macbook-air-15-m5-2026-repair-dubai" },
      ]}
      faults={[
        { title: "M5 Air battery health warning under 6 months old", body: "Rare and almost always a manufacturing defect - which means Apple warranty. We check coverage for free before quoting. If the machine has had heat exposure or repeated deep discharges that void the claim, we replace the cell here." },
        { title: "M5 Air not charging on MagSafe 3", body: "The M5 Air shares the M4 charging board layout. Amber/green LED with no charge usually points to the MagSafe board or cable, not the battery. We test both charging paths (MagSafe and USB-C) before ordering any part." },
        { title: "M5 Air drains fast driving two external displays", body: "Normal. Dual 4K displays with sustained GPU load empty the 13-inch cell in 3–5 hours. Run a free health check to confirm the battery is fine before considering replacement." },
        { title: "Cycle count wrong after a macOS restore", body: "After a DFU restore the cycle count can read 0 or undefined until the BMS re-trains over 2–3 full charges. If it does not settle, we re-calibrate the BMS." },
        { title: "M5 Air battery swelling", body: "Extremely rare on a 2026 model but it happens with cell defects. Raised trackpad, lifting bottom case or a visible bulge: stop using it, do not charge it, bring it in the same day. We remove and dispose of swollen cells safely and check whether Apple will cover the replacement." },
      ]}
      faqs={[
        { q: "How much does MacBook Air M5 battery replacement cost in Dubai?", a: "The 13-inch and 15-inch M5 Air are quoted separately after a free diagnosis. Every quote includes the new cell, BMS firmware re-pair, adhesive refitting, labour and a written warranty. Turnaround is 1–2 business days while M5 stock builds." },
        { q: "My M5 Air is new - should I go to Apple first?", a: "Usually yes. The M5 Air launched in March 2026, so it is inside Apple's 1-year warranty. A defective cell is covered at no cost; AppleCare+ covers replacement below 80% capacity. We check your coverage for free and tell you honestly. We are the right choice for accidental damage, liquid, or when you cannot wait for an appointment." },
        { q: "Does the M5 Air need BMS re-pair after a battery swap?", a: "Yes, like every Apple Silicon Mac. The BMS maps the new cell to the SMC so macOS reports accurate capacity and cycle count and fast charging works. It is included in the price." },
        { q: "Is the M5 Air battery the same as the M4 Air battery?", a: "Same capacities and chassis, but a different part number. We fit M5-specific cells to guarantee fit and BMS compatibility." },
        { q: "How long does M5 Air battery replacement take?", a: "1–2 business days at the moment. As M5 parts availability matures through 2026 we expect same-day service, as we already offer on M1–M3 Airs." },
      ]}
      blogHref="/blog/macbook-air-battery-drain-dubai"
      blogLabel="MacBook Air battery draining fast — causes and fixes"
      l3href="/macbook-air-m5-repair-dubai"
      l3label="MacBook Air M5 Repair Dubai"
    />
  );
}
