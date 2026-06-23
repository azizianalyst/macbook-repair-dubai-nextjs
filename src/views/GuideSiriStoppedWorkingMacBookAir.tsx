"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { howTo } from "@/lib/schema";

export default function GuideSiriStoppedWorkingMacBookAir() {
  const steps = [
    { name: "Confirm Siri is switched on", text: "Open System Settings. On macOS Sequoia and later it's under 'Apple Intelligence & Siri'; on Monterey-Sonoma it's 'Siri & Spotlight'. Make sure 'Ask Siri' (or Siri) is turned on. If it was off, that alone explains a Siri that 'stopped working'." },
    { name: "Check your internet connection", text: "Siri processes most requests in the cloud, so it needs a working connection. Open a website to confirm Wi-Fi is actually online, a connected-but-no-internet network is a classic cause of 'Siri isn't available right now'." },
    { name: "Allow the microphone", text: "Go to System Settings → Privacy & Security → Microphone and make sure access isn't disabled system-wide. Then check System Settings → Sound → Input that the right microphone is selected and its level moves when you speak." },
    { name: "Rule out Screen Time restrictions", text: "System Settings → Screen Time → Content & Privacy → Apps. If Siri & Dictation is unchecked here, Siri is blocked and won't even appear in settings. Re-enable it (you may need the Screen Time passcode)." },
    { name: "Set the voice-activation and shortcut", text: "Back in the Siri settings, turn on 'Listen for' (Hey Siri / Siri) if you use voice, and set a 'Keyboard shortcut' so you can trigger Siri manually to test it independently of the microphone trigger." },
    { name: "Check language, region and Apple ID", text: "Siri only works in supported languages and regions, confirm your Mac's language/region is set to a supported one, and that you're signed into your Apple ID (Apple menu → System Settings → your name). Apple Intelligence features also need a supported region and that it's enabled." },
    { name: "Restart, update, then reset if needed", text: "Restart the Mac, then check Software Update. Siri bugs are frequently fixed in point releases. If it still fails, toggle Siri off and on, or boot Safe Mode to rule out a login item. A persistent fault may need a macOS reinstall." },
  ];

  return (
    <BlogPostTemplate
      seoTitle="Siri Stopped Working on MacBook Air. How to Fix It"
      seoDescription="Siri not working on your MacBook Air? Check it's enabled, online, the mic is allowed and Screen Time isn't blocking it, every cause and fix, step by step."
      path="/siri-stopped-working-on-macbook-air"
      category="Troubleshooting · macOS"
      h1="Siri Stopped Working on My MacBook Air"
      hook="When Siri goes quiet on a MacBook Air it's nearly always a setting or a connection, not a broken Mac. Here's the order to check things so you fix it fast."
      quickAnswer="Most 'Siri stopped working' cases on a MacBook Air are software: Siri turned off, no internet, a blocked microphone, or a Screen Time restriction. Open System Settings → Apple Intelligence & Siri (or Siri & Spotlight on older macOS), make sure Siri is on, confirm Wi-Fi is online, then check Privacy & Security → Microphone and Screen Time → Content & Privacy. Restart and update macOS if it persists."
      author={{ name: "Usman", role: "Senior MacBook technician" }}
      datePublished="2026-06-18"
      dateModified="2026-06-18"
      readingMinutes={7}
      featuredImageAlt="Re-enabling Siri in macOS System Settings on a MacBook Air at a Dubai repair workshop"
      extraSchemas={[howTo({
        name: "Fix Siri when it stops working on a MacBook Air",
        description: "Step-by-step checks to restore Siri on a MacBook Air, from the Siri toggle and internet connection to microphone permissions, Screen Time restrictions and macOS updates.",
        steps,
        totalTime: "PT10M",
      })]}
      body={
        <>
          <h2>Start with the four most common causes</h2>
          <p>
            On a MacBook Air, "Siri stopped working" almost always comes down to one of four things,
            and checking them in this order solves the large majority of cases:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Siri is switched off.</strong> An update or an accidental toggle can disable it. Re-enable it in System Settings.</li>
            <li><strong>No real internet.</strong> Siri sends most requests to Apple's servers, so a dropped or captive Wi-Fi network makes it fail with "not available right now".</li>
            <li><strong>The microphone is blocked.</strong> If mic access is off system-wide or the wrong input is selected, Siri can't hear you.</li>
            <li><strong>Screen Time is restricting it.</strong> A content restriction can hide Siri entirely, common on Macs set up with parental controls or handed down within a family.</li>
          </ul>

          <h2>Where Siri's settings live now</h2>
          <p>
            Apple moved Siri's controls between macOS versions, which trips people up:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>macOS Sequoia (15) and later:</strong> System Settings → <strong>Apple Intelligence &amp; Siri</strong>.</li>
            <li><strong>macOS Monterey-Sonoma:</strong> System Settings → <strong>Siri &amp; Spotlight</strong>.</li>
          </ul>
          <p>
            Make sure the main Siri / "Ask Siri" switch is on. While you're there, set a{" "}
            <strong>keyboard shortcut</strong> for Siri, that lets you trigger it by keys to test it
            separately from the "Hey Siri" voice trigger, which narrows down whether the problem is
            Siri itself or the microphone.
          </p>

          <h2>If Siri is on but says it's "not available"</h2>
          <p>
            That message is almost always connectivity or Apple ID. Confirm Wi-Fi actually reaches
            the internet (load a web page), and that you're signed into your Apple ID under Apple
            menu → System Settings → your name. On a captive network (hotel, café, some office
            Wi-Fi) Siri can fail until you complete the sign-in page in a browser. Apple
            Intelligence features additionally need a supported region and the feature enabled.
          </p>

          <h2>If Siri can't hear you</h2>
          <p>
            Open System Settings → Privacy &amp; Security → <strong>Microphone</strong> and confirm
            access isn't disabled. Then System Settings → Sound → <strong>Input</strong>: pick the
            correct microphone and watch the input level move as you speak. If the level stays flat
            on the built-in mic, and an external mic or headset works fine, the built-in microphone
            hardware may be the issue and a{" "}
            <Link to="/macbook-microphone-repair-dubai" className="text-accent font-semibold hover:underline">
              MacBook microphone repair
            </Link>{" "}
            is the fix.
          </p>

          <h2>Still stuck? Restart, update, reinstall</h2>
          <p>
            Restart the Mac, then run Software Update. Siri-specific bugs are regularly fixed in
            macOS point releases. If it still won't work, toggle Siri off and on, or boot{" "}
            <strong>Safe Mode</strong> to rule out a login item interfering. A Siri fault that
            survives all of this usually points to deeper system-file damage, where a clean{" "}
            <Link to="/macos-reinstall-dubai" className="text-accent font-semibold hover:underline">
              macOS reinstall
            </Link>{" "}
            restores it without erasing your files.
          </p>
          <p>
            If you'd rather not work through it yourself, bring the Air in for a{" "}
            <Link to="/macbook-full-diagnostic-dubai" className="text-accent font-semibold hover:underline">
              free diagnostic
            </Link>{" "}
           , we'll confirm whether it's a setting, the microphone or the system. We're at Office
            #45, 10th Floor, Concord Tower, Al Sufouh, Dubai Media City, open Mon-Sat 9am–10pm, with
            free pickup across Dubai. Call or WhatsApp{" "}
            <a href="https://wa.me/971557413706" className="text-accent font-semibold hover:underline">055 741 3706</a>.
          </p>
        </>
      }
      faqs={[
        {
          q: "Where do I turn Siri on or off on a MacBook Air?",
          a: "It depends on your macOS version. On macOS Sequoia (15) and later it's System Settings → Apple Intelligence & Siri; on Monterey through Sonoma it's System Settings → Siri & Spotlight. Make sure the main Siri / 'Ask Siri' switch is on, an update can disable it, which looks like Siri suddenly stopping.",
        },
        {
          q: "Why does Siri say it's 'not available right now' on my Mac?",
          a: "That message is almost always a connectivity or Apple ID problem. Siri processes requests in the cloud, so confirm your Wi-Fi actually reaches the internet, finish any captive-network sign-in page, and make sure you're signed into your Apple ID under System Settings → your name.",
        },
        {
          q: "Siri can't hear me on my MacBook Air. What should I check?",
          a: "Open System Settings → Privacy & Security → Microphone and make sure access isn't disabled, then System Settings → Sound → Input to pick the right microphone and watch the level move as you speak. If the built-in mic level stays flat but an external mic works, the built-in microphone hardware may need repair.",
        },
        {
          q: "Can Screen Time stop Siri from working?",
          a: "Yes. Under System Settings → Screen Time → Content & Privacy → Apps, if 'Siri & Dictation' is unchecked, Siri is blocked and may not even appear in settings. This is common on Macs set up with parental controls. Re-enable it there, you may need the Screen Time passcode.",
        },
        {
          q: "Do I need to be online for Siri to work?",
          a: "For the vast majority of requests, yes. Siri sends them to Apple's servers, so it needs a working internet connection. A Wi-Fi network that's connected but has no actual internet (or an unfinished captive-portal login) is one of the most common reasons Siri appears to stop working.",
        },
        {
          q: "Siri still won't work after checking every setting. What now?",
          a: "Restart the Mac and install any pending macOS update. Siri bugs are often fixed in point releases. If it still fails, toggle Siri off and on or boot Safe Mode to rule out a login item. A fault that survives all of this usually means system-file damage, where a macOS reinstall (which keeps your files) restores it.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook microphone repair Dubai", href: "/macbook-microphone-repair-dubai", description: "Built-in mic dead so Siri and calls can't hear you? We repair it." },
        { label: "macOS reinstall Dubai", href: "/macos-reinstall-dubai", description: "Persistent Siri or system bug? Clean reinstall without erasing your files." },
        { label: "Free MacBook diagnostic in Dubai", href: "/macbook-full-diagnostic-dubai", description: "Not sure if it's a setting, the mic or macOS? We'll find out first, free." },
      ]}
    />
  );
}
