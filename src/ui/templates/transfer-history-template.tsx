import * as React from "react";
import styled from "styled-components";

type TransferHistoryTempalteProps = {
  header: React.ReactNode;
  main: React.ReactNode;
};

export const TransferHistoryTempalte = ({ header, main }: TransferHistoryTempalteProps) => (
  <TransferHistoryWrapper>
    {header}
    <TransferHistoryContainer>{main}</TransferHistoryContainer>
  </TransferHistoryWrapper>
);

const TransferHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TransferHistoryContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: start;
`;
