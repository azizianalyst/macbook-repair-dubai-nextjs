"use client";
import SubServicePageTemplate from "@/components/blocks/SubServicePageTemplate";

export default function IPadIcloudUnlock() {
  return (
    <SubServicePageTemplate
      seoTitle="iPad iCloud Unlock Dubai - Honest Consultation | 055 741 3706"
      seoDescription="iPad iCloud / Activation Lock - honest advice. We don't bypass Apple's security. Legitimate unlock paths only with original Apple ID and proof of ownership."
      path="/ipad-icloud-unlock-dubai"
      eyebrow="iPad iCloud unlock"
      h1="iPad iCloud Unlock Dubai"
      subtitle='If you bought an iPad locked to someone else\u2019s Apple ID, here\u2019s the truth: nobody in Dubai can bypass Apple\u2019s Activation Lock. We help with the legitimate paths only.'
      startingPrice={0}
      timeline="Varies"
      whatsappPrefill="Hi, I have a locked iPad - model and how I obtained it:"
      breadcrumb={[
        { name: "Home",          path: "/" },
        { name: "iPad Repair",   path: "/ipad-repair-dubai" },
        { name: "iCloud Unlock", path: "/ipad-icloud-unlock-dubai" },
      ]}
      technician={{ name: "Mohammed", years: 14, specialisation: "Apple ID and Activation Lock consultation" }}
      serviceName="iPad iCloud Unlock Consultation"
      intro={
        <>
          <p className="text-[18px] leading-relaxed mb-md">
            <strong>Read this before paying anyone in Dubai for iCloud unlock.</strong> Apple's Activation Lock is hardware-tied at the chip level. It cannot be removed by software, jailbreak, IMEI service, or any "unlock specialist" - full stop. Anyone who tells you otherwise is selling you either a brick (your money plus a still-locked iPad) or a stolen-recovery service that puts you legally exposed in the UAE.
          </p>
          <p className="text-[16px] text-text-muted leading-relaxed">
            We do this consultation free because honest information matters. There <em>are</em> three legitimate paths to unlock an iPad - read on. If your situation matches one of them, we help you walk Apple through it. If not, we tell you the iPad is unusable and you should not have paid for it.
          </p>
        </>
      }
      whatWeFix={[
        "You forgot your own Apple ID password (recoverable with Apple ID recovery)",
        "You have proof of original purchase but lost the Apple ID",
        "Inherited iPad from a deceased family member (Apple Legacy Contact process)",
        "Company-owned iPad needing a manager removal (Apple Business Manager)",
        "Confirming whether a used iPad you're considering is legitimately unlocked",
        "Pre-purchase Activation Lock status check (free)",
        "Apple Store appointment booking and document preparation",
      ]}
      steps={[
        { title: "Free status check",          body: "Bring the iPad. We confirm whether Activation Lock is on, which Apple ID region (partially shown), and what proof of ownership you'd need." },
        { title: "Legitimate path mapping",    body: "We walk through the three legal options: Apple ID recovery, original-purchase proof at Apple, or Legacy Contact. We tell you honestly if none apply." },
        { title: "Apple Store preparation",    body: "If a path exists, we help you compile the documents Apple needs (original receipt, ID, sometimes the seller's affidavit) and book your Genius Bar appointment." },
        { title: "Post-unlock setup",          body: "Once Apple unlocks the iPad, we offer free iPadOS reinstall and setup so you start fresh on your own Apple ID." },
      ]}
      warrantyDays={0}
      warrantyBullets={[
        "Consultation only - no warranty applies (we make no claims to unlock).",
        "If we install software after Apple unlocks, that work carries our standard 90-day warranty.",
        "We do not guarantee Apple will accept any specific case - we give you our honest read.",
      ]}
      faqs={[
        { q: "Why can\u2019t any shop in Dubai bypass Activation Lock?", a: "Apple ties Activation Lock to the device's Secure Enclave hardware. There is no software exploit, no IMEI swap, no flashing technique that works. Every reputable security researcher confirms this. Shops that 'do iCloud unlock' are either lying or running stolen-recovery rings." },
        { q: "What about all those YouTube videos and forum posts?", a: "They're either old (predate Activation Lock improvements in 2014), faked (the iPad was never actually locked), or scams (the unlock 'works' for a few hours then locks again - Apple's servers re-verify on every iCloud check-in)." },
        { q: "I lost my own Apple ID password - is that the same?", a: "No - that's recoverable through Apple's official Apple ID account recovery, with security questions or trusted device. We help with the steps free. Allow 7-14 days for Apple's process." },
        { q: "What if I bought it from someone in good faith?", a: "Sadly, you have a bricked iPad. Track the seller down - they need to remove it from their Apple ID (takes 30 seconds for them, impossible for anyone else). If they refuse or can't be found, the iPad is unusable. We're sorry; we won't lie to you about it." },
        { q: "Is there really no Apple-internal unlock?", a: "Apple has one path: original purchase receipt with your name, photo ID, at an Apple Store. Even Apple Care representatives won't unlock without that document chain. We help prepare it." },
      ]}
      reviewNames={["Anatoliy Tarasenko", "Anastasiia Goncia", "Ana Undricova"]}
      related={[
        { label: "iPhone iCloud Unlock",      href: "/iphone-icloud-unlock-dubai",   description: "Same honest framework for iPhone." },
        { label: "iPad Software Reset",       href: "/ipad-software-reset-dubai",    description: "Once you have a legit unlock." },
        { label: "iPad Full Diagnostic",      href: "/ipad-full-diagnostic-dubai",   description: "Pre-purchase Activation Lock check." },
      ]}
      blogLink={{ label: "iCloud unlock scams in Dubai: what works, what doesn\u2019t, why", href: "/blog/icloud-locked-iphone-what-to-do" }}
    />
  );
}
