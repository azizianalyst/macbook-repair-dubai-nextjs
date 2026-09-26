import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirM5BatteryCostUae";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-m5-battery-replacement-cost-uae", {
  title: "MacBook Air M5 Battery Replacement Cost in the UAE (2026)",
  description: "Apple's UAE fee for a MacBook Air M5 battery, 13-inch and 15-inch, how it compares with the MacBook Pro and Neo, and what the job really involves.",
  publishedTime: "2026-09-26",
  modifiedTime: "2026-09-26",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-m5-battery-replacement-cost-uae" />
      <View />
    </>
  );
}
