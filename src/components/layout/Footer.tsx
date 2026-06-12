"use client";
import { Link } from "@/lib/router-compat";
import { Facebook, Instagram, Youtube, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { NAP, REVIEW_COUNT } from "@/content/site";
import { CATEGORIES } from "@/content/blog-posts";

// Footer follows the header/hero look: dark band, green `accent` accents,
// glass surfaces, ambient glow. Links focus on Mac + high-ticket services (logic
// board, water damage, overheating, GPU, SSD, data recovery) - the jobs worth most.

// High-ticket MacBook services first, common ones after.
const MACBOOK_SERVICES = [
  { label: "Logic Board Repair",       href: "/macbook-logic-board-repair-dubai" },
  { label: "Water Damage Repair",      href: "/macbook-water-damage-repair-dubai" },
  { label: "Overheating & Fan Repair", href: "/macbook-overheating-fix-dubai" },
  { label: "GPU Repair",               href: "/macbook-gpu-repair-dubai" },
  { label: "Data Recovery",            href: "/macbook-data-recovery-dubai" },
  { label: "SSD Upgrade",              href: "/macbook-ssd-upgrade-dubai" },
  { label: "Screen Repair",            href: "/macbook-screen-repair-dubai" },
  { label: "Battery Replacement",      href: "/macbook-battery-replacement-dubai" },
];

const MAC_DESKTOP_SERVICES = [
  { label: "iMac Repair",              href: "/imac-repair-dubai" },
  { label: "iMac Screen Repair",       href: "/imac-screen-repair-dubai" },
  { label: "iMac Logic Board Repair",  href: "/imac-logic-board-repair-dubai" },
  { label: "iMac GPU Repair",          href: "/imac-gpu-repair-dubai" },
  { label: "Mac mini Repair",          href: "/mac-mini-repair-dubai" },
  { label: "Mac Studio Repair",        href: "/mac-studio-repair-dubai" },
  { label: "Mac Pro Repair",           href: "/mac-pro-repair-dubai" },
  { label: "Apple Display Repair",     href: "/apple-display-repair-dubai" },
  { label: "Mac Data Recovery",        href: "/mac-data-recovery-dubai" },
];

const IPHONE_IPAD_SERVICES = [
  { label: "iPhone Repair",             href: "/iphone-repair-dubai" },
  { label: "iPhone Screen Repair",      href: "/iphone-screen-repair-dubai" },
  { label: "iPhone Battery Replacement", href: "/iphone-battery-replacement-dubai" },
  { label: "iPhone Water Damage Repair", href: "/iphone-water-damage-repair-dubai" },
  { label: "iPad Repair",               href: "/ipad-repair-dubai" },
  { label: "iPad Screen Repair",        href: "/ipad-screen-repair-dubai" },
  { label: "iPad Battery Replacement",  href: "/ipad-battery-replacement-dubai" },
  { label: "iPod touch Repair",         href: "/ipod-touch-7-repair-dubai" },
];

// Money/coverage pages get their own column — previously buried in a 14-link
// "Company" dump (commit 2cd8f37 surfaced them; this gives them a labelled home).
const PRICING_WARRANTY_LINKS = [
  { label: "Transparent pricing",        href: "/pricing" },
  { label: "Repair cost calculator",     href: "/macbook-repair-cost-calculator-dubai" },
  { label: "Warranty - up to 12 months", href: "/warranty" },
  { label: "AppleCare repair",           href: "/applecare-macbook-repair-dubai" },
  { label: "Out-of-warranty repair",     href: "/out-of-warranty-apple-repair-dubai" },
  { label: "Annual maintenance (AMC)",   href: "/annual-maintenance-contract-dubai" },
  { label: "MacBook insurance",          href: "/macbook-insurance-dubai" },
  { label: "Apple repair programmes",    href: "/apple-repair-programs-dubai" },
  { label: "Apple Store vs independent", href: "/where-to-repair-macbook-dubai" },
];

const COMPANY_LINKS = [
  { label: "About us - since 2004",           href: "/about" },
  { label: "Apple Service Center Dubai",      href: "/apple-service-center-dubai" },
  { label: `${REVIEW_COUNT}+ Google reviews`, href: "/reviews" },
  { label: "MacBook guides & how-tos",        href: "/macbook-guides" },
  { label: "On-site MacBook repair",          href: "/onsite-macbook-repair-dubai" },
  { label: "Contact & free pickup",           href: "/contact" },
];

const AREAS = [
  { label: "Dubai Marina",    href: "/macbook-repair-dubai-marina" },
  { label: "Downtown Dubai",  href: "/macbook-repair-downtown-dubai" },
  { label: "JBR",             href: "/macbook-repair-jbr" },
  { label: "Business Bay",    href: "/macbook-repair-business-bay" },
  { label: "Jumeirah",        href: "/macbook-repair-jumeirah" },
  { label: "JLT",             href: "/macbook-repair-jlt" },
  { label: "DIFC",            href: "/macbook-repair-difc" },
  { label: "Silicon Oasis",   href: "/macbook-repair-silicon-oasis" },
  { label: "Internet City",   href: "/macbook-repair-internet-city" },
  { label: "Al Barsha",       href: "/macbook-repair-barsha" },
  { label: "Palm Jumeirah",   href: "/macbook-repair-palm-jumeirah" },
  { label: "Deira",           href: "/macbook-repair-deira" },
  { label: "Bur Dubai",       href: "/macbook-repair-bur-dubai" },
  { label: "Karama",          href: "/macbook-repair-karama" },
  { label: "Mirdif",          href: "/macbook-repair-mirdif" },
  { label: "Repair near me",  href: "/macbook-repair-near-me" },
];

// Other emirates — served by free courier collection (no branch there; see each page).
const CITY_LINKS = [
  { label: "Sharjah",        href: "/macbook-repair-sharjah" },
  { label: "Ajman",          href: "/macbook-repair-ajman" },
  { label: "Abu Dhabi",      href: "/macbook-repair-abu-dhabi" },
  { label: "Al Ain",         href: "/macbook-repair-al-ain" },
  { label: "Ras Al Khaimah", href: "/macbook-repair-ras-al-khaimah" },
  { label: "Fujairah",       href: "/macbook-repair-fujairah" },
  { label: "Umm Al Quwain",  href: "/macbook-repair-umm-al-quwain" },
  { label: "Khor Fakkan",    href: "/macbook-repair-khor-fakkan" },
  { label: "Kalba",          href: "/macbook-repair-kalba" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-bg-alt text-text pb-14 md:pb-0">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />

      <div className="relative mx-auto max-w-content px-5 md:px-6 pt-3xl pb-lg">
        {/* ── Top CTA strip (glass, mirrors the hero) ───────────── */}
        <div className="flex flex-col gap-lg rounded-2xl border border-border bg-bg-card p-lg md:flex-row md:items-center md:justify-between md:p-xl backdrop-blur-md">
          <div>
            <p className="m-0 mono text-[12px] uppercase tracking-wider text-accent">Fixed in 30 minutes by appointment · or it's free</p>
            <h2 className="m-0 mt-1 text-[24px] md:text-[28px] text-text">Broken Mac? Get a quote in minutes.</h2>
            <p className="m-0 mt-1.5 text-[13.5px] text-text-muted">Free diagnosis · no fix, no charge · free pickup Dubai-wide · free loaner on repairs over 2 hours · warranty up to 12 months</p>
          </div>
          <div className="flex flex-wrap gap-sm shrink-0">
            <Button asChild variant="whatsapp" size="lg">
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden /> Message on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border border-border-strong bg-bg-card text-text hover:bg-bg-alt">
              <a href={`tel:${NAP.phoneE164}`}>
                <Phone aria-hidden /> {NAP.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        {/* ── Link grid ─────────────────────────────────────────── */}
        <div className="mt-3xl grid gap-2xl sm:grid-cols-2 lg:grid-cols-12">
          {/* brand + contact */}
          <div className="lg:col-span-3">
            <Logo withWordmark className="text-text" />
            <p className="mt-md text-[14px] leading-relaxed text-text-muted">
              Independent Apple repair specialist in Dubai Media City since {NAP.founded}. Board-level
              work, free pickup, warranty up to 12 months.
            </p>
            <address className="mt-md not-italic text-[14px] leading-relaxed text-text-muted">
              <span className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden /> {NAP.street}, {NAP.area}, {NAP.city}</span>
            </address>
            <div className="mt-md space-y-2 text-[14px]">
              <a href={`tel:${NAP.phoneE164}`} className="flex items-center gap-2 transition-colors hover:text-accent">
                <Phone size={14} className="text-accent" aria-hidden /> <span className="mono">{NAP.phoneDisplay}</span>
              </a>
              <a href={NAP.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-accent">
                <MessageCircle size={14} className="text-accent" aria-hidden /> WhatsApp 24/7
              </a>
              <p className="m-0 flex items-center gap-2 text-text-faint"><Clock size={14} className="text-accent" aria-hidden /> Mon-Sat · 9 am - 10 pm · Sun closed</p>
            </div>
            {/* Social profiles — keep in lockstep with Organization/LocalBusiness sameAs (schema.ts reads the same NAP fields). */}
            <div className="mt-md flex gap-2">
              {[
                { href: NAP.facebook, label: "Facebook", Icon: Facebook },
                { href: NAP.instagram, label: "Instagram", Icon: Instagram },
                { href: NAP.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border transition-all duration-200 ease-out hover:border-accent/50 hover:bg-bg-alt motion-safe:hover:-translate-y-0.5"
                >
                  <Icon size={16} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterCol className="lg:col-span-3" heading="MacBook repair" links={MACBOOK_SERVICES} />
          <FooterCol className="lg:col-span-3" heading="Mac desktops & displays" links={MAC_DESKTOP_SERVICES} />
          <FooterCol className="lg:col-span-3" heading="iPhone & iPad" links={IPHONE_IPAD_SERVICES} />
        </div>

        {/* ── Row 2: pricing & warranty + company + areas ───────── */}
        <div className="mt-2xl grid gap-xl border-t border-border pt-lg lg:grid-cols-12">
          <FooterCol className="lg:col-span-4" heading="Pricing & warranty" links={PRICING_WARRANTY_LINKS} />
          <FooterCol className="lg:col-span-3" heading="Company" links={COMPANY_LINKS} />
          <div className="lg:col-span-5">
            <p className="mono text-[12px] uppercase tracking-wider text-accent mb-md">MacBook repair near you</p>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <Link key={a.href} to={a.href} className="rounded-full border border-border bg-bg-card px-3 py-1 text-[13px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                  {a.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Other emirates (free courier) ─────────────────────── */}
        <div className="mt-2xl border-t border-border pt-lg">
          <p className="mono text-[12px] uppercase tracking-wider text-accent mb-md">MacBook repair across the UAE · free courier</p>
          <div className="flex flex-wrap gap-2">
            {CITY_LINKS.map((c) => (
              <Link key={c.href} to={c.href} className="rounded-full border border-border bg-bg-card px-3 py-1 text-[13px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Blog: Mac guides by topic ─────────────────────────── */}
        <div className="mt-2xl border-t border-border pt-lg">
          <p className="mono text-[12px] uppercase tracking-wider text-accent mb-md">Mac guides by topic</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to={`/blog/${c.slug}`} className="rounded-full border border-border bg-bg-card px-3 py-1 text-[13px] text-text-muted transition-colors hover:border-accent/40 hover:text-text">
                {c.name}
              </Link>
            ))}
            <Link to="/blog" className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[13px] text-accent transition-colors hover:bg-accent/20">
              All guides →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom strip ──────────────────────────────────────── */}
      <div className="relative mx-auto max-w-content px-5 md:px-6 mt-2xl border-t border-border py-lg flex flex-wrap items-center justify-between gap-md text-[13px] text-text-faint">
        <p className="m-0">© {year} {NAP.name}. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-md gap-y-xs" aria-label="Legal">
          <Link to="/privacy"  className="transition-colors hover:text-text">Privacy</Link>
          <Link to="/terms"    className="transition-colors hover:text-text">Terms</Link>
          <Link to="/warranty" className="transition-colors hover:text-text">Warranty</Link>
          <Link to="/refund"   className="transition-colors hover:text-text">Refund</Link>
          <Link to="/cookies"  className="transition-colors hover:text-text">Cookies</Link>
          <Link to="/image-usage-license" className="transition-colors hover:text-text">Image license</Link>
          <Link to="/sitemap.xml" className="transition-colors hover:text-text">Sitemap</Link>
        </nav>
        <div className="flex flex-wrap items-center gap-2 mono text-[12px]">
          <span className="rounded-sm border border-accent/40 px-2 py-1 text-accent">Tabby</span>
          <span className="rounded-sm border border-accent/40 px-2 py-1 text-accent">Tamara</span>
          <span className="rounded-sm border border-border-strong px-2 py-1">VISA</span>
          <span className="rounded-sm border border-border-strong px-2 py-1">Mastercard</span>
          <span className="rounded-sm border border-border-strong px-2 py-1">Amex</span>
          <span className="rounded-sm border border-border-strong px-2 py-1">Cash</span>
        </div>
      </div>

      {/* ── Credits ───────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-content px-5 md:px-6 pb-lg flex flex-wrap items-center justify-center gap-x-md gap-y-xs text-center text-[12px] text-text-faint">
        <span>
          Development &amp; SEO by{" "}
          <a href="https://webae.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            webae.com
          </a>
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ heading, links, className }: { heading: string; links: { label: string; href: string }[]; className?: string }) {
  return (
    <nav aria-label={heading} className={className}>
      <p className="font-heading text-[13px] uppercase tracking-wider text-accent mb-md">{heading}</p>
      <ul className="space-y-1.5 text-[14px] list-none p-0 m-0">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="group inline-flex items-center gap-1 text-text-muted transition-colors hover:text-text">
              {l.label}
              <ArrowRight size={12} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-accent" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
