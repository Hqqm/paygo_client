import * as React from "react";

interface ThemeContext {
  mode: string;
  toggle: () => void;
}

const defaultThemeMode = "dark";

export const ManagerThemeContext: React.Context<ThemeContext> = React.createContext(
  {
    mode: defaultThemeMode,
    toggle: () => {}
  }
);

export const useTheme = () => React.useContext(ManagerThemeContext);

export const ThemeManager: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState({
    mode: defaultThemeMode
  });

  const toggleTheme = () => {
    setTheme({ mode: theme.mode === "dark" ? "light" : "dark" });
  };

  return (
    <ManagerThemeContext.Provider
      value={{
        mode: theme.mode,
        toggle: toggleTheme
      }}
    >
      {children}
    </ManagerThemeContext.Provider>
  );
};
