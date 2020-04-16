import { AppState } from "root-reducer";

export const selectAccount = (state: AppState) => state.account.entity;

export const selectIsAccountLoading = (state: AppState) => state.account.loading === "pending";
