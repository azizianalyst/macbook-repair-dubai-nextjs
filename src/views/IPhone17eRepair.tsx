"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone17eRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 17e Repair Dubai - A19 Budget iPhone, Dynamic Island from AED 350 | 055 741 3706"
      seoDescription="iPhone 17e (March 2026) repair Dubai. A19, Dynamic Island (added), MagSafe (first for e-series), USB-C, $599. Screen AED 700, battery AED 400. Same-day."
      path="/iphone-17e-repair-dubai"
      eyebrow="iPhone 17e (March 2026, just released)"
      h1="iPhone 17e Repair Dubai - A19, Dynamic Island, MagSafe, USB-C"
      subtitle="The newest budget iPhone - A19, Dynamic Island (added), MagSafe (first for e-series), Apple Intelligence. Released 6 weeks ago. From AED 350."
      startingPrice={350}
      timeline="Same day (OLED + battery)"
      whatsappPrefill="Hi, I have an iPhone 17e (March 2026) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-screen-repair-dubai" },
        { name: "iPhone 17e",    path: "/iphone-17e-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 17e Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 17e owners - we understand. Brand-new phone, just broke. Let's fix it.</strong> The iPhone 17e (March 2026) is the newest budget iPhone - A19 chip, 6.1-inch OLED with Dynamic Island (added vs the 16e), MagSafe (first ever on the e-series), USB-C 2.0, single 48MP rear camera, Action Button, Apple Intelligence-capable. Apple released this in March 2026 - only 6 weeks ago. As of April 2026 we've serviced 12 of these so far. Parts availability is good for screens and batteries; specialty parts (MagSafe coil back glass, Action Button assembly) may take 2-3 days to arrive. AED 700 screen, AED 400 battery.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone 17e</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> March 2026 · just released · still current</li>
            <li>• <strong>Chip:</strong> Apple A19 · N1 wireless · 8 GB RAM</li>
            <li>• <strong>Display:</strong> 6.1-inch Super Retina XDR OLED, 60 Hz, Dynamic Island (added vs 16e)</li>
            <li>• <strong>Camera:</strong> Single 48 MP Fusion (rear) · 12 MP front</li>
            <li>• <strong>Connector:</strong> USB-C 2.0 · MagSafe + Qi (first for e-series) · Wi-Fi 6E · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Aluminium · Action Button · Apple Intelligence · no Camera Control</li>
            <li>• <strong>iOS support:</strong> iOS 19 native · iOS 20-26 likely</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the 17e (limited so far)</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked OLED</strong> from drops (most common in first 6 weeks)</li>
            <li>• <strong>USB-C port damage</strong></li>
            <li>• <strong>Cracked back glass</strong> + MagSafe coil damage</li>
            <li>• <strong>Single 48MP camera</strong> failure</li>
            <li>• <strong>Action Button</strong> stuck</li>
            <li><em>Note: too early to identify any 17e-specific failure clusters.</em></li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the 17e</h2>
          <div className="overflow-x-auto border border-white/10 rounded-md bg-white/[0.04] mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-white/[0.04]"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price (AED)</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">OLED screen replacement (Dynamic Island)</td><td className="px-md py-sm">700</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C port replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-usb-c-port-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">MagSafe coil + back glass</td><td className="px-md py-sm">700</td><td className="px-md py-sm">2-3 days (parts)</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Single 48 MP camera replacement</td><td className="px-md py-sm">600</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">Action Button repair</td><td className="px-md py-sm">300</td><td className="px-md py-sm">2-3 days (parts)</td><td className="px-md py-sm"><Link to="/iphone-power-button-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">700</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">Water damage</td><td className="px-md py-sm">From 450</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-water-damage-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-on-primary-muted leading-relaxed mb-lg">
            <strong>Honest update for April 2026:</strong> OLED, battery and USB-C in stock for same-day repair. MagSafe-equipped back glass (a brand-new 17e part) and Action Button assembly currently take 2-3 days from our authorised supplier - both are e-series-exclusive parts and the supply pipeline is still ramping up. We expect 24-hour replenishment by June 2026.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 17e still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Absolutely - it just launched.</strong> A19, Apple Intelligence, MagSafe, used resale ~AED 2,000-2,400. iOS 26 expected. Any repair under AED 1,200 is well worthwhile.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked 6.1-inch OLED with Dynamic Island",
        "USB-C port wear / damage",
        "Cracked back glass + MagSafe coil (e-series first)",
        "Single 48MP Fusion camera failure",
        "Action Button stuck",
        "Battery service",
        "Face ID intermittent",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Free pickup",          body: "Across Dubai mainland." },
        { title: "Diagnose + repair",    body: "OLED + battery same day; MagSafe back glass + Action Button 2-3 days for parts." },
        { title: "QC + return",          body: "OLED, Dynamic Island, USB-C, MagSafe alignment, Action Button and Face ID tested, signed warranty, free delivery." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90 days on parts and labour.",
        "Screen: dead pixels, ghost touch, Dynamic Island animations covered.",
        "MagSafe: charge alignment verified to ±0.3 mm tolerance.",
        "Battery: capacity-drop coverage.",
      ]}
      faqs={[
        { q: "How many 17e units have you serviced so far?", a: "12, as of April 2026 - the phone is only 6 weeks old. We'll publish 17e-specific failure-cluster data on this page once we have meaningful numbers (target: June 2026)." },
        { q: "Why is the back glass a 2-3 day repair?", a: "The 17e is the first e-series iPhone with MagSafe - its back-glass assembly with embedded MagSafe coil is a brand-new e-series-exclusive part. Apple's authorised supply chain to the UAE is still ramping. We expect 24-hour replenishment by mid-2026." },
        { q: "Bundle pricing?", a: "Screen + battery: AED 1,070 (saves AED 30). Battery + USB-C port: AED 770 (saves AED 30)." },
        { q: "Will the 17e get iOS 20 and beyond?", a: "Yes - A19 with 8 GB RAM is fully Apple-Intelligence-capable. iOS 26 expected." },
        { q: "Same day?", a: "OLED, battery, USB-C, single camera - yes. MagSafe back glass + Action Button currently 2-3 days." },
      ]}
      reviewNames={["B Parker", "Seyed Moulana"]}
      related={[
        { label: "iPhone Screen Repair Dubai",      href: "/iphone-screen-repair-dubai",      description: "OLED with Dynamic Island AED 700." },
        { label: "iPhone Back Glass Repair Dubai",  href: "/iphone-back-glass-repair-dubai",  description: "MagSafe coil back glass - e-series first." },
        { label: "iPhone Battery Replacement",      href: "/iphone-battery-replacement-dubai",description: "AED 400, 45 minutes." },
      ]}
    />
  );
}
