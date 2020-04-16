import { AppState } from "root-reducer";

export const selectIsReplenishBalanceLoading = (state: AppState) =>
  state.replenishBalance.replenishRequest === "pending";

export const selectIsReplenishBalanceSuccess = (state: AppState) =>
  state.replenishBalance.replenishRequest === "succeeded";
