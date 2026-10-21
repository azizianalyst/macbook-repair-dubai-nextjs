import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPodTouch7Repair";

export const metadata: Metadata = metaForPath("/ipod-touch-7-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipod-touch-7-repair-dubai" />
      <View />
    </>
  );
}
