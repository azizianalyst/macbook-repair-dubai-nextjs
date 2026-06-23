"use client";
// Mac Pro Repair Dubai - faithful rebuild of the original WordPress /mac-pro-repair-dubai page
// (user: "save data as I give you", 2026-06-01). Prior DevicePageTemplate version is in git history.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";
import MAC_DESKTOP_MODELS from "@/content/mac-desktop-models.json";

const SIBLINGS = [
  { label: "MacBook Air", href: "/macbook-air-repair-dubai" },
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "Mac mini", href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

const MODELS = [
  "Mac Pro (M2 Ultra / M2 Max)",
  "Mac Pro (2019) Intel Xeon W",
  "Mac Pro (2013) Intel Xeon E5",
];

const SERVICES = [
  { title: "Hard Drive Replacement", body: "Our skilled techs can install a new hard drive in place of your faulty or old one. We have a variety of fast and large storage choices that will make it run better." },
  { title: "SSD Upgrade", body: "Add a solid-state drive (SSD) to your Mac Pro to make it faster. Our pros will install an SSD to make your system much quicker and more responsive." },
  { title: "RAM Upgrade", body: "Expanding your system's RAM capacity enables smoother multitasking and enhances overall performance. We offer high-quality RAM units to make sure even the most demanding programs run smoothly." },
  { title: "Touch Bar Replacement", body: "Restore the functionality of your MacBook's touch bar with our professional touch bar replacement services. We ensure smooth operation and an enhanced user experience." },
  { title: "Graphics Card Repair", body: "If your system is having problems with its graphics, our team can figure out how to fix it. We can restore a number of different types of graphics cards to get your visuals back to optimal quality." },
  { title: "Software Issues", body: "Our skilled techs can fix a wide range of software glitches, from operating-system problems to software conflicts. We'll fix any issues with your Mac Pro so it works properly." },
  { title: "Fixing Not Booting", body: "Our pros will figure out why your Mac Pro won't boot up and fix the problem. No matter what the fault is, we'll fix it and get it working again." },
  { title: "Overheating Fix", body: "When your system gets too hot, it can slow down or even get damaged. Our team will clean the internal components, change the thermal paste, and ensure there is enough airflow to keep the computer from overheating." },
  { title: "Data Recovery", body: "If you lose data because of a hardware failure or some other problem, our data recovery experts can help. We use advanced methods to get back your important files and documents." },
  { title: "Won't Turn On", body: "If your device doesn't power on, our technicians will diagnose the issue. From power-supply complications to logic-board breakdowns, we'll pinpoint and rectify the problem so your system works again." },
  { title: "Running Slow", body: "It's frustrating when your Mac Pro is slow, but we're here to help. We'll clean up your system, remove unnecessary items, and upgrade parts as needed to improve its speed." },
  { title: "Mac Pro Crashing", body: "Many factors can lead to frequent crashes, such as hardware or program problems. Our experts will figure out why your system isn't working ideally and fix it so it performs properly again." },
  { title: "Freezing Problem", body: "Sometimes your device starts freezing and becomes unresponsive. We will address any software or hardware issues causing the freezes to guarantee continual operation." },
  { title: "Wi-Fi Issues", body: "Struggling with Wi-Fi connectivity on your Mac Pro? Our team will diagnose and resolve the issue, whether it's a software problem or a faulty Wi-Fi card." },
  { title: "Bluetooth Issues", body: "If you're having trouble connecting Bluetooth devices to your Mac Pro, our experts can help. We'll troubleshoot and resolve any software- or hardware-related Bluetooth issues." },
  { title: "Repairing Faulty Sound System", body: "Is your Mac Pro not producing any sound? Our technicians will identify the problem - from software settings to hardware issues - and implement a solution to restore your audio." },
];

const PROCESS = [
  "Thorough diagnostic assessment to identify the issue",
  "Detailed report and transparent quote for necessary repairs",
  "Genuine Apple and OEM-grade parts, with board-level micro-soldering for logic-board faults",
  "Free diagnosis and a fixed written quote before any work starts",
  "Data privacy protection during the repair",
  "Regular updates throughout the repair process",
  "Rigorous post-repair quality check",
  "Warranty on repair work",
  "Minimal downtime to get you back to using your system quickly",
];

const SIGNS = [
  "Frequent crashes or freezing",
  "Data loss or corruption issues",
  "Inability to update to the latest macOS version",
  "Error messages or warning pop-ups during use",
  "Overheating issues causing automatic shutdowns",
  "Sluggish performance or apps taking too long to load",
  "Strange noises like grinding, clicking, or whirring fans",
  "Physical damage like cracked screens, dents, or liquid spills",
];

const NOT_RESPONDING = [
  "Damaged ports could lead to parts breaking.",
  "The power button is stuck, so it won't turn on.",
  "A broken charging port doesn't send power.",
  "Damaged circuits on the logic board prevent electricity from reaching the intended components.",
];

const WHY = [
  "Some of our technicians have worked in the field for more than 10 years - and we don't charge a premium for their expertise. You don't pay extra for us to fix your device in Dubai.",
  "We focus on a personalised approach throughout the whole repair process and keep you informed until the problem is fixed.",
  "We never compromise on tools or workmanship. We pay more to get original parts, which is what keeps the quality of our fixes high - most repairs come with a warranty that lasts up to a year.",
  "Our main goal is to make sure every customer is happy, and we do that by bringing the best services right to your door. After booking your Mac Pro repair in Dubai, you can easily monitor the technicians' progress until you receive your device back.",
];

const TESTIMONIALS = [
  { name: "Zayn Ahmad", body: "Dubai's top Mac Pro repair service. The team works quickly to solve the issue. My gadget was liquid-damaged and there was no prospect of repair, yet the crew got it into a functional condition. Thank you to the crew - I highly recommend their services for any Mac-related concerns." },
  { name: "Jamshed", body: "I had a problem with my Mac Pro's display and was concerned about finding a reputable repair service in Dubai. The technicians not only rapidly resolved the issue but also gave excellent customer care. Highly recommended." },
];

const FAQS = [
  { q: "How much do Mac Pro repairs cost in Dubai?", a: "The kind and extent of damage determine the total cost. For example, screen replacement is the most expensive repair, and repairs for a newer model are significantly more costly. The difficulty level, the time required, and the cost of the part are the final factors that affect repair costs." },
  { q: "How can I know the status of my Mac Pro repair?", a: "We'll keep you informed about the progress of your repair, and our technicians will get in touch with you to let you know when it's complete." },
  { q: "Will my Mac Pro's data be protected during the repair?", a: "We respect our customers' data privacy. We do a pre-quality check and a post-repair quality test, and throughout the repair process all of your data is safe. Our quality test assures there are no unreported issues with your Mac both before and after the repair." },
  { q: "My Mac Pro is a few years old. Is it worth repairing?", a: "After assessing the exact issues with your system, we can make a recommendation. Depending on the condition and the repair cost, upgrading can sometimes be more cost-effective." },
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacProRepair() {
  useSeo(
    {
      title: "Mac Pro Repair Dubai - Independent Apple Desktop Specialists",
      description:
        "Expert Mac Pro repair in Dubai. Our Apple desktop specialists fix hardware, SSD, GPU, RAM & logic board issues. Fast turnaround & genuine parts.",
      path: "/mac-pro-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/mac-pro-repair-dubai.jpg"
        imageAlt="Mac Pro repair Dubai - tower workstation engineering infographic"
        tone="dark"
        variant="device"
        eyebrow="Mac Pro specialist"
        title="Professional Mac Pro Repair Dubai"
        subtitle="Your Mac Pro may be malfunctioning. Don't worry - MacBook Repair Dubai is the best place for Mac Pro repair in Dubai. Our expert staff can fix all problems, whether the screen is broken or the motherboard is damaged. Get in touch with us today."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Independent Apple desktop specialists</span>
          <span>·</span>
          <span>Genuine parts</span>
          <span>·</span>
          <span>Free pickup across Dubai</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Where can I get my Mac Pro repaired in Dubai?"
        answer="MacBook Repair Dubai repairs the Mac Pro, 2019 Intel and 2023 M2 Ultra, at its Concord Tower workshop in Dubai Media City. Services include GPU and logic-board repair, SSD upgrades, no-power diagnosis and macOS reinstalls, with free diagnosis, free citywide pickup, OEM-grade parts and a written warranty up to 12 months, in business since 2004."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Mac Repair", path: "/mac-repair-dubai" },
          { name: "Mac Pro Repair", path: "/mac-pro-repair-dubai" },
        ]} />
      </section>



      {/* Models */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Mac Pro models we repair</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Tap a model for its dedicated repair page with pricing, common faults and turnaround.</p>
        <div className="flex flex-wrap gap-2 mb-lg">
          {MAC_DESKTOP_MODELS.filter((m) => m.family === "pro").map((m) => (
            <Link key={m.slug} to={`/${m.slug}`} className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{m.name} →</Link>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-2 border border-border bg-bg-card rounded-md text-[13px] text-text mono">{m}</li>
          ))}
        </ul>
      </section>

      {/* Repair by chip generation */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Repair by chip generation</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Pick the Mac Pro generation you own for a dedicated repair page with model-specific faults and pricing.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-pro-intel-repair-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro Intel (2019 Xeon W) →</Link>
          <Link to="/mac-pro-m2-ultra-repair-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro M2 Ultra (2023) →</Link>
        </div>
      </section>

      {/* Common Mac Pro services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Common Mac Pro services</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Jump straight to the fix you need.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-pro-not-turning-on-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro Not Turning On →</Link>
          <Link to="/mac-pro-no-display-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro No Display →</Link>
          <Link to="/mac-pro-data-recovery-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro Data Recovery →</Link>
          <Link to="/mac-pro-full-diagnostic-dubai" className="px-3 py-1.5 border border-border bg-bg-card rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac Pro Full Diagnostic →</Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Our Mac Pro Repair Services Dubai</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Book appointment */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Book an Appointment Today!</h2>
        <p className="text-[16px] text-text-muted max-w-[75ch] mb-lg">
          Looking for an affordable repair solution to address your Mac Pro issues? Don't worry - our service team is here to help you around the clock. Book your appointment now for a free diagnosis, a fixed written quote, and a written warranty of up to 12 months, depending on the repair.
        </p>
        <CallButtons />
      </section>

      {/* Repair process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Our Repair Process</h2>
          <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
            {PROCESS.map((p) => (
              <li key={p} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">What are the signs your Mac Pro needs repair?</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {SIGNS.map((s) => (
            <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>
          ))}
        </ul>
      </section>

      {/* Not responding */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Why is your Mac Pro not responding?</h2>
          <p className="text-[16px] text-text-muted max-w-[75ch] mb-md">Is your Mac Pro not turning on? We offer trustworthy repair services in Dubai. Our engineers are licensed professionals. There are a few possible reasons why your device won't turn on:</p>
          <ul className="space-y-sm max-w-[80ch]">
            {NOT_RESPONDING.map((r) => (
              <li key={r} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Why Choose Us?</h2>
        <div className="space-y-md text-[16px] text-text-muted leading-relaxed max-w-[80ch]">
          {WHY.map((w) => <p key={w}>{w}</p>)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
          <div className="grid gap-md md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
                <div className="flex gap-1 mb-sm" role="img" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
                </div>
                <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
                <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-lg border border-border bg-bg-card rounded-md p-lg max-w-[60ch]">
            <h3 className="text-[18px] font-bold mb-sm">Business Hours</h3>
            <p className="text-[15px] text-text-muted">Monday - Saturday: 9:00 AM - 10:00 PM</p>
            <p className="text-[15px] text-text-muted">Sunday: our technicians are resting, but onsite service is available.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion tone="dark" items={FAQS} injectSchema />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Board-level Mac Pro repair in Dubai since 2004</h2>
          <p className="relative text-text-muted text-[16px] max-w-[60ch]">
            Our service team is here around the clock. Book your appointment now - WhatsApp or call for a free diagnosis and a transparent quote.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    <RelatedArticles path="/mac-pro-repair-dubai" />
    </PageShell>
  );
}
