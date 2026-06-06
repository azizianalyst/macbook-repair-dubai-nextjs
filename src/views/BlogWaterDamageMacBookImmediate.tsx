"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { Button } from "@/components/ui/button";
import { howTo } from "@/lib/schema";
import { NAP } from "@/content/site";
import { MessageCircle, Phone } from "lucide-react";

export default function BlogWaterDamageMacBookImmediate() {
  const steps = [
    { name: "Power off immediately - hold the power button 10 seconds", text: "Do not try to see if it still works. Every second of current flow through wet circuits accelerates corrosion. Hold the power button for 10 full seconds." },
    { name: "Unplug everything", text: "Disconnect MagSafe or USB-C charger, unplug all peripherals. Yank the MagSafe end first if the wall socket is far away." },
    { name: "Flip upside down in V (tent) shape", text: "Open the lid to about 90 degrees and rest the MacBook upside-down on a clean towel. Lets liquid drain away from the keyboard and screen rather than pooling on the logic board." },
    { name: "Do NOT use rice", text: "Rice absorbs almost no moisture from a sealed device and rice dust gets into ports. The 24 hours wasted in rice is the difference between a AED 700 repair and a AED 2,500 repair." },
    { name: "Do NOT use a hairdryer", text: "Heated air drives moisture deeper into the logic board and can warp components. Same for an oven, the sun, or any heat source." },
    { name: "Do NOT plug in to test", text: "Powering on a wet MacBook causes electrolytic corrosion to start instantly under every chip. The single most damaging thing you can do." },
    { name: "Bring to repair shop within 24 hours", text: "WhatsApp 055 741 3706 - we send the free pickup driver same day for any mainland Dubai address. Recovery rate drops from 80-90% at 24 hours to 40-50% at 72 hours." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="Spilled Water on MacBook? Do This Right Now (2026)"
      seoDescription="MacBook water spill emergency steps. Power off in 10 seconds, flip upside down, no rice, no hairdryer. 80-90% recovery if seen within 24 hours. Free pickup."
      path="/blog/water-damage-macbook-immediate-action"
      category="Emergency · MacBook"
      h1="Spilled Water on MacBook? Do This Right Now"
      hook="Stop reading after Step 1. Power off. Now read Step 2."
      quickAnswer="Spilled liquid on your MacBook? In the next 30 seconds: hold the power button 10 full seconds to force shutdown, unplug the charger, then flip it upside down in a V shape on a towel. Do NOT use rice, a hairdryer or plug in to test. Bring it in within 24 hours for the best recovery."
      author={{ name: "Ali", role: "Senior MacBook board-level technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={9}
      featuredImageAlt="MacBook water damage emergency Dubai - flip upside down V shape on towel"
      extraSchemas={[howTo({
        name: "Save a MacBook after water spill",
        description: "Emergency seven-step procedure for the first 30 minutes after spilling liquid on a MacBook.",
        steps,
        totalTime: "PT15M",
      })]}
      body={
        <>
          <aside className="bg-error/10 border-l-4 border-error rounded-md p-lg max-w-[72ch]">
            <p className="text-[12px] uppercase tracking-wider text-error font-bold mb-xs">Do this in the next 30 seconds</p>
            <p className="text-[16px] leading-relaxed">
              <strong>Hold the power button for 10 seconds. Now.</strong> Then unplug the charger.
              Then flip the MacBook upside down on a towel. Read the rest after.
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

          <h2>Step 1 - Power off immediately</h2>
          <p>
            Hold the power button for 10 full seconds. Force shutdown. Do not try to see if it
            still works. Every second of current flow through wet circuits causes electrolytic
            corrosion that eats copper traces. The damage you can prevent in the first 60 seconds
            is enormous.
          </p>

          <h2>Step 2 - Unplug everything</h2>
          <p>
            Disconnect the MagSafe or USB-C charger, unplug all peripherals (USB-C dongles,
            external displays, headphones). If the MacBook was charging, the wall current is
            still feeding the wet board until you pull the cable.
          </p>

          <h2>Step 3 - Flip upside down (V tent shape)</h2>
          <p>
            Open the lid to about 90 degrees and rest the MacBook upside-down on a clean towel,
            forming a V or A-tent shape. Gravity pulls remaining liquid away from the keyboard,
            trackpad, and the logic board (which sits below the keyboard). Leave it like this for
            12+ hours minimum.
          </p>

          <h2>Step 4 - Do NOT use rice</h2>
          <p>
            The rice trick is internet folklore from 2010 and it does almost nothing. Rice absorbs
            ambient moisture only marginally faster than open air, and rice dust gets sucked into
            ports and fans. Meanwhile, corrosion has already started inside the MacBook within
            minutes of the spill - rice cannot stop corrosion. Wasting 24 hours in rice is the
            difference between a AED 700 Tier 1 repair and a AED 2,500 Tier 3 repair.
          </p>

          <h2>Step 5 - Do NOT use a hairdryer</h2>
          <p>
            Heated air drives moisture deeper into the logic board (it pushes liquid past chip
            edges that surface tension was previously holding) and can warp PCB components. Same
            applies to leaving the MacBook in direct UAE sunlight, in an oven, or on a radiator.
            Room temperature only.
          </p>

          <h2>Step 6 - Do NOT plug in to test</h2>
          <p>
            Plugging the wet MacBook back in to "see if it still works" is the single most
            damaging thing you can do. Powering on a wet board causes instant electrolytic damage
            under every chip. We've seen MacBooks where the customer powered them on 5 times in
            an hour - recoverable cases that became unrecoverable. Resist the urge.
          </p>

          <h2>Step 7 - Bring to a repair shop within 24 hours</h2>
          <p>
            WhatsApp <strong>055 741 3706</strong> with a photo of the MacBook and we'll send the
            free pickup driver same day for any mainland Dubai address. Or visit our workshop at
            Concord Tower, Dubai Media City, 9am-10pm Saturday to Thursday.
          </p>

          <h2>Why time matters - corrosion timeline</h2>
          <p>Recovery success rate by hours since spill, based on our 2024-2025 case data:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>0-24 hours:</strong> 80-90% recovery, mostly Tier 1 (AED 700 cleanup)</li>
            <li><strong>24-48 hours:</strong> 70-80% recovery, often Tier 2 (AED 1,000-1,500 with component repair)</li>
            <li><strong>48-72 hours:</strong> 50-60% recovery, usually Tier 3 (AED 1,500-2,500)</li>
            <li><strong>72+ hours:</strong> 30-40% recovery, often unrecoverable (data recovery only)</li>
            <li><strong>1 week+:</strong> Below 20% - copper traces eaten away, board often beyond repair</li>
          </ul>

          <h2>Salt water (beach/pool) vs fresh water (coffee/tea)</h2>
          <p>
            Salt water is roughly 10× more destructive than fresh water because dissolved salts
            keep conducting current even after the water itself evaporates. Beach spills (Jumeirah,
            JBR, Kite Beach) and pool spills (chlorine + minerals) need to come in within 12
            hours, not 24. Fresh water (filtered, bottled, tap) is the most recoverable. Coffee
            and tea sit between the two - sugar leaves a sticky conductive residue that requires
            longer ultrasonic cleaning.
          </p>

          <h2>What we do when you bring it in</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Open the MacBook within 30 minutes of arrival to halt corrosion</li>
            <li>Remove battery, screen, keyboard, all flex connectors</li>
            <li>Ultrasonic bath in 99.7% isopropyl alcohol at 40°C for 8 minutes</li>
            <li>Microscope inspection of every chip, capacitor, and trace</li>
            <li>Quote you the repair tier in writing before any further work</li>
            <li>Component-level rework on any damaged chips</li>
            <li>Reassemble with new gaskets, full 4-hour stress test before handover</li>
          </ol>

          <h2>Cost expectations - honest</h2>
          <p>
            Tier 1 (clean only, MacBook boots fine): <strong>AED 700</strong>. Tier 2 (clean +
            1-2 damaged ICs): <strong>AED 1,000-1,500</strong>. Tier 3 (heavy board damage):
            <strong> AED 1,800-2,500</strong>. Apple Store charges AED 4,000-6,000 for the same
            damage because they swap the entire logic board. See our{" "}
            <Link to="/blog/macbook-water-damage-repair-cost-success-rates" className="text-accent-bright font-semibold hover:underline">
              full cost guide
            </Link>{" "}
            for tier-by-tier detail.
          </p>
        </>
      }
      faqs={[
        {
          q: "How quickly do I need to bring my MacBook in after a spill?",
          a: "Within 24 hours for the best 80-90% recovery rate. Within 12 hours for salt water (beach/pool). After 72 hours, recovery rate drops below 50% and costs rise sharply because corrosion has already eaten copper traces.",
        },
        {
          q: "Will my MacBook be okay if it 'seemed fine' after the spill?",
          a: "Often no. We see customers whose MacBook 'worked fine for 2 weeks' then died suddenly - the corrosion had been spreading silently. Anything more than a few drops should be professionally cleaned within 24 hours, even if it appears to work.",
        },
        {
          q: "Does the rice trick actually do anything?",
          a: "Almost nothing. Rice absorbs ambient moisture only marginally faster than open air, and corrosion inside your MacBook started within minutes of the spill. The only thing that stops corrosion is opening the MacBook and ultrasonically cleaning the board with isopropyl alcohol.",
        },
        {
          q: "Will Apple repair my water-damaged MacBook?",
          a: "Apple's official policy is to replace the entire logic board for any liquid damage - AED 4,000-6,000. AppleCare+ covers liquid damage at AED 367 deductible per incident. If you have AppleCare+, use it. If not, our component-level approach saves AED 2,500-4,000 versus the Apple quote.",
        },
        {
          q: "Will my data be safe if the MacBook is water-damaged?",
          a: "Intel MacBook (2010-2020): SSD is removable, data recovery 95%+ even if board is dead. M-series MacBook (2020+): SSD is soldered to the board, recovery requires keeping the board alive long enough to image. About 70% success rate. Time Machine backup is essential on M-series.",
        },
        {
          q: "Do you offer pickup for water-damaged MacBooks?",
          a: "Yes - free door-to-door pickup anywhere in mainland Dubai, same day if WhatsApp'd before 6pm. Sharjah and Abu Dhabi pickup AED 50 surcharge. The driver carries a sealed dry bag for transport.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook water damage repair cost & success rates", href: "/blog/macbook-water-damage-repair-cost-success-rates", description: "Full pricing tiers and recovery data." },
        { label: "MacBook water damage service page", href: "/macbook-water-damage-repair-dubai", description: "Process, pickup, and warranty." },
        { label: "MacBook data recovery", href: "/macbook-data-recovery-dubai", description: "When the board is unrecoverable." },
      ]}
    />
  );
}
