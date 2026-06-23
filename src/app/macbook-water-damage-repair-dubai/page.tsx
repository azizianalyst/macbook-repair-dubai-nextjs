import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookWaterDamage";

export const metadata: Metadata = metaFromFields("/macbook-water-damage-repair-dubai", {
  title: "MacBook Water Damage Repair Dubai — Act Fast, Save Your Mac",
  description: "MacBook water damage repair Dubai. Coffee, water, juice spill on MacBook Air or Pro. Act within 24 hours for best recovery rate. Free diagnosis. From AED 400. Call 055 741 3706.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-water-damage-repair-dubai" />
      <View />
    </>
  );
}
