import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Refund";

export const metadata: Metadata = metaForPath("/refund");

export default function Page() {
  return (
    <>
      <PageSchema path="/refund" />
      <View />
    </>
  );
}
