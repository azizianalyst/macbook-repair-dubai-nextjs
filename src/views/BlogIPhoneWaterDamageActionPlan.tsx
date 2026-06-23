"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { Button } from "@/components/ui/button";
import { howTo } from "@/lib/schema";
import { NAP } from "@/content/site";
import { MessageCircle, Phone } from "lucide-react";

export default function BlogIPhoneWaterDamageActionPlan() {
  const steps = [
    { name: "Power off immediately", text: "Hold Side + Volume Down for 3 seconds, drag the slider. Or force-shutdown if frozen: Volume Up, Volume Down, hold Side button until screen goes black. Every second of current flow accelerates corrosion." },
    { name: "Don't try to charge it", text: "Plugging in a wet iPhone causes instant electrolytic damage under chips on the logic board. Resist the urge to 'see if it still works'." },
    { name: "Remove the SIM tray", text: "Use the SIM ejector or a paperclip. Removing the tray opens a vent for trapped moisture and gives us a clear path to inspect for liquid intrusion." },
    { name: "Pat dry external surfaces only", text: "Microfiber cloth on the screen, ports, and seams. Do not push cotton swabs into the Lightning/USB-C port - you'll only push moisture deeper." },
    { name: "Don't shake or use heat", text: "Shaking spreads liquid further across the logic board. Hairdryers, ovens, and direct sunlight warp components and drive moisture into chip packages." },
    { name: "Bring to us within 4 hours", text: "iPhones have far less internal volume than MacBooks - corrosion progresses much faster. WhatsApp 055 741 3706 - free pickup driver dispatched same day for any mainland Dubai address." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="iPhone Water Damage - First 30 Minutes Action Plan"
      seoDescription="Spilled liquid on iPhone? 6-step emergency plan: power off, remove SIM, pat dry, no rice, no charging. 80%+ recovery within 4 hours. Salt vs fresh water tips."
      path="/blog/iphone-water-damage-action-plan"
      wide
      toc={[
        { id: "step-power-off", label: "Step 1: Power off" },
        { id: "step-dont-charge", label: "Step 2: Don't charge" },
        { id: "step-remove-sim", label: "Step 3: Remove SIM tray" },
        { id: "step-pat-dry", label: "Step 4: Pat dry external" },
        { id: "step-no-heat", label: "Step 5: No shaking or heat" },
        { id: "step-bring-in", label: "Step 6: Bring in within 4 hours" },
        { id: "ip-rating", label: "Why IP rating fails" },
        { id: "salt-water", label: "Salt water vs fresh water" },
        { id: "repair-cost", label: "Repair cost expectations" },
        { id: "insurance-claim", label: "Insurance claim guidance" },
      ]}
      category="Emergency · iPhone"
      h1="iPhone Water Damage - Your 30-Minute Action Plan"
      hook="Don't power on. Don't put it in rice. Don't try to charge it. Read this first - the next 30 minutes decide everything."
      quickAnswer="Spilled liquid on your iPhone? In the next 30 seconds, hold Side + Volume Down to power off, then remove the SIM tray and pat dry with microfibre. Do not charge, use rice, or use a hairdryer. iPhones corrode faster than MacBooks, so reach a repair shop within 4 hours for the best 80%+ recovery rate."
      author={{ name: "Usman", role: "Senior iPhone board-level technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={9}
      featuredImageAlt="iPhone water damage emergency Dubai - power off and SIM tray removal first 30 minutes"
      extraSchemas={[howTo({
        name: "Save an iPhone after water damage in the first 30 minutes",
        description: "Six emergency steps for the critical first half-hour after spilling liquid on an iPhone.",
        steps,
        totalTime: "PT10M",
      })]}
      body={
        <>
          <aside className="bg-error/10 border-l-4 border-error rounded-md p-lg max-w-[72ch]">
            <p className="text-[12px] uppercase tracking-wider text-error font-bold mb-xs">Do this in the next 30 seconds</p>
            <p className="text-[16px] leading-relaxed">
              <strong>Hold Side + Volume Down. Power off NOW.</strong> Then remove the SIM tray.
              Read the rest after.
            </p>
            <div className="flex flex-wrap gap-sm mt-md">
              <Button asChild variant="whatsapp" size="lg">
                <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden /> WhatsApp emergency
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={`tel:${NAP.phoneE164}`}>
                  <Phone aria-hidden /> Call {NAP.phoneDisplay}
                </a>
              </Button>
            </div>
          </aside>

          <h2 id="step-power-off">iPhone Water Damage. Step 1 - Power off immediately</h2>
          <p>
            Hold Side button + Volume Down together for 3 seconds, then drag the power slider. If
            the iPhone is frozen: press Volume Up, press Volume Down, then hold the Side button
            until the screen goes black (about 10 seconds).
          </p>
          <p>
            Every second of current flow through wet circuits causes electrolytic corrosion that
            eats copper traces. The iPhone's logic board is incredibly densely packed - once
            corrosion starts under a chip, it can take out 5-10 components in minutes.
          </p>

          <h2 id="step-dont-charge">Step 2 - Don't try to charge it</h2>
          <p>
            Plugging a wet iPhone into a charger is the most damaging thing you can do. The
            charging IC and PMIC come alive, current flows through wet circuits, and you'll watch
            an otherwise-recoverable iPhone go from "Tier 1 cleanup AED 400" to "logic board
            replacement AED 1,500".
          </p>

          <h2 id="step-remove-sim">Step 3 - Remove the SIM tray</h2>
          <p>
            Use the SIM ejector pin (lives in the original iPhone box) or a straightened paperclip.
            Push firmly into the small hole on the side. Removing the tray serves two purposes:
            opens an internal vent for trapped moisture, and gives us a clear path to inspect for
            liquid intrusion when you bring it in.
          </p>

          <h2 id="step-pat-dry">Step 4 - Pat dry external (NOT internal)</h2>
          <p>
            Microfiber cloth on the screen, the ports, the speaker grilles, the seams. Wipe gently
            - do not push cotton swabs into the Lightning or USB-C port (you'll push trapped
            moisture deeper into the connector). Do not open the iPhone yourself.
          </p>

          <h2 id="step-no-heat">Step 5 - Don't shake or dry with heat</h2>
          <p>
            Shaking the iPhone spreads liquid across the logic board (it was probably localised
            in one corner - now it's everywhere). Hairdryers and ovens drive moisture deeper and
            can warp components. Direct sunlight in Dubai summer can hit 65°C surface temperature
            on a black iPhone - also too hot.
          </p>
          <p>
            Room temperature only. iPhone screen-down on a clean towel until you bring it to us.
          </p>

          <h2 id="step-bring-in">Step 6 - Bring to us within 4 hours</h2>
          <p>
            iPhones have roughly 1/10th the internal air volume of a MacBook. There is no airflow
            for moisture to escape, and the densely-packed logic board has dozens of chips with
            ~0.2mm spacing - perfect for capillary corrosion. Recovery rate drops faster than for
            MacBooks:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>0-4 hours:</strong> 85-90% recovery, mostly Tier 1 (AED 400 cleanup)</li>
            <li><strong>4-12 hours:</strong> 70-80% recovery, often Tier 2 (AED 700-1,000)</li>
            <li><strong>12-24 hours:</strong> 50-60% recovery, often Tier 3 (AED 1,000-1,500)</li>
            <li><strong>24-48 hours:</strong> 35-45% recovery</li>
            <li><strong>48 hours+:</strong> Below 25% - board often beyond repair</li>
          </ul>

          <h2 id="ip-rating">Why iPhone IP rating doesn't always save you</h2>
          <p>
            iPhone 12 onward is rated IP68 - Apple says 6 metres for 30 minutes. In practice,
            this rating is tested with fresh water on a brand-new iPhone in a lab. Real-world
            failures are common because:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>The waterproof gaskets degrade with age, drops, and after any prior screen or battery repair</li>
            <li>Salt water (sea, pool) is much more corrosive than fresh water (the IP test fluid)</li>
            <li>Hot water expands the gaskets and breaks the seal</li>
            <li>Pressure (diving deeper than 6m, or jet streams from showers) exceeds the rating</li>
            <li>Apple's warranty explicitly excludes liquid damage even on IP68 iPhones</li>
          </ul>

          <h2 id="salt-water">Salt water = much worse than fresh water</h2>
          <p>
            Salt water is roughly 10× more destructive than fresh water because dissolved salts
            keep conducting current after the water evaporates. JBR, Kite Beach, Jumeirah -
            iPhones dropped in the sea need to come in within 2 hours, not 4. Pool water is in
            between (chlorine + minerals).
          </p>
          <p>
            Coffee, tea, juice, and energy drinks have sugar that leaves a sticky conductive
            residue requiring longer ultrasonic cleaning. The Tier 1 price (AED 400 with no
            component damage) doubles for sugary spills because of the extra cleaning labour.
          </p>

          <h2 id="repair-cost">Repair cost expectations</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Tier 1 - Clean only (boots, no faults):</strong> AED 400</li>
            <li><strong>Tier 2 - Clean + 1-2 component repairs:</strong> AED 700-1,000</li>
            <li><strong>Tier 3 - Heavy board damage:</strong> AED 1,000-1,500</li>
            <li><strong>Logic board swap (Apple's only option):</strong> AED 1,500-2,500 - losing your data unless we image first</li>
            <li><strong>Free diagnostic, no obligation</strong></li>
          </ul>

          <h2 id="insurance-claim">Insurance claim guidance</h2>
          <p>
            <strong>AppleCare+:</strong> covers liquid damage at AED 367 deductible (USD 99) per
            incident, up to 2 per year. Cheaper than us if you have it. Use it.
          </p>
          <p>
            <strong>UAE home contents insurance:</strong> ADCB, Emirates Islamic, AXA, RSA, and
            most major insurers offer named-device riders for smartphones. We provide an itemised
            quote with photo evidence for your claim - most insurers settle within 2 weeks.
          </p>
          <p>
            <strong>Credit card purchase protection:</strong> if you bought the iPhone in the past
            12 months on Visa Signature/Infinite or Mastercard World Elite, you may be covered.
            Check your card terms.
          </p>
          <p>
            See our{" "}
            <Link to="/iphone-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">
              iPhone water damage page
            </Link>{" "}
            for the full process and pricing.
          </p>
        </>
      }
      faqs={[
        {
          q: "How quickly do I need to bring my iPhone in after a spill?",
          a: "Within 4 hours for the best 85-90% recovery rate. iPhones have far less internal air volume than MacBooks and corrosion spreads faster. Salt water (beach, pool) - within 2 hours. After 24 hours, recovery drops below 60% and costs rise sharply.",
        },
        {
          q: "My iPhone is IP68 rated - won't it survive water?",
          a: "Sometimes yes, often no. The IP68 rating uses fresh water on a brand-new iPhone in a lab. Salt water, hot water, pressure (showers, deep pools), or any prior repair (which breaks the gasket seal) all reduce real-world resistance below the rating.",
        },
        {
          q: "Does the rice trick work for iPhones?",
          a: "No. Rice absorbs ambient moisture only marginally faster than open air, and corrosion inside the iPhone started within minutes of the spill. The 24 hours wasted in rice is the difference between a AED 400 cleanup and a AED 1,500 board-level repair.",
        },
        {
          q: "Will Apple repair my water-damaged iPhone?",
          a: "Apple replaces the entire logic board for any liquid damage - AED 1,500-2,500. AppleCare+ covers it at AED 367 deductible. If you have AppleCare+, use it. If not, our component-level approach typically saves AED 800-1,500 versus the Apple quote.",
        },
        {
          q: "Will my data and photos be safe?",
          a: "On iPhones 8 and later, the storage is soldered to the logic board. If we can recover the board, your data is intact. If the board is unrecoverable, we can sometimes pull data via NAND chip-off (AED 1,500-2,500). iCloud or computer backup is essential.",
        },
        {
          q: "Will Apple know my iPhone has been water damaged?",
          a: "Yes. Apple iPhones have Liquid Contact Indicators (LCIs) inside the SIM tray slot and other ports - they turn red when exposed to liquid. We document LCI status in your invoice with photos so there's no ambiguity for any future Apple service request.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone water damage service page", href: "/iphone-water-damage-repair-dubai", description: "Process, pickup, and pricing tiers." },
        { label: "iPhone water damage cost guide", href: "/blog/iphone-water-damage-repair-cost-dubai", description: "Full pricing and recovery data." },
        { label: "iPhone not charging - 7 fixes", href: "/blog/iphone-not-charging-7-fixes", description: "If charging fails after exposure." },
      ]}
    />
  );
}
