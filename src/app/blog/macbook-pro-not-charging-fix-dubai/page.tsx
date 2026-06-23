import type { Metadata } from "next";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogMacBookProNotCharging";

export const metadata: Metadata = {
  title: "MacBook Pro Not Charging? Fix Guide Dubai 2026",
  description: "MacBook Pro not charging fix in Dubai? 6 causes, faulty cable, MagSafe port, charging IC, liquid damage, Dubai heat, with step-by-step solutions.",
  openGraph: {
    title: "MacBook Pro Not Charging? Fix Guide Dubai 2026",
    description: "MacBook Pro not charging in Dubai? 6 causes diagnosed step-by-step. Charging repair from AED 350, same-day service.",
    url: "https://macbook-repair-dubai.ae/blog/macbook-pro-not-charging-fix-dubai",
    type: "article",
    publishedTime: "2026-06-22",
    modifiedTime: "2026-06-22",
    images: [
      {
        url: "https://macbook-repair-dubai.ae/images/topics/macbook-usbc-port-repair-dubai-desktop.avif",
        width: 1600,
        height: 900,
        alt: "MacBook Pro not charging, technician inspecting USB-C charging port at Dubai repair workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro Not Charging? Fix Guide Dubai 2026",
    description: "6 causes diagnosed step-by-step. Charging repair from AED 350 in Dubai.",
    images: ["https://macbook-repair-dubai.ae/images/topics/macbook-usbc-port-repair-dubai-desktop.avif"],
  },
  alternates: {
    canonical: "https://macbook-repair-dubai.ae/blog/macbook-pro-not-charging-fix-dubai",
  },
};

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/macbook-pro-not-charging-fix-dubai" />
      <View />
    </>
  );
}
