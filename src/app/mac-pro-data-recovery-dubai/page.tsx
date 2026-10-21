import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProDataRecovery";

export const metadata: Metadata = metaForPath("/mac-pro-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-data-recovery-dubai" />
      <View />
    </>
  );
}
