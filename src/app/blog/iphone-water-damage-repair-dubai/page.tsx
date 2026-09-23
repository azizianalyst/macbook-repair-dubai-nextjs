import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneWaterDamage";

export const metadata: Metadata = metaFromFields("/blog/iphone-water-damage-repair-dubai", {
  title: "iPhone Water Damage Repair Dubai 2026: What to Do First",
  description: "iPhone water damage repair Dubai: board-level ultrasonic clean for pool, sea and rain-soaked iPhones. Free diagnosis — message us on WhatsApp for a quote.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-water-damage-repair-dubai" />
      <View />
    </>
  );
}
