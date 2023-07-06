import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import InjectTailwind from "./injectTailwind.tsx";
import { CssBaseline } from "@mui/material";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigModule from "../tailwind.config.js";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const tailwindConfig = resolveConfig(tailwindConfigModule);
const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.primary.main,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <InjectTailwind>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </InjectTailwind>
  </React.StrictMode>
);
