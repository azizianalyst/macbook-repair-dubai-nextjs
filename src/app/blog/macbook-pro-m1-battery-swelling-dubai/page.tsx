import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1BatterySwelling";

export const metadata: Metadata = {
  title: "MacBook Pro M1 Battery Swelling Dubai 2026",
  description: "MacBook Pro M1 battery swelling in Dubai? Raised trackpad, bowed bottom case, or won't sit flat means swollen battery. Stop using immediately.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m1-battery-swelling-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-battery-swelling-dubai" />
      <View />
    </>
  );
}
