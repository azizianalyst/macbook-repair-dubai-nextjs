"use client";
import { withSlash } from "@/lib/utils";
// Mac Mini Repair Dubai - faithful rebuild of the live WordPress /mac-mini-repair-dubai page
// (user: "same data", 2026-06-01; pulled from the live site). Prior DevicePageTemplate version in git history.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { PageShell } from "@/components/layout/PageShell";
import { QuickAnswer } from "@/components/blocks/QuickAnswer";
import { ReviewGrid } from "@/components/blocks/ReviewGrid";
import { pickReviews, reviewDevicesForPath } from "@/lib/find-reviews";
import { RelatedArticles } from "@/components/blocks/RelatedArticles";
import { LeadForm } from "@/components/blocks/LeadForm";
import { PRESETS } from "@/data/form-presets";
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
  { label: "Mac Pro", href: "/mac-pro-repair-dubai" },
  { label: "Mac Studio", href: "/mac-studio-repair-dubai" },
];

const MODELS = [
  "Apple Mac mini M4 / M4 Pro (2024)",
  "Apple Mac mini M2 / M2 Pro (2023)",
  "Apple Mac mini (M1, 2020)",
  "Apple Mac mini Intel i3/i5/i7 (2018)",
];

const SPECS = [
  { title: "Mac Mini M4 Repair", items: ["10-core CPU", "12-core GPU", "Up to 24GB unified memory", "100GB/s memory bandwidth"] },
  { title: "Mac Mini M4 Pro Repair", items: ["Up to 12-core CPU", "Up to 16-core GPU", "Up to 32GB unified memory", "200GB/s memory bandwidth"] },
];

const PROBLEMS = [
  { title: "Mac Startup Issues", body: "Startup problems are usually caused by hardware conflicts or system problems, so you need help from a professional to carefully fix the issue." },
  { title: "The Newest OS Won't Work", body: "The OS is the most important part of a Mac Mini. If it won't update or run, professional service is the way to resolve it." },
  { title: "Components Do Not Work", body: "If some parts of your Mac Mini aren't working right, they can slow it down and stop you from fully using all of its features." },
  { title: "Apps Are Running Slowly", body: "This is often caused by not having enough memory, which slows down the system and apps over time. The issue needs the right diagnosis to fix." },
];

const HARDWARE = ["RAM upgrades", "Display issues", "Hard disk repair", "General cleaning", "Storage upgrades", "Logic board repair", "Graphic card repair", "Power supply issues", "Liquid damage repair", "Cooling system repair and cleaning"];
const SOFTWARE = ["Disk Utility errors", "Startup problems", "Slow performance", "Current data backup", "Crashes and freezes", "Virus and malware removal", "Network connectivity issues", "iCloud synchronization issues", "macOS repair, reformatting, installing and upgrading", "Install Windows as a Boot Camp dual boot"];

const WHY = [
  { title: "Live Chat", body: "Talk to our online chat support manager for professional help with any kind of repair. Our online customer service is always open and easy to use." },
  { title: "Customer Happiness", body: "We care most about your satisfaction. Our goal is to provide a great repair service and make sure you're happy with our work." },
  { title: "Certified Technicians", body: "With years of experience fixing Apple products, our techs know how to service and resolve problems quickly." },
  { title: "Original Parts", body: "We only use OEM parts, backed by strong partnerships with approved Apple suppliers so we always have access to the newest and best parts." },
  { title: "100% Data Privacy", body: "We do everything in our power to keep your information and data safe. Your privacy is protected while we fix your device." },
  { title: "Easy Access", body: "Walk in to our Concord Tower workshop, near the Palm Jumeirah tram stop, with parking on site. Can't leave the office? Book any same-day courier app to send it to us, or ask for a paid onsite visit, subject to technician availability." },
];

const TIPS = [
  "Take advantage of the compact size by creating a minimalist desk setup.",
  "Consider mounting your Mac Mini behind your display for a clutter-free environment.",
  "Upgrade the memory to enhance performance and enable smoother multitasking.",
  "Personalise and expand functionality by adding accessories that suit your needs.",
  "Keep the latest software and security updates installed for optimal performance and protection.",
  "Invest in a high-quality external display for a more immersive, productive workspace.",
  "Use built-in apps like Siri, Handoff, and iCloud to move work between your Mac and your other Apple devices.",
  "Explore accessories such as external storage solutions and wireless keyboards.",
  "Consider using your Mac Mini as a media server or home-theatre PC.",
  "Join online communities and forums to share tips and discover new ways to use your device.",
];

// Hand-typed testimonials removed here (content-truth audit 2026-09-25): names not in the
// verified Google review library. Real reviews render below via pickReviews().

const FAQS = [
  { q: "What types of issues can a Mac Mini repair service fix?", a: "We cover many issues, including hardware problems like faulty hard drives, RAM, and power supply issues. We also fix software-related problems such as OS crashes, data recovery, and virus removal. Our experienced technicians can diagnose and repair any problem." },
  { q: "How long does it typically take to repair a Mac Mini?", a: "The repair time depends on the complexity of the issue and the availability of replacement parts. We strive to complete most repairs within 24 to 48 hours; more extensive repairs may take 3-5 business days. We provide an estimated repair time after diagnosing the problem." },
  { q: "Can you upgrade my Mac Mini for better performance?", a: "Yes! We offer RAM upgrades, SSD installations, and macOS optimization services to enhance your Mac Mini's speed and overall performance. Many older models can perform like new after a professional upgrade." },
  { q: "Why does my Mac mini keep saying 'Disk Not Ejected Properly' and dropping ports?", a: "Check the power budget before suspecting a port fault. A Mac mini can only power so many bus-powered devices; past that limit it shuts a port down, and a drive hanging off it ejects. A docking station that takes its power from one mini port and feeds several drives is the usual cause. Move the drives to a self-powered hub, or plug one drive straight into the mini with the monitor as the only other device and see if it stays mounted. If a single drive still ejects direct, change the cable or enclosure. If the 3.5mm audio only comes back when you reseat the plug, that is socket wear, which is a bench repair." },
  { q: "Can I walk in with my Mac mini without an appointment?", a: "Yes. Bring your Mac mini to Office #45, 10th Floor, Concord Tower, a 3-minute walk from the Palm Jumeirah tram stop, with parking on site. WhatsApp a photo and the serial number first and we quote before you travel. We message you when it is ready to collect. If you can't come in, send it by a same-day courier you book and WhatsApp us the tracking link." },
];

function CallButtons() {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button asChild variant="whatsapp" size="lg">
        <a href={withSlash(NAP.whatsappUrl)} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> WhatsApp Us</a>
      </Button>
      <Button asChild variant="secondary" size="lg">
        <a href={`tel:${NAP.phoneE164}`}><Phone aria-hidden /> Call Now</a>
      </Button>
    </div>
  );
}

export default function MacMiniRepair() {
  const reviews = pickReviews([], { devices: reviewDevicesForPath("/mac-mini-repair-dubai"), min: 3, seed: "/mac-mini-repair-dubai" });
  useSeo(
    {
      title: "Mac Mini Repair Dubai - M1, M2, Intel Logic Board & SSD Experts",
      description:
        "Trusted Mac Mini repair in Dubai. Certified technicians fix M1, M2 & Intel models - logic board, SSD, RAM, and power supply repairs.",
      path: "/mac-mini-repair-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-bg-alt text-text -mb-[4rem]">
      <Hero
        image="/images/topics/mac-mini-repair-dubai.jpg"
        imageAlt="Mac mini M4 repair Dubai - compact desktop teardown infographic"
        tone="dark"
        variant="device"
        eyebrow="Mac Mini specialist"
        title="Expert Mac Mini Repair Dubai"
        subtitle="Is your Mac Mini running slowly, making strange noises, or not turning on? If you're facing performance issues or need Mac Mini troubleshooting, contact our expert repair service. Our trained technicians get your Mac Mini running like new in just a few minutes."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-text-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Independent Apple specialists</span>
          <span>·</span>
          <span>OEM parts</span>
          <span>·</span>
          <span>Walk-in workshop, Media City</span>
        </p>
      </Hero>

      {/* Answer-first capsule (AEO/BLUF) */}
      <QuickAnswer
        tone="dark"
        question="Where can I get my Mac mini repaired in Dubai?"
        answer="MacBook Repair Dubai repairs every Mac mini. Intel, M1, M2, M2 Pro, M4 and M4 Pro, at its Concord Tower workshop in Dubai Media City. Common fixes include no-power, SSD and RAM upgrades, port repair and macOS reinstalls, with free diagnosis, walk-in service near the Palm Jumeirah tram stop, OEM-grade parts and a written warranty of 15 days to 2 years, since 2004."
      />

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Repair", path: "/apple-repair-dubai" },
          { name: "Mac Repair", path: "/mac-repair-dubai" },
          { name: "Mac Mini Repair", path: "/mac-mini-repair-dubai" },
        ]} />
      </section>



      {/* Models + specs */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Mac Mini models we repair</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Tap a model for its dedicated repair page with pricing, common faults and turnaround.</p>
        <div className="flex flex-wrap gap-2 mb-lg">
          {MAC_DESKTOP_MODELS.filter((m) => m.family === "mini").map((m) => (
            <Link key={m.slug} to={("mergedInto" in m && m.mergedInto) || `/${m.slug}`} className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">{m.name} →</Link>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2 mb-lg">
          {MODELS.map((m) => (
            <li key={m} className="px-3 py-2 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-text mono">{m}</li>
          ))}
        </ul>
        <div className="grid gap-md sm:grid-cols-2">
          {SPECS.map((s) => (
            <article key={s.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm">{s.title}</h3>
              <ul className="space-y-1">
                {s.items.map((it) => <li key={it} className="text-[14px] text-text-muted">{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Repair by chip generation */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Repair by chip generation</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Jump to the chip-specific repair page for your Mac mini.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-mini-m1-2020-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini M1 (2020) →</Link>
          <Link to="/mac-mini-m2-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini M2 / M2 Pro (2023) →</Link>
          <Link to="/mac-mini-m4-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini M4 / M4 Pro (2024) →</Link>
          <Link to="/mac-mini-m6-repair-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini M6 / M5 Pro (2026) →</Link>
        </div>
      </section>

      {/* Common Mac mini services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Common Mac mini services</h2>
        <p className="text-[15px] text-text-muted max-w-[70ch] mb-md">Go straight to the fix you need.</p>
        <div className="flex flex-wrap gap-2">
          <Link to="/mac-mini-not-turning-on-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini Not Turning On →</Link>
          <Link to="/mac-mini-no-display-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini No Display →</Link>
          <Link to="/mac-mini-overheating-fix-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini Overheating →</Link>
          <Link to="/mac-mini-ssd-upgrade-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini SSD Upgrade →</Link>
          <Link to="/mac-mini-data-recovery-dubai" className="px-3 py-1.5 border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md text-[13px] text-accent hover:bg-bg-alt transition-colors">Mac mini Data Recovery →</Link>
        </div>
      </section>

      {/* Common problems */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Common Mac Mini Problems</h2>
          <div className="grid gap-md sm:grid-cols-2">
            {PROBLEMS.map((p) => (
              <article key={p.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{p.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Our Mac Mini Repair Services</h2>
        <div className="grid gap-lg md:grid-cols-2">
          <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Hardware Repair</h3>
            <ul className="grid gap-sm sm:grid-cols-2">
              {HARDWARE.map((h) => <li key={h} className="flex gap-sm text-[14px] text-text-muted"><CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {h}</li>)}
            </ul>
          </article>
          <article className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
            <h3 className="text-[18px] font-bold mb-sm">Software Repair</h3>
            <ul className="grid gap-sm sm:grid-cols-2">
              {SOFTWARE.map((h) => <li key={h} className="flex gap-sm text-[14px] text-text-muted"><CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {h}</li>)}
            </ul>
          </article>
        </div>
        <div className="mt-lg"><CallButtons /></div>
      </section>

      {/* Why choose us */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Why Choose Us?</h2>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w) => (
              <article key={w.title} className="border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg">
                <h3 className="text-[18px] font-bold mb-sm">{w.title}</h3>
                <p className="text-[15px] text-text-muted leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Tips for Mac Mini Lovers</h2>
        <ul className="grid gap-sm sm:grid-cols-2 max-w-[90ch]">
          {TIPS.map((t) => <li key={t} className="flex gap-sm text-[15px] text-text-muted"><CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-1" aria-hidden /> {t}</li>)}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-bg-alt border-y border-border mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-md">Testimonials</h2>
          <ReviewGrid reviews={reviews} tone="dark" />
          <div className="mt-lg border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-lg max-w-[60ch]">
            <h3 className="text-[18px] font-bold mb-sm">Business Hours</h3>
            <p className="text-[15px] text-text-muted">Monday - Thursday and Saturday: 9:00 AM - 7:00 PM. Friday: 9:00 AM - 12:00 PM and 2:00 PM - 7:00 PM.</p>
            <p className="text-[15px] text-text-muted">Sunday: closed.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} injectSchema />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-border/70 bg-bg-card ring-1 ring-black/[0.03] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <h2 className="relative text-text text-[28px] md:text-[32px] max-w-[30ch]">Book Your Discounted Mac Mini Repair Appointment</h2>
          <p className="relative text-text-muted text-[16px] max-w-[70ch]">
            We fix all kinds of problems at our Media City workshop. Walk in, send it by a same-day courier you book, or ask for a paid onsite visit, subject to technician availability. Our skilled, friendly technicians know Mac Minis inside out and explain everything. Contact us today for a free quote.
          </p>
          <div className="relative"><CallButtons /></div>
        </div>
      </section>
      </div>
    {/* Lead form (template-audit 2026-09-24: page shipped with none) */}
    <section className="mx-auto max-w-content px-5 md:px-6 mt-[80px]" aria-labelledby="page-lead">
      <h2 id="page-lead" className="text-[26px] md:text-[32px] font-bold mb-md">Get a free quote</h2>
      <LeadForm preset={PRESETS.repair} sourcePath="/mac-mini-repair-dubai" defaultDeviceType="Mac mini / Studio / Pro" />
    </section>

    <RelatedArticles path="/mac-mini-repair-dubai" />
    </PageShell>
  );
}
