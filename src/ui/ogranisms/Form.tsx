import * as React from "react";
import styled from "styled-components";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => (
  <FormWrapper>
    <FormContainer>
      <FormStyled onSubmit={onSubmit}>{children}</FormStyled>
    </FormContainer>
  </FormWrapper>
);

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media (max-width: 500px) {
    display: block;
    background: #3e3e3e;
  }
`;

const FormContainer = styled.div`
  width: 100%;
`;

const FormStyled = styled.form`
  display: grid;
  max-width: 450px;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  background: #3e3e3e;
  font-size: calc(14px + 0.4vw);

  & > h2 {
    font-size: calc(14px + 1.5vw);
    text-align: center;
  }

  & > button {
    font-size: calc(14px + 0.4vw);
    width: 100%;
    margin: 0.5em 0;
  }

  @media (min-width: 1800px) {
    & > h2 {
      font-size: 40px;
    }
    & > button {
      font-size: 18px;
    }
    font-size: 18px;
  }
`;
