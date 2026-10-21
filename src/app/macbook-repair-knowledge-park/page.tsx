import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairKnowledgePark";

export const metadata: Metadata = metaForPath("/macbook-repair-knowledge-park");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-knowledge-park" />
      <View />
    </>
  );
}
