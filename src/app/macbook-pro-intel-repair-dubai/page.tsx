import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProIntelRepair";

export const metadata: Metadata = metaForPath("/macbook-pro-intel-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-intel-repair-dubai" />
      <View />
    </>
  );
}
