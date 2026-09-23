import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM3NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m3-not-turning-on-dubai", {
  title: "MacBook Pro M3 Not Turning On Dubai 2026",
  description: "MacBook Pro M3 not turning on in Dubai? Dead, black screen, or won't boot after update. Force restart, deep discharge fix, DFU restore guide.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m3-not-turning-on-dubai" />
      <View />
    </>
  );
}
