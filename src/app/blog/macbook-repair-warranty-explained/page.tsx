import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookRepairWarrantyExplained";

export const metadata: Metadata = metaForPath("/blog/macbook-repair-warranty-explained");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-repair-warranty-explained" />
      <View />
    </>
  );
}
