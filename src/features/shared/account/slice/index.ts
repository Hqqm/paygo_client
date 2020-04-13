import { CaseReducer, PayloadAction, Action, createSlice } from "@reduxjs/toolkit";
import { loadAccount } from "@features/account-loader/account-loader-api";

export type Account = {
  id: string;
  email: string;
  login: string;
  balance: number;
  createAt: string;
};

type State = {
  entity: Account | null;
  loading: "idle" | "pending" | "succeeded" | "failed";
  replenishState: "none" | "requesting" | "success" | "fail";
  transferState: "none" | "requesting" | "success" | "fail";
  err: string | null;
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

const resetAccountReducer = () => initialState;

const initialState: State = {
  entity: null,
  loading: "idle",
  replenishState: "none",
  transferState: "none",
  err: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccount: resetAccountReducer,
    replenishBalanceStart: replenishBalanceStartReducer,
    replenishBalanceSuccess: replenishBalanceSuccessReducer,
    replenishBalanceFailure: replenishBalanceFailureReducer,
    transferMoneyStart: transferMoneyStartReducer,
    transferMoneySuccess: transferMoneySuccessReducer,
    transferMoneyFailure: transferMoneyFailureReducer,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAccount.pending, (state) => {
        state.loading = "pending";
        state.err = null;
      })
      .addCase(loadAccount.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.err = null;
        state.loading = "succeeded";
      })
      .addCase(loadAccount.rejected, (state, action) => {
        state.err = action.error.message!;
        state.loading = "failed";
      });
  },
});

export const {
  reducer,
  actions: {
    resetAccount,
    replenishBalanceStart,
    replenishBalanceSuccess,
    replenishBalanceFailure,
    transferMoneyStart,
    transferMoneySuccess,
    transferMoneyFailure,
  },
} = accountSlice;
