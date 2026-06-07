import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneAirEngineering";

export const metadata: Metadata = metaForPath("/blog/iphone-air-design-engineering-marvel");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-air-design-engineering-marvel" />
      <View />
    </>
  );
}
