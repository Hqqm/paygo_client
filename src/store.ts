import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "@features/auth/sign-up/sign-up-slice";

export const store = configureStore({
  reducer: {
    signUp: reducer
  },
  devTools: process.env.NODE_ENV !== "production"
});

export type AppDispatch = typeof store.dispatch;
