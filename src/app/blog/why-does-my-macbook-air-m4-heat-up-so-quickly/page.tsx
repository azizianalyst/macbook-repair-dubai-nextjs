import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookAirM4Overheating";

export const metadata: Metadata = metaForPath("/blog/why-does-my-macbook-air-m4-heat-up-so-quickly");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/why-does-my-macbook-air-m4-heat-up-so-quickly" />
      <View />
    </>
  );
}
