import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirScreenReplacement";

export const metadata: Metadata = metaForPath("/macbook-air-screen-replacement-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-screen-replacement-dubai" />
      <View />
    </>
  );
}
