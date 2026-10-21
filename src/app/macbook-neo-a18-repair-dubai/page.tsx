import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookNeoA18RepairHub";

export const metadata: Metadata = metaForPath("/macbook-neo-a18-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-neo-a18-repair-dubai" />
      <View />
    </>
  );
}
