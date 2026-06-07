import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProGpuRepair";

export const metadata: Metadata = metaForPath("/mac-pro-gpu-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-gpu-repair-dubai" />
      <View />
    </>
  );
}
