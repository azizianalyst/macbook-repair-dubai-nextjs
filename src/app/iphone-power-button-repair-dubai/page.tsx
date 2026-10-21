import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhonePowerButtonRepair";

export const metadata: Metadata = metaForPath("/iphone-power-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-power-button-repair-dubai" />
      <View />
    </>
  );
}
