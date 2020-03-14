import * as React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { hot } from "react-hot-loader";
import { backgroundColor, textColor } from "./lib/theme";
import { useTheme } from "ThemeManager";

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export const App: React.FC<{}> = hot(module)(() => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <Wrapper>hiiiiiii</Wrapper>
      <button onClick={() => theme.toggle()}>toggle theme</button>
    </ThemeProvider>
  );
});
