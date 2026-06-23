"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

const STEPS = [
  { name: "Backup to iCloud or Mac", text: "Settings → [Your Name] → iCloud → iCloud Backup → Back Up Now. Or connect to Mac/PC and use Finder/iTunes to back up. Without this, photos, messages, app data are gone forever after Step 5." },
  { name: "Sign out of iCloud (removes Activation Lock)", text: "Settings → [Your Name] → scroll down → Sign Out → enter Apple ID password → confirm. This is the most critical step. Skipping it means the buyer cannot activate the iPhone and you'll have to reset remotely later." },
  { name: "Sign out of iMessage and FaceTime", text: "Settings → Messages → toggle iMessage off. Settings → FaceTime → toggle FaceTime off. Without this, the buyer's incoming SMS may route to your Apple ID for weeks." },
  { name: "Unpair Apple Watch (if paired)", text: "On the iPhone Watch app → All Watches → tap (i) next to your watch → Unpair Apple Watch → enter Apple ID password. This creates a fresh backup of your Watch settings before unpairing." },
  { name: "Erase All Content and Settings", text: "Settings → General → Transfer or Reset iPhone → Erase All Content and Settings → confirm with passcode and Apple ID password if prompted. Wait for the Apple logo and progress bar (~3-5 minutes). When done, the iPhone reboots to the Hello screen." },
];

export default function BlogFactoryResetBeforeSelling() {
  return (
    <BlogPostTemplate
      seoTitle="How to Factory Reset iPhone Before Selling - 2026 Step Guide"
      seoDescription="Five steps to wipe an iPhone before selling: sign out of iCloud, iMessage and FaceTime, unpair Watch, Erase All Content. Avoid Activation Lock issues."
      path="/blog/how-to-factory-reset-iphone-before-selling"
      wide
      toc={[
        { id: "quick-answer", label: "Quick answer: the 5 steps" },
        { id: "step-1-backup", label: "Step 1: Back up" },
        { id: "step-2-icloud", label: "Step 2: Sign out of iCloud" },
        { id: "step-3-imessage", label: "Step 3: iMessage and FaceTime" },
        { id: "step-4-watch", label: "Step 4: Unpair Apple Watch" },
        { id: "step-5-erase", label: "Step 5: Erase all content" },
        { id: "what-not-to-do", label: "What not to do" },
        { id: "verify-reset", label: "Verifying the reset" },
        { id: "buyer-cant-activate", label: "If buyer can't activate" },
      ]}
      category="How-to · iPhone"
      h1="How to Factory Reset iPhone Before Selling"
      hook="5 critical steps. Skip one and the buyer can't use your phone - or you risk privacy."
      quickAnswer="Five steps in order: (1) back up to iCloud or Mac, (2) sign out of iCloud to remove Activation Lock, (3) sign out of iMessage and FaceTime, (4) unpair Apple Watch if paired, (5) Settings → General → Transfer or Reset iPhone → Erase All Content. Confirm Activation Lock is off before handing over."
      author={{ name: "Ali", role: "iPhone service lead" }}
      datePublished="2026-04-27"
      dateModified="2026-04-27"
      readingMinutes={8}
      featuredImageAlt="How to factory reset iPhone before selling - step-by-step 2026"
      extraSchemas={[
        howTo({
          name: "Factory reset iPhone before selling",
          description: "Five steps to safely wipe an iPhone before resale, removing Activation Lock and personal data.",
          totalTime: "PT15M",
          steps: STEPS,
        }),
      ]}
      body={
        <>
          <h2 id="quick-answer">How To Factory Reset iPhone. Quick answer - the 5 steps</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Back up to iCloud or Mac.</li>
            <li>Sign out of iCloud (removes Activation Lock - critical).</li>
            <li>Sign out of iMessage and FaceTime.</li>
            <li>Unpair Apple Watch (if paired).</li>
            <li>Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.</li>
          </ol>

          <h2 id="step-1-backup">Step 1 - Back up to iCloud or Mac</h2>
          <p>
            Once you erase, your photos, messages, app data, and settings are gone forever. Choose one
            of these:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>iCloud (easiest)</strong>: Settings → [Your Name] → iCloud → iCloud Backup → Back Up Now. Wi-Fi required. 5 GB free, AED 3.99/mo for 50 GB.</li>
            <li><strong>Mac (best for privacy)</strong>: Connect via cable → open Finder → select iPhone in sidebar → "Back up all data on iPhone" → tick "Encrypt local backup" → set password. Encrypted backup also saves Health, Keychain, Wi-Fi passwords.</li>
            <li><strong>PC</strong>: Apple Devices app (Windows 11) or iTunes (Windows 10). Same options.</li>
          </ul>
          <p>
            Verify the backup completed: Settings → [Your Name] → iCloud → iCloud Backup shows "Last
            successful backup: just now". Or in Finder, the timestamp under "Latest Backup".
          </p>

          <h2 id="step-2-icloud">Step 2 - Sign out of iCloud (CRITICAL - removes Activation Lock)</h2>
          <p>
            Activation Lock is Apple's anti-theft system. If you erase the iPhone <em>without</em>
            signing out first, the buyer hits a screen demanding YOUR Apple ID password to activate
            the device. They can't use it. You'll have to remotely sign out via icloud.com later
            (annoying, sometimes fails, often costs the sale).
          </p>
          <p>
            Settings → [Your Name] → scroll all the way down → <strong>Sign Out</strong>. iOS will ask
            for your Apple ID password to disable Find My. Enter it. Choose to keep a copy of contacts,
            calendars, etc. on the iPhone (doesn't matter - about to be erased). Confirm.
          </p>

          <h2 id="step-3-imessage">Step 3 - Sign out of iMessage and FaceTime</h2>
          <p>
            Settings → Messages → toggle <strong>iMessage</strong> off. Wait for "Activating…" to
            disappear (10-30 seconds). Then Settings → FaceTime → toggle <strong>FaceTime</strong> off.
          </p>
          <p>
            <strong>Why this matters:</strong> if you skip this, your friends' iMessages to the buyer's
            new SIM may continue routing to your Apple ID for weeks. Apple's deregister tool
            (<a href="https://selfsolve.apple.com/deregister-imessage" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">selfsolve.apple.com/deregister-imessage</a>)
            fixes this if you forgot, but it's an extra week of half-delivered messages.
          </p>

          <h2 id="step-4-watch">Step 4 - Unpair Apple Watch (if paired)</h2>
          <p>
            On the iPhone, open the Watch app → All Watches → tap (i) next to your watch →
            <strong> Unpair Apple Watch</strong> → enter Apple ID password.
          </p>
          <p>
            iOS automatically backs up the Watch settings before unpairing. When you set up your next
            Apple Watch on a new iPhone, restore from this backup. Don't skip this - an unpaired-but-
            still-linked Watch is a common reason for activation issues on the next phone.
          </p>

          <h2 id="step-5-erase">Step 5 - Erase All Content and Settings</h2>
          <p>
            Settings → General → Transfer or Reset iPhone → <strong>Erase All Content and Settings</strong>.
            iOS shows a summary of what's connected (eSIM, Apple ID, Wallet) - confirm. Enter passcode,
            then Apple ID password if prompted. Tap "Erase iPhone".
          </p>
          <p>
            The screen goes black, Apple logo appears, then a progress bar under it. 3-5 minutes later
            the iPhone reboots to the multilingual "Hello" screen - same as a brand-new iPhone. You're
            done.
          </p>
          <p>
            <strong>eSIM note (UAE)</strong>: iOS 17+ asks whether to keep or remove the eSIM. Choose
            "Remove" - otherwise the buyer inherits your du or Etisalat number. If you want to keep the
            number on a new device, transfer eSIM via the carrier's app first.
          </p>

          <h2 id="what-not-to-do">What NOT to do (just deleting Apple ID is wrong)</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Don't</strong> delete your Apple ID account at appleid.apple.com - this loses your purchases, photos, iCloud everywhere. You only need to <em>sign out</em> on this iPhone.</li>
            <li><strong>Don't</strong> erase via "Erase iPhone" in Settings without signing out of iCloud first - Activation Lock will trap the buyer.</li>
            <li><strong>Don't</strong> rely on DFU mode to bypass Activation Lock. It doesn't. Apple checks the activation server on every restore.</li>
            <li><strong>Don't</strong> trust "iCloud unlock" sellers on Dubizzle or Telegram. Scams. See our{" "}
              <Link to="/blog/icloud-locked-iphone-what-to-do" className="text-accent font-semibold hover:underline">iCloud lock honest guide</Link>.</li>
          </ul>

          <h2 id="verify-reset">Verifying the reset worked</h2>
          <p>
            Before handing over the iPhone:
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>The iPhone is on the "Hello" screen in multiple languages.</li>
            <li>Tap through to the language picker - it should not ask for any password.</li>
            <li>Connect to Wi-Fi at the activation step - Activation Lock should NOT appear. If it does, you skipped Step 2; reset and start again.</li>
            <li>Optional: in Settings → General → About on a different Apple device, the IMEI should show "Activation Lock: Off" via Apple's free checker (for iPhones running iOS 17+).</li>
          </ol>

          <h2 id="buyer-cant-activate">If buyer can't activate - what went wrong</h2>
          <p>
            99% of the time it's because Step 2 was skipped. Fix:
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>You: log in at <a href="https://icloud.com/find" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">icloud.com/find</a> on any browser.</li>
            <li>All Devices → select the sold iPhone → Erase iPhone (yes again, even though it's already erased) → wait for completion.</li>
            <li>Once erased, click "Remove from Account" on the same screen.</li>
            <li>Buyer can now activate normally on their Wi-Fi.</li>
          </ol>
          <p>
            This works only if Find My was enabled when you sold the iPhone (it usually was). If Find
            My was off and the iPhone is offline, the queue waits until it next connects to the
            internet. Tell the buyer to power it on and connect to Wi-Fi.
          </p>
        </>
      }
      faqs={[
        { q: "Do I lose my Apple ID by signing out on my iPhone?", a: "No. Signing out only disconnects this device from your account. Your Apple ID, purchases, photos in iCloud, and other devices remain intact. You can sign back in anywhere." },
        { q: "What about Wallet cards (Emirates ID, Salik, credit cards)?", a: "Erase All Content and Settings removes all Wallet cards and Apple Pay tokens. Your bank reissues virtual card tokens automatically when you add Apple Pay to your next iPhone - no real money lost." },
        { q: "Will the buyer be able to see my photos after the reset?", a: "No. Erase All Content and Settings cryptographically erases the file system encryption key, making all data unreadable. Even forensic recovery cannot retrieve it on iPhone 6s and later (which all have hardware encryption)." },
        { q: "How long does the actual erase take?", a: "3-5 minutes on iPhone 12 and newer. Up to 10 minutes on iPhone X / 11 / older. Battery should be at least 30% before starting - plug in if uncertain." },
        { q: "Should I remove the SIM card before selling?", a: "Physical nano-SIM: yes, eject and keep it. eSIM: choose 'Remove eSIM' during the erase prompt, or transfer to your new iPhone first via the du / Etisalat app. Don't leave an active eSIM on a sold device." },
      ]}
      relatedLinks={[
        { label: "Best way to sell iPhone Dubai", href: "/blog/best-way-to-sell-old-iphone-dubai", description: "Dubizzle vs us vs Apple Trade-In - full guide." },
        { label: "iCloud locked iPhone - what to do", href: "/blog/icloud-locked-iphone-what-to-do", description: "If you forgot Step 2 or buying second-hand." },
        { label: "How much is my iPhone worth", href: "/blog/how-much-is-my-iphone-worth-dubai", description: "Current Dubai resale prices for every model." },
      ]}
    />
  );
}
