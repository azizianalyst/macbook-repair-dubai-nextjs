import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProM4BatteryReplacement";

export const metadata: Metadata = metaFromFields("/macbook-pro-m4-battery-replacement-dubai", {
  title: "MacBook Pro M4 Battery Replacement Dubai — Free Diagnosis",
  description: "MacBook Pro M4 Pro/Max battery replacement in Dubai for 14 and 16-inch, with BMS re-pairing. 1-2 day turnaround, 3-month warranty. Get a free quote.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m4-battery-replacement-dubai" />
      <View />
    </>
  );
}
