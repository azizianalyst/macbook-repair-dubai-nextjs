import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookBatteryReplacement";

export const metadata: Metadata = metaForPath("/macbook-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-battery-replacement-dubai" />
      <View />
    </>
  );
}
