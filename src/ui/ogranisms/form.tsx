import * as React from "react";
import styled from "styled-components";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => (
  <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
);

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
