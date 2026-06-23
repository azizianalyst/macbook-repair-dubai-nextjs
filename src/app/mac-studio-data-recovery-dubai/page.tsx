import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioDataRecovery";

export const metadata: Metadata = metaForPath("/mac-studio-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-data-recovery-dubai" />
      <View />
    </>
  );
}
