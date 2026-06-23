import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideIPhoneMotherboardRepair";

export const metadata: Metadata = metaForPath("/can-iphone-motherboard-be-repaired");

export default function Page() {
  return (
    <>
      <PageSchema path="/can-iphone-motherboard-be-repaired" />
      <View />
    </>
  );
}
