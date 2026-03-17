import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0b3a6e",
          blue: "#155fa0",
          sky: "#dcecff",
          gold: "#d9a423",
          sand: "#f5f1e6",
          ink: "#163047"
        }
      },
      boxShadow: {
        panel: "0 18px 45px rgba(11, 58, 110, 0.12)"
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
