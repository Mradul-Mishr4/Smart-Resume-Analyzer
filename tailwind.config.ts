import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        dark: {
          bg: "#0a0a0a",
          surface: "#121212",
          card: "#1a1a1a",
          border: "#2a2a2a",
          text: "#e5e5e5",
          "text-secondary": "#a0a0a0",
          "text-muted": "#6b7280",
        },
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};

export default config;
