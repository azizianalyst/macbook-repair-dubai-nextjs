// GA4 analytics + conversion tracking.
// ACTIVATION: set NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX" in a .env file (or the Hostinger build env)
// before `npm run build`. With no ID set, every function is a safe no-op (nothing loads).
//
// What it tracks once activated:
//   • page_view on initial load AND on every SPA route change (history.pushState/popstate)
//   • a "contact" conversion event for clicks on tel:, WhatsApp (wa.me), and mailto: links -
//     i.e. the actual lead actions on this site.
//
// To use GTM instead of GA4, swap the inject below for the GTM container snippet.

const GA_ID = (process.env.NEXT_PUBLIC_GA_ID as string | undefined)?.trim() || "";

// True only when a GA4 Measurement ID was set at build time. The consent banner
// uses this to stay dormant (no banner, no tracking) until an ID is configured.
export function analyticsConfigured(): boolean {
  return !!GA_ID;
}

let initialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function send(...args: unknown[]) {
  window.gtag?.(...args);
}

function contactMethod(href: string): string | null {
  const h = href.toLowerCase();
  if (h.startsWith("tel:")) return "phone";
  if (h.includes("wa.me") || h.includes("api.whatsapp") || h.includes("whatsapp")) return "whatsapp";
  if (h.startsWith("mailto:")) return "email";
  return null;
}

export function initAnalytics(): void {
  // Idempotent: safe to call on consent-accept AND on mount for returning visitors.
  if (!GA_ID || typeof window === "undefined" || initialized) return;
  initialized = true;

  // --- load gtag ---
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  send("js", new Date());
  send("config", GA_ID, { anonymize_ip: true });

  // --- SPA page_view on route change (react-router uses history.pushState) ---
  const pageview = () =>
    send("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  const origPush = history.pushState;
  history.pushState = function (...a: Parameters<typeof history.pushState>) {
    const r = origPush.apply(this, a);
    pageview();
    return r;
  };
  window.addEventListener("popstate", pageview);

  // --- conversion: clicks on tel: / WhatsApp / mailto: ---
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a");
      if (!link) return;
      const method = contactMethod(link.getAttribute("href") || "");
      // placement comes from data-track on the anchor (e.g. "hero-whatsapp",
      // "sticky-bar-call") so GA can tell which CTA converts.
      if (method) send("event", "contact", { method, placement: link.dataset.track ?? "untagged", transport_type: "beacon" });
    },
    { capture: true },
  );
}
