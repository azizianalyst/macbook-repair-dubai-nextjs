import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookBatteryHealthCheck";

export const metadata: Metadata = metaForPath("/blog/macbook-battery-health-check-guide");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-battery-health-check-guide" />
      <View />
    </>
  );
}
