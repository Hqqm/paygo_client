import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: null,
    fetchingState: "none",
    error: null
  },
  reducers: {
    loggingIntoAccount: state => {
      state.fetchingState = "requesting";
    },
    loggedIntoAccount: (state, action) => {
      state.fetchingState = "success";
      state.token = action.payload.token;
    },
    loggingIntoAccountError: (state, action) => {
      state.fetchingState = "fail";
      state.error = action.payload.error;
    }
  }
});

export const {
  actions: { loggingIntoAccount, loggedIntoAccount, loggingIntoAccountError },
  reducer
} = signInSlice;
