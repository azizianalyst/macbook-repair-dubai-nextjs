import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM2NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m2-not-turning-on-dubai", {
  title: "MacBook Pro M2 Not Turning On Dubai 2026",
  description: "MacBook Pro M2 not turning on in Dubai? Step-by-step fix: force restart, deep discharge recovery, DFU restore, and when to get logic board repair.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m2-not-turning-on-dubai" />
      <View />
    </>
  );
}
