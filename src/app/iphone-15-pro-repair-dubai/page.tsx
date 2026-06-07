import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone15ProRepair";

export const metadata: Metadata = metaForPath("/iphone-15-pro-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-15-pro-repair-dubai" />
      <View />
    </>
  );
}
