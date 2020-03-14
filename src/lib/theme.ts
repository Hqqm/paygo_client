import theme from "styled-theming";

export const backgroundColor: theme.ThemeSet = theme("mode", {
  light: "#fafafa",
  dark: "#222"
});

export const textColor: theme.ThemeSet = theme("mode", {
  light: "#000",
  dark: "#fff"
});
