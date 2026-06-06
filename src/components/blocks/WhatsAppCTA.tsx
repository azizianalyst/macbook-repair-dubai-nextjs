"use client";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAP } from "@/content/site";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;        // prefilled text
  label?: string;
  size?: "sm" | "default" | "lg";
  className?: string;
  block?: boolean;         // full width
};

export function WhatsAppCTA({
  message,
  label = "Message on WhatsApp",
  size = "default",
  className,
  block,
}: Props) {
  const href = message
    ? `${NAP.whatsappUrl}?text=${encodeURIComponent(message)}`
    : NAP.whatsappUrl;

  return (
    <Button asChild variant="whatsapp" size={size} className={cn(block && "w-full", className)}>
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <MessageCircle aria-hidden /> {label}
      </a>
    </Button>
  );
}
