import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";
import { PageSchema } from "@/components/PageSchema";
import View from "@/views/Blog21YearsExperience";

export const metadata: Metadata = metaForPath("/blog/why-21-years-experience-matters");

export default function Page() {
  return (
    <>
      <PageSchema path="/blog/why-21-years-experience-matters" />
      <View />
    </>
  );
}
