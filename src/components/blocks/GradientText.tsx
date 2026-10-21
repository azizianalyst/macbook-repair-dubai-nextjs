"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  /** Render as a different element (default: span). */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Tasteful UAE-green gradient text. Applies a left-to-right green gradient
 * clipped to the text. SSR-safe (no window access, pure className output).
 *
 * Usage: <GradientText>21 years</GradientText> inside an h1/h2, etc.
 */
export function GradientText({ children, className, as: Tag = "span" }: GradientTextProps) {
  return (
    <Tag
      className={cn(
        "bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export default GradientText;
