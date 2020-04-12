import { createSlice } from "@reduxjs/toolkit";
import { signInIntoAccount } from "./services/sign-in-api";

type signInState = {
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

const initialState: signInState = {
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
