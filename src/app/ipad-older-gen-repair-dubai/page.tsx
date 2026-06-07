import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IpadOlderGenRepair";

export const metadata: Metadata = metaForPath("/ipad-older-gen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/ipad-older-gen-repair-dubai" />
      <View />
    </>
  );
}
