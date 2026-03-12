import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3a6670",
        "primary-light": "#4d7d88",
        "primary-dark": "#2a4e56",
        secondary: "#c5a55a",
        "secondary-light": "#d4b96e",
        accent: "#5a9aa8",
        dark: "#1a1a1a",
        light: "#f8f7f4",
        muted: "#6b7280",
        cream: "#faf9f6",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        "soft-lg": "0 10px 40px -10px rgba(0,0,0,0.1)",
        "primary": "0 10px 40px -10px rgba(58,102,112,0.3)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(58,102,112,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(58,102,112,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
