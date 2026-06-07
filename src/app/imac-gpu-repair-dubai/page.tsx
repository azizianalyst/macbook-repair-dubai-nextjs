import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacGpuRepair";

export const metadata: Metadata = metaForPath("/imac-gpu-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-gpu-repair-dubai" />
      <View />
    </>
  );
}
