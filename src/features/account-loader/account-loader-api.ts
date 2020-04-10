import { AppThunk } from "root-reducer";
import { AppDispatch } from "store";
import {
  Account,
  loadAccountStart,
  loadAccountSuccess,
  loadAccountFailure,
} from "@features/shared/account/slice";
import { loadSession } from "@features/shared/session/slice";

export const loadAccount = (): AppThunk => async (dispatch: AppDispatch) => {
  dispatch(loadAccountStart());
  try {
    const response = await loadAccountRequest();
    if (!response.ok) throw new Error("Неудалось загрузить аккаунт");
    const account: Account = await response.json();
    dispatch(loadAccountSuccess(account));
    dispatch(loadSession());
  } catch (err) {
    dispatch(loadAccountFailure(err.message as string));
  }
};

const loadAccountRequest = async () => {
  return fetch("server/api/getAccount", {
    method: "GET",
    headers: {
      "X-Access-Token": localStorage.getItem("token") || "",
    },
  });
};
