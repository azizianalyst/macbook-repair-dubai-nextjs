import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Reviews";

export const metadata: Metadata = metaForPath("/reviews");

export default function Page() {
  return (
    <>
      <PageSchema path="/reviews" />
      <View />
    </>
  );
}
