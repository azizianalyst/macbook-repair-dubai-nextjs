import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneMicrophoneRepair";

export const metadata: Metadata = metaForPath("/iphone-microphone-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-microphone-repair-dubai" />
      <View />
    </>
  );
}
