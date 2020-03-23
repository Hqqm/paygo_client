import * as React from "react";
import { hot } from "react-hot-loader";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { AppState } from "store";
import { GlobalStyles } from "@lib/globalStyles";
import { lightTheme, darkTheme } from "@lib/themes";
import { SignUpPage } from "@features/auth/sign-up/SignUpPage";

export const App: React.FC<{}> = hot(module)(() => {
  const theme = useSelector((state: AppState) => state.theme.mode);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Normalize />
      <SignUpPage />
    </ThemeProvider>
  );
});
