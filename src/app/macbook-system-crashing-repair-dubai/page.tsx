import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookSystemCrashing";

export const metadata: Metadata = metaForPath("/macbook-system-crashing-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-system-crashing-repair-dubai" />
      <View />
    </>
  );
}
