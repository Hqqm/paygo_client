import { combineReducers, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as transfersReducer } from "@features/transfers-history/model/transfers-slice";
import { reducer as signInReducer } from "pages/sign-in/model/sign-in-slice";
import { reducer as replenishBalanceReducer } from "@features/replenish-balance/model/replenish-balance-slice";
import { reducer as transferMoneyReducer } from "@features/transfer-money/model/transfer-money-slice";
import { reducer as accountReducer } from "@features/shared/account/slice";
import { reducer as sessionReducer } from "@features/shared/session/slice";
import { reducer as themeReducer } from "@lib/toggler-theme/toggler-theme-slice";

export const rootReducer = combineReducers({
  transfers: transfersReducer,
  session: sessionReducer,
  replenishBalance: replenishBalanceReducer,
  transferMoney: transferMoneyReducer,
  account: accountReducer,
  signIn: signInReducer,
  theme: themeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
