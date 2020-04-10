import styled from "styled-components";
import { Tab as RTab } from "react-tabs";

export const Tab = styled(RTab)`
  list-style: none;
  cursor: pointer;
  transform: translateY(6px);

  &&:before {
    content: "";
    display: block;
    height: 0;
    margin-top: -16px;
  }
`;
