import * as React from "react";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/sign-up-form";
import { SignUpModal } from "./molecules/sign-up-modal";
import { AuthTemplate } from "../templates/auth-template";
import { Header } from "@features/shared/header";

export const SignUpPage: React.FC = () => (
  <AuthTemplate
    header={<Header />}
    form={<SignUpForm />}
    modal={<SignUpModal />}
  />
);
