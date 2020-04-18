import * as React from "react";
import styled from "styled-components";
import { Tranfser } from "../model/transfers-types";
import { Inline, Stack } from "@ui/layouts";
import { Text } from "@ui/atoms";

type TransferHistoryProps = {
  transfers: Tranfser[];
};

export const TransferHistory = ({ transfers }: TransferHistoryProps) => {
  return (
    <TransferHistoryContainer>
      <Stack small>
        {transfers.map((transfer) => (
          <Transfer key={transfer.id}>
            <Inline medium align-items="center">
              <DateContainer>
                <Text align="center">{transfer.date}</Text>
              </DateContainer>
              {isReplenishOperation(transfer)}
            </Inline>
          </Transfer>
        ))}
      </Stack>
    </TransferHistoryContainer>
  );
};

const paymentSystems = ["Paygo"];

const isReplenishOperation = (transfer: Tranfser) =>
  paymentSystems.includes(transfer.sender_login) ? (
    <>
      <TransferItem>
        <Text>{transfer.sender_login}, пополнение баланса</Text>
      </TransferItem>
      <TransferItem>
        <Text color="#1e7100" fs="1.2rem">
          +{transfer.amount} ₽
        </Text>
      </TransferItem>
    </>
  ) : (
    <>
      <TransferItem>
        <Text>{transfer.recipient_login}</Text>
      </TransferItem>
      <TransferItem>
        <Text color="#ce0000" fs="1.2rem">
          -{transfer.amount} ₽
        </Text>
      </TransferItem>
    </>
  );

const TransferHistoryContainer = styled.ul`
  display: flex;
  width: 100%;
  font-size: 1rem;
  margin: 0;
  padding: 1rem;
  min-width: 350px;
  width: 80%;
`;

const Transfer = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  background: #ffffff;
  height: 100px;
  padding: 0.5rem 1rem;
`;

const TransferItem = styled.div`
  display: flex;
  flex-direction: column;

  &:nth-child(2) {
    flex-grow: 1;
  }
`;

const DateContainer = styled.div`
  width: 90px;
  text-align: center;
`;
