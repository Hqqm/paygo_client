import * as React from "react";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/sign-up-form";
import { AuthTemplate } from "@features/auth/templates/auth-template";
import { Header } from "@features/shared/header";

export const SignUpPage = () => <AuthTemplate header={<Header />} form={<SignUpForm />} />;
