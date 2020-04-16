import { createAsyncThunk } from "@reduxjs/toolkit";
import { TransferMoneyData } from "./transfer-money-types";

export const transferMoney = createAsyncThunk(
  "transfers/transferMoney",
  async (transferData: TransferMoneyData) => {
    try {
      const response = await transferMoneyRequest(transferData);
      await checkTransferMoneyErrors(response);
      return transferData.amount;
    } catch (err) {
      throw err;
    }
  }
);

const transferMoneyRequest = (transferData: TransferMoneyData) => {
  return fetch("/server/api/transferMoney", {
    method: "POST",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(transferData),
  });
};

const checkTransferMoneyErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    else throw new Error("Произошла неизвестная ошибка, повторите позже");
  }
};
