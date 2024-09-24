import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    medium: Palette["primary"];
  }

  interface PaletteOptions {
    medium?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    medium: true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    pc: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1200,
      pc: 1500,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          boxShadow: "0px 1px 15px 0px rgba(0, 0, 0, 0.03);",
        },
      },
    },
  },
  typography: {
    fontFamily: ["FuturaPT", "sans-serif"].join(","),
  },
  palette: {
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
});

// primary - { #004da6, #016FEE, #338bf1 }
// secondary - { #071019, #0B1725, #3b4550 }
// info - { #5d5d5d, #868686, #9e9e9e }
// medium - { #a9a9a9, #f2f2f2, #f4f4f4 }
