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
        primary: "#1a5632",
        "primary-light": "#2d7a4a",
        "primary-dark": "#0f3d22",
        secondary: "#c5a55a",
        "secondary-light": "#d4b96e",
        accent: "#4a9b6f",
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
        "primary": "0 10px 40px -10px rgba(26,86,50,0.3)",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(26,86,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,50,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
