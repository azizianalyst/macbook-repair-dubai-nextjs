import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideIPhoneMotherboardRepair";

export const metadata: Metadata = metaForPath("/iphone-motherboard-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-motherboard-repair-dubai" />
      <View />
    </>
  );
}
