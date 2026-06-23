"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, X, Truck, HelpCircle, ChevronRight, Check, Headset } from "lucide-react";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";
import { analyticsConfigured } from "@/lib/analytics";

// The cookie-consent banner sits at the same bottom-of-screen spot on mobile; the launcher would
// overlap its "Accept" button. While the first-visit consent decision is still pending, hide the
// launcher and re-show it the moment the banner broadcasts a choice (mrd-consent-change).
function consentPending(): boolean {
  if (typeof document === "undefined") return false;
  if (!analyticsConfigured()) return false; // banner dormant → nothing to clash with
  return !/(?:^|;\s*)mrd_consent=/.test(document.cookie);
}

/**
 * QuickHelpWidget — the fast lane to a technician.
 *
 * A tap-first, ultra-short request panel anchored bottom-right (next to the
 * Call/WhatsApp sticky cluster on desktop) and as a bottom sheet on mobile.
 * The visitor only TAPS: Device → Issue → Service. The only typing is name +
 * phone. Then one tap sends a fully prefilled WhatsApp message (or a call) so a
 * technician can reply instantly.
 *
 * Auto-opens once per session after 30s (sessionStorage guard so it never nags).
 */

const DEVICES = ["MacBook", "iMac", "Mac mini / Studio", "iPhone", "iPad", "Other"] as const;

const ISSUES = [
  "Screen / display",
  "Battery",
  "Won't turn on",
  "Keyboard / trackpad",
  "Liquid damage",
  "Charging / port",
  "Slow / software",
  "Data recovery",
  "Other",
] as const;

// "Service" = what the visitor wants us to do next. Drives the WhatsApp message.
const SERVICES = [
  { key: "pickup", label: "Free pickup", icon: Truck },
  { key: "quote", label: "Get a quote", icon: HelpCircle },
  { key: "callback", label: "Call me back", icon: Phone },
  { key: "visit", label: "Visit workshop", icon: Headset },
] as const;

type DeviceT = (typeof DEVICES)[number];
type ServiceKey = (typeof SERVICES)[number]["key"];

const SERVICE_PHRASE: Record<ServiceKey, string> = {
  pickup: "I'd like a FREE pickup from my location.",
  quote: "Please send me a quote.",
  callback: "Please call me back.",
  visit: "I'd like to visit the workshop.",
};

const SESSION_KEY = "quickhelp-autoopen-seen";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-3 py-1.5 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        active
          ? "border-accent bg-accent/10 text-text font-semibold"
          : "border-border bg-bg-card text-text-muted hover:border-accent/40 hover:text-text",
      )}
    >
      {children}
    </button>
  );
}

export function QuickHelpWidget() {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<DeviceT | "">("");
  const [issue, setIssue] = useState<string>("");
  const [service, setService] = useState<ServiceKey | "">("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  // Start hidden until we know the consent banner isn't up (avoids overlapping its Accept button).
  const [pending, setPending] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  // Track consent-banner state: hide the launcher while the first-visit banner is showing, and
  // reappear as soon as the visitor accepts/rejects (banner dispatches mrd-consent-change).
  useEffect(() => {
    const sync = () => setPending(consentPending());
    sync();
    window.addEventListener("mrd-consent-change", sync);
    return () => window.removeEventListener("mrd-consent-change", sync);
  }, []);

  // auto-open once per session after 30s (not while the consent banner is still up)
  useEffect(() => {
    if (typeof window === "undefined" || pending) return;
    if (window.sessionStorage.getItem(SESSION_KEY)) return;
    const t = window.setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem(SESSION_KEY, "1");
    }, 30_000);
    return () => window.clearTimeout(t);
  }, [pending]);

  // open when StickyContactBar "Tech help" button fires this event
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("quickhelp-open", handler);
    return () => window.removeEventListener("quickhelp-open", handler);
  }, []);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function buildMessage() {
    const lines = [
      "Hi, I need help with my Apple device.",
      device && `Device: ${device}`,
      issue && `Issue: ${issue}`,
      service && SERVICE_PHRASE[service as ServiceKey],
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function sendWhatsApp() {
    const msg = buildMessage();
    window.open(`${NAP.whatsappUrl}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const ready = device && phone.trim().length >= 7;

  return (
    <>
      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Quick repair request"
          className={cn(
            "fixed z-[60] flex flex-col overflow-hidden rounded-xl border border-border/70 bg-bg-card ring-1 ring-black/[0.03] shadow-2xl",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4",
            // mobile: bottom sheet; desktop: floating card near the WhatsApp button
            "inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+4.25rem)] max-h-[75vh]",
            "sm:inset-x-auto sm:right-4 sm:bottom-24 sm:w-[360px] lg:bottom-40",
          )}
        >
          {/* header */}
          <div className="flex items-start gap-3 bg-primary px-4 py-3 text-white">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
              <Headset size={18} aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-bold leading-tight">Your personal technician</p>
              <p className="text-[12.5px] text-white/80 leading-snug">
                Tap a few options — get help in minutes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="shrink-0 rounded-md p-1 text-white/80 hover:bg-white/15 hover:text-white"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          {sent ? (
            <div className="px-4 py-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check size={24} aria-hidden />
              </div>
              <p className="text-[16px] font-bold text-text">Opening WhatsApp…</p>
              <p className="mt-1 text-[13.5px] text-text-muted">
                Your details are prefilled — just hit send and a technician will reply.
              </p>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 h-11 font-semibold text-[14px] text-text hover:border-accent/50 hover:text-accent"
              >
                <Phone size={16} aria-hidden /> Or call {NAP.phoneDisplay}
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5 overflow-y-auto px-4 py-4">
              {/* 1 — device */}
              <div>
                <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-text-faint">
                  1 · Your device
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DEVICES.map((d) => (
                    <Chip key={d} active={device === d} onClick={() => setDevice(d)}>
                      {d}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* 2 — issue */}
              <div>
                <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-text-faint">
                  2 · What&apos;s wrong?
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ISSUES.map((it) => (
                    <Chip key={it} active={issue === it} onClick={() => setIssue(it)}>
                      {it}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* 3 — service */}
              <div>
                <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-wide text-text-faint">
                  3 · How can we help?
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {SERVICES.map((s) => {
                    const Icon = s.icon;
                    const active = service === s.key;
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setService(s.key)}
                        aria-pressed={active}
                        className={cn(
                          "flex items-center gap-2 rounded-md border px-2.5 py-2 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                          active
                            ? "border-accent bg-accent/10 text-text font-semibold"
                            : "border-border bg-bg-card text-text-muted hover:border-accent/40 hover:text-text",
                        )}
                      >
                        <Icon size={15} className={active ? "text-accent" : ""} aria-hidden />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4 — name + phone (only typed input) */}
              <div className="grid grid-cols-2 gap-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  autoComplete="name"
                  placeholder="Your name"
                  className="h-11 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 text-[14px] text-text placeholder:text-text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="h-11 rounded-md border border-border/70 bg-bg-card ring-1 ring-black/[0.03] px-3 text-[14px] text-text placeholder:text-text-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                />
              </div>

              {/* actions */}
              <button
                type="button"
                onClick={sendWhatsApp}
                disabled={!ready}
                className={cn(
                  "flex items-center justify-center gap-2 rounded-md h-12 font-semibold text-[15px] text-white transition-colors",
                  ready ? "bg-whatsapp hover:brightness-110" : "bg-whatsapp/50 cursor-not-allowed",
                )}
              >
                <MessageCircle size={18} aria-hidden /> Send on WhatsApp
                <ChevronRight size={16} aria-hidden />
              </button>
              <a
                href={`tel:${NAP.phoneE164}`}
                className="flex items-center justify-center gap-2 rounded-md border border-border h-11 font-semibold text-[14px] text-text hover:border-accent/50 hover:text-accent"
              >
                <Phone size={16} aria-hidden /> Call {NAP.phoneDisplay}
              </a>
              <p className="text-center text-[11.5px] text-text-faint">
                No spam. Your details go straight to a technician.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default QuickHelpWidget;
