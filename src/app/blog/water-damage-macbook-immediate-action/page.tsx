import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogWaterDamageMacBookImmediate";

export const metadata: Metadata = metaForPath("/blog/water-damage-macbook-immediate-action");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/water-damage-macbook-immediate-action" />
      <View />
    </>
  );
}
