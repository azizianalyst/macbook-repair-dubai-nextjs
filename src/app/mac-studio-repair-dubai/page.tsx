import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioRepair";

export const metadata: Metadata = metaForPath("/mac-studio-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-repair-dubai" />
      <View />
    </>
  );
}
