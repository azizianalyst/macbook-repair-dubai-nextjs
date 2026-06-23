import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProIntelRepairHub";

export const metadata: Metadata = metaForPath("/mac-pro-intel-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-intel-repair-dubai" />
      <View />
    </>
  );
}
