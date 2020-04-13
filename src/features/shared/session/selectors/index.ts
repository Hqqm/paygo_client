import { AppState } from "root-reducer";

export const selectIsAccountAuthenticated = (state: AppState) => state.session.isAuthenticated;

export const selectToken = (state: AppState) => state.session.token;
