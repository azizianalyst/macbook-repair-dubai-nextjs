import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneVolumeButtonRepair";

export const metadata: Metadata = metaForPath("/iphone-volume-button-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-volume-button-repair-dubai" />
      <View />
    </>
  );
}
