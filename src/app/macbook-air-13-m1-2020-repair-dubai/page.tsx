import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookAir13M12020Repair";

export const metadata: Metadata = metaForPath("/macbook-air-13-m1-2020-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-13-m1-2020-repair-dubai" />
      <View />
    </>
  );
}
