import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacProM2UltraRepairHub";

export const metadata: Metadata = metaForPath("/mac-pro-m2-ultra-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-pro-m2-ultra-repair-dubai" />
      <View />
    </>
  );
}
