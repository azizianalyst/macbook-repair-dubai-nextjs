import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAjman";

export const metadata: Metadata = metaForPath("/macbook-repair-ajman");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-ajman" />
      <View />
    </>
  );
}
