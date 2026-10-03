import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#E5C89F",
        terracotta: "#C37956",
        olive: "#BE9244",
        bark: "#654433",
        sage: "#7A847C",
        stone: "#3C3835",
        cream: "#F6F4EE",
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "var(--font-display-th)",
          "Georgia",
          "serif",
        ],
        body: [
          "var(--font-body)",
          "var(--font-body-th)",
          "'Segoe UI'",
          "sans-serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
