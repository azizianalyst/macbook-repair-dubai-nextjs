import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacRunningSlow";

export const metadata: Metadata = {
  title: "iMac Running Slow in Dubai? 8 Fixes for M and Intel Models 2026",
  description: "iMac running slow in Dubai? 8 fixes for M1, M3, M4 and Intel models. SSD and RAM upgrades at our workshop — message us on WhatsApp for a quote.",
  openGraph: {
    title: "iMac Running Slow in Dubai? 8 Fixes for M and Intel Models 2026",
    description: "iMac running slow in Dubai? 8 fixes for M1, M3, M4 and Intel models. SSD and RAM upgrades at our workshop — message us on WhatsApp for a quote.",
    url: "https://macbook-repair-dubai.ae/blog/imac-running-slow-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iMac running slow, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iMac Running Slow in Dubai? 8 Fixes for M and Intel Models 2026",
    description: "iMac running slow in Dubai? 8 fixes for M1, M3, M4 and Intel models. SSD and RAM upgrades at our workshop — message us on WhatsApp for a quote.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/imac-running-slow-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-running-slow-dubai" />
      <View />
    </>
  );
}
