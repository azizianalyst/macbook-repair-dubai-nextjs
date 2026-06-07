import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone14ProRepair";

export const metadata: Metadata = metaForPath("/iphone-14-pro-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-14-pro-repair-dubai" />
      <View />
    </>
  );
}
