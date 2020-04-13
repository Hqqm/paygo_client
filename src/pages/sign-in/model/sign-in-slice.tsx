import { createSlice } from "@reduxjs/toolkit";

import { SignInState } from "./sign-in-types";
import { signInIntoAccount } from "./sign-in-effects";

const initialState: SignInState = {
  loading: "idle",
  error: null,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInIntoAccount.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(signInIntoAccount.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(signInIntoAccount.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message!;
      });
  },
});

export const { reducer } = signInSlice;
