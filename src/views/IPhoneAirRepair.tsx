"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhoneAirRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone Air Repair Dubai - Thinnest iPhone Ever from AED 400 | 055 741 3706"
      seoDescription="iPhone Air (Sept 2025) repair Dubai. A19, 6.5-inch OLED, single camera, thinnest iPhone ever. Screen AED 900, battery AED 400. Same-day."
      path="/iphone-air-repair-dubai"
      eyebrow="iPhone Air (Sept 2025, current Apple lineup)"
      h1="iPhone Air Repair Dubai - Thinnest iPhone, OLED, Battery"
      subtitle="The thinnest iPhone Apple has ever made - A19, 6.5-inch OLED, single camera. Replaced the Plus in the lineup. From AED 400."
      startingPrice={400}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone Air (Sept 2025) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone Air",    path: "/iphone-air-repair-dubai" },
      ]}
      technician={{ name: "Shafiq", years: 15, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone Air Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone Air owners - we understand. The thinnest iPhone is also the most fragile. Let's fix it.</strong> The iPhone Air (Sept 2025) introduced a brand-new product category - the thinnest iPhone Apple has ever shipped. A19 chip, 6.5-inch OLED with ProMotion + AOD + Dynamic Island + Ceramic Shield 2, single 48MP camera, USB-C 2.0, MagSafe, Apple Intelligence. The thin chassis means OLED + back-glass impacts are more common - but also means careful tools and a steady hand for repair. Apple released this 7 months ago. As of April 2026 we've serviced 50+ Airs - screens and batteries are routine; back-glass repairs need extra care due to the thin frame. AED 900 screen, AED 400 battery.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone Air</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> September 2025 · still current · replaced the Plus</li>
            <li>• <strong>Chip:</strong> Apple A19 · N1 wireless · 8 GB RAM</li>
            <li>• <strong>Display:</strong> 6.5-inch ProMotion LTPO OLED, AOD, Dynamic Island, Ceramic Shield 2</li>
            <li>• <strong>Camera:</strong> Single 48 MP Fusion (rear) · 12 MP front</li>
            <li>• <strong>Connector:</strong> USB-C 2.0 · MagSafe + Qi · Wi-Fi 7 · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Titanium · Action Button · Camera Control · thinnest iPhone ever</li>
            <li>• <strong>iOS support:</strong> iOS 19 native · iOS 20-25 likely</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the Air</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked OLED</strong> - thin frame transmits impact more directly</li>
            <li>• <strong>Cracked back glass</strong> + MagSafe coil damage (very common)</li>
            <li>• <strong>Frame bend</strong> on hard sit-on / pocket-bend incidents</li>
            <li>• <strong>Single camera failure</strong></li>
            <li>• <strong>Camera Control button</strong> issues</li>
            <li>• <strong>USB-C port wear</strong></li>
            <li>• <strong>Battery service</strong></li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the Air</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price (AED)</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">ProMotion OLED + Ceramic Shield 2</td><td className="px-md py-sm">900</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Back glass + MagSafe coil</td><td className="px-md py-sm">800</td><td className="px-md py-sm">2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Single 48 MP camera replacement</td><td className="px-md py-sm">650</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C port replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-usb-c-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Camera Control button</td><td className="px-md py-sm">350</td><td className="px-md py-sm">2-3 days (parts)</td><td className="px-md py-sm"><Link to="/iphone-power-button-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Titanium frame straighten / polish</td><td className="px-md py-sm">From 600</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">700</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
            OLED and battery in stock. Back glass with MagSafe coil pre-aligned takes 2 days due to the bespoke Air-only assembly. Frame straightening uses precision jigs - we are one of two workshops in Dubai with the correct Air-spec tooling.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the Air still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Strong yes - Apple still sells it new.</strong> Used resale ~AED 3,800-4,400. iOS 25 expected. Any single repair under AED 2,500 is well worthwhile.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked OLED with Ceramic Shield 2",
        "Cracked back glass + MagSafe coil",
        "Bent titanium frame (precision straighten)",
        "Single 48MP camera failure",
        "Camera Control button issues",
        "USB-C port wear",
        "Battery service",
        "Face ID intermittent",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Free pickup",          body: "Across Dubai mainland." },
        { title: "Diagnose + repair",    body: "Standard same day; back glass + frame work 2-3 days." },
        { title: "QC + return",          body: "ProMotion, AOD, MagSafe alignment, USB-C, single camera, frame straightness and Face ID tested, signed warranty, free delivery." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "12 months on parts and labour.",
        "Screen: dead pixels, ghost touch, 120Hz refresh, AOD covered.",
        "MagSafe alignment verified to ±0.3 mm tolerance.",
        "Frame work: straightness measured on jig before return.",
      ]}
      faqs={[
        { q: "Why is the iPhone Air harder to repair than other iPhones?", a: "The chassis is the thinnest Apple has ever made - every internal cable runs through tighter clearances and the battery is a bespoke shape. We use Air-specific micro tools and have invested in the correct frame-straightening jig." },
        { q: "Bundle pricing?", a: "Screen + battery: AED 1,270 (saves AED 30). Screen + back glass: AED 1,670 (saves AED 30)." },
        { q: "Will my Air bend in my pocket?", a: "Apple's titanium frame is stiff for its thickness, but sustained pressure (sat-on, kneeled-on, jeans pocket pressure) can deform the frame. We straighten light bends for AED 600+." },
        { q: "Genuine Apple OLED?", a: "Yes - AED 1,400 vs AED 900 OEM-grade. The Air OLED is bonded directly to a thinner mid-frame; we use the correct laminating press." },
        { q: "Same day?", a: "OLED, battery, USB-C, single camera - yes. Back glass + frame work 2-3 days." },
      ]}
      reviewNames={["Seyed Moulana", "B Parker"]}
      related={[
        { label: "iPhone Screen Repair Dubai",      href: "/iphone-screen-repair-dubai",      description: "ProMotion + Ceramic Shield 2 AED 900." },
        { label: "iPhone Back Glass Repair Dubai",  href: "/iphone-back-glass-repair-dubai",  description: "Air bespoke back glass + MagSafe AED 800." },
        { label: "iPhone Battery Replacement",      href: "/iphone-battery-replacement-dubai",description: "AED 400, 45 minutes." },
      ]}
    />
  );
}
