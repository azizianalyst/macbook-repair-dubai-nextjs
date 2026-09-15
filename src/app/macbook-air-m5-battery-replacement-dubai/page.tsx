import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM5BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m5-battery-replacement-dubai", {
  title: "MacBook Air M5 Battery Replacement Dubai — Request a Quote",
  description: "MacBook Air M5 (2026) battery replacement Dubai. 13-inch and 15-inch, BMS re-pair included, warranty checked first. Free diagnosis. Message us on WhatsApp for today's price. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m5-battery-replacement-dubai" />
      <View />
    </>
  );
}
