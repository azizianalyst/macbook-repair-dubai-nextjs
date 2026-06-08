"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogLaptopRepairVsBuyNew() {
  return (
    <BlogPostTemplate
      seoTitle="MacBook Repair or Buy New 2026? Decision Math (Dubai Guide)"
      seoDescription="Repair AED 1,000 or buy new AED 4,000? Year-by-year MacBook repair-vs-replace decision matrix, resale values, and trade-in options for Dubai 2026."
      path="/blog/laptop-repair-vs-buy-new-2026"
      category="Buying guide · Decision"
      h1="MacBook Repair or Buy New? Decision Math 2026"
      hook="Old MacBook broken. Repair AED 1,000 or buy new AED 4,000? Here's the formula."
      quickAnswer="Rule of thumb: repair if the quoted cost is under 50% of the MacBook's resale value. Apple Silicon Macs (M1 onwards) are almost always worth repairing, holding value and running macOS Tahoe smoothly. Intel MacBook Pro 2018-2020 is worth fixing under AED 1,500. Pre-2017 models usually replace. The MacBook Air M1 has the best repair ROI."
      author={{ name: "Ali", role: "Founder" }}
      datePublished="2026-04-29"
      dateModified="2026-04-29"
      readingMinutes={10}
      featuredImageAlt="MacBook repair vs buy new - decision matrix for Dubai 2026"
      body={
        <>
          <h2>Rule of thumb: repair if cost &lt; 50% of resale value</h2>
          <p>
            The standard formula across consumer electronics:
          </p>
          <p className="bg-bg-card border-l-4 border-primary rounded-md p-md">
            <strong>If repair cost &lt; 50% of current resale value → repair.</strong><br />
            <strong>If repair cost is 50-80% of resale → judgment call (consider age, sentimental value, your cash position).</strong><br />
            <strong>If repair cost &gt; 80% of resale → replace.</strong>
          </p>
          <p>
            But the formula misses two Dubai-specific realities: (a) Apple Silicon Macs hold value much longer than the formula suggests, and (b) buying new in Dubai is unusually expensive (no aggressive Apple Store discounts - see our{" "}
            <Link to="/blog/dubai-shopping-festival-apple-deals" className="text-accent font-semibold hover:underline">DSF deals guide</Link>). Both push the "repair" answer harder than in other markets.
          </p>

          <h2>MacBook by year - repair-or-replace decision matrix</h2>
          <BlogPriceTable
            caption="Repair vs replace decision - Dubai April 2026 used market"
            headers={["MacBook", "Resale value (good)", "Worth repairing if cost is under", "Verdict"]}
            rows={[
              { model: "MacBook Pro 14/16 M4 (2024)", ours: "AED 7,500-11,000", apple: "AED 5,500", note: "Always repair" },
              { model: "MacBook Air M3/M4 (2024-25)", ours: "AED 3,800-5,200", apple: "AED 2,500", note: "Always repair" },
              { model: "MacBook Pro 14/16 M2/M3 (2023)", ours: "AED 5,500-8,500", apple: "AED 4,000", note: "Repair" },
              { model: "MacBook Air M2 (2022)", ours: "AED 2,400-3,200", apple: "AED 1,800", note: "Repair" },
              { model: "MacBook Pro 14/16 M1/M1 Pro (2021)", ours: "AED 4,500-6,500", apple: "AED 3,500", note: "Repair" },
              { model: "MacBook Air M1 (2020)", ours: "AED 1,800-2,400", apple: "AED 1,400", note: "Always repair (best ROI)" },
              { model: "MacBook Pro 13\" 2020 Intel", ours: "AED 1,400-1,800", apple: "AED 1,000", note: "Repair if under 1k" },
              { model: "MacBook Pro 16\" 2019 Intel", ours: "AED 1,800-2,500", apple: "AED 1,500", note: "Repair (still capable)" },
              { model: "MacBook Pro 13\"/15\" 2018", ours: "AED 1,000-1,400", apple: "AED 800", note: "Borderline" },
              { model: "MacBook Pro 2017", ours: "AED 700-1,000", apple: "AED 500", note: "Replace unless cheap fix" },
              { model: "MacBook Pro 2016", ours: "AED 500-800", apple: "AED 400", note: "Usually replace" },
              { model: "MacBook 2015 and older", ours: "AED 200-600", apple: "AED 250", note: "Replace - also dropped from macOS support" },
            ]}
          />

          <h2>MacBook Pro Intel 2018-2020 - usually still worth repairing</h2>
          <p>
            These are the last great Intel MacBook Pros. They run macOS Sequoia (2024) officially and Tahoe (2026) unofficially via OpenCore. Resale stays AED 1,400-2,500. A AED 800-1,200 keyboard or screen repair makes economic sense for at least 2 more years of life. Issues we commonly fix:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Butterfly keyboard (free under Apple's expired program - we charge AED 350 outside it).</li>
            <li>Flexgate screen - see our{" "}
              <Link to="/blog/macbook-flexgate-explained" className="text-accent font-semibold hover:underline">flexgate guide</Link>.</li>
            <li>Battery (AED 450).</li>
            <li>Touch Bar - see{" "}
              <Link to="/blog/macbook-touch-bar-not-working" className="text-accent font-semibold hover:underline">Touch Bar fix guide</Link>.</li>
            <li>Stage light effect, GPU artefacts on 16" 2019 - addressable.</li>
          </ul>

          <h2>MacBook Air M1 (2020) - definitely repair</h2>
          <p>
            The M1 Air is the single best repair-ROI device in Apple's history. AED 1,800 resale, fanless, runs macOS Tahoe (2026) officially, will be supported until at least macOS 27 (2028). Almost any repair under AED 1,200 is justified:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Battery: AED 450 (gets you 4+ years more life).</li>
            <li>Screen: AED 1,200 (still under 70% of resale).</li>
            <li>Keyboard: AED 600.</li>
            <li>Charging port: AED 350.</li>
            <li>Logic board: AED 1,400 - borderline; consider replacement at this price.</li>
          </ul>

          <h2>MacBook Pro 14/16 M1+ - definitely repair</h2>
          <p>
            Top-tier build, fans for thermal headroom, ProMotion XDR display, will receive macOS updates into 2030+. Resale stays above AED 4,500 even for base M1 Pro models. Repair almost anything up to AED 3,500 and you're still ahead.
          </p>

          <h2>Pre-2017 MacBooks - usually replace</h2>
          <p>
            Pre-2017 MacBooks (especially the 12" Retina MacBook 2015-2017 and pre-2015 MacBook Pros) are dropped from current macOS support. macOS Tahoe 2026 doesn't run; security patches stop. Resale below AED 600 for most. Repair only if it's a sentimental machine and the fix is under AED 400 - otherwise, replace with a refurbished M1 Air for AED 1,800.
          </p>

          <h2>Resale value calculator (April 2026 snapshot)</h2>
          <BlogPriceTable
            caption="Quick resale lookup - assumes good cosmetic condition, working battery"
            headers={["MacBook", "Apple Trade-In", "Dubizzle private", "Our buy-back"]}
            rows={[
              { model: "MacBook Pro 14\" M3 (2023)", apple: "AED 4,200", ours: "AED 5,800", note: "AED 5,000" },
              { model: "MacBook Air M2 (2022)", apple: "AED 1,800", ours: "AED 2,800", note: "AED 2,400" },
              { model: "MacBook Air M1 (2020)", apple: "AED 1,200", ours: "AED 2,000", note: "AED 1,700" },
              { model: "MacBook Pro 13\" M1 (2020)", apple: "AED 1,400", ours: "AED 2,200", note: "AED 1,800" },
              { model: "MacBook Pro 16\" 2019 Intel", apple: "AED 600", ours: "AED 2,200", note: "AED 1,700" },
              { model: "MacBook Pro 13\" 2018 Intel", apple: "AED 350", ours: "AED 1,200", note: "AED 950" },
            ]}
          />
          <p>
            Notice Apple Trade-In is consistently the lowest. Dubizzle private sale gets the most cash but takes effort and 2-4 weeks. Our buy-back sits between - instant payment, fair market price, no haggling.
          </p>

          <h2>Trade-in options - Apple, us, Dubizzle</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Apple Trade-In:</strong> instant credit toward new Apple purchase. Lowest cash equivalent but zero hassle.</li>
            <li><strong>Sharaf DG / Jumbo trade-in events:</strong> seasonal, typically AED 200-500 above Apple. See our{" "}
              <Link to="/blog/dubai-shopping-festival-apple-deals" className="text-accent font-semibold hover:underline">DSF deals guide</Link>.</li>
            <li><strong>Our buy-back:</strong> WhatsApp us photos + serial; we quote within an hour, collect free, pay on collection.</li>
            <li><strong>Dubizzle / Facebook Marketplace:</strong> highest cash, requires effort and 2-4 weeks. See our{" "}
              <Link to="/blog/best-way-to-sell-old-iphone-dubai" className="text-accent font-semibold hover:underline">selling guide</Link> (same logic applies to MacBook).</li>
            <li><strong>Don't forget:</strong> a working broken-screen MacBook still has parts value - we buy non-working units too.</li>
          </ul>
        </>
      }
      faqs={[
        { q: "My MacBook Pro 2018 needs a screen and battery - total AED 1,800. Worth it?", a: "Borderline. Resale of a working 2018 13\" Pro is around AED 1,200. You'd be over the 50% rule. If the rest of the machine is in great shape and you'd otherwise spend AED 4,000+ replacing it, the repair is still rational. If you have replacement budget, replace." },
        { q: "Logic board failure on a 4-year-old MacBook Air M1 - repair or replace?", a: "Logic board on M1 Air is AED 1,400-1,800 because the SoC is soldered. Resale of working M1 Air is AED 1,800. This is the one M1 Air repair where replacement (refurbished M2 or M3) is genuinely competitive - your call based on cash flow." },
        { q: "Is buying a refurbished M1 Air better than fixing my Intel 2017?", a: "Almost always yes. Refurbished M1 Air at AED 1,800 gives you 5+ years of macOS support, better performance, better battery life. A 2017 fix gets you 1-2 years before macOS drops support entirely." },
        { q: "What if my MacBook is sentimental - like my first laptop from uni?", a: "Pure judgment call - sentimental value isn't on the spreadsheet. If the device works after the fix and you want to keep it, that's a valid reason. Just budget realistically: an old MacBook will need another repair within 12-24 months." },
        { q: "Does AppleCare+ change the math?", a: "Yes - if AppleCare+ is active, the deductible (AED 350 screen, AED 1,099 other) is your cost. That nearly always makes Apple repair the right call vs replacing. Without AppleCare+, our independent pricing changes the math toward repair vs replace at lower price points." },
        { q: "Can I sell a broken MacBook?", a: "Yes - to us or specialist parts buyers. A broken MacBook Air M1 still gets AED 600-900 because the screen, top case, and SSD have parts value. Don't throw it away - WhatsApp us a photo." },
      ]}
      relatedLinks={[
        { label: "Should I buy a refurbished MacBook?", href: "/blog/should-i-buy-refurbished-macbook-dubai", description: "If you're going the replacement route - checklist and grading." },
        { label: "Best way to sell old iPhone Dubai", href: "/blog/best-way-to-sell-old-iphone-dubai", description: "Same logic applies to selling your MacBook." },
        { label: "MacBook screen repair cost Dubai", href: "/blog/macbook-screen-repair-cost-dubai-2026", description: "Single biggest line item in any repair-or-replace decision." },
      ]}
    />
  );
}
