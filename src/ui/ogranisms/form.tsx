import * as React from "react";
import styled from "styled-components";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => (
  <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
);

const FormStyled = styled.form``;
