import styled from "styled-components";
import { TabList as ExternalTabsList } from "react-tabs";

export const TabList = styled(ExternalTabsList)`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  & > * + * {
    margin-left: 1rem;
  }
`;
