"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogGenuinePartsVsAlternatives() {
  return (
    <BlogPostTemplate
      seoTitle="Genuine Apple Parts vs Alternatives: Honest Guide 2026"
      seoDescription="What 'genuine Apple part' really means, the OEM/equivalent/aftermarket tier system, when each tier is fine, and what we use at MacBook Repair Dubai."
      path="/blog/genuine-parts-vs-quality-alternative-explained"
      category="Trust · Parts policy"
      h1="Genuine Apple Parts vs Alternatives - Honest Guide"
      hook="Not all 'OEM' parts are equal. Here's what we use and why."
      quickAnswer="Three tiers exist: (1) genuine Apple parts - only available to Apple-Authorised Service Providers, (2) OEM-equivalent - same factory, sold separately, near-identical quality, (3) aftermarket - third-party, cheaper, lower spec. We use OEM-equivalent by default and disclose the tier on every quote. Genuine matters most for Face ID, Touch ID, True Tone, and biometric assemblies."
      author={{ name: "Usman", role: "Parts manager" }}
      datePublished="2026-04-28"
      dateModified="2026-04-28"
      readingMinutes={10}
      featuredImageAlt="Genuine Apple parts vs OEM-equivalent vs aftermarket - honest comparison"
      body={
        <>
          <h2>Quick answer</h2>
          <p>
            "Genuine Apple part" has a strict definition - only Apple-Authorised Service Providers
            (AASP) like Maxus or ITQAN can buy them. Every other shop in Dubai uses parts that fall
            into two other tiers. Honest shops disclose which tier; dishonest shops claim "genuine"
            for everything. Here's how to read a quote.
          </p>

          <h2>What 'genuine Apple part' actually means</h2>
          <p>
            Apple controls its parts supply chain tightly. A truly genuine part is:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Manufactured by an Apple-contracted supplier (Foxconn, Pegatron, BOE, LG, Samsung Display, etc.).</li>
            <li>Sold through Apple's GSX system to AASPs only.</li>
            <li>Serialised and paired to a specific repair work order.</li>
            <li>Traceable in Apple's database after install.</li>
          </ul>
          <p>
            If a shop says "genuine Apple" without being an AASP, the part is technically OEM-equivalent
            at best. There's no legal pathway for an independent shop in Dubai to buy true genuine
            parts from Apple.
          </p>

          <h2>OEM vs OEM-equivalent vs aftermarket - 3 tiers</h2>
          <BlogPriceTable
            caption="Parts tier comparison"
            headers={["Tier", "Source / quality", "Price index", "Notes"]}
            rows={[
              { model: "Tier 1 - Genuine Apple (AASP)", apple: "Apple GSX - 100% exact match", ours: "200%", note: "AASP-only access" },
              { model: "Tier 2 - OEM-equivalent", apple: "Same factory, retail channel - 95-99%", ours: "60-80%", note: "Our default tier" },
              { model: "Tier 3 - Aftermarket", apple: "Third-party Chinese - 70-85%", ours: "30-50%", note: "Lower spec, shorter warranty" },
              { model: "Tier 3b - Refurbished pulls", apple: "Salvaged donor devices - variable", ours: "40-60%", note: "For older models only" },
            ]}
          />
          <p>
            Tier 2 is the sweet spot for almost all repairs - you save 20-40% over Apple pricing with
            no perceivable quality drop. Tier 3 makes sense on aged devices where the customer is
            optimising for cost.
          </p>

          <h2>When genuine parts matter most</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Face ID assembly</strong> - the dot projector and IR camera are paired to the logic board at factory. Aftermarket Face ID modules typically don't work or trigger "Unable to activate Face ID".</li>
            <li><strong>Touch ID</strong> (iPhone SE, older iPhones, MacBook Pro) - same pairing issue.</li>
            <li><strong>True Tone (MacBook + iPhone screens)</strong> - calibration data is screen-specific. Aftermarket panels lose True Tone unless re-programmed with paid tools.</li>
            <li><strong>Logic boards</strong> - only genuine. No "alternative" exists.</li>
            <li><strong>Biometric Watch sensors (ECG, blood oxygen, hypertension)</strong> - calibration tied to original sensor.</li>
          </ul>

          <h2>When alternatives are fine</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>iPhone batteries</strong> - Tier 2 cells from Sunwoda or Amperex (same suppliers Apple uses) are excellent.</li>
            <li><strong>Speakers, microphones, vibration motors</strong> - minimal calibration, very low fault rate at Tier 2.</li>
            <li><strong>Charging ports</strong> - purely electromechanical, Tier 2 lasts years.</li>
            <li><strong>Back glass</strong> - purely cosmetic, Tier 2 indistinguishable.</li>
            <li><strong>MacBook keyboards (post-2019 magic)</strong> - Tier 2 keys + membranes are reliable.</li>
          </ul>

          <h2>Apple's Self Service Repair Program (US only)</h2>
          <p>
            In 2022 Apple launched Self Service Repair, letting individuals buy genuine parts directly
            for a few iPhone and MacBook models. As of April 2026 it's still <strong>US-only</strong>{" "}
            and partially in EU/UK. UAE has no Self Service Repair access. So in Dubai, the only
            paths to a true genuine Apple part are AASPs (Maxus, ITQAN, etc.) or sending the device
            to Apple itself.
          </p>

          <h2>How we source parts in Dubai</h2>
          <p>
            We've built relationships with Tier 2 OEM-equivalent suppliers since 2008 - primarily out
            of Shenzhen and Hong Kong, audited factories, batch-tested on arrival. We stock the most
            common parts (iPhone screens last 6 generations, MacBook Air/Pro screens last 4
            generations, common batteries, charging ports) so 80% of repairs are same-day. Less common
            parts arrive in 1-3 days via DHL.
          </p>

          <h2>Pricing difference</h2>
          <p>
            Sample: iPhone 15 Pro screen replacement at Apple AASP - AED 1,799. Our Tier 2 with True
            Tone preserved - AED 1,099. Tier 3 aftermarket - AED 750 (we offer it, but recommend
            Tier 2 for the extra AED 350). For full pricing transparency, see our{" "}
            <Link to="/pricing" className="text-accent font-semibold hover:underline">pricing page</Link>.
          </p>

          <h2>Performance difference</h2>
          <p>
            On a 100-screen sample of Tier 2 vs Tier 3 panels we tracked over 2024-2025:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Brightness uniformity</strong>: Tier 2 within 5% of OEM, Tier 3 within 15%.</li>
            <li><strong>Touch responsiveness</strong>: Tier 2 indistinguishable, Tier 3 occasional ghost touches.</li>
            <li><strong>Failure rate at 12 months</strong>: Tier 2 &lt; 1%, Tier 3 5-8%.</li>
            <li><strong>True Tone preservation</strong>: Tier 2 yes (with our programmer), Tier 3 lost.</li>
          </ul>

          <h2>Warranty difference</h2>
          <p>
            We warranty Tier 2 parts the same as we would warranty genuine - full{" "}
            <Link to="/blog/macbook-repair-warranty-explained" className="text-accent font-semibold hover:underline">
              90 days workmanship
            </Link>
            , 6 months on batteries. Tier 3 parts get a 30-day warranty (because failure rates are
            higher and we're transparent about that). You always know which tier you're getting before
            you authorise.
          </p>
        </>
      }
      faqs={[
        { q: "How can I tell if a shop is using genuine vs aftermarket?", a: "Ask for the tier on the quote in writing. Test post-repair: True Tone toggle should remain (Settings → Display); Face ID should set up without error; battery health should not show 'Unknown Part' warning. If any of these fail, the part is Tier 3, not Tier 1 or 2." },
        { q: "Will my warranty be voided by a non-genuine part?", a: "If the device was under Apple warranty or AppleCare+, yes - any third-party repair voids it. If you're already out of warranty, there's nothing left to void. Our independent warranty applies regardless of part tier." },
        { q: "Are 'pulled' (used) genuine parts a good option?", a: "Sometimes - for older models where new parts are scarce. We use pulled OEM screens for iPhone 7/8/X repairs occasionally, with shorter warranty (30 days) and lower price. We always disclose when a part is pulled." },
        { q: "Why don't you become an Apple-Authorised Service Provider?", a: "AASP terms restrict pricing (we'd have to charge Apple's rates), restrict the models we can service, and require us to stop independent work on older / out-of-warranty devices. Our customers value the price-quality tradeoff and the freedom to repair anything Apple ever made." },
        { q: "What about parts marked 'OEM' on AliExpress for AED 200?", a: "Those are almost always Tier 3 aftermarket relabelled. Real Tier 2 OEM-equivalent parts wholesale at AED 400-600 even at quantity. If a price seems too good, it's the wrong tier." },
        { q: "Can you install a part I bring in?", a: "We can but with limits - we cannot warranty the part itself (no provenance), only the labour. Many such parts arrive faulty. We strongly recommend buying through us for matched warranty cover." },
      ]}
      relatedLinks={[
        { label: "Pricing - every model & tier", href: "/pricing", description: "Tier 2 prices published for every common repair." },
        { label: "Repair warranty explained", href: "/blog/macbook-repair-warranty-explained", description: "How warranty differs by part tier." },
        { label: "iPhone screen issues after repair", href: "/blog/iphone-screen-replaced-but-issues-after", description: "Diagnosing what tier was actually installed." },
      ]}
    />
  );
}
