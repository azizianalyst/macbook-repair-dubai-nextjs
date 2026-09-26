import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM3BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m3-battery-replacement-dubai", {
  title: "MacBook Pro M3 Battery Replacement Dubai — Same-Day Service",
  description: "MacBook Pro M3 Pro/Max battery replacement in Dubai for 14-inch and 16-inch models. BMS re-pair included, same-day 2-hour service. Quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m3-battery-replacement-dubai" />
      <View />
    </>
  );
}
