import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro16M32023Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-16-m3-2023-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-16-m3-2023-repair-dubai" />
      <View />
    </>
  );
}
