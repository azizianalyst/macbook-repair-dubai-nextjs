import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/SellFaultyMacBookDubai";

export const metadata: Metadata = metaForPath("/sell-faulty-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/sell-faulty-macbook-dubai" />
      <View />
    </>
  );
}
