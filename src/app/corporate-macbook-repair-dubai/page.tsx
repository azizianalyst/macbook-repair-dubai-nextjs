import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/CorporateMacBookRepair";

export const metadata: Metadata = metaForPath("/corporate-macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/corporate-macbook-repair-dubai" />
      <View />
    </>
  );
}
