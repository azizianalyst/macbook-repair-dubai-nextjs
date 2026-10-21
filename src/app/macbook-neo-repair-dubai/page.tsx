import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookNeoRepair";

export const metadata: Metadata = metaForPath("/macbook-neo-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-neo-repair-dubai" />
      <View />
    </>
  );
}
