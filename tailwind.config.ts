import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary Palette (from official KidsMeals brand identity)
          orange: "#F2873B", // Sunny Orange
          green: "#468B25", // Fresh Leaf Green
          "green-deep": "#2E7D32", // Deep Forest Green
          "green-zest": "#3D7F36", // Zest Green
          lime: "#8BC34A", // Lime green
          yellow: "#FDC800", // Sunshine Yellow
          white: "#FFFFFF",

          // Orange Shades
          "orange-light": "#FFA726",
          "orange-shade": "#F69723",
          "orange-dark": "#E65100",

          // Green Shades
          "green-light": "#81C784",
          "green-bright": "#66BB6A",
          "green-medium": "#4CAF50",
          "green-forest": "#1B5E20",

          // Neutral Colors
          "gray-soft": "#F5F5F5",
          "gray-mid": "#E0E0E0",
          "slate-dark": "#37474F",
          "slate-darker": "#263238",
          "yellow-light": "#FFF8E1",
        },
      },
      fontFamily: {
        dana: ["Dana", "IRANSans", "Vazirmatn", "Tahoma", "sans-serif"],
        body: ["IRANSans", "Vazirmatn", "Dana", "Tahoma", "sans-serif"],
        vazir: ["Vazirmatn", "IRANSans", "Tahoma", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
