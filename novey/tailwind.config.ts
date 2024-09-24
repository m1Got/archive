import type { Config } from "tailwindcss";
import { theme } from "./src/app/theme";

const getBreakpoints = (breakpoints: { [key: string]: number }) => {
  let newBreakpoints: { [key: string]: string } = {};
  const keys = Object.keys(breakpoints);
  const values = Object.values(breakpoints).map((value) => value.toString());
  keys.forEach(
    (_, index) => (newBreakpoints[keys[index]] = `${values[index]}px`)
  );
  return newBreakpoints;
};

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#016FEE",
          dark: "#004da6",
          light: "#338bf1",
        },
        secondary: {
          main: "#0B1725",
          dark: "#071019",
          light: "#3b4550",
        },
        info: {
          main: "#868686",
          dark: "#5d5d5d",
          light: "#9e9e9e",
        },
        medium: {
          main: "#f2f2f2",
          dark: "#a9a9a9",
          light: "#f4f4f4",
        },
      },
    },
    screens: {
      ...getBreakpoints(theme.breakpoints.values),
    },
    fontFamily: {
      sans: ["FuturaPT", "sans-serif"],
      mono: ["Benzin", "sans-serif"],
    },
  },
  plugins: [],
} as Config;
