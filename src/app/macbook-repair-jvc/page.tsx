import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairJVC";

export const metadata: Metadata = metaForPath("/macbook-repair-jvc");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-jvc" />
      <View />
    </>
  );
}
