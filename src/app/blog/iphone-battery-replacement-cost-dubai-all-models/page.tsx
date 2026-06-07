import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneBatteryReplacementCost";

export const metadata: Metadata = metaForPath("/blog/iphone-battery-replacement-cost-dubai-all-models");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-battery-replacement-cost-dubai-all-models" />
      <View />
    </>
  );
}
