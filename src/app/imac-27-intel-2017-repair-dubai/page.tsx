import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Imac27Intel2017Repair";

export const metadata: Metadata = metaForPath("/imac-27-intel-2017-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-27-intel-2017-repair-dubai" />
      <View />
    </>
  );
}
