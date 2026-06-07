import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneLightningPortRepair";

export const metadata: Metadata = metaForPath("/iphone-lightning-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-lightning-port-repair-dubai" />
      <View />
    </>
  );
}
