import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneSpeakerRepair";

export const metadata: Metadata = metaForPath("/iphone-speaker-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-speaker-repair-dubai" />
      <View />
    </>
  );
}
