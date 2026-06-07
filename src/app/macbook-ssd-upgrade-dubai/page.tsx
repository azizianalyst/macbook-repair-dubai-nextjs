import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookSsdUpgrade";

export const metadata: Metadata = metaForPath("/macbook-ssd-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-ssd-upgrade-dubai" />
      <View />
    </>
  );
}
