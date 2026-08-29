import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacMiniUpgrade";

export const metadata: Metadata = {
  title: "Mac mini SSD and RAM Upgrade Dubai 2026: Cost Guide",
  description: "Mac mini SSD and RAM upgrade in Dubai. Intel mini RAM and SSD upgrades, same day. Message us on WhatsApp for today's exact price on your model.",
  openGraph: {
    title: "Mac mini SSD and RAM Upgrade Dubai 2026: Cost Guide",
    description: "Mac mini SSD and RAM upgrade in Dubai. Intel mini RAM and SSD upgrades, same day. Message us on WhatsApp for today's exact price on your model.",
    url: "https://macbook-repair-dubai.ae/blog/mac-mini-ssd-ram-upgrade-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [{ url: "https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif", width: 1600, height: 900, alt: "Mac mini SSD RAM upgrade Dubai, Dubai repair workshop" }],
  },
  twitter: { card: "summary_large_image", title: "Mac mini SSD and RAM Upgrade Dubai 2026: Cost Guide", description: "Mac mini SSD and RAM upgrade in Dubai. Intel mini RAM and SSD upgrades, same day. Message us on WhatsApp for today's exact price on your model.", images: ["https://macbook-repair-dubai.ae/images/topics/blog-apple-silicon-dubai-desktop.avif"] },
  alternates: { canonical: "https://macbook-repair-dubai.ae/blog/mac-mini-ssd-ram-upgrade-dubai" },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/mac-mini-ssd-ram-upgrade-dubai" />
      <View />
    </>
  );
}
