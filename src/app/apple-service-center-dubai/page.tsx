import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/AppleServiceCenter";

export const metadata: Metadata = metaForPath("/apple-service-center-dubai");

export default function Page() {
  return (
    <>
      <PageSchema path="/apple-service-center-dubai" />
      <View />
    </>
  );
}
