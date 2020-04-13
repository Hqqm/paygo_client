import { AppDispatch } from "store";
import { AppThunk } from "root-reducer";
import {
  transferMoneyStart,
  transferMoneySuccess,
  transferMoneyFailure,
} from "@features/shared/account/slice";

export type TransferMoneyData = {
  id: string;
  recipient_login: string;
  amount: number;
  comment: string;
};

export const transferMoney = (transferData: TransferMoneyData): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(transferMoneyStart());
  try {
    const response = await transferMoneyRequest(transferData);
    await checkTransferMoneyErrors(response);
    dispatch(transferMoneySuccess(transferData.amount));
  } catch (err) {
    dispatch(transferMoneyFailure(err.message as string));
  }
};

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
