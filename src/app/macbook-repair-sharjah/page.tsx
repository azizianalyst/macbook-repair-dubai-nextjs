import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairSharjah";

export const metadata: Metadata = metaForPath("/macbook-repair-sharjah");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-sharjah" />
      <View />
    </>
  );
}
