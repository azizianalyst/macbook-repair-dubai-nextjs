import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneFaceIdRepair";

export const metadata: Metadata = metaForPath("/iphone-face-id-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-face-id-repair-dubai" />
      <View />
    </>
  );
}
