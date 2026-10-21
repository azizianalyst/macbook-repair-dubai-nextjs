import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryDubaiMarina";

export const metadata: Metadata = metaForPath("/mac-data-recovery-dubai-marina");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-dubai-marina" />
      <View />
    </>
  );
}
