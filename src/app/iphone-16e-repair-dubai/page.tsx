import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone16eRepair";

export const metadata: Metadata = metaForPath("/iphone-16e-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-16e-repair-dubai" />
      <View />
    </>
  );
}
