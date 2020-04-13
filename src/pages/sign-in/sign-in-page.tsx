import * as React from "react";

import { AuthTemplate } from "@ui/templates/auth-template";
import { Header } from "@features/shared/header";
import { SignInForm } from "pages/sign-in/sign-in-form";

export const SignInPage = () => <AuthTemplate header={<Header />} form={<SignInForm />} />;
