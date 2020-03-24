import * as React from "react";
import styled from "styled-components";

type AuthTemplateProps = {
  header: React.ReactNode;
  form: React.ReactNode;
  modal: React.ReactNode;
};

export const AuthTemplate = ({ header, form, modal }: AuthTemplateProps) => (
  <AuthContainer>
    {header}
    {form && <AuthFormContainer>{form}</AuthFormContainer>}
    {modal}
  </AuthContainer>
);

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AuthFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  @media (max-width: 500px) {
    display: block;
    background: #3e3e3e;
  }
`;
