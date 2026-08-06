import { theme as antdTheme, type ThemeConfig } from "antd";

export function getTheme(mode: "light" | "dark"): ThemeConfig {
  const isDark = mode === "dark";

  return {
    algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: isDark ? "#5b7fff" : "#2a4de0",
      colorLink: isDark ? "#5b7fff" : "#2a4de0",
      colorText: isDark ? "#edeff3" : "#10141c",
      colorTextSecondary: isDark ? "#8b93a1" : "#5b6472",
      colorBgBase: isDark ? "#0b0e14" : "#eef0f2",
      colorBgContainer: isDark ? "#131722" : "#ffffff",
      colorBorder: isDark ? "#232838" : "#d9dce2",
      fontFamily: "'Inter', sans-serif",
      borderRadius: 2,
      fontSize: 15,
    },
    components: {
      Button: {
        borderRadius: 2,
        controlHeight: 46,
        fontWeight: 500,
      },
      Progress: {
        defaultColor: isDark ? "#5b7fff" : "#2a4de0",
      },
      Menu: {
        itemSelectedColor: isDark ? "#5b7fff" : "#2a4de0",
      },
    },
  };
}