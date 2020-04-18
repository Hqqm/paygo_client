import { createSlice } from "@reduxjs/toolkit";
import { TransferState } from "./types";
import { fetchingTranferById } from "./transfer-effects";

const initialState: TransferState = {
  entity: null,
  loading: "idle",
};

const transferSlice = createSlice({
  name: "currentTransfer",
  initialState,
  reducers: {
    resetCurrentTransferState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchingTranferById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchingTranferById.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchingTranferById.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const {
  reducer,
  actions: { resetCurrentTransferState },
} = transferSlice;
