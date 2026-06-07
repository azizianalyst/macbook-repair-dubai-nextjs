import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookGuides";

export const metadata: Metadata = metaForPath("/macbook-guides");

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-guides" />
      <View />
    </>
  );
}
