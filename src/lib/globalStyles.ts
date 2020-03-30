import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
    line-height: 1.5;
  }`;
