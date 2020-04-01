import * as React from "react";
import { hot } from "react-hot-loader";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { AppState } from "root-reducer";
import { Routes } from "routes";
import { GlobalStyles } from "@lib/globalStyles";
import { lightTheme, darkTheme } from "@lib/themes";
import { SessionLoader } from "@features/shared/session-loader";

export const App: React.FC<{}> = hot(module)(() => {
  const theme = useSelector((state: AppState) => state.theme.mode);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Normalize />
      <SessionLoader>
        <Routes />
      </SessionLoader>
    </ThemeProvider>
  );
});
