import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
  description: "MacBook Air screen repair cost in Dubai, broken down by M1, M2 and M3 model. Free diagnosis, same-day repair. WhatsApp us for your exact price.",
  openGraph: {
    title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
    description: "MacBook Air screen repair cost in Dubai, broken down by M1, M2 and M3 model. Free diagnosis, same-day repair. WhatsApp us for your exact price.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-air-screen-repair-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "MacBook Air screen repair cost Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
    description: "MacBook Air screen repair cost in Dubai, broken down by M1, M2 and M3 model. Free diagnosis, same-day repair. WhatsApp us for your exact price.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-air-screen-repair-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-screen-repair-cost-dubai" />
      <View />
    </>
  );
}
