import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneScreenCrackedUrgent";

export const metadata: Metadata = metaForPath("/blog/iphone-screen-cracked-is-it-urgent");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-screen-cracked-is-it-urgent" />
      <View />
    </>
  );
}
