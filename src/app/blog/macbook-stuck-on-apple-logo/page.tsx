import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookStuckAppleLogo";

export const metadata: Metadata = metaForPath("/blog/macbook-stuck-on-apple-logo");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-stuck-on-apple-logo" />
      <View />
    </>
  );
}
