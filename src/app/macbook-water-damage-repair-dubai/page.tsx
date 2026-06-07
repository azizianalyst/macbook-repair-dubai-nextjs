import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookWaterDamageRepair";

export const metadata: Metadata = metaForPath("/macbook-water-damage-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-water-damage-repair-dubai" />
      <View />
    </>
  );
}
