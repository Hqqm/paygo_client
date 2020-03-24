import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "rootReducer";
import { setTheme, setThemeInLocalStorage } from "./toggler-theme-slice";

export const TogglerTheme = () => {
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    const preferUserColorSchemeIsDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (preferUserColorSchemeIsDark && !localTheme) {
      setMode("dark");
    }

    localTheme !== null
      ? dispatch(setTheme({ mode: localTheme }))
      : setMode("light");
  }, []);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state: AppState) => state.theme.mode);

  const setMode = (mode: string) => {
    dispatch(setThemeInLocalStorage({ mode }));
    dispatch(setTheme({ mode }));
  };

  const toggleTheme = () => {
    currentTheme === "dark" ? setMode("light") : setMode("dark");
  };

  return <button onClick={toggleTheme}>оп</button>;
};
