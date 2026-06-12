"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";

export default function BlogIPhoneScreenRepairVoucher() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Screen Repair Voucher Dubai - Save 15% (How It Works)"
      seoDescription="Buy a screen repair voucher upfront, use within 12 months - save 15% off our standard price. How vouchers work, terms, who they're for, and how to buy."
      path="/blog/iphone-screen-repair-voucher-dubai"
      category="Service · Vouchers"
      h1="iPhone Screen Repair Voucher Dubai - Save With Vouchers"
      hook="We offer pre-purchase vouchers for screen repair. Buy now, use within 1 year. Save 15%."
      quickAnswer="Our iPhone screen repair voucher saves 15% when bought in advance: a standard iPhone 15 Pro screen drops from AED 1,200 to AED 1,020. Vouchers last 12 months, cover any iPhone screen repair at our Media City workshop, and are transferable and refundable. Best for parents of teenagers, companies, or anyone locking in current pricing."
      author={{ name: "Ali", role: "Founder" }}
      datePublished="2026-04-29"
      dateModified="2026-04-29"
      readingMinutes={7}
      featuredImageAlt="iPhone screen repair voucher Dubai - 15 percent saving program"
      body={
        <>
          <h2>What's the voucher exactly?</h2>
          <p>
            A pre-paid credit you buy from us today. When you (or anyone you transfer it to) needs an iPhone screen repair within the next 12 months, you redeem it instead of paying full price. The voucher saves 15% versus standard pay-as-you-go pricing.
          </p>
          <p>
            It's not insurance (no excess, no claim process), not AppleCare (no Apple involvement), and not a maintenance plan (no scheduled visits). It's a simple discount instrument for people who know they'll likely need a screen repair.
          </p>

          <h2>Pricing - voucher vs standard</h2>
          <BlogPriceTable
            caption="iPhone screen repair pricing - Dubai April 2026"
            headers={["iPhone model", "Standard price", "Voucher price (-15%)", "You save"]}
            rows={[
              { model: "iPhone 17 Pro Max", ours: "AED 1,400", apple: "AED 1,190", note: "AED 210" },
              { model: "iPhone 17 Pro", ours: "AED 1,300", apple: "AED 1,105", note: "AED 195" },
              { model: "iPhone 17 / Air", ours: "AED 1,100", apple: "AED 935", note: "AED 165" },
              { model: "iPhone 16 Pro Max", ours: "AED 1,300", apple: "AED 1,105", note: "AED 195" },
              { model: "iPhone 16 Pro", ours: "AED 1,200", apple: "AED 1,020", note: "AED 180" },
              { model: "iPhone 15 Pro Max", ours: "AED 1,200", apple: "AED 1,020", note: "AED 180" },
              { model: "iPhone 15 Pro", ours: "AED 1,100", apple: "AED 935", note: "AED 165" },
              { model: "iPhone 14 Pro Max", ours: "AED 1,000", apple: "AED 850", note: "AED 150" },
              { model: "iPhone 13 / 14", ours: "AED 700", apple: "AED 595", note: "AED 105" },
              { model: "iPhone 12 / 11", ours: "AED 500", apple: "AED 425", note: "AED 75" },
              { model: "iPhone SE 3 / 16e / 17e", ours: "AED 450", apple: "AED 385", note: "AED 65" },
            ]}
          />

          <h2>Voucher terms</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Validity:</strong> 12 months from purchase date. Single 6-month extension available on written request.</li>
            <li><strong>Coverage:</strong> any iPhone screen repair (any model from iPhone 6 through current generation iPhone 17 Pro Max).</li>
            <li><strong>Transferable:</strong> yes - give it to a spouse, child, parent, or friend. Just give us their name when they redeem.</li>
            <li><strong>Refundable:</strong> yes if unused - full refund less AED 50 admin fee, processed within 7 days.</li>
            <li><strong>Stackable:</strong> only one voucher per repair. Cannot combine with other promotions (Eid offer, DSF discount, returning-customer credit).</li>
            <li><strong>Non-applicable:</strong> water damage repair, screen + back glass combos, screens swapped to a non-genuine grade if you specifically request OLED-OEM.</li>
            <li><strong>Warranty unchanged:</strong> 12-month written warranty applies to voucher repairs identically to paid repairs.</li>
          </ul>

          <h2>Who should buy a voucher?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Parents of teenagers</strong> - accident probability over 12 months is roughly 70% on a teen's first iPhone.</li>
            <li><strong>Cycling / running / outdoor sports users</strong> - phones drop on hard surfaces.</li>
            <li><strong>Companies with staff iPhones</strong> - pre-pay 5-20 vouchers for the year, deploy as accidents happen.</li>
            <li><strong>Recently dropped phone with hairline cracks</strong> - buy the voucher today, redeem when the cracks worsen and you finally repair.</li>
            <li><strong>Buyers of new iPhones</strong> - vouchers locked in at current model's price even after Apple price hikes mid-year.</li>
          </ul>

          <h2>Who shouldn't bother?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>AppleCare+ subscribers</strong> - your AED 350 deductible already beats most voucher prices.</li>
            <li><strong>Light, careful phone users</strong> with no history of damage - accident probability over 12 months may not justify lock-in.</li>
            <li><strong>Buyers planning to sell within 6 months</strong> - voucher value is lost if the phone leaves the household.</li>
          </ul>

          <h2>How to buy</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>WhatsApp <a href="https://wa.me/971557413706" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">+971 55 741 3706</a> with the iPhone model.</li>
            <li>We send you a quote and payment link (card, Apple Pay, bank transfer accepted).</li>
            <li>Voucher PDF emailed within 1 hour with unique 8-character redemption code.</li>
            <li>To redeem: bring iPhone + voucher code to workshop, or mention the code when booking pickup.</li>
            <li>Pay AED 0 at repair (voucher fully covers) or just the difference if you upgrade to a more expensive screen tier.</li>
          </ol>

          <h2>Comparison with AppleCare+ (for context)</h2>
          <BlogPriceTable
            caption="Voucher vs AppleCare+ vs pay-as-you-go (iPhone 17 Pro example)"
            headers={["Option", "Cost over 12 months", "Per-screen cost", "Notes"]}
            rows={[
              { model: "AppleCare+", ours: "AED 549/yr + AED 350 deductible/screen", apple: "AED 350 (after subscription)", note: "Two screen claims/year max" },
              { model: "Our voucher", ours: "AED 1,105 upfront (1 screen)", apple: "AED 1,105", note: "12 months, transferable, refundable" },
              { model: "Pay-as-you-go", ours: "AED 0 upfront", apple: "AED 1,300", note: "Pay only when needed" },
            ]}
          />
          <p>
            AppleCare+ wins on per-incident cost if you have 2+ accidents/year. Pay-as-you-go wins if accidents are unlikely. Vouchers win in the middle - one expected accident in the year, no upfront yearly subscription, no Apple bureaucracy.
          </p>
          <p>
            See our deeper comparison:{" "}
            <Link to="/blog/iphone-repair-vs-applecare-which-better" className="text-accent font-semibold hover:underline">iPhone repair vs AppleCare</Link>.
          </p>
        </>
      }
      faqs={[
        { q: "Can I buy a voucher today and use it next week?", a: "Yes - there's no waiting period. Buy in the morning, redeem the same afternoon if needed." },
        { q: "What if I lose the voucher PDF?", a: "We keep a record under your phone number. WhatsApp us and we'll resend the redemption code." },
        { q: "Can I use the voucher at Apple Store?", a: "No - it's only valid at our workshop in Dubai Media City (or via our free pickup/delivery in Dubai)." },
        { q: "Does the voucher work on iPad or MacBook screens?", a: "No - screen repair vouchers are iPhone-specific. We can issue separate iPad or MacBook vouchers on request - different pricing structure." },
        { q: "What happens if Apple's screen tech changes (e.g. switches to a different OLED panel)?", a: "Voucher remains valid at the original 15% discount against the new pricing. We absorb the difference if Apple panels become more expensive within your 12-month window." },
        { q: "Can I buy multiple vouchers at once for my family?", a: "Yes - popular for families with 3+ iPhones. Bulk vouchers (5+) get an extra 5% off (so 20% total saving). WhatsApp us for the bulk quote." },
      ]}
      relatedLinks={[
        { label: "iPhone screen repair Dubai", href: "/iphone-screen-repair-dubai", description: "Service page - all models, pricing, turnaround." },
        { label: "iPhone repair vs AppleCare+", href: "/blog/iphone-repair-vs-applecare-which-better", description: "Decide whether voucher, AppleCare+, or pay-as-you-go fits." },
        { label: "Transparent pricing explained", href: "/blog/transparent-repair-pricing-explained", description: "How we set the prices the voucher discounts from." },
      ]}
    />
  );
}
