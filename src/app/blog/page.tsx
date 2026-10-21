import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Blog";

export const metadata: Metadata = metaForPath("/blog");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog" />
      <View />
    </>
  );
}
