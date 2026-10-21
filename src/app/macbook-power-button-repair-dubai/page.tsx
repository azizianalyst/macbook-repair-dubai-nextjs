import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookPowerButtonRepair";

export const metadata: Metadata = metaForPath("/macbook-power-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-power-button-repair-dubai" />
      <View />
    </>
  );
}
