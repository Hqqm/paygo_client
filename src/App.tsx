import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { hot } from "react-hot-loader";
import { GlobalStyles } from "@lib/globalStyles";
import { lightTheme, darkTheme } from "@lib/themes";
import { useThemeMode } from "@lib/useDarkMode";
import { SignUp } from "@features/auth/sign-up/SignUp";

export const App: React.FC<{}> = hot(module)(() => {
  const [theme, toggleTheme, componentMounted] = useThemeMode("dark");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <SignUp />
      <button onClick={toggleTheme}>toggle theme</button>
    </ThemeProvider>
  );
});
