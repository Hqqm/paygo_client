import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action
} from "@reduxjs/toolkit";

import { reducer } from "@features/auth/sign-up/sign-up-slice";

const rootReducer = combineReducers({ signUp: reducer });

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production"
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
