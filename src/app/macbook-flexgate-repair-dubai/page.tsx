import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookFlexgateRepair";

export const metadata: Metadata = metaForPath("/macbook-flexgate-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-flexgate-repair-dubai" />
      <View />
    </>
  );
}
