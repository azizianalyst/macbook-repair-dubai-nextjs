import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairUmmSuqeim";

export const metadata: Metadata = metaForPath("/macbook-repair-umm-suqeim");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-umm-suqeim" />
      <View />
    </>
  );
}
