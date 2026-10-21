import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacFanCleaning";

export const metadata: Metadata = metaForPath("/imac-fan-cleaning-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-fan-cleaning-dubai" />
      <View />
    </>
  );
}
