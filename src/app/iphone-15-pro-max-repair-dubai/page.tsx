import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone15ProMaxRepair";

export const metadata: Metadata = metaForPath("/iphone-15-pro-max-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-15-pro-max-repair-dubai" />
      <View />
    </>
  );
}
