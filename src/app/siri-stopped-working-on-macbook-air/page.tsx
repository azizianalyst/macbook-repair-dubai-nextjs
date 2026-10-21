import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideSiriStoppedWorkingMacBookAir";

export const metadata: Metadata = metaForPath("/siri-stopped-working-on-macbook-air");

export default function Page() {
  return (
    <>
      <PageSchema path="/siri-stopped-working-on-macbook-air" />
      <View />
    </>
  );
}
