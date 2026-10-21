import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairSiliconOasis";

export const metadata: Metadata = metaForPath("/macbook-repair-silicon-oasis");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-silicon-oasis" />
      <View />
    </>
  );
}
