import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://macbook-repair-dubai.ae"),
  title: "MacBook Repair Dubai | Certified Apple Technicians in UAE",
  description:
    "Get expert MacBook repair Dubai. Screen, battery, keyboard & water damage services for M1, M2, M3 & M4 models. Fast & trusted Apple repair.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: themes / browser extensions (e.g. Dark Reader) and
    // OS color-scheme can mutate <html>/<body> attributes before React hydrates.
    // This silences only those expected attribute diffs on these elements.
    // className="dark": the site is designed dark end-to-end (templates hardcode
    // dark bands and components assume a dark surface, e.g. bg-white/[0.04] cards).
    // Applying the dark token set globally makes unbanded sections (guides hub,
    // related-articles tails) match instead of leaking the light :root theme.
    <html lang="en-AE" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
