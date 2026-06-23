import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5Throttling";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Throttling Fix Dubai 2026",
  description: "MacBook Pro M5 throttling in Dubai? M5 slows down under load, fans don't spin, CPU drops to 600 MHz. Step-by-step fix guide for thermal throttling.",
  openGraph: {
    title: "MacBook Pro M5 Throttling Fix Dubai 2026: Why It Slows Down and How to Stop It",
    description:
      "M5 slowing to 600 MHz under load? Blocked vents, fan firmware bug, wrong Power Mode. Fix guide + fan repair from AED 200 in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-throttling-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 throttling fix, technician cleaning vents and testing fan speed at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Throttling Fix Dubai 2026",
    description:
      "M5 CPU dropping to 600 MHz? Thermal throttling fix guide for Dubai users.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-throttling-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-throttling-fix-dubai" />
      <View />
    </>
  );
}
