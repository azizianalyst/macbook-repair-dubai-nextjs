import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/OnsiteMacBookRepair";

export const metadata: Metadata = metaForPath("/onsite-macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/onsite-macbook-repair-dubai" />
      <View />
    </>
  );
}
