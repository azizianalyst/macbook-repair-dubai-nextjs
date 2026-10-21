"use client";
// /blog/iphone-battery-health-when-to-replace. Seo-master-plan Phase 3 build #9, 2026-09-26.
// Targets: iphone battery health · how to check iphone battery health · iphone x battery health ·
// battery health iphone 11 pro max · iphone battery capacity · how to save battery on iphone · iphone battery.
// Facts: support.apple.com 101575 / 103269 / 106348 / 108055 / 119954, apple.com/batteries, and Apple's UAE
// battery estimates from docs/apple-lineup-2026-09-26.md §4a (attributed, excl. VAT). Our price is never shown.
// Warranty wording from site.ts WARRANTY.battery: 3 months with an 80% capacity guarantee.
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { NAP } from "@/content/site";

const WA = `${NAP.whatsappUrl}?text=${encodeURIComponent("Hi, my iPhone battery health is low. Model: ... Maximum Capacity: ...%")}`;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function BlogIPhoneBatteryHealth() {
  return (
    <BlogPostTemplate
      seoTitle="iPhone Battery Health: How to Check It and When to Replace"
      seoDescription="How to check iPhone battery health, what Maximum Capacity, cycle count and peak performance mean, why 80% is the replacement point, and Dubai heat tips."
      path="/blog/iphone-battery-health-when-to-replace"
      wide
      toc={[
        { id: "key-takeaways", label: "Key takeaways" },
        { id: "how-to-check", label: "How to check it" },
        { id: "maximum-capacity", label: "Maximum Capacity and cycles" },
        { id: "80-percent", label: "Is 80% bad?" },
        { id: "peak-performance", label: "Peak performance messages" },
        { id: "older-models", label: "iPhone X and 11 Pro Max" },
        { id: "dubai-heat", label: "Dubai heat" },
        { id: "save-battery", label: "Habits that help" },
        { id: "when-to-replace", label: "When to replace" },
        { id: "cost", label: "Apple's UAE prices" },
      ]}
      category="Care guide · iPhone"
      h1="iPhone Battery Health: How to Check It and When to Replace the Battery"
      hook="Battery Health is the one screen that tells you whether your iPhone needs a new battery or just better habits. Here is how to read it, what Apple says the numbers mean, and why Dubai summers push them down faster."
      quickAnswer="Check it in Settings > Battery > Battery Health (Battery Health & Charging on iPhone 11 to 14). Maximum Capacity compares the battery with when it was new. Apple treats 80% as the replacement point, so plan a new battery once it drops below 80%, iOS recommends service, or the phone shuts down unexpectedly."
      author={{ name: "Shafiq", role: "Lead technician" }}
      datePublished="2026-09-26"
      dateModified="2026-09-26"
      readingMinutes={9}
      featuredImageAlt="iPhone battery health guide: Maximum Capacity, cycle count and when to replace the battery"
      body={
        <>
          <h2 id="key-takeaways">Key takeaways</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Where to look</strong>: Settings &gt; Battery &gt; Battery Health. iPhone 15 and later also show the cycle count there.</li>
            <li><strong>80% is the line</strong>: Apple designs iPhone batteries to keep 80% of their original capacity after 500 cycles (iPhone 14 and earlier) or 1,000 cycles (iPhone 15 and later).</li>
            <li><strong>Peak Performance Capability</strong> tells you whether iOS is holding the phone back to stop it shutting down.</li>
            <li><strong>Heat is the avoidable killer</strong>: Apple warns that ambient temperatures above 35°C can permanently damage battery capacity.</li>
            <li><strong>It never goes back up</strong>: only a new battery restores Maximum Capacity. Good habits only slow the decline.</li>
          </ul>

          <h2 id="how-to-check">How do I check my iPhone battery health?</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Open <strong>Settings</strong> and tap <strong>Battery</strong>.</li>
            <li>Tap <strong>Battery Health &amp; Charging</strong> on iPhone 11 to iPhone 14, or <strong>Battery Health</strong> on iPhone 15 and later.</li>
            <li>Read <strong>Maximum Capacity</strong> and <strong>Peak Performance Capability</strong>. On iPhone 15 and later the same screen lists the cycle count, manufacture date and first use.</li>
          </ol>
          <p>
            Apple describes both layouts in its article on{" "}
            <a href="https://support.apple.com/en-us/106348" {...ext}>the battery and performance of iPhone 11 and later</a>.
            If your menu looks different, search Settings for &quot;Battery Health&quot;.
          </p>

          <h2 id="maximum-capacity">What does Maximum Capacity mean on an iPhone?</h2>
          <p>
            Maximum Capacity is the size of your battery today compared with when it was new. At 90%, a full charge
            holds about nine-tenths of what it held out of the box. It has nothing to do with the charge level in the
            status bar: a phone at 100% charge with 78% Maximum Capacity is carrying a smaller tank, filled to the top.
          </p>
          <p>
            Rated iPhone battery capacity in mAh differs by model; see our{" "}
            <Link to="/iphone-16-pro-battery-capacity/">iPhone 16 Pro battery capacity</Link> page for one example.
          </p>
          <p>
            Wear is counted in <strong>charge cycles</strong>. One cycle is using 100% of the battery&apos;s capacity,
            whether that happens in one day or across several half-charges. Apple says batteries in the iPhone 14 and
            earlier are designed to keep 80% of their original capacity at 500 complete cycles, and the iPhone 15 and
            later at 1,000 cycles, under ideal conditions (
            <a href="https://support.apple.com/en-us/101575" {...ext}>Apple Support</a>).
          </p>

          <h2 id="80-percent">Is 80% battery health bad? When does Apple say to replace it?</h2>
          <p>
            80% is the point Apple itself treats as a worn battery. Its UAE battery service page says Apple replaces the
            battery for no extra charge under AppleCare+ once capacity drops below 80% (
            <a href="https://support.apple.com/en-ae/iphone/repair/battery-replacement" {...ext}>Apple Support UAE</a>).
          </p>
          <table>
            <thead>
              <tr><th>Maximum Capacity</th><th>What it means day to day</th><th>What to do</th></tr>
            </thead>
            <tbody>
              <tr><td>90–100%</td><td>Close to new</td><td>Nothing. Protect it from heat.</td></tr>
              <tr><td>85–89%</td><td>Normal wear for a phone a year or two old</td><td>Keep using it; set a charge limit if your model has one</td></tr>
              <tr><td>80–84%</td><td>Noticeably shorter days</td><td>Plan a replacement, sooner if it shuts down early</td></tr>
              <tr><td>Below 80%, or a service message</td><td>Worn by Apple&apos;s own definition</td><td>Replace the battery</td></tr>
            </tbody>
          </table>
          <p>
            The symptoms matter as much as the number. A phone at 83% that switches off at 30% charge needs a battery
            now. A phone at 81% that still gets you through the day can wait.
          </p>

          <h2 id="peak-performance">What does Peak Performance Capability mean?</h2>
          <p>This line tells you whether iOS is limiting performance to protect a tired battery. You will see one of these:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Normal peak performance</strong>: the battery can deliver the power the phone asks for. Nothing to do.</li>
            <li><strong>Performance management applied</strong>: the phone has already shut down unexpectedly once, so iOS now caps peak demand to stop it happening again. Apps can open more slowly. You can turn this off, but iOS turns it back on after the next unexpected shutdown.</li>
            <li><strong>Significantly degraded</strong>: iOS recommends a battery replacement. Take this at face value.</li>
            <li><strong>Unable to verify</strong>: on the iPhone XS, XR and later, iOS shows &quot;Unable to verify this iPhone has a genuine Apple battery&quot; when it can&apos;t confirm the battery, and warns that the health reading may not be accurate (<a href="https://support.apple.com/en-us/103269" {...ext}>Apple Support</a>).</li>
          </ul>
          <p>
            Apple explains the first three in{" "}
            <a href="https://support.apple.com/en-us/101575" {...ext}>iPhone battery and performance</a>. If your phone
            feels slow and this screen says performance management is on, a new battery usually brings the speed back.
            If it says normal peak performance, look elsewhere: our{" "}
            <Link to="/blog/iphone-not-turning-on-dubai/">iPhone not turning on guide</Link> covers the power faults
            that are not the battery.
          </p>

          <h2 id="older-models">What about iPhone X and iPhone 11 Pro Max battery health?</h2>
          <p>
            <strong>iPhone X</strong>: it launched in 2017 and its last supported iOS is iOS 16, which still has the
            Battery Health screen under Settings &gt; Battery. An iPhone X still on its original battery is very likely
            below 80% after this many years. It also predates Apple&apos;s genuine-battery check, so a replacement battery
            still shows a health reading, though that reading is only as honest as the chip on the new cell. Ask
            whoever fits it what grade of battery it is.
          </p>
          <p>
            <strong>iPhone 11 Pro Max</strong>: look under Battery Health &amp; Charging. The iPhone 11 series is the
            one where Apple recalibrated battery health reporting in iOS 14.5 because the old estimates were
            inaccurate. Apple&apos;s page on that{" "}
            <a href="https://support.apple.com/en-ae/119954" {...ext}>recalibration</a> says that if it fails, an Apple
            Authorised Service Provider can replace the battery free of charge. Otherwise, treat the number like any
            other iPhone: below 80%, replace it.
          </p>

          <h2 id="dubai-heat">Does Dubai heat damage iPhone batteries?</h2>
          <p>
            Yes, and it is the one cause of wear you control. Apple says iPhones work best at ambient temperatures of
            0°C to 35°C, with 16°C to 22°C ideal, and warns that ambient temperatures above 35°C can permanently damage
            battery capacity. Charging in high temperatures does more damage, and iOS may hold charging at 80% when the
            battery is too warm (<a href="https://www.apple.com/batteries/maximizing-performance/" {...ext}>Apple Batteries</a>).
          </p>
          <p>A Dubai summer puts a phone above 35°C without much effort. The usual culprits:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Leaving it in a parked car, or on the dashboard in direct sun.</li>
            <li>Navigation on a windscreen mount while charging, with the sun on the phone.</li>
            <li>Gaming or long video calls while it charges, especially in a thick case.</li>
            <li>Charging under a pillow or on a sofa, where the heat has nowhere to go.</li>
          </ul>
          <p>
            If you see &quot;iPhone needs to cool down&quot;, stop charging, take the case off and let it cool in the
            shade. Never use a fridge or freezer. For the full routine, see{" "}
            <Link to="/blog/iphone-overheating-dubai-summer-fix/">iPhone overheating in the Dubai summer</Link>.
          </p>

          <h2 id="save-battery">How can I save battery on my iPhone?</h2>
          <p>These help both today&apos;s charge and the battery&apos;s lifespan:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Set a charge limit</strong>: on iPhone 15 and later, Settings &gt; Battery &gt; Charging lets you cap charging between 80% and 100% in 5% steps (<a href="https://support.apple.com/en-us/108055" {...ext}>Apple Support</a>). At 100% you can use Optimized Battery Charging instead, which pauses at 80% and finishes just before you usually unplug. Older models have Optimized Battery Charging under Battery Health &amp; Charging.</li>
            <li><strong>Keep it cool</strong>, and take the case off if the phone gets hot on the charger, as Apple suggests.</li>
            <li><strong>Low Power Mode</strong> when you need the day to stretch. It dims the display and cuts background work.</li>
            <li><strong>Auto-Brightness on</strong>. The display is one of the biggest users of power.</li>
            <li><strong>Check Settings &gt; Battery</strong> for the apps using the most, then limit Background App Refresh and location access for the worst offenders.</li>
            <li><strong>Update iOS</strong>. Apple&apos;s own battery advice is to always run the latest version.</li>
            <li><strong>Storing a spare phone?</strong> Leave it at about 50%, not full or empty.</li>
          </ul>
          <p>
            Three habits that don&apos;t help: swiping apps closed all day, running the battery to 0% to
            &quot;calibrate&quot; it, and buying battery-saver apps. None of them slow wear, and a deep discharge is hard
            on the cell.
          </p>

          <h2 id="when-to-replace">When should I replace my iPhone battery?</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>Maximum Capacity is below 80%.</li>
            <li>Battery Health recommends service, or shows that performance management has been applied.</li>
            <li>The phone switches off with charge left, often at 20 to 40%.</li>
            <li>It no longer lasts a normal day even with the habits above.</li>
            <li><strong>Urgent</strong>: the screen is lifting at one edge or the back is bulging. That is a swollen battery. Stop charging it, don&apos;t press the screen back down and bring it in the same day.</li>
          </ul>

          <h2 id="cost">How much does an iPhone battery replacement cost in the UAE?</h2>
          <p>
            Apple publishes UAE out-of-warranty battery estimates, which are the fairest reference point. They exclude
            VAT (support.apple.com/en-ae, read 26 September 2026):
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Apple lists AED 499 for the iPhone 18 Pro and iPhone 18 Pro Max.</li>
            <li>Apple lists AED 465 for the iPhone 17 Pro, 17 Pro Max, iPhone Air and 16 Pro Max.</li>
            <li>Apple lists AED 385 for the iPhone 17, 17e, 16 and 16e.</li>
          </ul>
          <p>
            If your iPhone has AppleCare+ and the battery is below 80%, use it: Apple replaces the battery at no extra
            charge. Outside that cover, we replace batteries on every iPhone from the iPhone 6 to the 18 Pro Max at our
            Concord Tower workshop in Dubai Media City. Diagnosis is free, and before any work we tell you whether the
            battery is a genuine Apple part or a quality-tested cell and what Battery Health will show afterwards.
            Battery replacements carry a 3-month written warranty with an 80% capacity guarantee; the details are on
            our <Link to="/warranty/">warranty page</Link>.
          </p>
          <p>
            <a href={WA} {...ext}>WhatsApp us on {NAP.phoneDisplay}</a> with your model and a screenshot of the Battery
            Health screen for a written quote. See{" "}
            <Link to="/iphone-battery-replacement-dubai/">iPhone battery replacement in Dubai</Link> for how the repair
            works, and{" "}
            <Link to="/blog/iphone-battery-replacement-cost-dubai-all-models/">iPhone battery replacement cost by model</Link>{" "}
            for older phones.
          </p>
        </>
      }
      faqs={[
        {
          q: "How do I check my iPhone battery health?",
          a: "Open Settings, tap Battery, then Battery Health & Charging (iPhone 11 to 14) or Battery Health (iPhone 15 and later). Maximum Capacity is the battery's size compared with new, and Peak Performance Capability says whether iOS is limiting performance. iPhone 15 and later also show the cycle count on that screen.",
        },
        {
          q: "At what battery health should I replace my iPhone battery?",
          a: "Below 80% Maximum Capacity, which is where Apple considers a battery worn and where AppleCare+ covers a replacement. Replace it sooner if Battery Health recommends service or the phone shuts down with charge left. Between 80% and 85% it depends on whether the phone still gets you through a normal day.",
        },
        {
          q: "Can iPhone battery health go back up?",
          a: "No. Maximum Capacity reflects chemical wear inside the cell, and no setting, app or full discharge reverses it. The reading can shift slightly when an iOS update recalibrates the estimate, but only a new battery restores it. A charge limit and keeping the phone cool slow any further decline.",
        },
        {
          q: "Why is my iPhone battery health dropping so fast?",
          a: "In Dubai the usual cause is heat: phones left in cars, charged on sunny dashboard mounts, or used for games while charging. Apple warns that temperatures above 35°C can permanently reduce capacity. Heavy daily use also adds cycles quickly. An unusually fast drop on a phone under a year old is worth raising with Apple.",
        },
        {
          q: "Will Battery Health still work after a battery replacement?",
          a: "With a genuine Apple battery, yes. On the iPhone XS, XR and later, if iOS can't verify the battery it shows \"Unable to verify this iPhone has a genuine Apple battery\" and warns that the health reading may not be accurate, even though the battery works normally. We tell you which grade you are getting, and what Settings will show, before we start.",
        },
      ]}
      relatedLinks={[
        { label: "iPhone battery replacement Dubai", href: "/iphone-battery-replacement-dubai/", description: "Free diagnosis, written quote, 3-month warranty with an 80% guarantee." },
        { label: "iPhone battery cost by model", href: "/blog/iphone-battery-replacement-cost-dubai-all-models/", description: "Apple's list prices and what changes a quote." },
        { label: "iPhone overheating in Dubai", href: "/blog/iphone-overheating-dubai-summer-fix/", description: "Keep the heat off the battery in summer." },
        { label: "Our warranty", href: "/warranty/", description: "What each repair is covered for, in writing." },
      ]}
    />
  );
}
