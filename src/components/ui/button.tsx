"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// 10px radius default. no pill on primary actions.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold text-[14px] transition-all duration-200 ease-out motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // primary - neutral gray (theme token)
        default: "bg-primary text-primary-foreground border border-primary hover:bg-primary-2",
        primary: "bg-primary text-primary-foreground border border-primary hover:bg-primary-2",
        // whatsapp - official brand green
        whatsapp: "bg-whatsapp text-primary-foreground border border-whatsapp hover:brightness-95",
        // secondary - outlined, inherits text color so it works on light AND dark backgrounds
        secondary: "bg-transparent text-current border border-current/40 hover:bg-current/10",
        ghost: "bg-transparent text-current hover:bg-current/10",
        outline: "bg-transparent text-current border border-current/40 hover:bg-current/10",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
      },
      size: {
        default: "h-10 px-4 py-2 [&_svg]:size-4",
        sm:      "h-8  px-3 text-[13px] [&_svg]:size-4",
        lg:      "h-11 px-6 text-[15px] [&_svg]:size-5",
        pill:    "h-11 rounded-full px-7 text-[15px] [&_svg]:size-5",
        icon:    "h-9  w-9 [&_svg]:size-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
