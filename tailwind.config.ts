import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        surface: "#050505",
        surfaceGlass: "rgba(11, 11, 11, 0.8)",
        surfaceCard: "#080808",
        neon: {
          green: "#39FF14",
          blue: "#00F0FF",
          deepBlue: "#0066FF",
          glowGreen: "rgba(57, 255, 20, 0.4)",
          glowBlue: "rgba(0, 240, 255, 0.4)",
        },
        muted: "#9CA3AF",
        borderDark: "#1c1c1f",
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #39FF14 0%, #00F0FF 100%)",
        "noise-pattern": "url('/images/noise.png')",
      },
      boxShadow: {
        "neon-subtle": "0 0 15px rgba(57, 255, 20, 0.25)",
        "neon-card": "0 0 25px rgba(57, 255, 20, 0.15), 0 0 35px rgba(0, 240, 255, 0.1)",
      },
      letterSpacing: {
        widestx2: "0.25em",
        widestx3: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
