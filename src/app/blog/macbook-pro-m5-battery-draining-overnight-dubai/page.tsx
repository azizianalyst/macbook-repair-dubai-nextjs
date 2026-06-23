import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5BatteryOvernight";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Battery Draining Overnight? DarkWake Fix Dubai 2026",
  description: "MacBook Pro M5 battery draining overnight in Dubai? DarkWake, Power Nap, and background tasks drain 20-40% while sleeping. Step-by-step fix guide.",
  openGraph: {
    title: "MacBook Pro M5 Battery Draining Overnight? DarkWake Fix Dubai 2026",
    description:
      "MacBook Pro M5 battery draining overnight? DarkWake and Power Nap drain 20-40% during sleep. Fix guide + battery replacement from AED 650 in Dubai.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-battery-draining-overnight-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 battery draining overnight, technician diagnosing DarkWake and sleep process at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Battery Draining Overnight? DarkWake Fix Dubai 2026",
    description:
      "DarkWake and Power Nap causing M5 battery drain overnight. Step-by-step fix guide for Dubai users.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical:
      "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-battery-draining-overnight-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-battery-draining-overnight-dubai" />
      <View />
    </>
  );
}
