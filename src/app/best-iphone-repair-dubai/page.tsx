import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BestIPhoneRepair";

export const metadata: Metadata = metaForPath("/best-iphone-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/best-iphone-repair-dubai" />
      <View />
    </>
  );
}
