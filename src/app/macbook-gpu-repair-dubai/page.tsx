import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookGpuRepair";

export const metadata: Metadata = metaForPath("/macbook-gpu-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-gpu-repair-dubai" />
      <View />
    </>
  );
}
