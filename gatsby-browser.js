import "./src/components/prism-coldark-dark.css";
import "./src/styles/dark-mode.css";

import React from "react";
import { ThemeProvider } from "./src/context/theme-context";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
