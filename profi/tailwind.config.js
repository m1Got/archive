/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        fire: "var(--fire)",
        success: "var(--success)",
        lightcyan: "var(--lightcyan)",
        danger: "var(--danger)",
        red: "var(--red)",
        warning: "var(--warning)",
        dark: "var(--dark)",
        charcoal: "var(--charcoal)",
        light: "var(--light)",
        jupiter: "var(--jupiter)",
        medium: "var(--medium)",
        lightgrey: "var(--lightgrey)",
      },
    },
  },
  corePlugins: {},
  plugins: [],
};
