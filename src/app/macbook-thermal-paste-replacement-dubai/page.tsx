import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookThermalPasteReplacement";

export const metadata: Metadata = metaForPath("/macbook-thermal-paste-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-thermal-paste-replacement-dubai" />
      <View />
    </>
  );
}
