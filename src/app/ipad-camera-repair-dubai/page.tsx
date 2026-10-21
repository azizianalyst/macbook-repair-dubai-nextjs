import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadCameraRepair";

export const metadata: Metadata = metaForPath("/ipad-camera-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-camera-repair-dubai" />
      <View />
    </>
  );
}
