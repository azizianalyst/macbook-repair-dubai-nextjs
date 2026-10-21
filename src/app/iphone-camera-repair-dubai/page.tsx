import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneCameraRepair";

export const metadata: Metadata = metaForPath("/iphone-camera-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-camera-repair-dubai" />
      <View />
    </>
  );
}
