import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairDowntownDubai";

export const metadata: Metadata = metaForPath("/macbook-repair-downtown-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-downtown-dubai" />
      <View />
    </>
  );
}
