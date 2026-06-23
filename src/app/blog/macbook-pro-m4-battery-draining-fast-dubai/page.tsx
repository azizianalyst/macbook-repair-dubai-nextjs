import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4BatteryDraining";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Battery Draining Fast Dubai 2026: Fix Guide",
  description: "MacBook Pro M4 battery draining fast in Dubai? M4 losing charge too quickly, short runtime, or battery draining while charging. Step-by-step fix.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-battery-draining-fast-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-battery-draining-fast-dubai" />
      <View />
    </>
  );
}
