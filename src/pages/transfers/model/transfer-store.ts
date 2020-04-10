import { Tranfser } from "./types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type TranfersState = {
  entities: Tranfser[];
  loading: "idle" | "pending" | "succeeded" | "failed";
};

const initialState: TranfersState = {
  entities: [],
  loading: "idle",
};

export const fetchingTranfers = createAsyncThunk("tranfsers/fetchingTranfers", async () => {
  const response = await fetch("/server/api/transfersHistory", {
    method: "GET",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || "",
    },
  });
  const transfers = (await response.json()) as Tranfser[];
  return transfers;
});

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
      .addCase(fetchingTranfers.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const { reducer } = tranfserSlice;
