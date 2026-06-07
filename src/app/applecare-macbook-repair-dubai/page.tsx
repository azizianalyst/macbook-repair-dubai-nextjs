import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleCareMacBookRepair";

export const metadata: Metadata = metaForPath("/applecare-macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/applecare-macbook-repair-dubai" />
      <View />
    </>
  );
}
