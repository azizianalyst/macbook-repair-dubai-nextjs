import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProBatteryReplacement";

export const metadata: Metadata = metaForPath("/macbook-pro-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-battery-replacement-dubai" />
      <View />
    </>
  );
}
