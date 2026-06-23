import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideIPadNotCharging";

export const metadata: Metadata = metaForPath("/why-is-my-ipad-not-charging");

export default function Page() {
  return (
    <>
      <PageSchema path="/why-is-my-ipad-not-charging" />
      <View />
    </>
  );
}
