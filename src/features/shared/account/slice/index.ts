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
  transferState: "none" | "requesting" | "success" | "fail";
  err: string | null;
};

const loadAccountStartReducer: CaseReducer<State, Action<string>> = (state) => {
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

const replenishBalanceStartReducer: CaseReducer<State, Action<string>> = (state) => {
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

const transferMoneyStartReducer: CaseReducer<State, Action<string>> = (state) => {
  state.transferState = "requesting";
  state.err = null;
};

const transferMoneySuccessReducer: CaseReducer<State, PayloadAction<number>> = (state, action) => {
  state.transferState = "success";
  state.err = null;
  state.entity!.balance -= action.payload;
};

const transferMoneyFailureReducer: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.transferState = "fail";
  state.err = action.payload;
};

const initialState: State = {
  entity: null,
  fetchingState: "none",
  replenishState: "none",
  transferState: "none",
  err: null,
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
    replenishBalanceFailure: replenishBalanceFailureReducer,
    transferMoneyStart: transferMoneyStartReducer,
    transferMoneySuccess: transferMoneySuccessReducer,
    transferMoneyFailure: transferMoneyFailureReducer,
  },
});

export const {
  reducer,
  actions: {
    loadAccountStart,
    loadAccountSuccess,
    loadAccountFailure,
    replenishBalanceStart,
    replenishBalanceSuccess,
    replenishBalanceFailure,
    transferMoneyStart,
    transferMoneySuccess,
    transferMoneyFailure,
  },
} = accountSlice;
