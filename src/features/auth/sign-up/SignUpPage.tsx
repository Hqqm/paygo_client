import * as React from "react";
import { SignUpForm } from "@features/auth/sign-up/ogranisms/SignUpForm";
import { SignUpModal } from "./molecules/SignUpModal";
import { SignUpTemplate } from "./templates/SignUpTemplate";

export const SignUpPage: React.FC = () => (
  <SignUpTemplate form={<SignUpForm />} modal={<SignUpModal />} />
);
