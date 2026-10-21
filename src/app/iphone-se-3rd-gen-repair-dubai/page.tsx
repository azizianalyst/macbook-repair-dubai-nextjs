import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneSe3rdGenRepair";

export const metadata: Metadata = metaForPath("/iphone-se-3rd-gen-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-se-3rd-gen-repair-dubai" />
      <View />
    </>
  );
}
