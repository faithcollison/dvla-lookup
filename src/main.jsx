import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { GlobalStyles } from "./Global.styles.js";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
