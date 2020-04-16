import { createSlice } from "@reduxjs/toolkit";
import { TransferMoneyState } from "./transfer-money-types";
import { transferMoney } from "./transfer-money-effects";

const initialTransferMoneyState: TransferMoneyState = {
  transferRequest: "idle",
  transferErr: null,
};

const transferMoneySlice = createSlice({
  name: "transferMoney",
  initialState: initialTransferMoneyState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(transferMoney.pending, (state) => {
        state.transferRequest = "pending";
      })
      .addCase(transferMoney.fulfilled, (state) => {
        state.transferRequest = "succeeded";
        state.transferErr = null;
      })
      .addCase(transferMoney.rejected, (state, action) => {
        state.transferRequest = "failed";
        state.transferErr = action.error.message!;
      });
  },
});

export const { reducer } = transferMoneySlice;
