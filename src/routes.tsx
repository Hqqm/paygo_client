import * as React from "react";
import { renderRoutes } from "react-router-config";
import { HomePage, SignUpPage, SignInPage, TransferMoneyPage, TransfersHistoryPage } from "pages";
import { ReplenishBalancePage } from "pages/replenish-balance";

const routes = () => [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/replenishBalance",
    exact: true,
    component: ReplenishBalancePage,
  },
  {
    path: "/transferMoney",
    exact: true,
    component: TransferMoneyPage,
  },
  {
    path: "/tranfersHistory",
    exact: true,
    component: TransfersHistoryPage,
  },
  {
    path: "/signUp",
    exact: true,
    component: SignUpPage,
  },
  {
    path: "/signIn",
    exact: true,
    component: SignInPage,
  },
  {
    path: "/",
    component: () => <div>not found</div>,
  },
];

export const Routes = () => <>{renderRoutes(routes())}</>;
