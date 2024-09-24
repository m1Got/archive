import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { router } from "./Routes";
import { theme } from "./theme";
import { useEffect } from "react";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};
