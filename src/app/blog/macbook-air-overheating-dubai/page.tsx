import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirOverheating";

export const metadata: Metadata = {
  title: "MacBook Air Overheating in Dubai? Causes and Fixes 2026",
  description: "MacBook Air overheating in Dubai? Fanless M-series and Intel fan models both throttle in 35°C+ heat. Fix from AED 200 at our workshop.",
  openGraph: {
    title: "MacBook Air Overheating in Dubai? Causes and Fixes 2026",
    description: "MacBook Air overheating in Dubai? Fanless M-series and Intel fan models both throttle in 35°C+ heat. Fix from AED 200 at our workshop.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-overheating-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air overheating, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Overheating in Dubai? Causes and Fixes 2026",
    description: "MacBook Air overheating in Dubai? Fanless M-series and Intel fan models both throttle in 35°C+ heat. Fix from AED 200 at our workshop.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-overheating-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-overheating-dubai" />
      <View />
    </>
  );
}
