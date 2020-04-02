import { createSlice, CaseReducer, PayloadAction, Action } from "@reduxjs/toolkit";

type State = {
  token: string | null;
  isAuthenticated: boolean;
};

const createSessionReducer: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.token = action.payload;
  state.isAuthenticated = true;
};

const loadSessionReducer: CaseReducer<State, Action<string>> = state => {
  state.isAuthenticated = true;
};

const closedSessionReducer: CaseReducer<State, Action<string>> = state => {
  state.isAuthenticated = false;
  state.token = null;
};

const initialState: State = {
  token: localStorage.getItem("token"),
  isAuthenticated: false
};

const session = createSlice({
  name: "session",
  initialState,
  reducers: {
    createSession: createSessionReducer,
    loadSession: loadSessionReducer,
    closedSession: closedSessionReducer
  }
});

export const {
  reducer,
  actions: { createSession, loadSession, closedSession }
} = session;
