import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Privacy";

export const metadata: Metadata = metaForPath("/privacy");

export default function Page() {
  return (
    <>
      <PageSchema path="/privacy" />
      <View />
    </>
  );
}
