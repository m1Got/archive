/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        dark: "var(--dark)",
        secondary: "var(--secondary)",
        medium: "var(--medium)",
        light: "var(--light)",
        tertiary: "var(--tertiary)",
        success: "var(--success)",
        "light-white": "rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};
