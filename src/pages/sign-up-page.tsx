import * as React from "react";
import { SignUpModal } from "@features/auth/sign-up/molecules/sign-up-modal";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/sign-up-form";
import { AuthTemplate } from "@features/auth/templates/auth-template";
import { Header } from "@features/shared/header";

export const SignUpPage = () => (
  <AuthTemplate
    header={<Header />}
    form={<SignUpForm />}
    modal={<SignUpModal />}
  />
);
