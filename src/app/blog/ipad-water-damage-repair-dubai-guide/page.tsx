import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPadWaterDamageRepair";

export const metadata: Metadata = metaForPath("/blog/ipad-water-damage-repair-dubai-guide");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/ipad-water-damage-repair-dubai-guide" />
      <View />
    </>
  );
}
