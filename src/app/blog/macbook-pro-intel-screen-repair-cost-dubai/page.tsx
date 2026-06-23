import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProIntelScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Pro Intel Screen Repair Cost Dubai 2026",
  description: "MacBook Pro Intel screen repair cost Dubai: cracked, Flexgate, dead pixels. 13/15-inch 2016-2020 prices from AED 400. Free diagnosis, same-day.",
  openGraph: {
    type: "article",
    publishedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-intel-screen-repair-cost-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-intel-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
