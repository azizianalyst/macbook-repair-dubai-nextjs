import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneWaterDamage";

export const metadata: Metadata = {
  title: "iPhone Water Damage Repair Dubai 2026: What to Do First",
  description: "iPhone water damage repair Dubai from AED 249. Board-level ultrasonic clean for pool, sea and rain-soaked iPhones. Free diagnosis.",
  openGraph: {
    title: "iPhone Water Damage Repair Dubai 2026: What to Do First",
    description: "iPhone water damage repair Dubai from AED 249. Board-level ultrasonic clean for pool, sea and rain-soaked iPhones. Free diagnosis.",
    url: "https://macbook-repair-dubai.ae/blog/iphone-water-damage-repair-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{
      url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif",
      width: 1600,
      height: 900,
      alt: "iPhone water damage repair Dubai, technician diagnosing device at Dubai repair workshop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone Water Damage Repair Dubai 2026: What to Do First",
    description: "iPhone water damage repair Dubai from AED 249. Board-level ultrasonic clean for pool, sea and rain-soaked iPhones. Free diagnosis.",
    images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/iphone-water-damage-repair-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-water-damage-repair-dubai" />
      <View />
    </>
  );
}
