import { AppState } from "root-reducer";

export const isAccountLoadingSelector = (state: AppState) =>
  state.account.fetchingState === "requesting";

export const isAccountAuthenticatedSelector = (state: AppState) =>
  state.account.isAuthenticated;
