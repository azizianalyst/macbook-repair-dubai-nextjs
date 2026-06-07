import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadBatteryReplacement";

export const metadata: Metadata = metaForPath("/ipad-battery-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-battery-replacement-dubai" />
      <View />
    </>
  );
}
