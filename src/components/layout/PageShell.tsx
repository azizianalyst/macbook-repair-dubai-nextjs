"use client";
import { ReactNode, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { StickyContactBar } from "@/components/blocks/StickyContactBar";
import { QuickHelpWidget } from "@/components/blocks/QuickHelpWidget";
import { organization } from "@/lib/schema";

const ORG_LD_ID = "ld-organization-global";

// wraps every page. handles nav, footer, sticky mobile cta, skip link.
// also injects the global Organization JSON-LD on every route so AI/search
// engines see consistent entity context everywhere (not just home/about).
// `hideContactCta`: pages that render their own closing CTA (service/device/iPhone
// templates) pass this so the footer's pre-footer CTA band doesn't stack a duplicate.
export function PageShell({ children, hideContactCta = false }: { children: ReactNode; hideContactCta?: boolean }) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(ORG_LD_ID)) return;
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = ORG_LD_ID;
    el.textContent = JSON.stringify(organization());
    document.head.appendChild(el);
    // intentionally no cleanup: Organization is global; keep across route changes.
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <NavBar />
      <main id="main" className="pb-3xl">{children}</main>
      <Footer hideCtaBand={hideContactCta} />
      <StickyMobileCTA />
      <StickyContactBar />
      <QuickHelpWidget />
    </>
  );
}
