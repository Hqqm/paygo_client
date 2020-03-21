import * as React from "react";
import styled from "styled-components";

type SignUpTemplateProps = {
  form: React.ReactNode;
  modal: React.ReactNode;
};

export const SignUpTemplate = ({ form, modal }: SignUpTemplateProps) => (
  <>
    {form && <SignUpFormWrapper>{form}</SignUpFormWrapper>}
    {modal}
  </>
);

const SignUpFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media (max-width: 500px) {
    display: block;
    background: #3e3e3e;
  }
`;
