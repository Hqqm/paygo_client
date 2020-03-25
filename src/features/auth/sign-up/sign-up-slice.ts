import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    fetchingState: "none",
    error: null
  },
  reducers: {
    registeringAccount: state => {
      state.fetchingState = "requesting";
    },
    registeredAccount: state => {
      state.fetchingState = "success";
      state.error = null;
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
