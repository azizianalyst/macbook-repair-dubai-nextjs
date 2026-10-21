import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideScreenRecordAudioMac";

export const metadata: Metadata = metaForPath("/blog/how-can-i-record-audio-while-screen-recording-on-mac");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/how-can-i-record-audio-while-screen-recording-on-mac" />
      <View />
    </>
  );
}
