"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneWaterDamageRepairCost() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Water Damage Repair Cost Dubai 2026 - Pricing"
      seoDescription="iPhone water damage repair Dubai: AED 400-1,200 by board-damage tier. 80% recovery rate. First-24-hour rules, salt vs fresh water, when it's not recoverable."
      path="/blog/iphone-water-damage-action-plan"
      category="Cost guide · iPhone"
      h1="iPhone Water Damage Repair Dubai - Cost & Success Rates"
      hook="iPhone water damage repair in Dubai costs AED 400-1,200 depending on board damage. We achieve 80% recovery at our workshop - but only if you bring it in within 24 hours and follow the 'do not charge' rule."
      quickAnswer="iPhone water damage repair in Dubai costs AED 400 (clean only) to AED 1,200 (board-level recovery). 80% of phones brought in within 24 hours and not charged again are recoverable. Salt water is harder than fresh. Free diagnostic - we don't proceed unless we believe the phone can be saved."
      author={{ name: "Usman", role: "iPhone board-level recovery technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={10}
      featuredImageAlt="iPhone water damage repair Dubai - ultrasonic cleaning bath in workshop"
      body={
        <>
          <h2>First 24 hours - what to do (and not do)</h2>
          <p>
            The single biggest factor that decides whether your phone lives is what you do in the
            first hour. Follow this list:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Power off immediately.</strong> Hold side button + volume down, slide to power off. If it's already off, do not try to turn it on.</li>
            <li><strong>Do not plug it in.</strong> Charging current through wet circuitry is what kills boards. We see 60% of unrecoverable phones because the customer "tried to charge it to see if it works".</li>
            <li><strong>Do not put it in rice.</strong> Old wives' tale. Rice does nothing useful and rice dust ends up in the Lightning/USB-C port.</li>
            <li><strong>If the screen is on, do not press buttons.</strong> Capture the wet phone in a dry bag and bring it to us.</li>
            <li><strong>Get it to a board-level workshop within 24 hours.</strong> Dubai air is humid; oxidation accelerates fast.</li>
          </ul>

          <h2>Salt water vs fresh water - Dubai beach vs pool</h2>
          <p>
            Sea water (Jumeirah, Kite Beach, Palm) is salt-rich and conducts electricity. It causes
            galvanic corrosion on the iPhone logic board within hours of contact. Fresh water (a
            pool, a sink, a toilet, rain) is far more forgiving - distilled water doesn't even
            conduct. Our recovery numbers reflect this:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Fresh water, brought in within 24 hours:</strong> ~92% full recovery</li>
            <li><strong>Pool water (chlorinated):</strong> ~85% full recovery</li>
            <li><strong>Salt water, brought in within 6 hours:</strong> ~75% full recovery</li>
            <li><strong>Salt water, brought in next day:</strong> ~50% full recovery</li>
            <li><strong>Any water + customer charged it:</strong> ~30% full recovery</li>
          </ul>

          <h2>Pricing tiers</h2>
          <BlogPriceTable
            caption="iPhone water damage recovery - Dubai, April 2026"
            headers={["Service tier", "Our price (AED)", "What you get"]}
            rows={[
              { model: "Tier 1 - Diagnostic + ultrasonic clean", ours: "AED 400", apple: "Open phone, full board ultrasonic clean (15 min in 99% IPA), reseat connectors, 30-day warranty if phone powers up cleanly. Most fresh-water cases." },
              { model: "Tier 2 - Tier 1 + selective component replacement", ours: "AED 700", apple: "Add: replace any oxidised passives (capacitors, resistors), reflow visibly damaged solder joints, replace damaged connectors. 60-day warranty." },
              { model: "Tier 3 - Board-level recovery + chip work", ours: "AED 1,000", apple: "Add: micro-soldering on damaged ICs, replace specific failed chips (PMIC, audio IC, charging IC), 90-day warranty. For salt-water and severely oxidised boards." },
              { model: "Tier 4 - Data-only recovery (chip-off)", ours: "AED 1,200", apple: "Phone is unrecoverable. We remove NAND chip, recover photos/messages/contacts to a USB drive. Phone returned in pieces or recycled." },
            ]}
          />

          <h2>What we actually do - the ultrasonic clean process</h2>
          <p>
            Step by step, what happens after you hand us the phone:
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li><strong>Disassemble in a static-controlled bay</strong> - battery first, then logic board out.</li>
            <li><strong>Visual inspection at 40x magnification</strong> for corrosion, the green/white salt deposits.</li>
            <li><strong>Ultrasonic bath</strong> - board submerged in 99.9% isopropyl alcohol with 40kHz ultrasonic agitation for 15 minutes.</li>
            <li><strong>Hot-air dry and second microscopy pass</strong> - verify all liquid residue gone, identify any newly visible damage.</li>
            <li><strong>Selective component replacement</strong> if needed (Tier 2 / 3).</li>
            <li><strong>Reassemble with fresh waterproof gaskets</strong> - your phone leaves the bench with its original IP rating restored.</li>
            <li><strong>Power-on test, 30-minute battery test, charging test, camera/Face-ID/speaker/microphone test.</strong></li>
            <li><strong>You collect, with a written warranty matched to the tier of work done.</strong></li>
          </ol>

          <h2>When water damage isn't recoverable - be honest</h2>
          <p>
            Some phones cannot be saved. We tell you at the free diagnostic stage. Common
            unrecoverable cases:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Salt water + 48+ hours dry without cleaning (corrosion has eaten through inner board layers)</li>
            <li>Customer charged the phone post-immersion (PMIC and charging IC fried)</li>
            <li>SoC (the Apple-designed main processor) shows physical damage - there is no aftermarket A18/A19 chip</li>
            <li>Burnt smell out of the speaker or charging port (means power-rail short already happened)</li>
          </ul>
          <p>
            In those cases we offer Tier 4 data-only recovery (AED 1,200) to get your photos,
            messages, contacts, and notes off the NAND. The phone itself is then either returned
            in a parts bag or sent to our certified e-waste partner.
          </p>

          <h2>Insurance claims for water-damaged iPhones in UAE</h2>
          <p>
            Most home-contents insurance policies in UAE (AXA Gulf, Emirates, Tokio Marine) cover
            mobile phones for accidental water damage if the phone is listed as a scheduled item.
            We provide a written diagnostic and itemised invoice formatted for direct claim
            submission. Tell us at intake that you'll be claiming and we'll structure the
            paperwork accordingly. AppleCare+ also covers liquid damage at a service fee - usually
            AED 379 - which is competitive on older models but not on iPhone 15 onward where our
            Tier 1/2 pricing beats it.
          </p>

          <h2>Apple Store water damage policy (often refuse repair)</h2>
          <p>
            Apple's official policy: liquid damage voids the standard warranty, and Apple Stores in
            UAE often decline component-level repair. They'll quote a whole-device replacement at
            full out-of-warranty service price (AED 2,800-4,500 depending on model). AppleCare+ is
            the only path to a flat-fee water-damage fix at Apple - and it has to be active. If
            you don't have AppleCare+, you're either looking at a full replacement or an
            independent board-level workshop like ours.
          </p>

          <h2>What to do next</h2>
          <p>
            Phone in water? <strong>Power off, do not charge, message us now.</strong>{" "}
            <Link to="/iphone-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">
              iPhone water damage repair page
            </Link>{" "}
            for the full process and pricing. WhatsApp 055 741 3706 with a photo - quote in 4
            minutes.
          </p>
        </>
      }
      faqs={[
        { q: "How quickly do I need to bring my wet iPhone in?", a: "Within 24 hours for the best recovery odds. Within 6 hours for salt-water cases (sea water from Jumeirah, Kite, Palm). Phone OFF the entire time, no charging attempts." },
        { q: "How much does iPhone water damage repair cost?", a: "AED 400 for clean-only (most fresh-water cases), AED 700 for selective component work, AED 1,000 for board-level chip recovery (salt water, severe oxidation), AED 1,200 for data-only chip-off. Free diagnostic - we don't quote until we've opened it." },
        { q: "What's your success rate on water-damaged iPhones?", a: "About 80% overall. Higher for fresh water in the first 24 hours (over 90%), lower for salt water that's been sitting (around 50%). The biggest variable is whether the customer charged it after - that drops the rate to about 30%." },
        { q: "Will my photos and messages survive water damage?", a: "If the SoC and NAND are intact: yes, fully. If the phone won't power on after our work, we offer Tier 4 chip-off data recovery (AED 1,200) - we extract the NAND chip and read the data directly. About 95% of NANDs survive even severe water damage." },
        { q: "Will my iPhone still be water-resistant after repair?", a: "Yes - we replace the perimeter gasket and re-seal during reassembly. Original IP rating restored (IP67 or IP68 depending on model). Avoid deep submersion for 48 hours so the new adhesive cures fully." },
        { q: "Is rice actually useful for a wet iPhone?", a: "No. Rice doesn't draw water out of sealed electronics - and rice dust ends up jammed in the Lightning or USB-C port, often causing additional charging failure. Power off, leave it alone, get it to a workshop." },
      ]}
      relatedLinks={[
        { label: "iPhone water damage repair hub", href: "/iphone-water-damage-repair-dubai", description: "Full service page with the recovery process and tier pricing." },
        { label: "iPhone data recovery service", href: "/iphone-data-recovery-dubai", description: "When the phone is dead but the photos must be saved." },
        { label: "iPhone repair or replace? Decision guide", href: "/blog/iphone-repair-vs-replace-decision-guide", description: "When water-damage recovery cost outweighs replacement value." },
      ]}
    />
  );
}
