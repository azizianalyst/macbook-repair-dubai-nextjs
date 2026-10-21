import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/IPhoneRepairNearMe";

export const metadata: Metadata = metaForPath("/iphone-repair-near-me-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/iphone-repair-near-me-dubai" />
      <View />
    </>
  );
}
