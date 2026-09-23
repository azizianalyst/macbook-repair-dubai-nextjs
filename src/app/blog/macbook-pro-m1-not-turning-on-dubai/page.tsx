import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProM1NotTurningOn";

export const metadata: Metadata = metaFromFields("/blog/macbook-pro-m1-not-turning-on-dubai", {
  title: "MacBook Pro M1 Not Turning On Dubai 2026",
  description: "MacBook Pro M1 not turning on in Dubai? At 5 years old, M1 13-inch has no MagSafe: USB-C deep discharge is different to diagnose.",
  publishedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-m1-not-turning-on-dubai" />
      <View />
    </>
  );
}
