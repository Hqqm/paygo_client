import * as React from "react";
import styled from "styled-components";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => (
  <FormContainer>
    <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
  </FormContainer>
);

const FormContainer = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  background: #625772;
  font-size: calc(14px + 0.4vw);
`;
