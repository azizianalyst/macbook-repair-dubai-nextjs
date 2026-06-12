"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function MacActivationLockUnlock() {
  return (
    <SubServicePageTemplate
      seoTitle="Mac Activation Lock & Firmware Unlock Dubai - Honest Owner Help"
      seoDescription="Mac & MacBook Activation Lock, iCloud lock and EFI firmware password help in Dubai. Legitimate owners only - we assist through Apple's channels, never a bypass. From AED 250."
      path="/mac-activation-lock-unlock-dubai"
      eyebrow="Mac Activation Lock & firmware unlock"
      h1="Mac Activation Lock & Firmware Unlock Dubai"
      subtitle="Locked out of your own Mac? Activation Lock, a forgotten Apple ID, or an EFI firmware password on an older Intel Mac. We help legitimate owners recover access through Apple - we do not bypass, and we'll prove that to you. From AED 250."
      startingPrice={250}
      timeline="3 days - 4 weeks (Apple-side)"
      whatsappPrefill="Mac unlock help - model, serial, and what happened (forgotten Apple ID / inherited / second-hand / firmware password): "
      breadcrumb={[
        { name: "Home",       path: "/" },
        { name: "Mac Repair", path: "/mac-repair-dubai" },
        { name: "Activation Lock & Firmware Unlock", path: "/mac-activation-lock-unlock-dubai" },
      ]}
      technician={{ name: "Usman", years: 12, specialisation: "Apple liaison & ownership recovery" }}
      serviceName="Mac Activation Lock & Firmware Unlock Help"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            If it's genuinely your Mac, we can help you get back into it. <strong>We only help real owners</strong>, and we'll ask you to prove it - that's the line we don't cross, and it's the line that protects you when you buy second-hand too. There are two different locks people in Dubai bring us. The first is <strong>Activation Lock</strong> (iCloud lock) on Apple Silicon and T2 Macs, tied to your Apple ID and enforced by Apple's servers. The second is an <strong>EFI firmware password</strong> on older Intel Macs, set in Recovery and asked for at a padlock screen on boot. Neither can be legitimately bypassed on modern hardware. What we do instead is prepare your ownership documents and work with Apple's official channels to recover access. Help starts at <strong>AED 250</strong>, and if Apple refuses despite valid proof, you get the service fee back.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            Be wary of anyone advertising an instant iCloud or firmware "bypass" for a modern Mac - it's either a scam or a temporary trick that re-locks on the next reboot or macOS update. Apple closes those holes as fast as they appear. We've run honest Apple liaison work at Concord Tower, Dubai Media City since 2004, and we'd rather lose the job than take your money for something that won't last. If you found a Mac or it's reported lost or stolen, we won't touch it - take it to Dubai Police or an Apple Store so the rightful owner can be found.
          </p>
        </>
      }
      whatWeFix={[
        "Activation Lock screen on an erased Apple Silicon or T2 Mac that's yours",
        "Forgotten Apple ID password on your own Mac",
        "Inherited Mac - Apple Estate / Digital Legacy with the right documents",
        "Second-hand Mac the seller forgot to remove from Find My",
        "EFI firmware password on an older Intel Mac, with proof of purchase",
        "'Your account could not be verified' at activation",
        "Mac asks for a padlock-icon password on startup",
        "Free pre-purchase lock check before you buy a used Mac",
      ]}
      steps={[
        { title: "WhatsApp the situation honestly", body: "Tell us what happened - forgotten password, inherited, bought used, or a firmware padlock. We'll tell you straight whether a legitimate path exists. Free advice, no pressure." },
        { title: "Free eligibility & ownership check", body: "We confirm the lock type and what proof Apple will need. If there's no legitimate route, we take no payment and explain why." },
        { title: "Document preparation", body: "We help gather the right proof: original Apple or Sharaf DG / Virgin Megastore receipt, ID copies, bill of sale for second-hand buys, or death certificate and court order for inherited Macs." },
        { title: "Apple liaison submission", body: "Documents go through Apple's proper channel - Apple ID recovery, the Activation Lock support request, or Apple's firmware-password removal process for eligible Intel Macs." },
        { title: "Apple-side processing & activation", body: "Apple controls the timeline. When they approve, we activate the Mac on the bench, sign you into a fresh Apple ID, and confirm Find My is off." },
      ]}
      warrantyDays={0}
      warrantyBullets={[
        "Service fee refunded if Apple refuses the unlock despite legitimate, complete documentation.",
        "No-fix-no-charge on eligibility checks where a path turns out not to exist.",
        "Not covered: Apple's own decision, third-party bypass attempts, or devices reported lost or stolen.",
      ]}
      faqs={[
        { q: "Can you unlock my Mac if I've forgotten the Apple ID it's locked to?", a: "If it's your Mac, yes - we help you recover the Apple ID through Apple's account recovery, then the Activation Lock clears itself. Bring any proof of ownership you have. We can't and won't bypass the lock on someone else's device; Apple enforces it at the server level precisely so stolen Macs stay useless. Honest help only." },
        { q: "I bought a second-hand MacBook and it's still locked to the seller - what now?", a: "First, message the seller and ask them to remove it from Find My - on their other Apple device or at icloud.com/find, they can take it off the account in seconds. That's the cleanest fix. If they're unreachable, we submit your bill of sale, ID and any chat history to Apple as an ownership request. AED 450. Apple decides, and we're upfront that there's no guarantee." },
        { q: "What's the difference between Activation Lock and an EFI firmware password?", a: "Activation Lock is the iCloud lock on Apple Silicon and T2 Macs, tied to an Apple ID. An EFI firmware password is an older Intel-Mac feature set in Recovery - you'll see a padlock and password field on boot. Different systems, both unbypassable on modern Macs. For eligible older Intel Macs, Apple has a firmware-password removal process that needs proof of purchase, and we handle that submission for you." },
        { q: "Do those Mac iCloud bypass tools advertised online work?", a: "No - not on Apple Silicon or T2 Macs. They're either outright scams or a temporary trick that re-locks the moment the Mac reboots or updates, and they break iCloud and iMessage in the process. Apple patches these constantly. We refuse bypass jobs because they don't hold, and we won't take payment for something that fails next week." },
        { q: "How much does Mac unlock help cost in Dubai?", a: "From AED 250 for forgotten Apple ID recovery help, AED 350 for inherited Macs via Apple Estate, and AED 450 for second-hand ownership disputes that need an Apple liaison request. VAT-inclusive. You pay for the service time and Apple liaison, not for a guaranteed unlock - and if Apple refuses valid documentation, the fee comes back." },
        { q: "I inherited a Mac from a family member - can you help?", a: "Yes, through Apple's Estate / Digital Legacy process. Apple needs a death certificate, a court order naming you as executor, and the Mac itself. They review inheritance cases individually, usually over 2 to 4 weeks. We prepare and submit the documentation and chase Apple on your behalf. AED 350 for the liaison work." },
        { q: "Will Apple definitely unlock it if I have the original receipt?", a: "For genuine cases, almost always - Apple's policy favours owners with proof of purchase. They refuse where the receipt doesn't match the serial, where a device shows as lost or stolen, or where there's a sign of fraud. We screen for those before taking any payment, so you're not paying into a case that can't succeed." },
        { q: "How long does the whole process take?", a: "Apple controls the clock. Apple ID password reset via a trusted device or email can be same-day. Account recovery runs 3 to 14 days. Ownership disputes and Apple Estate take 1 to 4 weeks. Throughout, we track the case and chase Apple for you, and we keep you updated on WhatsApp." },
        { q: "What if the Mac turns out to be reported lost or stolen?", a: "Then we stop and we won't help unlock it - no exceptions. If you bought it in good faith, that's a matter for the seller and, if needed, Dubai Police. Returning a lost Mac to its owner via Find My is the right thing to do, and refusing stolen-device work is exactly what keeps our service honest." },
      ]}
      reviewNames={["Wellington Academy", "Saeed Alam", "Tim Quick"]}
      related={[
        { label: "Mac Data Recovery",   href: "/mac-data-recovery-dubai", description: "Get your files off a locked or dead Mac." },
        { label: "Sell Your MacBook",   href: "/sell-macbook-dubai",      description: "Selling up? We buy, lock removed first." },
        { label: "Mac Repair Hub",      href: "/mac-repair-dubai",        description: "Every Mac service in one place." },
      ]}
    />
  );
}
