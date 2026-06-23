import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryWaterDamage";

export const metadata: Metadata = metaForPath("/mac-data-recovery-after-water-damage-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-after-water-damage-dubai" />
      <View />
    </>
  );
}
