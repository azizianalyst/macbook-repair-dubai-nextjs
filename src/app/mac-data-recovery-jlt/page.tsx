import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacDataRecoveryJLT";

export const metadata: Metadata = metaForPath("/mac-data-recovery-jlt");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-data-recovery-jlt" />
      <View />
    </>
  );
}
