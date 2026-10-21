import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogLaptopRepairVsBuyNew";

export const metadata: Metadata = metaForPath("/blog/laptop-repair-vs-buy-new-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/laptop-repair-vs-buy-new-2026" />
      <View />
    </>
  );
}
