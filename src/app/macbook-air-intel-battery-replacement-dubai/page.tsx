import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirIntelBatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-air-intel-battery-replacement-dubai", {
  title: "MacBook Air Intel Battery Replacement Dubai — AED 450",
  description: "MacBook Air Intel battery replacement Dubai AED 450. 49.9 Wh cell, same-day 2-hour service. No BMS re-pair required. Free diagnosis. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-intel-battery-replacement-dubai" />
      <View />
    </>
  );
}
