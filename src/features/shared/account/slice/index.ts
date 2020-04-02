import { CaseReducer, PayloadAction, Action, createSlice } from "@reduxjs/toolkit";

export type Account = {
  id: string;
  email: string;
  login: string;
  balance: number;
  createAt: string;
};

type State = {
  entity: Account | null;
  fetchingState: "none" | "requesting" | "success" | "fail";
  replenishState: "none" | "requesting" | "success" | "fail";
  err: string | null;
};

const loadAccountStartReducer: CaseReducer<State, Action<string>> = state => {
  state.fetchingState = "requesting";
  state.err = null;
};

const loadAccountSuccessReducer: CaseReducer<State, PayloadAction<Account>> = (state, action) => {
  state.fetchingState = "success";
  state.entity = action.payload;
  state.err = null;
};

const loadAccountFailureReducer: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.fetchingState = "fail";
  state.err = action.payload;
};

const replenishBalanceStartReducer: CaseReducer<State, Action<string>> = state => {
  state.replenishState = "requesting";
};

const replenishBalanceSuccessReducer: CaseReducer<State, PayloadAction<number>> = (
  state,
  action
) => {
  state.replenishState = "success";
  state.err = null;
  state.entity!.balance += action.payload;
};

const replenishBalanceFailureReducer: CaseReducer<State, PayloadAction<string>> = (
  state,
  action
) => {
  state.replenishState = "fail";
  state.err = action.payload;
};

const initialState: State = {
  entity: null,
  fetchingState: "none",
  replenishState: "none",
  err: null
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    loadAccountStart: loadAccountStartReducer,
    loadAccountSuccess: loadAccountSuccessReducer,
    loadAccountFailure: loadAccountFailureReducer,
    replenishBalanceStart: replenishBalanceStartReducer,
    replenishBalanceSuccess: replenishBalanceSuccessReducer,
    replenishBalanceFailure: replenishBalanceFailureReducer
  }
});

export const {
  reducer,
  actions: {
    loadAccountStart,
    loadAccountSuccess,
    loadAccountFailure,
    replenishBalanceStart,
    replenishBalanceSuccess,
    replenishBalanceFailure
  }
} = accountSlice;
