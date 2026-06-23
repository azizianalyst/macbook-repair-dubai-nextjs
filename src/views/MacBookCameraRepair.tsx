"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacBookCameraRepair() {
  return (
    <SubServicePageTemplate
      seoTitle="MacBook Camera Repair Dubai - FaceTime / Webcam Fix AED 200"
      seoDescription="MacBook FaceTime / webcam repair Dubai. Black screen on calls, 'no camera available', blurry video. From AED 200, 1-2 days, warranty of up to 12 months. Call 055 741 3706."
      path="/macbook-camera-repair-dubai"
      eyebrow="MacBook camera repair"
      h1="MacBook FaceTime / Webcam Repair Dubai"
      subtitle="Black screen on calls, 'no camera available', or blurry FaceTime video? We diagnose and repair MacBook webcams - from AED 200, most done in 1-2 days."
      startingPrice={200}
      timeline="1-2 days"
      whatsappPrefill="Hi, my MacBook camera has a problem - model and symptom:"
      breadcrumb={[
        { name: "Home",           path: "/" },
        { name: "MacBook Repair", path: "/" },
        { name: "Camera Repair",  path: "/macbook-camera-repair-dubai" },
      ]}
      technician={{ name: "Usman", years: 14, specialisation: "MacBook display & camera repair" }}
      serviceName="MacBook Camera Repair Dubai"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>MacBook camera repair in Dubai</strong> covers a black or green screen on FaceTime, Zoom and Teams, the "there is no connected camera" error, blurry video, and cameras that fail after a spill or a knock to the screen. The FaceTime HD camera sits in the display and connects through the hinge to the logic board - so the cause can be software, a damaged flex cable, a faulty module, or a board-level fault. We isolate the real cause first, so you don't pay to replace the whole screen when you don't need to. AED 200 covers parts, labour and a warranty of up to 12 months.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We service MacBook Air M1-M5, MacBook Pro 13/14/16 (Intel and M-series), and older Retina models still in daily use across Dubai.
          </p>
        </>
      }
      whatWeFix={[
        "Black or green screen on FaceTime, Zoom or Teams",
        "\"There is no connected camera\" error in macOS",
        "Blurry, grainy, or washed-out video",
        "Camera works in one app but not another",
        "Green camera light on but no image",
        "Camera dropped after a liquid spill or screen knock",
      ]}
      steps={[
        { title: "Free diagnosis", body: "We rule out macOS, SMC and app permissions first, then test the module, flex cable and board power rails." },
        { title: "Written quote", body: "Software fix, module swap, or board-level repair - the price is agreed up front." },
        { title: "Repair", body: "Camera module or flex cable replaced, or board-level repair, with the display resealed properly." },
        { title: "Quality test", body: "We verify a clear image across FaceTime and third-party apps before pickup." },
      ]}
      warrantyDays={365}
      warrantyBullets={[
        "Covers the camera module / flex cable and fitment.",
        "Excludes new liquid or impact damage after delivery.",
        "Free re-check if the fault returns inside 12 months.",
      ]}
      faqs={[
        { q: "How much does MacBook camera repair cost in Dubai?", a: "If it's a software or permissions issue we often fix it during the free diagnosis at no charge. Camera module or flex-cable replacement starts at AED 200; board-level camera repairs start at AED 450. You get an exact quote first." },
        { q: "Do you have to replace the whole screen to fix the camera?", a: "Usually no. The camera and its flex cable can often be serviced without replacing the entire display assembly, which keeps the cost far lower. We only recommend a full screen if the panel itself is also damaged." },
        { q: "My camera says \"not available\" - is it broken?", a: "Not necessarily. That error is often caused by macOS, an SMC glitch, or app permissions. Our free diagnosis tells you whether it's software (frequently a free fix) or a hardware fault before you pay anything." },
        { q: "How long does it take?", a: "Software fixes are same day. Module or flex-cable replacements typically take 1-2 days depending on parts." },
        { q: "Is the green dot on but no picture a hardware fault?", a: "If macOS shows the camera-in-use indicator but you get no image, it's usually a failed module or flex cable rather than software. We confirm with a bench test during the free diagnosis." },
      ]}
      reviewNames={["David Boulos", "Anatoliy Tarasenko", "vinay menon"]}
      related={[
        { label: "MacBook Screen Repair",        href: "/macbook-screen-repair-dubai",  description: "Panel + camera in one display fix." },
        { label: "MacBook Logic Board Repair",   href: "/macbook-logic-board-repair-dubai", description: "Board-level camera power faults." },
        { label: "macOS Reinstall & Software",   href: "/macos-reinstall-dubai",        description: "Software-side camera fixes." },
      ]}
    />
  );
}
