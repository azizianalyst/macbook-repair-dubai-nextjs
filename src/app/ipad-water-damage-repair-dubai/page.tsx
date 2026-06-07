import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadWaterDamageRepair";

export const metadata: Metadata = metaForPath("/ipad-water-damage-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-water-damage-repair-dubai" />
      <View />
    </>
  );
}
