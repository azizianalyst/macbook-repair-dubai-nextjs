import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookTouchBarFix";

export const metadata: Metadata = metaForPath("/blog/macbook-touch-bar-not-working");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-touch-bar-not-working" />
      <View />
    </>
  );
}
