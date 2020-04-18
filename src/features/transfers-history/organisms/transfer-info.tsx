import * as React from "react";
import styled from "styled-components";
import { Tranfser } from "../model/types";
import { Stack } from "@ui/layouts";

const closeIcon = require("public/close-icon.svg");

type TransferInfoProps = {
  transfer: Tranfser;
  closeTransferInfo: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

export const TransferInfo = ({ transfer, closeTransferInfo }: TransferInfoProps) => (
  <TransferInfoWrapper>
    <Stack space="0.5rem">
      <TransferInfoItem>
        <Span>Номер транзакции:</Span>
        {transfer.id}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>Дата:</Span>
        {transfer.date}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>Сумма:</Span>
        {transfer.amount}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>Комментарий:</Span>
        {transfer.comment}
      </TransferInfoItem>
    </Stack>
    <CloseIconContainer onClick={closeTransferInfo}>
      <img src={closeIcon} alt="close icon" />
    </CloseIconContainer>
  </TransferInfoWrapper>
);

const TransferInfoWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 65%;
  background: #ffffff;
  margin-top: 1rem;
`;

const TransferInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const TransferInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  word-wrap: anywhere;
  padding: 0.5rem 1rem;
`;

const Span = styled.span`
  font-weight: 400;
  color: #999;
  font-size: 1.1rem;
`;

const CloseIconContainer = styled.div`
  position: relative;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
