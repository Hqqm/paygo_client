import * as React from "react";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/sign-up-form";
import { SignUpModal } from "./molecules/sign-up-modal";
import { SignUpTemplate } from "./templates/sign-up-template";
import { Header } from "@features/shared/header";

export const SignUpPage: React.FC = () => (
  <SignUpTemplate
    header={<Header />}
    form={<SignUpForm />}
    modal={<SignUpModal />}
  />
);
