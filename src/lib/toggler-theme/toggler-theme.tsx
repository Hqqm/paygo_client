import * as React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "root-reducer";
import { setTheme, setThemeInLocalStorage } from "./toggler-theme-slice";
import { Button } from "@ui/atoms";

export const TogglerTheme = () => {
  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (currentTheme === localTheme && localTheme !== null) return;

    const preferUserColorSchemeIsDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (preferUserColorSchemeIsDark && !localTheme) {
      setMode("dark");
    }

    localTheme !== null ? dispatch(setTheme({ mode: localTheme })) : setMode("light");
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

  return <StyledThemeToggler onClick={toggleTheme}>сменить тему</StyledThemeToggler>;
};

const StyledThemeToggler = styled.button`
  width: 100%;
  border: none;
  background: #fff;
  font-size: calc(14px + 0.4vw);
  cursor: pointer;
  padding: 22px;

  &:hover {
    color: #9262fd;
  }
`;
