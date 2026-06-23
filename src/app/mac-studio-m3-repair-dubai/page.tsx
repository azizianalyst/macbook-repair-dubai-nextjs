import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM3RepairHub";

export const metadata: Metadata = metaForPath("/mac-studio-m3-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m3-repair-dubai" />
      <View />
    </>
  );
}
