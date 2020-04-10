import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    fetchingState: "none",
    error: null,
  },
  reducers: {
    loggingIntoAccount: (state) => {
      state.fetchingState = "requesting";
      state.error = null;
    },
    loggedIntoAccount: (state) => {
      state.fetchingState = "success";
      state.error = null;
    },
    loggingIntoAccountError: (state, action) => {
      state.fetchingState = "fail";
      state.error = action.payload.error;
    },
  },
});

export const {
  actions: { loggingIntoAccount, loggedIntoAccount, loggingIntoAccountError },
  reducer,
} = signInSlice;
