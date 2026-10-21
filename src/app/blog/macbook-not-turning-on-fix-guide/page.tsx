import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookNotTurningOn";

export const metadata: Metadata = metaForPath("/blog/macbook-not-turning-on-fix-guide");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-not-turning-on-fix-guide" />
      <View />
    </>
  );
}
