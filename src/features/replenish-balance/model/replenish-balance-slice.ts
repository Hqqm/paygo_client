import { ReplenisgBalanceState } from "./replenish-balance-types";
import { createSlice } from "@reduxjs/toolkit";
import { replenishBalanse } from "./replenish-balance-effects";

const initialReplenishState: ReplenisgBalanceState = {
  replenishRequest: "idle",
  replenishErr: null,
};

const replenishBalanceSlice = createSlice({
  name: "replenishBalance",
  initialState: initialReplenishState,
  reducers: {
    resetReplenishState: () => initialReplenishState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(replenishBalanse.pending, (state) => {
        state.replenishRequest = "pending";
      })
      .addCase(replenishBalanse.fulfilled, (state) => {
        state.replenishErr = null;
        state.replenishRequest = "succeeded";
      })
      .addCase(replenishBalanse.rejected, (state, action) => {
        state.replenishRequest = "failed";
        state.replenishErr = action.error.message!;
      });
  },
});

export const {
  reducer,
  actions: { resetReplenishState },
} = replenishBalanceSlice;
