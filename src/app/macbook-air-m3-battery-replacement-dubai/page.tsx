import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM3BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m3-battery-replacement-dubai", {
  title: "MacBook Air M3 Battery Replacement Dubai — From AED 450",
  description: "MacBook Air M3 battery replacement Dubai from AED 450 (13-inch) or AED 500 (15-inch). BMS re-pair included. Same-day service. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m3-battery-replacement-dubai" />
      <View />
    </>
  );
}
