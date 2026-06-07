import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IMacScreenRepair";

export const metadata: Metadata = metaForPath("/imac-screen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/imac-screen-repair-dubai" />
      <View />
    </>
  );
}
