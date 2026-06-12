"use client";
import { Plug, MessageCircle, Phone, ShieldCheck, AlertTriangle, Wrench, Star } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer, deriveServiceQuickAnswer } from "@/components/blocks/QuickAnswer";
import { LeadForm } from "@/components/blocks/LeadForm";
import { LinkifyProse } from "@/lib/linkify";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { PageMeta } from "@/components/blocks/PageMeta";
import { PricingTable, type PricingRow } from "@/components/blocks/PricingTable";
import { StepList } from "@/components/blocks/StepList";
import { FAQAccordion, type FAQ } from "@/components/blocks/FAQAccordion";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { TechnicianBadge } from "@/components/blocks/TechnicianBadge";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { WarrantyBar } from "@/components/blocks/WarrantyBar";
import { QuoteBand } from "@/components/blocks/QuoteBand";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization, service as serviceSchema } from "@/lib/schema";
import { pickReviews } from "@/lib/find-reviews";
import { NAP } from "@/content/site";

const PRICING: PricingRow[] = [
  { model: "USB-C port (single, MacBook Air M1-M5)",        price: 350, timeline: "Same day · 2 hours" },
  { model: "USB-C port (Pro 13\"/14\"/16\" Touch Bar/M-series)", price: 350, timeline: "Same day · 3 hours" },
  { model: "USB-C port (full board, both ports + PMIC)",    price: 600, timeline: "1 day"             },
  { model: "MagSafe 3 port (Pro 14\"/16\" M1-M5, Air M2+)", price: 400, timeline: "Same day · 3 hours" },
  { model: "MagSafe 2 port (Retina 2012-2017)",             price: 350, timeline: "Same day"          },
  { model: "MagSafe 1 port (2008-2012 unibody)",            price: 300, timeline: "Same day"          },
  { model: "Charging IC (board-level, no port damage)",     price: 450, timeline: "1 day"             },
  { model: "DC-in board only (Retina Pro 2012-2019)",       price: 350, timeline: "Same day"          },
];

const PROBLEMS = [
  { title: "USB-C port loose - cable wobbles or falls out",
    body: "Worn-out spring tabs inside the port from 5,000+ insertions. Same charger that worked yesterday now needs to be held at an angle. AED 350 port swap, same day on Apple Silicon Air. The internal flex cable is checked free during the bench inspection." },
  { title: "Port not recognized - no charging, no data",
    body: "On the M1/M2 Air the USB-C port is soldered to the logic board with 32 fine-pitch pins. A bent or oxidised pin shows as \"port dead\" in System Information. Hot-air rework re-seats the port (AED 350) or full port swap if pins are damaged." },
  { title: "Bent pin in the USB-C connector",
    body: "Cable yanked sideways while plugged in. The 24-pin USB-C connector has 4 power pins that bend most often. Free diagnosis under the microscope; if only 1-2 pins are bent the port itself can be straightened (AED 200 labour-only). 3+ bent pins means a full port swap." },
  { title: "Intermittent charging - works only at certain angles",
    body: "Cracked solder joint between port and board, usually from being plugged in while the MacBook flexed. Hot-air re-flow fixes 60% of these for AED 250. Full port swap for the other 40% at AED 350." },
  { title: "Charges but no data through USB-C",
    body: "The port has 4 separate functions: USB 2.0 data, USB 3.1 data, DisplayPort, and power. A failed PMIC or USB controller can disable data while leaving power working. AED 450 board-level chip replacement on the failed IC." },
  { title: "MagSafe 3 connector won't latch",
    body: "Magnets weaken after liquid exposure or mechanical impact. AED 400 MagSafe 3 port swap on the M2/M3/M4 Pro 14\"/16\". The new port has fresh neodymium magnets - same retention force as factory-new." },
  { title: "Charges only with a specific charger",
    body: "USB-C PD (Power Delivery) negotiation chip failure. A 30 W charger works but the original 96 W charger doesn't, or vice versa. AED 450 PD controller chip replacement under microscope. Restores full-speed charging across all chargers." },
  { title: "Burn marks or melted plastic inside the port",
    body: "Caused by a bad third-party charger or moisture in the port. The port and the charging IC both need to be replaced (AED 600 combined). The workshop will not refit the original port even if it still works - the carbon residue causes intermittent shorts later." },
  { title: "Charger plugs in fine but no charge LED on MagSafe",
    body: "DC-in board failure on Retina 2012-2019 (AED 350) or charging IC failure on M-series (AED 450). Free diagnosis confirms which. The DC-in board is the cheaper of the two on Intel Macs and very rarely fails on Apple Silicon." },
  { title: "Slow charging - full charge takes twice as long",
    body: "PD chip can't negotiate full wattage. The charger reverts to a 5 V / 3 A safe-mode (15 W) instead of 67-96 W. AED 450 PD chip replacement. Verifiable improvement on the bench - full wattage shows up in System Information > Power within seconds." },
];

const STEPS = [
  { title: "WhatsApp the model + symptom",
    body: "Send the serial number and a description: which port (left or right, MagSafe), what the charger does (chime, no chime, intermittent). Reply within 4-8 minutes during business hours." },
  { title: "Free pickup or walk-in",
    body: "Free pickup from anywhere in Dubai mainland, or drop in to Office #45, Concord Tower, Media City. Diagnosis on the spot - about 15 minutes including a port-by-port test under the microscope." },
  { title: "Bench diagnosis: port vs IC vs board",
    body: "Voltage probe at the charger pin, then at the PMIC, then at the SMC. Tells the technician within 10 minutes whether it's the port itself, the charging IC, the SMC, or a deeper board fault." },
  { title: "Hot-air rework or port swap",
    body: "Port swap: 60-90 minutes under microscope at 380 °C. Charging IC swap: 90 minutes including BGA reball. The board is preheated to 80 °C to prevent solder mask damage." },
  { title: "Full charging cycle test",
    body: "Charged from 10% to 100% on the original Apple charger, then on a third-party 30 W and 96 W charger to verify PD negotiation works across all wattages. System Information > Power confirms wattage handshake." },
  { title: "Free delivery + 12-month warranty card",
    body: "Same-day delivery on common models. Warranty card lists the port batch number - 12 months on parts and labour, transferable once free of charge." },
];

const FAQS: FAQ[] = [
  { q: "How much does MacBook charging port repair cost in Dubai?",
    a: "USB-C port replacement: AED 350 same day on most models. MagSafe 3 port (M2/M3/M4 Pro 14\"/16\"): AED 400 same day. MagSafe 1/2 (2008-2017 Retina): AED 300-350. Charging IC board-level repair (when port is fine): AED 450. DC-in board on Retina Pro 2012-2019: AED 350." },
  { q: "Same day or 1 day - what's typical?",
    a: "Same day on USB-C and MagSafe port swaps when the part is in stock - about 80% of tickets. 1 day if the charging IC needs board-level replacement (longer reflow + cooldown) or if both USB-C ports plus the PMIC need work. The bench can usually finish either category within 4 hours of drop-off." },
  { q: "What's the difference between a port swap and a charging IC repair?",
    a: "Port swap (AED 350) replaces the physical USB-C or MagSafe connector that's loose, bent, or burned. Charging IC repair (AED 450) replaces the chip on the logic board that controls power negotiation - the port itself is fine but the chip can't talk to the charger. Free diagnosis tells which is needed." },
  { q: "Can you fix a bent pin in my USB-C port?",
    a: "Yes. Under microscope at 40x, single bent pins on the 24-pin USB-C connector can be straightened with a tungsten probe (AED 200 labour-only) if the port is otherwise sound. 3+ bent pins or any broken pins means a full port swap at AED 350." },
  { q: "My MacBook Pro charges with one USB-C port but not the other - why?",
    a: "Each USB-C port has its own controller chip on the board. The bad port may have a dead PD chip (AED 450 chip swap) or simply a failed connector (AED 350 port swap). Both ports route to the same battery, so charging from either gives identical battery health - but using the failed port may also block a connected display." },
  { q: "Will my Apple charger still work after repair?",
    a: "Yes - the original charger and cable are tested on the bench before handover. The port swap restores full PD negotiation, so the original 30 W / 67 W / 96 W charger delivers full wattage. If the charger itself is faulty (rare), the workshop can supply a genuine replacement at AED 280 (30 W), AED 400 (67 W), or AED 600 (96 W)." },
  { q: "Does MagSafe 3 (the M2/M3/M4 connector) need different parts than USB-C?",
    a: "Yes. MagSafe 3 is a separate physical port on the right side of the Pro 14\"/16\" - it routes through its own controller chip. AED 400 part replacement, same day. The USB-C ports continue to work for charging if MagSafe 3 fails, so the MacBook is usable while waiting for a slot." },
  { q: "What's the warranty?",
    a: "12-month written warranty on parts and labour. Covers port failure, charging IC failure, intermittent charging returning. Does not cover damage from a bad charger or moisture entering after the repair. Transferable once free of charge to a new owner." },
  { q: "Will my data be safe during charging port repair?",
    a: "Yes. The SSD is on a separate area of the logic board, untouched during port or IC work. Files, apps, FileVault encryption all stay intact. The workshop still recommends a Time Machine backup as standard practice." },
  { q: "Why does my MacBook charge slowly with a third-party charger but fast with the Apple one?",
    a: "USB-C PD negotiation. The Apple charger advertises a specific power profile (e.g. 96 W at 20 V) that the MacBook recognises. Cheap third-party chargers often only advertise 15 W (5 V / 3 A safe mode), which the MacBook then accepts. If a previously fast third-party charger now charges slowly, the PD chip on the board may be failing - AED 450 board-level fix." },
  { q: "Can you repair a USB-C port on a MacBook Air M1?",
    a: "Yes - the M1 Air has 2 USB-C ports both soldered to the main logic board with 32 fine-pitch pins each. Port swap takes 90 minutes under microscope at AED 350. The port is sourced from the original Foxconn factory that builds the Apple part." },
  { q: "Do you offer pickup for charging port repair?",
    a: "Yes, free pickup and delivery across Dubai mainland. Same-hour pickup from Internet City, Knowledge Village, JLT, Al Barsha. Same-day from Marina, Downtown, JBR, Palm. Sharjah and Abu Dhabi pickup AED 100 each way." },
];

const COMPARISON = [
  ["Repair window",                       "Same day to 1 day",                      "5 to 14 business days, mail-in"],
  ["USB-C port swap (single)",            "AED 350",                                 "Refused - full board swap only AED 4,000+"],
  ["MagSafe 3 port swap",                 "AED 400",                                 "Refused - full board swap only"],
  ["Charging IC board-level",             "AED 450",                                 "Refused - full board swap only"],
  ["Bent-pin straightening (1-2 pins)",   "AED 200 labour-only",                    "Refused"],
  ["Free pickup in Dubai",                "Yes",                                     "No, customer must courier"],
  ["Warranty",                            "12 months written",                         "12 months"],
  ["Vintage/obsolete (pre-2017)",         "Yes - back to MagSafe 1 (2008)",         "Refused"],
];

export default function MacBookChargingPortRepair() {
  const reviews = pickReviews([
    "Reiner Kaltenbach",
    "Ayyaz Walayat",
    "JJ Fu",
    "Stephen Quinn",
    "Aleksandra Ładna",
    "Tanja Lykke Sørensen",
  ]);

  useSeo(
    {
      title: "MacBook Charging Port Repair Dubai - From AED 350",
      description:
        "MacBook USB-C and MagSafe 3 port repair Dubai from AED 350. Same-day port swap, charging IC board-level repair. M1-M5. 12-month warranty. 055 741 3706.",
      path: "/macbook-charging-port-repair-dubai",
    },
    [
      localBusiness(),
      organization(),
      serviceSchema({
        name: "MacBook Charging Port Repair Dubai",
        price: 350,
        timeline: "Same day to 1 day",
        warranty: "P1Y",
        url: "/macbook-charging-port-repair-dubai",
        description:
          "MacBook USB-C and MagSafe charging port repair in Dubai. Bent pins, intermittent charging, port not recognised, charging IC board-level repair. M1-M5 and Intel.",
      }),
    ],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/macbook-usbc-port-repair-dubai.jpg"
        imageAlt="MacBook USB-C Thunderbolt port repair Dubai - port assembly infographic"
        variant="service"
        tone="dark"
        eyebrow="MacBook charging port repair"
        title="MacBook Charging Port Repair Dubai - USB-C and MagSafe"
        subtitle="Loose USB-C, bent pins, intermittent charging, MagSafe 3 won't latch. Port swap from AED 350 same day, charging IC repair AED 450, 12-month warranty."
        startingPrice={350}
        timeline="Same day · 1 day"
      >
        <PageMeta author="Shafiq Ahmed, Lead MacBook Technician" />
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer tone="dark" {...deriveServiceQuickAnswer({ serviceName: "MacBook charging port repair", startingPrice: 350, timeline: "same-day on most models" })} />

      <WarrantyBar tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home",                     path: "/" },
          { name: "MacBook Repair",           path: "/" },
          { name: "Charging Port Repair",     path: "/macbook-charging-port-repair-dubai" },
        ]} />
      </section>

      <div className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <div className="max-w-[820px] flex flex-col gap-3xl">
          {/* Intro */}
          <section>
            <LinkifyProse selfHref="/macbook-charging-port-repair-dubai"><p className="text-[17px] text-text leading-relaxed">
              MacBook charging port repair in Dubai starts at AED 350 for a USB-C port swap and AED 400 for a MagSafe 3 port - most jobs finish the same day. The workshop has fitted 1,400+ USB-C ports and 280+ MagSafe 3 ports since 2018. Loose connectors, bent pins, intermittent charging, dead ports, slow charging from PD negotiation failure - all covered. When the port itself is fine but the charging IC on the logic board has failed, board-level chip replacement under microscope is AED 450. Free diagnosis confirms which is needed before any paid work begins.
            </p></LinkifyProse>
          </section>

          {/* Models + pricing */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook charging ports we repair</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Every MacBook from MagSafe 1 (2008) through MagSafe 3 and USB-C on the M5 Pro. Prices include the part, microscope labour, full charging cycle test, and the 12-month warranty.
            </p>
            <PricingTable service="Charging port repair" rows={PRICING} tone="dark" />
          </section>

          {/* Common problems */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <AlertTriangle size={28} className="text-accent" aria-hidden /> Common charging-port problems we fix
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              The 10 highest-volume charging-port tickets at the workshop in 2024-2025.
            </p>
            <div className="grid gap-md md:grid-cols-2">
              {PROBLEMS.map((p) => (
                <article key={p.title} className="border border-border bg-bg-card rounded-md p-lg">
                  <h3 className="text-[16px] font-bold mb-sm text-text">{p.title}</h3>
                  <p className="text-[14px] text-text-muted leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Process */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Wrench size={28} className="text-accent" aria-hidden /> Our charging port repair process
            </h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">
              Six steps. The voltage probe diagnosis distinguishes a port issue (cheap fix) from a charging IC issue (slightly more) within 10 minutes.
            </p>
            <StepList steps={STEPS} tone="dark" />
          </section>

          {/* Port swap vs IC repair explainer */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md text-text">Port swap vs charging IC repair - which one do you need?</h2>
            <div className="grid gap-md md:grid-cols-2">
              <div>
                <h3 className="text-[16px] font-bold mb-sm text-text">Port swap (AED 350-400)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">The physical connector is loose, bent, burned, or has worn-out spring tabs. The board itself is healthy - voltage reaches the port pins correctly. 70% of tickets.</p>
              </div>
              <div>
                <h3 className="text-[16px] font-bold mb-sm text-text">Charging IC repair (AED 450)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">The port looks perfect but the controller chip on the logic board has failed. Symptoms: charges slowly, charges only with one specific charger, or doesn't charge at all despite a clean port. 30% of tickets.</p>
              </div>
            </div>
            <p className="text-[14px] text-text-muted mt-md">
              The free 15-minute bench diagnosis identifies which category before any paid work. About 5% of tickets need both - combo price AED 600 instead of AED 800 if booked together.
            </p>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">How long does charging port repair take?</h2>
            <div className="grid gap-md md:grid-cols-3">
              <article className="bg-success/5 border border-success/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Same day (2-4 hours)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">USB-C port swap on M1-M5 Air, MagSafe 3 on Pro 14″/16″ and Air M2+, MagSafe 1/2 on Retina, DC-in board on Retina Pro. About 80% of tickets.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">1 day</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Charging IC board-level repair (longer BGA reflow + cooldown), or combo port + IC job. Pin-straightening labour-only on stubborn cases.</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">2 days (rare)</h3>
                <p className="text-[14px] text-text-muted leading-relaxed">Only when MagSafe 3 stock is exhausted (during release months) or when burn damage requires both port and PMIC replacement.</p>
              </article>
            </div>
          </section>

          {/* Parts */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">What parts and tools we use</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Genuine Foxconn / Apple-spec ports</h3>
                <p className="text-[14px] text-text-muted leading-relaxed mb-sm">USB-C and MagSafe ports sourced from the original Foxconn assembly line that builds the Apple part. Same neodymium magnets in MagSafe 3, same gold-plated spring tabs in USB-C.</p>
                <p className="mono text-[13px] text-accent">AED 350-400 - included</p>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Quick 861DW hot-air station + microscope</h3>
                <p className="text-[14px] text-text-muted leading-relaxed mb-sm">Temperature-controlled hot air at 380 °C, 40x stereo microscope, leaded and lead-free solder paste. The bench is set up specifically for fine-pitch USB-C work - 0.5 mm pin spacing requires this gear.</p>
                <p className="mono text-[13px] text-accent">Bench tooling - no surcharge</p>
              </article>
            </div>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <ShieldCheck size={28} className="text-accent" aria-hidden /> Warranty
            </h2>
            <div className="border border-border bg-bg-card rounded-md p-lg">
              <ul className="space-y-2 text-[15px] text-text">
                <li><strong>12 months</strong> - written warranty on parts and labour.</li>
                <li><strong>Covered:</strong> port re-failure, intermittent charging returning, charging IC failure, cold-solder cracks.</li>
                <li><strong>Not covered:</strong> damage from a bad/cheap charger after repair, moisture entering the port, physical damage from cable yanking.</li>
                <li><strong>How to claim:</strong> WhatsApp the warranty card photo. Same-day collection. Replacement fitted within 48 hours.</li>
              </ul>
            </div>
          </section>

          {/* Pricing recap */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Charging port repair cost in Dubai - transparent pricing</h2>
            <p className="text-[16px] text-text-muted max-w-[70ch] mb-lg">No hidden fees. Quote on WhatsApp = price on collection. No diagnostic fee, no microscope surcharge, no VAT add-on.</p>
            <PricingTable service="Charging port repair" rows={PRICING} tone="dark" />
          </section>

          {/* Mid-page CTA band */}
          <QuoteBand
            service="MacBook Charging Port Repair"
            startingPrice={350}
            timeline="Same day · 1 day"
            whatsappMessage="Hi Shafiq, MacBook charging port repair quote please. Model + which port (USB-C left/right or MagSafe): "
          />

          {/* Technician */}
          <section className="bg-bg-alt rounded-md p-lg border border-border">
            <h2 className="text-[22px] mb-md text-text">Lead technician on charging port jobs</h2>
            <TechnicianBadge name="Shafiq Ahmed" years={21} specialisation="Board & port micro-soldering" tone="dark" />
            <p className="text-[14px] text-text-muted mt-md max-w-[70ch]">
              Shafiq personally handles every charging IC repair - fine-pitch BGA work needs steady hands and 21 years of microscope experience.
            </p>
          </section>

          {/* DIY */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">When DIY makes sense - and when it doesn't</h2>
            <div className="grid gap-md md:grid-cols-2">
              <article className="bg-success/5 border border-success/30 rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Try it yourself first</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>SMC reset - clears charging firmware glitches free of charge in about 10% of cases.</li>
                  <li>Try a different cable + charger - rules out the accessory before blaming the port.</li>
                  <li>Inspect the port with a torch - visible debris (lint, sand) can be removed with compressed air at 90°.</li>
                  <li>Check System Information &gt; Power for charger wattage - confirms whether PD negotiation is happening.</li>
                </ul>
              </article>
              <article className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm text-text">Stop and bring it in</h3>
                <ul className="space-y-2 text-[14px] text-text-muted">
                  <li>Visible bent or broken pins - straightening without microscope risks snapping the pin off.</li>
                  <li>Burn marks inside the port - the charging IC is likely also damaged; powering on risks more damage.</li>
                  <li>Intermittent charging - DIY soldering on a multi-layer board destroys via barrels.</li>
                  <li>MagSafe magnets stuck full of metal shavings - magnets cannot be cleaned; the port assembly must be replaced.</li>
                </ul>
              </article>
            </div>
          </section>

          {/* Comparison */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">Charging Port Repair vs Apple Store Dubai</h2>
            <div className="overflow-x-auto border border-border rounded-md bg-bg-card">
              <table className="w-full text-[14px] min-w-[640px]">
                <thead className="bg-bg-alt">
                  <tr className="text-left">
                    <th className="px-md py-sm font-semibold text-text">Factor</th>
                    <th className="px-md py-sm font-semibold text-text">MacBook Repair Dubai</th>
                    <th className="px-md py-sm font-semibold text-text">Apple Store / AASP</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row[0]} className={i % 2 ? "bg-bg-alt" : ""}>
                      <td className="px-md py-sm font-semibold text-text">{row[0]}</td>
                      <td className="px-md py-sm text-text">{row[1]}</td>
                      <td className="px-md py-sm text-text-muted">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-text-faint mt-sm mono">
              Apple's UAE policy on USB-C and MagSafe ports is full logic board replacement, not component-level repair. The workshop is the right call for everyone outside AppleCare+.
            </p>
          </section>

          {/* Reviews */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md flex items-center gap-sm text-text">
              <Star size={28} className="text-star fill-star" aria-hidden /> Real charging-port reviews
            </h2>
            <p className="text-[14px] text-text-muted mb-lg">
              All six reviews verbatim from Google. <a href="/reviews" className="text-accent font-semibold hover:underline">Read all 215+ →</a>
            </p>
            <ReviewGrid reviews={reviews} tone="dark" />
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-md text-text">MacBook charging port FAQ</h2>
            <FAQAccordion items={FAQS} injectSchema tone="dark" />
          </section>

          {/* Related */}
          <section>
            <RelatedServices tone="dark" items={[
              { label: "MacBook Battery Replacement", href: "/macbook-battery-replacement-dubai", description: "From AED 450 in 2 hours. Often paired with charging-port work if the battery has stopped holding charge." },
              { label: "MacBook Logic Board Repair",  href: "/macbook-logic-board-repair-dubai",  description: "Component-level board work from AED 800. PMIC, SMC, T2 - same microscope and bench." },
              { label: "MacBook Water Damage Repair", href: "/macbook-water-damage-repair-dubai", description: "Liquid in the port? AED 700 ultrasonic clean - bring it in within 24 hours." },
            ]} />
          </section>

          {/* Internal sub-link block */}
          <section>
            <h2 className="text-[22px] mb-md text-text">More on charging</h2>
            <ul className="grid gap-2 md:grid-cols-2 text-[14px]">
              <li><a className="text-accent font-semibold hover:underline" href="/blog/macbook-not-turning-on-fix-guide">Blog: MacBook not charging - full troubleshooting guide</a></li>
              <li><a className="text-accent font-semibold hover:underline" href="/blog/lightning-vs-usb-c-explained-2026">Blog: USB-C vs MagSafe 3 - which charger should you use?</a></li>
            </ul>
          </section>

          {/* Location */}
          <section>
            <h2 className="text-[28px] md:text-[32px] mb-lg text-text">Where to bring your MacBook</h2>
            <LocationBlock tone="dark" />
          </section>
        </div>
      </div>

      {/* Final CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[28ch]">Loose USB-C? Bent pin? WhatsApp the model - quote in 4 minutes</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Year, processor, which port. Free pickup across Dubai mainland. 12-month written warranty on every port and IC fitted.
          </p>
          <div className="relative flex flex-wrap gap-sm">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
        <section id="quote" className="mx-auto max-w-content px-5 md:px-6 mt-3xl scroll-mt-24">
      <h2 className="text-[28px] md:text-[32px] mb-md text-text">Get your free repair quote</h2>
      <p className="text-[15px] text-text-muted mb-lg max-w-[60ch]">Two quick steps — your device, then how to reach you. Free diagnosis, written quote, 12-month warranty.</p>
      <LeadForm variant="compact" defaultDeviceType="MacBook" sourcePath="/macbook-charging-port-repair-dubai" />
    </section>
    <RelatedArticles path="/macbook-charging-port-repair-dubai" />
    </PageShell>
  );
}
