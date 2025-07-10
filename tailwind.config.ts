import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // AMD-inspired gaming colors
        amd: {
          red: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
            800: "#991b1b",
            900: "#7f1d1d",
          },
          black: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
            950: "#020617",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        scanline: {
          "0%": {
            transform: "translateY(-100vh)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(2deg)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(237, 44, 44, 0.3)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(237, 44, 44, 0.6)",
          },
        },
        buttonGlow: {
          "0%": {
            boxShadow: "0 0 20px rgba(237, 44, 44, 0.4)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(237, 44, 44, 0.8)",
          },
        },
        gpuGlow: {
          "0%": {
            filter:
              "drop-shadow(0 20px 40px rgba(237, 44, 44, 0.3)) brightness(1)",
          },
          "100%": {
            filter:
              "drop-shadow(0 30px 60px rgba(237, 44, 44, 0.6)) brightness(1.1)",
          },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(50px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(50px) rotate(-360deg)",
          },
        },
        "scan-horizontal": {
          "0%": {
            top: "-2px",
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            top: "100%",
            opacity: "0",
          },
        },
        "scan-vertical": {
          "0%": {
            left: "-2px",
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            left: "100%",
            opacity: "0",
          },
        },
        hologram: {
          "0%": {
            backgroundPosition: "-100% 0",
          },
          "100%": {
            backgroundPosition: "100% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scanline: "scanline 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        slideInLeft: "slideInLeft 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
        slideInUp: "slideInUp 1s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        buttonGlow: "buttonGlow 2s ease-in-out infinite alternate",
        gpuGlow: "gpuGlow 3s ease-in-out infinite alternate",
        orbit: "orbit 8s linear infinite",
        "scan-horizontal": "scan-horizontal 4s linear infinite",
        "scan-vertical": "scan-vertical 5s linear infinite",
        hologram: "hologram 4s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
