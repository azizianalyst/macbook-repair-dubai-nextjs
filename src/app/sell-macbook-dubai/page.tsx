import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/SellMacBookDubai";

export const metadata: Metadata = metaForPath("/sell-macbook-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/sell-macbook-dubai" />
      <View />
    </>
  );
}
