import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacMiniRepair";

export const metadata: Metadata = metaForPath("/mac-mini-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-mini-repair-dubai" />
      <View />
    </>
  );
}
