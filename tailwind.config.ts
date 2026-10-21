import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// design tokens live in src/styles/tokens.css — this file only maps them
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "20px", md: "24px" },
      screens: { "2xl": "1400px" },
    },
    extend: {
      maxWidth: {
        content: "1400px",
        narrow: "720px",
      },
      colors: {
        // surfaces
        bg:        "hsl(var(--bg))",
        "bg-alt":  "hsl(var(--bg-alt))",
        "bg-card": "hsl(var(--bg-card))",

        // text
        text:         "hsl(var(--text))",
        "text-muted": "hsl(var(--text-muted))",
        "text-faint": "hsl(var(--text-faint))",

        // on-dark-band text (hero / footer / CTA cards — always-dark surfaces)
        "on-primary":       "hsl(var(--on-primary))",
        "on-primary-muted": "hsl(var(--on-primary-muted))",
        "on-primary-faint": "hsl(var(--on-primary-faint))",

        // brand
        primary: {
          DEFAULT: "hsl(var(--primary))",
          2: "hsl(var(--primary-2))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          2: "hsl(var(--accent-2))",
          bright: "hsl(var(--accent-bright))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // functional
        success:  "hsl(var(--success))",
        warning:  "hsl(var(--warning))",
        danger:   "hsl(var(--danger))",
        error:    "hsl(var(--danger))", // alias: views use bg-error/text-error for red alert states
        info:     "hsl(var(--info))",
        star:     "hsl(var(--star))",
        whatsapp: "hsl(var(--whatsapp))",

        // shadcn compat (existing ui/* components)
        border: "hsl(var(--border))",
        "border-strong": "hsl(var(--border-strong))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        heading: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        body:    ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono:    ["SF Mono", "SFMono-Regular", "ui-monospace", "Menlo", "Monaco", "Consolas", "monospace"],
        sans:    ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "SF Pro Display", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        xs:   "4px",
        sm:   "8px",
        md:   "16px",
        lg:   "24px",
        xl:   "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      borderRadius: {
        sm:   "6px",
        md:   "10px",
        lg:   "16px",
        xl:   "24px",
        full: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(20,22,28,.05)",
        md: "0 2px 8px rgba(20,22,28,.07)",
        lg: "0 8px 24px rgba(20,22,28,.09)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up":        { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "float":          { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        "shimmer":        { "0%": { backgroundPosition: "200% 0" }, "100%": { backgroundPosition: "-200% 0" } },
      },
      animation: {
        "accordion-down": "accordion-down 200ms ease-out",
        "accordion-up":   "accordion-up 200ms ease-out",
        "fade-up":        "fade-up 400ms ease-out",
        "float":          "float 4s ease-in-out infinite",
        "shimmer":        "shimmer 3.2s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
