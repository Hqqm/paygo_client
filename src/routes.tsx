import * as React from "react";
import { renderRoutes } from "react-router-config";
import { SignUpPage } from "@features/auth/sign-up/sign-up-page";

const routes = () => [
  {
    path: "/",
    exact: true,
    component: SignUpPage
  }
];

export const Routes = () => <>{renderRoutes(routes())}</>;
