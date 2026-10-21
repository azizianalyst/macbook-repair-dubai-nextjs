import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadBatteryReplacementCost";

export const metadata: Metadata = metaForPath("/blog/ipad-battery-replacement-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-battery-replacement-cost-dubai" />
      <View />
    </>
  );
}
