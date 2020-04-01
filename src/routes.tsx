import * as React from "react";
import { renderRoutes } from "react-router-config";
import { Home, SignUpPage, SignInPage } from "pages";

const routes = () => [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/signUp",
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
