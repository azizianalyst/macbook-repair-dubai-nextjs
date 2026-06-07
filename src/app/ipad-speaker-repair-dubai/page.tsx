import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPadSpeakerRepair";

export const metadata: Metadata = metaForPath("/ipad-speaker-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-speaker-repair-dubai" />
      <View />
    </>
  );
}
