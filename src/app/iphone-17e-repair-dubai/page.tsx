import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone17eRepair";

export const metadata: Metadata = metaForPath("/iphone-17e-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-17e-repair-dubai" />
      <View />
    </>
  );
}
