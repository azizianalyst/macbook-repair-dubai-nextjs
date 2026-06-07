import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleRepairProgramsDubai";

export const metadata: Metadata = metaForPath("/apple-repair-programs-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-repair-programs-dubai" />
      <View />
    </>
  );
}
