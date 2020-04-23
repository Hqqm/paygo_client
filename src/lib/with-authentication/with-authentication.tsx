import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectIsAccountAuthenticated } from "@features/shared/session/selectors";

export const WithAuthentication: React.FC<{}> = ({ children }) => {
  const isAuthentication = useSelector(selectIsAccountAuthenticated);

  if (!isAuthentication) {
    return <Container>Необходимо войти в аккаунт</Container>;
  }

  return children as React.ReactElement;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 100%;  
`;
