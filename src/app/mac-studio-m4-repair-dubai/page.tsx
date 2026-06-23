import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM4RepairHub";

export const metadata: Metadata = metaForPath("/mac-studio-m4-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m4-repair-dubai" />
      <View />
    </>
  );
}
