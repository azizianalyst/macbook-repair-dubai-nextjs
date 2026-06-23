import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2BatteryDraining";

export const metadata: Metadata = {
  title: "MacBook Pro M2 Battery Draining Fast Dubai 2026",
  description: "MacBook Pro M2 battery draining fast in Dubai? Ventura memory swap bug, backgroundtaskmanagerd, and Dubai heat all shorten M2 battery life.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-battery-draining-fast-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-battery-draining-fast-dubai" />
      <View />
    </>
  );
}
