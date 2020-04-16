import { createSlice } from "@reduxjs/toolkit";
import { TranfersState } from "./transfers-types";
import { fetchingTranfers } from "./transfers-effects";

const initialState: TranfersState = {
  entities: [],
  loading: "idle",
};

const tranfserSlice = createSlice({
  name: "tranfers",
  initialState,
  reducers: {},
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

export const { reducer } = tranfserSlice;
