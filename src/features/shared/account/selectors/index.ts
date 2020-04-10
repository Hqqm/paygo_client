import { AppState } from "root-reducer";

export const selectAccount = (state: AppState) => state.account.entity;

export const selectIsAccountLoading = (state: AppState) =>
  state.account.fetchingState === "requesting";

export const selectIsReplenishBalanceLoading = (state: AppState) =>
  state.account.replenishState === "requesting";

export const selectIsReplenishBalanceSuccess = (state: AppState) =>
  state.account.replenishState === "success";
