import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryBusinessBay";

export const metadata: Metadata = metaForPath("/mac-data-recovery-business-bay");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-business-bay" />
      <View />
    </>
  );
}
