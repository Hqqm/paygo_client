import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as signInReducer } from "@features/auth/sign-in/sign-in-slice";
import { reducer as accountReducer } from "@features/shared/account-loader/account-loader-slice";
import { reducer as themeReducer } from "@features/toggler-theme/toggler-theme-slice";

export const rootReducer = combineReducers({
  account: accountReducer,
  signIn: signInReducer,
  theme: themeReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
