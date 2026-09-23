import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacProNoDisplay";

export const metadata: Metadata = metaFromFields("/blog/mac-pro-no-display-dubai", {
  title: "Mac Pro No Display in Dubai? 6 Fixes for Black Screen 2026",
  description: "Mac Pro no display or black screen in Dubai? 6 fixes for GPU module, cable and port faults on 2019 and Intel models. Free diagnosis — message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-pro-no-display-dubai" />
      <View />
    </>
  );
}
