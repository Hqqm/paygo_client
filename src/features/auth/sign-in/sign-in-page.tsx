import * as React from "react";
import { AuthTemplate } from "../templates/auth-template";
import { Header } from "@features/shared/header";
import { SignInForm } from "./oranisms/sign-in-form";

export const SignInPage = () => (
  <AuthTemplate header={<Header />} form={<SignInForm />} modal={<div></div>} />
);
