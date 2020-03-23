import * as React from "react";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/SignUpForm";
import { SignUpModal } from "./molecules/SignUpModal";
import { SignUpTemplate } from "./templates/SignUpTemplate";
import { Header } from "@features/shared/Header";

export const SignUpPage: React.FC = () => (
  <SignUpTemplate
    header={<Header />}
    form={<SignUpForm />}
    modal={<SignUpModal />}
  />
);
