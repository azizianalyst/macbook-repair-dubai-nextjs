import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookRamUpgrade";

export const metadata: Metadata = metaForPath("/macbook-ram-upgrade-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-ram-upgrade-dubai" />
      <View />
    </>
  );
}
