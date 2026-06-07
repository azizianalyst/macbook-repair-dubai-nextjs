import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Imac24M12021Repair";

export const metadata: Metadata = metaForPath("/imac-24-m1-2021-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-24-m1-2021-repair-dubai" />
      <View />
    </>
  );
}
