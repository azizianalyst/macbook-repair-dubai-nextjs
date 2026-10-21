import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Warranty";

export const metadata: Metadata = metaForPath("/warranty");

export default function Page() {
  return (
    <>
      <PageSchema path="/warranty" />
      <View />
    </>
  );
}
