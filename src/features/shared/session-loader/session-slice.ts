import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type Account = {
  id: string;
  email: string;
  login: string;
  balance: BigInteger;
  createAt: string;
};

type State = {
  account: Account | null;
  isAuthenticated: boolean;
  fetchingState: "none" | "requesting" | "success" | "fail";
  error: string | null;
};

const loadingSession: CaseReducer<State> = state => {
  state.fetchingState = "requesting";
};

const loadedSession: CaseReducer<State, PayloadAction<Account>> = (state, action) => {
  state.fetchingState = "success";
  state.isAuthenticated = true;
  state.error = null;
  state.account = action.payload;
};

const loadingSessionError: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.fetchingState = "fail";
  state.account = null;
  state.isAuthenticated = false;
  state.error = action.payload;
};

const closedSession: CaseReducer<State> = state => {
  state.fetchingState = "none";
  state.isAuthenticated = false;
  state.account = null;
};

const initialState: State = {
  account: null,
  isAuthenticated: false,
  fetchingState: "none",
  error: null
};

export const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    loadingSession,
    loadedSession,
    loadingSessionError,
    closedSession
  }
});

export const { reducer } = session;
