import * as React from "react";
import styled from "styled-components";

type SignUpTemplateProps = {
  header: React.ReactNode;
  form: React.ReactNode;
  modal: React.ReactNode;
};

export const SignUpTemplate = ({
  header,
  form,
  modal
}: SignUpTemplateProps) => (
  <SignUpWrapper>
    {header}
    {form && <SignUpFormWrapper>{form}</SignUpFormWrapper>}
    {modal}
  </SignUpWrapper>
);

const SignUpWrapper = styled.div`
  display: block;
  height: 100vh;
`;

const SignUpFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 51px);

  @media (max-width: 500px) {
    display: block;
    background: #3e3e3e;
  }
`;
