import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://macbook-repair-dubai.ae"),
  title: "MacBook Repair Dubai | Certified Apple Technicians in UAE",
  description:
    "Expert MacBook repair in Dubai since 2004. Screen, battery, keyboard & water-damage fixes for Intel to M5 Macs. Same-day service, 90-day warranty.",
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
      </body>
    </html>
  );
}
