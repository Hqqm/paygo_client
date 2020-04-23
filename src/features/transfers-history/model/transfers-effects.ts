import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tranfser } from "./types";

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
