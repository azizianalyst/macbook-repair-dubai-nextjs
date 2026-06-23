import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/GuideMacBookProM4Thunderbolt5Monitor";

export const metadata: Metadata = metaForPath("/macbook-pro-m4-with-thunderbolt-5-and-portable-monitor");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-pro-m4-with-thunderbolt-5-and-portable-monitor" />
      <View />
    </>
  );
}
