"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogMacBookProM5VsAppleStore() {
  return (
    <BlogPostTemplate
      seoTitle="MacBook Pro M5 Repair: Us vs Apple Store Dubai 2026"
      seoDescription="Same M5 MacBook Pro screen repair: Apple Store AED 2,400, our shop AED 1,000. Side-by-side comparison of 4 services with turnaround, parts, warranty."
      path="/blog/macbook-pro-m5-vs-apple-store-repair-cost"
      wide
      toc={[
        { id: "price-comparison", label: "Four-service comparison" },
        { id: "what-apple-charges", label: "What Apple Store charges" },
        { id: "whats-the-same", label: "What's the same" },
        { id: "whats-different", label: "What's different" },
        { id: "when-apple", label: "When to choose Apple Store" },
        { id: "applecare-math", label: "AppleCare+ vs out-of-warranty math" },
      ]}
      category="Cost comparison · MacBook Pro"
      h1="MacBook Pro M5 Repair Cost - Us vs Apple Store Dubai"
      hook="Same MacBook Pro M5 screen repair: Apple Store AED 2,400. Our workshop AED 1,000. Same-quality parts, transparent pricing: here's the side-by-side."
      quickAnswer="A MacBook Pro M5 14″ screen repair in Dubai costs AED 1,000 at MacBook Repair Dubai versus AED 2,400 at Apple Store / AASP. Battery is AED 650 vs AED 1,099. Logic board is AED 1,500 vs AED 4,500+. Same OEM-grade parts, same warranty of up to 12 months (we offer 3 months on batteries)."
      author={{ name: "Memona", role: "Senior MacBook technician" }}
      datePublished="2026-04-25"
      dateModified="2026-06-22"
      readingMinutes={10}
      featuredImageAlt="MacBook Pro M5 repair Dubai cost comparison vs Apple Store"
      body={
        <>
          <h2 id="price-comparison">The four-service comparison: MacBook Pro M5 14″</h2>
          <BlogPriceTable
            caption="MacBook Pro 14″ M5 - repair cost comparison, June 2026"
            headers={["Service", "MacBook Repair Dubai", "Apple Store / AASP", "You save"]}
            rows={[
              { model: "Screen replacement", ours: "AED 1,000", apple: "AED 2,400", note: "AED 1,400" },
              { model: "Battery replacement", ours: "AED 650", apple: "AED 1,099", note: "AED 449" },
              { model: "Top-case keyboard", ours: "AED 950", apple: "AED 1,799", note: "AED 849" },
              { model: "Logic board (component-level)", ours: "AED 1,500", apple: "AED 4,500+ (full board swap)", note: "AED 3,000+" },
            ]}
          />
          <p className="text-[13px] text-text-muted mono">
            Apple Store pricing for non-AppleCare+ out-of-warranty service in Dubai (Mall of
            Emirates and Dubai Mall locations) on 22 June 2026.
          </p>

          <h2 id="what-apple-charges">What Apple Store charges for what</h2>
          <p>
            Apple Store and Apple Authorised Service Providers (AASPs) in Dubai are required to
            follow Apple's official service procedure. For most MacBook Pro M5 issues that means{" "}
            <strong>replacing whole modules rather than fixing individual components</strong>.
            A failed USB-C port? Logic board swap. A stuck key? Top-case swap (palmrest + keyboard
            + trackpad + battery as one assembly). A cracked screen? Whole lid assembly.
          </p>
          <p>
            That's why the Apple Store quotes are so high: you're paying for a brand-new module
            even when only one component inside it is broken. It's the safest service model from
            Apple's point of view (zero re-failures), and it's what AppleCare+ subscribers
            essentially pre-pay for.
          </p>

          <h2 id="whats-the-same">What's the same between us and Apple Store</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Parts quality.</strong> We source from the same suppliers Apple uses (Foxconn,
              LG Display, BOE, Samsung Display) through the Independent Repair Provider channel
              and trusted secondary distribution.
            </li>
            <li>
              <strong>Calibration.</strong> We run Apple's AST 2 (Apple Service Toolkit) for
              True Tone, ProMotion, and battery calibration after every service.
            </li>
            <li>
              <strong>Diagnostic process.</strong> We use the same MRI / AST 2 diagnostic suite
              before quoting any major repair. No guesswork.
            </li>
            <li>
              <strong>Warranty length.</strong> 12 months on parts and labour, written on the
              invoice. (We offer 3 months on batteries, which Apple doesn't.)
            </li>
          </ul>

          <h2 id="whats-different">What's different: turnaround and parts approach</h2>
          <p>
            <strong>Turnaround.</strong> Apple Store quotes 5–10 business days for most MacBook Pro
            repairs because parts ship from Apple's regional depot in Dubai South. We stock screens,
            batteries, and top-cases for current Pro M5 models in our Media City workshop. Most
            jobs are same-day if you drop off before 11am.
          </p>
          <p>
            <strong>Parts approach.</strong> Apple Store always swaps the entire affected module
            (whole lid, whole top-case, whole logic board). We do component-level repair where
            possible: replacing just the panel inside the lid, or just the keyboard inside the
            top-case, or just the failed chip on the logic board. That's where 60–80% of the cost
            saving comes from.
          </p>
          <p>
            <strong>Pickup.</strong> Free door-to-door pickup anywhere in mainland Dubai. Apple
            requires you to drop off at Mall of Emirates or Dubai Mall, fine if you're nearby,
            painful if you're in JLT or Sharjah border.
          </p>

          <h2 id="when-apple">When to choose Apple Store anyway</h2>
          <p>Honest answer: three scenarios:</p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>
              <strong>You have AppleCare+.</strong> The deductibles are AED 367 (USD 99) for screen
              and AED 367 for "other accidental damage". That's cheaper than us. Use it.
            </li>
            <li>
              <strong>You're still inside the 1-year Apple warranty</strong> for a non-accidental
              fault. Apple will fix it free. We won't. Always go to Apple first.
            </li>
            <li>
              <strong>You plan to sell the MacBook in the next 6 months</strong> and the buyer is
              checking serial-number service history. Apple-Store-serviced MacBooks command a
              roughly 5% resale premium on Dubizzle.
            </li>
          </ol>

          <h2 id="applecare-math">AppleCare+ vs out-of-warranty repair math</h2>
          <p>
            AppleCare+ for MacBook Pro 14″ M5 costs AED 1,099 for 3 years (or AED 36/month). It
            covers up to 2 incidents per year at AED 367 deductible for screen damage, AED 367 for
            "other accidental damage". Theft and loss are NOT covered (that's a separate plan in
            the US, not yet in UAE).
          </p>
          <p>
            Cost-benefit: if you'll have at least one accident in 3 years, AppleCare+ is roughly
            break-even versus paying us out-of-pocket. If you'll have two or more, AppleCare+ wins.
            Heavy travellers and parents of teenagers: buy it. Office-only users with a careful
            history: skip it.
          </p>

          <p>
            Ready to book a repair?{" "}
            <Link to="/macbook-pro-repair-dubai" className="text-accent font-semibold hover:underline">
              See our MacBook Pro repair page
            </Link>{" "}
            for full pricing on every model, or WhatsApp 055 741 3706 for a quote in 4 minutes.
          </p>
        </>
      }
      faqs={[
        {
          q: "Are the parts you use really the same quality as Apple Store?",
          a: "For screens, batteries, and top-cases: yes, we source through the Independent Repair Provider channel and trusted secondary distribution from the same OEMs (LG Display, BOE, Foxconn). For logic board components, we use original Apple-spec chips desoldered from donor boards or sourced through specialist channels.",
        },
        {
          q: "Why is your logic board repair AED 1,500 when Apple charges AED 4,500?",
          a: "Apple swaps the whole logic board for any fault. We diagnose to the failed component (a power IC, a charging chip, a single MOSFET) and replace just that component using a microscope and hot-air station. 80–90% of MacBook board failures are 1–3 components, not the whole board.",
        },
        {
          q: "Will using your shop void my Apple warranty?",
          a: "If you're already out of the 1-year Apple warranty, there's nothing to void. If you're still inside warranty for an unrelated fault, our service on a separate component (e.g. a screen) won't affect Apple's warranty on, say, a logic board fault, but Apple may decline to service the area we touched.",
        },
        {
          q: "Do you have Apple-genuine parts available if I want them?",
          a: "Yes for screens (iPhone 12+ and select MacBook Pro models, +AED 350–500) through our Independent Repair Provider partnership. Other Apple-genuine parts are available on a per-job basis with 5–10 day lead time.",
        },
        {
          q: "What if your repair fails, what's the warranty process?",
          a: "Bring the MacBook back. We re-diagnose, and if the same fault has returned within 12 months (3 months for batteries), we re-do the repair free. We don't dodge or argue. About 1.2% of our jobs come back, and we honour the warranty on every one.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook Pro repair Dubai", href: "/macbook-pro-repair-dubai", description: "All MacBook Pro models: screen, battery, logic board pricing." },
        { label: "MacBook Pro M4 vs M5: worth upgrading?", href: "/blog/macbook-pro-m4-vs-m5-worth-upgrade", description: "Spec comparison and Dubai price guide." },
        { label: "MacBook screen repair Dubai", href: "/macbook-screen-repair-dubai", description: "All MacBook display repairs from AED 600." },
        { label: "MacBook Pro battery draining fast", href: "/blog/macbook-pro-battery-draining-fast", description: "Causes, fixes, and replacement costs." },
      ]}
    />
  );
}
