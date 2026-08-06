import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import { getTheme } from "./theme";
import { ThemeModeProvider, useThemeMode } from "./ThemeContext";
import "./index.css";

function Root() {
  const { mode } = useThemeMode();
  return (
    <ConfigProvider theme={getTheme(mode)}>
      <App />
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <Root />
    </ThemeModeProvider>
  </React.StrictMode>
);