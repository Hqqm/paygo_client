import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as signInReducer } from "@features/auth/sign-in/sign-in-slice";
import { reducer as sessionReducer } from "@features/shared/session-loader/session-slice";
import { reducer as themeReducer } from "@features/toggler-theme/toggler-theme-slice";

export const rootReducer = combineReducers({
  session: sessionReducer,
  signIn: signInReducer,
  theme: themeReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
