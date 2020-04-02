import * as React from "react";
import styled from "styled-components";
import { Header } from "@features/shared/header";
import { ReplenishForm } from "@features/money-operations/replenish/ogranisms/replenish-form";

export const MoneyOperationsPage = () => (
  <MoneyOperationsPageTempalte
    header={<Header />}
    sidebar={<ReplenishForm />}
    main={<div>перевод</div>}
  />
);

type MoneyOperationsPageTempalteProps = {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
};

const MoneyOperationsPageTempalte = ({
  header,
  sidebar,
  main
}: MoneyOperationsPageTempalteProps) => (
  <MoneyOperationsPageGrid>
    <HeaderArea>{header}</HeaderArea>
    <SidebarArea>
      <SidebarContainer>{sidebar}</SidebarContainer>
    </SidebarArea>
    <MainArea>{main}</MainArea>
  </MoneyOperationsPageGrid>
);

const MoneyOperationsPageGrid = styled.div`
  display: grid;
  grid-template-rows: 67.45px 1fr;
  grid-template-columns: repeat(1fr, 4);
  grid-template-areas:
    "header header header header"
    "sidebar sidebar main main";
  height: 100vh;
`;

const HeaderArea = styled.div`
  grid-area: header;
`;

const MainArea = styled.div`
  grid-area: main;
`;

const SidebarArea = styled.div`
  grid-area: sidebar;
`;

const SidebarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
