import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirBatteryDrain";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-battery-drain-dubai", {
  title: "MacBook Air Battery Draining Fast Dubai: 7 Fixes 2026",
  description: "MacBook Air battery draining fast in Dubai? 7 common causes for M1, M2, M3, M4 and Intel. Fast battery replacement in 30 minutes — message us for a price.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-battery-drain-dubai" />
      <View />
    </>
  );
}
