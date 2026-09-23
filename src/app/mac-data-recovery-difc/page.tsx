import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryDIFC";

export const metadata: Metadata = metaForPath("/mac-data-recovery-difc");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-difc" />
      <View />
    </>
  );
}
