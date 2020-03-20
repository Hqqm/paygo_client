import { AppDispatch, AppThunk } from "store";
import {
  registeringAccount,
  registeredAccount,
  registeringAccountError
} from "@features/auth/sign-up/sign-up-slice";

type Account = {
  id: string;
  email: string;
  login: string;
  password: string;
};

export const createAccount = (account: Account): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(registeringAccount());
  try {
    const response = await createAccountRequest(account);
    await checkSignUpErrors(response);
    account = await response.json();
    dispatch(registeredAccount({ account }));
  } catch (err) {
    dispatch(registeringAccountError({ error: err.message }));
  }
};

const createAccountRequest = async (account: Account) => {
  return fetch("/api/auth/signUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(account)
  });
};

const checkSignUpErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    if (errMsg.includes("duplicate key"))
      throw new Error("Данный пользователь уже существует");
    else throw new Error(response.statusText);
  }
};
