"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";

export default function IPhone17Repair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 17 Repair Dubai - A19, 120Hz ProMotion from AED 400 | 055 741 3706"
      seoDescription="iPhone 17 (Sept 2025) repair Dubai. A19, 6.3-inch ProMotion (first non-Pro), Always-On, Ceramic Shield 2, Wi-Fi 7. Screen AED 900. Same-day."
      path="/iphone-17-repair-dubai"
      eyebrow="iPhone 17 (Sept 2025, current Apple lineup)"
      h1="iPhone 17 Repair Dubai - ProMotion, Always-On, Ceramic Shield 2"
      subtitle="The current 6.3-inch flagship - A19, 120Hz ProMotion (first non-Pro), AOD, Ceramic Shield 2, N1 chip with Wi-Fi 7. From AED 400."
      startingPrice={400}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone 17 (Sept 2025) and need help with:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPhone Repair", path: "/iphone-repair-dubai" },
        { name: "iPhone 17",     path: "/iphone-17-repair-dubai" },
      ]}
      technician={{ name: "Shafeez", years: 12, specialisation: "iPhone board-level repair" }}
      serviceName="iPhone 17 Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPhone 17 owners - we understand. Let's fix it.</strong> The iPhone 17 (Sept 2025) is a major non-Pro upgrade - A19 chip, 6.3-inch OLED with 120Hz ProMotion (first ever for the standard iPhone), Always-On Display, Ceramic Shield 2 cover glass (Apple claims 3× scratch-resistant), N1 wireless chip with Wi-Fi 7, dual rear camera, 256GB base storage, USB-C 2.0, MagSafe, IP68. Apple released this 7 months ago. As of April 2026 we've serviced 70+ in our workshop - OLED and battery parts are good; Camera Control + Apple Intelligence-related issues we now fix routinely. AED 900 screen, AED 400 battery.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone 17</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> September 2025 · still current</li>
            <li>• <strong>Chip:</strong> Apple A19 · N1 wireless · 8 GB RAM</li>
            <li>• <strong>Display:</strong> 6.3-inch ProMotion LTPO OLED, AOD, Dynamic Island, Ceramic Shield 2</li>
            <li>• <strong>Camera:</strong> 48 MP main + 12 MP ultra-wide</li>
            <li>• <strong>Connector:</strong> USB-C 2.0 · MagSafe + Qi · Wi-Fi 7 · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Aluminium · Action Button · Camera Control · Apple Intelligence</li>
            <li>• <strong>iOS support:</strong> iOS 19 native · iOS 20-25 likely</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the 17</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked OLED</strong> - yes, even Ceramic Shield 2 cracks under hard impacts</li>
            <li>• <strong>Camera Control button</strong> issues (now second-gen but still failure cluster)</li>
            <li>• <strong>USB-C port wear</strong></li>
            <li>• <strong>Wi-Fi 7 / N1 chip connectivity</strong> on certain access points</li>
            <li>• <strong>Apple Intelligence heat</strong></li>
            <li>• <strong>Battery service</strong> (early units showing wear after heavy use)</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the 17</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price (AED)</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">ProMotion OLED + Ceramic Shield 2 replacement</td><td className="px-md py-sm">900</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C port replacement</td><td className="px-md py-sm">400</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-usb-c-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Camera Control button repair</td><td className="px-md py-sm">350</td><td className="px-md py-sm">2-3 days (parts)</td><td className="px-md py-sm"><Link to="/iphone-power-button-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Action Button repair</td><td className="px-md py-sm">300</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-power-button-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">48 MP main + ultra-wide camera</td><td className="px-md py-sm">700</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">700</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Back glass + MagSafe coil</td><td className="px-md py-sm">700</td><td className="px-md py-sm">1-2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Parts availability in 2026</h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
            ProMotion OLED with Ceramic Shield 2 in stock for same-day repair. Genuine Apple-pull AED 1,400. Camera Control button assemblies arrive on 48-hour replenishment from our authorised supplier. Wi-Fi 7 / N1 antenna assemblies available.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 17 still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Absolutely - it is the current iPhone.</strong> Used resale ~AED 3,200-3,800. iOS 25 expected. Any single repair under AED 2,500 is well worthwhile.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked ProMotion OLED with Ceramic Shield 2",
        "Camera Control button stuck / unresponsive",
        "Wi-Fi 7 / N1 chip connectivity",
        "USB-C port wear",
        "Apple Intelligence heat throttling",
        "Cracked back glass + MagSafe coil",
        "Battery service (heavy-use units)",
        "Face ID intermittent",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Free pickup",          body: "Across Dubai mainland." },
        { title: "Diagnose + repair",    body: "Standard same day; Camera Control 2-3 days for parts." },
        { title: "QC + return",          body: "ProMotion, AOD, Wi-Fi 7, Camera Control gestures, USB-C and Face ID tested, signed warranty, free delivery." },
      ]}
      warrantyDays={90}
      warrantyBullets={[
        "90 days on parts and labour.",
        "Screen: dead pixels, ghost touch, 120Hz refresh, AOD covered.",
        "Wi-Fi 7: confirmed connectivity at 6 GHz tested before return.",
        "Battery: capacity-drop coverage.",
      ]}
      faqs={[
        { q: "Apple says Ceramic Shield 2 is 3× tougher - why did mine still crack?", a: "Ceramic Shield 2 is more scratch-resistant and improves drop survival, but no glass is unbreakable. Hard impacts on corners and edges still crack the cover layer. The OLED beneath is a separate layer that may or may not also fail - we test both before quoting." },
        { q: "Why is Camera Control still a 2-3 day repair?", a: "The button uses an upgraded force-touch + capacitive flex assembly. Apple's authorised parts pipeline currently runs on 48-hour replenishment to the UAE. We schedule the repair for whenever parts land - typically 2 days." },
        { q: "Bundle pricing?", a: "Screen + battery: AED 1,270 (saves AED 30). Camera Control + Action Button: AED 620 (saves AED 30)." },
        { q: "Genuine Apple OLED?", a: "Yes - AED 1,400 vs AED 900 OEM-grade. We are factory-trained on the new ProMotion + AOD calibration." },
        { q: "Does Wi-Fi 7 actually work in Dubai?", a: "Yes on 6 GHz-capable routers (du Home Wireless 7, Etisalat Wi-Fi 7 plans, Ubiquiti UniFi 7). The N1 chip auto-falls-back to Wi-Fi 6E / 5 / Wi-Fi 4 elsewhere." },
      ]}
      reviewNames={["Seyed Moulana", "B Parker"]}
      related={[
        { label: "iPhone Screen Repair Dubai",      href: "/iphone-screen-repair-dubai",      description: "ProMotion + Ceramic Shield 2 AED 900." },
        { label: "iPhone Battery Replacement",      href: "/iphone-battery-replacement-dubai",description: "AED 400, 45 minutes." },
        { label: "iPhone USB-C Port Repair Dubai",  href: "/iphone-usb-c-port-repair-dubai",  description: "USB-C 2.0 - AED 400." },
      ]}
    />
  );
}
