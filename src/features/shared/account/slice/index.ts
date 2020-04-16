import { createSlice } from "@reduxjs/toolkit";
import { AccountState } from "../account-types";
import { loadAccount } from "@lib/account-loader/account-loader-effects";
import { replenishBalanse } from "@features/replenish-balance/model/replenish-balance-effects";
import { transferMoney } from "@features/transfer-money/model/transfer-money-effects";

const initialAccountState: AccountState = {
  entity: null,
  loading: "idle",
  err: null,
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
      .addCase(transferMoney.fulfilled, (state, action) => {
        state.entity!.balance -= action.payload;
      })
      .addCase(replenishBalanse.fulfilled, (state, action) => {
        state.entity!.balance += action.payload;
      });
  },
});

export const {
  reducer,
  actions: { resetAccountState },
} = accountSlice;
