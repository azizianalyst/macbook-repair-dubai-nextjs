import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirBatteryDrain";

export const metadata: Metadata = {
  title: "MacBook Air Battery Draining Fast? 7 Causes and Fixes Dubai 2026",
  description: "MacBook Air battery draining fast in Dubai? 7 common causes for M1, M2, M3, M4 and Intel. Battery replacement from AED 350 in 30 minutes.",
  openGraph: {
    title: "MacBook Air Battery Draining Fast? 7 Causes and Fixes Dubai 2026",
    description: "MacBook Air battery draining fast in Dubai? 7 common causes for M1, M2, M3, M4 and Intel. Battery replacement from AED 350 in 30 minutes.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-battery-drain-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air battery draining fast, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Battery Draining Fast? 7 Causes and Fixes Dubai 2026",
    description: "MacBook Air battery draining fast in Dubai? 7 common causes for M1, M2, M3, M4 and Intel. Battery replacement from AED 350 in 30 minutes.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-battery-drain-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-battery-drain-dubai" />
      <View />
    </>
  );
}
