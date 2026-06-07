import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookBlackScreen";

export const metadata: Metadata = metaForPath("/blog/macbook-black-screen-fix");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-black-screen-fix" />
      <View />
    </>
  );
}
