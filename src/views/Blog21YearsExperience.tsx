"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { NAP, TEAM } from "@/content/site";

const YEARS = NAP.yearsInBusiness;
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

// The bench team, straight from the roster in site.ts - names, roles and years are never typed here.
const BENCH = TEAM.filter((t) => ["Shafiq", "Usman", "Ali", "Hamza"].includes(t.name));

export default function Blog21YearsExperience() {
  return (
    <BlogPostTemplate
      seoTitle="Why Two Decades of Apple Repair Experience Matter"
      seoDescription="40,000+ devices repaired since October 2004. What two decades of Apple repair experience actually means for your repair quality, parts and team."
      path="/blog/why-21-years-experience-matters"
      wide
      toc={[
        { id: "quick-answer", label: "Quick answer" },
        { id: "founded-2004", label: "Apple's lineup in 2004" },
        { id: "models-serviced", label: "Apple platforms we repair" },
        { id: "component-level-era", label: "Component-level era since 2012" },
        { id: "failure-patterns", label: "Failure patterns that take years" },
        { id: "tools-built", label: "Tools" },
        { id: "parts-network", label: "Parts" },
        { id: "team-continuity", label: "Who is on the bench" },
        { id: "pop-up-shops", label: "What a new shop can't buy" },
        { id: "repair-quality", label: "What this means for quality" },
      ]}
      category="Trust · About us"
      h1="What Two Decades of Apple Repair Mean for Your Mac"
      hook="Started October 2004. 40,000+ devices repaired. Here's what longevity actually means for your repair."
      quickAnswer={`${YEARS} years of Apple repair means failure patterns remembered across PowerPC, Intel and Apple Silicon Macs, tooling built up since 2004, and a long-serving bench team. A new shop can buy tools and hire technicians, but it cannot buy that history.`}
      author={{ name: "Abdul Aziz", role: "Founder" }}
      datePublished="2026-04-28"
      dateModified="2026-10-11"
      readingMinutes={8}
      featuredImageAlt={`MacBook Repair Dubai: ${YEARS} years of Apple repair experience since 2004`}
      body={
        <>
          <h2 id="quick-answer">Why does two decades of experience matter? Quick answer</h2>
          <p>
            We opened on <strong>10 October 2004</strong>. Apple's top laptop was the PowerBook G4,
            and the iPhone was more than two years away. {YEARS} years later we repair Macs from
            Intel to the 2026 M5 and M6 models, plus iPhone and iPad.
          </p>

          <h2 id="founded-2004">Founded 2004 - what was Apple's lineup then?</h2>
          <p>When we opened, Apple sold:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>PowerBook G4</strong> (12" / 15" / 17") and <strong>iBook G4</strong> laptops.</li>
            <li><strong>eMac</strong>, <strong>iMac G5</strong> (just launched) and the <strong>Power Mac G5</strong> tower.</li>
            <li><strong>iPod</strong> 4th gen and iPod mini.</li>
          </ul>
          <p>
            No Intel Macs (those came in 2006), no iPhone and no iPad. Just Macs and iPods.
          </p>

          <h2 id="models-serviced">Which Apple platforms do we repair today?</h2>
          <BlogPriceTable
            caption="Apple platforms we repair today"
            headers={["Platform", "Apple introduced", "What we repair"]}
            rows={[
              { model: "Intel Mac", ours: "2006", apple: "Screens, batteries, keyboards, logic boards, data recovery" },
              { model: "iPhone", ours: "2007", apple: "Screens, batteries, back glass, cameras, charging ports" },
              { model: "iPad", ours: "2010", apple: "Screens, batteries, charging ports" },
              { model: "Apple Silicon Mac (M1 onward)", ours: "2020", apple: "Screens, batteries, keyboards, liquid damage, logic boards" },
            ]}
          />

          <h2 id="component-level-era">How has Apple repair changed since 2012?</h2>
          <p>
            Until the 2012 Retina MacBook Pro, Mac repair was largely modular: swap the screen,
            keyboard or hard drive. From then on Apple soldered RAM and glued batteries; from 2016 it
            soldered the SSD on most MacBook Pros and paired Touch ID to the board (Face ID on iPhone
            from 2017). Board-level micro-soldering became
            essential: chip-level work on fine-pitch BGA packages with hot-air rework stations and
            stereo microscopes. Without that equipment and the practice to use it, modern Apple
            Silicon logic-board repair isn't possible.
          </p>
          <p>
            Touch Bar (2016), the butterfly keyboard (2015-2019), Flexgate (2016-2017) and Apple
            Silicon's unified memory (2020+) each brought new failure patterns, and new repair
            procedures to go with them.
          </p>

          <h2 id="failure-patterns">Which failure patterns take years to learn?</h2>
          <p>A few patterns that only become familiar with time on the bench:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>MacBook Pro 2016-2017 Flexgate</strong>: a stage-light effect along the bottom of the screen, caused by a display flex cable that was too short. Where the backlight LEDs are still healthy we replace just the cable, not the whole screen - see our{" "}
              <Link to="/blog/macbook-flexgate-explained" className="text-accent font-semibold underline underline-offset-2 hover:no-underline">flexgate guide</Link>.
            </li>
            <li><strong>Butterfly keyboards (2015-2019)</strong>: a grain of dust under a key stops it working. Apple's free Keyboard Service Program has ended, so a failing keyboard is now a paid top-case swap.</li>
            <li><strong>AMD GPUs in 2017-2019 MacBook Pro 15″ and 27″ iMacs</strong>: after years of heat cycling the GPU's solder bond can crack, giving lines, artefacts or no display. A reball replaces the bond; a reflow only buys time.</li>
          </ul>

          <h2 id="tools-built">What tools does board-level Apple repair need?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>Stereo inspection microscopes.</li>
            <li>Hot-air and infrared rework stations.</li>
            <li>BGA reballing kit for GPU and chip-level repairs.</li>
            <li>Programmers for True Tone, Face ID and battery serialisation.</li>
            <li>Ultrasonic cleaning for liquid damage.</li>
            <li>ESD-safe benches.</li>
          </ul>

          <h2 id="parts-network">Where do the parts come from?</h2>
          <p>
            We source screens, batteries and board-level chips. Your WhatsApp quote states the
            warranty before work starts and, for screens, the grade: genuine Apple or high-grade
            aftermarket.
          </p>

          <h2 id="team-continuity">Who is on the bench?</h2>
          <ul className="list-disc list-inside space-y-xs">
            {BENCH.map((t) => (
              <li key={t.name}><strong>{t.name}</strong> ({t.years} years) - {t.specialisation}.</li>
            ))}
          </ul>

          <h2 id="pop-up-shops">What can't a new repair shop buy?</h2>
          <p>
            Time is the one ingredient money can't buy. A new shop in 2026 can buy tools, hire
            technicians and source parts, but it hasn't watched Mac, iPhone and iPad generations arrive and
            fail on its own bench. That history lives in workshops that were open when those models
            launched.
          </p>

          <h2 id="repair-quality">What does this mean for your repair quality?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Faster diagnosis</strong>: faults we have seen many times are recognised quickly.</li>
            <li><strong>Fault confirmed before parts</strong>: we find the cause on the bench before fitting anything.</li>
            <li><strong>Re-done free under warranty</strong>: if the same fault returns within the warranty period, we fix it again at no charge.</li>
            <li><strong>Honest decline</strong>: we say no at the quote stage when we don't expect a repair to hold - that protects you from wasted money.</li>
          </ul>
        </>
      }
      faqs={[
        { q: "Are you Apple-Authorised?", a: "No. MacBook Repair Dubai is an independent workshop, not an Apple Authorised Service Provider. We decide which models and faults we take on, including older Macs." },
        { q: "Can you still repair an old PowerPC Mac?", a: "Sometimes. Battery, screen and hard-drive-to-SSD work is possible when parts can still be found. Send us the model on WhatsApp and we'll tell you before you bring it in." },
        { q: "Which Apple Silicon repairs do you handle?", a: "Screens, batteries, keyboards, charging ports, liquid damage and logic-board faults on M-series MacBooks, iMacs, Mac minis and Mac Studios. Logic-board faults are repaired at component level on our own bench. Message us on WhatsApp for today's exact price on your model." },
        { q: "Who will work on my Mac?", a: "Day-to-day MacBook repairs are led by Shafiq, board-level work is Usman's bench, Ali handles data recovery, iMac and Mac mini, and Hamza covers iPhone and iPad. The founder, Abdul Aziz, holds the Apple Certified Mac Technician credential." },
        { q: "Do you repair the MacBook Pro M5?", a: "Yes - screens, batteries, keyboards, liquid damage and logic-board faults on the M5, M5 Pro and M5 Max models. Many are still under Apple's warranty, so we check coverage first and tell you if Apple should fix it free." },
      ]}
      relatedLinks={[
        { label: "About us - full team", href: "/about", description: "Founder, technicians, location, contact." },
        { label: "Why no-fix-no-charge works", href: "/blog/no-fix-no-charge-policy-explained", description: "How experience enables the policy." },
        { label: "Repair near me - trust checklist", href: "/blog/iphone-repair-near-me-dubai", description: "How experience scores on the 10-question checklist." },
      ]}
    />
  );
}
