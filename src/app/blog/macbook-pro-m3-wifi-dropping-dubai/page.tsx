import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3WifiDropping";

export const metadata: Metadata = {
  title: "MacBook Pro M3 Wi-Fi Dropping Dubai 2026: 6GHz Fix Guide",
  description: "MacBook Pro M3 Wi-Fi dropping in Dubai? 6GHz band disconnects, slow speeds, or not reconnecting after sleep. Sonoma Wi-Fi fix and UAE router settings.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m3-wifi-dropping-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-wifi-dropping-dubai" />
      <View />
    </>
  );
}
