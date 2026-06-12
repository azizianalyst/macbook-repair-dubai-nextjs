"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadCameraRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad Camera Repair Dubai - AED 400 | Center Stage Calibration"
      seoDescription="iPad rear and front camera repair Dubai. TrueDepth on Pro, landscape camera on Air M3+. Center Stage recalibrated. AED 400, 1-2 days. Call 055 741 3706."
      path="/ipad-camera-repair-dubai"
      eyebrow="iPad camera repair"
      h1="iPad Camera Repair Dubai"
      subtitle="Cracked rear lens, blurry FaceTime, dead Center Stage tracking, or a misaligned landscape camera on iPad Air M3+. We replace the module and recalibrate. AED 400, 1-2 days."
      startingPrice={400}
      timeline="1-2 days"
      whatsappPrefill="Hi, my iPad camera needs repair - model and which camera:"
      breadcrumb={[
        { name: "Home",         path: "/" },
        { name: "iPad Repair",  path: "/ipad-repair-dubai" },
        { name: "Camera Repair",path: "/ipad-camera-repair-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "iPad camera and TrueDepth modules" }}
      serviceName="iPad Camera Repair"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>iPad cameras come in three flavours</strong>: standard rear (every iPad), TrueDepth front (iPad Pro for Face ID), and the new landscape-orientation front camera (iPad Air M3 and later, all iPad Pro M4+). Each needs a different repair approach. We diagnose which camera is faulty and quote AED 400 for any single-module replacement, including Center Stage recalibration so video calls track you properly afterwards.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            About 30% of "broken" iPad rear cameras in Dubai are just a cracked outer lens (cheap fix) rather than a damaged sensor. We separate the lens from the sensor module and replace only what's broken - that saves you money and we tell you which one it is before charging.
          </p>
        </>
      }
      whatWeFix={[
        "Cracked rear camera lens (often lens-only fix)",
        "Blurry or out-of-focus rear photos",
        "Front camera dead or grey on FaceTime",
        "Center Stage no longer tracking the subject",
        "Landscape camera (iPad Air M3+, Pro M4+) misaligned",
        "TrueDepth Face ID camera failure on iPad Pro",
        "Lens dust or condensation inside the module",
        "After-drop misalignment causing soft focus",
      ]}
      steps={[
        { title: "Camera diagnostic",          body: "We open the Camera app, run all camera modes, photograph a focus chart, check Center Stage tracking. Free." },
        { title: "Lens vs module decision",    body: "Microscope inspection: if only the outer glass is cracked we replace the lens (AED 250). If the sensor itself failed, full module (AED 400)." },
        { title: "Module replacement",         body: "OEM-grade camera module installed. On iPad Pro / Air with TrueDepth, we preserve the dot projector pairing where possible." },
        { title: "Center Stage recalibration", body: "Run iPadOS camera calibration sequence so Center Stage tracks correctly. 12-month warranty card with the iPad." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the new camera module and lens.",
        "Center Stage tracking guaranteed to work.",
        "Excludes new impact damage after the repair.",
      ]}
      faqs={[
        { q: "Will Face ID still work on my iPad Pro after a camera repair?", a: "Yes if the rear camera is replaced. If the front TrueDepth assembly is replaced, Face ID often cannot be re-paired (same Apple Secure Enclave limit as iPhone) - we tell you before opening the iPad and offer passcode-only as the alternative." },
        { q: "What is Center Stage and why does it need calibration?", a: "Center Stage uses iPadOS computer vision to keep the subject framed during FaceTime. After a front-camera swap, the calibration must be re-run so the tracking algorithm knows the new sensor's exact mounting angle. We do this as part of every front-camera repair." },
        { q: "iPad Air M3 has a landscape camera now - does that change repair?", a: "Yes. The new landscape orientation moves the front camera to the long edge for natural Magic Keyboard video calls. The repair process is similar, but the part is different - and we stock both portrait and landscape modules." },
        { q: "Why two days instead of same day?", a: "Adhesive cure time on the lens, plus Center Stage calibration runs best after a full iPad reboot cycle. Rushing to same-day risks lens edge lift in the Dubai heat." },
        { q: "Can you fix lens scratches without replacing?", a: "No - lens scratches diffuse light and ruin photos permanently. Replacing the outer lens (AED 250) is the only honest fix." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPad Screen Repair Dubai",     href: "/ipad-screen-repair-dubai",     description: "Pencil-safe screen swaps from AED 350." },
        { label: "iPad Pencil Compatibility",    href: "/ipad-pencil-compatibility-dubai", description: "Why our screens preserve Pencil." },
        { label: "iPad Full Diagnostic",         href: "/ipad-full-diagnostic-dubai",   description: "Free 25-point check." },
      ]}
      blogLink={{ label: "iPad cameras explained: TrueDepth, Center Stage, landscape", href: "/blog" }}
    />
  );
}
