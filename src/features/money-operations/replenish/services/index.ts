import { AppThunk } from "root-reducer";
import { AppDispatch } from "store";
import {
  replenishBalanceStart,
  replenishBalanceSuccess,
  replenishBalanceFailure,
} from "@features/shared/account/slice";

export type ReplenishRequestData = {
  id: string;
  amount: number;
};

export const replenishBalanse = ({ id, amount }: ReplenishRequestData): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(replenishBalanceStart());
  try {
    const response = await replenishBalanseRequest({ id, amount });
    await checkReplenishErrors(response);
    dispatch(replenishBalanceSuccess(amount));
  } catch (err) {
    dispatch(replenishBalanceFailure(err.message as string));
  }
};

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
