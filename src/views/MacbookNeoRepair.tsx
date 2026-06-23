"use client";
// MacBook Neo - Apple's first A-chip MacBook (March 2026, $599 entry-level).
// Custom page (not data-driven through MacBookModelPage) because the A18 Pro
// SoC, $599 price point, and student-focused positioning warrant unique
// framing per spec.
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function MacbookNeoRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Neo Repair Dubai - A18 Pro Budget MacBook from AED 250 | 055 741 3706"
      seoDescription="MacBook Neo (March 2026) repair Dubai. A18 Pro chip, 12.9-inch screen, $599 budget MacBook. Screen AED 650, battery AED 450. Warranty up to 12 months. Free pickup."
      path="/macbook-neo-repair-dubai"
      eyebrow="MacBook Neo · March 2026 · current Apple lineup · $599 entry-level"
      h1="MacBook Neo Repair Dubai - Apple's First A-Chip MacBook"
      subtitle="The new $599 MacBook with the iPhone-class A18 Pro chip. Same hands that fix your iPhone 17 fix your Neo. From AED 250."
      startingPrice={250}
      timeline="3-5 days (parts ramping)"
      whatsappPrefill="Hi, I have a MacBook Neo (March 2026, A18 Pro) and I need help with:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "MacBook Neo",    path: "/macbook-neo-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "MacBook & A-chip board-level repair" }}
      serviceName="MacBook Neo Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook Neo owner - yes, we repair it.</strong> Released March 2026 at $599, the MacBook Neo is Apple's budget MacBook - the first ever to use an iPhone-class chip (A18 Pro) instead of an M-series chip. It targets students, light users and anyone who wants a real Mac at a real price. The same hands and tools that fix your iPhone 17&apos;s A19 Bionic handle the A18 Pro in your Neo. From AED 250 for common repairs.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the MacBook Neo</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> March 2026 · current Apple lineup</li>
            <li>• <strong>Chip:</strong> Apple A18 Pro (iPhone-class, not M-series) - 6-core CPU, 5-core GPU</li>
            <li>• <strong>Display:</strong> 12.9-inch Liquid Retina, True Tone (smaller than 13.6" Air)</li>
            <li>• <strong>RAM:</strong> 8GB unified, soldered</li>
            <li>• <strong>Storage:</strong> 256GB / 512GB SSD (soldered)</li>
            <li>• <strong>Ports:</strong> 1× USB-C / Thunderbolt 4, MagSafe 3, 3.5mm jack</li>
            <li>• <strong>Wireless:</strong> Wi-Fi 6E, Bluetooth 5.3</li>
            <li>• <strong>Starting price:</strong> $599 USD (~AED 2,200)</li>
          </ul>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">MacBook Neo - Apple&apos;s first A-chip MacBook</h3>
            <p className="text-[15px] mb-sm">
              Released March 2026 at $599, MacBook Neo is Apple&apos;s budget MacBook. It uses the <strong>A18 Pro chip (iPhone-class)</strong> instead of M-series silicon. This makes it cheaper to manufacture but limits pro workflows.
            </p>
            <p className="text-[15px] mb-sm">
              For students and light users, it&apos;s a great machine. For power users, get a{" "}
              <Link to="/macbook-air-13-m5-2026-repair-dubai" className="text-accent font-semibold hover:underline">MacBook Air M5</Link> instead.
            </p>
            <p className="text-[15px]">
              <strong>Can we repair it?</strong> Yes. Same hands that fix iPhone 17 A19 chips handle A18 Pro. But parts are still ramping - most repairs are ready in 3-5 days, not same-day yet.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we&apos;re seeing on the Neo</h2>
          <p className="text-[15px] mb-md text-text-muted">
            <em>The Neo is brand new (March 2026). The list below is what we&apos;re seeing in the first weeks of service - it will evolve as more units age.</em>
          </p>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked Liquid Retina screen</strong> - drop damage on first-month users</li>
            <li>• <strong>USB-C / Thunderbolt port wear</strong> - the Neo only has 1 USB-C port, so it gets used hard</li>
            <li>• <strong>MagSafe 3 connector debris</strong> from pockets and bags</li>
            <li>• <strong>Battery</strong> - too early to see swelling; first cases expected late 2027</li>
            <li>• <strong>Magic Keyboard key failures</strong> - isolated keys, very rare so far</li>
            <li>• <strong>A18 Pro thermal events</strong> under heavy on-device LLM workloads (Apple Intelligence runs but slower than M-series)</li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the Neo</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-card">
                <tr className="text-left">
                  <th className="px-md py-sm font-semibold">Service</th>
                  <th className="px-md py-sm font-semibold">Price (AED)</th>
                  <th className="px-md py-sm font-semibold">Timeline</th>
                  <th className="px-md py-sm font-semibold">Book</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-md py-sm">12.9" Liquid Retina screen replacement</td><td className="px-md py-sm">650</td><td className="px-md py-sm">3-5 days</td><td className="px-md py-sm"><Link to="/macbook-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">450</td><td className="px-md py-sm">3-5 days</td><td className="px-md py-sm"><Link to="/macbook-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Magic Keyboard repair (top-case)</td><td className="px-md py-sm">550</td><td className="px-md py-sm">3-5 days</td><td className="px-md py-sm"><Link to="/macbook-keyboard-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Trackpad repair</td><td className="px-md py-sm">400</td><td className="px-md py-sm">3 days</td><td className="px-md py-sm"><Link to="/macbook-trackpad-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C / Thunderbolt 4 port repair</td><td className="px-md py-sm">400</td><td className="px-md py-sm">3 days</td><td className="px-md py-sm"><Link to="/macbook-charging-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">MagSafe 3 board replacement</td><td className="px-md py-sm">350</td><td className="px-md py-sm">3 days</td><td className="px-md py-sm"><Link to="/macbook-charging-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">A18 Pro logic board (component-level)</td><td className="px-md py-sm">1500</td><td className="px-md py-sm">5-7 days</td><td className="px-md py-sm"><Link to="/macbook-logic-board-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Liquid damage diagnostic + clean</td><td className="px-md py-sm">600</td><td className="px-md py-sm">3-5 days</td><td className="px-md py-sm"><Link to="/macbook-water-damage-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Free diagnostic</td><td className="px-md py-sm">Free</td><td className="px-md py-sm">30 minutes</td><td className="px-md py-sm"><Link to="/macbook-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-bg-card border-l-4 border-accent rounded-md p-lg mb-lg">
            <h3 className="text-[18px] font-bold mb-sm">Can we upgrade the RAM or SSD?</h3>
            <p className="text-[15px]">
              <strong>No.</strong> Like every Apple Silicon Mac, the A18 Pro&apos;s 8GB RAM is unified into the SoC and the SSD is soldered. Buy enough storage when you order - there&apos;s no upgrade path. For data on a failed SSD we offer chip-off recovery (AED 2,000+).{" "}
              <Link to="/macbook-data-recovery-dubai" className="text-accent font-semibold hover:underline">More on data recovery →</Link>
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability for the MacBook Neo</h2>
          <p className="text-[15px] mb-lg">
            The Neo launched March 2026 - parts are still ramping up across all repair shops in Dubai. Screens, batteries and MagSafe boards are obtainable but typically take 3-5 days to arrive (vs same-day for older MacBook Air models). We&apos;re an early-adopter shop, so we already have working stock - but be patient on first-call timelines.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Is the MacBook Neo still worth repairing?</h2>
          <div className="bg-bg-card border-l-4 border-primary rounded-md p-lg mb-lg">
            <p className="text-[16px] font-semibold mb-sm">Yes - and check Apple&apos;s warranty first</p>
            <p className="text-[15px]">
              The Neo is in Apple&apos;s current lineup. Most units are still under the standard 1-year warranty or AppleCare+. Always start with the Apple Store. We&apos;re here for accidental damage Apple won&apos;t cover and out-of-warranty work. At $599 new, the math on a paid screen replacement (AED 650) is borderline - we&apos;ll always show you the numbers honestly before you commit.
            </p>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">Our honest take on the MacBook Neo</h2>
          <p className="text-[15px] mb-lg">
            The Neo is a brilliant idea: a real Mac at a real student price. The A18 Pro is fast for everyday use - web, Pages, Numbers, Safari, FaceTime - and battery life is excellent. But it&apos;s not an M-series. Heavy Final Cut, Logic, Xcode or AI workloads will feel constrained. If you&apos;re a student, writer, or light user, the Neo is fantastic. If you&apos;re a creator or developer, spend the extra and get a{" "}
            <Link to="/macbook-air-13-m5-2026-repair-dubai" className="text-accent font-semibold hover:underline">MacBook Air M5</Link>.
          </p>

          <h2 className="text-[24px] md:text-[28px] mb-md">Other MacBook models we repair</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            <Link to="/macbook-air-13-m5-2026-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Air 13" M5</div>
              <div className="text-text-muted text-[12px] mt-[2px]">2026 · M5</div>
            </Link>
            <Link to="/macbook-air-13-m4-2025-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Air 13" M4</div>
              <div className="text-text-muted text-[12px] mt-[2px]">2025 · M4</div>
            </Link>
            <Link to="/macbook-air-13-m1-2020-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Air 13" M1</div>
              <div className="text-text-muted text-[12px] mt-[2px]">2020 · M1</div>
            </Link>
            <Link to="/macbook-pro-14-m5-2025-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Pro 14" M5</div>
              <div className="text-text-muted text-[12px] mt-[2px]">2025 · M5</div>
            </Link>
          </div>

          <h2 className="text-[24px] md:text-[28px] mb-md">MacBook Neo repairs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg">
            <Link to="/macbook-neo-a18-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">A18 Pro Repair</div>
              <div className="text-text-muted text-[12px] mt-[2px]">Board-level A-chip</div>
            </Link>
            <Link to="/macbook-neo-screen-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Screen Repair</div>
              <div className="text-text-muted text-[12px] mt-[2px]">12.9" Liquid Retina</div>
            </Link>
            <Link to="/macbook-neo-battery-replacement-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Battery Replacement</div>
              <div className="text-text-muted text-[12px] mt-[2px]">Fresh cells</div>
            </Link>
            <Link to="/macbook-neo-keyboard-repair-dubai" className="border border-border rounded-md p-sm bg-bg-card hover:border-primary text-[13px] transition-colors">
              <div className="font-semibold">Keyboard Repair</div>
              <div className="text-text-muted text-[12px] mt-[2px]">Magic Keyboard</div>
            </Link>
          </div>
        </>
      }
      whatWeFix={[
        "Cracked or unresponsive 12.9\" Liquid Retina screen",
        "Worn-out battery - fresh cells, verified cycle count",
        "Magic Keyboard key failures - top-case swap",
        "Trackpad cable failures, dead trackpad after spills",
        "USB-C / Thunderbolt 4 port damage (the Neo only has one - handle with care)",
        "MagSafe 3 board failures and connector debris",
        "A18 Pro logic board faults - component-level repair",
        "Liquid damage - ultrasonic clean, board recovery",
      ]}
      steps={[
        { title: "WhatsApp the model and issue",  body: "Send \"MacBook Neo\" plus a photo. Quote in 4 minutes." },
        { title: "Free pickup or visit our Media City workshop",  body: "Free pickup across Dubai mainland or drop in 9am-10pm." },
        { title: "Free diagnostic, fixed price",  body: "We diagnose for free and confirm the price before any work starts. We'll always show you whether the repair makes financial sense at the $599 price point." },
        { title: "Repair + written warranty",      body: "Most repairs ready in 3-5 days while parts supply ramps. You walk out with a written warranty of up to 12 months, depending on the repair." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the replaced part and the labour",
        "Same fault returns? We re-repair free",
        "Issued in writing on your invoice",
        "No quibbling, no fine print",
      ]}
      faqs={[
        {
          q: "Can you actually repair the MacBook Neo? It's brand new.",
          a: "Yes. The Neo uses the A18 Pro chip - the same chip family as the iPhone 16 Pro. We've been doing iPhone A-series board-level repair for years, so the chip itself is familiar territory. The chassis, MagSafe 3 board and Magic Keyboard are conventional MacBook parts. Where we&apos;re still building experience is the specific cable routing and the new 12.9-inch panel - most repairs are ready in 3-5 days while parts supply ramps.",
        },
        {
          q: "How much does a MacBook Neo screen replacement cost?",
          a: "12.9-inch Liquid Retina screen replacement on the MacBook Neo is AED 650. Timeline 3-5 days while parts supply ramps. Includes a 3-month written warranty.",
        },
        {
          q: "Can I upgrade the RAM or SSD on the MacBook Neo?",
          a: "No. The A18 Pro&apos;s 8GB RAM is unified into the chip package and the SSD is soldered to the logic board. Like every Apple Silicon Mac, the original spec is what you keep. For data on a failed SSD we offer chip-off recovery (AED 2,000+).",
        },
        {
          q: "Is the MacBook Neo worth buying for a student?",
          a: "For most students - yes. Web, Pages, Numbers, Safari, FaceTime, even light photo editing all run perfectly on the A18 Pro. Battery life is excellent. Where it falls short: heavy Final Cut, Logic Pro, Xcode, or AI workloads. If your studies need any of those, get a MacBook Air M5 instead.",
        },
        {
          q: "Where can I get my MacBook Neo repaired in Dubai?",
          a: "Bring it to our workshop in Dubai Media City, or use our free pickup service across Dubai mainland. WhatsApp the model and a photo of the issue and we'll quote you within 4 minutes. Written warranty of up to 12 months, depending on the repair.",
        },
      ]}
      reviewNames={["Saeed Alam", "Polycarp"]}
      related={[
        { label: "MacBook Air M5 repair Dubai",      href: "/macbook-air-13-m5-2026-repair-dubai", description: "Step up from the Neo - M5 chip, more RAM, more performance." },
        { label: "MacBook battery replacement Dubai", href: "/macbook-battery-replacement-dubai",   description: "Fresh cells, verified cycle count, sealed properly." },
        { label: "MacBook full diagnostic",           href: "/macbook-full-diagnostic-dubai",       description: "Free 30-minute diagnostic - we tell you what&apos;s wrong and what it costs." },
      ]}
    />
  );
}
