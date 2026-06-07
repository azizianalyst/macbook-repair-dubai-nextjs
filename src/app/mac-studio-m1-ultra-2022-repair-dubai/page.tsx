import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM1Ultra2022Repair";

export const metadata: Metadata = metaForPath("/mac-studio-m1-ultra-2022-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m1-ultra-2022-repair-dubai" />
      <View />
    </>
  );
}
