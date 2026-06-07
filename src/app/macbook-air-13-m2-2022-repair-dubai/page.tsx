import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookAir13M22022Repair";

export const metadata: Metadata = metaForPath("/macbook-air-13-m2-2022-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-13-m2-2022-repair-dubai" />
      <View />
    </>
  );
}
