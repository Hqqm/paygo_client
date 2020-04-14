import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReplenishRequestData } from "./replenish-balance-types";

export const replenishBalanse = createAsyncThunk(
  "account/replenishBalance",
  async ({ id, amount }: ReplenishRequestData) => {
    try {
      const response = await replenishBalanseRequest({ id, amount });
      await checkReplenishErrors(response);
      return amount;
    } catch (err) {
      throw err;
    }
  }
);

const replenishBalanseRequest = async (replanishData: ReplenishRequestData) => {
  return fetch("/server/api/replenishmentBalance", {
    method: "POST",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || "",
    },
    body: JSON.stringify(replanishData),
  });
};

const checkReplenishErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    else throw new Error("Произошла неизвестная ошибка, повторите позже");
  }
};
