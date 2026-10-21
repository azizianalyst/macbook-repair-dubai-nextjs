import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookNoInternalSSD";

export const metadata: Metadata = metaForPath("/the-macbook-does-not-see-the-internal-ssd");

export default function Page() {
  return (
    <>
      <PageSchema path="/the-macbook-does-not-see-the-internal-ssd" />
      <View />
    </>
  );
}
