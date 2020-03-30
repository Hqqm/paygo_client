import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  colors: {
    body: "#f3f3f3",
    text: "#ffffff",
    white: "#ffffff",
    grey: "#eaeaea",
    primary: "#bf9fee"
  },
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem"
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
    small: "0.5rem",
    medium: "1rem",
    large: "2rem"
  }
};

const defaultTheme = {
  space: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem"
  }
};
