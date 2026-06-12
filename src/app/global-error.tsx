"use client";

// Last-resort error boundary for failures in the ROOT layout itself. It replaces
// the whole document, so it must render its own <html>/<body>. globals.css may not
// have loaded at this point, so styles are inlined to guarantee a usable fallback.

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en-AE">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#f5f5f7",
          color: "#1b1f22",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 480 }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Something went wrong</h1>
            <p style={{ fontSize: "1.05rem", color: "#555", marginBottom: "1.5rem" }}>
              A critical error occurred. Please try again, or call us and we&apos;ll help
              right away.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => reset()}
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: 999,
                  border: "none",
                  background: "#151D2E",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  padding: "0.6rem 1.5rem",
                  borderRadius: 999,
                  border: "1px solid #ccc",
                  color: "#1b1f22",
                  textDecoration: "none",
                }}
              >
                Go to homepage
              </a>
              <a href="tel:+971557413706" style={{ padding: "0.6rem 0", color: "#0A7A40", textDecoration: "underline" }}>
                Call 055 741 3706
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
