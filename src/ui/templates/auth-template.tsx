import * as React from "react";
import styled from "styled-components";

type AuthTemplateProps = {
  header: React.ReactNode;
  form: React.ReactNode;
};

export const AuthTemplate = ({ header, form }: AuthTemplateProps) => (
  <AuthWrapper>
    {header}
    <AuthMainContainer>
      {form && (
        <FormContainer>
          <FormContainer2>{form}</FormContainer2>
        </FormContainer>
      )}
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

const FormContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
