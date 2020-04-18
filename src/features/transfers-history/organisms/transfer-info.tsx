import * as React from 'react';
import styled from 'styled-components';
import { Tranfser } from '../model/types';

type TransferInfoProps = {
  transfer: Tranfser
}

export const TransferInfo = ({ transfer }: TransferInfoProps) => (
  <TransferInfoWrapper>
    <TransferInfoContainer>
      <TransferInfoItem>
        <Span>
          Номер транзакции:
        </Span>
        {transfer.id}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>
          Дата:
        </Span>
        {transfer.date}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>
          Сумма:
      </Span>
        {transfer.amount}
      </TransferInfoItem>
      <TransferInfoItem>
        <Span>
          Комментарий:
      </Span>
        {transfer.comment}
      </TransferInfoItem>
    </TransferInfoContainer>
  </TransferInfoWrapper>
)


export const TransferInfoWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 65%;
  background: #ffffff;
  margin-top: 1rem;
`


export const TransferInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`
export const TransferInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  word-wrap: anywhere;
`

export const Span = styled.span`
  font-weight: 400;
  color: #999;
  font-size: 1.1rem;
`