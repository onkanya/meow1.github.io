import React from "react";
import { ThemeProvider } from "styled-components";
import "./styles/globals.css";
import Home from "./pages/index";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
