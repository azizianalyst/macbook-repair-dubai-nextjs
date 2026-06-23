import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/SameDayMacBookRepair";

export const metadata: Metadata = metaForPath("/same-day-macbook-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/same-day-macbook-repair-dubai" />
      <View />
    </>
  );
}
