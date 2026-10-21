import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookVirusRemoval";

export const metadata: Metadata = metaForPath("/macbook-virus-removal-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-virus-removal-dubai" />
      <View />
    </>
  );
}
