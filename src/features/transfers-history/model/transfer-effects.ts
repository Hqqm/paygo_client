import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tranfser } from "./types";

export const fetchingTranferById = createAsyncThunk(
  "currentTransfer/fetchingTranferById",
  async (transferId: string) => {
    const response = await fetch("/server/api/getTransferById", {
      method: "POST",
      headers: {
        "X-Access-Token": localStorage.getItem("token") || "",
      },
      body: JSON.stringify({ id: transferId }),
    });

    const transfer = (await response.json()) as Tranfser;
    return transfer;
  }
);
