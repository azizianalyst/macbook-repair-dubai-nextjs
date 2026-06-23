import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirScreenRepair";

export const metadata: Metadata = {
  title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
  description: "MacBook Air screen repair cost Dubai by model. M1 from AED 500, M2 from AED 600, M3 from AED 700. Free diagnosis, same-day repair.",
  openGraph: {
    title: "MacBook Air Screen Repair Cost Dubai 2026: Prices by Model",
    description: "MacBook Air screen repair cost Dubai by model. M1 from AED 500, M2 from AED 600, M3 from AED 700. Free diagnosis, same-day repair.",
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
    description: "MacBook Air screen repair cost Dubai by model. M1 from AED 500, M2 from AED 600, M3 from AED 700. Free diagnosis, same-day repair.",
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
