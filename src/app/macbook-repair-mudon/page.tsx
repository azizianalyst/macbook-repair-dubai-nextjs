import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairMudon";

export const metadata: Metadata = metaForPath("/macbook-repair-mudon");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-mudon" />
      <View />
    </>
  );
}
