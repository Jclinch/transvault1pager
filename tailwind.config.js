// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        neutral: "var(--color-neutral)",
        accent: "var(--color-accent)",
        bright: "var(--color-bright)",
        bg: "var(--color-bg)",
        foreground: "var(--color-foreground)",
      },
    },
  },
  plugins: [],
};

