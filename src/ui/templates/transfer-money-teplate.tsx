import * as React from "react";
import styled from "styled-components";

type TransferMoneyTemplateProps = {
  header: React.ReactNode;
  main: React.ReactNode;
};

export const TransferMoneyTemplate = ({ header, main }: TransferMoneyTemplateProps) => (
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
`;
