import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacbookPro13M22022Repair";

export const metadata: Metadata = metaForPath("/macbook-pro-13-m2-2022-repair-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-13-m2-2022-repair-dubai" />
      <View />
    </>
  );
}
