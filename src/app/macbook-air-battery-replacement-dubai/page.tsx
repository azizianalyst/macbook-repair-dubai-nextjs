import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirBatteryReplacement";

export const metadata: Metadata = metaForPath("/macbook-air-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-battery-replacement-dubai" />
      <View />
    </>
  );
}
