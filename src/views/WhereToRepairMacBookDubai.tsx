"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

// Decision-stage comparison landing page (gap-audit P1): beats competitors' price-less
// "best repair shop" listicles with an honest, priced Apple Store vs AASP vs independent
// comparison. "Us" cells use our real published prices; Apple/AASP cells are general,
// well-established facts about how those routes work — no fabricated competitor figures.
const COMPARISON: { factor: string; apple: string; aasp: string; us: string }[] = [
  { factor: "Best for",
    apple: "In-warranty Macs & AppleCare+ claims",
    aasp: "In-warranty & AppleCare+, handled locally",
    us: "Out-of-warranty, older or cost-sensitive repairs" },
  { factor: "Typical cost",
    apple: "Highest — full Apple service pricing",
    aasp: "Apple's published price list",
    us: "Lower — from AED 49 diagnosis; screens from AED 600, battery from AED 450" },
  { factor: "Parts",
    apple: "Genuine Apple only",
    aasp: "Genuine Apple only",
    us: "Genuine where available, A-grade OEM-spec otherwise — disclosed before work" },
  { factor: "Repair approach",
    apple: "Usually whole-unit or whole-board replacement",
    aasp: "Whole-board replacement",
    us: "Component / board-level — we fix the actual fault" },
  { factor: "Warranty on the repair",
    apple: "90 days",
    aasp: "90 days (or remaining Apple cover)",
    us: "90-day written warranty + 6-month battery cover" },
  { factor: "Turnaround",
    apple: "Often sent off-site — can take longer",
    aasp: "Typically a few days",
    us: "Same day on most common repairs" },
  { factor: "Vintage / obsolete Macs",
    apple: "Declined once classed vintage or obsolete",
    aasp: "Usually declined",
    us: "Still repaired — Intel through M5" },
  { factor: "AppleCare+ claims",
    apple: "Yes, in-house",
    aasp: "Yes, in-house",
    us: "No — we'll tell you when an Apple claim is the better route" },
  { factor: "Collection",
    apple: "Visit the store",
    aasp: "Visit the centre",
    us: "Free door-to-door pickup across Dubai" },
];

export default function WhereToRepairMacBookDubai() {
  return (
    <SubServicePageTemplate
      seoTitle="Where to Repair a MacBook in Dubai: Apple vs Independent"
      seoDescription="Apple Store vs Authorised Service Provider vs independent specialist — an honest, priced guide to MacBook repair in Dubai. When each route wins, with real AED prices and a 90-day warranty."
      path="/where-to-repair-macbook-dubai"
      eyebrow="Apple Store vs independent"
      h1="Where to Repair a MacBook in Dubai: Apple Store, Authorised Centre or Independent?"
      subtitle="Three honest routes, one decision. We're an independent specialist — not an Apple Authorised Service Provider — so here's the straight comparison, with our real prices, including when Apple or an authorised centre is genuinely the better choice for you."
      startingPrice={49}
      timeline="Same day on most repairs"
      whatsappPrefill="Hi, I'm deciding where to repair my MacBook - here's my model and the issue:"
      breadcrumb={[
        { name: "Home",                 path: "/" },
        { name: "Apple Repair",         path: "/apple-repair-dubai" },
        { name: "Where to Repair a MacBook", path: "/where-to-repair-macbook-dubai" },
      ]}
      technician={{ name: "Abdul Aziz", years: 21, specialisation: "MacBook board-level repair & honest repair advice" }}
      serviceName="MacBook Repair (independent vs Apple Store)"
      quickAnswer={{
        question: "Where should I repair my MacBook in Dubai?",
        answer: "If your MacBook is in warranty or covered by AppleCare+, use an Apple Store or an Apple Authorised Service Provider. If it's out of warranty, older, or you want a faster, lower-cost board-level repair, an independent specialist like us is usually the better value - from AED 49 diagnosis, same-day on most repairs, with a 90-day written warranty. We'll always tell you honestly when an Apple claim is the smarter route.",
      }}
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>When your MacBook breaks in Dubai you have three routes:</strong> an Apple Store or genuine reseller, an Apple Authorised Service Provider (AASP), or an independent specialist like us. Each one wins in different situations. We&apos;ve repaired Macs in Media City since 2004, and we&apos;d rather you choose with the full picture - so here it is, with our real prices.
          </p>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[680px]">
              <caption className="sr-only">Comparison of repairing a MacBook in Dubai at an Apple Store, an Apple Authorised Service Provider, or an independent specialist.</caption>
              <thead className="bg-bg-alt">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Factor</th>
                  <th className="px-md py-sm font-semibold">Apple Store / reseller</th>
                  <th className="px-md py-sm font-semibold">Authorised (AASP)</th>
                  <th className="px-md py-sm font-semibold text-accent">Independent — us</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((r, i) => (
                  <tr key={r.factor} className={i % 2 ? "bg-bg-alt" : ""}>
                    <td className="px-md py-sm font-semibold text-text align-top">{r.factor}</td>
                    <td className="px-md py-sm text-text-muted align-top">{r.apple}</td>
                    <td className="px-md py-sm text-text-muted align-top">{r.aasp}</td>
                    <td className="px-md py-sm text-text align-top">{r.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">When Apple or an authorised centre is the better choice</h2>
          <p className="text-[16px] text-text-muted leading-relaxed mb-lg max-w-[72ch]">
            If your MacBook is still inside Apple&apos;s one-year warranty or covered by AppleCare+, start with an Apple Store or an Apple Authorised Service Provider - they can process the claim in-house and a covered repair may cost little or nothing. The same is true if you specifically need only Apple-supplied parts and cost is not a concern. We&apos;ll tell you this to your face rather than take work that&apos;s better handled under your cover.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">When an independent specialist wins</h2>
          <p className="text-[16px] text-text-muted leading-relaxed max-w-[72ch]">
            Once a Mac is out of warranty - or Apple has classed it &quot;vintage&quot; and won&apos;t touch it - an independent specialist is usually the faster, cheaper and more flexible route. We repair at component and board level (the exact failed chip, port or cable) where Apple and authorised centres replace the whole logic board, so a fault Apple quotes thousands for is often a fraction of that with us. Add free door-to-door pickup across Dubai, same-day turnaround on most repairs, a written 90-day warranty, and published prices you can see before you commit.
          </p>
        </>
      }
      whatWeFix={[
        "MacBook screen replacement - from AED 600, genuine where available",
        "Battery replacement - from AED 450, 6-month battery cover",
        "Logic-board & board-level repair Apple would whole-swap at far higher cost",
        "Water-damage recovery and corrosion treatment",
        "Keyboard, trackpad, charging port and speaker repair",
        "Free diagnosis + an honest answer on whether Apple is the better route",
      ]}
      steps={[
        { title: "WhatsApp your model & issue", body: "Send the model and a photo or description. We give an indicative price band straight away and book a free pickup if you want one." },
        { title: "Free pickup or walk in",       body: "Free door-to-door collection anywhere in Dubai, or drop in to our Concord Tower workshop in Media City, 9 am - 10 pm Mon-Sat." },
        { title: "Free diagnosis & written quote", body: "We diagnose the real fault and send a fixed written quote - including an honest note if an Apple Store or AASP claim would serve you better." },
        { title: "Approve & we repair",          body: "Most common repairs finish the same day at component level. You only pay once you approve the quote." },
        { title: "Return + 90-day warranty",     body: "Free return delivery with a written 90-day warranty on the repair (6 months on batteries)." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90-day written warranty on the replaced part and the workmanship.",
        "6-month cover on battery replacements.",
        "Same fault returns inside the period? We re-repair free - no quibbling.",
        "Honest, single warranty policy - not a headline figure the fine print contradicts.",
      ]}
      faqs={[
        { q: "Is independent MacBook repair as good as the Apple Store?", a: "For out-of-warranty and board-level work, an independent specialist is often better value - we repair the actual failed component where Apple replaces the whole logic board. For in-warranty or AppleCare+ repairs, the Apple Store or an authorised centre is the right call, and we'll tell you so." },
        { q: "Are you an Apple Authorised Service Provider?", a: "No. We're an independent Apple repair specialist working in Dubai since 2004. We repair in-warranty-expired, AppleCare-ineligible and out-of-warranty Macs, and we'll honestly tell you when an Apple Store or authorised centre is the better route." },
        { q: "Will using an independent repairer void my Apple warranty or AppleCare+?", a: "If your Mac is still under Apple's warranty or AppleCare+, a non-Apple repair can affect that cover - so for in-warranty machines we'll point you to Apple first. Once a Mac is out of warranty there's no Apple cover left to affect." },
        { q: "Do you use genuine Apple parts?", a: "We use genuine parts where they're available and high-grade OEM-spec parts where they aren't - and we tell you which your repair uses before we start. Both carry our 90-day written warranty." },
        { q: "How much cheaper is independent repair than the Apple Store?", a: "It varies by fault, but board-level repair is typically far less than Apple's whole-board replacement. We publish our starting prices (diagnosis from AED 49, screens from AED 600, battery from AED 450) and confirm the exact price in writing after a free diagnosis." },
        { q: "When should I go to Apple instead of you?", a: "If your MacBook is in warranty, eligible for an AppleCare+ claim, or you specifically require only Apple-supplied parts and cost isn't a factor. In those cases the Apple Store or an Apple Authorised Service Provider is the better choice - and we'll say so." },
      ]}
      reviewNames={["Habeeb Rahman", "Aditya Kaushik", "Neil Morecraft"]}
      related={[
        { label: "Transparent pricing",            href: "/pricing",                         description: "Our full published MacBook repair price list." },
        { label: "Out-of-warranty Apple repair",   href: "/out-of-warranty-apple-repair-dubai", description: "What we fix once Apple's cover has ended." },
        { label: "Apple repair programmes & recalls", href: "/apple-repair-programs-dubai",   description: "Free Apple service programmes you may still qualify for." },
        { label: "90-day warranty",                href: "/warranty",                        description: "Exactly what our written warranty covers." },
      ]}
      blogLink={{ label: "How our transparent repair pricing works", href: "/blog/transparent-repair-pricing-explained" }}
    />
  );
}
