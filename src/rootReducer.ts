import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as signUpReducer } from "@features/auth/sign-up/sign-up-slice";
import { reducer as signInReducer } from "@features/auth/sign-in/sign-in-slice";
import { reducer as themeReducer } from "@features/toggler-theme/toggler-theme-slice";

export const rootReducer = combineReducers({
  signUp: signUpReducer,
  signIn: signInReducer,
  theme: themeReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
