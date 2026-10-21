import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneWaterDamageRepair";

export const metadata: Metadata = metaForPath("/iphone-water-damage-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-water-damage-repair-dubai" />
      <View />
    </>
  );
}
