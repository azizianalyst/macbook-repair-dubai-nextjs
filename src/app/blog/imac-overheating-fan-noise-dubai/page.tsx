import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacOverheating";

export const metadata: Metadata = {
  title: "iMac Overheating and Loud Fan in Dubai? Causes and Fixes 2026",
  description: "iMac overheating or fan running loud in Dubai? Dust, dried thermal paste and 35°C ambient explained. Thermal service from AED 300.",
  openGraph: {
    title: "iMac Overheating and Loud Fan in Dubai? Causes and Fixes 2026",
    description: "iMac overheating or fan running loud in Dubai? Dust, dried thermal paste and 35°C ambient explained. Thermal service from AED 300.",
    url: "https://macbook-repair-dubai.ae/blog/imac-overheating-fan-noise-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "iMac overheating, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "iMac Overheating and Loud Fan in Dubai? Causes and Fixes 2026", description: "iMac overheating or fan running loud in Dubai? Dust, dried thermal paste and 35°C ambient explained. Thermal service from AED 300.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/imac-overheating-fan-noise-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-overheating-fan-noise-dubai" />
      <View />
    </>
  );
}
