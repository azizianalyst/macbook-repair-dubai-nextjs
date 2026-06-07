import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecovery";

export const metadata: Metadata = metaForPath("/mac-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-dubai" />
      <View />
    </>
  );
}
