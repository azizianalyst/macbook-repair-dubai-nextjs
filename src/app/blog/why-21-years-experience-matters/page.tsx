import type { Metadata } from "next";
import { metaForPath } from "@/lib/page-meta";

export const metadata: Metadata = metaForPath("/blog/why-21-years-experience-matters");
export { default } from "@/views/Blog21YearsExperience";
