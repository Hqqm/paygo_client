import * as React from "react";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader";
import { GlobalStyles } from "@lib/globalStyles";
import { lightTheme, darkTheme } from "@lib/themes";
import { useThemeMode } from "@lib/useDarkMode";
import { Form } from "@features/auth/sign-up/Form";

export const App: React.FC<{}> = hot(module)(() => {
  const [theme, toggleTheme, componentMounted] = useThemeMode("dark");
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Form />
      <button onClick={toggleTheme}>toggle theme</button>
    </ThemeProvider>
  );
});
