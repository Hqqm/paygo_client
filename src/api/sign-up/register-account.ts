import { AppDispatch } from "store";
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

export const registerAccount = (account: Account) => async (
  dispatch: AppDispatch
) => {
  dispatch(registeringAccount());
  try {
    const response = await fetch("/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(account)
    });
    account = await response.json();
    dispatch(registeredAccount({ account }));
  } catch (err) {
    dispatch(registeringAccountError({ error: err.toString() }));
  }
};
