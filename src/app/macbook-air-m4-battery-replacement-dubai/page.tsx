import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM4BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-m4-battery-replacement-dubai", {
  title: "MacBook Air M4 Battery Replacement Dubai — From AED 500",
  description: "MacBook Air M4 battery replacement Dubai from AED 500 (13-inch) or AED 550 (15-inch). BMS re-pair included. 1–2 day turnaround. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m4-battery-replacement-dubai" />
      <View />
    </>
  );
}
