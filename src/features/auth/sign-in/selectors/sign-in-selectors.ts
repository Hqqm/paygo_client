import { AppState } from "root-reducer";

export const tokenSelector = (state: AppState) => state.signIn.token;
