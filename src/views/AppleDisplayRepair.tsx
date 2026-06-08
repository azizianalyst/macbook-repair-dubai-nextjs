"use client";
// Apple Display Repair Dubai - faithful rebuild of the live WordPress /apple-display-repair-dubai page
// (user: "all old data which I give you", 2026-06-01; pulled from live site). NEW dedicated page -
// the URL was previously 301'd to /apple-repair-dubai; that redirect has been removed.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/blocks/Hero";
import { USPStrip } from "@/components/blocks/USPStrip";
import { BreadcrumbTrail } from "@/components/blocks/BreadcrumbTrail";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { LocationBlock } from "@/components/blocks/LocationBlock";
import { Button } from "@/components/ui/button";
import { useSeo } from "@/hooks/use-seo";
import { localBusiness, organization } from "@/lib/schema";
import { NAP } from "@/content/site";

const SIBLINGS = [
  { label: "Mac Repair", href: "/mac-repair-dubai" },
  { label: "iMac", href: "/imac-repair-dubai" },
  { label: "MacBook Pro", href: "/macbook-pro-repair-dubai" },
  { label: "iPhone", href: "/iphone-repair-dubai" },
  { label: "iPad", href: "/ipad-repair-dubai" },
];

const SERVICES = [
  { title: "Screen Replacement", body: "A broken Apple monitor screen can be fixed or replaced. We only use high-quality replacement screens so your display looks and works like new." },
  { title: "Backlight Repair", body: "If your Apple screen's lighting is dim or doesn't work, our experts diagnose the backlight problem and fix it so your screen is back to normal brightness." },
  { title: "Color Calibration", body: "If your Apple screen's colours don't look right, we adjust them. We use special software and tools to get the best colour accuracy and stability." },
  { title: "Brightness Issues Fix", body: "Screen too dim or too bright? We diagnose the issue and check the settings, hardware, and connections to make sure brightness levels are right." },
  { title: "Connection Issues Repair", body: "If your Apple display isn't connecting properly to your computer, we find out why and fix any link issues, such as cable and port problems." },
  { title: "Flickering Fix", body: "We fix Apple screens that flicker or have intermittent problems - whether it's a loose connection or a hardware fault, our experts find and fix the underlying issue." },
  { title: "Cracked Screen Repair", body: "Is your Apple display's screen broken or cracked? We replace the damaged screen with a new one, restoring it to its original condition." },
  { title: "Resolution Issues", body: "We address distorted resolution on your Apple display, checking the hardware and settings to verify the display runs at its ideal resolution." },
  { title: "Power Supply Repair", body: "Sometimes the system can't get enough power to turn on. We fix Apple displays that won't power on or have power problems." },
  { title: "Diagnostic Services", body: "Need help identifying the problem? Our diagnostic services include a complete examination of your display to uncover any issues, with a detailed report." },
  { title: "Port Repair", body: "Issues with the ports on your Apple display? We repair or replace faulty HDMI, DisplayPort, or USB-C ports to ensure reliable connectivity." },
];

const PROCESS = [
  { title: "Consultation", body: "We discuss the issues you're experiencing with your Apple device to diagnose the problem accurately." },
  { title: "Diagnostic Testing", body: "Our experts run a full set of diagnostic tests to find the exact faults with your display." },
  { title: "Repair Plan", body: "We provide a complete repair plan that includes an estimate of how much it will cost." },
  { title: "Fixing", body: "Our skilled techs carefully fix your Apple display by following the plan and using high-quality spare parts where required." },
  { title: "Quality Check", body: "Once the repair is complete, we conduct a thorough quality check to ensure your device functions properly and meets our high standards." },
  { title: "Cleaning and Packing", body: "We clean your Apple device and package it in a protective box so you can pick it up or have it delivered." },
];

const SIGNS = [
  "Screen cracks or scratches - deep cracks or scratches need fixing or replacement.",
  "Spots on screen - darker or brighter areas can indicate screen damage or backlight problems.",
  "Flickering images - wavy or distorted pictures may point to the graphics card, cables, or screen.",
  "Unresponsive screen - on touch-enabled screens, the touch feature may need fixing.",
  "No display or power - could be the power supply, cables, or internal parts.",
  "Strange colours or tints - distorted colours or an odd tint may need repair.",
  "Lines going across or down the screen - usually a technical problem that requires attention.",
];

const MODELS = [
  { title: "Studio Display", body: "The Studio Display is a 27-inch 5K Retina screen made to work with Mac computers. We can help with a broken screen, a faulty backlight, or colour problems - our techs know how to diagnose and fix Studio Displays." },
  { title: "Pro Display XDR", body: "The 32-inch Pro Display XDR is a high-end 6K Retina monitor for professional use, with Extreme Dynamic Range (XDR) and a wide colour gamut. For a broken screen, brightness issues, or connection problems, our team knows its specific needs and built-in features." },
];

const WHY = ["On-site repair", "Original screens", "Happy customers", "Quality assurance", "Transparent pricing", "Post-repair support", "Warranty on all repairs", "Same-day repair service", "Quick and honest screen repair", "The lowest prices on all screens", "Repair techs with years of experience", "Free same-day pick-up and delivery"];

const TESTIMONIALS = [
  { name: "Salman Ahmed, Graphic Designer", body: "I was heartbroken when I broke the screen on my Apple system by accident, but a reliable repair service saved the day. Their techs were nice, knew what they were doing, and worked quickly. They used a genuine Apple part, and now my system looks and works like new. I strongly advise their services!" },
  { name: "Mohammed Khalid, Student", body: "I looked online and found a reputable repair service. They quickly figured out what was wrong and replaced the broken LCD panel. The fix took very little time and cost a very fair amount. I'm very pleased with their service." },
  { name: "Fatima Hassan, Businesswoman", body: "I depend on my MacBook for daily tasks, so I freaked out when the screen went black. A coworker told me about this reliable repair service. Their technicians were skilled and explained the repair fully. They fixed the screen in record time and I was back to work right away. I'll tell all my friends and coworkers." },
];

const FAQS = [
  { q: "How long does it take to fix the screen on an Apple device?", a: "How long it takes varies on how bad the damage is, but most screen repairs can be done in 24 to 48 hours." },
  { q: "Do you use genuine Apple parts to repair?", a: "Yes, we only use original Apple parts to ensure the best quality and fit with your system." },
  { q: "Can you fix a display that has been ruined by water?", a: "We can fix Apple displays that have been damaged by water, but the success of the fix depends on how bad the damage is. We suggest you bring your device in for a technical check." },
  { q: "Are there any guarantees when you fix an Apple Display?", a: "Yes, we provide a limited warranty when we fix your Apple display. The length of the warranty may differ for each repair job." },
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

export default function AppleDisplayRepair() {
  useSeo(
    {
      title: "Apple Display Repair Dubai - Studio Display & iMac Screen Fix",
      description:
        "Expert Apple display repair in Dubai. We fix Studio Display, iMac, and MacBook screens using genuine parts. Fast, professional service by expert Apple technicians.",
      path: "/apple-display-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        tone="dark"
        variant="device"
        eyebrow="Apple Display specialist"
        title="Apple Display Repair Dubai"
        subtitle="Device failure always seems to happen at the most unplanned moment. Our expert repair service is here with top Apple Display repair in Dubai. Throughout the process, your device's functionality and preferences remain the same."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Genuine Apple parts</span>
          <span>·</span>
          <span>Studio Display &amp; Pro Display XDR</span>
          <span>·</span>
          <span>Same-day pick-up &amp; delivery</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Apple Display Repair", path: "/apple-display-repair-dubai" },
        ]} />
      </section>

      <section className="mx-auto max-w-content px-5 md:px-6 mt-lg">
        <p className="flex flex-wrap items-center gap-2 text-[14px] text-text-muted">
          <span className="font-semibold text-text">We also repair:</span>
          {SIBLINGS.map((s) => (
            <Link key={s.href} to={s.href} className="px-3 py-1 border border-border bg-bg-card rounded-md text-accent hover:bg-bg-alt transition-colors">{s.label}</Link>
          ))}
        </p>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Range of Apple Display Repair Services</h2>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="border border-border bg-bg-card rounded-md p-lg">
              <h3 className="text-[17px] font-bold mb-sm">{s.title}</h3>
              <p className="text-[15px] text-text-muted leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="text-[16px] text-text-muted max-w-[75ch] mt-lg">
          We only use authentic Apple parts to maintain your device's performance and image quality. Visit our repair shop today and we'll quickly restore your display's appearance and functionality.
        </p>
        <div className="mt-lg"><CallButtons /></div>
      </section>

      {/* Process */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-lg">Our Apple Display Repair Process</h2>
          <ol className="space-y-md max-w-[80ch]">
            {PROCESS.map((step, i) => (
              <li key={step.title} className="flex gap-md">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 text-accent font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <h3 className="text-[17px] font-bold mb-1">{step.title}</h3>
                  <p className="text-[15px] text-text-muted leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Signs Your Apple Display Needs Repair / Replacement</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[95ch]">
          {SIGNS.map((s) => <li key={s} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {s}</li>)}
        </ul>
      </section>

      {/* Models */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Apple Display Models</h2>
          <div className="grid gap-md md:grid-cols-2">
            {MODELS.map((m) => (
              <article key={m.title} className="border border-border bg-bg-card rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{m.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Why Choose Us?</h2>
        <p className="text-[16px] text-text-muted max-w-[75ch] mb-md">Despite Apple's advanced technology, accidents and improper usage still happen. MacBook Repair Dubai is the best place to get your Apple display fixed. Here's why:</p>
        <ul className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3 max-w-[95ch]">
          {WHY.map((w) => <li key={w} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {w}</li>)}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
          <div className="grid gap-md md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-border bg-bg-card rounded-md p-lg">
                <div className="flex gap-1 mb-sm" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
                </div>
                <blockquote className="text-[15px] text-text-muted leading-relaxed">{t.body}</blockquote>
                <figcaption className="mt-sm font-semibold text-text">- {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion tone="dark" items={FAQS} injectSchema />
        <div className="mt-lg border border-border bg-bg-card rounded-md p-lg max-w-[60ch]">
          <h3 className="text-[18px] font-bold mb-sm">Business Hours</h3>
          <p className="text-[15px] text-text-muted">Monday - Saturday: 9:00 AM - 10:00 PM</p>
          <p className="text-[15px] text-text-muted">Sunday: our technicians are resting, but onsite service is available.</p>
        </div>
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border bg-bg-card rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[34ch]">Trust MacBook Repair Dubai for your Apple display</h2>
          <p className="relative text-text-muted text-[16px] max-w-[70ch]">
            Genuine Apple parts, expert technicians, and fast turnaround. WhatsApp or call us to restore your Studio Display, Pro Display XDR, or Mac screen.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
