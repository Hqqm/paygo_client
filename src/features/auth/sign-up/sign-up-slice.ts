import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    account: null,
    fetchingState: "none",
    error: null
  },
  reducers: {
    registeringAccount: state => {
      state.fetchingState = "requesting";
    },
    registeredAccount: (state, action) => {
      state.fetchingState = "success";
      state.account = action.payload.account;
    },
    registeringAccountError: (state, action) => {
      state.fetchingState = "fail";
      state.error = action.payload.error;
    }
  }
});

export const {
  actions: { registeringAccount, registeredAccount, registeringAccountError },
  reducer
} = signUpSlice;
