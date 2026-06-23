import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM4BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m4-battery-replacement-dubai", {
  title: "MacBook Pro M4 Battery Replacement Dubai — From AED 550",
  description: "MacBook Pro M4 Pro/Max battery replacement Dubai from AED 550. 72.4 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included, Thunderbolt 5. 1-2 day turnaround. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m4-battery-replacement-dubai" />
      <View />
    </>
  );
}
