import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookWaterDamage";

export const metadata: Metadata = metaFromFields("/macbook-water-damage-repair-dubai", {
  title: "MacBook Water Damage Repair Dubai — Act Fast, Save Your Mac",
  description: "MacBook water damage repair in Dubai for coffee, water or juice spills on Air or Pro. Act within 24 hours; ultrasonic clean and board repair. WhatsApp us.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-water-damage-repair-dubai" />
      <View />
    </>
  );
}
