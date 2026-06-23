import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM5WifiSlow";

export const metadata: Metadata = {
  title: "MacBook Pro M5 Wi-Fi Slow Fix Dubai 2026",
  description: "MacBook Pro M5 Wi-Fi slow in Dubai? MCS/NSS 0 kernel error, slow speeds on 6GHz, drops after sleep. Step-by-step Wi-Fi fix guide for M5 in UAE.",
  openGraph: {
    title: "MacBook Pro M5 Wi-Fi Slow Fix Dubai 2026: MCS NSS 0 Kernel Error",
    description:
      "M5 Wi-Fi slow in Dubai? MCS/NSS 0 rate negotiation failure, 6GHz driver bug, drops after sleep. Fix guide + repair from AED 200.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-wifi-slow-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro M5 Wi-Fi slow fix, technician checking wireless antenna and network settings at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 Wi-Fi Slow Fix Dubai 2026",
    description:
      "MCS/NSS 0 error, 6GHz drops, slow after sleep: full M5 Wi-Fi fix guide for UAE users.",
    images: [
      "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
    ],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m5-wifi-slow-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m5-wifi-slow-fix-dubai" />
      <View />
    </>
  );
}
