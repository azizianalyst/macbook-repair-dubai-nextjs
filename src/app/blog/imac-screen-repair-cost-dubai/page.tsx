import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacScreenRepair";

export const metadata: Metadata = {
  title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Prices",
  description: "iMac screen repair cost Dubai from AED 800. 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service.",
  openGraph: {
    title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Prices",
    description: "iMac screen repair cost Dubai from AED 800. 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/imac-screen-repair-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iMac screen repair cost Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Prices",
    description: "iMac screen repair cost Dubai from AED 800. 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/imac-screen-repair-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/imac-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
