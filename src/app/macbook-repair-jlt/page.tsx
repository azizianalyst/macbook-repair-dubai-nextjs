import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRepairJLT";

export const metadata: Metadata = metaForPath("/macbook-repair-jlt");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-repair-jlt" />
      <View />
    </>
  );
}
