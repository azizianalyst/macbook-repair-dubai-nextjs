import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairAbuDhabi";

export const metadata: Metadata = metaForPath("/macbook-repair-abu-dhabi");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-abu-dhabi" />
      <View />
    </>
  );
}
