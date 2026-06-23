import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/SsdDataRecovery";

export const metadata: Metadata = metaForPath("/ssd-data-recovery-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ssd-data-recovery-dubai" />
      <View />
    </>
  );
}
