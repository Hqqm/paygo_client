import * as React from "react";
import styled from "styled-components";

type AuthTemplateProps = {
  header: React.ReactNode;
  form: React.ReactNode;
  modal?: React.ReactNode;
};

export const AuthTemplate = ({ header, form, modal }: AuthTemplateProps) => (
  <AuthWrapper>
    {header}
    <AuthMainContainer>
      {form && <FormContainer>{form}</FormContainer>}
      {modal}
    </AuthMainContainer>
  </AuthWrapper>
);

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const AuthMainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.body};
`;

const FormContainer = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;
