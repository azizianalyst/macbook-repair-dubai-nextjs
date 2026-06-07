import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairKalba";

export const metadata: Metadata = metaForPath("/macbook-repair-kalba");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-kalba" />
      <View />
    </>
  );
}
