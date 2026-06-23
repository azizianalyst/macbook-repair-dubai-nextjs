import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadScreenRepair";

export const metadata: Metadata = {
  title: "iPad Screen Repair Cost Dubai 2026: Prices by Model",
  description: "iPad screen repair cost Dubai from AED 250. All models: iPad Pro OLED, Air LCD, mini. Free diagnosis, same-day service.",
  openGraph: {
    title: "iPad Screen Repair Cost Dubai 2026: Prices by Model",
    description: "iPad screen repair cost Dubai from AED 250. All models: iPad Pro OLED, Air LCD, mini. Free diagnosis, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/ipad-screen-repair-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPad screen repair cost Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPad Screen Repair Cost Dubai 2026: Prices by Model",
    description: "iPad screen repair cost Dubai from AED 250. All models: iPad Pro OLED, Air LCD, mini. Free diagnosis, same-day service.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/ipad-screen-repair-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
