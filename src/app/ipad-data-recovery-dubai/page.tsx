import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadDataRecovery";

export const metadata: Metadata = metaForPath("/ipad-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-data-recovery-dubai" />
      <View />
    </>
  );
}
