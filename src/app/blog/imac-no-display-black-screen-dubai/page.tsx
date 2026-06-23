import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacNoDisplay";

export const metadata: Metadata = {
  title: "iMac No Display or Black Screen in Dubai? 6 Fixes 2026",
  description: "iMac turns on but no display or black screen in Dubai? 6 fixes for backlight, GPU, and panel faults. Repair from AED 600.",
  openGraph: {
    title: "iMac No Display or Black Screen in Dubai? 6 Fixes 2026",
    description: "iMac turns on but no display or black screen in Dubai? 6 fixes for backlight, GPU, and panel faults. Repair from AED 600.",
    url: "https://macbook-repair-dubai.ae/blog/imac-no-display-black-screen-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "iMac no display, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "iMac No Display or Black Screen in Dubai? 6 Fixes 2026", description: "iMac turns on but no display or black screen in Dubai? 6 fixes for backlight, GPU, and panel faults. Repair from AED 600.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/imac-no-display-black-screen-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-no-display-black-screen-dubai" />
      <View />
    </>
  );
}
