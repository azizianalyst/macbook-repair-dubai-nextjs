"use client";
import { ReactNode, ElementType } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger delay in ms (for sequenced items) */
  delay?: number;
};

/**
 * Wraps content in a subtle fade-up-on-scroll reveal. No-JS / reduced-motion
 * safe (content is visible by default; the hook only *adds* motion when allowed).
 */
export function Reveal({ children, as, className, delay = 0 }: Props) {
  const Comp = (as ?? "div") as ElementType;
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <Comp
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        shown
          ? "opacity-100 translate-y-0"
          : "motion-safe:opacity-0 motion-safe:translate-y-4",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export default Reveal;
