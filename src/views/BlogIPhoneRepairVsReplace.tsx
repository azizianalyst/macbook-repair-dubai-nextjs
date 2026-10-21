"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneRepairVsReplace() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Repair or Replace? Decision Guide 2026 (Dubai)"
      seoDescription="iPhone repair vs replace, Dubai 2026. Rule of thumb: repair if cost is under 50% of resale value. Model-by-model matrix from iPhone 6 to 17 Pro Max — WhatsApp us for a quote."
      path="/blog/iphone-repair-vs-replace-decision-guide"
      wide
      toc={[
        { id: "decision-matrix", label: "The decision matrix" },
        { id: "iphone-6-7-8", label: "iPhone 6 / 7 / 8: replace" },
        { id: "iphone-11-12", label: "iPhone 11 / 12: it depends" },
        { id: "iphone-13-14", label: "iPhone 13 / 14: repair" },
        { id: "iphone-15-16-17", label: "iPhone 15 / 16 / 17: repair" },
        { id: "resale-value", label: "Where to sell in Dubai" },
        { id: "trade-in-vs-private", label: "Trade-in vs sell privately" },
        { id: "what-to-do-next", label: "What to do next" },
      ]}
      category="Cost guide · iPhone"
      h1="iPhone Repair or Replace? Decision Guide 2026"
      hook="Repair the screen, or buy a new iPhone 17? Here's the math, model by model, for Dubai in April 2026 — message us on WhatsApp for today's exact repair price on your model."
      quickAnswer="Repair if the cost is under 50% of your iPhone's current resale value. In Dubai April 2026 that means: iPhone 6/7/8 - usually replace; iPhone 11/12 - repair if minor; iPhone 13/14 - definitely repair; iPhone 15/16/17 - almost always repair unless multiple major issues at once."
      author={{ name: "Ali", role: "Lead iPhone diagnostic technician" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={11}
      featuredImageAlt="iPhone repair vs replace decision matrix - old and new iPhones on a workbench in Dubai"
      body={
        <>
          <h2 id="decision-matrix">iPhone Repair Vs Replace. The decision matrix - at a glance</h2>
          <p>
            Use the table below to find your iPhone, see the typical resale value in Dubai right
            now (April 2026), the typical repair cost for a single major issue (screen or battery),
            and the recommendation. The rule: <strong>repair if total repair cost is under 50%
            of resale value.</strong>
          </p>
          <BlogPriceTable
            caption="iPhone repair-vs-replace decision matrix - Dubai April 2026"
            headers={["Model", "Used resale", "Single repair", "Recommendation"]}
            rows={[
              { model: "iPhone 6 / 6s / 6 Plus / 6s Plus", ours: "Price on request", apple: "Price on request", note: "Replace (cost ≥ value)" },
              { model: "iPhone 7 / 7 Plus",      ours: "Price on request",   apple: "Price on request", note: "Borderline - repair only if battery-only" },
              { model: "iPhone 8 / 8 Plus / SE 1/2", ours: "Price on request", apple: "Price on request", note: "Repair if single issue" },
              { model: "iPhone X / XS / XR",     ours: "Price on request", apple: "Price on request", note: "Repair (under 50% rule)" },
              { model: "iPhone 11 / 11 Pro",     ours: "Price on request", apple: "Price on request", note: "Repair" },
              { model: "iPhone 12 / 12 Pro",     ours: "Price on request", apple: "Price on request", note: "Repair" },
              { model: "iPhone 13 / 13 Pro",     ours: "Price on request", apple: "Price on request", note: "Definitely repair" },
              { model: "iPhone 14 / 14 Pro",     ours: "Price on request", apple: "Price on request", note: "Definitely repair" },
              { model: "iPhone 15 / 15 Pro",     ours: "Price on request", apple: "Price on request", note: "Definitely repair" },
              { model: "iPhone 16 / 16 Pro",     ours: "Price on request", apple: "Price on request", note: "Definitely repair" },
              { model: "iPhone 17 / 17 Pro",     ours: "Price on request", apple: "Price on request", note: "Definitely repair" },
              { model: "iPhone 17 Pro Max",      ours: "Price on request", apple: "Price on request",      note: "Definitely repair" },
              { model: "iPhone Air",             ours: "Price on request", apple: "Price on request",      note: "Definitely repair" },
            ]}
          />
          <p className="text-[13px] text-text-muted mono">
            Used resale ranges reflect the Dubai market (Dubizzle, OpenSooq, Carrefour electronics
            trade-in), April 2026. For your model's exact repair price, message us on WhatsApp.
          </p>

          <h2 id="iphone-6-7-8">iPhone 6 / 7 / 8 - almost always replace (parts scarce, value low)</h2>
          <p>
            The iPhone 6 turned 12 years old this year. The 7 turned 10. The 8 turned 9. Used
            resale on a working iPhone 6 in Dubai right now is low, while a screen plus a battery
            can add up to more than the phone is worth. The math is brutal.
          </p>
          <p>
            <strong>Exception:</strong> a battery-only repair on a clean iPhone 8 is fine - it
            usually costs a fraction of what the phone is still worth. We'll do it. But if the
            phone has a cracked screen <em>and</em> a tired battery <em>and</em> Touch ID issues -
            we'll honestly tell you it's time to upgrade. A used iPhone 12 in Dubai fits the same
            ecosystem and runs every current app. Message us on WhatsApp for today's exact repair
            price on your model.
          </p>

          <h2 id="iphone-11-12">iPhone 11 / 12 - repair if minor, replace if multiple issues</h2>
          <p>
            iPhone 11 (2019) and 12 (2020) hit the sweet spot in 2026: still very usable, parts
            cheap, repair costs reasonable. A screen plus a battery is a small fraction of what
            the phone is still worth. Comfortable repair territory - message us on WhatsApp for
            the exact price on your model.
          </p>
          <p>
            Where we'd push back: if you bring in an iPhone 11 with cracked front <em>and</em>
            back glass <em>and</em> a swollen battery <em>and</em> a wobbly Lightning port - that's
            enough stacked repairs to approach the value of the phone. At that point a used
            iPhone 13 is the better call.
          </p>

          <h2 id="iphone-13-14">iPhone 13 / 14 - definitely repair (still 60-70% of original value)</h2>
          <p>
            Both lines are still in the "comfortably modern" zone. The iPhone 14 Pro still holds
            roughly 65% of its original value on the Dubai used market after 4 years, and a typical
            single repair is only about 25% of that resale value. Easy yes - WhatsApp us for the
            exact repair price.
          </p>
          <p>
            Special case: <em>if your iPhone 14 Pro has the rare always-on display burn-in issue</em>
            (we see about 1 a month, after 3+ years of always-on use), a screen repair is still
            well worth it. Message us for the exact price.
          </p>

          <h2 id="iphone-15-16-17">iPhone 15 / 16 / 17 - always repair unless multiple major damages</h2>
          <p>
            For phones still in or near Apple's current line, repair is almost always the answer.
            Buying new (an iPhone 17, or a 17 Pro Max) costs so much more than any single repair
            that the math is rarely close. Even three repairs on a 17 Pro Max - screen, battery
            and back glass together - still comes in well under the cost of a new phone. Message
            us on WhatsApp for today's exact repair price on your model.
          </p>
          <p>
            The genuine exception: water damage that's left the phone mostly unrecoverable
            <em>and</em> screen broken <em>and</em> rear camera failed. When the stacked repairs
            offer no guarantee, an AppleCare+ replacement (if you have it) is better. Without
            AppleCare+, this is the rare case where replace beats repair on a phone less than
            2 years old.
          </p>

          <h2 id="resale-value">Resale value - where to actually sell in Dubai 2026</h2>
          <p>
            For accurate current value, check three places:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Dubizzle</strong> - best for individual sales; expect 7-14 days to find a buyer</li>
            <li><strong>Apple Trade-In</strong> (apple.com/ae/shop/trade-in) - fastest, but 30-40% below market value</li>
            <li><strong>Carrefour iCity / Sharaf DG trade-in</strong> - instant, ~25% below Dubizzle</li>
            <li><strong>Local phone-souk dealer</strong> (Naif, Mall of Emirates) - instant cash, 20-30% below market</li>
          </ul>

          <h2 id="trade-in-vs-private">Apple Trade-In values vs sell privately in Dubai</h2>
          <p>
            Real-world example, April 2026: a clean iPhone 14 Pro Max 256GB.
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Apple Trade-In: lowest offer, but credit toward a new Apple purchase</li>
            <li>Sharaf DG trade-in: instant cash, slightly above Apple's offer</li>
            <li>Dubizzle: highest realistic price if you list it (sells in 5-10 days)</li>
            <li>Phone souk dealer: instant cash, between the trade-in and Dubizzle prices</li>
          </ul>
          <p>
            If you have time, sell privately. If you need cash today and want to skip the back-and-
            forth, a souk dealer typically beats Apple by a clear margin. Apple Trade-In is
            convenient but consistently the lowest offer.
          </p>

          <h2 id="what-to-do-next">What should I do next?</h2>
          <p>
            Not sure which side of the line your iPhone falls on?{" "}
            <Link to="/iphone-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">
              Free 30-minute iPhone diagnostic
            </Link>{" "}
            - we tell you exactly what's wrong, what it costs to fix, and our honest read on
            repair vs replace. Or browse{" "}
            <Link to="/iphone-repair-dubai" className="text-accent font-semibold hover:underline">
              every iPhone model
            </Link>{" "}
            for model-specific pricing.
          </p>
        </>
      }
      faqs={[
        { q: "What's the rule of thumb for iPhone repair vs replace?", a: "Repair if total repair cost is under 50% of the phone's current resale value. A single screen repair on an iPhone 13 is a small fraction of its resale value, so it's an easy yes. The same repair on an iPhone 7 can exceed the phone's value, so it's an easy no. Message us on WhatsApp for the exact repair price on your model." },
        { q: "Should I repair my iPhone 8 in 2026?", a: "Battery-only repair on a clean unit - yes, it costs far less than the phone is still worth. Multiple issues - no. iPhone 8 is now 9 years old and the parts ecosystem is shrinking. A used iPhone 12 in Dubai is a much better long-term bet. WhatsApp us for today's repair price." },
        { q: "Does AppleCare+ change the repair-vs-replace math?", a: "Yes, dramatically. AppleCare+ charges a flat accidental-damage service fee for screen or back glass, and a higher one for any other damage. If you have it active, almost any repair becomes 'use AppleCare+'. Without it, our pricing is competitive on every model - message us for a quote." },
        { q: "What's the best place to sell a used iPhone in Dubai?", a: "Dubizzle for highest price (5-10 days to sell). Sharaf DG / Carrefour for instant trade-in (~25% below Dubizzle). Phone souk dealers (Naif) for instant cash (~20% below). Apple Trade-In is the convenient but lowest option." },
        { q: "Should I repair an iPhone with multiple issues?", a: "Add up all the repairs. If the total is under 50% of resale, repair. If it's over 50%, consider replacing. A single fix on a 13 Pro is a no-brainer; a full stack of repairs on the same phone is the line where replacement makes sense. WhatsApp us and we'll do the math with you." },
        { q: "Is repair always cheaper than replacement?", a: "On any iPhone less than 4 years old: almost always yes. On iPhone 6/7 (8+ years old): often no - repair cost matches or exceeds market value. We give you the honest math at the free diagnostic - no upsell." },
      ]}
      relatedLinks={[
        { label: "Free iPhone diagnostic", href: "/iphone-full-diagnostic-dubai", description: "30-minute diagnostic - we tell you what's wrong and what it costs." },
        { label: "Every iPhone model we repair", href: "/iphone-repair-dubai", description: "44 model pages - WhatsApp us for a quote on yours." },
        { label: "iPhone screen repair cost guide", href: "/blog/iphone-screen-repair-cost-dubai-2026", description: "The single biggest line item in any repair-vs-replace calc." },
      ]}
    />
  );
}
