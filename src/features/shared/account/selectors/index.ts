import { AppState } from "root-reducer";

export const selectLogin = (state: AppState) => state.account.entity!.login;

export const selectBalance = (state: AppState) => state.account.entity!.balance;

export const selectIsAccountLoading = (state: AppState) =>
  state.account.fetchingState === "requesting";

export const selectIsReplenishBalanceLoading = (state: AppState) =>
  state.account.replenishState === "requesting";

export const selectIsReplenishBalanceSuccess = (state: AppState) =>
  state.account.replenishState === "success";
