"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";
import { BlogPriceTable } from "@/components/blocks/BlogPriceTable";
import { howTo } from "@/lib/schema";

export default function BlogMacBookBatteryHealthCheck() {
  const steps = [
    { name: "System Settings (macOS Sequoia/Sonoma)", text: "Apple menu → System Settings → Battery → Battery Health. Shows Maximum Capacity percentage and Condition (Normal or Service Recommended). Easiest method." },
    { name: "Option-click battery icon (older macOS)", text: "Hold Option and click the battery icon in the menu bar. Older macOS shows Cycle Count and detailed status here without going into Settings." },
    { name: "Terminal command (most detailed output)", text: "Open Terminal and run: system_profiler SPPowerDataType | grep -E 'Cycle|Condition|Maximum|Health'. Shows cycle count, full charge capacity in mAh, design capacity, and condition in one output." },
  ];
  return (
    <BlogPostTemplate
      seoTitle="MacBook Battery Health Check: Every Method (2026)"
      seoDescription="Check MacBook battery health 3 ways: System Settings, Option-click, Terminal. Cycle-count limits per model, M1-M5 chemistry, when to replace at AED 450+."
      path="/blog/macbook-battery-health-check-guide"
      wide
      toc={[
        { id: "method-system-settings", label: "Method 1: System Settings" },
        { id: "method-option-click", label: "Method 2: Option-click" },
        { id: "method-terminal", label: "Method 3: Terminal" },
        { id: "reading-the-data", label: "Reading the data" },
        { id: "when-to-replace", label: "When to replace" },
        { id: "cycle-limits-per-model", label: "Cycle limits per model" },
        { id: "chemistry-differences", label: "M1-M5 chemistry differences" },
        { id: "service-battery-message", label: "Service Battery message" },
        { id: "cost-to-replace", label: "Cost to replace" },
      ]}
      category="Problem solving · MacBook"
      h1="How to Check MacBook Battery Health - Complete Guide"
      hook="Three ways to check, one decision: replace now, or wait six more months? Here is the technician's framework."
      quickAnswer="Check MacBook battery health in 3 ways: System Settings → Battery → Battery Health (easiest), Option-click the battery icon (older macOS), or Terminal command 'system_profiler SPPowerDataType' (most detailed). Replace if cycle count is above 800 AND capacity is below 80%, or if Condition shows 'Service Recommended'. M-series MacBooks throttle CPU performance below 80% capacity."
      author={{ name: "Ali", role: "Senior MacBook battery specialist" }}
      datePublished="2026-04-25"
      dateModified="2026-04-25"
      readingMinutes={10}
      featuredImageAlt="MacBook battery health check Dubai - System Settings and Terminal diagnostic output"
      extraSchemas={[howTo({
        name: "Check MacBook battery health and decide if replacement is needed",
        description: "Three methods to read MacBook battery health data and a clear framework for when to replace.",
        steps,
        totalTime: "PT5M",
      })]}
      body={
        <>
          <h2 id="method-system-settings">MacBook Battery Health Check. Method 1 - System Settings (macOS Sequoia / Sonoma / Ventura)</h2>
          <p>
            The easiest method on any modern macOS:
          </p>
          <ol className="list-decimal list-inside space-y-xs">
            <li>Apple menu → System Settings (or "System Preferences" on Monterey and earlier)</li>
            <li>Battery → Battery Health (small button on the right)</li>
            <li>Read "Maximum Capacity" percentage and "Condition" status</li>
          </ol>
          <p>
            <strong>What you see:</strong> Maximum Capacity is shown as a percentage (e.g. "92%").
            Condition is either "Normal" or "Service Recommended" (sometimes "Service Battery" on
            older macOS).
          </p>

          <h2 id="method-option-click">Method 2 - Option-click battery icon (older macOS)</h2>
          <p>
            On Big Sur and earlier, hold the Option key and click the battery icon in the menu
            bar. A dropdown appears showing Cycle Count, Condition, and current power draw -
            faster than going into Preferences.
          </p>
          <p>
            On macOS Monterey and later, Apple removed the cycle count from this dropdown. To see
            cycle count on modern macOS, use Method 3 (Terminal) or System Settings → General →
            About → System Report → Power.
          </p>

          <h2 id="method-terminal">Method 3 - Terminal command (most detailed)</h2>
          <p>
            Open Applications → Utilities → Terminal and paste:
          </p>
          <pre className="bg-bg-card p-md rounded-md overflow-x-auto text-[13px] mono">
            system_profiler SPPowerDataType | grep -E "Cycle|Condition|Maximum|Health"
          </pre>
          <p>
            Output looks like:
          </p>
          <pre className="bg-bg-card p-md rounded-md overflow-x-auto text-[13px] mono">
            Cycle Count: 412{"\n"}
            Condition: Normal{"\n"}
            Maximum Capacity: 91%
          </pre>
          <p>
            Most detailed view, no apps to install. Free third-party app{" "}
            <strong>coconutBattery</strong> shows the same data plus design capacity in mAh,
            current full-charge capacity in mAh, manufacture date, and a graph of degradation
            over time - the most useful diagnostic tool we recommend.
          </p>

          <h2 id="reading-the-data">Reading the data - cycle count, capacity, condition</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li>
              <strong>Cycle Count:</strong> total number of full 0-100% discharge cycles. Two
              50% discharges count as one cycle. Apple rates M-series for 1,000 cycles minimum.
            </li>
            <li>
              <strong>Maximum Capacity:</strong> current full-charge capacity vs the original
              design capacity, as a percentage. New MacBook = 100%. Service threshold = 80%.
            </li>
            <li>
              <strong>Condition:</strong> macOS's overall verdict. "Normal" means battery operating
              within spec. "Service Recommended" or "Service Battery" means replacement is due.
            </li>
          </ul>

          <h2 id="when-to-replace">When to replace - general rules</h2>
          <p>Replace if any of:</p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Cycle count above 800 AND Maximum Capacity below 85%</li>
            <li>Condition shows "Service Recommended" or "Service Battery"</li>
            <li>Random shutdowns at 30-50% indicated charge</li>
            <li>MacBook gets noticeably slower under load (M-series throttling)</li>
            <li>Trackpad clicking feels spongy or won't click (early swelling)</li>
            <li>Bottom case bulging or lid won't sit flat (advanced swelling - urgent)</li>
            <li>Real runtime is below 60% of original spec (e.g. M2 Air rated 18 hours, you're getting under 11)</li>
          </ul>

          <h2 id="cycle-limits-per-model">Battery cycle limits per MacBook model</h2>
          <BlogPriceTable
            caption="Apple-rated MacBook battery cycle limits at 80% capacity"
            headers={["Model", "Cycle limit", "Battery capacity (Wh)", "Notes"]}
            rows={[
              { model: "MacBook Air 13″ M1 (2020)", ours: "1,000", apple: "49.9 Wh", note: "First Apple Silicon Air" },
              { model: "MacBook Air 13/15″ M2 (2022/2023)", ours: "1,000", apple: "52.6 / 66.5 Wh", note: "Notch design" },
              { model: "MacBook Air 13/15″ M3 (2024)", ours: "1,000", apple: "52.6 / 66.5 Wh", note: "Same as M2" },
              { model: "MacBook Air 13/15″ M4 (2025)", ours: "1,000", apple: "53.8 / 68.5 Wh", note: "Slight uplift" },
              { model: "MacBook Air 13/15″ M5 (2026)", ours: "1,000", apple: "53.8 / 68.5 Wh", note: "" },
              { model: "MacBook Pro 13″ M1/M2", ours: "1,000", apple: "58.2 Wh", note: "Last 13″ Pro" },
              { model: "MacBook Pro 14″ M1-M5 Pro/Max", ours: "1,000", apple: "70 Wh", note: "" },
              { model: "MacBook Pro 16″ M1-M5 Pro/Max", ours: "1,000", apple: "100 Wh", note: "Largest cell, airline limit" },
              { model: "MacBook Pro 13/15″ Intel (2016-2020)", ours: "1,000", apple: "58-100 Wh", note: "Glued cells, harder to replace" },
            ]}
          />

          <h2 id="chemistry-differences">M1 vs M2 vs M3 vs M4 vs M5 - chemistry differences</h2>
          <p>
            All M-series MacBooks use lithium polymer pouch cells from the same family of
            suppliers (mainly LG Chem and ATL). The cell chemistry is essentially identical
            across M1-M5 - the differences are pack capacity (Wh) and management firmware.
          </p>
          <p>
            What has changed across generations: the M-series power management firmware has gotten
            progressively better at protecting cells from extreme temperatures (the M3 update added
            cooler charging in hot climates - relevant for Dubai summer). But cell longevity has
            been roughly constant - about 4-5 years of daily use before "Service Recommended".
          </p>

          <h2 id="service-battery-message">Apple's "Service Battery" message - what it means</h2>
          <p>
            "Service Recommended" or older "Service Battery" appears when macOS's diagnostic
            judges that the battery's full-charge capacity has degraded sufficiently to warrant
            replacement. Typical triggers:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Maximum Capacity has dropped below 80% AND cycle count is above 700</li>
            <li>An unexpected shutdown event at moderate charge level</li>
            <li>Battery fails internal calibration self-test</li>
          </ul>
          <p>
            Once you see this message, M-series MacBooks engage CPU throttling to protect the
            cell from peak current draw. Performance drops 20-40% on heavy workloads until
            replacement.
          </p>

          <h2 id="cost-to-replace">Cost to replace at our shop</h2>
          <p>
            See our full{" "}
            <Link to="/blog/macbook-battery-replacement-cost-2026" className="text-accent font-semibold hover:underline">
              MacBook battery cost guide
            </Link>{" "}
            for every model. Quick summary: AED 450-500 for Air, AED 600-650 for 14″ Pro, AED
            700 for 16″ Pro. Same-day. 3-month warranty.
          </p>
        </>
      }
      faqs={[
        {
          q: "What's the difference between Cycle Count and Maximum Capacity?",
          a: "Cycle Count is how many full 0-100% discharges the battery has completed (a usage measure). Maximum Capacity is how much charge the battery can still hold versus when new (a degradation measure). Both matter - replace when cycle count is above 800 AND capacity below 85%.",
        },
        {
          q: "How do I see cycle count on macOS Sonoma or later?",
          a: "Apple removed it from the menu bar Option-click. Easiest: Apple menu → About This Mac → More Info → System Report → Power → look for 'Cycle Count'. Or use the Terminal command in Method 3 above.",
        },
        {
          q: "Is 80% Maximum Capacity really the threshold for replacement?",
          a: "Apple's official threshold is 80% (where rated cycle life ends). In practice, you'll notice noticeably worse runtime around 85% and significant runtime loss at 75%. M-series MacBooks throttle performance below 80%, so we recommend replacement at 80% even if 'Condition' still says Normal.",
        },
        {
          q: "Can the battery health reading be wrong?",
          a: "Occasionally yes. macOS's algorithm can show inflated capacity after a fresh calibration or deflated capacity after deep discharge. If your runtime feels much worse than the percentage suggests, run a calibration cycle (full discharge → full charge) and re-check.",
        },
        {
          q: "Will Apple replace my battery if it shows 'Service Recommended'?",
          a: "Out-of-warranty: yes, AED 700-1,200 depending on model at Apple Store. Inside the 1-year Apple warranty: only if capacity is below 80% AND there's no liquid/physical damage. AppleCare+ covers it at no charge if below 80%.",
        },
        {
          q: "What's a good free app for detailed battery diagnostics?",
          a: "coconutBattery (Mac App Store, free version available) is the gold standard. Shows design capacity, current full-charge capacity in mAh, cycle count, manufacture date, and degradation history. Used by most Mac technicians.",
        },
      ]}
      relatedLinks={[
        { label: "MacBook battery replacement service", href: "/macbook-battery-replacement-dubai", description: "Same-day, 3-month warranty." },
        { label: "MacBook battery cost guide 2026", href: "/blog/macbook-battery-replacement-cost-2026", description: "Pricing for every model." },
        { label: "MacBook running slow - 10 fixes", href: "/blog/macbook-running-slow-10-fixes", description: "Battery throttling and other slowdowns." },
      ]}
    />
  );
}
