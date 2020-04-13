import * as React from "react";

import { SignUpForm } from "pages/sign-up/sign-up-form";
import { AuthTemplate } from "@ui/templates/auth-template";
import { Header } from "@features/shared/header";

export const SignUpPage = () => <AuthTemplate header={<Header />} form={<SignUpForm />} />;
