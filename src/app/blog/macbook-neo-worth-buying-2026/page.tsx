import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookNeoWorthBuying";

export const metadata: Metadata = metaForPath("/blog/macbook-neo-worth-buying-2026");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-neo-worth-buying-2026" />
      <View />
    </>
  );
}
