import * as React from "react";
import { SignInForm } from "@features/auth/sign-in/oranisms/sign-in-form";
import { AuthTemplate } from "@features/auth/templates/auth-template";
import { Header } from "@features/shared/header";

export const SignInPage = () => (
  <AuthTemplate header={<Header />} form={<SignInForm />} />
);
