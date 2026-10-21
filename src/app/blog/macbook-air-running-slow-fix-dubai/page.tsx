import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookAirRunningSlow";

export const metadata: Metadata = metaFromFields("/blog/macbook-air-running-slow-fix-dubai", {
  title: "MacBook Air Running Slow Fix Dubai 2026 — M1 to M5",
  description: "MacBook Air running slow in Dubai? Thermal throttling, RAM pressure, startup items and full storage explained, with free fixes for M1 to M5. Ask us.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-air-running-slow-fix-dubai" />
      <View />
    </>
  );
}
