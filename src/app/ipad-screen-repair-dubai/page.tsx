import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadScreenRepair";

export const metadata: Metadata = metaForPath("/ipad-screen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-screen-repair-dubai" />
      <View />
    </>
  );
}
