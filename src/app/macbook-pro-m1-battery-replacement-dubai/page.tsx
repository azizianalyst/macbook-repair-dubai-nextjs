import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM1BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m1-battery-replacement-dubai", {
  title: "MacBook Pro M1 Battery Replacement Dubai — Same-Day Service",
  description: "MacBook Pro M1 Pro/Max battery replacement in Dubai for 14-inch and 16-inch models. BMS re-pair included, same-day 2-hour service. Quote on WhatsApp.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m1-battery-replacement-dubai" />
      <View />
    </>
  );
}
