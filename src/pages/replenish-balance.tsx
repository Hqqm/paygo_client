import * as React from "react";
import styled from "styled-components";
import { Tabs, TabPanel } from "react-tabs";
import { ReplenisBalancehWithCardForm } from "@features/replenish-balance/ogranisms/replenish-balance-with-card-form";
import { Header } from "@features/shared/header";
import { Text, H2, Tab } from "@ui/atoms";
import { Stack } from "@ui/layouts/stack";
import { Box } from "@ui/layouts/box";
import { TabList } from "@ui/molecules";

export const ReplenishBalancePage = () => (
  <ReplenishBalance>
    <Header />
    <Main>
      <Box pt="m" pl="m">
        <Stack medium>
          <Text fs="2.5rem">Пополнение счета</Text>
          <ReplenishForWrapper>
            <ReplenishFormContainer>
              <Stack medium>
                <H2 align="center">Cпособ оплаты</H2>
                <Tabs>
                  <TabList>
                    <Tab>через карту</Tab>
                    <Tab>через телефон</Tab>
                  </TabList>
                  <TabsPanelWrapper>
                    <TabPanel>
                      <ReplenisBalancehWithCardForm />
                    </TabPanel>
                    <TabPanel>тут форма телефона</TabPanel>
                  </TabsPanelWrapper>
                </Tabs>
              </Stack>
            </ReplenishFormContainer>
          </ReplenishForWrapper>
        </Stack>
      </Box>
    </Main>
  </ReplenishBalance>
);

const ReplenishBalance = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ReplenishFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
`;

const ReplenishForWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TabsPanelWrapper = styled.div`
  margin-top: 1rem;
`;
