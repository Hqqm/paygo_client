import { AppState } from "root-reducer";

export const selectSignInErr = (state: AppState) => state.signIn.error;

export const selectIsSignInRequesting = (state: AppState) =>
  state.signIn.fetchingState === "requesting";
