import { createSlice } from "@reduxjs/toolkit";
import { TranfersState } from "./types";
import { fetchingTranfers } from "./transfers-effects";

const initialState: TranfersState = {
  entities: [],
  loading: "idle",
};

const transferSlice = createSlice({
  name: "transfers",
  initialState,
  reducers: {
    resetTransferHistoryState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchingTranfers.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchingTranfers.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchingTranfers.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const {
  reducer,
  actions: { resetTransferHistoryState },
} = transferSlice;
