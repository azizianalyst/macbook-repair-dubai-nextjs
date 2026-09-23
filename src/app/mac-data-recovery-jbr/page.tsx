import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryJBR";

export const metadata: Metadata = metaForPath("/mac-data-recovery-jbr");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-jbr" />
      <View />
    </>
  );
}
