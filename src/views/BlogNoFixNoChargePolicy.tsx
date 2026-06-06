"use client";
import { Link } from "@/lib/router-compat";
import BlogPostTemplate from "@/components/blocks/BlogPostTemplate";

export default function BlogNoFixNoChargePolicy() {
  return (
    <BlogPostTemplate
      seoTitle="No Fix No Charge Policy Explained - Our Promise (Dubai 2026)"
      seoDescription="If we can't fix your Apple device, you owe nothing - not even diagnosis or pickup. Here's how the no-fix-no-charge promise works and where the edges are."
      path="/blog/no-fix-no-charge-policy-explained"
      category="Trust · Policy"
      h1="No Fix No Charge - How Our Promise Works"
      hook="We diagnose. If we can't fix it, you owe nothing. Here's how we make this work."
      quickAnswer="No-fix-no-charge means: free diagnosis, free pickup, free return - and zero charge if we cannot solve your problem. 'Fix' means your stated problem is solved, not 'we attempted'. We can do this because our success rate on accepted jobs is over 96%, so the few unsolvable cases are absorbed by the workshop."
      author={{ name: "Usman", role: "Senior technician" }}
      datePublished="2026-04-28"
      dateModified="2026-04-28"
      readingMinutes={8}
      featuredImageAlt="No fix no charge guarantee at MacBook Repair Dubai"
      body={
        <>
          <h2>Quick answer</h2>
          <p>
            You pay only for repairs that work. If we can't solve the problem you brought us, you
            owe nothing - diagnosis is free, pickup is free, and the device is returned to you in the
            same condition. This isn't marketing - it's how the workshop has operated since 2004.
          </p>

          <h2>What 'no fix no charge' actually means</h2>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Free diagnosis</strong>: 30-60 minutes of senior-tech time, no obligation, no fee.</li>
            <li><strong>Free quote</strong>: written, line-itemised, valid for 14 days.</li>
            <li><strong>Free decline</strong>: don't like the quote? Take the device back, no charge.</li>
            <li><strong>No success → no payment</strong>: if we accept the job, attempt the repair, and fail to solve the problem, you pay zero - including parts we ordered.</li>
          </ul>

          <h2>How it works (free diagnosis, optional repair)</h2>
          <ol className="list-decimal list-inside space-y-xs">
            <li>You bring or pickup the device - free.</li>
            <li>We diagnose - free, written report.</li>
            <li>We quote - fixed price, line-itemised.</li>
            <li>You decide - proceed, decline, or take more time.</li>
            <li>If you proceed and we succeed → you pay the agreed quote.</li>
            <li>If you proceed and we fail → you pay <strong>nothing</strong>.</li>
          </ol>

          <h2>Why we offer this</h2>
          <p>
            Confidence backed by data. Across 2024-2025 our acceptance-to-success rate was{" "}
            <strong>96.3%</strong> on quoted jobs. The remaining 3.7% - devices with deeper damage
            than diagnosis revealed, or chip-level failures we couldn't source replacements for - get
            absorbed. The math works because:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Our diagnosis is thorough enough to refuse jobs we can't do (we sometimes decline at quote stage).</li>
            <li>Our parts network rarely lets us down mid-repair.</li>
            <li>Our 21 years of pattern recognition catches edge cases before we commit.</li>
          </ul>

          <h2>What 'fix' means</h2>
          <p>
            "Fix" = your stated problem is resolved, demonstrably, in front of you (or via video for
            pickup customers).
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>"MacBook won't turn on" → MacBook turns on, boots, holds charge, runs Apple Diagnostics clean.</li>
            <li>"Screen has dead pixels" → screen has zero dead pixels post-replacement and passes 5-colour uniformity test.</li>
            <li>"Battery dies in 2 hours" → battery holds for the rated screen-on time at 50% brightness.</li>
          </ul>
          <p>
            "We tried" is <strong>not</strong> a fix. If we attempted and failed, the policy applies.
          </p>

          <h2>Edge cases - partial fixes</h2>
          <p>
            What if we solve part of the problem but not all? Two examples we've handled this year:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li><strong>Liquid damage MacBook</strong>: customer reported "won't turn on, no charge". We restored boot but battery wouldn't hold. We charged for the logic-board work, refunded the battery line, and noted the new (separate) battery issue at workshop cost if they wanted to proceed.</li>
            <li><strong>iPhone screen + Face ID</strong>: customer reported screen + Face ID broken. Screen fixed, Face ID required board-level repair we couldn't source. We charged screen only, returned with the Face ID limitation documented.</li>
          </ul>
          <p>
            Rule: you only pay for the work that succeeded against your stated need.
          </p>

          <h2>Why other shops don't offer this</h2>
          <p>
            They can't afford to. Pop-up shops with low volume and Tier 3 parts have failure rates
            high enough that no-fix-no-charge would bankrupt them. They charge a non-refundable
            "diagnosis fee" of AED 200-500 to cover their hit rate. It's a sign of low confidence.
          </p>

          <h2>When we'll honestly tell you to replace, not repair</h2>
          <p>
            Sometimes the right answer is "don't repair this". We'll tell you when:
          </p>
          <ul className="list-disc list-inside space-y-xs">
            <li>Repair cost &gt; 60% of replacement cost AND device is &gt; 5 years old.</li>
            <li>Logic board has cascade failures (one fix likely triggers next failure within months).</li>
            <li>Liquid damage corrosion has reached the SoC under-fill - successful boot is a coin flip.</li>
            <li>Model is end-of-software-life (e.g. Intel Mac that won't get macOS 27).</li>
          </ul>
          <p>
            See our{" "}
            <Link to="/blog/iphone-repair-vs-replace-decision-guide" className="text-accent-bright font-semibold hover:underline">
              repair-or-replace decision guide
            </Link>{" "}
            for the full framework.
          </p>

          <h2>Pickup/delivery is free even if no fix</h2>
          <p>
            If we can't repair, you don't pay for the courier either - the round-trip pickup and
            return are absorbed. This is why we strongly recommend free pickup for unknown-issue
            devices: zero financial risk to send it to us.
          </p>
        </>
      }
      faqs={[
        { q: "What if you order parts and then can't fix it - do I pay for the parts?", a: "No. We absorb the part cost. Our suppliers accept returns on most non-bespoke items, and bespoke items get used on a future similar repair. You pay zero." },
        { q: "What if I asked for a screen replacement and you replaced it but I'm unhappy with the quality?", a: "Within 7 days, we'll re-replace at no cost (with a different screen tier if you prefer). Beyond 7 days, the 90-day workmanship warranty applies - see warranty post." },
        { q: "Does no-fix-no-charge apply to data recovery?", a: "Partially - we charge a flat AED 200 attempt fee on data recovery jobs (regardless of success), then the agreed recovery price only if data is actually recovered. Data recovery has higher inherent failure rates so we cover lab-time only." },
        { q: "What if you fix it but a new issue appears 2 weeks later?", a: "If the new issue is related to our work, it's a warranty claim - free re-service. If it's unrelated (e.g. you fixed the screen, now the battery dies), it's a separate repair quoted normally with a 10% returning-customer discount." },
        { q: "Is there anything that disqualifies a job from no-fix-no-charge?", a: "Only one thing: if the device was opened by another shop after our diagnosis but before our repair (we'd see the evidence). We need the device in the state we diagnosed." },
      ]}
      relatedLinks={[
        { label: "Transparent pricing", href: "/blog/transparent-repair-pricing-explained", description: "How a quote is built." },
        { label: "Free pickup & delivery", href: "/blog/free-pickup-delivery-dubai-how-it-works", description: "Free even if no fix." },
        { label: "21 years of experience", href: "/blog/why-21-years-experience-matters", description: "Why our success rate is high enough to make this promise." },
      ]}
    />
  );
}
