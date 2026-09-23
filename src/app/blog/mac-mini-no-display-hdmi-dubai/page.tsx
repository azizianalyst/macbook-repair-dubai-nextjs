import type { Metadata } from "next";
import { metaFromFields } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniNoDisplay";

export const metadata: Metadata = metaFromFields("/blog/mac-mini-no-display-hdmi-dubai", {
  title: "Mac mini No Display Over HDMI in Dubai? 6 Fixes 2026",
  description: "Mac mini no display over HDMI in Dubai? 6 fixes for cable, port, resolution and GPU faults. Free diagnosis — message us on WhatsApp.",
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
});

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-no-display-hdmi-dubai" />
      <View />
    </>
  );
}
