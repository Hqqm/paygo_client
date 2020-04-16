import { createAsyncThunk } from "@reduxjs/toolkit";
import { Account } from "@features/shared/account/account-types";

export const loadAccount = createAsyncThunk(
  "account/load",
  async (): Promise<Account> => {
    try {
      const response = await loadAccountRequest();
      if (!response.ok) throw new Error("Неудалось загрузить аккаунт");
      const account: Account = await response.json();
      return account;
    } catch (err) {
      throw err;
    }
  }
);

const loadAccountRequest = async () => {
  return fetch("server/api/getAccount", {
    method: "GET",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || "",
    },
  });
};
