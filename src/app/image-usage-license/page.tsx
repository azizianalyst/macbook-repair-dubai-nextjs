import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/ImageUsageLicense";

export const metadata: Metadata = metaForPath("/image-usage-license");

export default function Page() {
  return (
    <>
      <PageSchema path="/image-usage-license" />
      <View />
    </>
  );
}
