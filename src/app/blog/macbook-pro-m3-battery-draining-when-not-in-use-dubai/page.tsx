import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3BatteryDraining";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Battery Draining When Not in Use Dubai 2026",
  description: "MacBook Pro M3 battery draining when not in use in Dubai? M3 losing charge overnight or during sleep. DarkWake, backgroundtaskmanagerd, and Sonoma power bugs.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-battery-draining-when-not-in-use-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-battery-draining-when-not-in-use-dubai" />
      <View />
    </>
  );
}
