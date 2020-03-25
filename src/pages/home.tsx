import * as React from "react";
import styled from "styled-components";
import { Header } from "@features/shared/header";

export const Home = () => (
  <HomeWrapper>
    <Header />
    <HomeContainer>Home</HomeContainer>
  </HomeWrapper>
);

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: calc(14px + 2vw);
  color: ${({ theme }) => theme.text};
`;
