import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM2BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m2-battery-replacement-dubai", {
  title: "MacBook Pro M2 Battery Replacement Dubai — From AED 500",
  description: "MacBook Pro M2 Pro/Max battery replacement Dubai from AED 500. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m2-battery-replacement-dubai" />
      <View />
    </>
  );
}
