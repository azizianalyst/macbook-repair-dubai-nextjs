"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone15Repair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 15 Repair Dubai - USB-C, Dynamic Island from AED 350 | 055 741 3706"
      seoDescription="iPhone 15 (2023) repair Dubai. A16, USB-C (first), Dynamic Island, 48MP. Screen AED 750, USB-C port AED 400. Same-day, 90-day warranty."
      path="/iphone-15-repair-dubai"
      eyebrow="iPhone 15 (2023, discontinued Sept 2025)"
      h1="iPhone 15 Repair Dubai - Screen, USB-C, Battery, Camera"
      subtitle="The first USB-C iPhone - A16, Dynamic Island, 48MP main camera. Discontinued Sept 2025 but fully serviceable. From AED 350."
      startingPrice={350}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone 15 (2023) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-screen-repair-dubai" },
        { name: "iPhone 15",     path: "/iphone-15-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 15 Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Quick answer:</strong> The iPhone 15 (Sept 2023) was historic - the first non-Lightning iPhone. A16 Bionic, 6.1-inch Super Retina XDR OLED, Dynamic Island (first on non-Pro), 48MP main camera, USB-C 2.0, MagSafe, IP68. Discontinued in Sept 2025 when the 17 launched, but parts are abundant and we service them daily. Most-common issue is USB-C port wear - first-gen Apple USB-C is more delicate than expected. AED 750 screen, AED 400 USB-C port.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone 15</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> September 2023 · <strong>discontinued</strong> September 2025</li>
            <li>• <strong>Chip:</strong> Apple A16 Bionic (6 GB RAM)</li>
            <li>• <strong>Display:</strong> 6.1-inch Super Retina XDR OLED, Dynamic Island, 2556 × 1179</li>
            <li>• <strong>Camera:</strong> 48 MP main + 12 MP ultra-wide</li>
            <li>• <strong>Connector:</strong> USB-C 2.0 (480 Mbps) · MagSafe + Qi · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Aluminium with colour-infused back glass</li>
            <li>• <strong>iOS support:</strong> iOS 18 supported · iOS 19 + 20 + 21 likely</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the 15</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>USB-C port wear</strong> (first-gen Apple USB-C - known issue)</li>
            <li>• <strong>Cracked OLED with Dynamic Island</strong></li>
            <li>• <strong>Battery degradation</strong> (1-2 year-old units approaching threshold)</li>
            <li>• <strong>Cracked back glass</strong> - colour-infused glass needs careful match</li>
            <li>• <strong>48MP camera failure</strong></li>
            <li>• <strong>Face ID intermittent</strong></li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the 15</h2>
          <div className="overflow-x-auto border border-white/10 rounded-md bg-white/[0.04] mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-white/[0.04]"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price (AED)</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">OLED screen replacement (Dynamic Island)</td><td className="px-md py-sm">750</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">350</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C port replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-usb-c-port-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">48 MP main + ultra-wide camera</td><td className="px-md py-sm">600</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">From 600</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-white/[0.02]"><td className="px-md py-sm">Colour-infused back glass + MagSafe</td><td className="px-md py-sm">600</td><td className="px-md py-sm">1-2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Water damage</td><td className="px-md py-sm">From 450</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-water-damage-repair-dubai" className="text-accent-bright font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-on-primary-muted leading-relaxed mb-lg">
            6.1-inch OLED with Dynamic Island cutout in stock. Genuine Apple-pull AED 1,150. USB-C port is a Tristar-2 design, in stock. Colour-infused back glass available in all five 15-series colours (pink, yellow, green, blue, black).
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 15 still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Strong yes.</strong> Only ~2.5 years old, A16, used resale ~AED 2,300-2,800. iOS 21 expected. Discontinued at the Apple Store but parts and software support remain solid.
          </p>
        </>
      }
      whatWeFix={[
        "USB-C port wear / no charging",
        "Cracked OLED with Dynamic Island",
        "Battery degraded below 80%",
        "Cracked colour-infused back glass + MagSafe coil",
        "48MP main camera failure",
        "Face ID intermittent / failed",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Free pickup",          body: "Across Dubai mainland." },
        { title: "Diagnose + repair",    body: "Standard same day; Face ID + back glass 1-2 days." },
        { title: "QC + return",          body: "OLED, Dynamic Island, USB-C charge + data, MagSafe and Face ID tested, signed warranty, free delivery." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90 days on parts and labour.",
        "Screen: dead pixels, ghost touch, Dynamic Island animations covered.",
        "USB-C: charge + data tested at full USB 2.0 speed before return.",
        "Battery: capacity-drop coverage.",
      ]}
      faqs={[
        { q: "Why does the iPhone 15 USB-C port fail so often?", a: "It's the first-generation Apple USB-C connector - the inner pins are more delicate than Lightning. Lint and debris build up faster, and forced cable insertion bends the centre tongue. Replacement: AED 400, same day." },
        { q: "Bundle pricing?", a: "Screen + battery: AED 1,070 (saves AED 30). Battery + USB-C port: AED 720 (saves AED 30)." },
        { q: "Genuine Apple OLED?", a: "Yes - AED 1,150 vs AED 750 OEM-grade." },
        { q: "Is the iPhone 15 still supported by Apple?", a: "Yes for software (iOS 18, iOS 19+ likely). Hardware service through Apple is still available, but the model is no longer sold new." },
        { q: "Same day?", a: "OLED, battery, USB-C, camera - yes." },
      ]}
      reviewNames={["Saeed Alam", "Seyed Moulana"]}
      related={[
        { label: "iPhone USB-C Port Repair Dubai",  href: "/iphone-usb-c-port-repair-dubai",  description: "First-gen Apple USB-C - AED 400." },
        { label: "iPhone Screen Repair Dubai",      href: "/iphone-screen-repair-dubai",      description: "OLED with Dynamic Island AED 750." },
        { label: "iPhone Battery Replacement",      href: "/iphone-battery-replacement-dubai",description: "AED 350, 45 minutes." },
      ]}
    />
  );
}
