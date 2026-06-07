import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookLoudFan";

export const metadata: Metadata = metaForPath("/blog/macbook-fan-loud-always-on");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-fan-loud-always-on" />
      <View />
    </>
  );
}
