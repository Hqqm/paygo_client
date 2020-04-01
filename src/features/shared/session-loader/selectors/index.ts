import { AppState } from "root-reducer";

export const selectIsAccountLoading = (state: AppState) =>
  state.session.fetchingState === "requesting";

export const selectIsAccountAuthenticated = (state: AppState) => state.session.isAuthenticated;
