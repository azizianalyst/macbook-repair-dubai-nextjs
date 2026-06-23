import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM2Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m2-repair-dubai", {
  title: "MacBook Air M2 Repair Dubai — Screen, Battery & Board",
  description: "MacBook Air M2 repair Dubai. 13-inch and 15-inch. Screen from AED 600, battery from AED 450. Free diagnosis, same-day service, free pickup across Dubai.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m2-repair-dubai" />
      <View />
    </>
  );
}
