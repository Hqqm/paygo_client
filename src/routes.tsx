import * as React from "react";
import { renderRoutes } from "react-router-config";
import { HomePage, SignUpPage, SignInPage, MoneyOperationsPage } from "pages";

const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/moneyOperations",
    exact: true,
    component: MoneyOperationsPage
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
