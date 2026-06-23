import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProScreenCost";

export const metadata: Metadata = {
  title: "MacBook Pro Screen Replacement Cost Dubai: 2026 Price Guide",
  description: "MacBook Pro screen replacement cost dubai from AED 750 to AED 1,400. Full breakdown by model, M1 to M5 and Intel, vs Apple Store. Same-day service available.",
  openGraph: {
    title: "MacBook Pro Screen Replacement Cost Dubai: 2026 Price Guide",
    description: "MacBook Pro screen replacement cost in Dubai from AED 750 to AED 1,400. Full model breakdown vs Apple Store, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-screen-replacement-cost-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/blog-screen-display-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro screen replacement cost dubai, technician replacing Liquid Retina XDR display at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Screen Replacement Cost Dubai: 2026 Price Guide",
    description: "AED 750 to AED 1,400 by model. M1 to M5 and Intel, vs Apple Store prices.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-screen-display-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-screen-replacement-cost-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-screen-replacement-cost-dubai" />
      <View />
    </>
  );
}
