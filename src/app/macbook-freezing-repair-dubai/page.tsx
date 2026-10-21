import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookFreezingRepair";

export const metadata: Metadata = metaForPath("/macbook-freezing-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-freezing-repair-dubai" />
      <View />
    </>
  );
}
