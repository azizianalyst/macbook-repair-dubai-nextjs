import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirRepair";

export const metadata: Metadata = metaForPath("/macbook-air-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-repair-dubai" />
      <View />
    </>
  );
}
