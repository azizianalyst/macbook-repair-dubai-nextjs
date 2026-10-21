import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacFanCleaning";

export const metadata: Metadata = metaForPath("/mac-fan-cleaning-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-fan-cleaning-dubai" />
      <View />
    </>
  );
}
