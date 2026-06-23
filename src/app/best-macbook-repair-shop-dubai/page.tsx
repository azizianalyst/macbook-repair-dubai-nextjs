import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BestMacBookRepairShop";

export const metadata: Metadata = metaForPath("/best-macbook-repair-shop-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/best-macbook-repair-shop-dubai" />
      <View />
    </>
  );
}
