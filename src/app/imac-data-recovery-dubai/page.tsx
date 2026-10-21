import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacDataRecovery";

export const metadata: Metadata = metaForPath("/imac-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-data-recovery-dubai" />
      <View />
    </>
  );
}
