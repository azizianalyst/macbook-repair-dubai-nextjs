import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacPortRepair";

export const metadata: Metadata = metaForPath("/mac-port-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-port-repair-dubai" />
      <View />
    </>
  );
}
