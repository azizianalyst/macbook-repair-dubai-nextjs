import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAlWarqa";

export const metadata: Metadata = metaForPath("/macbook-repair-al-warqa");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-al-warqa" />
      <View />
    </>
  );
}
