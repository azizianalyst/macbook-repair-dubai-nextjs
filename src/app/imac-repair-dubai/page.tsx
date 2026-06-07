import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacRepairHub";

export const metadata: Metadata = metaForPath("/imac-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-repair-dubai" />
      <View />
    </>
  );
}
