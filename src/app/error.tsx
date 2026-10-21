"use client";

// Route-level error boundary (App Router). Catches render/runtime errors in any
// page below the root layout and shows a branded fallback with a retry + contact CTA,
// instead of Next's default unstyled error screen.

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-4xl font-bold">Something went wrong</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          An unexpected error occurred. Please try again — or reach us directly and
          we&apos;ll help right away.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-full bg-primary px-6 py-2.5 font-medium text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-6 py-2.5 font-medium hover:bg-background"
          >
            Go to homepage
          </a>
          <a href="tel:+971557413706" className="text-accent underline hover:text-accent/90">
            Call 055 741 3706
          </a>
        </div>
      </div>
    </div>
  );
}
