import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhone18ProMaxRepair";

export const metadata: Metadata = metaForPath("/iphone-18-pro-max-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-18-pro-max-repair-dubai" />
      <View />
    </>
  );
}
