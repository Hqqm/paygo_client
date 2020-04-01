import { AppState } from "root-reducer";

export const selectToken = (state: AppState) => state.signIn.token;
export const selectSignInErr = (state: AppState) => state.signIn.error;
export const selectIsSignInRequesting = (state: AppState) =>
  state.signIn.fetchingState === "requesting";
