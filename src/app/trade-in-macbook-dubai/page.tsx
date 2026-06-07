import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/TradeInMacBookDubai";

export const metadata: Metadata = metaForPath("/trade-in-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/trade-in-macbook-dubai" />
      <View />
    </>
  );
}
