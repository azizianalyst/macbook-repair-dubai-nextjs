"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { NAP } from "@/content/site";

const WA = `${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my iPhone screen has a problem. Model: ... Symptom: ...")}`;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function BlogIPhoneScreenProblems() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Screen Problems? Black Spots, Lines & Touch Fixes"
      seoDescription="Black spot, lines, yellow or grey tint, black screen or touch not working on your iPhone? What is a setting, what is the display, and when to repair it."
      path="/blog/iphone-screen-problems-dubai"
      wide
      toc={[
        { id: "key-takeaways", label: "Key takeaways" },
        { id: "software-or-hardware", label: "Software or hardware?" },
        { id: "black-spot", label: "Black spot on the screen" },
        { id: "lines", label: "Lines on the screen" },
        { id: "yellow-grey", label: "Yellow or grey screen" },
        { id: "black-screen", label: "Black screen, phone still on" },
        { id: "touch", label: "Touch not working or ghost touch" },
        { id: "scratches", label: "Removing scratches" },
        { id: "dubai", label: "Dubai heat and humidity" },
        { id: "when-to-repair", label: "When it's a repair" },
      ]}
      category="Fix guide · iPhone"
      h1="iPhone Screen Problems: What Each Symptom Means and How to Fix It"
      hook="Some iPhone screen faults are a setting you can switch off in ten seconds. Others are a failing display that only gets worse. Here is how to tell which one you have before you pay anyone, including us."
      quickAnswer="Black spots, ink-like patches and lines that survive a restart are display hardware and need a screen replacement. A yellow, grey or dim screen is usually a setting (Night Shift, True Tone, colour filters) or heat. For touch not working or ghost touches, remove the screen protector, unplug the charger and force restart first."
      author={{ name: "Shafiq", role: "Lead technician" }}
      datePublished="2026-09-26"
      dateModified="2026-09-26"
      readingMinutes={8}
      featuredImageAlt="iPhone screen problems guide: black spots, lines, tint and touch faults explained"
      body={
        <>
          <h2 id="key-takeaways">Key takeaways</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Spots and ink patches</strong>: physical display damage. No setting removes them, and on OLED iPhones they often spread.</li>
            <li><strong>Lines</strong>: still there after a force restart and an iOS update means the panel or its connector.</li>
            <li><strong>Yellow or grey screen</strong>: check Night Shift, True Tone and Colour Filters before anything else.</li>
            <li><strong>Black screen but the phone rings</strong>: cool it down and force restart. Still no picture means the display has failed.</li>
            <li><strong>Touch problems</strong>: rule out the protector, charger, moisture and a frozen app before blaming the digitiser.</li>
          </ul>

          <h2 id="software-or-hardware">Is my iPhone screen problem software or hardware?</h2>
          <p>
            Know your screen type first. The iPhone X, XS and 11 Pro models, and every iPhone from the
            iPhone 12 onwards, use OLED, where each pixel makes its own light. The iPhone XR, iPhone 11,
            the iPhone SE models and older phones such as the iPhone 8 use LCD, with a separate
            backlight behind the image.
          </p>
          <table>
            <thead>
              <tr><th>What you see</th><th>Usually</th><th>Try first</th></tr>
            </thead>
            <tbody>
              <tr><td>Black spot or spreading ink patch</td><td>Display damage</td><td>Remove the protector to check, then back up</td></tr>
              <tr><td>Green, pink or white lines</td><td>Panel or display connector</td><td>Force restart, update iOS</td></tr>
              <tr><td>Yellow or warm tint</td><td>A setting (Night Shift, True Tone)</td><td>Display &amp; Brightness settings</td></tr>
              <tr><td>Grey or black-and-white</td><td>Greyscale filter, or frozen iOS</td><td>Colour Filters, force restart</td></tr>
              <tr><td>Black screen, phone still rings</td><td>Heat, frozen iOS or failed display</td><td>Cool down, force restart</td></tr>
              <tr><td>Touch dead or ghost touches</td><td>Protector, charger, moisture or digitiser</td><td>Remove protector, unplug, restart</td></tr>
            </tbody>
          </table>
          <p>
            One test settles most cases: take a screenshot and open it on another device. A screenshot
            records what iOS draws, not what the panel shows. If the line or spot isn&apos;t in the
            screenshot, the display is at fault.
          </p>

          <h2 id="black-spot">Why is there a black spot on my iPhone screen?</h2>
          <p>
            On an OLED iPhone, a black or purple-black patch that looks like ink under the glass means
            the pixels there are damaged, usually by pressure or impact: a drop, sitting on the phone
            in a back pocket, something heavy in a bag. The glass can look perfect because the damage
            is in the layer underneath.
          </p>
          <p>
            These patches rarely stay the same size. Once the display layer is cracked internally, the
            dead area often grows and can take touch with it, so back up while the screen still works.
            Peel off any screen protector first: a bubble or a crack in the protector can look like a
            spot. On LCD models such as the XR, 11 and SE, a fixed dark or bright blotch is usually
            pressure damage to the LCD or backlight layers. &quot;Dead pixel fixer&quot; apps repair
            neither.
          </p>

          <h2 id="lines">What do lines on an iPhone screen mean?</h2>
          <p>
            A thin vertical line in green, pink or white is the classic OLED panel fault. Some owners
            first notice one after an iOS update, so it looks like software. Test it: force restart and
            install any update. A line that survives both, and isn&apos;t in a screenshot, is hardware.
          </p>
          <p>
            Several coloured lines, flicker, or lines that change when you press near an edge point to
            the display connector or a damaged panel, usually after a drop or liquid. Don&apos;t keep
            pressing: pressure on a damaged panel spreads the damage. Lines that started right after a
            screen replacement point at the new part or its fitting; see{" "}
            <Link to="/blog/iphone-screen-replaced-but-issues-after/">iPhone screen replaced but glitchy</Link>.
          </p>
          <p>
            <strong>Force restart (iPhone 8 and later)</strong>: press and release volume up, press and
            release volume down, then hold the side button until the Apple logo appears. It
            doesn&apos;t erase anything.
          </p>

          <h2 id="yellow-grey">Why is my iPhone screen yellow or grey?</h2>
          <p>A yellow or warm tint is almost always one of three settings:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Night Shift</strong>: Settings &gt; Display &amp; Brightness &gt; Night Shift. A schedule can switch it on every evening.</li>
            <li><strong>True Tone</strong>: same menu. It warms the white point under indoor light.</li>
            <li><strong>Colour Filters</strong>: Settings &gt; Accessibility &gt; Display &amp; Text Size &gt; Colour Filters, where a Colour Tint filter tints everything.</li>
          </ul>
          <p>
            The iPhone XR comes up a lot here. Its LCD looks warmer next to an OLED iPhone even when
            nothing is wrong. A yellow patch in one area, or a tint after a drop, is the LCD or
            backlight. A tint that appeared after a screen replacement usually means the new panel
            wasn&apos;t set up with your phone&apos;s True Tone data, or is a lower-grade part.
          </p>
          <p>
            If the phone works but everything is grey or black-and-white, the Greyscale filter is on in
            the same Colour Filters menu. The Accessibility Shortcut (triple-click the side button) can
            toggle it by accident. A solid grey screen that doesn&apos;t respond means iOS has hung:
            force restart, and if it sticks again, connect it to a computer, enter recovery mode and
            choose <strong>Update</strong>, which keeps your data. <strong>Restore</strong> erases it.
          </p>

          <h2 id="black-screen">Why is my iPhone screen black but the phone is still on?</h2>
          <p>
            Call it, or plug it in and listen for the charging sound. If it rings or vibrates, the
            phone is alive and only the picture is missing. Then check:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Heat</strong>: Apple says an iPhone that gets too hot can dim its display or turn
              it black, and slow or stop charging, until it cools (
              <a href="https://support.apple.com/en-us/118431" {...ext}>Apple Support</a>). After a
              parked car in a Dubai summer, rule this out first. Take the case off and let it cool
              naturally, never in a fridge.
            </li>
            <li><strong>Screen Curtain</strong>: if the phone talks to you, VoiceOver is on. Triple-tap the screen with three fingers to turn Screen Curtain off.</li>
            <li><strong>Frozen iOS</strong>: force restart.</li>
            <li><strong>Failed display</strong>: if it rings and shows up on a computer but the screen stays black after all this, the display or its connector has failed. A screen replacement fixes it and leaves your data alone.</li>
          </ul>
          <p>
            No sound, no vibration and no response after 30 minutes on a known-good charger is a power
            problem, not a screen problem. Our{" "}
            <Link to="/blog/iphone-not-turning-on-dubai/">iPhone not turning on guide</Link> covers it.
          </p>

          <h2 id="touch">Why is my iPhone touch screen not working, or touching by itself?</h2>
          <p>Dead touch and ghost touch (taps you didn&apos;t make) share most causes. Work down this list:</p>
          <ol className="list-decimal list-inside space-y-xs">
            <li><strong>Clean and dry</strong>: water droplets and condensation register as touches. A cold phone carried from an air-conditioned mall into humid outdoor air can fog up for a few minutes.</li>
            <li><strong>Remove the protector and case</strong>: a cracked, lifting or thick protector creates dead zones near the edges.</li>
            <li><strong>Unplug the charger</strong>: if ghost touches stop when the cable comes out, the charger is the cause, often a cheap uncertified one.</li>
            <li><strong>Force restart and update iOS</strong>: if it happens in one app only, update or reinstall that app.</li>
            <li><strong>Look for damage</strong>: even a hairline crack at a corner, or a drop that loosened the connector, can break touch.</li>
          </ol>
          <p>
            If touch works in some areas and not others, or ghost touches continue with no protector and
            no charger, the digitiser is faulty. On iPhones it is part of the display assembly, so the
            fix is a screen replacement.
          </p>
          <p>
            The iPhone X comes up often for touch faults. Apple ran a display replacement programme for
            iPhone X touch issues, and Apple&apos;s page now says it has ended, so an X with failing
            touch today is an ordinary out-of-warranty repair. Check current programmes on our{" "}
            <Link to="/apple-repair-programs-dubai/">Apple repair programmes page</Link>. And if dead
            touch stops you entering your passcode, don&apos;t let anyone erase the phone: a screen
            replacement doesn&apos;t need your data wiped.
          </p>

          <h2 id="scratches">Can you remove scratches from an iPhone screen?</h2>
          <p>
            Not at home. The front is hardened glass (Ceramic Shield on recent models). Toothpaste,
            baking soda and scratch-remover pastes don&apos;t polish out a scratch in it; they strip the
            oil-repellent coating, so the screen smudges more. First check whether the scratch is in
            your protector. Fine hairlines mostly vanish under a new tempered-glass protector. A scratch
            that catches a fingernail stays, and only a new screen removes it, which is worth paying for
            only if it sits in your line of sight or you&apos;re selling the phone.
          </p>

          <h2 id="dubai">Does Dubai heat or humidity damage iPhone screens?</h2>
          <p>
            Apple designs iPhones for ambient temperatures of 0°C to 35°C. Above that the phone protects
            itself: the display dims or goes black, charging slows and you may see &quot;Temperature:
            iPhone needs to cool down&quot;. That stops once it cools.
          </p>
          <p>
            Heat&apos;s lasting damage is to the battery, and a swollen battery can push the display up
            out of the frame. If you see a gap along one edge, stop charging, don&apos;t press the screen
            down, keep it away from anything flammable and get it checked the same day.
          </p>

          <h2 id="when-to-repair">When is it a screen repair, not a setting?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>A spot, ink patch or discoloured area that stays with the protector off.</li>
            <li>Lines or flicker that survive a force restart and an iOS update, and aren&apos;t in screenshots.</li>
            <li>Dead touch zones, or ghost touches with no protector and no charger.</li>
            <li>A black screen on a phone that rings, after it has cooled down.</li>
            <li>Any crack, and any lifting at the edges (the battery gets checked first).</li>
          </ul>
          <p>
            Bring it to our workshop at Concord Tower, Dubai Media City. Diagnosis is free and you get a
            quote before any work starts. We fit genuine parts where available and quality-tested parts
            otherwise, and tell you which first. Screen repairs carry a 90-day written warranty, and your
            data stays on the phone.
          </p>
          <p>
            <a href={WA} {...ext}>WhatsApp us on {NAP.phoneDisplay}</a> with your model and a photo of
            the screen. See{" "}
            <Link to="/iphone-screen-repair-dubai/">iPhone screen repair in Dubai</Link> for how the
            repair works, and{" "}
            <Link to="/iphone-screen-repair-cost-dubai/">iPhone screen repair cost in Dubai</Link> for
            what Apple charges for the same job.
          </p>
        </>
      }
      faqs={[
        {
          q: "Can a black spot on an iPhone screen go away on its own?",
          a: "No. A black or purple patch on an OLED iPhone is damaged pixels in the display layer, usually from pressure or a drop, and no setting, update or app repairs it. It often grows and can take touch with it, so back up now. The fix is a display replacement, which doesn't touch your data.",
        },
        {
          q: "Why did a green line appear on my iPhone screen?",
          a: "A single green, pink or white vertical line is a display panel fault on OLED iPhones. It sometimes shows up after an iOS update, so force restart and install any update first. If the line stays and doesn't appear in a screenshot, the panel has failed and the screen needs replacing.",
        },
        {
          q: "What causes ghost touch on an iPhone?",
          a: "Usually a cracked or lifting screen protector, moisture on the glass, a cheap or faulty charger, or a frozen app. Remove the protector, dry the screen, unplug the charger and force restart. If phantom taps continue after all four, the display's touch layer is faulty and the screen needs replacing.",
        },
        {
          q: "How do I fix a yellow screen on an iPhone XR?",
          a: "Turn off Night Shift and True Tone in Settings > Display & Brightness, and make sure no Colour Tint filter is on under Accessibility > Display & Text Size > Colour Filters. The XR's LCD looks warmer than OLED iPhones by design. A yellow patch in one area, or a tint after a drop, is LCD damage.",
        },
        {
          q: "Will I lose my photos if my iPhone screen is replaced?",
          a: "No. A screen replacement swaps the display; it doesn't touch storage, and nobody needs to erase the phone. Back up anyway if the screen still works, because a failing display can stop responding completely. If touch is already dead, back up as soon as the new screen is working.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone screen repair Dubai", href: "/iphone-screen-repair-dubai/", description: "Free diagnosis, quote before work, 90-day screen warranty." },
        { label: "iPhone screen repair cost", href: "/iphone-screen-repair-cost-dubai/", description: "What sets the price, and Apple's own list prices." },
        { label: "Screen replaced but glitchy?", href: "/blog/iphone-screen-replaced-but-issues-after/", description: "Lines, touch or True Tone problems after a repair." },
        { label: "iPhone not turning on", href: "/blog/iphone-not-turning-on-dubai/", description: "No sound, no vibration: the power-side checks." },
      ]}
    />
  );
}
