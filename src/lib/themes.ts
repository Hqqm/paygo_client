import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    body: "#f3f3f3",
    text: "#000000",
    white: "#ffffff",
    grey: "#eaeaea",
    primary: "#bf9fee"
  },
  space: {
    xss: "0.125rem",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem"
  }
};

export const darkTheme: DefaultTheme = {
  colors: {
    body: "#363537",
    text: "#FAFAFA",
    white: "#ffffff",
    grey: "#f3f3f3",
    primary: "#bf9fee"
  },
  space: {
    xss: "0.125rem",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem"
  }
};

const defaultTheme = {
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem"
  }
};
