import * as React from "react";

export const useThemeMode = (
  initial: string
): [string, () => void, boolean] => {
  const [theme, setTheme] = React.useState(initial);
  const [componentMounted, setComponentMounted] = React.useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
