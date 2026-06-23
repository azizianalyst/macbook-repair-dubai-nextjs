import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4WifiDropping";

export const metadata: Metadata = {
  title: "MacBook Pro M4 Wi-Fi Dropping Dubai 2026",
  description: "MacBook Pro M4 Wi-Fi dropping in Dubai? Disconnects after sleep, slow on 6GHz, or connection not restored after wake. Step-by-step fix guide for UAE networks.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m4-wifi-dropping-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-wifi-dropping-dubai" />
      <View />
    </>
  );
}
