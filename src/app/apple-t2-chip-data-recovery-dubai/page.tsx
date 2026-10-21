import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleT2ChipDataRecovery";

export const metadata: Metadata = metaForPath("/apple-t2-chip-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-t2-chip-data-recovery-dubai" />
      <View />
    </>
  );
}
