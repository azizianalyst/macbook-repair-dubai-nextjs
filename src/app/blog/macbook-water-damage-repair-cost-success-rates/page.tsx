import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookWaterDamageCost";

export const metadata: Metadata = metaForPath("/blog/macbook-water-damage-repair-cost-success-rates");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-water-damage-repair-cost-success-rates" />
      <View />
    </>
  );
}
