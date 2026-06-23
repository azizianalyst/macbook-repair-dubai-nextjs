import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2SsdDegrading";

export const metadata: Metadata = {
  title: "MacBook Pro M2 SSD Degrading Fast Dubai 2026",
  description: "MacBook Pro M2 SSD degrading fast in Dubai? M2 13-inch had a write amplification bug in Ventura that wrote 10-100x more data than expected.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-m2-ssd-degrading-fast-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-ssd-degrading-fast-dubai" />
      <View />
    </>
  );
}
