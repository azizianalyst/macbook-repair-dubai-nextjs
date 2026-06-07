import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Terms";

export const metadata: Metadata = metaForPath("/terms");

export default function Page() {
  return (
    <>
      <PageSchema path="/terms" />
      <View />
    </>
  );
}
