import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM2BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m2-battery-replacement-dubai", {
  title: "MacBook Pro M2 Battery Replacement Dubai — Same-Day",
  description: "MacBook Pro M2 Pro/Max battery replacement Dubai. 69.6 Wh (14-inch) and 99.6 Wh (16-inch). BMS re-pair included. Same-day 2-hour service. WhatsApp for a quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m2-battery-replacement-dubai" />
      <View />
    </>
  );
}
