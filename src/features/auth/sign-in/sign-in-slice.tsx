import { createSlice } from "@reduxjs/toolkit";

const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    token: localStorage.getItem("token"),
    fetchingState: "none",
    error: null
  },
  reducers: {
    loggingIntoAccount: state => {
      state.fetchingState = "requesting";
    },
    loggedIntoAccount: (state, action) => {
      state.fetchingState = "success";
      state.error = null;
      state.token = action.payload.token;
    },
    loggingIntoAccountError: (state, action) => {
      state.fetchingState = "fail";
      state.error = action.payload.error;
    },
    logout: state => {
      state.fetchingState = "none";
      state.token = null;
    }
  }
});

export const {
  actions: {
    loggingIntoAccount,
    loggedIntoAccount,
    loggingIntoAccountError,
    logout
  },
  reducer
} = signInSlice;
