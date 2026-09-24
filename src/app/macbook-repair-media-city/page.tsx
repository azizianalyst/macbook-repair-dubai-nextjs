import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMediaCity";

export const metadata: Metadata = metaForPath("/macbook-repair-media-city");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-media-city" />
      <View />
    </>
  );
}
