import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacStudioM2Ultra2023Repair";

export const metadata: Metadata = metaForPath("/mac-studio-m2-ultra-2023-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/mac-studio-m2-ultra-2023-repair-dubai" />
      <View />
    </>
  );
}
