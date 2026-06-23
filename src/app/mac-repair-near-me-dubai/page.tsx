import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacRepairNearMe";

export const metadata: Metadata = metaForPath("/mac-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-repair-near-me-dubai" />
      <View />
    </>
  );
}
