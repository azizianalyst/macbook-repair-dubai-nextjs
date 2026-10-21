import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro14M1Pro2021Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-14-m1-pro-2021-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-14-m1-pro-2021-repair-dubai" />
      <View />
    </>
  );
}
