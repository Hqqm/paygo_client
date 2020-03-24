import * as React from "react";
import { renderRoutes } from "react-router-config";
import { SignUpPage } from "@features/auth/sign-up/sign-up-page";
import { SignInPage } from "@features/auth/sign-in/sign-in-page";

const routes = () => [
  {
    path: "/",
    exact: true,
    component: SignUpPage
  },
  {
    path: "/signIn",
    exact: true,
    component: SignInPage
  }
];

export const Routes = () => <>{renderRoutes(routes())}</>;
