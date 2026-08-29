import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIMacScreenRepair";

export const metadata: Metadata = {
  title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Guide",
  description: "iMac screen repair Dubai: 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service. WhatsApp us for your exact quote.",
  openGraph: {
    title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Guide",
    description: "iMac screen repair Dubai: 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service. WhatsApp us for your exact quote.",
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
    title: "iMac Screen Repair Cost Dubai 2026: 21.5\" and 27\" Guide",
    description: "iMac screen repair Dubai: 21.5-inch and 27-inch Retina panel replacement, iMac M1 and Intel. Same-day service. WhatsApp us for your exact quote.",
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
