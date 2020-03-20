import * as React from "react";
import styled from "styled-components";

type FormProps = {
  title?: string;
  btnText: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ title, btnText, children, onSubmit }: FormProps) => (
  <FormContainer>
    <FormStyled onSubmit={onSubmit}>
      <H2>{title}</H2>
      {children}
      <Button type="submit">{btnText}</Button>
    </FormStyled>
  </FormContainer>
);

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  border-radius: 20px;
  background: #3e3e3e;

  & > :last-child {
    margin-top: 15px;
  }
`;

const H2 = styled.h2`
  margin-top: 5px;
  text-transform: capitalize;
`;

const Button = styled.button`
  background: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #9262fd;
    color: #fff;
  }
`;
