import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4VsM5";

export const metadata: Metadata = metaForPath("/blog/macbook-pro-m4-vs-m5-worth-upgrade");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-vs-m5-worth-upgrade" />
      <View />
    </>
  );
}
