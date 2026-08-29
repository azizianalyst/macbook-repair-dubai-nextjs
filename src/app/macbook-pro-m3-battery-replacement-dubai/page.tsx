import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM3BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m3-battery-replacement-dubai", {
  title: "MacBook Pro M3 Battery Replacement Dubai — Same-Day Service",
  description: "MacBook Pro M3 Pro/Max battery replacement Dubai. 70 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. WhatsApp for today's price.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m3-battery-replacement-dubai" />
      <View />
    </>
  );
}
