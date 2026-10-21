import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadBackGlassRepair";

export const metadata: Metadata = metaForPath("/ipad-back-glass-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-back-glass-repair-dubai" />
      <View />
    </>
  );
}
