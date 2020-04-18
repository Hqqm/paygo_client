import * as React from "react";
import styled from "styled-components";

type MainTempalteProps = {
  header: React.ReactNode;
  main: React.ReactNode;
};

export const MainTempalte = ({ header, main }: MainTempalteProps) => (
  <MainWrapper>
    {header}
    <MainContainer>{main}</MainContainer>
  </MainWrapper>
);

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
