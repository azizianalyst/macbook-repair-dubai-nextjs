import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryDowntownDubai";

export const metadata: Metadata = metaForPath("/mac-data-recovery-downtown-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-downtown-dubai" />
      <View />
    </>
  );
}
