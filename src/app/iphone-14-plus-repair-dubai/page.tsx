import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone14PlusRepair";

export const metadata: Metadata = metaForPath("/iphone-14-plus-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-14-plus-repair-dubai" />
      <View />
    </>
  );
}
