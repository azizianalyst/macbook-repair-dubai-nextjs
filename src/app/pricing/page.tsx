import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Pricing";

export const metadata: Metadata = metaForPath("/pricing");

export default function Page() {
  return (
    <>
      <PageSchema path="/pricing" />
      <View />
    </>
  );
}
