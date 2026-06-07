import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Imac27Intel2019Repair";

export const metadata: Metadata = metaForPath("/imac-27-intel-2019-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-27-intel-2019-repair-dubai" />
      <View />
    </>
  );
}
