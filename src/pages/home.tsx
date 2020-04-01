import * as React from "react";
import styled from "styled-components";
import { Header } from "@features/shared/header";
import { Box } from "@ui/layouts/box";
import { H2 } from "@ui/atoms";

export const Home = () => (
  <HomeWrapper>
    <Header />
    <HomeContainer>
      <Box>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
        <H2>paygo</H2>
      </Box>
    </HomeContainer>
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
  color: #f9a1bc;
`;
