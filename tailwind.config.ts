// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f1a",
        nebula: "#5b5bd6",
        quantum: "#6b2bd9",
        ion: "#19c3ff",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06)",
      },
      animation: {
        "slow-pulse": "slowPulse 6s ease-in-out infinite",
      },
      keyframes: {
        slowPulse: {
          "0%,100%": { opacity: .35, transform: "scale(1)" },
          "50%": { opacity: .7, transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
