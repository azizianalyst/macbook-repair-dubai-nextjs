import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/MacBookAirM1Repair";

export const metadata: Metadata = metaFromFields("/macbook-air-m1-repair-dubai", {
  title: "MacBook Air M1 Repair Dubai — Screen, Battery & Logic Board Fix",
  description: "MacBook Air M1 (A2337) repair Dubai. Screen from AED 600, battery from AED 450. Free diagnosis, same-day service, free pickup across Dubai.",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/macbook-air-m1-repair-dubai" />
      <View />
    </>
  );
}
