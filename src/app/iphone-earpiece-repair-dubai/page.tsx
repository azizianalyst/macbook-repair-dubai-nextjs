import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneEarpieceRepair";

export const metadata: Metadata = metaForPath("/iphone-earpiece-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-earpiece-repair-dubai" />
      <View />
    </>
  );
}
