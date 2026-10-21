import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookProRepair";

export const metadata: Metadata = metaForPath("/macbook-pro-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-repair-dubai" />
      <View />
    </>
  );
}
