import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/BlogIPhoneAirWhatNotToDo";

export const metadata: Metadata = metaForPath("/blog/iphone-air-what-not-to-do");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/iphone-air-what-not-to-do" />
      <View />
    </>
  );
}
