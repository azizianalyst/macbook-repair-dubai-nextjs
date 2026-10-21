import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookRunningSlow";

export const metadata: Metadata = metaForPath("/blog/macbook-running-slow-10-fixes");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-running-slow-10-fixes" />
      <View />
    </>
  );
}
