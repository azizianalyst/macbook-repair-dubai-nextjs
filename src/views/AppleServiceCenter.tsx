"use client";
// Apple Service Center Dubai - faithful rebuild of the original WordPress page
// (user: "save data as I give you", 2026-06-01). Prior version is in git history.
import { Star, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
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

const BADGES = ["Professional Services", "Customer Satisfaction", "Same Day Service", "Friendly Team"];

const VALUES = [
  { title: "Integrity", body: "Genuine and Reliable" },
  { title: "Thorough", body: "Comprehensive Solutions" },
  { title: "Timely", body: "On-Time Solutions" },
  { title: "Professional", body: "Expert and Skilled" },
];

const SERVICES = [
  { title: "Screen Repair", body: "The most common issue with MacBooks is screen damage. If your screen has minor scratches or cracks and is in repairable condition, we recommend visiting one of our MacBook screen repair stores in Dubai - our experts treat it like a piece of cake." },
  { title: "Screen Replacement", body: "After diagnosis, we replace or repair your MacBook screen using only genuine Apple screens at a very reasonable cost. Trust us for quality service and authentic parts. Contact us today!" },
  { title: "Battery Replacement", body: "If your MacBook battery is draining quickly, heating up, or depleting to zero in no time, its life is likely over. Visit our store for a genuine MacBook battery replacement, or call us for a cost estimate." },
  { title: "Keyboard Repair", body: "If your MacBook keyboard is stuck, has missing keys, or has backlight issues, come to our MacBook repair center in Dubai. Our expert technicians restore your keyboard to its original condition with precision and care." },
  { title: "Keyboard Replacement", body: "If your MacBook has physical damage or a liquid spill, the keyboard may need replacing. We provide a quick, effective solution with a genuine Apple keyboard - often within 24 hours. Call us about parts availability." },
  { title: "Touch Bar Replacement", body: "The MacBook touch bar needs replacement if it has display issues, physical damage, or is unresponsive. Visit our store or call us for touch bar replacement in Dubai so you can keep using your device with a fully functional touch bar." },
  { title: "Logic Board Repair", body: "Is your MacBook not turning on, randomly shutting down, stuck on the Apple logo, or showing a blank screen? The logic board may be faulty. Our experienced experts handle MacBook logic-board issues with ease, restoring it to its original condition." },
  { title: "Data Recovery", body: "Lost data on your MacBook - from permanent deletion, hardware failure, software issues, or power surges? Our data recovery experts can retrieve your data while maintaining confidentiality." },
  { title: "SSD Upgrade", body: "Running out of storage space? An SSD upgrade increases storage and optimises overall performance. Visit our store today." },
  { title: "RAM Upgrade", body: "More RAM means your Mac can perform more tasks simultaneously, reducing slowdowns and crashes. Visit us if your MacBook is experiencing slow performance." },
  { title: "Software Troubleshooting", body: "Experiencing glitches, slowdowns, or system errors? Our skilled technicians diagnose and address software issues promptly, ensuring your MacBook operates smoothly." },
  { title: "Virus Removal", body: "Macs are less prone to viruses, but an infection can slow your device or corrupt data. If you suspect a virus but can't detect it, visit our MacBook service center in Dubai or contact us for assistance." },
  { title: "Trackpad Replacement", body: "Replacing a MacBook trackpad requires expert technicians, genuine parts, and the right tools - we have all of these at our workshop in Dubai, so your fingers experience the genuine feel of the trackpad." },
  { title: "Charging Port Repair", body: "Sometimes, even after replacing the adapter, your Mac won't restart. The port might be burnt or have another issue an expert can detect. Give us a call for a free opinion." },
  { title: "Speaker Repair", body: "Sound is integral to your device. If your Mac speaker is producing crackling sounds, it may need repair or replacement with genuine speakers. Call us to confirm availability." },
  { title: "Fan Replacement", body: "Is your MacBook overheating, or is the fan noisy or broken? It affects performance. Our experts can replace your MacBook fan within a few hours." },
  { title: "Overheating Issues Diagnosis and Repair", body: "Overheating can be caused by room temperature, fans not working, or blocked vents. Whatever the reason, our experts can diagnose and repair it for better performance of your Apple laptop." },
  { title: "Hinge Repair", body: "The hinge holds the screen at the perfect angle. If it's loose or stuck, it can affect other parts and expose the display cable to dust. Our expert team can repair it perfectly." },
  { title: "Wi-Fi and Bluetooth Issues Diagnosis and Repair", body: "If connectivity issues persist after checking settings and restarting, visit our service center for a thorough diagnosis and repair. Our team provides an on-the-spot time estimate for delivery." },
  { title: "Water / Liquid Damage Repair", body: "Once liquid enters your device, the keyboard may become faulty or the Mac may short-circuit. Visit our service shop in Dubai for complete testing and solutions." },
  { title: "Power Button Repair", body: "Press and hold the power button, check the power connections, and unplug all accessories - this may resolve the issue. If it persists, visit our store for a complete assessment." },
  { title: "SSD Data Migration", body: "MacBook data migration from HDD to SSD, or transferring SSD data to another Mac. All data is transferred securely with confidentiality maintained. Time required depends on the volume of data." },
  { title: "Backup and Restore Services", body: "Normally the Mac automatically restores your backup. If you need help with restoration or backup, our team can assist with a secure backup plan. Visit or call for further assistance." },
];

const PREP_STEPS = [
  { title: "iCloud Backup", items: ["Connect your device to a Wi-Fi network.", "Go to Settings (your name) and tap iCloud.", "Tap iCloud Backup.", "Select Back Up Now and stay connected to the internet until the process ends."] },
  { title: "Disable Security Features", items: ["Find My: Go to Settings and turn off Find My (iPhone/Mac/iPad).", "Passcodes & Passwords: Go to Settings → Touch ID & Passcode and disable it."] },
  { title: "Deauthorize Accounts", items: ["Deauthorize your device from iTunes (if applicable).", "Open iTunes, go to Account → Authorizations, and deauthorize it."] },
  { title: "Prepare Your Device", items: ["Remove the SIM card if your iPhone or iPad carries one.", "Unpair your Apple Watch from your iPhone."] },
];

const WHEN = [
  { title: "Physical Damage", body: "If your Apple product suffers any physical damage like a cracked screen, a broken panel, or a damaged case." },
  { title: "Battery Issues", body: "If your device's battery is draining quickly, not charging properly, or swelling." },
  { title: "Software Issues", body: "If your Apple device is unresponsive - perhaps due to updates or low memory - and it persists even after the latest update." },
  { title: "Internet Connectivity Problems", body: "If Wi-Fi, Bluetooth, or other connectivity issues persist even after basic troubleshooting." },
  { title: "Water Spill Damage", body: "If your device is exposed to water or other liquids, get it inspected by experts at an Apple service center." },
  { title: "Overheating", body: "A device that overheats frequently might indicate an internal problem that needs professional attention." },
  { title: "Failure to Self-Repair", body: "If you've attempted to fix the device yourself and the issue persists or has worsened." },
  { title: "Outdated Software", body: "Your device is stuck on an old software version and you're unable to update it." },
];

const BENEFITS = [
  { title: "Expert Assistance", body: "Receive professional help from expert technicians." },
  { title: "Quality Repairs", body: "Our team ensures high-quality repairs using only genuine parts." },
  { title: "Help Guidance", body: "24/7 online support available by live chat service." },
  { title: "Timely Service", body: "We make sure to fulfil all commitments we made with you, on time." },
  { title: "Extended Device Life", body: "Our skilled team enhances the longevity and performance of your device." },
  { title: "Technical Advice", body: "Receive guidance from experts on device maintenance and usage." },
  { title: "Remote Service", body: "Experts are available 24/7 for remote services." },
  { title: "Peace of Mind", body: "Relax knowing your device is in reliable hands." },
];

const TOOLS = [
  "Pentalobe Screwdrivers", "Plastic Opening Tools", "Heat Gun / iOpener", "Anti-Static Brushes",
  "Plastic Cards", "Torx Screwdrivers", "Suction Cup", "Nylon Probe Tool", "Microfiber Cloth",
  "Diagnostic Software", "Tri-Wing Screwdrivers", "Spudgers", "Magnetic Mat", "Battery Removal Tool",
  "Ultrasonic Cleaner", "T5 & T6 Screwdrivers", "Tweezers", "ESD Mat & Wrist Strap",
  "SIM Card Eject Tool", "Display Assembly Fixtures",
];

const TESTIMONIALS = [
  { name: "Julieta Encarnacion", body: "I enthusiastically recommend this shop for MacBook repair in Dubai. The staff are highly professional and exceptionally accommodating. They provide clear assessments of your laptop's condition and suggest appropriate solutions." },
  { name: "Aron", body: "These guys are magicians! My laptop suddenly had motherboard issues, but just a quick WhatsApp message and within an hour they were at my doorstep to pick it up. Isn't that amazing?" },
  { name: "Дмитрий Строков", body: "Very great service. Replaced battery, screen and keyboard for an old 2018 MacBook Pro. I've been nicely informed about the steps; the laptop was picked up and delivered to me very shortly after. Quality of work is very good - thank you guys." },
  { name: "Iryna Buchynska", body: "We had trouble with my sister's Mac and the guys went the extra mile by collecting it from our home after the rain. A good service for decent money. Definitely recommended." },
];

const FAQS = [
  { q: "Is it possible to drop off my Apple device, or do I have to schedule an appointment first?", a: "You can absolutely drop off your Apple device at our location. Our service is designed to be convenient and efficient, whether you schedule an appointment or drop off your device spontaneously." },
  { q: "Do you provide a warranty on repairs?", a: "Yes, we provide a warranty for your peace of mind. Depending on the type of repair, we offer a warranty covering both parts and labour, and our team will take care of any issues you have with your device after we repair it." },
  { q: "My device is out of warranty. Can you still repair it?", a: "Yes, we offer repair services for both in-warranty and out-of-warranty devices. Any device can be diagnosed and repaired by one of our skilled technicians." },
  { q: "Do you repair all types of Apple devices?", a: "Yes, we repair all Apple devices, including MacBook Pro, MacBook Air, iMac, iMac Pro, iPhone, and iPad. Whether it's a minor issue or a major hardware failure, our experienced Apple technicians can fix it quickly and efficiently." },
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

export default function AppleServiceCenter() {
  useSeo(
    {
      title: "Apple Service Center Dubai - Mac, iPhone & iPad Repairs",
      description:
        "Trusted Apple service center in Dubai. Certified technicians for MacBook, iPhone, iPad & iMac repairs. Genuine parts. Fast, reliable support.",
      path: "/apple-service-center-dubai",
    },
    [localBusiness(), organization()],
  );

  return (
    <PageShell>
      <div className="bg-primary text-on-primary -mb-[4rem]">
      <Hero
        variant="device"
        tone="dark"
        eyebrow="Apple Service Center"
        title="Apple Service Center Dubai - Trusted Repairs for MacBook, iMac & iMac Pro"
        subtitle="We offer fast, certified repairs for your MacBook Pro, MacBook Air and other Apple devices. From maintenance and cleaning to screen replacements and battery fixes, our expert technicians use only genuine Apple parts. Join hundreds of satisfied customers and experience our 5.0-star service today."
      >
        <p className="mt-md flex flex-wrap items-center gap-md text-[14px] text-on-primary-muted">
          <span className="flex items-center gap-1"><Star size={16} className="fill-star text-star" aria-hidden /> Customer rating 5.0</span>
          <span>·</span>
          <span>Genuine Apple parts</span>
          <span>·</span>
          <span>Same-day service</span>
        </p>
      </Hero>

      <USPStrip tone="dark" />

      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <BreadcrumbTrail tone="dark" trail={[
          { name: "Home", path: "/" },
          { name: "Apple Service Center", path: "/apple-service-center-dubai" },
        ]} />
      </section>

      {/* Trust badges + values */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-xl">
        <ul className="flex flex-wrap gap-2 mb-lg">
          {BADGES.map((b) => (
            <li key={b} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[14px] text-on-primary">{b}</li>
          ))}
        </ul>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <article key={v.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-1">{v.title}</h3>
              <p className="text-[14px] text-on-primary-muted">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Repair Services for Your Apple Device</h2>
          <p className="text-[16px] text-on-primary-muted max-w-[70ch] mb-lg">MacBook Pro / Air services - we also service iPhone, iPad and iMac. The most-requested MacBook repairs:</p>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
                <h3 className="text-[17px] font-bold mb-sm">{s.title}</h3>
                <p className="text-[15px] text-on-primary-muted leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-lg"><CallButtons /></div>
        </div>
      </section>

      {/* Prep steps */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Important Steps Before Taking Your Device for Service</h2>
        <p className="text-[16px] text-on-primary-muted max-w-[75ch] mb-lg">Before bringing in your Apple device, follow a few important steps to keep your data safe and protected:</p>
        <div className="grid gap-md sm:grid-cols-2">
          {PREP_STEPS.map((g) => (
            <article key={g.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <h3 className="text-[18px] font-bold mb-sm">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-sm text-[15px] text-on-primary-muted"><CheckCircle2 size={18} className="text-accent-bright flex-shrink-0 mt-1" aria-hidden /> {it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* When to seek service */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">How Soon Should You Seek Our Apple Repair Services?</h2>
          <p className="text-[16px] text-on-primary-muted max-w-[75ch] mb-lg">Regular maintenance and timely repairs prolong the life of your Apple device. Visit our service center in these situations:</p>
          <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
            {WHEN.map((w) => (
              <article key={w.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
                <h3 className="text-[16px] font-bold mb-sm">{w.title}</h3>
                <p className="text-[14px] text-on-primary-muted leading-relaxed">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Benefits of Engaging with Our Apple Service Center</h2>
        <p className="text-[16px] text-on-primary-muted max-w-[80ch] mb-lg">We are committed to providing incredible service. Our team collaborates closely with you to develop a comprehensive plan for any upgrade or servicing needs. Choose us for the following reasons:</p>
        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <article key={b.title} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
              <h3 className="text-[16px] font-bold mb-sm">{b.title}</h3>
              <p className="text-[14px] text-on-primary-muted leading-relaxed">{b.body}</p>
            </article>
          ))}
        </div>
        <p className="text-[15px] text-on-primary-muted leading-relaxed max-w-[80ch] mt-lg">
          Our recruitment process is so organised that all technicians undergo assessment tasks before being hired - that's why our team consists of the best Apple technicians in the UAE. We also have an audit team that gathers customer reviews to ensure no customer is dissatisfied. Once your device is optimised, we conduct comprehensive testing to confirm repairs or upgrades are successful, and our experts provide guidance on setting up regular data backups to prevent future data loss.
        </p>
      </section>

      {/* Reviews */}
      <section className="bg-white/[0.02] border-y border-white/10 mt-3xl py-3xl">
        <div className="mx-auto max-w-content px-5 md:px-6">
          <h2 className="text-[28px] md:text-[32px] mb-sm">Customer Reviews</h2>
          <p className="text-[16px] text-on-primary-muted mb-lg">Don't take just our word for it - our satisfied customers say it best.</p>
          <div className="grid gap-md md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="border border-white/10 bg-white/[0.04] rounded-md p-lg">
                <div className="flex gap-1 mb-sm" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-star text-star" aria-hidden />)}
                </div>
                <blockquote className="text-[15px] text-on-primary-muted leading-relaxed">{t.body}</blockquote>
                <figcaption className="mt-sm font-semibold text-on-primary">- {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-sm">Tools We Use for Apple Repairs</h2>
        <p className="text-[16px] text-on-primary-muted max-w-[80ch] mb-lg">Apple products are built with premium materials, so our repair tools are of exceptionally high quality too. These tools help ensure Apple devices are repaired safely, efficiently, and in accordance with Apple's standards.</p>
        <ul className="flex flex-wrap gap-2">
          {TOOLS.map((t) => (
            <li key={t} className="px-3 py-1 border border-white/10 bg-white/[0.04] rounded-md text-[13px] text-on-primary-muted">{t}</li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-md">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} injectSchema tone="dark" />
      </section>

      {/* Location */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <h2 className="text-[28px] md:text-[32px] mb-lg">Where to Find Us</h2>
        <LocationBlock tone="dark" />
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-content px-5 md:px-6 mt-3xl">
        <div className="relative overflow-hidden border border-white/10 bg-white/[0.04] rounded-md p-xl md:p-2xl flex flex-col items-start gap-md">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-10 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="relative flex flex-col items-start gap-md">
          <h2 className="text-on-primary text-[28px] md:text-[32px] max-w-[30ch]">Get a technician's opinion today</h2>
          <p className="text-on-primary-muted text-[16px] max-w-[60ch]">
            Certified technicians, genuine Apple parts, same-day service. WhatsApp or call us for a free assessment of your Apple device.
          </p>
          <CallButtons />
          </div>
        </div>
      </section>
      </div>
    </PageShell>
  );
}
