import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniNoDisplay";

export const metadata: Metadata = {
  title: "Mac mini No Display Over HDMI in Dubai? 6 Fixes 2026",
  description: "Mac mini no display over HDMI in Dubai? 6 fixes for cable, port, resolution and GPU faults. Free diagnosis — message us on WhatsApp.",
  openGraph: {
    title: "Mac mini No Display Over HDMI in Dubai? 6 Fixes 2026",
    description: "Mac mini no display over HDMI in Dubai? 6 fixes for cable, port, resolution and GPU faults. Free diagnosis — message us on WhatsApp.",
    url: "https://macbook-repair-dubai.ae/blog/mac-mini-no-display-hdmi-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac mini no display, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac mini No Display Over HDMI in Dubai? 6 Fixes 2026", description: "Mac mini no display over HDMI in Dubai? 6 fixes for cable, port, resolution and GPU faults. Free diagnosis — message us on WhatsApp.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-mini-no-display-hdmi-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-no-display-hdmi-dubai" />
      <View />
    </>
  );
}
