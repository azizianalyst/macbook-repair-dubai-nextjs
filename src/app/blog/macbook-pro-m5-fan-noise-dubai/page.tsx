import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5FanNoise";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Fan Noise Dubai 2026",
  description: "MacBook Pro M5 fan making crackling, clicking, or grinding noise in Dubai? Debris in fan, bearing fault, firmware bug. Step-by-step fix guide.",
  openGraph: {
    title: "MacBook Pro M5 Fan Noise Dubai 2026: Crackling, Clicking, Grinding Fix",
    description:
      "M5 fan crackling or clicking in Dubai? Debris, bearing fault, or Tahoe firmware bug. Fix guide + fan replacement from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-fan-noise-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 fan noise fix, technician removing debris from fan and testing fan RPM at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Fan Noise Dubai 2026",
    description:
      "M5 fan crackling, clicking, grinding: fix guide for Dubai users.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-fan-noise-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-fan-noise-dubai" />
      <View />
    </>
  );
}
