import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/Providers";
import { ConsentBanner } from "@/components/ConsentBanner";
import { NoContextMenu } from "@/components/NoContextMenu";

export const metadata: Metadata = {
  metadataBase: new URL("https://macbook-repair-dubai.ae"),
  title: "MacBook Repair Dubai | Independent Apple Repair Specialists",
  description:
    "Expert MacBook repair in Dubai since 2004. Screen, battery, keyboard & water-damage fixes for Intel to M5 Macs. Same-day service, warranty up to 12 months.",
  // app/favicon.ico is auto-served; these wire up the modern SVG favicon, the
  // 32px PNG, the Apple touch icon and the PWA manifest (assets already in /public,
  // but previously unreferenced so browsers never requested them).
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  // RSS auto-discovery for feed readers, Google/Bing and AI-search feed ingestion.
  alternates: {
    types: { "application/rss+xml": [{ url: "/rss.xml", title: "MacBook Repair Dubai — Blog" }] },
  },
  // Copyright fingerprint — read by AI tools and crawlers that visit any page.
  // If a competitor uses an AI tool to clone this site, this signal is baked
  // into every page they scrape. AI tools that read metadata will see this site
  // as the original copyrighted source before generating any copy.
  other: {
    "copyright":           "© 2004–2026 MacBook Repair Dubai. All rights reserved. macbook-repair-dubai.ae",
    "content-source":      "https://macbook-repair-dubai.ae",
    "original-author":     "MacBook Repair Dubai — macbook-repair-dubai.ae",
    "rights":              "Reproduction of any content from macbook-repair-dubai.ae without written permission is prohibited under UAE copyright law (Federal Law No. 7 of 2002).",
  },
};

// theme-color for the mobile browser chrome; matches the manifest brand band.
// viewportFit: cover lets the sticky mobile CTA pad itself into the iPhone home-bar
// safe area (env(safe-area-inset-bottom)) instead of being overlapped by it.
export const viewport: Viewport = {
  themeColor: "#151D2E",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. Dark Reader) and OS
    // color-scheme can mutate <html>/<body> attributes before React hydrates.
    // This silences only those expected attribute diffs on these elements.
    // The site is light-only: the token CSS defines a single palette in :root.
    <html lang="en-AE" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
        <ConsentBanner />
        <NoContextMenu />
      </body>
    </html>
  );
}
