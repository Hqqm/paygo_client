import { createSlice } from "@reduxjs/toolkit";

const session = createSlice({
  name: "session",
  initialState: {
    account: null,
    isAuthenticated: false,
    fetchingState: "none",
    error: null
  },
  reducers: {
    loadingSession: state => {
      state.fetchingState = "requesting";
    },
    loadedSession: (state, action) => {
      state.fetchingState = "success";
      state.isAuthenticated = true;
      state.error = null;
      state.account = action.payload.account;
    },
    loadingSessionError: (state, action) => {
      state.fetchingState = "fail";
      state.account = null;
      state.isAuthenticated = false;
      state.error = action.payload.error;
    },
    closedSession: state => {
      state.fetchingState = "none";
      state.isAuthenticated = false;
      state.account = null;
    }
  }
});

export const {
  actions: {
    loadingSession,
    loadedSession,
    loadingSessionError,
    closedSession
  },
  reducer
} = session;
