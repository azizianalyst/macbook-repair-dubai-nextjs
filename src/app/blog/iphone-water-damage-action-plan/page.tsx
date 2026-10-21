import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneWaterDamageActionPlan";

export const metadata: Metadata = metaForPath("/blog/iphone-water-damage-action-plan");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-water-damage-action-plan" />
      <View />
    </>
  );
}
