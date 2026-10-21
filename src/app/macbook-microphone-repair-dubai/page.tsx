import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookMicrophoneRepair";

export const metadata: Metadata = metaForPath("/macbook-microphone-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-microphone-repair-dubai" />
      <View />
    </>
  );
}
