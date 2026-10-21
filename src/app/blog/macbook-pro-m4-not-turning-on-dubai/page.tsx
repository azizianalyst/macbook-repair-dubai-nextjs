import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM4NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m4-not-turning-on-dubai", {
  title: "MacBook Pro M4 Not Turning On Dubai 2026",
  description: "MacBook Pro M4 not turning on in Dubai? Dead, black screen, or stuck on Apple logo? Force restart, deep discharge fix, and black screen vs dead diagnosis.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m4-not-turning-on-dubai" />
      <View />
    </>
  );
}
