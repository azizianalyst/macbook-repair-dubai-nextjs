import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneWaterDamageRepairCost";

export const metadata: Metadata = metaForPath("/blog/iphone-water-damage-repair-cost-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-water-damage-repair-cost-dubai" />
      <View />
    </>
  );
}
