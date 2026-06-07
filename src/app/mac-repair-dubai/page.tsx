import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacRepairHub";

export const metadata: Metadata = metaForPath("/mac-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-repair-dubai" />
      <View />
    </>
  );
}
