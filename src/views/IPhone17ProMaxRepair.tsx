"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";
import { Link } from "@/lib/router-compat";
import { TEAM } from "@/content/site";

// Technician byline comes from the TEAM roster (TRUST-CLAIMS.md), never typed per page.
// Model facts: docs/apple-lineup-2026-09-26.md (17 Pro / Pro Max discontinued 9 Sep 2026).
const TECH = TEAM.find((t) => t.name === "Shafiq")!;

export default function IPhone17ProMaxRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPhone 17 Pro Max Repair Dubai: Screen, Battery, Camera"
      seoDescription="iPhone 17 Pro Max repair in Dubai: screen, battery, USB-C port, cameras and Face ID. Discontinued in Sept 2026 but fully repairable. Free diagnosis."
      path="/iphone-17-pro-max-repair-dubai"
      eyebrow="iPhone 17 Pro Max (Sept 2025, succeeded by iPhone 18 Pro Max in Sept 2026)"
      h1="iPhone 17 Pro Max Repair Dubai: Screen, Battery, Cameras and USB-C Port"
      subtitle="Apple's 6.9-inch flagship from September 2025 until the iPhone 18 Pro Max replaced it in September 2026: A19 Pro, aluminium unibody, vapor chamber, 4x telephoto, up to 2TB. Message us on WhatsApp for a quote."
      startingPrice={450}
      timeline="Same day"
      whatsappPrefill="Hi, I have an iPhone 17 Pro Max (Sept 2025) and need help with:"
      breadcrumb={[
        { name: "Home",              path: "/" },
        { name: "iPhone Repair",     path: "/iphone-repair-dubai" },
        { name: "iPhone 17 Pro Max", path: "/iphone-17-pro-max-repair-dubai" },
      ]}
      technician={{ name: TECH.name, years: TECH.years, specialisation: TECH.specialisation }}
      serviceName="iPhone 17 Pro Max Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Apple discontinued the iPhone 17 Pro Max on 9 September 2026, and it is still fully repairable.</strong> The 17 Pro Max (Sept 2025) was Apple's flagship until the iPhone 18 Pro Max arrived in September 2026 - A19 Pro, 6.9-inch ProMotion OLED with AOD + Dynamic Island + Ceramic Shield 2, aluminum unibody, vapor chamber cooling, USB-C (USB 3), Action Button + Camera Control, 48MP triple Fusion cameras with a 4× optical telephoto that reaches 8× optical-quality zoom, 18MP Center Stage front, up to 2TB storage. Message us on WhatsApp for a written screen or battery quote on your model.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md mt-lg">About the iPhone 17 Pro Max</h2>
          <ul className="space-y-1 text-[15px] mb-lg">
            <li>• <strong>Released:</strong> September 2025 · discontinued by Apple on 9 September 2026, when the iPhone 18 Pro Max replaced it</li>
            <li>• <strong>Chip:</strong> Apple A19 Pro · N1 wireless · 12 GB RAM</li>
            <li>• <strong>Display:</strong> 6.9-inch ProMotion LTPO OLED, AOD, Dynamic Island, Ceramic Shield 2</li>
            <li>• <strong>Camera:</strong> 48 MP main + 48 MP telephoto (4× optical, 8× optical-quality) + 48 MP ultra-wide (triple Fusion) + LiDAR · 18 MP Center Stage front</li>
            <li>• <strong>Connector:</strong> USB-C with USB 3 speeds (up to 10 Gbps; not Thunderbolt) · MagSafe + Qi · Wi-Fi 7 · 5G sub-6 · IP68</li>
            <li>• <strong>Frame:</strong> Aluminium unibody · vapor chamber cooling · Action Button · Camera Control</li>
            <li>• <strong>Storage:</strong> Up to 2 TB</li>
            <li>• <strong>iOS:</strong> shipped with iOS 26 · runs iOS 27</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Common problems we see on the 17 Pro Max</h2>
          <ul className="space-y-2 text-[15px] mb-lg">
            <li>• <strong>Cracked 6.9-inch OLED</strong> - largest panel = most vulnerable</li>
            <li>• <strong>Aluminum unibody dents/scratches</strong></li>
            <li>• <strong>4x telephoto camera failure</strong></li>
            <li>• <strong>Vapor chamber thermal degradation</strong> (heavy 4K ProRes capture)</li>
            <li>• <strong>Camera Control button</strong> issues</li>
            <li>• <strong>USB-C port wear</strong></li>
            <li>• <strong>Battery service</strong> (heavy ProRes / AI workload users)</li>
            <li>• <strong>2TB storage data recovery</strong> (specialised - large data sets)</li>
          </ul>
          <h2 className="text-[24px] md:text-[28px] mb-md">Services available for the 17 Pro Max</h2>
          <div className="overflow-x-auto border border-border rounded-md bg-bg-card mb-lg">
            <table className="w-full text-[14px] min-w-[560px]">
              <thead className="bg-bg-card"><tr className="text-left"><th className="px-md py-sm font-semibold">Service</th><th className="px-md py-sm font-semibold">Price</th><th className="px-md py-sm font-semibold">Timeline</th><th className="px-md py-sm font-semibold">Book</th></tr></thead>
              <tbody>
                <tr><td className="px-md py-sm">6.9-inch ProMotion OLED + Ceramic Shield 2</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-screen-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Battery replacement</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">45 min</td><td className="px-md py-sm"><Link to="/iphone-battery-replacement-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">USB-C port (USB 3) replacement</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-usb-c-port-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">4x telephoto module (8x optical-quality zoom)</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Triple Fusion camera + LiDAR module</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">Same day</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">18 MP Center Stage front camera</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">1-2 days</td><td className="px-md py-sm"><Link to="/iphone-camera-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Camera Control button</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">2-3 days</td><td className="px-md py-sm"><Link to="/iphone-power-button-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">Aluminum frame dent/scratch (cosmetic)</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">2 days</td><td className="px-md py-sm"><Link to="/iphone-back-glass-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Vapor chamber service (thermal repaste)</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">2 days</td><td className="px-md py-sm"><Link to="/iphone-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr className="bg-bg-alt"><td className="px-md py-sm">2 TB data recovery (high-density NAND)</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">3-7 days</td><td className="px-md py-sm"><Link to="/iphone-data-recovery-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
                <tr><td className="px-md py-sm">Face ID repair</td><td className="px-md py-sm">Price on request</td><td className="px-md py-sm">1-3 days</td><td className="px-md py-sm"><Link to="/iphone-face-id-repair-dubai" className="text-accent font-semibold hover:underline">Book →</Link></td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-[24px] md:text-[28px] mb-md">Are parts still available in 2026?</h2>
          <p className="text-[15px] text-text-muted leading-relaxed mb-lg">
            Discontinued does not mean parts have gone: Apple still publishes UAE out-of-warranty service estimates for the 17 Pro Max. Availability of each part changes from week to week, so we confirm part availability on WhatsApp before you book, and the quote says whether the part is genuine Apple or quality-tested.
          </p>
          <h2 className="text-[24px] md:text-[28px] mb-md">Is the 17 Pro Max still worth repairing in 2026?</h2>
          <p className="text-[15px] leading-relaxed mb-lg">
            <strong>Usually, yes.</strong> It was Apple's top iPhone until September 2026 and runs the current iOS 27, and used resale value stays high (especially on larger-storage configs), so a single screen or battery repair is almost always worthwhile. Message us on WhatsApp for the exact repair price on your model.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked 6.9-inch ProMotion OLED + Ceramic Shield 2",
        "Aluminum unibody dents / scratches",
        "4x telephoto camera failure",
        "Vapor chamber thermal degradation",
        "Camera Control button issues",
        "USB-C (USB 3) port wear",
        "18MP Center Stage front camera failure",
        "2TB data recovery (high-density NAND)",
      ]}
      steps={[
        { title: "WhatsApp the fault",   body: "Photo or short clip. Quote in 4 minutes." },
        { title: "Walk in",              body: "Concord Tower, Dubai Media City. No appointment." },
        { title: "Diagnose + repair",    body: "Screen and battery usually same day once the part is confirmed; telephoto, vapor chamber and aluminum cosmetic 2-3 days." },
        { title: "QC + handover",        body: "ProMotion, AOD, USB-C, every zoom step, vapor chamber thermals (stress test), Camera Control and Face ID tested, signed warranty, ready to collect." },
      ]}
      warrantyDays={730}
      warrantyHeadline
      warrantyBullets={[
        "Warranty depends on the repair: up to 2 years on hardware, 90 days on screens, 3 months on batteries with an 80% capacity guarantee.",
        "Screen (90 days): dead pixels, ghost touch, 120Hz refresh and Always-On faults covered.",
        "Vapor chamber service: thermals checked under a sustained workload before handover.",
        "Not covered: new drops, cracks or liquid exposure after the repair.",
      ]}
      faqs={[
        { q: "My 17 Pro Max throttles when I shoot 4K ProRes - is that the vapor chamber?", a: "Often yes - sustained 4K ProRes capture is one of the most thermally demanding things the phone does. If your phone hits the thermal warning within 5 minutes of recording, the vapor chamber may need service. Diagnostic is free." },
        { q: "Why is data recovery on 2TB more expensive?", a: "2TB NAND uses higher-density flash arrays - recovery work takes longer because more cells need to be processed, so it costs more than a standard 256/512GB recovery. Message us on WhatsApp with your storage size for an exact price." },
        { q: "Bundle pricing?", a: "Yes - we discount common combinations like screen + battery and Camera Control + USB-C. Message us on WhatsApp with the repairs you need for a bundled price." },
        { q: "Genuine Apple OLED?", a: "Where a genuine Apple display is available for your phone, we quote it alongside a quality-tested alternative, and the quote says which part you are getting. Message us on WhatsApp for both options on your model." },
        { q: "Same day?", a: "Screen, battery, USB-C port, Action Button and main camera jobs are usually same day once the part is confirmed. Telephoto, Center Stage front camera, vapor chamber and aluminum cosmetic work take 2-3 days. We confirm part availability and timing on WhatsApp before you come in." },
      ]}
      reviewNames={["Seyed Moulana", "B Parker"]}
      related={[
        { label: "iPhone Camera Repair Dubai",      href: "/iphone-camera-repair-dubai",      description: "4x telephoto and triple Fusion cameras." },
        { label: "iPhone Screen Repair Dubai",      href: "/iphone-screen-repair-dubai",      description: "6.9-inch ProMotion OLED replacement." },
        { label: "iPhone Data Recovery Dubai",      href: "/iphone-data-recovery-dubai",      description: "Up to 2 TB high-density NAND." },
      ]}
    />
  );
}
