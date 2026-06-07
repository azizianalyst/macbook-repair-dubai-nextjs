import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookInsurance";

export const metadata: Metadata = metaForPath("/macbook-insurance-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-insurance-dubai" />
      <View />
    </>
  );
}
