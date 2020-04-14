import { createSlice } from "@reduxjs/toolkit";
import { AccountState } from "../account-types";
import { loadAccount } from "@features/account-loader/account-loader-effects";
import { replenishBalanse } from "@features/replenish-balance/model/replenish-balance-effects";
import { transferMoney } from "@features/transfer-money/model/transfer-money-effects";

const initialAccountState: AccountState = {
  entity: null,
  loading: "idle",
  err: null,
  replenishRequest: "idle",
  replenishErr: null,
  transferRequest: "idle",
  transferErr: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    resetAccountState: () => initialAccountState,
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
      })
      .addCase(replenishBalanse.pending, (state) => {
        state.replenishRequest = "pending";
      })
      .addCase(replenishBalanse.fulfilled, (state, action) => {
        state.err = null;
        state.entity!.balance += action.payload;
        state.replenishRequest = "succeeded";
      })
      .addCase(replenishBalanse.rejected, (state, action) => {
        state.transferRequest = "failed";
        state.replenishErr = action.error.message!;
      })
      .addCase(transferMoney.pending, (state) => {
        state.transferRequest = "pending";
      })
      .addCase(transferMoney.fulfilled, (state, action) => {
        state.transferRequest = "succeeded";
        state.err = null;
        state.entity!.balance -= action.payload;
      })
      .addCase(transferMoney.rejected, (state, action) => {
        state.transferRequest = "failed";
        state.transferErr = action.error.message!;
      });
  },
});

export const {
  reducer,
  actions: { resetAccountState },
} = accountSlice;
