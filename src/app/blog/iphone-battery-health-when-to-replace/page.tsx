import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneBatteryHealth";

export const metadata: Metadata = metaFromFields("/blog/iphone-battery-health-when-to-replace", {
  title: "iPhone Battery Health: How to Check It and When to Replace",
  description: "How to check iPhone battery health, what Maximum Capacity, cycle count and peak performance mean, why 80% is the replacement point, and Dubai heat tips.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-battery-health-when-to-replace" />
      <View />
    </>
  );
}
