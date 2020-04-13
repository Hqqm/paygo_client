import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as transfersReducer } from "pages/transfers/model/transfer-store";
import { reducer as signInReducer } from "pages/sign-in/model/sign-in-slice";
import { reducer as accountReducer } from "@features/shared/account/slice";
import { reducer as sessionReducer } from "@features/shared/session/slice";
import { reducer as themeReducer } from "@features/toggler-theme/toggler-theme-slice";

export const rootReducer = combineReducers({
  transfers: transfersReducer,
  session: sessionReducer,
  account: accountReducer,
  signIn: signInReducer,
  theme: themeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
