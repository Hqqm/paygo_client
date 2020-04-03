import { AppThunk } from "root-reducer";
import { history } from "@lib/history";
import { AppDispatch } from "store";
import { loggingIntoAccount, loggingIntoAccountError, loggedIntoAccount } from "../sign-in-slice";
import { loadAccount } from "@features/account-loader/account-loader-api";
import { createSession } from "@features/shared/session/slice";

export type SignInFormData = {
  login: string;
  password: string;
};

export const signInIntoAccount = ({ login, password }: SignInFormData): AppThunk => async (
  dispatch: AppDispatch
) => {
  dispatch(loggingIntoAccount());
  try {
    const reponse = await signInIntoAccountRequest({ login, password });
    await checkSignInErrors(reponse);
    const data = await reponse.json();
    dispatch(loggedIntoAccount());
    localStorage.setItem("token", data.token);
    dispatch(loadAccount());
    dispatch(createSession(data.token));
    history.push("/");
  } catch (err) {
    dispatch(loggingIntoAccountError({ error: err.message }));
  }
};

const signInIntoAccountRequest = async (formData: SignInFormData) => {
  return fetch("/server/auth/signIn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
};

const checkSignInErrors = async (response: Response) => {
  if (!response.ok) {
    const errMsg = await response.text();
    if (errMsg.includes("incorrect login or password"))
      throw new Error("Неправильный логин или пароль");
    if (errMsg.includes("Error occured while trying to proxy"))
      throw new Error("Ошибка соединения с сервером");
    else throw new Error("Произошла неизвестная ошибка, повторите позже");
  }
};
