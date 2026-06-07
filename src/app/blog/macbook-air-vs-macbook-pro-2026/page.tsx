import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirVsPro2026";

export const metadata: Metadata = metaForPath("/blog/macbook-air-vs-macbook-pro-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-vs-macbook-pro-2026" />
      <View />
    </>
  );
}
